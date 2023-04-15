import { useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { Input } from '@/components/Input/Input';
import { Checkbox } from '@/components/Checkbox/Checkbox';
import { Textarea } from '@/components/Textarea/Textarea';

import styles from './Form.module.scss';
import { useTimer } from 'use-timer';

type FormData = {
  name: string;
  phone: string;
  email: string;
  zags: boolean;
  banket: boolean;
  questions: string;
};

export const Form = () => {
  const [editForm, setEditForm] = useState(true);
  const { time, start, pause } = useTimer();
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      zags: false,
      banket: false,
      questions: '',
    }
  });

  const onSubmit = async (data: FormData) => {
    if (time < 2 || data.email) {
      pause();
      return;
    }
  
    const req = await fetch('/api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data),
    }).then(() => setEditForm(false));
  };

  const hanlerChange = () => {
    if (!time) {
      start();
    }

    if (!editForm) {
      setEditForm(true);
    }
  };

  return (
    <div id='feedback' className={styles.block}>
      <div className={styles.wrapper}>
        <div className={styles.titleBlock}>
          <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: 'Готовы&nbsp;радоваться вместе&nbsp;с&nbsp;нами?' }} />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          onChange={hanlerChange}
          className={styles.form}
        >
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                id="name"
                label="Ваше имя и фамилия"
                placeholder="Ваше имя и фамилия"
                description="Если вы планируете быть не один, просьба написать имена через запятую"
                required
                {...field}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <Input
                required
                id="phone"
                label="Номер телефона"
                placeholder="Номер телефона для связи"
                mask="+7 (999) 999-99-99"
                pattern="\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}"
                {...field}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                hidden
                id="email"
                label="Email"
                placeholder="Адресс электронной почты"
                {...field}
              />
            )}
          />
          <Controller
            name="zags"
            control={control}
            render={({ field }) => (
              <Checkbox
                id="zags"
                label="Буду в ЗАГСе"
                {...field}
              />
            )}
          />
          <Controller
            name="banket"
            control={control}
            render={({ field }) => (
              <Checkbox
                id="banket"
                label="Приеду на банкет"
                {...field}
              />
            )}
          />
          <Controller
            name="questions"
            control={control}
            render={({ field }) => (
              <Textarea
                id="questions"
                label="Вопросы"
                rows={7}
                placeholder="Остались вопросы? Напишите здесь и мы с вами свяжемся"
                {...field}
              />
            )}
          />
          <button type="submit" className={styles.button} disabled={!editForm}>{editForm ? 'Отправить' : 'Успешно отправлено'}</button>
        </form>
      </div>
    </div>
  )
};