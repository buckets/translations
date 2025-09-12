import * as React from 'react'

import { ILangPack } from '@iffycan/i18n'
import { IMessages } from './base'

// Contributors, include your name and optionally a link to
// a website as you want it to appear in any credits.
const contributors = [
  {
    name: "Yahor Haurylenka",
    href: "https://www.facebook.com/k1llo/", /* optional */
  },
  {
    name: "Aliaksiej Homza",
    href: "https://x.com/GomZik", /* optional */
  },
];

const messages:IMessages = {
  "\n        Though filling out this form is preferrable, you can also email bugs@budgetwithbuckets.com\n      ": {
    val: "\n        Хаця запаўненне гэтай формы пажадана, вы таксама можаце адправіць па электроннай пошце bugs@budgetwithbuckets.com\n      ",
    translated: true,
    h: "05fPQ/cX0e4UXnYsbNTo8b6FUwq/WZ1URc7ixr6WlV8=",
  },
  "(Blank)": {
    /* Label for things that are blank */
    /* Label for things that are blank */
    val: "(Blank)",
    translated: false,
    h: "zYRwxSqiVmaHvp3Ra8DQeYHJW50oqXUf4Jz4UvXRs4U=",
  },
  "(Drop files or click)": {
    val: "(Перацягніце файлы або націсніце)",
    translated: true,
    h: "cn8vjUpkolK+X1qsHPyR11Qj7uQWZVR6eWnhPRb/zfw=",
  },
  "(If you want a response)": {
    val: "(Калі вы хочаце атрымаць адказ)",
    translated: true,
    h: "Ij4mQm0L5WO4Iunvl3fKwbhLwjTodc3Chq81GsFM+T0=",
  },
  "(easiest)": {
    val: "(найпрасцейшы)",
    translated: true,
    h: "mvpASP1TOoS7w7iXoO7ThUyiPKnrtytWyDC2XJ1WReE=",
  },
  "(optional)": {
    val: "(дадаткова)",
    translated: true,
    h: "njVpYkgCdiB755Pxnsk1D8GELOWqw1mBBYG+YQr7e98=",
  },
  "/mo": {
    val: "/месяц",
    translated: true,
    h: "ggq7na5vMB1wOjQQo0Wq0o7ctwbMUiiJr1tRRKphHss=",
  },
  "A sync is already in progress": {
    val: "Сінхранізацыя ўжо ў працэсе",
    translated: true,
    h: "z6CqgxENo0xxB0LPp8P8rmnLPp1m2NElecEaJM8GDfI=",
  },
  "About Buckets": {
    /* 'Buckets' refers to the application name */
    val: "Пра Buckets",
    translated: true,
    h: "9bzPsx+kCkNUeLTSVjaygyWCkm3VCdsFaAFRvdS+xEU=",
  },
  "Accept EULA": {
    val: "Прыняць ліцэнзійнае пагадненне",
    translated: true,
    h: "2TWZMBgBGQU/CoeXRW5NR1b0AT4yW/zrLyRpUGWBQn8=",
  },
  "Account": {
    val: "Рахунак",
    translated: true,
    h: "ihCgI4A9UaFZ63kuiKXqFHoGsze2dYwzpgSVU0clMfQ=",
  },
  "Account Transactions": {
    val: "Аперацыі па рахунку",
    translated: true,
    h: "GPJhFDki3xJdCOMqCkqdUDX7SfEZcg9wGee8KMIuIno=",
  },
  "Account and transactions deleted": {
    val: "Рахунак і транзакцыі выдалены",
    translated: true,
    h: "iwS2+dAqfDOEtU5SUm1d1oPFTe0+JT5NCm4nH2SrglE=",
  },
  "Account closed": {
    val: "Рахунак закрыты",
    translated: true,
    h: "l9xs5wLKF3KIgunL1SJh9r9XDYpWkC7LYrL4KUUFm3M=",
  },
  "Account deleted completely": {
    val: "Рахунак цалкам выдалены",
    translated: true,
    h: "LswJ+SxzkHRVy6+Et4Wga6r/Io1P6MBlTiwdjUAUj48=",
  },
  "Account mapping": {
    /* Noun describing import details that map to an account */
    val: "Account mapping",
    translated: false,
    h: "utrzN1AM7WMltloEYtQSoFhx5O5Zf4u6M2p33kntCXM=",
  },
  "Accounts": {
    val: "Рахункі",
    translated: true,
    h: "1oHDkv2zB1yiCABVTWBY5oX4Ccu36nJBCG7Q+JVg8TA=",
  },
  "Accounts in side bar": {
    val: "Рахункі ў бакавой панэлі",
    translated: true,
    h: "BsDoJS2nPDKya2do9fNF2o2jl0mIUxjdBycHbmsu6HY=",
  },
  "Action": {
    val: "Action",
    translated: false,
    h: "XvzB5DfL6tpSZT8TMSHzyiWbhLdKUeFcJ3tN6T8RvXU=",
  },
  "Actions": {
    val: "Дзеянні",
    translated: true,
    h: "qm2CvbPMHZpeVCriZp/vJ2kAGatdeyDxfZ8TMaapQvo=",
  },
  "Activity": {
    /* Noun, label for a bucket's usage (income/expenses) for a period */
    val: "Актыўнасць",
    translated: true,
    h: "jfKSYDWvDxzcenHtImEM9HokIu7tBJbMki25BNTynTI=",
  },
  "Actual Size": {
    val: "Фактычны памер",
    translated: true,
    h: "k1ZfUj7bmT4XwiALRlZo7ztl2d+e7JcLt3WCnvjpBYg=",
  },
  "Advanced settings": {
    val: "Дадатковыя налады",
    translated: true,
    h: "oQ0ic6e7zWfGl55WCEVG2QbtvynCSY0WyVPEdEA15q4=",
  },
  "Agreements": {
    /* Label for page with Terms of Use type agreements */
    val: "Пагадненні",
    translated: true,
    h: "RJ//uETg43dMDTum+jM/26gJUl1X/TzlcrmBmETZxtc=",
  },
  "All Files": {
    /* Label for letting users select any file for import regardless of extension */
    /* Label for letting users select any file for import regardless of extension */
    /* Label for letting users select any file for import regardless of extension */
    /* Label for letting users select any file for import regardless of extension */
    val: "Усе файлы",
    translated: true,
    h: "xP+YqxC7o4/NEWANvugOAGzJXIF368ZNwle6rV7nVRg=",
  },
  "Allow new connections": {
    val: "Дазволіць новыя злучэнні",
    translated: true,
    h: "MGoLxui/5J17owbWiAA17QPnQkrBZ2bExUfiXFBaC+8=",
  },
  "Amount": {
    val: "Сума",
    translated: true,
    h: "DHNNaJF4hWTWIFdaMdMhUT4aSdti7ZfaNexABzxWWzc=",
  },
  "Amount of money over-allocated in buckets.": {
    val: "Залішняя сума грошай у вёдрах.",
    translated: true,
    h: "kFucvPefN9Kae7dArnle8i0rTZZq1U+3d8w81lDNVKw=",
  },
  "Analysis": {
    val: "Аналіз",
    translated: true,
    h: "+LNAOPSLW2rpFCrT+U1suhdnoYyZa1k8ALddRlddDlI=",
  },
  "Animation": {
    /* Label for application preference enabling/disabling animations */
    val: "Анімацыі",
    translated: true,
    h: "Vk4XaMgXNIEY4+Gcal1n+qdnamgr4Q5af/+wzFRoIHU=",
  },
  "Any other monthly bills you have?": {
    val: "Ці ёсць у вас яшчэ штомесячныя рахункі?",
    translated: true,
    h: "rmA9D10bvYOVj3U4kE7U6jALpz7WpqBJTv6HZaI4T/M=",
  },
  "App Settings": {
    val: "Налады праграмы",
    translated: true,
    h: "bk/DqvzHJTuksZnC0cWC2+KPOwsnilgNjXSPLv1SbPA=",
  },
  "As of": {
    /* Label for timestamp on a document */
    val: "As of",
    translated: false,
    h: "AONctcFQnUGl+zc/NhrnGa7CfTpqu3E92stXUc93EEU=",
  },
  "Assets": {
    val: "Рэсурсы",
    translated: true,
    h: "VBLBowZo0Lx8GWGbWVcEEFzSxnwQmcEOSxwtD5yIhwQ=",
  },
  "Attached files are too large.": {
    val: "Прымацаваныя файлы занадта вялікія.",
    translated: true,
    h: "HfDI7uw+P4uLUPkDu0rxQhxJqjqcriWmD9EWYaiUqvY=",
  },
  "Authenticated": {
    val: "Аўтэнтыфікаваны",
    translated: true,
    h: "qFkX9LG17MNSZOEH8+oXRLvO9La2Ph/uzSCZn7/FPHg=",
  },
  "Authenticating": {
    val: "Аўтэнтыфікацыя",
    translated: true,
    h: "7Sf5Nv5dGmsCdcFHDTi6IdPNrr7sui7KirEdQpUMd7I=",
  },
  "Authentication": {
    val: "Аўтэнтыфікацыя",
    translated: true,
    h: "NAlBsTsQWu6FaPj3Q2Iyd12M/7PEA4UYqE+gj4dHkZA=",
  },
  "Automatic": {
    /* Option for theme preference indicating that the system will choose between light and dark */
    val: "Automatic",
    translated: false,
    h: "0YA2t1ssPk8k4xaICpB9//fM3ol0d/FeOVb6dCD0ux8=",
  },
  "Available version": {
    /* Label for version available to upgrade Buckets to */
    val: "Даступная версія",
    translated: true,
    h: "dPTYVfj33eBbVAOPN62sq/SkzXeFqTiSSeGbq7RT8ns=",
  },
  "Avenue available": {
    val: "Avenue даступна",
    translated: true,
    h: "0ZTppZemkrqVd6lIxbRj8UJat3meVAiWkM22EaiH5eg=",
  },
  "Avenue closed": {
    val: "Avenue закрыта",
    translated: true,
    h: "E7OVHGkfKw0NKIt4PXlc0AQqXkllTGiKAqnilsHEzUE=",
  },
  "Avenue opened": {
    val: "Avenue адкрыта",
    translated: true,
    h: "3UKUOWH4r70ixbYNjwWI7kEXLVPY/H62HsX7AypQ1D8=",
  },
  "Avenue type": {
    val: "Тып Avenue",
    translated: true,
    h: "m88+08lu2BgvX8BFsKwDKo/bYeJbqlIkmK5GD9AbD9s=",
  },
  "Avenue unavailable": {
    val: "Avenue недаступна",
    translated: true,
    h: "cDAq+7ZyrtyC7zRkvSBe9Ob6LBn4eVkqXRT7Y3Bau3U=",
  },
  "Avenues": {
    val: "Avenues",
    translated: true,
    h: "Jyyh8MGvKZoZXXZkPyMrHYEAAyTOt+V8Kao2KKQtS6k=",
  },
  "Avenues are what you use to connect your devices together so you can send your budget from one device to another.": {
    val: "Avenue гэта тое што дазваляе злучаць вашыя прылады разам, дзякуючы гэтаму вы можаце адправіць свае бюджэты з адной прылады на іншую.",
    translated: true,
    h: "XbtezQPrPTjwRYWch5a1SMCG3WCcDTCs0PlLzxyPRcY=",
  },
  "Average": {
    val: "У сярэднім",
    translated: true,
    h: "zLxQhptvlIYtt0l/prvWMqnsQHh7N1gxh33WeorRi2w=",
  },
  "Avg:": {
    val: "Сяр:",
    translated: true,
    h: "EVMZyhHQEFPlI2ib8VqTJo25bJBk8gHsgZR1SZ2Jcj0=",
  },
  "Babysitting": {
    val: "Дагляд за дзецьмі",
    translated: true,
    h: "yOfOnHbye/Uhao1fb5jtfP4z0XPyc757kdBFt32Uwrc=",
  },
  "Backup file": {
    /* Label for backup file selector */
    val: "Файл рэзервовай копіі",
    translated: true,
    h: "HF5523dI/DYBC0mgunrYA58CSFMjLy0eMYOIgDnftyQ=",
  },
  "Backup folder": {
    /* Label for application preference of which folder to use for automatic backups */
    val: "Папка для рэзервовага капіявання",
    translated: true,
    h: "BLOblCLkVxAs6HObgPraktoiBEQNMNFixnzpvk7FWoU=",
  },
  "Backups": {
    /* Label for backup preferences */
    val: "Рэзервовыя копіі",
    translated: true,
    h: "2JCpk92cgO56Ebw/lZGjh81dIWUzHyTIthk3tbUO5SY=",
  },
  "Backups enabled": {
    /* Label for application preference enabling/disabling automated backups */
    val: "Рэзервовае капіраванне ўключана",
    translated: true,
    h: "Y9MhMpBC7vFMEGWhaOb2cH6gqp/6lHO1R2XRniiNYes=",
  },
  "Balance": {
    val: "Баланс",
    translated: true,
    h: "azvDWgVPY349dq4q8mbtpDhehRsFKYKNzMk/TcuOvEQ=",
  },
  "Bank macro": {
    val: "Макрас Банка",
    translated: true,
    h: "IQmQZ/1/eVg9LLwOsnxkUbQGAcx9ZkBAlrP1Ch3Xo/c=",
  },
  "Basic settings": {
    val: "Асноўныя налады",
    translated: true,
    h: "9/8gWH6aVupdwCUJFJ4KodEJWn4fFwbiASgh7oQcxPE=",
  },
  "Birthdays": {
    val: "Дні нараджэння",
    translated: true,
    h: "rzI9rIMV5VD86pAzRZf+uFAA8rWYhz1rIH5N9fDesSk=",
  },
  "Break Import Links": {
    val: "Разарваць спасылкі на імпарт",
    translated: true,
    h: "XQYKw3qJ7xKoR/DX6K6NdZxbJLHVJhxy9mFVV8r1ZU4=",
  },
  "Bring All to Front": {
    val: "Вывесці ўсё на першы план",
    translated: true,
    h: "vXNLSncC5dTsDdfhZY5dhbev+Y3PpqQEy1fwxTkGWU0=",
  },
  "Bucket": {
    val: "Вядро",
    translated: true,
    h: "APPSgbsmF5H9B7YIJDaPcEVh4T7ctWU+hxQv/eG1Dg0=",
  },
  "Bucket Transaction ID": {
    val: "Bucket Transaction ID",
    translated: false,
    h: "1bsbXV1Kuxj83UA24XCyscrAKm+nsN+WNbFz1+lf66E=",
  },
  "Bucket Transactions": {
    val: "Транзакцыі з вёдрамі",
    translated: true,
    h: "5hMoGWO5uTeCOujLdFnRx4w3D6Zka/avSxnH14UmJiI=",
  },
  "Bucket amount": {
    val: "Bucket amount",
    translated: false,
    h: "KeOvMpoI1q2oV66HC3pMPPSZyZ3AfK3/ttog4A9oHTs=",
  },
  "Bucket deleted completely": {
    val: "Вядро цалкам выдалена",
    translated: true,
    h: "gBMlSFTWDRRSWZeZ3fuxDhpJnhv2MoF3EvZSwo1BZHg=",
  },
  "Bucket group": {
    val: "Група вёдраў",
    translated: true,
    h: "SK6rZDww/r+lLW1JUMyv3SXYmxaP95hasIOTSW4WFZY=",
  },
  "Bucket transaction": {
    val: "Аперацыі вядра",
    translated: true,
    h: "bEQDTy9m51uIwZj996XKffMPU91hkOBVlNOKpudB2hw=",
  },
  "Bucket type:": {
    val: "Тып вядра:",
    translated: true,
    h: "NMC+sjsH6UgNhNtiqYeiHDi4zDK/+S5h5yMfZ5CQk1c=",
  },
  "Buckets": {
    /* Bucket list page title.  Does NOT refer to the application name */
    /* Refers to a list of buckets, not the application title */
    /* Refers to a list of buckets, not the application title */
    val: "Вёдры",
    translated: true,
    h: "fMPIWzGvVEG0t7+bZX1ucgzulk8FaQfqioLgwLsj+oE=",
  },
  "Buckets Budget Filename": {
    /* 'Buckets' refers to the application name */
    /* 'Buckets' refers to the application name */
    val: "Імя файла бюджэту Buckets",
    translated: true,
    h: "PMqvee/qJsh/OYtRi+hbcH4fgl07SR6XM0wx4c1C+sU=",
  },
  "Buckets License": {
    /* 'Buckets' refers to the application name */
    /* 'Buckets' refers to the application name */
    val: "Ліцэнзія Buckets",
    translated: true,
    h: "sym++hSpJ7LeHTQAaiYRAK41eYIw9pfMFO2EbYTHGxo=",
  },
  "Buckets has crashed.  Please restart after submitting a bug report.": {
    val: "Buckets нечакана спыніла працу. Калі ласка, перазапусціце пасля адпраўкі паведамлення пра памылку.",
    translated: true,
    h: "jPwdFrODeZ3bxIdD+YJ9CFGjCQTqdwQNr9CdB4QTI6U=",
  },
  "Budget": {
    /* Label for budget file selector */
    val: "Бюджэт",
    translated: true,
    h: "zOO4DqNSFLa6Z9vlmfaz8OnwggHn8wJeP058V5mUKbE=",
  },
  "Budget Specific Settings": {
    /* Title for budget settings page */
    val: "Спецыяльныя налады бюджэту",
    translated: true,
    h: "/RQVOKmoXTgeciF+ohehk19BxpvBXud+3HjfZPPw1v8=",
  },
  "Budget file": {
    val: "Файл бюджэту",
    translated: true,
    h: "hbfzyLF9pCBuXZJ4fcHPQVNia5LnROzn4NZFhOhjuG8=",
  },
  "Budget files are too different to merge": {
    val: "Budget files are too different to merge",
    translated: false,
    h: "S/vIb5Nknf3NHyuW7Xmh5zS8soTt74dT2/tWCxM5lic=",
  },
  "Budget password:": {
    val: "Пароль бюджэту:",
    translated: true,
    h: "yB5u4awiXu76+/Pw81ZYhBtgYQktcAVe6KU4WreiReU=",
  },
  "Budget-specific number format": {
    val: "Бюджэтны лічбавы фармат",
    translated: true,
    h: "34SWA6JebUvD6EsRbt8oe1ERhdfOkpdEfhXNZsRVcx4=",
  },
  "Budgeted": {
    val: "Бюджэтнае",
    translated: true,
    h: "aP72arzLN/j79zGtL8DWE7wcBGciRcWqMOR1aTHJmNo=",
  },
  "Cable TV": {
    val: "Тэлебачанне",
    translated: true,
    h: "wISz6Dh0vnQ1Tjhr9GWcJ2rhiif2af6NXsAzEAXYxfo=",
  },
  "Calculator": {
    val: "Калькулятар",
    translated: true,
    h: "IiaAFlM5LkjsirGL06i1plXy1FoW75TKBiuin2r4s6Q=",
  },
  "Can't merge budgets of different versions": {
    val: "Can't merge budgets of different versions",
    translated: false,
    h: "6+AzeGDN9PmeIUO0hjF85F3PzmbhX9bXkHzYVrGiNU4=",
  },
  "Cancel": {
    /* Button label */
    val: "Скасаваць",
    translated: true,
    h: "wHdMGFBg/BNmqwwBSIr4TrXk4fT1kilDHgZN5z4N5sU=",
  },
  "Cancel Import": {
    /* Undo/redo label for canceling import */
    val: "Скасаваць імпарт",
    translated: true,
    h: "ASPyW8TypDFl1ANm1SIrpmykDdl3rBQDzC+wk4mdZXA=",
  },
  "Cancel Merge": {
    val: "Скасаваць зліццё",
    translated: true,
    h: "xOUSd4pIBFhoe1VahnIJgCO8yf46iL9AGSBb3bE9Mvc=",
  },
  "Cancel merge": {
    val: "Скасаваць зліццё",
    translated: true,
    h: "PtR83Mtr2bGbo1WTP4IRb/XgW5AiIVvzTQD9jFDSoAI=",
  },
  "Cancel sync": {
    val: "Скасаваць сінхранізацыю",
    translated: true,
    h: "8xFWyPShIifEhumOA/PeoTtccm5TTtbQmWFViIGcPQA=",
  },
  "Car Insurance": {
    val: "Страхаванне аўтамабіля",
    translated: true,
    h: "x3xbGNEH/vHcpYAm2HXTUhRRuz2sb6yfH0gBYFFkqc4=",
  },
  "Car Maintenance": {
    val: "Тэхнічнае абслугоўванне аўтамабіля",
    translated: true,
    h: "Lsok3+kX1L7SXMumFWNo+oxBgfmGJcWg1CdSDw6byx8=",
  },
  "Car Payment": {
    val: "Аплата аўтамабіля",
    translated: true,
    h: "wp49ZoinRgifzKQ+N9RrJ6LG/9Yw6hkw1RCwXwHc6tA=",
  },
  "Categories": {
    val: "Катэгорыі",
    translated: true,
    h: "UxClJeKz605AO/90mJ2YOi6N2LJk9D+RJReMlC3TDO8=",
  },
  "Categorization": {
    val: "Катэгарызацыя",
    translated: true,
    h: "DShuYOF3daz37AE7lGCN1TajYU1VyorRCvLwh4bM1r8=",
  },
  "Categorize": {
    val: "Катэгарызаваць",
    translated: true,
    h: "mA6/TefxgXpo2M+OUx/ATLQ4QYHv4t1+8vy3MmV+EQg=",
  },
  "Category": {
    val: "Катэгорыя",
    translated: true,
    h: "/frArhrZL+bxdiiBKi/1cYdR/tSD7rhbMHJLgHQQdNQ=",
  },
  "Change": {
    /* Noun: name of object describing a change in data */
    val: "Змена",
    translated: true,
    h: "prG6DzYDTLinvWF30h7VL2QRdBBwll00hx4flJyEWMc=",
  },
  "Change Account Type": {
    val: "Змяніць тып рахунку",
    translated: true,
    h: "elw7uWDm9Vij1azrwiBbY+VwbjMQuo/xziG393BqGUA=",
  },
  "Charity": {
    val: "Дабрачыннасць",
    translated: true,
    h: "5OqY1JRI3brWCHQyu9VDY9hpjXzg1cVB1oQnXLQjZ4U=",
  },
  "Chat with Matt": {
    /* If "Chat with Matt" is too wide, you can translate this as just "Chat" */
    val: "Чат з Мэтам",
    translated: true,
    h: "9nQjbkjkf8l2mX6xeNaU///NYhxxWFqnvTKOmakMmRY=",
  },
  "Chat...": {
    val: "Чат...",
    translated: true,
    h: "SytGirG0+cdtbPfjBma/G/tEOt4rdOj4mnjcaWsTbt8=",
  },
  "Check For Updates...": {
    val: "Праверка наяўнасці абнаўленняў...",
    translated: true,
    h: "S/1p0syaOMqjAbHpmZa6gWaIh/9e29QR2cRJhiMadz0=",
  },
  "Check for Updates": {
    val: "Праверыць наяўнасць абнаўленняў",
    translated: true,
    h: "6vtxqhyfiDaIXgTBH0pdoPzTGftDDEoRFNGU082PhRk=",
  },
  "Check for updates": {
    /* Label on button that causes budgets to sync between devices */
    val: "Праверыць наяўнасць зменаў",
    translated: true,
    h: "MerO0fg7nnpQBvZ87GDbTKrOJZo+aGSx6qiQEeVAmXw=",
  },
  "Checking for updates...": {
    val: "Ідзе праверка наяўнасці абнаўленняў...",
    translated: true,
    h: "wjjhyYhYEFdJWUmwdJIEdxm0iAq2bwrWU79ANObzzZY=",
  },
  "Choose": {
    val: "Выбраць",
    translated: true,
    h: "UeJgTiqvSbyjLXgzersyKp/deJ/06L+xXts8Eq4g6Jk=",
  },
  "Choose a file ending in either .ynab4 or .ymeta": {
    val: "Выберыце файл, які заканчваецца на .ynab4 або .ymeta",
    translated: true,
    h: "Tym1GWz52+2AgA4qwsbqknBtvR9QYYGN2y5oYYQ7yZQ=",
  },
  "Choose save location": {
    val: "Выберыце месца захавання",
    translated: true,
    h: "3GFv8eEkA96n0cetdd4cUVIl0CtfTQCk4q9Z09uSE0Y=",
  },
  "Choose which of the files on this device you want to make available to your other devices.": {
    val: "Выберыце, якія файлы на гэтай прыладзе вы хочаце зрабіць даступнымі для іншых прылад.",
    translated: true,
    h: "3Vyn9u6I123YU1+p+9TdGJ3wnrJHbwswJEZPYB1lrYU=",
  },
  "Choose...": {
    /* Label for choosing backup folder */
    /* Label for choosing a budget file */
    /* Label for choosing a backup file */
    val: "Выбраць...",
    translated: true,
    h: "mitI0a0UwvINcTM1Hb0R9fSY5KucYuyfjuNiySSQmDY=",
  },
  "Cleared": {
    /* Tooltip text indicating that a transaction has cleared. */
    val: "Ачышчана",
    translated: true,
    h: "j1SmbPuDDBP04XfOH9NNFCDzXmB9xAzSoVG7RcHcdBg=",
  },
  "Cleared balance": {
    /* Label for balance minus uncleared transactions */
    val: "Баланс ачышчаны",
    translated: true,
    h: "3SpY0eBe4gJ1WtupFnV904/a1Xlfx5Y4ybAdHQGzGV0=",
  },
  "Close Account": {
    val: "Закрыць рахунак",
    translated: true,
    h: "qTJEf8mdhLx1bU9LZPYaTtrT8pMLqxemoL/YqbhjESI=",
  },
  "Close Window": {
    val: "Закрыць акно",
    translated: true,
    h: "hrPxvP/hrVgtNNTMX4sv5sljx57neTy+2p0U1TKGuCE=",
  },
  "Close account": {
    val: "Закрыць рахунак",
    translated: true,
    h: "7HdV8X8++teDNW33urE2eccDw3VLdSpvII89zC/sfu4=",
  },
  "Closed": {
    /* ! Label for list of closed accounts */
    val: "Закрытыя",
    translated: true,
    h: "8pZrnvzAUQTJhDN/XX31DLvx0wIs1Ww3fV6pktEKEHs=",
  },
  "Clothing": {
    val: "Адзенне",
    translated: true,
    h: "as4CQmPu3VF2LxSvA5djgiAPatdFRqwmOt0NiHJCe7E=",
  },
  "Confirm password:": {
    val: "Пацвердзіце пароль:",
    translated: true,
    h: "Px/rLFgkE/Sv1Z+Xm0frULVV3lxvrEc7ABJaDzmv670=",
  },
  "Conflicts": {
    val: "Канфлікты",
    translated: true,
    h: "W04VkIj+XKS1rPtY7a6cQITUa157onpN6NAVlO9MknY=",
  },
  "Connect": {
    val: "Злучыцца",
    translated: true,
    h: "pCLQy6ZAsZnJ3ff5r+iD+O2vHQhIJEEUHUhiY1NrMP0=",
  },
  "Connect to bank": {
    val: "Злучыцца з банкам",
    translated: true,
    h: "0T7eA3oFvMxyPIOAkMZ2rDpJxQVORgxrLqrDx87L1ZY=",
  },
  "Connected": {
    val: "Злучана",
    translated: true,
    h: "fV/VOfsqBR+vyqF2tRjG6qsC8ufS/QDaTRaUee+UEMA=",
  },
  "Connecting...": {
    val: "Злучэнне...",
    translated: true,
    h: "fYdj0RfOQMPN3n28gswFnK4aOvozPH0hqm9oqd+NcWI=",
  },
  "Connection corrupted. Please delete and re-create.": {
    /* Error when an invalid SimpleFIN connection is attempted */
    val: "Злучэнне пашкоджана. Калі ласка, выдаліце і стварыце зноў.",
    translated: true,
    h: "YjH9IxACkJ2e9cq+MYI3I6l3RmOWZPEBAwzjq3W7x0s=",
  },
  "Connection deleted": {
    val: "Connection deleted",
    translated: false,
    h: "QbB3NfDIpEmXgwY+hq95+aQCRlMErfUvqa+o3tPY93A=",
  },
  "Connection saved!": {
    val: "Злучэнне захавана!",
    translated: true,
    h: "wAgyeIQsbaI/kFPgBf8sWlKK1mf/VcP7BjHpC9TNYuc=",
  },
  "Copy": {
    val: "Капіяваць",
    translated: true,
    h: "T2DR4UKv+pyVWY8GzF/WWjk5XqMXgZ0gDyXkZmYczHw=",
  },
  "Count": {
    val: "Count",
    translated: false,
    h: "ikvrmlftwm5qPEEca6YD6duk6CH45CROgmp9sfZMEFE=",
  },
  "Create Account": {
    /* Undo/redo label for creating an account */
    /* Undo/redo label for creating an account */
    val: "Стварыць рахунак",
    translated: true,
    h: "0N2I0sNdMLVk7zC9FqlNYoA1G6RDgQDvQErp/TjAnRA=",
  },
  "Create Backup": {
    val: "Стварыць рэзервовую копію",
    translated: true,
    h: "tUZEq5sa8Ggh6lIgsWzX8Blj6/unJ8dhl9sKpfwxRYY=",
  },
  "Create Backup and Start Over": {
    val: "Стварыць рэзервовую копію і пачаць зноў",
    translated: true,
    h: "55tb3CtVKNADQpK4SdoMMPQvHu1ftBosd/dP8lFHV/o=",
  },
  "Create Macro": {
    val: "Стварыць макрас",
    translated: true,
    h: "F6PDykaoACWoqQ+oKUyJyhERAe1FjT6A3OkxL+S5l8k=",
  },
  "Create Template": {
    val: "Стварыць шаблон",
    translated: true,
    h: "gAbtUL3vhxk+yCSp7fzAF4Z9tV0I4x7Uq5xDJ4nm2Uk=",
  },
  "Create Transaction": {
    val: "Стварыць транзакцыю",
    translated: true,
    h: "G5NDAP857MBDE66GWUREcFAJc2pCogndYa6y+m6PRfE=",
  },
  "Create budget password:": {
    val: "Стварыць пароль бюджэту:",
    translated: true,
    h: "Bf9XVrpN9UpVSKpZNRpBUw/IaFjMkNCmH4gpAfhYFkY=",
  },
  "Create macro": {
    val: "Стварыць макрас",
    translated: true,
    h: "9xZZAswDH8zePPUhfsaSEDJ21GU1yhILKhDWtvnUlr0=",
  },
  "Create new account": {
    val: "Стварыць новы рахунак",
    translated: true,
    h: "SmoVFbeAWSO4cW1YQJbuDJQz8kenVz5++WTJEkS6Vos=",
  },
  "Create or manage account": {
    /* Link to manage relay accounts */
    val: "Стварыць ці кіраваць рахункам",
    translated: true,
    h: "U5lOs+hLfJ8gBJoXR9ToFOsg130hRzN7A4AauACQHHY=",
  },
  "Currency symbols": {
    /* Label for currency symbol setting */
    val: "Currency symbols",
    translated: false,
    h: "MB7GDp8dkw8tLgwCzsb2VwrDRWwirbks5+U6PkshBB4=",
  },
  "Current version": {
    /* Label for current application version */
    val: "Бягучая версія",
    translated: true,
    h: "lVqFstk3jMWPnA1laudxoN7T6PXUVe365RE2LqCMZmA=",
  },
  "Custom": {
    /* A label for choosing a custom date range */
    val: "Іншы",
    translated: true,
    h: "npcV1SQQyG8XsJlGwbsserjaxIIkVCtt9ZFBODiihSI=",
  },
  "Cut": {
    val: "Выразаць",
    translated: true,
    h: "+kuX06pgC809fwr+5h9VbC8sVgVWo6EXgg6bzfXXtJs=",
  },
  "Dark": {
    /* Option for theme preference */
    val: "Dark",
    translated: false,
    h: "n09JYTXgkVzgVfXO+ZBo3gryCtlg9t+GoZSQe2YpJPQ=",
  },
  "Data": {
    val: "Даныя",
    translated: true,
    h: "nb/gDaJJpEyxUczsooYPcWRNvDVzBJLOxevxBEAPM+o=",
  },
  "Date Posted": {
    val: "Дата публікацыі",
    translated: true,
    h: "3A+vhaBB21UASdnwmNYVGMV9qH/U43D3DCsVSXlWasY=",
  },
  "Date format": {
    /* Label for application date format preference */
    val: "Фармат даты",
    translated: true,
    h: "fY1FnR2YTcyORx9p/4BdLTjtjH1FNW35jtGy64ltO4E=",
  },
  "Date range": {
    val: "Дыяпазон дат",
    translated: true,
    h: "Byx38NxnaOdzvBIgWlDoyRZR5IEPJ329lwDnivHzJik=",
  },
  "Debt": {
    /* Label for a total debt amount */
    /* Name of bucket group for debts */
    val: "Доўг",
    translated: true,
    h: "y9kslXhW17gMMFZ9Dq8g/tabfINzlmzT+39QNbWiWGA=",
  },
  "Debugger": {
    val: "Адладчык",
    translated: true,
    h: "4ScsdyOtUZsKH/cENJNnmyZFMuIjtHzPrPhrpnc+kOk=",
  },
  "Debugging": {
    val: "Адладка",
    translated: true,
    h: "5qYhotBwdyjpp1WiJlT+T5wf/rpbKu5NEGOrxJMpz2U=",
  },
  "Decimal delimiter": {
    val: "Дзесятковы раздзяляльнік",
    translated: true,
    h: "Qjuny9lynn/v2WJwTnYLdXQb/ne+0Q2TBiSM+KFIrIU=",
  },
  "Default": {
    /* Label for default backup folder location */
    val: "Па змаўчанні",
    translated: true,
    h: "TKDg5zIpVAzBCbQHtW0yWzTe9w8z+EmC7VPeZA2B70k=",
  },
  "Default number format": {
    /* Label for application number formatting preference */
    val: "Перадвызначаны фармат ліку",
    translated: true,
    h: "mgzNoP6jlMs5CPedg7OHyJuqrwEkQlj6DduekmeqfCY=",
  },
  "Delete": {
    val: "Выдаліць",
    translated: true,
    h: "sm3jcrSw6qxgICiEpy25imvm6QNueF6oZ+oBxfeSEJg=",
  },
  "Delete Account": {
    val: "Выдаліць рахунак",
    translated: true,
    h: "zTJTocYLEbNVwJ0ojyPCB6M0JpGx6fe6AZHWtuVJv0M=",
  },
  "Delete Connection": {
    val: "Выдаліць злучэнне",
    translated: true,
    h: "o6bxlUpjZFFTleiRLA4ykeB3yEHsAiXW9usUdJ9jh1g=",
  },
  "Delete Group": {
    val: "Выдаліць групу",
    translated: true,
    h: "VaefOk8g8N64N+Td8TEorhhMQBe0AuWmfRz7u7+Q1Ko=",
  },
  "Delete Macro": {
    val: "Выдаліць макрас",
    translated: true,
    h: "Qb7shd6fRLybaDzPvdr0Z4VfVek/fHVV556kEcNZrH8=",
  },
  "Delete Transactions": {
    val: "Выдаліць транзакцыі",
    translated: true,
    h: "5rAWRNk97CWy9OfDP5IWSE/T2Ao461w7C3z/IDV154I=",
  },
  "Delete Unknown Account": {
    val: "Выдаліць невядомы рахунак",
    translated: true,
    h: "SzZ+N6/hpntSyAoyuLxzaipQcinkrh5c33ceQdtoUcE=",
  },
  "Delete all": {
    val: "Выдаліць усё",
    translated: true,
    h: "nKzti1takFUxZyWfLTGqgvdL3dJMx6CdNwVfBH1jUYE=",
  },
  "Deleted": {
    val: "Выдалена",
    translated: true,
    h: "qaM7+YriKFk63EE2I46KNlMjYgR2jOP4JZMTj4yIti4=",
  },
  "Delimiter": {
    val: "Раздзяляльнік",
    translated: true,
    h: "VDesNaCayRIGFHLEXOjH3Eev3D/EzM6/dVsl7zN/+Mo=",
  },
  "Description": {
    val: "Апісанне",
    translated: true,
    h: "bg0ZDIR+z+PEkinc/ZyqkERMsVZcFFm3NhQoIqZH+WM=",
  },
  "Details": {
    /* Label for sharing avenue details */
    val: "Падрабязнасці",
    translated: true,
    h: "68e/QPEuI36iIEcTWmKDrVU9KBReQ3EjFzF1F06KQMA=",
  },
  "Device": {
    val: "Прылада",
    translated: true,
    h: "SljXcmF5cBUDvagtLmL5aNIz++tnIbf5qjS1cxxEI1I=",
  },
  "Device ID": {
    val: "Device ID",
    translated: false,
    h: "23vizNM3wG6SeZvqULHYvtlqlWmwbFL3GuLOzGzdSK8=",
  },
  "Diapers": {
    val: "Падгузнікі",
    translated: true,
    h: "Vr53xwIeHjIIuMymcxrQ3l1RsDE6ra+ZTFT4dbR/rlI=",
  },
  "Disable Macro": {
    val: "Адключыць макрас",
    translated: true,
    h: "k0HEkS8+oirJJHylM2fcT1D1/IqnGFVX3cGlU3d3G50=",
  },
  "Disconnected": {
    val: "Адключана",
    translated: true,
    h: "8d3FMs2ZCPYbCLDzsVcqXsv6b5vDilOwJCEAevNsZDM=",
  },
  "Do both devices show the same pairing codes?": {
    val: "Ці паказваюць абедзве прылады аднолькавыя коды спалучэння?",
    translated: true,
    h: "w66hJr+u8QSrtvG+XC0n5CLXFsJuU1YfxxNPzX6b/z8=",
  },
  "Done": {
    val: "Гатова",
    translated: true,
    h: "FlUsJYC76LgtNYLenrPiDvDgAVk3wLT14rwyk2hHYiY=",
  },
  "Download Update": {
    val: "Спампаваць абнаўленне",
    translated: true,
    h: "OvekDBh71chOkbTXqPs/V/x0lNbpc668s4hyXRF5G+I=",
  },
  "Downloading update...": {
    val: "Спампоўка абнаўлення...",
    translated: true,
    h: "vTHXpZeFxjQhKPwUQPCm+eHcyYR6YjSmIm4mtV/5iTE=",
  },
  "Duplicate Window": {
    val: "Дубліраваць акно",
    translated: true,
    h: "tjwFTBARBKQ5uC9Fh0zm7ag/RViV95pptJBJn9eVqHE=",
  },
  "Duplicate of existing transaction": {
    /* Label for an imported transaction that is a duplicate of an existing one */
    val: "Дублікат існуючай транзакцыі",
    translated: true,
    h: "6d7BweiCObuFrgVXiVOkjVaHEKwbPSJY2AbNcT/7508=",
  },
  "EULA accepted": {
    val: "EULA прынята",
    translated: true,
    h: "MZZW8mGJoOJ5ehMdPPve2szfe+yi7Du06hSKo61py9Y=",
  },
  "EULA not accepted": {
    val: "EULA не прынята",
    translated: true,
    h: "FVsbix5CHwscF/kgCdBTZYPnKTpIN55xFHleEFK6Oqw=",
  },
  "EXPERIMENTAL Buckets Macro Maker": {
    /* 'Buckets' refers to the application name */
    val: "ЭКСПЕРЫМЕНТАЛЬНАЕ Стваральнік макрасаў Buckets",
    translated: true,
    h: "NZPVXQ+Dw1vv0fLXY+Z4R1KiEkXjDZtSmY3tVz5L1VI=",
  },
  "Eating out": {
    val: "Ежа па-за домам",
    translated: true,
    h: "aiQggrM+Wb8WtkoJykeSDnNiCBgzGqVGc1Hvkf5Uzg8=",
  },
  "Edit": {
    val: "Рэдагаваць",
    translated: true,
    h: "9+ZynTDPePvsJX4rW8Mn0wEzk0GRQ+udON01NKHVsQU=",
  },
  "Electricity": {
    val: "Электрычнасць",
    translated: true,
    h: "D85G++Fy1hUUGZfHiKAUcNRlXmLcdkKK7RtxnwJ110U=",
  },
  "Enable Macro": {
    val: "Уключыць макрас",
    translated: true,
    h: "9SWFr96CNVD21JQ30lw4cj1JCAZ44RNlKkDzQJ/RyuE=",
  },
  "Enabled": {
    val: "Уключана",
    translated: true,
    h: "hHztbKAreElTc7ttNUovJFG0DIq9xfILBM+1aNV8x2Q=",
  },
  "Encryption": {
    val: "Encryption",
    translated: false,
    h: "Rfsn7WkrTLeDLzups4h7merVzPfg8xcRh1++z49WW8Y=",
  },
  "Encryption keys": {
    val: "Encryption keys",
    translated: false,
    h: "u45A8tEUHjVJ/FuiM5W+sNzNth8QZuHXNgdL16YmB1U=",
  },
  "Ending Balance": {
    val: "Канчатковы баланс",
    translated: true,
    h: "bwan2qqqdDloluCkgp+UPYWSAeOQk9zkaNwb2p0kUDk=",
  },
  "Ending amount:": {
    val: "Канчатковая сума:",
    translated: true,
    h: "0IUvXk9nogxjdL1n0VZPrxcMOUZODNXMlGrlpyXq8bI=",
  },
  "Ending balance": {
    val: "Канчатковы баланс",
    translated: true,
    h: "aAtJw4Tz1ZrB97s3K84TZqaiG7f+B04ZFnxZx9ryHWQ=",
  },
  "Enter License...": {
    val: "Увядзіце ліцэнзію...",
    translated: true,
    h: "A+/eZ8qTAh97iBouJPInRkCg7F0nOkteYEBO7+lFHHA=",
  },
  "Error": {
    val: "Памылка",
    translated: true,
    h: "/ErBlknw7o83xx0uIDCjdDA4u5bAwnNZuhFd2GV1Zcw=",
  },
  "Error decrypting recording": {
    val: "Error decrypting recording",
    translated: false,
    h: "6LehLh8oNPMtzfLjQbZAJ3a35TSBoIn+XTBtBBaEuKI=",
  },
  "Error during import": {
    val: "Памылка падчас імпарту",
    translated: true,
    h: "BiI3zjvgdX5vXe4kX0mS7AvEFln+iIdMmLNX1xeQqLU=",
  },
  "Error during merge": {
    val: "Памылка падчас зліцця",
    translated: true,
    h: "PoE7TMsxGW9dp4u1juziybXV1VV8Wgv9ejdrAoUVynk=",
  },
  "Error fetching data": {
    val: "Памылка пры атрыманні даных",
    translated: true,
    h: "z94B0956dECmmaMVLZFW0oZMVtA92etw+2ZqumR4K9Q=",
  },
  "Error importing": {
    val: "Памылка імпарту",
    translated: true,
    h: "rekzwWcY0HRZEhFebX1fJrp4aDJ/NTPxIwWaCYAk+7k=",
  },
  "Error parsing response": {
    val: "Памылка аналізу адказу",
    translated: true,
    h: "PsIRbom+m8Y5OIEPW2rzJYVlNA2NQrZmEQnpW7Y/9KI=",
  },
  "Error restoring from backup": {
    val: "Памылка аднаўлення з рэзервовай копіі",
    translated: true,
    h: "7dtoozbhFD0JBqVUuvIbB6I58faFMyoolWjHqHP7ypo=",
  },
  "Error running macro": {
    val: "Error running macro",
    translated: false,
    h: "obu/8VMe/z+StejTUbzL5fGOP7tMkWw4DfW4KkF/lxs=",
  },
  "Error running recording": {
    val: "Памылка падчас запісу",
    translated: true,
    h: "eE9Fw8G4vQpND3fFWnfGNvtN5LxCcQQecWO6fQgBmpM=",
  },
  "Error running sync": {
    val: "Памылка пры выкананні сінхранізацыі",
    translated: true,
    h: "LB/WNzHp4orPsbCVEJuDzUPsQUfNRDNXw7sFnbzfguw=",
  },
  "Error updating transaction": {
    val: "Памылка пры абнаўленні трансакцыі",
    translated: true,
    h: "IEJfuOO0LRCEv2OUh8Cz02PtiJ8tqVTRzeXK5DyqBQs=",
  },
  "Existing version": {
    val: "Існуючая версія",
    translated: true,
    h: "w3Sl4FH2y8PxQEXEcDumPPkMrRbBM/winnkwLKNDghY=",
  },
  "Expenses": {
    val: "Расходы",
    translated: true,
    h: "d6aKytFAPwPUzFOv41R0itfcMu11VdE29vkM05dnpBU=",
  },
  "Export": {
    val: "Экспарт",
    translated: true,
    h: "mZJs0iE089tMZ5BWqTUBp+2aJ90wKL4act4hUPt7zkA=",
  },
  "Failed": {
    val: "Не ўдалося",
    translated: true,
    h: "pDZMH/BpUzRALpC+FEhtjeyLcyvg3szLxg2ly14c9pY=",
  },
  "Faint cents": {
    /* Label for application preference enabling/disabling faint cents */
    val: "Слабыя цэнты",
    translated: true,
    h: "gL5W+6nmqNfRsbiNIBEyHIX0LvI1xCYl+kDyuUwFsGI=",
  },
  "File": {
    /* Noun; label for budget filename */
    val: "Файл",
    translated: true,
    h: "9XpUff7TtVQbIncvgmrfzVB2gkBh35RnM1ET/HFr3k0=",
  },
  "File access error": {
    val: "Памылка доступу да файла",
    translated: true,
    h: "DnlPFIjZcB6Sgt6APxZIl4HyFKIDaY5CiE4AWlVYqMI=",
  },
  "File does not exist:": {
    val: "Файл не існуе:",
    translated: true,
    h: "RPeWW9lCHkg+d6XybADj3OH2jxrYcSOhrA3+QHEcYz0=",
  },
  "File import mapping": {
    /* Noun: object that contains settings for importing a file */
    val: "File import mapping",
    translated: false,
    h: "5s+unX9P0STLcQ5yQjcOEEO3XLrHp6TiOAXOY5L4Jzo=",
  },
  "File saved: ": {
    val: "Файл захаваны: ",
    translated: true,
    h: "e6UDV8UzF5qqysQpN3OrcspjD8zPNn72zKd1CH1lFe8=",
  },
  "Files available to sync": {
    val: "Файлы, даступныя для сінхранізацыі",
    translated: true,
    h: "tD4YLtMv/MtHbTXTSZmkcCxj1g7Km6d6kuWI+1yHo/8=",
  },
  "Filter": {
    val: "Filter",
    translated: false,
    h: "gG/X0Prd382E2jAAsfyk3bynhjgo9Fk44NYmIbqfMTk=",
  },
  "Find Next": {
    /* Edit menu label for finding the next match.  Perhaps use what your browser or other applications use. */
    val: "Знайсці далей",
    translated: true,
    h: "LALfI5V4TsQo0DcGJwmNmrm3xNPtY5PmQuxB1voZo34=",
  },
  "Find Previous": {
    /* Edit menu label for finding the previous match.  Perhaps use what your browser or other applications use. */
    val: "Знайсці раней",
    translated: true,
    h: "0n6Dq5KDTxxsTAKrJE+RDdgi9ln6FyfUEPNBJ6ejZ5o=",
  },
  "Find on page": {
    val: "Знайсці на старонцы",
    translated: true,
    h: "C8FK0TP/vHA4Dt565Z2E2vc+j9soU5SIaWGmc7j+UEc=",
  },
  "Find...": {
    val: "Знайсці...",
    translated: true,
    h: "aUU1pzvlZzKNgYZP2ZpPtQMImBOStbFnK33P3YwXTNs=",
  },
  "Finish merge": {
    val: "Скончыць зліццё",
    translated: true,
    h: "B0c10bq0bG9fZmohGvSo0pG1yeqxKs5mLo7SpplAhfw=",
  },
  "Folder": {
    val: "Папка",
    translated: true,
    h: "U0LnwvQV2yrtaYfkte120FAJhkqVya8TcV7qJ9tumUs=",
  },
  "For Older Budgets": {
    /* Label for section related to updating from older budgets */
    val: "For Older Budgets",
    translated: false,
    h: "TMGosuE5olJuLuly8uc8gx4r4RTMA3guKrboArLuB7w=",
  },
  "Forbidden": {
    val: "Забаронена",
    translated: true,
    h: "CcNf+bPZqU5SYvmmxeJh8TRTDY9bbSASjE9y1+21kGU=",
  },
  "Force Reload": {
    val: "Прымусовая перазагрузка",
    translated: true,
    h: "ktBJY2UXO+2r0ZvmbQXhArN51bSTnyaNnnBNR9PQ5K8=",
  },
  "From": {
    val: "З",
    translated: true,
    h: "cCFAY2/zl3pq5fMwrP/2LBsrrL36SYzS+6in7mvWyvY=",
  },
  "Fuel": {
    val: "Паліва",
    translated: true,
    h: "lU9dO2a3oisfgHqd0n39sKC/wl7ymSV/XprtLhQLEiI=",
  },
  "Full version": {
    /* Status for when a user has a Buckets application license */
    val: "Поўная версія",
    translated: true,
    h: "8gxVtYQtIFlJyU0m/Fyu2usHpVC5gXv1gstLNS4/pV4=",
  },
  "Gain/Loss": {
    val: "Прыбытак/Страта",
    translated: true,
    h: "Kop7hNPijjGN5jXxpDmcP32CJy22tzVz1qXWTjNxVg0=",
  },
  "General": {
    /* Label for general preferences */
    val: "Агульныя",
    translated: true,
    h: "Ro1hqU2fnZPlbffPiUFBRSO2oSn7YKpDUbDUDIWP9Ew=",
  },
  "Getting Started...": {
    val: "Пачаць...",
    translated: true,
    h: "XD8GQYEIDrNjTMPX4TjGeAbbCIEBcAONlYPd/D8Hz84=",
  },
  "Go To...": {
    /* Submenu title for navigation shortcuts */
    val: "Перайсці да...",
    translated: true,
    h: "AsKW6buNlZ7YlWHN1pVgNlCAzqiFIsJGL1cg8CkVGkg=",
  },
  "Goal completion:": {
    val: "Дасягненне мэты:",
    translated: true,
    h: "v+G5gj6B+MtHwQovNmj/BWbpnQncARZGo+swhE1fbtg=",
  },
  "Goal:": {
    val: "Мэта:",
    translated: true,
    h: "77+E2dn/Mw53xjGhNc6irsiq1WULAiC4yIyt4NaO0DM=",
  },
  "Goal: 0": {
    val: "Мэта: 0",
    translated: true,
    h: "rtvJnJFYA7lHYjPjGpF27/h2So3pRdrRLjfnkg78woQ=",
  },
  "Groceries": {
    val: "Бакалея",
    translated: true,
    h: "T6Kz6/FDxQkeIUJq8SVGn0T7OPdZ7B0YjPD3qHqW5p4=",
  },
  "Guide": {
    /* Menu label for the Buckets user guide */
    val: "Кіраўніцтва",
    translated: true,
    h: "E0TqJgLjqp65xs2CJV72FGZk5q/R8lIwaWCMnXpvTPE=",
  },
  "Health Insurance": {
    val: "Медыцынскае страхаванне",
    translated: true,
    h: "nsWIG2Kbb9OtoQkBvgkFh5MfMVNfbuGKhZypQ3uoQJw=",
  },
  "Hello!  Thanks for trying out Buckets.": {
    val: "Прывітанне! Дзякуй, што паспрабавалі Buckets.",
    translated: true,
    h: "0m9VvMGwLCqD3lmZ24GbzlkRxPX1kf/DsbWA9kkBWX0=",
  },
  "Help": {
    val: "Даведка",
    translated: true,
    h: "TvUUB7AuCuFJ9IWiz2SbsjnUvYoDPZAaMPxup/rwosM=",
  },
  "Hide Buckets": {
    /* 'Buckets' refers to the application name. */
    val: "Схаваць Buckets",
    translated: true,
    h: "38YdGXFjndmgDFgXTpfUZ0F+W/D9e267YaAvzYZm4O8=",
  },
  "Hide Others": {
    val: "Схаваць іншыя",
    translated: true,
    h: "RpKz0G7Y8OE5oyGm0/zRffPdr7RQkneZCYrikLHIZ+U=",
  },
  "Hide debug info": {
    val: "Схаваць адладачную інфармацыю",
    translated: true,
    h: "9rip1vzCF79F3bOZh86TdPkeaNjawcFqlYX/gmCqHyU=",
  },
  "Holidays": {
    val: "Адпачынак",
    translated: true,
    h: "HTQ10E8CaKVUu71N6uLx9J+Y6naLLRX37v0oQkesV3k=",
  },
  "Host": {
    val: "Хост",
    translated: true,
    h: "gPYRfd5+U6aDaCpXeR+YM/R+wrkLCLMOQUbeT5GQn6E=",
  },
  "Household goods": {
    val: "Гаспадарчыя тавары",
    translated: true,
    h: "UK1mJCSwg2XnGpH47pKFFD8NlrCfcd3bQb1bJt2RXEg=",
  },
  "ID": {
    val: "ID",
    translated: true,
    h: "ge86Jcy26vcv5uPFI29MfLOxHh8ctACck6nRdrl9aM4=",
  },
  "If Net is 0, the bucket transactions will be marked as transfers rather than as income or expenses.": {
    val: "Калі Net роўна 0, транзакцыі па вядру будуць пазначаны як пераводы, а не як даходы або выдаткі.",
    translated: true,
    h: "/btREV6/jPJtrc1ERDwLUyJAowC8+v6gUB7bmJJYzT4=",
  },
  "Ignore": {
    /* Label for checkbox controlling whether an account is ignored or not */
    val: "Ігнараваць",
    translated: true,
    h: "K8sAh2XND1/tJOuX9xTLmr1fQjUOB70cfc9GwI62fEs=",
  },
  "Ignore Account": {
    /* Undo/Redo label for ignoring an account from import */
    val: "Ігнараваць рахунак",
    translated: true,
    h: "Ils1ViOchbpiaHmdalbFiGmOlTK7ck+6+BhoyvUVrqM=",
  },
  "Import": {
    val: "Імпартаваць",
    translated: true,
    h: "F3sijvfYz3oB4iz2rVHjUvNDLQs43MbXDVIr5VFA2/c=",
  },
  "Import .zip file": {
    val: "Імпартаваць .zip файл",
    translated: true,
    h: "EmJa8O6YE7jrgmaqDUM5pIdurIYHfx1RIvVLHmqhRws=",
  },
  "Import From Web YNAB...": {
    val: "Імпартаваць з Web YNAB...",
    translated: true,
    h: "7Yteq/akhgWWCBUeqgBRz4wP6bKcirfp74uLeTQop3Q=",
  },
  "Import From YNAB4...": {
    val: "Імпартаваць з YNAB4...",
    translated: true,
    h: "z10Vp9BzEC6CkLTNtR8xywSTNYGMBbGFZMD7XUEbrVs=",
  },
  "Import Transactions": {
    /* Undo/redo label for importing transactions */
    val: "Імпарт транзакцый",
    translated: true,
    h: "0RkMBEPqgu5UHcGd2OzH7z/1vkRlIhOPxBSeollnMnU=",
  },
  "Import Transactions...": {
    val: "Імпартаваць транзакцыі...",
    translated: true,
    h: "PPLzf/61MKc3iWfDMTRo6ERH/TYu6TxBH2vmVbZD5Lk=",
  },
  "Import complete!": {
    /* Notification when an import is complete */
    val: "Імпарт завершаны!",
    translated: true,
    h: "L9VgrAXBV8q2Ux9I1Y2Mr/vbc6PiBI0Uxct20Hw6hwY=",
  },
  "Import file": {
    /* Button label for starting a file import */
    /* Button label for starting a file import */
    val: "Імпартаваць файл",
    translated: true,
    h: "iaQvPnsbTKu/ItmjoC8ctwpVbyumVe15GLL8nCbe25Q=",
  },
  "Import from Web YNAB": {
    val: "Імпарт з Web YNAB",
    translated: true,
    h: "NyXkbdCVf1mZfbmhjqJx4M10Vz/UfGdvSHdz+G6CGKc=",
  },
  "Import from YNAB4": {
    val: "Імпарт з YNAB4",
    translated: true,
    h: "FJ55mGfxitbc5YeY1s6YEji8I54ILSi3sfzQALSx50I=",
  },
  "Import links broken": {
    /* Notification indicating that the links between imported transaction files and a particular account have been broken. */
    val: "Спасылкі імпарту не працуюць",
    translated: true,
    h: "rLgGF32tMx7KSWu+vRLEbr+IbkedxhS8ELcYZhNCqTs=",
  },
  "In": {
    val: "У",
    translated: true,
    h: "TcCPpYF7/U7vM5pPmpqvJipZt0WPk3A/vC7Ec8pfDvo=",
  },
  "In/Out": {
    val: "У/З",
    translated: true,
    h: "G/e+QHikQOjTM9bcDBrmUZj6ONRstDFt17sNXu9zUd8=",
  },
  "Include log file": {
    val: "Уключыць файл журнала",
    translated: true,
    h: "rjy01ggb0uSRPn/tmrf/BVwGQiXaaSc6Nh+o92BIU3U=",
  },
  "Income": {
    val: "Даход",
    translated: true,
    h: "D2fJbta5d1Z5QYuRC5zzkBHsItZOOgY4FKrFJ64BvRs=",
  },
  "Income/Expense": {
    val: "Даходы/Расходы",
    translated: true,
    h: "i/Z19mssKMh8vj11iAIlpS59JGc7MtE5zkyAW/IJVdA=",
  },
  "Incoming budget file": {
    val: "Уваходны файл бюджэта",
    translated: true,
    h: "KQwRx6114V/RFL9ilT4S8R+fWFeCu7sLcYe2GcL9JmQ=",
  },
  "Incoming version": {
    val: "Уваходная версія",
    translated: true,
    h: "u02gUA6+LNLSmH1C76FF2HqPX3K7EuK8xBSB0tl41js=",
  },
  "Install and Relaunch Buckets": {
    val: "Усталюйце і перазапусціце Buckets",
    translated: true,
    h: "bzusTDIT831mqEwmmM59eT12mfoNMYiGPbUfoIzaCwo=",
  },
  "Internet": {
    val: "Інтэрнэт",
    translated: true,
    h: "LUwTAW8PsV34HKGrTUopI7v3NFK8iWKpv5Nb8EOtU1E=",
  },
  "Invalid categorization.  Categories not set.": {
    val: "Памылковая катэгарызацыя. Катэгорыі не ўстаноўлены.",
    translated: true,
    h: "DykWhCxgeqeIt2i+Lc2sRdURMNIgRgohpjs83umwH9Y=",
  },
  "Invalid date": {
    val: "Памылковая дата",
    translated: true,
    h: "wDN2ZzrVLU22Lij4eJJvxPBmC6Qv9SPmgRT36Qpq9KE=",
  },
  "Invalid license": {
    val: "Несапраўдная ліцэнзія",
    translated: true,
    h: "BfJdh6NOzurSCMGRmCP8gb1VAXUlrSSsCFIGHGXtNiA=",
  },
  "Invalid password": {
    val: "Invalid password",
    translated: false,
    h: "4JKuk5cidGqS+Yy2zWi8Bf+XYJLipTr94xQ+cPTJUVs=",
  },
  "Invalid transactions preventing import": {
    val: "Памылковыя транзакцыі перашкаджаюць імпарту",
    translated: true,
    h: "smXPNWsiVwsLzBZ2L/sbD9IO3ZMxKyORNgcKAa3CFRE=",
  },
  "It says:": {
    val: "Яно кажа:",
    translated: true,
    h: "gbWdWRhcKGQzFCi8CcKy9Bmfg2oYqz1zGMHQzSU8jQE=",
  },
  "It should say:": {
    val: "Яно павінна казаць:",
    translated: true,
    h: "RjwjZtmUgFzGUxR0zMmyXh0cHzpzsbj4nk6R7tGe+i4=",
  },
  "Keep account transactions": {
    val: "Захоўвайце аперацыі па рахунку",
    translated: true,
    h: "SA/tgP2OPX7K6/Rztew4oai82mmt7fqOHpOuCWNrPZU=",
  },
  "Keep accounts": {
    val: "Захоўвайце рахункі",
    translated: true,
    h: "iQX3g3XL9mIf7uX5wDrQIhLNJ464eieqHwhtKtfSuoA=",
  },
  "Keep bucket transactions": {
    val: "Захоўвайце транзакцыі з вёдрамі",
    translated: true,
    h: "0LwH6beBDlpdXvsVWW7nGj/5/tkz7gDk+Sm4Kltx3rQ=",
  },
  "Keep buckets": {
    val: "Захоўвайце вёдры",
    translated: true,
    h: "4lGk6/xvGOvn8z5vLVpqCLE6WQwpEoizH0LM95z1Tvo=",
  },
  "Kick Bucket": {
    /* Name of action.  Consider this "Archive Bucket" */
    val: "Прыбраць вядро",
    translated: true,
    h: "3hmOuv1hNsjpQJ5cSDTlSqN4jGOGFnSPw9r0bK68RWY=",
  },
  "Kick the bucket": {
    /* Button label for archiving a bucket */
    val: "Прыбраць вядро",
    translated: true,
    h: "IvzeGJ9G+Rns8Rbnal26flTFzd+yBNSEBQSptdNy8t8=",
  },
  "Kicked": {
    /* Label for list of archived buckets */
    val: "Прыбраныя",
    translated: true,
    h: "cWApfoLlcBvoHizIFtrDQq3uwrZIYMXKO1iLMvv8szI=",
  },
  "Language": {
    /* Label for application language preference */
    val: "Мова",
    translated: true,
    h: "H6JLSQVzeo1QvqYd6ewWITP1MyGheSF5eFCeaP6nQwk=",
  },
  "Language default": {
    val: "Language default",
    translated: false,
    h: "B22VmGf23mHOBpC02z4zdK4P34035w3nWPUR86u0Dgg=",
  },
  "Last sync": {
    val: "Апошняя сінхранізацыя",
    translated: true,
    h: "ifqkf2oJbmCZakm2f0rOQonkEGgcRhI46mmhSM3tTbA=",
  },
  "Last updated": {
    val: "Апошняе абнаўленне",
    translated: true,
    h: "BenCUeX0s7/BAYHFcK/s7yUcGW68Pyd1JDxeIPnbBGM=",
  },
  "Last used": {
    val: "Апошні раз выкарыстоўваўся",
    translated: true,
    h: "G5a6Jdor9jRT/Wtcg9SfXQsvqL7VFvnVD2+gq7yT1Jg=",
  },
  "Later": {
    /* Button label for purchasing a license later */
    val: "Потым",
    translated: true,
    h: "wZUl6R8m08S1l0zLg0xgDG2XE1sodemTuRDbalIB4VM=",
  },
  "Learn More": {
    val: "Даведацца больш",
    translated: true,
    h: "8bk7nEyrz+Q0vmMisWIPVuvHR4/TeW4DhemALir6s1o=",
  },
  "License": {
    /* Label for page where you view license details */
    val: "Ліцэнзія",
    translated: true,
    h: "qmaEL5BHMIqGJ0RYbmhJPHnRV60sgX8a8RHEh3wAQvc=",
  },
  "License status": {
    val: "Статус ліцэнзіі",
    translated: true,
    h: "pB9DYc2XWzC+Y3NEmw4dc63G3dstNOjTOAgt+MPA5WU=",
  },
  "Life Insurance": {
    val: "Страхаванне жыцця",
    translated: true,
    h: "CafgTI2ogIOqH6sg0xYnwgpDXmZ5SZQAsRY2jlTsp9c=",
  },
  "Light": {
    /* Option for theme preference */
    val: "Light",
    translated: false,
    h: "C0avqWOAFWs6Zf7/577zzmx49uDbTZDSmLAJIQchfuE=",
  },
  "Limit": {
    val: "Ліміт",
    translated: true,
    h: "tmPeisQPkoz4f2EpO/u0ThQPLC5ev6RKZzs4lkgatBU=",
  },
  "Limit:": {
    val: "Limit:",
    translated: false,
    h: "fU5A7Xvpww+aXRMyXDk5JaooMFWEKRFeMBtm2aYfRXQ=",
  },
  "Link Account": {
    val: "Звязаць уліковы запіс",
    translated: true,
    h: "Kq3pmMt0lHo1Or0xDzOxrUYLyhXtTVmVmcm/qGByIuk=",
  },
  "Local file": {
    val: "Лакальны файл",
    translated: true,
    h: "CMhZhId2bqThTVsNh1c/YbZs+qOkFTdtsZA8px8zwA4=",
  },
  "Local files": {
    val: "Лакальныя файлы",
    translated: true,
    h: "Atqw+RURXK7fFYEzxEV4d43UKK1kgVgoaKusNhnbGZg=",
  },
  "Local network client": {
    val: "Лакальны сеткавы кліент",
    translated: true,
    h: "bI/iWjtuzv7DVDFzzviehzbWu1TWwURDNt++OVfSXEg=",
  },
  "Local network server": {
    val: "Лакальны сеткавы сервер",
    translated: true,
    h: "/eJCfyE7NbbJocHDU+wjKuxXQBWAzekC3W/Bue6h+nI=",
  },
  "Macro deleted": {
    val: "Macro deleted",
    translated: false,
    h: "XdtVcRU7RheAlhzK15asG/s7ppztkgXITjJQkM833Rw=",
  },
  "Macros": {
    val: "Макрас",
    translated: true,
    h: "yo4VuLKqBNhvEBgUZKyI2WypDrv1loL/wA1qO3u4Zq4=",
  },
  "Make Transfer": {
    val: "Зрабіць трансфер",
    translated: true,
    h: "Rmor5ffKqQTdDQSwA2x/hHhrr0zL7MceXGsR1vHe6b4=",
  },
  "Make it rain!": {
    val: "Зрабіць дождж!",
    translated: true,
    h: "GCU3Hru9VCit7F+BYEMKmg5U8gsc1/UZ+o5wsbMAkeY=",
  },
  "Make it so": {
    /* Button label for causing the set of pending deposits/withdrawls to happen.  Synonyms could be: "Do it" or "Run" or "Go" */
    val: "Зрабі гэта!",
    translated: true,
    h: "XRTIWjylWKAy5BW8/0C0rOSW5S1QC+CxmgmFfhi81pk=",
  },
  "Mark Cleared": {
    /* Name of action for marking a transaction as having cleared the bank */
    val: "Адзначыць правераным",
    translated: true,
    h: "Z+NICH1z9EYN3Ub7Z9idiTw/t+QaDF9n3h9br9WhjgE=",
  },
  "Mark Not Cleared": {
    /* Name of action for marking a transaction as not having cleared the bank */
    val: "Адзначыць неправераным",
    translated: true,
    h: "4VoXUMr4nLIoyueiB8YlIR9HFGPYBhYxJq/cqqwDLs0=",
  },
  "Mass Update": {
    val: "Mass Update",
    translated: false,
    h: "8Vx8raw2DARWzkCbKtZrIQdXCP2vDzw/FMYKfw51Jcs=",
  },
  "Medical": {
    val: "Медыцына",
    translated: true,
    h: "TcuCD6n7/CmRm/jdGZQLDvEdAVaJ2cDy2CahpUk9pCQ=",
  },
  "Memo": {
    val: "Нататка",
    translated: true,
    h: "9yClwoAwAV0+DXl8NnkkAnlUi+Ebp2soPwN5meYKgWY=",
  },
  "Memos To Payees": {
    val: "Memos To Payees",
    translated: false,
    h: "RrzhV+LUxgPfiFMK0krRxVfeKXhRquwgRwC8neBJ2Xs=",
  },
  "Merge": {
    val: "Зліццё",
    translated: true,
    h: "mOHySNwxHH1kAQerMpBekxjTXkpm93+75ghAQZBI8YU=",
  },
  "Merge Budgets": {
    val: "Зліць вёдры",
    translated: true,
    h: "7mOfG0hHFzdbEwVuhnSJP2QnEDVFQg4s3d8syq4EMHw=",
  },
  "Merge Payees": {
    val: "Merge Payees",
    translated: false,
    h: "E1u4wBRN09jfBf9R5K2xo80gFrGBuDEB39Ri7EL8bYw=",
  },
  "Merge already in progress": {
    val: "Зліццё ўжо праводзіцца",
    translated: true,
    h: "oIEtjAX5TjxJ78OneCHljWt7hpmZS8AhezCjetJ2UEA=",
  },
  "Merge complete": {
    val: "Зліццё скончана",
    translated: true,
    h: "4DUIP9c3KGNs5H3H3fnNnu8LfaHA4bB8PIds+wSy3jI=",
  },
  "Merge failed": {
    val: "Памылка зліцця",
    translated: true,
    h: "6HNyKVatlEsWVRVgjSSAxmGoD1obkrMMWW6Ci7DLb3A=",
  },
  "Minimize": {
    val: "Згарнуць",
    translated: true,
    h: "ELhkWGGY5oNKpfCzoXXW6TgkfS1nI0ZuJbWyYLmT+ro=",
  },
  "Misc": {
    val: "Іншае",
    translated: true,
    h: "DPoc7CIbzLHJxuar3WnaidO3Ryy1QtYkCswRzVHtVBg=",
  },
  "Month to Month": {
    val: "Месяц да месяцу",
    translated: true,
    h: "VYq/DQYARQsjblXvXMijYnVbyFbLkqoRYmQ8IHhTbDQ=",
  },
  "Monthly": {
    val: "Месячны",
    translated: true,
    h: "r+AvQ06eYho/PFxjGz8FzHFmEfN+fjBpG0Yzic6/UgU=",
  },
  "Monthly deposit:": {
    val: "Месячны дэпазіт:",
    translated: true,
    h: "GKlnbgfjEkmlOI0TT0pyfI30T1/0jrXjT01JZrBTpP0=",
  },
  "Months": {
    val: "Месяцы",
    translated: true,
    h: "wW/jCiA3sxpdbZ8SZ50pYiOvxUk2Ix8T6WB3ZXkAS4s=",
  },
  "Move Account": {
    val: "Move Account",
    translated: false,
    h: "ybDQ63l83HcIPrlccbfuOBNxeGYsiDmXI3tyTZ7nKZI=",
  },
  "Move Bucket": {
    val: "Перасунуць вядро",
    translated: true,
    h: "6lJYNJMplvVHQuXlFYBD81+4kgQQb1SwZ0s13hvlIfI=",
  },
  "Move Group": {
    val: "Перасунуць групу",
    translated: true,
    h: "zSmn/C+X/cbh/GqqDMPetNfBb8iTmlwFh9Dsbc9qe9k=",
  },
  "Move all transaction memos to blank payee field": {
    val: "Move all transaction memos to blank payee field",
    translated: false,
    h: "Ibe3mbvnAzB2IdenvVSIAQdz1//j2Hd5vMpVIn+CH+8=",
  },
  "NO": {
    val: "НЕ",
    translated: true,
    h: "hxXybQ1uFw+QDmCTj+3XDrm4sicWa7ZqmazhYaf5Nr8=",
  },
  "Name": {
    /* Remote device name */
    /* Label for sharing avenue name */
    val: "Назва",
    translated: true,
    h: "bMXfNfAzjiMOnmM+rZmR8I9iyrRaMmSXja7cZ0eGcwU=",
  },
  "Natural gas/propane/oil": {
    val: "Natural gas/propane/oil",
    translated: false,
    h: "CMjkKDPUYAAymOaPiz0PkXS6Ec3BTRWuNZJQ34kHA5s=",
  },
  "Need ideas for getting started?": {
    val: "Патрэбныя ідэі для пачатку?",
    translated: true,
    h: "JLW3ar4riykgYXyTGeMCNqL+wes0evHH6RERa+qXPaw=",
  },
  "Needs": {
    val: "Патрэбы",
    translated: true,
    h: "RbGrwaVYaT8OdEbNo5YBRWxoGZNYzZKjiDz7JrZVuuc=",
  },
  "Negate": {
    /* Verb meaning to make a number have the opposite sign */
    /* Verb meaning to make a number have the opposite sign */
    val: "Зрабіць адмоўным",
    translated: true,
    h: "dZDdZz59qbx8gpMDeqIXTcDabOUtC1qWeUHncjptLo0=",
  },
  "Negative": {
    /* Label for choosing which value wihtin a CSV file represents negative */
    val: "Знак адмоўнасці",
    translated: true,
    h: "uu+tZJYytTWkRjWGnhq7P28TYmWJ58RmQcbAv4QEakg=",
  },
  "Net": {
    val: "Net",
    translated: true,
    h: "QITdwYnhK1fVfALCDc6jQhY2jLIUBpPp0/bSHOX6p9M=",
  },
  "Net Transfers": {
    val: "Net пераводы",
    translated: false,
    h: "4FYbJ2rCxhrWW9XBurKbS2mOSTwlxIXH/jCv5FDofeM=",
  },
  "Net Wealth": {
    val: "Net Wealth",
    translated: false,
    h: "XKjeMQyciPmv55LHmQ9l0ulp6PwrF1QA1lN2Pua1Kk8=",
  },
  "Net change": {
    val: "Net change",
    translated: false,
    h: "1giQvPYkVc99a5Ne06RbukR0UJUQY2ba1gRrQHE31bA=",
  },
  "New Bucket": {
    val: "Новае вядро",
    translated: true,
    h: "FchHrB6weykpHiqRVxc5QKb6BEdhH4DXrc+t6RNcF8M=",
  },
  "New Budget...": {
    val: "Новы бюджэт...",
    translated: true,
    h: "daxIu+dqn7pfUDeB26rLQnPnAz2v5opSTHbAyBovaoI=",
  },
  "New Group": {
    val: "Новая група",
    translated: true,
    h: "1dmXA/VlW+tjhojOGcypAy70L2wupHf9EdVjUByvpmA=",
  },
  "New account": {
    val: "Новы рахунак",
    translated: true,
    h: "MtAiANg7ugdeUiGmiGklfBPG4T1igh1iChKeC0Mdxnc=",
  },
  "New avenue": {
    val: "Новы avenue",
    translated: true,
    h: "EyqJb2lqkOre5EVjsnQYGA3tj0tYdB/UHeT1HQmp6g4=",
  },
  "New bucket": {
    val: "Новае вядро",
    translated: true,
    h: "aIKjDQtVbUMjIHU/6fccfiWBUIwUBnAofdzRJTCuytI=",
  },
  "New car": {
    val: "Новае аўто",
    translated: true,
    h: "Bp27l6cn2XdsJhTwsG7CqndX5v6581sQjpY4tMVeh88=",
  },
  "New computer": {
    val: "Новы камп'ютар",
    translated: true,
    h: "zrx1OP3GJYjfIIZU0Sa31Mm3aQjGco6OnX25VqxnLlY=",
  },
  "New phone": {
    val: "Новы тэлефон",
    translated: true,
    h: "v6DgXaDFo1Yjq7Cyz8tC29KXNgr704sFNCnXIedKsHw=",
  },
  "New roof": {
    val: "Новая крыша",
    translated: true,
    h: "AzV1g+0ivzcHHsk+jxoIrHthrDJ7wuVUOfurDtwV3j8=",
  },
  "New transaction": {
    val: "New transaction",
    translated: false,
    h: "1VsMSv2xvSjfHSqSZPw0gw1fD9E+Jvyr+2JVT/4bt64=",
  },
  "New value": {
    val: "New value",
    translated: false,
    h: "IYMui0S7sNqh1DSN12/iCzLNTNeExrjoZ96g5EkvRgc=",
  },
  "No": {
    val: "Не",
    translated: true,
    h: "ssvE4uVUWmxD9vjMjw5HZnc/psg9I4B2MTtvoeNJyvY=",
  },
  "No conflicts": {
    val: "Няма канфліктаў",
    translated: true,
    h: "UlN5g4bplbpYSjOMLbuCBZ5ICB8dMKhKiRial9fMUF8=",
  },
  "No name": {
    val: "Няма назвы",
    translated: true,
    h: "Z85JCnN1GdDw+yMwZqwW8aeKgQkvCHCkVIkIjZt7G00=",
  },
  "No, don't connect": {
    val: "Не, не злучацца",
    translated: true,
    h: "MaiZRnZgYzKFsvyy1L/fnIA4McuhD8MAo4t+Rw216oE=",
  },
  "Normal": {
    val: "Звычайны",
    translated: true,
    h: "hjYDsfwaNZVxJ5eupqHy97JfTq/YAPm+bD+Zx0zrGuU=",
  },
  "Not Transfer": {
    val: "Не перавод",
    translated: true,
    h: "GJsf5+RmvoXTk3dewQIb90+6xb+mujI/mpSM8cmgUEI=",
  },
  "Not running": {
    val: "Not running",
    translated: false,
    h: "PC00/YYL+rTs9SryRz4ennpjhF/LuzL/1aMY6Hiajmc=",
  },
  "Not yet cleared": {
    /* Tooltip text indicating that a transaction has not yet cleared. */
    val: "Яшчэ не праверана",
    translated: true,
    h: "Hf/KSsxHfxvXx0udkqgCw/QkkE8Vi5ex9pdYnX6qzEU=",
  },
  "Note": {
    val: "Нататка",
    translated: true,
    h: "omcHOlFDF1aMLf9t2/tJ9R1dYEFSQC9IiPuXLXuFwEk=",
  },
  "Nothing found matching:": {
    val: "Супадзенняў не знойдзена:",
    translated: true,
    h: "NF10b/Nmjj8holFGK7KIiaJhSb8bsL9Zt/Fa8fFy4gk=",
  },
  "Number format": {
    /* Label for budget number formatting preference */
    val: "Лічбавы фармат",
    translated: true,
    h: "RxooctpubAJr5NcKn57a5kjGBEdlPT5b2h6PUFLqxxE=",
  },
  "OBJ.account_id": {
    /* Account label */
    /* Account label */
    val: "Account",
    translated: false,
    h: "ihCgI4A9UaFZ63kuiKXqFHoGsze2dYwzpgSVU0clMfQ=",
  },
  "OBJ.amount": {
    /* Transaction amount label */
    /* Transaction amount label */
    val: "Amount",
    translated: false,
    h: "DHNNaJF4hWTWIFdaMdMhUT4aSdti7ZfaNexABzxWWzc=",
  },
  "OBJ.created": {
    /* Object creation date label */
    /* Object creation date label */
    /* Object creation date label */
    /* Object creation date label */
    /* Object creation date label */
    /* Object creation date label */
    /* Object creation date label */
    /* Object creation date label */
    /* Object creation date label */
    /* Object creation date label */
    /* Object creation date label */
    /* Object creation date label */
    val: "Created",
    translated: false,
    h: "8ELUP5FRI8KPKAswN0H7ALwQ3sP6liJQvRN5tbeBYzo=",
  },
  "OBJ.id": {
    /* Object ID label */
    /* Object ID label */
    /* Object ID label */
    /* Object ID label */
    /* Object ID label */
    /* Object ID label */
    /* Object ID label */
    /* Object ID label */
    /* Object ID label */
    /* Object ID label */
    /* Object ID label */
    /* Object ID label */
    val: "ID",
    translated: false,
    h: "ge86Jcy26vcv5uPFI29MfLOxHh8ctACck6nRdrl9aM4=",
  },
  "OBJ.last_used": {
    /* Last used date label */
    /* Last used date label */
    val: "Last used",
    translated: false,
    h: "G5a6Jdor9jRT/Wtcg9SfXQsvqL7VFvnVD2+gq7yT1Jg=",
  },
  "OBJ.memo": {
    /* Transaction memo label */
    /* Transaction memo label */
    val: "Memo",
    translated: false,
    h: "9yClwoAwAV0+DXl8NnkkAnlUi+Ebp2soPwN5meYKgWY=",
  },
  "OBJ.notes": {
    /* Object note label */
    /* Object note label */
    /* Object note label */
    /* Object note label */
    /* Object note label */
    val: "Note",
    translated: false,
    h: "omcHOlFDF1aMLf9t2/tJ9R1dYEFSQC9IiPuXLXuFwEk=",
  },
  "OBJ.payee": {
    /* Transaction payee */
    val: "Payee",
    translated: false,
    h: "vEPcESYpxu8dkXCIJQFVpBeYbocJdS1ypbD50YW9B7Q=",
  },
  "OBJ.posted": {
    /* Transaction posted date label */
    /* Transaction posted date label */
    val: "Posted",
    translated: false,
    h: "h6jjM8ytGdEj+QfDnTVzEdq+0oLSE9zd+MArY7gtjzU=",
  },
  "OFF": {
    /* Label for toggle switch OFF */
    val: "OFF",
    translated: false,
    h: "g0c9fS73Ra/6fEcgtA+AZ5QtmmCEO7dX81vP7YtzM4o=",
  },
  "OK": {
    val: "OK",
    translated: false,
    h: "mMSSK7ZBxlx6MLe8r98jC5sAtmk2McVhRqslsnhu5KM=",
  },
  "ON": {
    /* Label for toggle switch ON */
    val: "ON",
    translated: false,
    h: "wZR/9OiLHV0XO5Mm9aURB4fbSWSyea2Z6CQce8Q14gU=",
  },
  "Off Budget Accounts": {
    val: "Off Budget Accounts",
    translated: false,
    h: "EQ0I5sn/xpO55GIvIhUF8/XeTi0g5sxvvyE7TiynJDQ=",
  },
  "Off budget": {
    val: "Off budget",
    translated: false,
    h: "cw3ZD6kn6Mat0qZqOZP0Is9hg7xmOxrKqKCD8CIjmz4=",
  },
  "On": {
    val: "On",
    translated: false,
    h: "nMAfqtecKNqqRD1YLNX1F32SXJy1exEgm1QvpnZLBQQ=",
  },
  "Open Anyway": {
    /* Label for button to indicate that a budget file should be opened even though it was made with a newer version of Buckets */
    val: "Open Anyway",
    translated: false,
    h: "C3I8WidkzZOLAGX0ypckK7pR7+e/M/X/YVIV1GCTYms=",
  },
  "Open Buckets Budget": {
    val: "Open Buckets Budget",
    translated: false,
    h: "5odppwzoA5bC5nAM3F+GDOVrAq3NfjGxrE0ZFXseCDg=",
  },
  "Open Budget...": {
    val: "Open Budget...",
    translated: false,
    h: "67FfAce57aSIe2ncVfWeIeiiRLQQ8uuEUdDyI6UHxHU=",
  },
  "Open Recent...": {
    val: "Open Recent...",
    translated: false,
    h: "Uf1w3VIwUvsmKvOkQtBwsGvbRzQ5gMbEq/iyNzv95cs=",
  },
  "Open Transaction File": {
    val: "Open Transaction File",
    translated: false,
    h: "8teUT2P/KToCDoMTqS88JNVtG9PTE/5PojtS1SGmokw=",
  },
  "Open Web YNAB Zip File": {
    val: "Open Web YNAB Zip File",
    translated: false,
    h: "etHUkWVrpkdYsNeOHkK2wLKMkL4YYkEjNO4WwPdIPMY=",
  },
  "Open YNAB4 File": {
    val: "Open YNAB4 File",
    translated: false,
    h: "BrKgvN0SgW410a7e11V3gP+FgW67iTGIY+o/cKI1Ftk=",
  },
  "Opening balance": {
    val: "Opening balance",
    translated: false,
    h: "OEuQ3gAWrV+lPay2usXLKN3bNCH87PEsrcr+thNNbJY=",
  },
  "Optional message:": {
    val: "Optional message:",
    translated: false,
    h: "zVM8610w5Mn1yRIYOsmOY5ZxBd2KLIudsimw610auYU=",
  },
  "Or click to download the new version manually.": {
    val: "Or click to download the new version manually.",
    translated: false,
    h: "J+hkW+8xOyf72R6IgkvGlwWYNzHN+/aWRtotPks3C5U=",
  },
  "Other devices have made the following files available. Choose where you would like to save them on this device.": {
    val: "Other devices have made the following files available. Choose where you would like to save them on this device.",
    translated: false,
    h: "Fbk5s0n43m2f5wfmDIpYQniAcPes2dp0Opv/VxSZJGE=",
  },
  "Out": {
    val: "Out",
    translated: false,
    h: "v4Oj0CQx7cmHP4mcJsZX4xMTzMzeFS81XA9gU3qOFKU=",
  },
  "Overwrite budget from backup": {
    val: "Overwrite budget from backup",
    translated: false,
    h: "p47XTJ4eKHU3WYE+YwdBvSL80vnN/gn5Xf7C+/gs66U=",
  },
  "Pairing code": {
    val: "Pairing code",
    translated: false,
    h: "vEvXjrpoLPbXr+M9YBSVz5TplRIOw8ghDETxlgdUp7k=",
  },
  "Password": {
    val: "Password",
    translated: false,
    h: "nhByOwQBMFlIuzeSPsoMPTnOwa4wBUBDjDxArgBfXjE=",
  },
  "Password not yet set": {
    val: "Password not yet set",
    translated: false,
    h: "8NXPDxaFV7KVroTg3YTaO/dWsepbJT/ASSZw9yGeD5g=",
  },
  "Password reset": {
    val: "Password reset",
    translated: false,
    h: "dVWv+2lbwYUiQVBBqp1wHOfyMDlGJq8aqtvWV20t/Ns=",
  },
  "Passwords did not match": {
    val: "Passwords did not match",
    translated: false,
    h: "PyUeXNOVYhNDM/De1HIPLeiwy6d+x7bkZphOo5ZqR6Q=",
  },
  "Paste": {
    val: "Paste",
    translated: false,
    h: "n2Hnio0AcQPZejqQ+hm35GthBg0zYDNoxd8RCFRUhu4=",
  },
  "Paste and Match Style": {
    val: "Paste and Match Style",
    translated: false,
    h: "w8hRIxBBNWtXNPcYtQ4t/mTHfPF66U/mJbVpOiIDgYE=",
  },
  "Paused": {
    val: "Paused",
    translated: false,
    h: "sMAADusAjpKEUapa7bSzeAnEAbEGpH+NKBgGh068Ifw=",
  },
  "Payee": {
    val: "Payee",
    translated: false,
    h: "vEPcESYpxu8dkXCIJQFVpBeYbocJdS1ypbD50YW9B7Q=",
  },
  "Payees": {
    val: "Payees",
    translated: false,
    h: "YjA+7FE+9F3uMVjqhQQyv29+TRFaEMDJfFGbbX1+9aI=",
  },
  "Pending merges": {
    val: "Pending merges",
    translated: false,
    h: "7vaBvdca+0T8ZgfGLkLVyTGgsK9QgFVnFdWRmqi8cbw=",
  },
  "Pending...": {
    /* Status when a connection to another device is pending but not complete */
    val: "Pending...",
    translated: false,
    h: "EBff3fGHatt8ejJo8RfuFp62oI9ZKjguA+ZUW6tDU7I=",
  },
  "Permanently delete account and transactions": {
    val: "Permanently delete account and transactions",
    translated: false,
    h: "mSRS1xHHrwwVBuWBlj7RZIGTyGuUy4GwrwOFty5tZrU=",
  },
  "Personal Loan Payment": {
    val: "Personal Loan Payment",
    translated: false,
    h: "cL5KAz7DWc3XTzI4eo3t1PaGUe16WM+dKBg2ykfpQ6A=",
  },
  "Phone": {
    val: "Phone",
    translated: false,
    h: "9WrpirmkhUIuWq47S+FrVpJP+prT4uInaMOfMHjxS8c=",
  },
  "Playing": {
    val: "Playing",
    translated: false,
    h: "69elN/r6NyshRWtcjLOKso9OmdOJhvg/ix+Xy/fE+Z0=",
  },
  "Please enter your Buckets License below.": {
    val: "Please enter your Buckets License below.",
    translated: false,
    h: "xbsLH9dKhhcdpY6+CFD5E3/4IdnZZk49WmeisyuQ/oo=",
  },
  "Port": {
    val: "Port",
    translated: false,
    h: "u+5cy7Hv8eqnpUCJUVP2QmhGFpu7Zq4UquU/U7tcspI=",
  },
  "Possible Duplicates": {
    val: "Possible Duplicates",
    translated: false,
    h: "ofGzHt7c7jfCo867EwNvCl3vCUJPLeLhFiC5Fmgrgp4=",
  },
  "Posted": {
    val: "Posted",
    translated: false,
    h: "h6jjM8ytGdEj+QfDnTVzEdq+0oLSE9zd+MArY7gtjzU=",
  },
  "Preferences...": {
    val: "Preferences...",
    translated: false,
    h: "6iQxyJ1WC9/Z0f0saApfwL5hmhgN5YgJeikLAYqCGBI=",
  },
  "Preparation": {
    val: "Preparation",
    translated: false,
    h: "hAU2jJdFn2hdOUvG6S3yousGGeHnblb2/CsaRHWvQwQ=",
  },
  "Preview": {
    /* Noun */
    val: "Preview",
    translated: false,
    h: "ICJraNVGcHJ6dorVH3VtTMdwZV8dD6wjEdY0Jzm4qbA=",
  },
  "Print...": {
    val: "Print...",
    translated: false,
    h: "Zx0axQhFFBAeUJiZxUAcm9hrf0Dd7+kTskEK3MSkm1Q=",
  },
  "Prompt": {
    /* Title for prompt window */
    val: "Prompt",
    translated: false,
    h: "56HrS6R0zfyg5ruiVb/J04UP3T8O2V99V+mXHvVfEZ0=",
  },
  "Purchase": {
    /* Button label for purchasing a license */
    val: "Purchase",
    translated: false,
    h: "SfwhUMXO5ckJhwUkBjdC9n17k8zH4+hoAlFoUdOwE/g=",
  },
  "Purchase Full Version...": {
    val: "Purchase Full Version...",
    translated: false,
    h: "+6h2Y0QTHEVui0aUhwAlCsyJp/F+S0PYKMRlQysqjrk=",
  },
  "Purchase license": {
    /* Button that takes people to purchase a license */
    val: "Purchase license",
    translated: false,
    h: "3LYaot06ClRiLOZ31fOKIxzRXO8X0w5qFIfav969me8=",
  },
  "Quit Buckets": {
    val: "Quit Buckets",
    translated: false,
    h: "QILEHXgAk6vuNPV3rqkbn2QRZ8WKrPnAZnscp7n8WaM=",
  },
  "Rain": {
    val: "Rain",
    translated: false,
    h: "fqeHyOaOYnCtGAcJlJbhAR37DG6YMrsasUNtiL6z8hc=",
  },
  "Rain left": {
    val: "Rain left",
    translated: false,
    h: "+xrBpD9ex3fqQgh+YuNxsFxWyrbE8G1236f81k2whuY=",
  },
  "Recently used": {
    /* Label for list of recently used buckets files */
    val: "Recently used",
    translated: false,
    h: "tJ5cBjszrV/JztG5V1FUrgo0bfVgXfK5KB495TvGsYs=",
  },
  "Record change as transaction": {
    val: "Record change as transaction",
    translated: false,
    h: "yK0UuSf6pOl+44YBzW+tFNPHt6YYpqe88f+wQCuaHcQ=",
  },
  "Recording": {
    val: "Recording",
    translated: false,
    h: "s1hytW8ZlaU8eRtoTfV+4aCpW5biiyifheE3t0kouUo=",
  },
  "Recurring Expenses": {
    val: "Recurring Expenses",
    translated: false,
    h: "yDp5Agru+QzDSy583s3kjOdZbbe6X1WDfMeSNXsYlaY=",
  },
  "Redo": {
    val: "Redo",
    translated: false,
    h: "7buMF65dyGtKDY/ZW/Lkn7eUmdudCsdGV3KR2lYLLA0=",
  },
  "Regenerate": {
    val: "Regenerate",
    translated: false,
    h: "u5QDOgMBGl3INOqya7C/iE0tXSBbYdhLgcM9mBSHQ6k=",
  },
  "Registered to": {
    /* Label for the name/email of the person this application is registered to */
    val: "Registered to",
    translated: false,
    h: "fDXs0ZL8cmmMNVzrdFyhb8+RwdyTtA2b9yOO1B0nTrA=",
  },
  "Relay client": {
    val: "Relay client",
    translated: false,
    h: "mSWVLtN7G9ZyP/WXAVEiOcbZQJIK6YenAW9E0ZZS3B0=",
  },
  "Relay server": {
    val: "Relay server",
    translated: false,
    h: "+cMcGjAKTrxBcgm02bYOEYsUTqHNoQJayrxZ+3L3Nag=",
  },
  "Reload": {
    val: "Reload",
    translated: false,
    h: "hUVVd3tppLGqwgo2OeC3h334aTF0Y+/GHbuL/I1clYk=",
  },
  "Remote device": {
    val: "Remote device",
    translated: false,
    h: "kGM8ugCEJGdTGfBFNcwYe5BNeXY+Wh9J4nYpxeXj2ZY=",
  },
  "Remote devices": {
    val: "Remote devices",
    translated: false,
    h: "Pnrxp4rS7bnapZb26P4HXC5hFardsCyTT6Idz/SFJuE=",
  },
  "Remote file": {
    /* Noun; label for budget filename */
    val: "Remote file",
    translated: false,
    h: "56l/nivDa2uMpQGnE8MPPBt60GjEgxNG5Cr/fNrTlO8=",
  },
  "Remove Categorization": {
    val: "Remove Categorization",
    translated: false,
    h: "b5sIQMfXAnBAqHD2NJfIgIAxclRGe5LJ7NzzF6sOruQ=",
  },
  "Rent/Mortgage": {
    val: "Rent/Mortgage",
    translated: false,
    h: "sCLO0xIawRUzVC3QV8aqowoCCfwYNvtXW848jCLfT10=",
  },
  "Reopen": {
    /* Label for button to reopen a close account */
    val: "Reopen",
    translated: false,
    h: "5497b4yxPFO2M524tL0qmmNk47Qv/aca/7n0zMEeX/o=",
  },
  "Reopen Account": {
    val: "Reopen Account",
    translated: false,
    h: "KBv9ohpTpLSanhr/AFbKdJCA0VZ1iJ0THB53Hut00v4=",
  },
  "Report Bug": {
    val: "Report Bug",
    translated: false,
    h: "RxuE9Dh0Dadda2PtjUPD0dQ7b8aQok84Ytvw31ABBRU=",
  },
  "Report Bug...": {
    val: "Report Bug...",
    translated: false,
    h: "i17nG0QruMiCn612ogDToWB1g4xqqei691Yeh/t8MIk=",
  },
  "Report Translation Error...": {
    val: "Report Translation Error...",
    translated: false,
    h: "/jSK7LcBLJ1FsOYb9ntsVYAxwAyGLLUZXlTL/zrC020=",
  },
  "Required deposit:": {
    val: "Required deposit:",
    translated: false,
    h: "Q34JZduUI2Lx8xxjkeH/Md92nqWgEcbPFZjgf5m7tXA=",
  },
  "Reset Password": {
    val: "Reset Password",
    translated: false,
    h: "PHk0gZ6FwtHbvhVQhAv2NOv4tUth66ZawXknegPfOIU=",
  },
  "Reset bank macro password": {
    val: "Reset bank macro password",
    translated: false,
    h: "aGiRaSU/j/Kke84s+8fSjfD+y1hVndJAUFpywUJVq50=",
  },
  "Restart Buckets": {
    val: "Restart Buckets",
    translated: false,
    h: "TNcYWk7YxhZ0U9Q+mFMRedeWB36VsDXoYgBapDvZCgM=",
  },
  "Restart Buckets for changes to take effect.": {
    val: "Restart Buckets for changes to take effect.",
    translated: false,
    h: "WDqnfUftItQB8zteFdZrFOknNYODkXCwU89Lk/Hs/SQ=",
  },
  "Restore from backup": {
    val: "Restore from backup",
    translated: false,
    h: "4/wBBIqPRkVkrgO1WQ28ED/bEOnF9yg7FMna28aBMC0=",
  },
  "Restored budget from backup": {
    val: "Restored budget from backup",
    translated: false,
    h: "ETnF9ML8onmHyfTrUsxJwyn/DQp3IFbSD1m6PNM9CAU=",
  },
  "Reverse": {
    /* Label for checkbox indicating that transactions should be imported in reverse order */
    val: "Reverse",
    translated: false,
    h: "asyh3SM4xzCuJwKJ77z/6mR7GortI9HKht5YBJYkHnk=",
  },
  "Run": {
    val: "Run",
    translated: false,
    h: "msfklVWTzDTqa2SaDeN2NULTRVjZPdgr6/gggE5vemI=",
  },
  "Running": {
    val: "Running",
    translated: false,
    h: "Fc5kaM2PdFj1JUHmSYpQFl5RnVw8wUq7J00zdnDXNBc=",
  },
  "Running...": {
    val: "Running...",
    translated: false,
    h: "a2doeW7lyGRq5yq2cOD55HCblS7Hfy72/2G0cp7fk9c=",
  },
  "SQL Query": {
    val: "SQL Query",
    translated: false,
    h: "SNOm941c8lDAaYjd9suzSEkHFjFRo8e683rumVLZhoA=",
  },
  "Save": {
    val: "Save",
    translated: false,
    h: "wduD0WXtkIpIb6B4R8AA7ph724u3/Gtv27uaky6rEAU=",
  },
  "Screenshots:": {
    val: "Screenshots:",
    translated: false,
    h: "Vl/m/PU/CoPSp/t+drAAfxlQ818VKjlWKN8fsB4/+V4=",
  },
  "Search": {
    val: "Search",
    translated: false,
    h: "vembE+Cp1aKCKR2j2LCJD29QyiQxfGPUcGI1I8l5/5Y=",
  },
  "Search categories": {
    val: "Search categories",
    translated: false,
    h: "IScCkXq3OcNUufpAsgrWXkdRVqBrowHYo2hdSPS+X7I=",
  },
  "Search...": {
    /* Menu label for search page */
    val: "Search...",
    translated: false,
    h: "TOtty3gn23+64CNUlKn+bNe2V0f4xfUBGLHQ/Pw8XKQ=",
  },
  "Search:": {
    val: "Search:",
    translated: false,
    h: "OHBHBOVnuMjmjWHZURDrna8FWv+geQYMQuobRo4tkq0=",
  },
  "Searching...": {
    val: "Searching...",
    translated: false,
    h: "7gAp07Zv3EjrgHoWJ04wEdRefy/aQ0zT8Y2EgQrnbHo=",
  },
  "Select All": {
    val: "Select All",
    translated: false,
    h: "tLJuQPindRFUyvGGdMLJbBHcVpAODsfT5p2gDnpB/Oo=",
  },
  "Self debt": {
    val: "Self debt",
    translated: false,
    h: "zRWPLHqBTGcGqHHBHWdXpN2eOUUhRhvCyeAccFlR9Z4=",
  },
  "Send Report": {
    val: "Send Report",
    translated: false,
    h: "aLgG0qubuw0p0tGIUYKjgxecVsL0e3AKvQ5+W2JZg18=",
  },
  "Services": {
    val: "Services",
    translated: false,
    h: "Y5+GuNZXfFSynDsHvAY8cr0RqU+moaHZNmOk2eQrsNs=",
  },
  "Set Mapping": {
    /* Undo/redo label for setting the mapping of a file import */
    val: "Set Mapping",
    translated: false,
    h: "0VIJHYOJcEvpUbDh2MFyEtmMxHbY10WbgLG0YVeRSng=",
  },
  "Setting": {
    /* Noun: a single budget setting */
    val: "Setting",
    translated: false,
    h: "VPMIV8ll2EYKjYDlgvDS3IbSSfjmE5VmCEGwFTHn/ys=",
  },
  "Settings": {
    val: "Settings",
    translated: false,
    h: "g5CfgkRu6cPoKgSs58kE8baksjDRuXC1WTLWKVn75z0=",
  },
  "Share with": {
    /* Label for remote devices a budget is shared with */
    val: "Share with",
    translated: false,
    h: "U9hHc0V4Fpw0S1hjtdNc0UEGCP7X6n6JmCeoSW/LgVo=",
  },
  "Shared folder": {
    val: "Shared folder",
    translated: false,
    h: "oeX6u9PQi6wT6MDH6F+w/A90h0XaexWgp2eca3mEfbE=",
  },
  "Sharing": {
    /* Label for sharing preferences */
    val: "Sharing",
    translated: false,
    h: "+wdr1d9w83UkBcXqGDOkGlmDhl24ktIp0it2O14f4kE=",
  },
  "Sharing key": {
    val: "Sharing key",
    translated: false,
    h: "T90VMQdBq1lWvcHGfsIRWyHfGz8aM9ZB2cWLO1VoH2Q=",
  },
  "Show All": {
    val: "Show All",
    translated: false,
    h: "Kng6HqlojyhuqEK6kaB3KPtAs1w0LcpFWkJYrscali0=",
  },
  "Show Budget File...": {
    /* Show the current budget file in Finder/Explorer */
    val: "Show Budget File...",
    translated: false,
    h: "iMBwVJg17i7WagCWW3Att0OrtczZYyVqAM7PDdo5sXk=",
  },
  "Show Log Files...": {
    val: "Show Log Files...",
    translated: false,
    h: "In00T9z1A4xO6nLu8zAU5s3UzH3+IcK4XjRvrT9CGMs=",
  },
  "Show debug info": {
    val: "Show debug info",
    translated: false,
    h: "TXWI2u7pYf+GGAZ9ed2OwHkF93XqFdRCj1q7sE4PsnQ=",
  },
  "Show folder": {
    /* Button to open a folder */
    val: "Show folder",
    translated: false,
    h: "479YuRtJUsvCCqzaEjK+WyPmy20v+YQPfY3Xo/eIzKM=",
  },
  "Show full changelog": {
    val: "Show full changelog",
    translated: false,
    h: "nu/b3QeVa2N7QmrPffBdK2zSVYIp81gVGbFjcYrlL5A=",
  },
  "Sign": {
    /* Noun referring to the sign of a number (positive or negative) */
    val: "Sign",
    translated: false,
    h: "uw6BT7o9vlsgV2TpwBFx/MfF1npvA+6ru4lXXcSzoCM=",
  },
  "Sign in to the YNAB website, click My Budget then Export Budget.": {
    val: "Sign in to the YNAB website, click My Budget then Export Budget.",
    translated: false,
    h: "etFjjZd2+flhi9J3CbiPL8eb4Gc3jHFAKkMPuQZmxlA=",
  },
  "SimpleFIN Connections": {
    val: "SimpleFIN Connections",
    translated: false,
    h: "yzXdwvSSNy+FUFHW5+bAqRMq+j6krsNUFb/uFreKPNY=",
  },
  "SimpleFIN connection": {
    val: "SimpleFIN connection",
    translated: false,
    h: "g+4foa5uuY9Yv3vI/gA6gaEoNUJi2k4oFouZlUWwv/U=",
  },
  "Since some buckets have negative balances, this payment balance may not be what you actually have available for a payment.": {
    val: "Since some buckets have negative balances, this payment balance may not be what you actually have available for a payment.",
    translated: false,
    h: "DcT2jCu9H9VSH4esyPHz75dbhviMkM3N/TD1N6PtYyM=",
  },
  "Skip This Version": {
    val: "Skip This Version",
    translated: false,
    h: "YnC7GSI4QITirt1GGV/Tc1FvTbJYICkEeF3zj4u4eak=",
  },
  "Skip invalid": {
    /* Label for checkbox which controls skipping invalid transactions during import */
    val: "Skip invalid",
    translated: false,
    h: "sKPi3ongM5VPkq2aFjBN1FX9/N/KiThGWd54qaHNfi8=",
  },
  "Speech": {
    val: "Speech",
    translated: false,
    h: "i4Qm95bH8zVEbjpkUi7jvQiLtDzGkW9z90XEkiglzHM=",
  },
  "Spending Money": {
    val: "Spending Money",
    translated: false,
    h: "7mLvCPVxhYqWXYW8EcSN4N6vyUtQqT4PnR0iC1ucTtY=",
  },
  "Start Merge": {
    val: "Start Merge",
    translated: false,
    h: "48IhJ8jvgXzTH0cgI8MR9W3NiQFlvBbJA/j7mj6KFhY=",
  },
  "Start Over": {
    val: "Start Over",
    translated: false,
    h: "hlKNxy6ZDz4ny/qpQfkv6FwXDangtq2ECEo+ICgEbJs=",
  },
  "Start Speaking": {
    val: "Start Speaking",
    translated: false,
    h: "v8sFOpEAoczjEjGparKZylHWHoxHMVQriwuhJaec2rY=",
  },
  "Start with a template": {
    val: "Start with a template",
    translated: false,
    h: "HbSWD1rCMlssQIfvhdN+qwtdXT/k2Rq4+lTObtGpWbo=",
  },
  "Status": {
    /* Connection status of remote devices */
    /* Label for connection status of sharing avenues */
    val: "Status",
    translated: false,
    h: "fu712YZJJBbNWIpP5QaYV+fcz5rcN4DkkaOGdL/X6hk=",
  },
  "Step took too long": {
    val: "Step took too long",
    translated: false,
    h: "Py3rsk0guEg0d8Ce9Lbfwzf1zP7E4Z8YPSOu165mOc0=",
  },
  "Stop Speaking": {
    val: "Stop Speaking",
    translated: false,
    h: "Pme2/qME7bKdVrHTIEBQYt1Fu/SXRNGyy6sLBfKpqqk=",
  },
  "Stopped": {
    val: "Stopped",
    translated: false,
    h: "9KSqBDjMEVALs44MtvCW75xXb7Ta+lGl6bMoOlDV824=",
  },
  "Student Loan Payment": {
    val: "Student Loan Payment",
    translated: false,
    h: "j83e9PkiJgq0J5iPOaku/mbjw9H3KtXBaDV4ntsQktk=",
  },
  "Success!": {
    val: "Success!",
    translated: false,
    h: "6NxF/uD6sOEPkEbPFOHdBKRxj0ZXVbmnPkRXNJDy0zs=",
  },
  "Suggested value": {
    val: "Suggested value",
    translated: false,
    h: "k6ScHeFo3C5+aB0s7M5rumKKBu3AJp93St0oUuF2GFw=",
  },
  "Swap NAME and MEMO": {
    /* Label for checkbox that will swap the value for NAME and MEMO when import OFX files */
    val: "Swap NAME and MEMO",
    translated: false,
    h: "ayF7yBQJox0msQ75+rZt4xxanK31lYhwEoynkOsepjc=",
  },
  "Sync": {
    val: "Sync",
    translated: false,
    h: "zJAmFTCwHue7APF8kCb39YCX8J17Tsy3mxyhpQQhge8=",
  },
  "Sync complete": {
    val: "Sync complete",
    translated: false,
    h: "e2VXpLTi1mhVSVqDkExwdM5j8PhfW0MHeOqBwabU4Zo=",
  },
  "Sync has not yet been set up.": {
    val: "Sync has not yet been set up.",
    translated: false,
    h: "B5XIfqqMdt0gMHz2zsZr9GTj9vSRAS5R2akgGce+fsg=",
  },
  "Synced balance": {
    val: "Synced balance",
    translated: false,
    h: "yyCVeQRle/vbcZ1/QyVYtL+ZmyQ5WanHCYKZpJqFd6o=",
  },
  "Syncing...": {
    val: "Syncing...",
    translated: false,
    h: "kuwg7vpvp082IqBtRakekOVu7bqB4PYxhnFVsoBDt/g=",
  },
  "System default": {
    /* Option for Buckets language preference */
    val: "System default",
    translated: false,
    h: "A9haWZjRR5Su694Q278jjqi/xmRweA6I6et1Q9L3ahI=",
  },
  "Target date:": {
    val: "Target date:",
    translated: false,
    h: "InmNQoNHlJkDpjvEB+J1XPqDWRqnfNIUwTQ86iNiOGc=",
  },
  "Test Toast": {
    val: "Test Toast",
    translated: false,
    h: "5SbiliirLaAKLdgRThX+cO2RwGuC87t3Z1O0xT2WsAE=",
  },
  "Theme": {
    /* Label for application theme setting */
    val: "Theme",
    translated: false,
    h: "iIVgvkFsqSibVEM+h5dM+gyXv0J8Elgp99rvJsOFYqo=",
  },
  "There are unresolved conflicts": {
    val: "There are unresolved conflicts",
    translated: false,
    h: "WGAgJ2b6hUZ5DKTAJ6APu2LzgV5Fzwg0I80+N1TETdQ=",
  },
  "There has been an error.": {
    val: "There has been an error.",
    translated: false,
    h: "viN5uLRSpgzhvoD9KO9g1cr7ihLQ0Men9LiUpy9RcwE=",
  },
  "There was an error.  Maybe try again?": {
    val: "There was an error.  Maybe try again?",
    translated: false,
    h: "l+W2GSV3tl8Gx19ZW+wOCziBj5/UeMCVO8tvh4P7LEo=",
  },
  "These devices can talk to each other": {
    val: "These devices can talk to each other",
    translated: false,
    h: "eNTVUVG4RQJPWolU7i1WUrn9Xi4zBpLJ4eQHjG71Kio=",
  },
  "This budget was upgraded for a newer version of Buckets.  Using it with this older version may not work.": {
    val: "This budget was upgraded for a newer version of Buckets.  Using it with this older version may not work.",
    translated: false,
    h: "SJjFg0juSV/ZrJcAQJDMXveLnxwSQT4nfJiyMQFkbMw=",
  },
  "This device's name": {
    val: "This device's name",
    translated: false,
    h: "eTNSTczX466LRmFxprC4rfZhDomB7x4xWYltPshnAB4=",
  },
  "This is a special group for all the buckets without a group.": {
    val: "This is a special group for all the buckets without a group.",
    translated: false,
    h: "QP5fEqFwlvHWJyjzrIWUJFlMvhFDxxSsl1vnej/p30I=",
  },
  "This tool will delete data to make it easy to start over with your budget.": {
    val: "This tool will delete data to make it easy to start over with your budget.",
    translated: false,
    h: "+40oxGj2jDLNe4ggunYHsgL/9aQz0pw5IeRM5VlYIIU=",
  },
  "This will break all existing bank macros": {
    val: "This will break all existing bank macros",
    translated: false,
    h: "VStGFY84kcqELxtAwamD6vI9ELaA4dZnOs2Ubvwnao8=",
  },
  "Thousands separator": {
    val: "Thousands separator",
    translated: false,
    h: "lYK3D4dxDxbFalJtMHHtc/++mciDmIUg9A3tgDiUkzs=",
  },
  "To": {
    val: "To",
    translated: false,
    h: "syFKIORaeu0FezL85oAbo76XXa8k7bxITMbNowi8ba0=",
  },
  "To use Buckets, you must accept the End User License Agreement (EULA).": {
    val: "To use Buckets, you must accept the End User License Agreement (EULA).",
    translated: false,
    h: "0six0i9oNNM/hjCYct1UTEqdgMn0uoBbaBq0cvnoZLM=",
  },
  "Toggle Developer Tools": {
    val: "Toggle Developer Tools",
    translated: false,
    h: "IYSSUL9ezB58nRuajYVa+zH4ucrmXQOB92zA7sDlrJc=",
  },
  "Toggle Full Screen": {
    val: "Toggle Full Screen",
    translated: false,
    h: "2ZRq+R5E0Cp4QI+y5jCefU1IOiYvNWLrN/iiJq6hGr8=",
  },
  "Tools": {
    val: "Tools",
    translated: false,
    h: "mPsch0seV0ZNaU+41My/wS+DkAGfYqzWpPlJpfT1sBs=",
  },
  "Total": {
    val: "Total",
    translated: false,
    h: "u6dF4hac3zx/3TL4nED+x50jCos7B3IKIqm+WqkIZXk=",
  },
  "Total amount your buckets want each month.": {
    val: "Total amount your buckets want each month.",
    translated: false,
    h: "PdavPuX8D9m/BkLbr04OKhddGvl8+l0iDiqd+5K9sMc=",
  },
  "Transaction": {
    val: "Transaction",
    translated: false,
    h: "G0gRZS6Zq1VoQqtY+L8fY3ogdqSl/OAoTurOZ4L480Q=",
  },
  "Transaction ID": {
    val: "Transaction ID",
    translated: false,
    h: "5DaWwSVPo8La/gW0/QWRXAHx08KcbBLOe7BrRuMnKMQ=",
  },
  "Transaction Type": {
    val: "Transaction Type",
    translated: false,
    h: "5OtdraZlT3YBh5NcgKxXigGdmDWur3wzuyeNvRd4mIM=",
  },
  "Transaction(s) deleted": {
    val: "Transaction(s) deleted",
    translated: false,
    h: "8umpuy0JiIWHWgMJdIJu2si38T6QhOVeI70IUVV/i3U=",
  },
  "Transactions": {
    val: "Transactions",
    translated: false,
    h: "4+yGUer/b71cfxTdeUa5QbonqN9ezC8Eii7KO22Ety0=",
  },
  "Transactions to review": {
    val: "Transactions to review",
    translated: false,
    h: "fcauVC7MkwNPXVHbfBl427k53jL2beDDx711UkVI5tg=",
  },
  "Transfer": {
    val: "Transfer",
    translated: false,
    h: "B5GGqjnE8KOjYJjhsFV7zs5TGmGmVPqjihzMVxHJ3sI=",
  },
  "Transferred": {
    val: "Transferred",
    translated: false,
    h: "dMUnHOi8B6xpQztmwKOsEkjhvkEKLHaefSUJ0oR9ZEs=",
  },
  "Trial Version": {
    val: "Trial Version",
    translated: false,
    h: "GtZIXrHILA84HlpKlxi3BErHwR7WIYkQ/e5BE0Fiaxg=",
  },
  "Trial version": {
    val: "Trial version",
    translated: false,
    h: "/B8oxaBijS+cHJQBdPRkq7IfcHyPStMT5uGKWUeZQuQ=",
  },
  "Tuition": {
    val: "Tuition",
    translated: false,
    h: "UpDg7j7/mXJnP7WdFJe4hMlLw2XtH7X3Cj669aLHzec=",
  },
  "Type a date format...": {
    val: "Type a date format...",
    translated: false,
    h: "oOXoncSSYGIZM5rpYEudSx4xWO7x8hRHdt89DNfPv84=",
  },
  "Un-ignore Account": {
    /* Undo/Redo label for no longer ignoring an account from import */
    val: "Un-ignore Account",
    translated: false,
    h: "DVgAPa6nwJLDg7emkZZ+j85bGwcKjEzqlkZlPHkypU8=",
  },
  "Un-kick": {
    /* Button label for unarchiving a bucket */
    val: "Un-kick",
    translated: false,
    h: "P5Z1ij4jmS06jNOQiHymi+/D+uYJktoalTdw+AHGukM=",
  },
  "Un-kick Bucket": {
    /* Name of action for undo/redo labels (i.e. Control-Z will "Undo Un-kick Bucket") Consider this the opposite of "Archive Bucket" */
    /* Name of action.  Consider this "Unarchive Bucket" */
    val: "Un-kick Bucket",
    translated: false,
    h: "7WOQPepkeOH+dwwSbEjomy0amoqY5JtvtlyCSG02c1Q=",
  },
  "Unable to claim access token": {
    val: "Unable to claim access token",
    translated: false,
    h: "Gao95RuT9JvhdAoZ5winV9os7iMaPIex3Vq9CMSjhzs=",
  },
  "Unable to open the file:": {
    val: "Unable to open the file:",
    translated: false,
    h: "MxbgnQR4Cyi549ltzzIDDAI1qRGqoeRm0zOApQMS2DY=",
  },
  "Unattended merge not possible": {
    val: "Unattended merge not possible",
    translated: false,
    h: "gj2u4cxLi3C3cxHWoasHcAgEnMNADU6mwZx4EGEZgLU=",
  },
  "Unavailable": {
    val: "Unavailable",
    translated: false,
    h: "tML1A7GUQ8Z/SUbUV6zcxmjjrptonGvYtuU1Y2y/gvE=",
  },
  "Uncategorized": {
    val: "Uncategorized",
    translated: false,
    h: "BjQg1sHfdAVLyMzfMfC6sQnK4vIGQ6vrl6OsGg8Oqkk=",
  },
  "Uncaught Error": {
    /* Title for error reporting dialog */
    val: "Uncaught Error",
    translated: false,
    h: "8shOzic2CgRpaIcNhv/44tsVBDgSItWp3ZbdihMYp9E=",
  },
  "Uncleared": {
    /* Label for sum of uncleared transaction amounts */
    val: "Uncleared",
    translated: false,
    h: "1GBgqlG+RCS8dFTG2z15jLFFd4PCVVXDefXwBRq0oTs=",
  },
  "Undo": {
    val: "Undo",
    translated: false,
    h: "Z1A2vTdYwfdLsWS25iSchnHOHa1VfbQg7u8MDGHk4yo=",
  },
  "Unexpected sync error": {
    val: "Unexpected sync error",
    translated: false,
    h: "78kYsQMTfGS8BNaZVuqYaRojJlTpcmN6CF9PQKKO0ME=",
  },
  "Unknown account": {
    val: "Unknown account",
    translated: false,
    h: "fe+Wdg63x9QKcxCX3/yM3LDBqelVYK1tng28BgQRovw=",
  },
  "Unknown account deleted": {
    val: "Unknown account deleted",
    translated: false,
    h: "2db3S+9bmJWgpIWRAqHm8irdPTY5ZMEsdHeADQ7HdeQ=",
  },
  "Unknown category": {
    val: "Unknown category",
    translated: false,
    h: "bK4teMnFOuofJ4sX76ozAla50yDaLbvb5pCj+New5f4=",
  },
  "Unlinked Accounts": {
    val: "Unlinked Accounts",
    translated: false,
    h: "BPAjsiEkATiwSf9f6kde3yZwSmmyiPDLiZ7Rr+3Zv/A=",
  },
  "Unregistered Version": {
    val: "Unregistered Version",
    translated: false,
    h: "x9ekMClqI57T6jREU5VJurBCzlD+hBNJ8pHNQ0zMB1U=",
  },
  "Update": {
    val: "Update",
    translated: false,
    h: "cQYLRi89RKalUb+A5uCwnJtCV0x+6+otody2dq/mqxk=",
  },
  "Update Account Balance": {
    val: "Update Account Balance",
    translated: false,
    h: "iwKjdHzqHPwoupXiUwrVL1tX4QfO//taXOPXFVtWRVE=",
  },
  "Update Account Name": {
    val: "Update Account Name",
    translated: false,
    h: "xcyLhnHNOTDgJsYGhaelbAmXYam4HWMfD5mQiTiZJ50=",
  },
  "Update Bucket Name": {
    val: "Update Bucket Name",
    translated: false,
    h: "Oa+1EZtc4RTtPYyk5LflMMlQq/esZ3qvTgbSLiKIl4E=",
  },
  "Update Bucket Type": {
    val: "Update Bucket Type",
    translated: false,
    h: "wt5F9WSIpGlUsGaPnhSJlLYk0qraymNHDw0bYzbHlIE=",
  },
  "Update Color": {
    val: "Update Color",
    translated: false,
    h: "6QBa9YrDFsWCiiS/PMj7r+cTmIgMmmqjTnv9x4l90ic=",
  },
  "Update Currency Symbol": {
    val: "Update Currency Symbol",
    translated: false,
    h: "5ni7IpG/zzlc/uAhhkduQ99K/5B9ui5INpaxZw7QTrs=",
  },
  "Update Goal": {
    val: "Update Goal",
    translated: false,
    h: "S3dt9ahT1yTXTCP2uHqiTMkyPUmAvAHvsCeGNa+NL1E=",
  },
  "Update Group Name": {
    val: "Update Group Name",
    translated: false,
    h: "/pmHZLX1mkRHtus8eVyojidhAUe6BocaSkf5dGoIrSM=",
  },
  "Update Macro Name": {
    val: "Update Macro Name",
    translated: false,
    h: "61srDLhVLo6bOo+SbnJ0rMbhNhXXRxEjgP3/nFafMKI=",
  },
  "Update Monthly Deposit": {
    val: "Update Monthly Deposit",
    translated: false,
    h: "rFQ5lKjSNpQyyptg2Y+a4LQ6jwa1xWjKarMapXiD1/8=",
  },
  "Update Name": {
    val: "Update Name",
    translated: false,
    h: "fTqm8NUcvzaYHnGFDmVhLePEd/TFNPhUDzSYIIerjNc=",
  },
  "Update Note": {
    val: "Update Note",
    translated: false,
    h: "h4A+jnQW9OrS0wVVoQ9OEJ5I6/h4p7IWrKvN+uSXe4I=",
  },
  "Update Number Format": {
    val: "Update Number Format",
    translated: false,
    h: "98Qu07eWAHjS80FuHQajrVMMtd0jq5Zq8rRKuDQEZEU=",
  },
  "Update Payee": {
    val: "Update Payee",
    translated: false,
    h: "28JOAeb8QLlBYMLiOO8RGW8SHBJ14Gdp/t/7rprHodk=",
  },
  "Update Payees": {
    val: "Update Payees",
    translated: false,
    h: "hJhDyJDaai8R9NXK8J3AOdqOOhdqmkZeR8ziJyzuzVU=",
  },
  "Update Target Date": {
    val: "Update Target Date",
    translated: false,
    h: "SEac1rQopyHALPSWU85qYV3GE0x9i2OGDB+JYnVID8A=",
  },
  "Update Transaction": {
    val: "Update Transaction",
    translated: false,
    h: "aMF18BJOMjuVOInpbGKf/3jyTE1qYzq4oHzb3sBVcWw=",
  },
  "Update account balance": {
    val: "Update account balance",
    translated: false,
    h: "GQWvUamqQOyoaXm16AiGtHme6kW171erNK5pa4vgDIE=",
  },
  "Update balance": {
    val: "Update balance",
    translated: false,
    h: "XSg0Q5Q7j+G+HNjn3YJOakbNLSjTNcem3BFbw6fTDI8=",
  },
  "Update complete": {
    val: "Update complete",
    translated: false,
    h: "5JP6upRWYG0d3p+rGNvUMcl08i6wvxKs0zhYG5NvUj4=",
  },
  "Update downloaded.": {
    val: "Update downloaded.",
    translated: false,
    h: "DO2vE3TgW3xjiD8ZaOWeScL3qWCyiFPK8GENQ9NosYw=",
  },
  "Update failed": {
    val: "Update failed",
    translated: false,
    h: "MU8WQkSmMfpUADhweg+WSBrhrTcWK23Ow4QqwxyoAfo=",
  },
  "Update opening balance": {
    val: "Update opening balance",
    translated: false,
    h: "Z0BMQUVy9IHw3rAN6dd3xnGsgHNFC+l4FxxGcNc8QJ8=",
  },
  "Updated": {
    val: "Updated",
    translated: false,
    h: "zN8HYtieJpXIt5Bdb1SWdC1+tonH7H3QHVbuUzU4rgY=",
  },
  "Updates": {
    /* Label for section about Buckets application updates */
    val: "Updates",
    translated: false,
    h: "lAv/Y2isYNmD0UIkVd8zZO2kJ9FjxPjiL+Bnajfzxtg=",
  },
  "Updating...": {
    val: "Updating...",
    translated: false,
    h: "gAFg4pzFnJ37C/ReDfO2llXdsckG7onQiLq6WjhBWxk=",
  },
  "Used in future": {
    val: "Used in future",
    translated: false,
    h: "O0zGsqv23d44/pWJqCSt+qkDtG/nBrBI2W0aRA9XoDw=",
  },
  "Username": {
    val: "Username",
    translated: false,
    h: "UAZmOHuQGOos8K4CBGseGzsnoOEV6JPA/VJYYtHu0k8=",
  },
  "Username/Password": {
    val: "Username/Password",
    translated: false,
    h: "2pr0zsSsuFii6F31xH62795E7bFmbKwAYd/oe2E1kBc=",
  },
  "Using this tool can ruin your budget file.  Make a copy of your budget if you're worried.": {
    val: "Using this tool can ruin your budget file.  Make a copy of your budget if you're worried.",
    translated: false,
    h: "TCvA81ztNxeLhpVdiYrF4RLEGEp5FO3YWCgfOyjnjFc=",
  },
  "Vacation ": {
    val: "Vacation ",
    translated: false,
    h: "Buf8KjuQKnfaA4c2qPDVm8FQgYWJUfiCYYkPAnsIIBw=",
  },
  "View": {
    val: "View",
    translated: false,
    h: "paIseOhKCT2+NaUBPKk98vQB/lphf7jIGeERV77doDg=",
  },
  "View EULA": {
    val: "View EULA",
    translated: false,
    h: "6symBeYWMFH1ySjpbWX+XjygI3Cq3j/ywz3b0tPtIHE=",
  },
  "Waiting to retry": {
    val: "Waiting to retry",
    translated: false,
    h: "F88F80XANbwofOEoXYAjMA09+UIhKPUY6qNK7dkEQmo=",
  },
  "Want": {
    val: "Want",
    translated: false,
    h: "lV/eDqkplJ/XKjHyCSE47yOWOl3t3Igj9S559wDKMZI=",
  },
  "Wants": {
    val: "Wants",
    translated: false,
    h: "AOckwUko9CT2K8gxtu/GHFhjivPPgTDgQSjCNSujUV4=",
  },
  "Warning: Doing this will use rain you don't have and could steal rain from future months (if available).": {
    val: "Warning: Doing this will use rain you don't have and could steal rain from future months (if available).",
    translated: false,
    h: "YR+S0SMnFz4+K5vpXrMzMfSaBE5mHBrhQTalzgI0/7U=",
  },
  "Water": {
    val: "Water",
    translated: false,
    h: "BOL+IhrDsm6ooEqGpFPieQoyXrWpV6LvKh0DvkAJ2bw=",
  },
  "Web YNAB Export": {
    /* Label for YNAB export file type */
    val: "Web YNAB Export",
    translated: false,
    h: "tW4h/MIfunRbmUN+oxQ8Sa2pKJQgML5XIcQkPzclpEM=",
  },
  "When \"On\" this macro will be run during a normal sync.": {
    val: "When \"On\" this macro will be run during a normal sync.",
    translated: false,
    h: "HnJ7qVSPXxIg3/lygw1Ln/VvBMBs8roJwXlCpP2KnMw=",
  },
  "Window": {
    val: "Window",
    translated: false,
    h: "qjw17TPhgeX5msjicdTljyCEeBLFbQvz/oyOunMLJnQ=",
  },
  "YES": {
    val: "YES",
    translated: false,
    h: "z2FPqj4x8eJnnL7/njedU5qqPbxgrFqjpsTeqGqJH9U=",
  },
  "Year to Year": {
    val: "Year to Year",
    translated: false,
    h: "YBGCdB/QACmMM/QS2qMrGlC8qtfWz9bhue7sgDaIRHg=",
  },
  "Year's Supply": {
    val: "Year's Supply",
    translated: false,
    h: "E5VfnhjiYed/e2Ezg+RdChSIz6cjwl9oyRzpO1rjl0I=",
  },
  "Yearly": {
    val: "Yearly",
    translated: false,
    h: "LjMZRIZX3jdNUpbBBgqpPR9Az6c4sBWYUwd2WDVb9Rw=",
  },
  "Years": {
    val: "Years",
    translated: false,
    h: "9bCZk+mcGxconx1JMhBZKdnRo4id89h4UiucsvMRAng=",
  },
  "Yes": {
    val: "Yes",
    translated: false,
    h: "GE/aXJgLnZyzdfQqUogXxiNfvU95d1qAGPrlr8vfKmM=",
  },
  "Yes, connect": {
    val: "Yes, connect",
    translated: false,
    h: "nQoLGB1tRewici5GtXIrzivf6Eqzjlms2YBdnfRbFFc=",
  },
  "You are running the latest version!": {
    val: "You are running the latest version!",
    translated: false,
    h: "hShy87A6GAhRqqtK+8VdVeGD70zA64iiV0/SwectQ0I=",
  },
  "You can do math in all number inputs, not just here in the calculator.": {
    val: "You can do math in all number inputs, not just here in the calculator.",
    translated: false,
    h: "dn2W/ktTrcwSzYNSq6IQL7Sl2k8lxZQRsFehzG9Mf7g=",
  },
  "You don't have any recurring expense buckets yet.": {
    val: "You don't have any recurring expense buckets yet.",
    translated: false,
    h: "nq2IDCqs8m0MQJ5lO2TU1cnlj9nP1vwIMWMqi0WGOjk=",
  },
  "You have no closed accounts.": {
    val: "You have no closed accounts.",
    translated: false,
    h: "8BZG+UdW1Rrd/+2zFNv7SskiNpD6DtlNa8LwQulqX5s=",
  },
  "You haven't kicked the bucket yet...": {
    val: "You haven't kicked the bucket yet...",
    translated: false,
    h: "mtaAsLJ7BgWZcbIkRmZ4ZPSSRGXj6vJ2H8+diLhIba4=",
  },
  "You must backup to a different file.": {
    val: "You must backup to a different file.",
    translated: false,
    h: "LAt5pxdaPsRHDU6bS2Cu1aEDIQ2oZAMw46Pa7H6pc5o=",
  },
  "Your email address:": {
    val: "Your email address:",
    translated: false,
    h: "/ip+dZCEKXdLQFW5CAt/fB8OBf/rD+67pz8etOXlJXc=",
  },
  "Zoom": {
    val: "Zoom",
    translated: false,
    h: "Zjzswxbrkbj1TLPOYCtimoyh/aJlkF/mxeghbzdheSs=",
  },
  "Zoom In": {
    val: "Zoom In",
    translated: false,
    h: "p3yHl1qkGVfRDPsLKitBuZhRJIDaTy3fV/vbWqOzo24=",
  },
  "Zoom Out": {
    val: "Zoom Out",
    translated: false,
    h: "hRo1uzcSNStVll7ef2xHOB6PqFh+q7Sg/VHiGcK4M8M=",
  },
  "account-in": {
    /* Label for amount put into an account */
    val: "In",
    translated: false,
    h: "TcCPpYF7/U7vM5pPmpqvJipZt0WPk3A/vC7Ec8pfDvo=",
  },
  "account-net-amount": {
    /* Label for net value of amount in - amount out for an account */
    val: "Net",
    translated: false,
    h: "QITdwYnhK1fVfALCDc6jQhY2jLIUBpPp0/bSHOX6p9M=",
  },
  "account-out": {
    /* Label for amount taken out of an account */
    val: "Out",
    translated: false,
    h: "v4Oj0CQx7cmHP4mcJsZX4xMTzMzeFS81XA9gU3qOFKU=",
  },
  "account-type": {
    val: "Type",
    translated: false,
    h: "xE96uLvSSFjRvRq5lfIcX1LGpnGQeyntOksJQ0X3CyE=",
  },
  "account.balance": {
    /* Account balance label */
    val: "Balance",
    translated: false,
    h: "azvDWgVPY349dq4q8mbtpDhehRsFKYKNzMk/TcuOvEQ=",
  },
  "account.closed": {
    /* Account closed label */
    val: "Closed",
    translated: false,
    h: "8pZrnvzAUQTJhDN/XX31DLvx0wIs1Ww3fV6pktEKEHs=",
  },
  "account.currency": {
    /* Account currency label */
    val: "Currency",
    translated: false,
    h: "3D60KXXRwf14ydWSrd5tvgLQBOCOfNDf05UchJALh14=",
  },
  "account.import_balance": {
    /* Account imported balance label */
    val: "Imported balance",
    translated: false,
    h: "Z2Hg44o19bCItKOAhixAAwpW972mvt3LZyFy7Y3Dhgk=",
  },
  "account.kind": {
    /* Account type label */
    val: "Type",
    translated: false,
    h: "xE96uLvSSFjRvRq5lfIcX1LGpnGQeyntOksJQ0X3CyE=",
  },
  "account.name": {
    /* Account name label */
    val: "Name",
    translated: false,
    h: "bMXfNfAzjiMOnmM+rZmR8I9iyrRaMmSXja7cZ0eGcwU=",
  },
  "account.offbudget": {
    /* Deprecated label for off budget accounts */
    val: "Off budget",
    translated: false,
    h: "cw3ZD6kn6Mat0qZqOZP0Is9hg7xmOxrKqKCD8CIjmz4=",
  },
  "account.ranking": {
    /* Account order label */
    val: "Order",
    translated: false,
    h: "Ggkvvwng4JyzP26RBZ9LrevWhrb766Qq+yTffZWmefg=",
  },
  "account.starting_balance": {
    /* Account opening balance label */
    val: "Opening balance",
    translated: false,
    h: "OEuQ3gAWrV+lPay2usXLKN3bNCH87PEsrcr+thNNbJY=",
  },
  "account_mapping.account_hash": {
    /* Account cryptographic hash label */
    val: "Fingerprint",
    translated: false,
    h: "knLiHOJx3KZ0xE/Ex3QjyueLNEC/iAp6T3RHzZ3RayA=",
  },
  "account_transaction.cleared": {
    /* Transaction cleared flag label */
    val: "Cleared",
    translated: false,
    h: "j1SmbPuDDBP04XfOH9NNFCDzXmB9xAzSoVG7RcHcdBg=",
  },
  "account_transaction.fi_id": {
    /* Financial institution assigned transaction ID label */
    val: "Institution-assigned ID",
    translated: false,
    h: "gFeirPPl/djXfLKwDK8FtD7JPKjC/2e7sHuRIxqkii8=",
  },
  "account_transaction.general_cat": {
    /* General category label */
    val: "General category",
    translated: false,
    h: "xEay6AzOg30Omh/FS2qPVa7eCkrUiXxTIclZM+h3BZE=",
  },
  "accounts.name_placeholder": {
    val: "no name",
    translated: false,
    h: "UwMHboI9q49SZQkwMN8ps9zBi6YOSdtwakjLJwudtyA=",
  },
  "action.New bucket": {
    val: "New bucket",
    translated: false,
    h: "aIKjDQtVbUMjIHU/6fccfiWBUIwUBnAofdzRJTCuytI=",
  },
  "action.New group": {
    val: "New group",
    translated: false,
    h: "054RU7JImk6Pavh27xHA9CgGIgjmP0dYIgXez2UWx34=",
  },
  "action.ignore": {
    val: "Ignore",
    translated: false,
    h: "K8sAh2XND1/tJOuX9xTLmr1fQjUOB70cfc9GwI62fEs=",
  },
  "action.link-account": {
    val: "Link",
    translated: false,
    h: "unfAYQpjuyuTjjRCodr+S+jNjRmz3nahjZ91u/j5HfE=",
  },
  "action.report bug": {
    val: "Report Bug",
    translated: false,
    h: "RxuE9Dh0Dadda2PtjUPD0dQ7b8aQok84Ytvw31ABBRU=",
  },
  "bank_macro.enabled": {
    /* Bank macro enabled flag label */
    val: "Enabled",
    translated: false,
    h: "hHztbKAreElTc7ttNUovJFG0DIq9xfILBM+1aNV8x2Q=",
  },
  "bank_macro.enc_recording": {
    /* Bank macro recording data label */
    val: "Recording data",
    translated: false,
    h: "nCMGHm2pOXvkN7v4hXGbN6g6Q9KfnHLC9ToPAUPTNIo=",
  },
  "bank_macro.name": {
    /* Bank macro name label */
    val: "Name",
    translated: false,
    h: "bMXfNfAzjiMOnmM+rZmR8I9iyrRaMmSXja7cZ0eGcwU=",
  },
  "bank_macro.uuid": {
    /* Bank macro UUID label */
    val: "UUID",
    translated: false,
    h: "UbH2EWDbIyGX6gVQAsz9xGUQYrsX+er1VM8Fuuxhxrw=",
  },
  "bucket.balance": {
    /* Bucket balance label */
    val: "Balance",
    translated: false,
    h: "azvDWgVPY349dq4q8mbtpDhehRsFKYKNzMk/TcuOvEQ=",
  },
  "bucket.color": {
    /* Bucket color label */
    val: "Color",
    translated: false,
    h: "/hiVjO3WJ9JPhG5BDY2SqUELJlWFlhAWkhD3x/c45mU=",
  },
  "bucket.debt_account_id": {
    /* Bucket's related debt account label */
    val: "Debt account",
    translated: false,
    h: "VSXRVQC8DbjhKcJjXLieRBksQgQU56PH2njj+P5m/KI=",
  },
  "bucket.deposit": {
    /* Bucket deposit amount label */
    val: "Deposit",
    translated: false,
    h: "m1MGQLRYdNxU9nxvjA8qOlurdztaw7NQI15XBoTWhN8=",
  },
  "bucket.detailslabel": {
    val: "Details",
    translated: false,
    h: "68e/QPEuI36iIEcTWmKDrVU9KBReQ3EjFzF1F06KQMA=",
  },
  "bucket.end_date": {
    /* Bucket goal target date label */
    val: "Target date",
    translated: false,
    h: "4+CFBiJaLAXPQeIpTMtcn3dB7Kgzsb0U/1WlSaqWgwM=",
  },
  "bucket.goal": {
    /* Bucket goal amount label */
    val: "Goal",
    translated: false,
    h: "IGWRYx9sqJO1YtI2GyVqdV+i4fFQ+e8XMaiWTNAn/xk=",
  },
  "bucket.group_id": {
    /* Bucket group label */
    val: "Group",
    translated: false,
    h: "sOfjtH37WgstIWC3rRx2AsnvrT3fsQLKx5n8lTeYI0Y=",
  },
  "bucket.kicked": {
    /* Bucket kicked flag label */
    val: "Kicked",
    translated: false,
    h: "cWApfoLlcBvoHizIFtrDQq3uwrZIYMXKO1iLMvv8szI=",
  },
  "bucket.kind": {
    /* Bucket type label */
    val: "Type",
    translated: false,
    h: "xE96uLvSSFjRvRq5lfIcX1LGpnGQeyntOksJQ0X3CyE=",
  },
  "bucket.name": {
    /* Bucket name label */
    val: "Name",
    translated: false,
    h: "bMXfNfAzjiMOnmM+rZmR8I9iyrRaMmSXja7cZ0eGcwU=",
  },
  "bucket.ranking": {
    /* Bucket order label */
    val: "Order",
    translated: false,
    h: "Ggkvvwng4JyzP26RBZ9LrevWhrb766Qq+yTffZWmefg=",
  },
  "bucket.transfer.help": {
    val: "A transfer is a transaction from one bucket to another.  If the transaction isn't income or an expense, it's likely a transfer.",
    translated: false,
    h: "dh5nslkaB1wNR4tJ5zAn6Hms+9oJqBDmAIR5k6WE6iY=",
  },
  "bucket_group.name": {
    /* Bucket group name label */
    val: "Name",
    translated: false,
    h: "bMXfNfAzjiMOnmM+rZmR8I9iyrRaMmSXja7cZ0eGcwU=",
  },
  "bucket_group.ranking": {
    /* Bucket group ordering label */
    val: "Order",
    translated: false,
    h: "Ggkvvwng4JyzP26RBZ9LrevWhrb766Qq+yTffZWmefg=",
  },
  "bucket_transaction.account_trans_id": {
    /* Bucket transaction's related account transactions ID label */
    val: "Account transaction",
    translated: false,
    h: "LyTdIJwB7IZ3hRIJLfTzbNqAiCegb1SR/QSm722WZkc=",
  },
  "bucket_transaction.bucket_id": {
    /* Bucket transaction bucket label */
    val: "Bucket",
    translated: false,
    h: "APPSgbsmF5H9B7YIJDaPcEVh4T7ctWU+hxQv/eG1Dg0=",
  },
  "bucket_transaction.linked_trans_id": {
    /* Label for a debt account's transaction that caused this transaction */
    val: "Debt transaction",
    translated: false,
    h: "dsZm4Y+ZMohJRUkDmRya3MF/TZcL+z8GokDuT1P2da0=",
  },
  "bucket_transaction.transfer": {
    /* Transfer flag label */
    val: "Transfer",
    translated: false,
    h: "B5GGqjnE8KOjYJjhsFV7zs5TGmGmVPqjihzMVxHJ3sI=",
  },
  "buckethead.activity": {
    val: "Net total of income and expenses.",
    translated: false,
    h: "Ci5S7xYAKzBYmbK2mxnSj4p0EV9hMsvSs11lDMecqFo=",
  },
  "buckethead.fill": {
    val: "Net total put in and taken out (unrelated to transactions).",
    translated: false,
    h: "T/g+6epzxej0HqIZyFjCZzqwtqqEJPCRV2cntaNNfOE=",
  },
  "bucketinout.help": {
    val: "Use this to put money in and take money out of each bucket.",
    translated: false,
    h: "FVxtuv3HRHdU7Snx+P3YYxcSngOkrcKyS5mng6AB8gE=",
  },
  "bucketrain.help": {
    val: "This is how much money these buckets want each month.  The little box indicates how much they have received.",
    translated: false,
    h: "3dbOFkUiGaEoD01CP7kIWDQHgUbULWexjdEKdEAF3sA=",
  },
  "buckettype.deposit": {
    val: "Recurring expense",
    translated: false,
    h: "3HXotB9ZHFm14ArdM0RfCT0merw8+KuXthbzotnPRec=",
  },
  "buckettype.deposit-date": {
    val: "Save Z/mo until Y date",
    translated: false,
    h: "zdWdEX9eN5qpFDboBF+wi9EIguwYsB9nQCzN9GjrxMc=",
  },
  "buckettype.goal-date": {
    val: "Save X by Y date",
    translated: false,
    h: "+boZHIer4ggkvJ8A5cSl1EVyWRwKigC9UkBFn4WSEdg=",
  },
  "buckettype.goal-deposit": {
    val: "Save X by depositing Z/mo",
    translated: false,
    h: "BUzPSZsbi+lN/3tb6eF63oa7CEzS94r6ee5jf5G7inA=",
  },
  "buckettype.plain": {
    val: "Plain old bucket",
    translated: false,
    h: "AqvTaZK8lidyI8PZ9JXBBQABazz8uxM+uQM6iEuyO6w=",
  },
  "budget-file-type-name": {
    val: "Buckets Budget",
    translated: false,
    h: "g2jeytcuhPOlEo6R2OlTzT3vNdE7sVWGnXuffEioq4c=",
  },
  "change_log.action": {
    /* Change log action type */
    val: "Action",
    translated: false,
    h: "XvzB5DfL6tpSZT8TMSHzyiWbhLdKUeFcJ3tN6T8RvXU=",
  },
  "change_log.obj": {
    /* Change log object name label */
    val: "Object",
    translated: false,
    h: "x6OaEMmJvznVG69QSR5ZH9Xoyu3vlgNaQC6E/ymQjgQ=",
  },
  "change_log.obj_id": {
    /* Change log object id label */
    val: "Object ID",
    translated: false,
    h: "K80xtzHhh4SO59NC0gT7rx1scigZGMneXw1DA+Ycv48=",
  },
  "daterange.all": {
    val: "All time",
    translated: false,
    h: "Fz1lBhxlewLJ5bSKTiIzzaW3CAtAPxkUWWKU0BVqgAA=",
  },
  "debt-bucket-explanation": {
    val: "This is a special debt payment bucket.",
    translated: false,
    h: "+XZJ0Nl0JR5/xu1lf1csGge9E19plZmcKQmuaBg44aI=",
  },
  "debt-payment-bucket-name": {
    /* A likely account name might be "Credit Card" or "Chase VISA".  This is the name of the bucket that holds the payment for the debt account. */
    val: (account_name: string) => `${account_name} Payment`,
    translated: false,
    h: "QvSzok8BqSPb+A0q+87lqp62Rk+JFQhIno38JQyUfYg=",
  },
  "default account name": {
    val: "Savings",
    translated: false,
    h: "zCYN8vtLT3Hhb9CbDDSL2xOOjqhzmmhMa5yWDTR7bCE=",
  },
  "default new bucket name": {
    val: "New Bucket",
    translated: false,
    h: "FchHrB6weykpHiqRVxc5QKb6BEdhH4DXrc+t6RNcF8M=",
  },
  "default new group name": {
    val: "New Group",
    translated: false,
    h: "1dmXA/VlW+tjhojOGcypAy70L2wupHf9EdVjUByvpmA=",
  },
  "err": {
    val: "err",
    translated: false,
    h: "SjZnjAmjB+MXTE65uld0YUG2SmqBsMTAaeG4UnJgm4s=",
  },
  "error-detail": {
    val: "If this error keeps happening or doesn't make sense, please report a bug or chat with us.",
    translated: false,
    h: "10Kk29tlHpBnhcTf7RRMfq1OZPGZgvPPguRlInaLNoY=",
  },
  "file_import_mapping.mapping_json": {
    /* File import mapping data label */
    val: "Data",
    translated: false,
    h: "nb/gDaJJpEyxUczsooYPcWRNvDVzBJLOxevxBEAPM+o=",
  },
  "getting-started-link": {
    val: (clickhandler) => {
      return <span>First time using Buckets?  Check out the <a href="#" onClick={clickhandler}>Getting Started Videos.</a></span>
    },
    translated: false,
    h: "9NGQRvIxlAaOF9i+zWPXMFQubcY+5jtA7Td/lii16aM=",
  },
  "go-to-next-month": {
    /* Menu label for "Go To... Next Month" */
    val: "Next Month",
    translated: false,
    h: "O3OOxop0NEwRr9eDaqAU+8KU9Pw0GeVnYLo0Abdkotw=",
  },
  "go-to-next-year": {
    /* Menu label for "Go To... Next Year" */
    val: "Next Year",
    translated: false,
    h: "NfnsOERP+IaYQvH6i+9MJ6KRpbYSapnXXUFm60jUbqo=",
  },
  "go-to-prev-month": {
    /* Menu label for "Go To... Previous Month" */
    val: "Previous Month",
    translated: false,
    h: "aCvOorN0f6iWVHoOoBvWYttjgiPF/x5zZvXX3IqFI6g=",
  },
  "go-to-prev-year": {
    /* Menu label for "Go To... Previous Year" */
    val: "Previous Year",
    translated: false,
    h: "ZntiItsGCJfJBxKIXyzi3+NpS8jZXYAK8IXrOl9bfFg=",
  },
  "go-to-this-month": {
    /* Menu item for "Go To... This Month" */
    val: "This Month",
    translated: false,
    h: "pjcOO9o+UFMLsp6ovyVzksVtCLcFsauwEITWoeq//bg=",
  },
  "import-verb": {
    val: "Import",
    translated: false,
    h: "F3sijvfYz3oB4iz2rVHjUvNDLQs43MbXDVIr5VFA2/c=",
  },
  "in the bank": {
    val: "in the bank",
    translated: false,
    h: "7gl7ZdgJ3HfhOcQMiU7hVkFpXIR3KFxXtlMhKyE/Irw=",
  },
  "misc group name": {
    val: "Misc",
    translated: false,
    h: "DPoc7CIbzLHJxuar3WnaidO3Ryy1QtYkCswRzVHtVBg=",
  },
  "money-balance-as-of": {
    val: (amount: JSX.Element, date: JSX.Element) => {
      return <span>{amount} as of {date}</span>
    },
    translated: false,
    h: "99X4HuXB5SeCrTqn5LuD/S4a6GjUCB6gV1Z1gAZPfKM=",
  },
  "months gain/loss label": {
    val: (gain) => {
      return gain >= 0 ? "Month's gain" : "Month's loss";
    },
    translated: false,
    h: "lGcEnJfZJau2h5ohbKNxY1FjL0vJoW3oJOJQwSCt+Kg=",
  },
  "more": {
    val: "more",
    translated: false,
    h: "uiqCMjSdL1TgDZHPNYXLnfN/yZq59+kDR/wKZSAP0hU=",
  },
  "nag-message": {
    val: () => `This is an unregistered trial version, and although the trial is untimed, a license must be purchased for continued use.

Would you like to purchase a license now?`,
    translated: false,
    h: "cugeP6FVXqdiCtOers5rslG0mDD5t/Rfl1ZWslfhD48=",
  },
  "navigatestep": {
    val: (url) => `Go to ${url}`,
    translated: false,
    h: "nI/J4GfYlL6BgRZRSiPFfA5o7ASdx2VVYW6x3vgCuKE=",
  },
  "net-transfers.help": {
    val: "Net transfers are the sum total of all transactions marked as a transfer.  It should be 0.  If it's not, click through to make sure there aren't duplicate transactions or transactions miscategorized as transfers.",
    translated: false,
    h: "2P3jr/VPQ35tlPa/uDMqi1spXO4Rinn76fgfVOegiA8=",
  },
  "no name": {
    val: "no name",
    translated: false,
    h: "UwMHboI9q49SZQkwMN8ps9zBi6YOSdtwakjLJwudtyA=",
  },
  "noin.income": {
    val: "Income",
    translated: false,
    h: "D2fJbta5d1Z5QYuRC5zzkBHsItZOOgY4FKrFJ64BvRs=",
  },
  "notify-downloaded-file": {
    val: filename => `Downloaded file: ${filename}`,
    translated: false,
    h: "HwxJ2TVx57Qef6bXYySekL/eoBzvIEFUqBxQdxgcyCs=",
  },
  "noun.debt": {
    val: "Debt",
    translated: false,
    h: "y9kslXhW17gMMFZ9Dq8g/tabfINzlmzT+39QNbWiWGA=",
  },
  "noun.transfer": {
    val: "Transfer",
    translated: false,
    h: "B5GGqjnE8KOjYJjhsFV7zs5TGmGmVPqjihzMVxHJ3sI=",
  },
  "off": {
    val: "off",
    translated: false,
    h: "nzvsum5LFYOz4ZRB3eTVliJTfZvVSpTSImJ4XkhThNA=",
  },
  "on": {
    val: "on",
    translated: false,
    h: "mQwjhouWWBSxF8+abE3+RUUurcIXHh+YGGXr/ITxByQ=",
  },
  "press Escape to close": {
    val: "press Escape to close",
    translated: false,
    h: "5jKKS3xwogwcB2YptY5sW2/MQ/ikfMbR99l8ViHxmAA=",
  },
  "rain.help.neg": {
    val: (abs_amount: JSX.Element) => {
      return <span>
        You have put {abs_amount} too much money into buckets.  If all transactions have been categorized this month, remove {abs_amount} from buckets of your choosing.
      </span>
    },
    translated: false,
    h: "tqXmJxZXqyA0mN/8ugZkpCyspyO7XlPnGlEYGWgQ7jk=",
  },
  "rain.help.pos": {
    val: (abs_amount: JSX.Element) => {
      return <span>
        You have {abs_amount} left to put into buckets.
      </span>
    },
    translated: false,
    h: "boezbSGkVm3dnfFvodJOAeCgAEMIQN9L+8TwEHLpU/o=",
  },
  "sample-size": {
    val: (count: number, total: number) => {
      return `Showing ${count} of ${total}`
    },
    translated: false,
    h: "V4+Zyz6U1+wyTBVSVOfOz+wwkd1EWbQBhFcYdL9jLfY=",
  },
  "settings.key": {
    /* Settings name label */
    val: "Name",
    translated: false,
    h: "bMXfNfAzjiMOnmM+rZmR8I9iyrRaMmSXja7cZ0eGcwU=",
  },
  "settings.value": {
    /* Settings value label */
    val: "Value",
    translated: false,
    h: "+VG3lKNZdlCrMfK2d7yG7/OtZ5iGD3yqkIqOIClVuNw=",
  },
  "simplefin-connect-intro": {
    val: "To connect, do the following:",
    translated: false,
    h: "421gz/BziKZhsIy2YKRFNtwoqPcbQ7uhFZWWfd6ReBg=",
  },
  "simplefin-get-token": {
    val: (mklink) => {
      return <span>Get a SimpleFIN Token from the {mklink('SimpleFIN Bridge')}</span>
    },
    translated: false,
    h: "VEeKjngcHxowWbB2xWy5oNH4MXIfJQ7EqpiomT6V0fg=",
  },
  "simplefin-paste": {
    val: "Then paste your SimpleFIN Token here:",
    translated: false,
    h: "vAoRsY20OBqs8bleaXD3auq8VnO9gQj7gXz5p+p71EI=",
  },
  "simplefin_connection.access_token": {
    /* SimpleFIN access token label */
    val: "Token",
    translated: false,
    h: "RqJX7GMSAvHvTe36qzKsJI8E56vSQX8DYTUB/G7/RTI=",
  },
  "single-account Closed": {
    val: "Closed",
    translated: false,
    h: "8pZrnvzAUQTJhDN/XX31DLvx0wIs1Ww3fV6pktEKEHs=",
  },
  "single-bucket Kicked": {
    val: "Kicked",
    translated: false,
    h: "cWApfoLlcBvoHizIFtrDQq3uwrZIYMXKO1iLMvv8szI=",
  },
  "some day...": {
    val: "some day...",
    translated: false,
    h: "4K+3SY48UwcktULX4xiGt6J8Q8Hys3JjUR3t62WI6mo=",
  },
  "sync-symbol help": {
    val: "This symbol means the transaction came from an import/sync",
    translated: false,
    h: "S3tDRls+AJYj6f8jSNSCa1FVyNY+ngn6Db1EQJ3dpLE=",
  },
  "sync.toast.syncing": {
    val: (start: string, end: string) => {
      return `Syncing transactions from ${start} to ${end}`;
    },
    translated: false,
    h: "utj3wVCxisKfYRDtJ+t5B8jPlLKwhght2S5Cb3b0qZc=",
  },
  "tab": {
    /* Label for 'tab' character */
    val: "tab",
    translated: false,
    h: "aEXPpTPGGl6vpoXplsnqN9LGRDys7bKMPu0BVvzbxIg=",
  },
  "this_device.name": {
    val: "No name",
    translated: false,
    h: "Z85JCnN1GdDw+yMwZqwW8aeKgQkvCHCkVIkIjZt7G00=",
  },
  "toast.updated-trans": {
    val: count => `Updated/created ${count} transactions`,
    translated: false,
    h: "bBKDE3rQIV5P80cYEL6mkLmIvgxjzVHCIf3aFa+KtmU=",
  },
  "trans-created-outofview": {
    val: (month: string) => {
      return <span>Transaction created in {month} </span>;
    },
    translated: false,
    h: "ur97iCX3Iw1E262eZ72YAEFdXlwvlqNkyNn1caIKi0E=",
  },
  "transfer-from-account": {
    val: (dropdown: JSX.Element) => {
      return <span>Transfer from {dropdown}</span>
    },
    translated: false,
    h: "VJmIMDZGOdMKwBpoqDUYiVdCFhw1pJ4qCmKiszAECL4=",
  },
  "transfer-to-account": {
    val: (dropdown: JSX.Element) => {
      return <span>Transfer to {dropdown}</span>
    },
    translated: false,
    h: "Bd1IGkjXo2ruWofGrT+WwLdiy8IwJ/PW+7SO4TaDcps=",
  },
  "unknown_account.account_hash": {
    /* Account fingerprint label */
    val: "Fingerprint",
    translated: false,
    h: "knLiHOJx3KZ0xE/Ex3QjyueLNEC/iAp6T3RHzZ3RayA=",
  },
  "unknown_account.description": {
    /* Unknown account description label */
    val: "Description",
    translated: false,
    h: "bg0ZDIR+z+PEkinc/ZyqkERMsVZcFFm3NhQoIqZH+WM=",
  },
  "unknown_account.ignore": {
    /* Label for flag indicating if an unknown account is ignored or not */
    val: "Ignore",
    translated: false,
    h: "K8sAh2XND1/tJOuX9xTLmr1fQjUOB70cfc9GwI62fEs=",
  },
  "use-delimiter": {
    /* When importing CSV files, users can choose a custom delimiter (instead of commas). This presents their custom delimiter as an option. */
    val: (delimiter: string) => `Use "${delimiter}"`,
    translated: false,
    h: "KJbb5/maOo+aep3dLJiRb5KwueX8VsaGVPIXGXDeXkY=",
  },
  "verb-open": {
    /* Verb to open a page */
    val: "Open",
    translated: false,
    h: "PlLwT5LggHCmpOqXIa1xXdU/K/ztbasiD703lhOnltA=",
  },
}
export const pack: ILangPack = {
  name: 'Беларуская',
  dir: 'ltr',
  numbers: {
    thousands: ',',
    decimal: '.',
    decimal_places: 2,
  },
  messages,
  contributors,
}
