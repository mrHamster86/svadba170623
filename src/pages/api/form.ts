import type { NextApiRequest, NextApiResponse } from 'next';

type DataRes = {
    status: string
};

type DataReq = {
    name: string;
    phone: string;
    zags: boolean;
    banket: boolean;
    questions: string;
};

const dictionary: Record<string, string> = {
    name: '<b>Имя</b>:',
    phone: '<b>Телнфон</b>:',
    zags: '<b>Буду в ЗАГСе</b>:',
    banket: '<b>Приеду на банкет</b>:',
    questions: '<b>Вопросы</b>:',
};

const convertBoolean = (value: boolean): string => value ? 'Да' : 'Нет';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<DataRes>
) {
    const config = require('.tokens/telegram.json');
    const reqBody: Record<string, string | boolean> = req.body;

    const msg = Object.keys(reqBody).map(key => {
        const value = reqBody[key];

        return `${dictionary[key]} ${typeof value === 'boolean' ? convertBoolean(value) : value}`;
    }).join('%0A');

    const link = `https://api.telegram.org/bot${config.telegram.token}/sendMessage?chat_id=${config.telegram.chat}&parse_mode=html&text=${msg}`;

    fetch(link, {
        method: 'POST',
        body: msg,
    }).then(response => {
        if (response.status === 200) {
            res.status(200).json({ status: 'ok' });
        }

        if (response.status !== 200) {
            res.status(400).json({ status: 'error' });
        }
    });
}
