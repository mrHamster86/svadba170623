import { useForm, Controller } from 'react-hook-form';

import { Input } from '@/components/Input/Input';
import { Checkbox } from '@/components/Checkbox/Checkbox';
import { Textarea } from '@/components/Textarea/Textarea';

import styles from './Form.module.scss';

type FormData = {
  name: string;
  phone: string;
  zags: boolean;
  banket: boolean;
  questions: string;
};

export const Form = () => {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: '',
      phone: '',
      zags: false,
      banket: false,
      questions: '',
    }
  });

  const onSubmit = async (data: FormData) => {
    const req = await fetch('/api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
    >
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <Textarea
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
            id="phone"
            label="Номер телефона"
            placeholder="Номер телефона для связи"
            required
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
            placeholder="Остались вопросы? Напишите здесь и мы с вами свяжемся"
            {...field}
          />
        )}
      />
      <button type="submit">Submit</button>
    </form>
  )
};