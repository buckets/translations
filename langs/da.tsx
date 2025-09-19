import * as React from 'react'

import { ILangPack } from '@iffycan/i18n'
import { IMessages } from './base'

// Contributors, include your name and optionally a link to
// a website as you want it to appear in any credits.
const contributors = [
  // {
  //   name: "",
  //   href: "", /* optional */
  // },
];

const messages:IMessages = {
  "\n        Though filling out this form is preferrable, you can also email bugs@budgetwithbuckets.com\n      ": {
    val: "\n        Selvom det at udfylde denne formular er at foretrække, kan du også sende en email til bugs@budgetwithbuckets.com\n      ",
    translated: 'auto',
    h: "05fPQ/cX0e4UXnYsbNTo8b6FUwq/WZ1URc7ixr6WlV8=",
  },
  "(Blank)": {
    /* Label for things that are blank */
    /* Label for things that are blank */
    val: "(Tom)",
    translated: 'auto',
    h: "zYRwxSqiVmaHvp3Ra8DQeYHJW50oqXUf4Jz4UvXRs4U=",
  },
  "(Drop files or click)": {
    val: "(Slip filer eller klik)",
    translated: 'auto',
    h: "cn8vjUpkolK+X1qsHPyR11Qj7uQWZVR6eWnhPRb/zfw=",
  },
  "(If you want a response)": {
    val: "(Hvis du vil have et svar)",
    translated: 'auto',
    h: "Ij4mQm0L5WO4Iunvl3fKwbhLwjTodc3Chq81GsFM+T0=",
  },
  "(easiest)": {
    val: "(enkleste),"
    translated: 'auto',
    h: "mvpASP1TOoS7w7iXoO7ThUyiPKnrtytWyDC2XJ1WReE=",
  },
  "(optional)": {
    val: "(valgfri)",
    translated: 'auto',
    h: "njVpYkgCdiB755Pxnsk1D8GELOWqw1mBBYG+YQr7e98=",
  },
  "/mo": {
    val: "/måned",
    translated: 'auto',
    h: "ggq7na5vMB1wOjQQo0Wq0o7ctwbMUiiJr1tRRKphHss=",
  },
  "A sync is already in progress": {
    val: "En synkronisering er allerede i gang",
    translated: true,
    h: "z6CqgxENo0xxB0LPp8P8rmnLPp1m2NElecEaJM8GDfI=",
  },
  "About Buckets": {
    /* 'Buckets' refers to the application name */
    val: "Om Buckets",
    translated: true,
    h: "9bzPsx+kCkNUeLTSVjaygyWCkm3VCdsFaAFRvdS+xEU=",
  },
  "Accept EULA": {
    val: "Accepter EULA",
    translated: 'auto',
    h: "2TWZMBgBGQU/CoeXRW5NR1b0AT4yW/zrLyRpUGWBQn8=",
  },
  "Account": {
    val: "Konto",
    translated: true,
    h: "ihCgI4A9UaFZ63kuiKXqFHoGsze2dYwzpgSVU0clMfQ=",
  },
  "Account Transactions": {
    val: "Kontooverførsler",
    translated: true,
    h: "GPJhFDki3xJdCOMqCkqdUDX7SfEZcg9wGee8KMIuIno=",
  },
  "Account and transactions deleted": {
    val: "Konto og overførsler slettet",
    translated: true,
    h: "iwS2+dAqfDOEtU5SUm1d1oPFTe0+JT5NCm4nH2SrglE=",
  },
  "Account closed": {
    val: "Konto lukket",
    translated: true,
    h: "l9xs5wLKF3KIgunL1SJh9r9XDYpWkC7LYrL4KUUFm3M=",
  },
  "Account deleted completely": {
    val: "Kontoen er slettet permantent",
    translated: true,
    h: "LswJ+SxzkHRVy6+Et4Wga6r/Io1P6MBlTiwdjUAUj48=",
  },
  "Account mapping": {
    /* Noun describing import details that map to an account */
    val: "Kontotilknytning",
    translated: 'auto',
    h: "utrzN1AM7WMltloEYtQSoFhx5O5Zf4u6M2p33kntCXM=",
  },
  "Accounts": {
    val: "Konti",
    translated: true,
    h: "1oHDkv2zB1yiCABVTWBY5oX4Ccu36nJBCG7Q+JVg8TA=",
  },
  "Accounts in side bar": {
    val: "Konti i menuen",
    translated: true,
    h: "BsDoJS2nPDKya2do9fNF2o2jl0mIUxjdBycHbmsu6HY=",
  },
  "Action": {
    val: "Handling",
    translated: 'auto',
    h: "XvzB5DfL6tpSZT8TMSHzyiWbhLdKUeFcJ3tN6T8RvXU=",
  },
  "Actions": {
    val: "Handlinger",
    translated: true,
    h: "qm2CvbPMHZpeVCriZp/vJ2kAGatdeyDxfZ8TMaapQvo=",
  },
  "Activity": {
    /* Noun, label for a bucket's usage (income/expenses) for a period */
    val: "Aktivitet",
    translated: true,
    h: "jfKSYDWvDxzcenHtImEM9HokIu7tBJbMki25BNTynTI=",
  },
  "Actual Size": {
    val: "Faktisk Størrelse",
    translated: true,
    h: "k1ZfUj7bmT4XwiALRlZo7ztl2d+e7JcLt3WCnvjpBYg=",
  },
  "Advanced settings": {
    val: "Avancerede indstillinger",
    translated: 'auto',
    h: "oQ0ic6e7zWfGl55WCEVG2QbtvynCSY0WyVPEdEA15q4=",
  },
  "Agreements": {
    /* Label for page with Terms of Use type agreements */
    val: "Aftaler",
    translated: 'auto',
    h: "RJ//uETg43dMDTum+jM/26gJUl1X/TzlcrmBmETZxtc=",
  },
  "All Files": {
    /* Label for letting users select any file for import regardless of extension */
    /* Label for letting users select any file for import regardless of extension */
    /* Label for letting users select any file for import regardless of extension */
    /* Label for letting users select any file for import regardless of extension */
    val: "Alle Filer",
    translated: true,
    h: "xP+YqxC7o4/NEWANvugOAGzJXIF368ZNwle6rV7nVRg=",
  },
  "Allow new connections": {
    val: "Tillad nye forbindelser",
    translated: 'auto',
    h: "MGoLxui/5J17owbWiAA17QPnQkrBZ2bExUfiXFBaC+8=",
  },
  "Amount": {
    val: "Beløb",
    translated: true,
    h: "DHNNaJF4hWTWIFdaMdMhUT4aSdti7ZfaNexABzxWWzc=",
  },
  "Amount of money over-allocated in buckets.": {
    val: "Beløb af penge overfordelt i buckets.",
    translated: 'auto',
    h: "kFucvPefN9Kae7dArnle8i0rTZZq1U+3d8w81lDNVKw=",
  },
  "Analysis": {
    val: "Analyse",
    translated: true,
    h: "+LNAOPSLW2rpFCrT+U1suhdnoYyZa1k8ALddRlddDlI=",
  },
  "Animation": {
    /* Label for application preference enabling/disabling animations */
    val: "Animation",
    translated: true,
    h: "Vk4XaMgXNIEY4+Gcal1n+qdnamgr4Q5af/+wzFRoIHU=",
  },
  "Any other monthly bills you have?": {
    val: "Har du flere månedlige regninger?",
    translated: true,
    h: "rmA9D10bvYOVj3U4kE7U6jALpz7WpqBJTv6HZaI4T/M=",
  },
  "App Settings": {
    val: "App Indstillinger",
    translated: 'auto',
    h: "bk/DqvzHJTuksZnC0cWC2+KPOwsnilgNjXSPLv1SbPA=",
  },
  "As of": {
    /* Label for timestamp on a document */
    val: "Fra",
    translated: 'auto',
    h: "AONctcFQnUGl+zc/NhrnGa7CfTpqu3E92stXUc93EEU=",
  },
  "Assets": {
    val: "Aktiver",
    translated: 'auto',
    h: "VBLBowZo0Lx8GWGbWVcEEFzSxnwQmcEOSxwtD5yIhwQ=",
  },
  "Attached files are too large.": {
    val: "Tilføjede fil er for stor.",
    translated: true,
    h: "HfDI7uw+P4uLUPkDu0rxQhxJqjqcriWmD9EWYaiUqvY=",
  },
  "Authenticated": {
    val: "Autentiseret",
    translated: 'auto',
    h: "qFkX9LG17MNSZOEH8+oXRLvO9La2Ph/uzSCZn7/FPHg=",
  },
  "Authenticating": {
    val: "Autentificerer",
    translated: 'auto',
    h: "7Sf5Nv5dGmsCdcFHDTi6IdPNrr7sui7KirEdQpUMd7I=",
  },
  "Authentication": {
    val: "Autentificering",
    translated: 'auto',
    h: "NAlBsTsQWu6FaPj3Q2Iyd12M/7PEA4UYqE+gj4dHkZA=",
  },
  "Automatic": {
    /* Option for theme preference indicating that the system will choose between light and dark */
    val: "AutomatiSk",
    translated: 'auto',
    h: "0YA2t1ssPk8k4xaICpB9//fM3ol0d/FeOVb6dCD0ux8=",
  },
  "Available version": {
    /* Label for version available to upgrade Buckets to */
    val: "Tilgængelig version",
    translated: 'auto',
    h: "dPTYVfj33eBbVAOPN62sq/SkzXeFqTiSSeGbq7RT8ns=",
  },
  "Avenue available": {
    val: "Avenue tilgængelig",
    translated: 'auto',
    h: "0ZTppZemkrqVd6lIxbRj8UJat3meVAiWkM22EaiH5eg=",
  },
  "Avenue closed": {
    val: "Avenue lukket",
    translated: 'auto',
    h: "E7OVHGkfKw0NKIt4PXlc0AQqXkllTGiKAqnilsHEzUE=",
  },
  "Avenue opened": {
    val: "Avenue åbnet",
    translated: 'auto',
    h: "3UKUOWH4r70ixbYNjwWI7kEXLVPY/H62HsX7AypQ1D8=",
  },
  "Avenue type": {
    val: "Avenuetyp",
    translated: 'auto',
    h: "m88+08lu2BgvX8BFsKwDKo/bYeJbqlIkmK5GD9AbD9s=",
  },
  "Avenue unavailable": {
    val: "Avenue ikke tilgængelig,"
    translated: 'auto',
    h: "cDAq+7ZyrtyC7zRkvSBe9Ob6LBn4eVkqXRT7Y3Bau3U=",
  },
  "Avenues": {
    val: "Alléer",
    translated: 'auto',
    h: "Jyyh8MGvKZoZXXZkPyMrHYEAAyTOt+V8Kao2KKQtS6k=",
  },
  "Avenues are what you use to connect your devices together so you can send your budget from one device to another.": {
    val: "Avenues er det, du bruger til at forbinde dine enheder sammen, så du kan sende dit budget fra en enhed til en anden.",
    translated: 'auto',
    h: "XbtezQPrPTjwRYWch5a1SMCG3WCcDTCs0PlLzxyPRcY=",
  },
  "Average": {
    val: "Gennemsnit",
    translated: true,
    h: "zLxQhptvlIYtt0l/prvWMqnsQHh7N1gxh33WeorRi2w=",
  },
  "Avg:": {
    val: "Gns:",
    translated: true,
    h: "EVMZyhHQEFPlI2ib8VqTJo25bJBk8gHsgZR1SZ2Jcj0=",
  },
  "Babysitting": {
    val: "Børnepasning",
    translated: true,
    h: "yOfOnHbye/Uhao1fb5jtfP4z0XPyc757kdBFt32Uwrc=",
  },
  "Backup file": {
    /* Label for backup file selector */
    val: "Backup-fil",
    translated: 'auto',
    h: "HF5523dI/DYBC0mgunrYA58CSFMjLy0eMYOIgDnftyQ=",
  },
  "Backup folder": {
    /* Label for application preference of which folder to use for automatic backups */
    val: "Sikkerhedskopimappe",
    translated: 'auto',
    h: "BLOblCLkVxAs6HObgPraktoiBEQNMNFixnzpvk7FWoU=",
  },
  "Backups": {
    /* Label for backup preferences */
    val: "Backups",
    translated: 'auto',
    h: "2JCpk92cgO56Ebw/lZGjh81dIWUzHyTIthk3tbUO5SY=",
  },
  "Backups enabled": {
    /* Label for application preference enabling/disabling automated backups */
    val: "Sikkerhedskopier aktiveret",
    translated: 'auto',
    h: "Y9MhMpBC7vFMEGWhaOb2cH6gqp/6lHO1R2XRniiNYes=",
  },
  "Balance": {
    val: "Balance",
    translated: true,
    h: "azvDWgVPY349dq4q8mbtpDhehRsFKYKNzMk/TcuOvEQ=",
  },
  "Bank macro": {
    val: "Bank makro",
    translated: 'auto',
    h: "IQmQZ/1/eVg9LLwOsnxkUbQGAcx9ZkBAlrP1Ch3Xo/c=",
  },
  "Basic settings": {
    val: "Grundlæggende indstillinger",
    translated: 'auto',
    h: "9/8gWH6aVupdwCUJFJ4KodEJWn4fFwbiASgh7oQcxPE=",
  },
  "Birthdays": {
    val: "Fødselsdage",
    translated: true,
    h: "rzI9rIMV5VD86pAzRZf+uFAA8rWYhz1rIH5N9fDesSk=",
  },
  "Break Import Links": {
    val: "Afbryd importlinks",
    translated: 'auto',
    h: "XQYKw3qJ7xKoR/DX6K6NdZxbJLHVJhxy9mFVV8r1ZU4=",
  },
  "Bring All to Front": {
    val: "Bring Alt til Front",
    translated: true,
    h: "vXNLSncC5dTsDdfhZY5dhbev+Y3PpqQEy1fwxTkGWU0=",
  },
  "Bucket": {
    val: "Spand",
    translated: 'auto',
    h: "APPSgbsmF5H9B7YIJDaPcEVh4T7ctWU+hxQv/eG1Dg0=",
  },
  "Bucket Transaction ID": {
    val: "Bøtte Transaktions-ID",
    translated: 'auto',
    h: "1bsbXV1Kuxj83UA24XCyscrAKm+nsN+WNbFz1+lf66E=",
  },
  "Bucket Transactions": {
    val: "Bøtte Transaktioner",
    translated: 'auto',
    h: "5hMoGWO5uTeCOujLdFnRx4w3D6Zka/avSxnH14UmJiI=",
  },
  "Bucket amount": {
    val: "Bøtte mængde",
    translated: 'auto',
    h: "KeOvMpoI1q2oV66HC3pMPPSZyZ3AfK3/ttog4A9oHTs=",
  },
  "Bucket deleted completely": {
    val: "Bucket slettet fuldstændigt",
    translated: 'auto',
    h: "gBMlSFTWDRRSWZeZ3fuxDhpJnhv2MoF3EvZSwo1BZHg=",
  },
  "Bucket group": {
    val: "Bøtte gruppe",
    translated: 'auto',
    h: "SK6rZDww/r+lLW1JUMyv3SXYmxaP95hasIOTSW4WFZY=",
  },
  "Bucket transaction": {
    val: "Bøtte transaktion",
    translated: 'auto',
    h: "bEQDTy9m51uIwZj996XKffMPU91hkOBVlNOKpudB2hw=",
  },
  "Bucket type:": {
    val: "Bøtte type:",
    translated: 'auto',
    h: "NMC+sjsH6UgNhNtiqYeiHDi4zDK/+S5h5yMfZ5CQk1c=",
  },
  "Buckets": {
    /* Bucket list page title.  Does NOT refer to the application name */
    /* Refers to a list of buckets, not the application title */
    /* Refers to a list of buckets, not the application title */
    val: "Beholdere",
    translated: 'auto',
    h: "fMPIWzGvVEG0t7+bZX1ucgzulk8FaQfqioLgwLsj+oE=",
  },
  "Buckets Budget Filename": {
    /* 'Buckets' refers to the application name */
    /* 'Buckets' refers to the application name */
    val: "Buckets Budget Filnavn",
    translated: 'auto',
    h: "PMqvee/qJsh/OYtRi+hbcH4fgl07SR6XM0wx4c1C+sU=",
  },
  "Buckets License": {
    /* 'Buckets' refers to the application name */
    /* 'Buckets' refers to the application name */
    val: "Buckets Licens",
    translated: 'auto',
    h: "sym++hSpJ7LeHTQAaiYRAK41eYIw9pfMFO2EbYTHGxo=",
  },
  "Buckets has crashed.  Please restart after submitting a bug report.": {
    val: "Buckets er crashet. Genstart venligst efter at have indsendt en fejlrapport.",
    translated: 'auto',
    h: "jPwdFrODeZ3bxIdD+YJ9CFGjCQTqdwQNr9CdB4QTI6U=",
  },
  "Budget": {
    /* Label for budget file selector */
    val: "Budget",
    translated: 'auto',
    h: "zOO4DqNSFLa6Z9vlmfaz8OnwggHn8wJeP058V5mUKbE=",
  },
  "Budget Specific Settings": {
    /* Title for budget settings page */
    val: "Budgetspecifikke indstillinger",
    translated: 'auto',
    h: "/RQVOKmoXTgeciF+ohehk19BxpvBXud+3HjfZPPw1v8=",
  },
  "Budget file": {
    val: "Budget fil",
    translated: 'auto',
    h: "hbfzyLF9pCBuXZJ4fcHPQVNia5LnROzn4NZFhOhjuG8=",
  },
  "Budget files are too different to merge": {
    val: "Budgetfilerne er for forskellige til at slå sammen",
    translated: 'auto',
    h: "S/vIb5Nknf3NHyuW7Xmh5zS8soTt74dT2/tWCxM5lic=",
  },
  "Budget password:": {
    val: "Budget adgangskode:",
    translated: 'auto',
    h: "yB5u4awiXu76+/Pw81ZYhBtgYQktcAVe6KU4WreiReU=",
  },
  "Budget-specific number format": {
    val: "Budget-specifikt nummerformat",
    translated: 'auto',
    h: "34SWA6JebUvD6EsRbt8oe1ERhdfOkpdEfhXNZsRVcx4=",
  },
  "Budgeted": {
    val: "Budgetteret",
    translated: 'auto',
    h: "aP72arzLN/j79zGtL8DWE7wcBGciRcWqMOR1aTHJmNo=",
  },
  "Cable TV": {
    val: "Kabel-TV",
    translated: 'auto',
    h: "wISz6Dh0vnQ1Tjhr9GWcJ2rhiif2af6NXsAzEAXYxfo=",
  },
  "Calculator": {
    val: "Beregner",
    translated: 'auto',
    h: "IiaAFlM5LkjsirGL06i1plXy1FoW75TKBiuin2r4s6Q=",
  },
  "Can't merge budgets of different versions": {
    val: "Kan ikke flette budgetter fra forskellige versioner",
    translated: 'auto',
    h: "6+AzeGDN9PmeIUO0hjF85F3PzmbhX9bXkHzYVrGiNU4=",
  },
  "Cancel": {
    /* Button label */
    val: "Annuller",
    translated: 'auto',
    h: "wHdMGFBg/BNmqwwBSIr4TrXk4fT1kilDHgZN5z4N5sU=",
  },
  "Cancel Import": {
    /* Undo/redo label for canceling import */
    val: "Annuller Import",
    translated: 'auto',
    h: "ASPyW8TypDFl1ANm1SIrpmykDdl3rBQDzC+wk4mdZXA=",
  },
  "Cancel Merge": {
    val: "Annuller Flet",
    translated: 'auto',
    h: "xOUSd4pIBFhoe1VahnIJgCO8yf46iL9AGSBb3bE9Mvc=",
  },
  "Cancel merge": {
    val: "Annuller flet",
    translated: 'auto',
    h: "PtR83Mtr2bGbo1WTP4IRb/XgW5AiIVvzTQD9jFDSoAI=",
  },
  "Cancel sync": {
    val: "Annuller synk",
    translated: 'auto',
    h: "8xFWyPShIifEhumOA/PeoTtccm5TTtbQmWFViIGcPQA=",
  },
  "Car Insurance": {
    val: "Bilforsikring",
    translated: 'auto',
    h: "x3xbGNEH/vHcpYAm2HXTUhRRuz2sb6yfH0gBYFFkqc4=",
  },
  "Car Maintenance": {
    val: "Bil Vedligeholdelse",
    translated: 'auto',
    h: "Lsok3+kX1L7SXMumFWNo+oxBgfmGJcWg1CdSDw6byx8=",
  },
  "Car Payment": {
    val: "Bil Betaling",
    translated: 'auto',
    h: "wp49ZoinRgifzKQ+N9RrJ6LG/9Yw6hkw1RCwXwHc6tA=",
  },
  "Categories": {
    val: "Kategorier",
    translated: 'auto',
    h: "UxClJeKz605AO/90mJ2YOi6N2LJk9D+RJReMlC3TDO8=",
  },
  "Categorization": {
    val: "Kategorisering",
    translated: 'auto',
    h: "DShuYOF3daz37AE7lGCN1TajYU1VyorRCvLwh4bM1r8=",
  },
  "Categorize": {
    val: "Kategoriser",
    translated: 'auto',
    h: "mA6/TefxgXpo2M+OUx/ATLQ4QYHv4t1+8vy3MmV+EQg=",
  },
  "Category": {
    val: "Kategori",
    translated: 'auto',
    h: "/frArhrZL+bxdiiBKi/1cYdR/tSD7rhbMHJLgHQQdNQ=",
  },
  "Change": {
    /* Noun: name of object describing a change in data */
    val: "Ændring",
    translated: 'auto',
    h: "prG6DzYDTLinvWF30h7VL2QRdBBwll00hx4flJyEWMc=",
  },
  "Change Account Type": {
    val: "Ændre kontotype",
    translated: 'auto',
    h: "elw7uWDm9Vij1azrwiBbY+VwbjMQuo/xziG393BqGUA=",
  },
  "Charity": {
    val: "Velgørenhed",
    translated: 'auto',
    h: "5OqY1JRI3brWCHQyu9VDY9hpjXzg1cVB1oQnXLQjZ4U=",
  },
  "Chat with Matt": {
    /* If "Chat with Matt" is too wide, you can translate this as just "Chat" */
    val: "Chat med Matt",
    translated: 'auto',
    h: "9nQjbkjkf8l2mX6xeNaU///NYhxxWFqnvTKOmakMmRY=",
  },
  "Chat...": {
    val: "Snak...",
    translated: 'auto',
    h: "SytGirG0+cdtbPfjBma/G/tEOt4rdOj4mnjcaWsTbt8=",
  },
  "Check For Updates...": {
    val: "Søg efter opdateringer...",
    translated: 'auto',
    h: "S/1p0syaOMqjAbHpmZa6gWaIh/9e29QR2cRJhiMadz0=",
  },
  "Check for Updates": {
    val: "Søg efter opdateringer",
    translated: 'auto',
    h: "6vtxqhyfiDaIXgTBH0pdoPzTGftDDEoRFNGU082PhRk=",
  },
  "Check for updates": {
    /* Label on button that causes budgets to sync between devices */
    val: "Søg efter opdateringer",
    translated: 'auto',
    h: "MerO0fg7nnpQBvZ87GDbTKrOJZo+aGSx6qiQEeVAmXw=",
  },
  "Checking for updates...": {
    val: "Tjekker for opdateringer...",
    translated: 'auto',
    h: "wjjhyYhYEFdJWUmwdJIEdxm0iAq2bwrWU79ANObzzZY=",
  },
  "Choose": {
    val: "Vælg",
    translated: 'auto',
    h: "UeJgTiqvSbyjLXgzersyKp/deJ/06L+xXts8Eq4g6Jk=",
  },
  "Choose a file ending in either .ynab4 or .ymeta": {
    val: "Vælg en fil der ender med enten .ynab4 eller .ymeta",
    translated: 'auto',
    h: "Tym1GWz52+2AgA4qwsbqknBtvR9QYYGN2y5oYYQ7yZQ=",
  },
  "Choose save location": {
    val: "Vælg gemmested",
    translated: 'auto',
    h: "3GFv8eEkA96n0cetdd4cUVIl0CtfTQCk4q9Z09uSE0Y=",
  },
  "Choose which of the files on this device you want to make available to your other devices.": {
    val: "Vælg hvilke af filerne på denne enhed du vil gøre tilgængelige for dine andre enheder.",
    translated: 'auto',
    h: "3Vyn9u6I123YU1+p+9TdGJ3wnrJHbwswJEZPYB1lrYU=",
  },
  "Choose...": {
    /* Label for choosing backup folder */
    /* Label for choosing a budget file */
    /* Label for choosing a backup file */
    val: "Vælg...",
    translated: 'auto',
    h: "mitI0a0UwvINcTM1Hb0R9fSY5KucYuyfjuNiySSQmDY=",
  },
  "Cleared": {
    /* Tooltip text indicating that a transaction has cleared. */
    val: "Klaret",
    translated: 'auto',
    h: "j1SmbPuDDBP04XfOH9NNFCDzXmB9xAzSoVG7RcHcdBg=",
  },
  "Cleared balance": {
    /* Label for balance minus uncleared transactions */
    val: "Cleared balance",
    translated: 'auto',
    h: "3SpY0eBe4gJ1WtupFnV904/a1Xlfx5Y4ybAdHQGzGV0=",
  },
  "Close Account": {
    val: "Luk Konto",
    translated: 'auto',
    h: "qTJEf8mdhLx1bU9LZPYaTtrT8pMLqxemoL/YqbhjESI=",
  },
  "Close Window": {
    val: "Luk Vindue",
    translated: 'auto',
    h: "hrPxvP/hrVgtNNTMX4sv5sljx57neTy+2p0U1TKGuCE=",
  },
  "Close account": {
    val: "Luk konto",
    translated: 'auto',
    h: "7HdV8X8++teDNW33urE2eccDw3VLdSpvII89zC/sfu4=",
  },
  "Closed": {
    /* ! Label for list of closed accounts */
    val: "Lukkede",
    translated: 'auto',
    h: "8pZrnvzAUQTJhDN/XX31DLvx0wIs1Ww3fV6pktEKEHs=",
  },
  "Clothing": {
    val: "Tøj",
    translated: 'auto',
    h: "as4CQmPu3VF2LxSvA5djgiAPatdFRqwmOt0NiHJCe7E=",
  },
  "Confirm password:": {
    val: "Bekræft adgangskode:",
    translated: 'auto',
    h: "Px/rLFgkE/Sv1Z+Xm0frULVV3lxvrEc7ABJaDzmv670=",
  },
  "Conflicts": {
    val: "Konflikter",
    translated: 'auto',
    h: "W04VkIj+XKS1rPtY7a6cQITUa157onpN6NAVlO9MknY=",
  },
  "Connect": {
    val: "Forbind",
    translated: 'auto',
    h: "pCLQy6ZAsZnJ3ff5r+iD+O2vHQhIJEEUHUhiY1NrMP0=",
  },
  "Connect to bank": {
    val: "Forbind til bank",
    translated: 'auto',
    h: "0T7eA3oFvMxyPIOAkMZ2rDpJxQVORgxrLqrDx87L1ZY=",
  },
  "Connected": {
    val: "Forbundet",
    translated: 'auto',
    h: "fV/VOfsqBR+vyqF2tRjG6qsC8ufS/QDaTRaUee+UEMA=",
  },
  "Connecting...": {
    val: "Forbinder...",
    translated: 'auto',
    h: "fYdj0RfOQMPN3n28gswFnK4aOvozPH0hqm9oqd+NcWI=",
  },
  "Connection corrupted. Please delete and re-create.": {
    /* Error when an invalid SimpleFIN connection is attempted */
    val: "Forbindelsen er korrupt. Venligst slet og opret den igen.",
    translated: 'auto',
    h: "YjH9IxACkJ2e9cq+MYI3I6l3RmOWZPEBAwzjq3W7x0s=",
  },
  "Connection deleted": {
    val: "Forbindelse slettet",
    translated: 'auto',
    h: "QbB3NfDIpEmXgwY+hq95+aQCRlMErfUvqa+o3tPY93A=",
  },
  "Connection saved!": {
    val: "Forbindelse gemt!",
    translated: 'auto',
    h: "wAgyeIQsbaI/kFPgBf8sWlKK1mf/VcP7BjHpC9TNYuc=",
  },
  "Copy": {
    val: "Kopier",
    translated: 'auto',
    h: "T2DR4UKv+pyVWY8GzF/WWjk5XqMXgZ0gDyXkZmYczHw=",
  },
  "Count": {
    val: "Tæl",
    translated: 'auto',
    h: "ikvrmlftwm5qPEEca6YD6duk6CH45CROgmp9sfZMEFE=",
  },
  "Create Account": {
    /* Undo/redo label for creating an account */
    /* Undo/redo label for creating an account */
    val: "Opret Konto",
    translated: 'auto',
    h: "0N2I0sNdMLVk7zC9FqlNYoA1G6RDgQDvQErp/TjAnRA=",
  },
  "Create Backup": {
    val: "Opret backup",
    translated: 'auto',
    h: "tUZEq5sa8Ggh6lIgsWzX8Blj6/unJ8dhl9sKpfwxRYY=",
  },
  "Create Backup and Start Over": {
    val: "Opret backup og start forfra",
    translated: 'auto',
    h: "55tb3CtVKNADQpK4SdoMMPQvHu1ftBosd/dP8lFHV/o=",
  },
  "Create Macro": {
    val: "Opret Makro",
    translated: 'auto',
    h: "F6PDykaoACWoqQ+oKUyJyhERAe1FjT6A3OkxL+S5l8k=",
  },
  "Create Template": {
    val: "Opret Skabelon",
    translated: 'auto',
    h: "gAbtUL3vhxk+yCSp7fzAF4Z9tV0I4x7Uq5xDJ4nm2Uk=",
  },
  "Create Transaction": {
    val: "Opret Transaktion",
    translated: 'auto',
    h: "G5NDAP857MBDE66GWUREcFAJc2pCogndYa6y+m6PRfE=",
  },
  "Create budget password:": {
    val: "Opret budget-adgangskode:",
    translated: 'auto',
    h: "Bf9XVrpN9UpVSKpZNRpBUw/IaFjMkNCmH4gpAfhYFkY=",
  },
  "Create macro": {
    val: "Opret makro",
    translated: 'auto',
    h: "9xZZAswDH8zePPUhfsaSEDJ21GU1yhILKhDWtvnUlr0=",
  },
  "Create new account": {
    val: "Opret ny konto",
    translated: 'auto',
    h: "SmoVFbeAWSO4cW1YQJbuDJQz8kenVz5++WTJEkS6Vos=",
  },
  "Create or manage account": {
    /* Link to manage relay accounts */
    val: "Opret eller administrer konto",
    translated: 'auto',
    h: "U5lOs+hLfJ8gBJoXR9ToFOsg130hRzN7A4AauACQHHY=",
  },
  "Currency symbols": {
    /* Label for currency symbol setting */
    val: "Valutasymboler",
    translated: 'auto',
    h: "MB7GDp8dkw8tLgwCzsb2VwrDRWwirbks5+U6PkshBB4=",
  },
  "Current version": {
    /* Label for current application version */
    val: "Nuværende version",
    translated: 'auto',
    h: "lVqFstk3jMWPnA1laudxoN7T6PXUVe365RE2LqCMZmA=",
  },
  "Custom": {
    /* A label for choosing a custom date range */
    val: "Tilpasset",
    translated: 'auto',
    h: "npcV1SQQyG8XsJlGwbsserjaxIIkVCtt9ZFBODiihSI=",
  },
  "Cut": {
    val: "Klip",
    translated: 'auto',
    h: "+kuX06pgC809fwr+5h9VbC8sVgVWo6EXgg6bzfXXtJs=",
  },
  "Dark": {
    /* Option for theme preference */
    val: "Mørk",
    translated: 'auto',
    h: "n09JYTXgkVzgVfXO+ZBo3gryCtlg9t+GoZSQe2YpJPQ=",
  },
  "Data": {
    val: "Data",
    translated: 'auto',
    h: "nb/gDaJJpEyxUczsooYPcWRNvDVzBJLOxevxBEAPM+o=",
  },
  "Date Posted": {
    val: "Dato offentliggjort",
    translated: 'auto',
    h: "3A+vhaBB21UASdnwmNYVGMV9qH/U43D3DCsVSXlWasY=",
  },
  "Date format": {
    /* Label for application date format preference */
    val: "Datoformat",
    translated: 'auto',
    h: "fY1FnR2YTcyORx9p/4BdLTjtjH1FNW35jtGy64ltO4E=",
  },
  "Date range": {
    val: "Datointerval",
    translated: 'auto',
    h: "Byx38NxnaOdzvBIgWlDoyRZR5IEPJ329lwDnivHzJik=",
  },
  "Debt": {
    /* Label for a total debt amount */
    /* Name of bucket group for debts */
    val: "Gæld",
    translated: 'auto',
    h: "y9kslXhW17gMMFZ9Dq8g/tabfINzlmzT+39QNbWiWGA=",
  },
  "Debugger": {
    val: "Fejlfinder",
    translated: 'auto',
    h: "4ScsdyOtUZsKH/cENJNnmyZFMuIjtHzPrPhrpnc+kOk=",
  },
  "Debugging": {
    val: "Fejlfinding",
    translated: 'auto',
    h: "5qYhotBwdyjpp1WiJlT+T5wf/rpbKu5NEGOrxJMpz2U=",
  },
  "Decimal delimiter": {
    val: "Decimaltegn",
    translated: 'auto',
    h: "Qjuny9lynn/v2WJwTnYLdXQb/ne+0Q2TBiSM+KFIrIU=",
  },
  "Default": {
    /* Label for default backup folder location */
    val: "Standard",
    translated: 'auto',
    h: "TKDg5zIpVAzBCbQHtW0yWzTe9w8z+EmC7VPeZA2B70k=",
  },
  "Default number format": {
    /* Label for application number formatting preference */
    val: "Standard talformat",
    translated: 'auto',
    h: "mgzNoP6jlMs5CPedg7OHyJuqrwEkQlj6DduekmeqfCY=",
  },
  "Delete": {
    val: "Slet",
    translated: 'auto',
    h: "sm3jcrSw6qxgICiEpy25imvm6QNueF6oZ+oBxfeSEJg=",
  },
  "Delete Account": {
    val: "Slet Konto",
    translated: 'auto',
    h: "zTJTocYLEbNVwJ0ojyPCB6M0JpGx6fe6AZHWtuVJv0M=",
  },
  "Delete Connection": {
    val: "Slet Forbindelse",
    translated: 'auto',
    h: "o6bxlUpjZFFTleiRLA4ykeB3yEHsAiXW9usUdJ9jh1g=",
  },
  "Delete Group": {
    val: "Slet Gruppe",
    translated: 'auto',
    h: "VaefOk8g8N64N+Td8TEorhhMQBe0AuWmfRz7u7+Q1Ko=",
  },
  "Delete Macro": {
    val: "Slet Makro",
    translated: 'auto',
    h: "Qb7shd6fRLybaDzPvdr0Z4VfVek/fHVV556kEcNZrH8=",
  },
  "Delete Transactions": {
    val: "Slet Transaktioner",
    translated: 'auto',
    h: "5rAWRNk97CWy9OfDP5IWSE/T2Ao461w7C3z/IDV154I=",
  },
  "Delete Unknown Account": {
    val: "Slet Ukendt Konto",
    translated: 'auto',
    h: "SzZ+N6/hpntSyAoyuLxzaipQcinkrh5c33ceQdtoUcE=",
  },
  "Delete all": {
    val: "Slet alt",
    translated: 'auto',
    h: "nKzti1takFUxZyWfLTGqgvdL3dJMx6CdNwVfBH1jUYE=",
  },
  "Deleted": {
    val: "Slettet",
    translated: 'auto',
    h: "qaM7+YriKFk63EE2I46KNlMjYgR2jOP4JZMTj4yIti4=",
  },
  "Delimiter": {
    val: "Skilletegn",
    translated: 'auto',
    h: "VDesNaCayRIGFHLEXOjH3Eev3D/EzM6/dVsl7zN/+Mo=",
  },
  "Description": {
    val: "Beskrivelse",
    translated: 'auto',
    h: "bg0ZDIR+z+PEkinc/ZyqkERMsVZcFFm3NhQoIqZH+WM=",
  },
  "Details": {
    /* Label for sharing avenue details */
    val: "Detaljer",
    translated: 'auto',
    h: "68e/QPEuI36iIEcTWmKDrVU9KBReQ3EjFzF1F06KQMA=",
  },
  "Device": {
    val: "Enhed",
    translated: 'auto',
    h: "SljXcmF5cBUDvagtLmL5aNIz++tnIbf5qjS1cxxEI1I=",
  },
  "Device ID": {
    val: "Enheds-ID",
    translated: 'auto',
    h: "23vizNM3wG6SeZvqULHYvtlqlWmwbFL3GuLOzGzdSK8=",
  },
  "Diapers": {
    val: "Bleer",
    translated: 'auto',
    h: "Vr53xwIeHjIIuMymcxrQ3l1RsDE6ra+ZTFT4dbR/rlI=",
  },
  "Disable Macro": {
    val: "Deaktiver Makro",
    translated: 'auto',
    h: "k0HEkS8+oirJJHylM2fcT1D1/IqnGFVX3cGlU3d3G50=",
  },
  "Disconnected": {
    val: "Frakoblet",
    translated: 'auto',
    h: "8d3FMs2ZCPYbCLDzsVcqXsv6b5vDilOwJCEAevNsZDM=",
  },
  "Do both devices show the same pairing codes?": {
    val: "Viser begge enheder de samme paringskoder?",
    translated: 'auto',
    h: "w66hJr+u8QSrtvG+XC0n5CLXFsJuU1YfxxNPzX6b/z8=",
  },
  "Done": {
    val: "Færdig",
    translated: 'auto',
    h: "FlUsJYC76LgtNYLenrPiDvDgAVk3wLT14rwyk2hHYiY=",
  },
  "Download Update": {
    val: "Download opdatering",
    translated: 'auto',
    h: "OvekDBh71chOkbTXqPs/V/x0lNbpc668s4hyXRF5G+I=",
  },
  "Downloading update...": {
    val: "Henter opdatering...",
    translated: 'auto',
    h: "vTHXpZeFxjQhKPwUQPCm+eHcyYR6YjSmIm4mtV/5iTE=",
  },
  "Duplicate Window": {
    val: "Dupliker Vindue",
    translated: 'auto',
    h: "tjwFTBARBKQ5uC9Fh0zm7ag/RViV95pptJBJn9eVqHE=",
  },
  "Duplicate of existing transaction": {
    /* Label for an imported transaction that is a duplicate of an existing one */
    val: "Duplikat af eksisterende transaktion",
    translated: 'auto',
    h: "6d7BweiCObuFrgVXiVOkjVaHEKwbPSJY2AbNcT/7508=",
  },
  "EULA accepted": {
    val: "EULA accepteret",
    translated: 'auto',
    h: "MZZW8mGJoOJ5ehMdPPve2szfe+yi7Du06hSKo61py9Y=",
  },
  "EULA not accepted": {
    val: "EULA ikke accepteret",
    translated: 'auto',
    h: "FVsbix5CHwscF/kgCdBTZYPnKTpIN55xFHleEFK6Oqw=",
  },
  "EXPERIMENTAL Buckets Macro Maker": {
    /* 'Buckets' refers to the application name */
    val: "Eksperimentel Buckets Makro Maker",
    translated: 'auto',
    h: "NZPVXQ+Dw1vv0fLXY+Z4R1KiEkXjDZtSmY3tVz5L1VI=",
  },
  "Eating out": {
    val: "At spise ude",
    translated: 'auto',
    h: "aiQggrM+Wb8WtkoJykeSDnNiCBgzGqVGc1Hvkf5Uzg8=",
  },
  "Edit": {
    val: "Rediger",
    translated: 'auto',
    h: "9+ZynTDPePvsJX4rW8Mn0wEzk0GRQ+udON01NKHVsQU=",
  },
  "Electricity": {
    val: "Elektricitet",
    translated: 'auto',
    h: "D85G++Fy1hUUGZfHiKAUcNRlXmLcdkKK7RtxnwJ110U=",
  },
  "Enable Macro": {
    val: "Aktivér Makro",
    translated: 'auto',
    h: "9SWFr96CNVD21JQ30lw4cj1JCAZ44RNlKkDzQJ/RyuE=",
  },
  "Enabled": {
    val: "Aktiveret",
    translated: 'auto',
    h: "hHztbKAreElTc7ttNUovJFG0DIq9xfILBM+1aNV8x2Q=",
  },
  "Encryption": {
    val: "Kryptering",
    translated: 'auto',
    h: "Rfsn7WkrTLeDLzups4h7merVzPfg8xcRh1++z49WW8Y=",
  },
  "Encryption keys": {
    val: "Krypteringsnøgler",
    translated: 'auto',
    h: "u45A8tEUHjVJ/FuiM5W+sNzNth8QZuHXNgdL16YmB1U=",
  },
  "Ending Balance": {
    val: "Slutbalance",
    translated: 'auto',
    h: "bwan2qqqdDloluCkgp+UPYWSAeOQk9zkaNwb2p0kUDk=",
  },
  "Ending amount:": {
    val: "Slutbeløb:",
    translated: 'auto',
    h: "0IUvXk9nogxjdL1n0VZPrxcMOUZODNXMlGrlpyXq8bI=",
  },
  "Ending balance": {
    val: "Slutbalance",
    translated: 'auto',
    h: "aAtJw4Tz1ZrB97s3K84TZqaiG7f+B04ZFnxZx9ryHWQ=",
  },
  "Enter License...": {
    val: "Indtast licens...",
    translated: 'auto',
    h: "A+/eZ8qTAh97iBouJPInRkCg7F0nOkteYEBO7+lFHHA=",
  },
  "Error": {
    val: "Fejl",
    translated: 'auto',
    h: "/ErBlknw7o83xx0uIDCjdDA4u5bAwnNZuhFd2GV1Zcw=",
  },
  "Error decrypting recording": {
    val: "Fejl ved dekryptering af optagelse",
    translated: 'auto',
    h: "6LehLh8oNPMtzfLjQbZAJ3a35TSBoIn+XTBtBBaEuKI=",
  },
  "Error during import": {
    val: "Fejl under import",
    translated: 'auto',
    h: "BiI3zjvgdX5vXe4kX0mS7AvEFln+iIdMmLNX1xeQqLU=",
  },
  "Error during merge": {
    val: "Fejl under sammenlægning",
    translated: 'auto',
    h: "PoE7TMsxGW9dp4u1juziybXV1VV8Wgv9ejdrAoUVynk=",
  },
  "Error fetching data": {
    val: "Fejl ved hentning af data",
    translated: 'auto',
    h: "z94B0956dECmmaMVLZFW0oZMVtA92etw+2ZqumR4K9Q=",
  },
  "Error importing": {
    val: "Fejl ved import",
    translated: 'auto',
    h: "rekzwWcY0HRZEhFebX1fJrp4aDJ/NTPxIwWaCYAk+7k=",
  },
  "Error parsing response": {
    val: "Fejl ved parsing af response",
    translated: 'auto',
    h: "PsIRbom+m8Y5OIEPW2rzJYVlNA2NQrZmEQnpW7Y/9KI=",
  },
  "Error restoring from backup": {
    val: "Fejl ved genoprettelse fra backup",
    translated: 'auto',
    h: "7dtoozbhFD0JBqVUuvIbB6I58faFMyoolWjHqHP7ypo=",
  },
  "Error running macro": {
    val: "Fejl ved kørsel af makro",
    translated: 'auto',
    h: "obu/8VMe/z+StejTUbzL5fGOP7tMkWw4DfW4KkF/lxs=",
  },
  "Error running recording": {
    val: "Fejl under kørsel af optagelse",
    translated: 'auto',
    h: "eE9Fw8G4vQpND3fFWnfGNvtN5LxCcQQecWO6fQgBmpM=",
  },
  "Error running sync": {
    val: "Fejl under synkronisering",
    translated: 'auto',
    h: "LB/WNzHp4orPsbCVEJuDzUPsQUfNRDNXw7sFnbzfguw=",
  },
  "Error updating transaction": {
    val: "Fejl ved opdatering af transaktion",
    translated: 'auto',
    h: "IEJfuOO0LRCEv2OUh8Cz02PtiJ8tqVTRzeXK5DyqBQs=",
  },
  "Existing version": {
    val: "Eksisterende version",
    translated: 'auto',
    h: "w3Sl4FH2y8PxQEXEcDumPPkMrRbBM/winnkwLKNDghY=",
  },
  "Expenses": {
    val: "Udgifter",
    translated: 'auto',
    h: "d6aKytFAPwPUzFOv41R0itfcMu11VdE29vkM05dnpBU=",
  },
  "Export": {
    val: "Eksport",
    translated: 'auto',
    h: "mZJs0iE089tMZ5BWqTUBp+2aJ90wKL4act4hUPt7zkA=",
  },
  "Failed": {
    val: "Mislykkedes",
    translated: 'auto',
    h: "pDZMH/BpUzRALpC+FEhtjeyLcyvg3szLxg2ly14c9pY=",
  },
  "Faint cents": {
    /* Label for application preference enabling/disabling faint cents */
    val: "Dæmpede cent",
    translated: 'auto',
    h: "gL5W+6nmqNfRsbiNIBEyHIX0LvI1xCYl+kDyuUwFsGI=",
  },
  "File": {
    /* Noun; label for budget filename */
    val: "Fil",
    translated: 'auto',
    h: "9XpUff7TtVQbIncvgmrfzVB2gkBh35RnM1ET/HFr3k0=",
  },
  "File access error": {
    val: "Filadgangsfejl",
    translated: 'auto',
    h: "DnlPFIjZcB6Sgt6APxZIl4HyFKIDaY5CiE4AWlVYqMI=",
  },
  "File does not exist:": {
    val: "Filen findes ikke:",
    translated: 'auto',
    h: "RPeWW9lCHkg+d6XybADj3OH2jxrYcSOhrA3+QHEcYz0=",
  },
  "File import mapping": {
    /* Noun: object that contains settings for importing a file */
    val: "Filimport kortlægning",
    translated: 'auto',
    h: "5s+unX9P0STLcQ5yQjcOEEO3XLrHp6TiOAXOY5L4Jzo=",
  },
  "File saved: ": {
    val: "Fil gemt: ",
    translated: 'auto',
    h: "e6UDV8UzF5qqysQpN3OrcspjD8zPNn72zKd1CH1lFe8=",
  },
  "Files available to sync": {
    val: "Filer klar til synkronisering",
    translated: 'auto',
    h: "tD4YLtMv/MtHbTXTSZmkcCxj1g7Km6d6kuWI+1yHo/8=",
  },
  "Filter": {
    val: "Filter",
    translated: 'auto',
    h: "gG/X0Prd382E2jAAsfyk3bynhjgo9Fk44NYmIbqfMTk=",
  },
  "Find Next": {
    /* Edit menu label for finding the next match.  Perhaps use what your browser or other applications use. */
    val: "Find næste",
    translated: 'auto',
    h: "LALfI5V4TsQo0DcGJwmNmrm3xNPtY5PmQuxB1voZo34=",
  },
  "Find Previous": {
    /* Edit menu label for finding the previous match.  Perhaps use what your browser or other applications use. */
    val: "Find forrige",
    translated: 'auto',
    h: "0n6Dq5KDTxxsTAKrJE+RDdgi9ln6FyfUEPNBJ6ejZ5o=",
  },
  "Find on page": {
    val: "Find på side",
    translated: 'auto',
    h: "C8FK0TP/vHA4Dt565Z2E2vc+j9soU5SIaWGmc7j+UEc=",
  },
  "Find...": {
    val: "Søg...",
    translated: 'auto',
    h: "aUU1pzvlZzKNgYZP2ZpPtQMImBOStbFnK33P3YwXTNs=",
  },
  "Finish merge": {
    val: "Afslut sammenflet",
    translated: 'auto',
    h: "B0c10bq0bG9fZmohGvSo0pG1yeqxKs5mLo7SpplAhfw=",
  },
  "Folder": {
    val: "Mappe",
    translated: 'auto',
    h: "U0LnwvQV2yrtaYfkte120FAJhkqVya8TcV7qJ9tumUs=",
  },
  "For Older Budgets": {
    /* Label for section related to updating from older budgets */
    val: "Til Ældre Budgetter",
    translated: 'auto',
    h: "TMGosuE5olJuLuly8uc8gx4r4RTMA3guKrboArLuB7w=",
  },
  "Forbidden": {
    val: "Forbudt",
    translated: 'auto',
    h: "CcNf+bPZqU5SYvmmxeJh8TRTDY9bbSASjE9y1+21kGU=",
  },
  "Force Reload": {
    val: "Tving Genindlæs",
    translated: 'auto',
    h: "ktBJY2UXO+2r0ZvmbQXhArN51bSTnyaNnnBNR9PQ5K8=",
  },
  "From": {
    val: "Fra",
    translated: 'auto',
    h: "cCFAY2/zl3pq5fMwrP/2LBsrrL36SYzS+6in7mvWyvY=",
  },
  "Fuel": {
    val: "Brændstof",
    translated: 'auto',
    h: "lU9dO2a3oisfgHqd0n39sKC/wl7ymSV/XprtLhQLEiI=",
  },
  "Full version": {
    /* Status for when a user has a Buckets application license */
    val: "Fuld version",
    translated: 'auto',
    h: "8gxVtYQtIFlJyU0m/Fyu2usHpVC5gXv1gstLNS4/pV4=",
  },
  "Gain/Loss": {
    val: "Gevinst/Tab",
    translated: 'auto',
    h: "Kop7hNPijjGN5jXxpDmcP32CJy22tzVz1qXWTjNxVg0=",
  },
  "General": {
    /* Label for general preferences */
    val: "Generelt",
    translated: 'auto',
    h: "Ro1hqU2fnZPlbffPiUFBRSO2oSn7YKpDUbDUDIWP9Ew=",
  },
  "Getting Started...": {
    val: "Kom i gang...",
    translated: 'auto',
    h: "XD8GQYEIDrNjTMPX4TjGeAbbCIEBcAONlYPd/D8Hz84=",
  },
  "Go To...": {
    /* Submenu title for navigation shortcuts */
    val: "Gå til...",
    translated: 'auto',
    h: "AsKW6buNlZ7YlWHN1pVgNlCAzqiFIsJGL1cg8CkVGkg=",
  },
  "Goal completion:": {
    val: "Målfuldførelse:",
    translated: 'auto',
    h: "v+G5gj6B+MtHwQovNmj/BWbpnQncARZGo+swhE1fbtg=",
  },
  "Goal:": {
    val: "Mål:",
    translated: 'auto',
    h: "77+E2dn/Mw53xjGhNc6irsiq1WULAiC4yIyt4NaO0DM=",
  },
  "Goal: 0": {
    val: " Mål: 0",
    translated: 'auto',
    h: "rtvJnJFYA7lHYjPjGpF27/h2So3pRdrRLjfnkg78woQ=",
  },
  "Groceries": {
    val: "Dagligvarer",
    translated: 'auto',
    h: "T6Kz6/FDxQkeIUJq8SVGn0T7OPdZ7B0YjPD3qHqW5p4=",
  },
  "Guide": {
    /* Menu label for the Buckets user guide */
    val: "Vejledning",
    translated: 'auto',
    h: "E0TqJgLjqp65xs2CJV72FGZk5q/R8lIwaWCMnXpvTPE=",
  },
  "Health Insurance": {
    val: "Sundhedsforsikring",
    translated: 'auto',
    h: "nsWIG2Kbb9OtoQkBvgkFh5MfMVNfbuGKhZypQ3uoQJw=",
  },
  "Hello!  Thanks for trying out Buckets.": {
    val: "Hej!  Tak for at prøve Buckets.",
    translated: 'auto',
    h: "0m9VvMGwLCqD3lmZ24GbzlkRxPX1kf/DsbWA9kkBWX0=",
  },
  "Help": {
    val: "Hjælp",
    translated: 'auto',
    h: "TvUUB7AuCuFJ9IWiz2SbsjnUvYoDPZAaMPxup/rwosM=",
  },
  "Hide Buckets": {
    /* 'Buckets' refers to the application name. */
    val: "Skjul Buckets",
    translated: 'auto',
    h: "38YdGXFjndmgDFgXTpfUZ0F+W/D9e267YaAvzYZm4O8=",
  },
  "Hide Others": {
    val: "Skjul andre",
    translated: 'auto',
    h: "RpKz0G7Y8OE5oyGm0/zRffPdr7RQkneZCYrikLHIZ+U=",
  },
  "Hide debug info": {
    val: "Skjul debug-information",
    translated: 'auto',
    h: "9rip1vzCF79F3bOZh86TdPkeaNjawcFqlYX/gmCqHyU=",
  },
  "Holidays": {
    val: "Ferier",
    translated: 'auto',
    h: "HTQ10E8CaKVUu71N6uLx9J+Y6naLLRX37v0oQkesV3k=",
  },
  "Host": {
    val: "Vært",
    translated: 'auto',
    h: "gPYRfd5+U6aDaCpXeR+YM/R+wrkLCLMOQUbeT5GQn6E=",
  },
  "Household goods": {
    val: "Husholdningsvarer",
    translated: 'auto',
    h: "UK1mJCSwg2XnGpH47pKFFD8NlrCfcd3bQb1bJt2RXEg=",
  },
  "ID": {
    val: "ID",
    translated: 'auto',
    h: "ge86Jcy26vcv5uPFI29MfLOxHh8ctACck6nRdrl9aM4=",
  },
  "If Net is 0, the bucket transactions will be marked as transfers rather than as income or expenses.": {
    val: "Hvis Net er 0, vil bucket-transaktionerne blive markeret som overføringer i stedet for som indtægter eller udgifter.",
    translated: 'auto',
    h: "/btREV6/jPJtrc1ERDwLUyJAowC8+v6gUB7bmJJYzT4=",
  },
  "Ignore": {
    /* Label for checkbox controlling whether an account is ignored or not */
    val: "Ignorer",
    translated: 'auto',
    h: "K8sAh2XND1/tJOuX9xTLmr1fQjUOB70cfc9GwI62fEs=",
  },
  "Ignore Account": {
    /* Undo/Redo label for ignoring an account from import */
    val: "Ignorer Konto",
    translated: 'auto',
    h: "Ils1ViOchbpiaHmdalbFiGmOlTK7ck+6+BhoyvUVrqM=",
  },
  "Import": {
    val: "Importér",
    translated: 'auto',
    h: "F3sijvfYz3oB4iz2rVHjUvNDLQs43MbXDVIr5VFA2/c=",
  },
  "Import .zip file": {
    val: "Importér .zip-fil",
    translated: 'auto',
    h: "EmJa8O6YE7jrgmaqDUM5pIdurIYHfx1RIvVLHmqhRws=",
  },
  "Import From Web YNAB...": {
    val: "Import fra Web YNAB...",
    translated: 'auto',
    h: "7Yteq/akhgWWCBUeqgBRz4wP6bKcirfp74uLeTQop3Q=",
  },
  "Import From YNAB4...": {
    val: "Importér fra YNAB4...",
    translated: 'auto',
    h: "z10Vp9BzEC6CkLTNtR8xywSTNYGMBbGFZMD7XUEbrVs=",
  },
  "Import Transactions": {
    /* Undo/redo label for importing transactions */
    val: "Importer transaktioner",
    translated: 'auto',
    h: "0RkMBEPqgu5UHcGd2OzH7z/1vkRlIhOPxBSeollnMnU=",
  },
  "Import Transactions...": {
    val: "Importér transaktioner...",
    translated: 'auto',
    h: "PPLzf/61MKc3iWfDMTRo6ERH/TYu6TxBH2vmVbZD5Lk=",
  },
  "Import complete!": {
    /* Notification when an import is complete */
    val: "Import fuldført!",
    translated: 'auto',
    h: "L9VgrAXBV8q2Ux9I1Y2Mr/vbc6PiBI0Uxct20Hw6hwY=",
  },
  "Import file": {
    /* Button label for starting a file import */
    /* Button label for starting a file import */
    val: "Importér fil",
    translated: 'auto',
    h: "iaQvPnsbTKu/ItmjoC8ctwpVbyumVe15GLL8nCbe25Q=",
  },
  "Import from Web YNAB": {
    val: "Importer fra Web YNAB",
    translated: 'auto',
    h: "NyXkbdCVf1mZfbmhjqJx4M10Vz/UfGdvSHdz+G6CGKc=",
  },
  "Import from YNAB4": {
    val: "Importer fra YNAB4",
    translated: 'auto',
    h: "FJ55mGfxitbc5YeY1s6YEji8I54ILSi3sfzQALSx50I=",
  },
  "Import links broken": {
    /* Notification indicating that the links between imported transaction files and a particular account have been broken. */
    val: "Importlinks brudt",
    translated: 'auto',
    h: "rLgGF32tMx7KSWu+vRLEbr+IbkedxhS8ELcYZhNCqTs=",
  },
  "In": {
    val: "i",
    translated: 'auto',
    h: "TcCPpYF7/U7vM5pPmpqvJipZt0WPk3A/vC7Ec8pfDvo=",
  },
  "In/Out": {
    val: "Ind/Ud",
    translated: 'auto',
    h: "G/e+QHikQOjTM9bcDBrmUZj6ONRstDFt17sNXu9zUd8=",
  },
  "Include log file": {
    val: "Inkluder logfil",
    translated: 'auto',
    h: "rjy01ggb0uSRPn/tmrf/BVwGQiXaaSc6Nh+o92BIU3U=",
  },
  "Income": {
    val: "Indkomst",
    translated: 'auto',
    h: "D2fJbta5d1Z5QYuRC5zzkBHsItZOOgY4FKrFJ64BvRs=",
  },
  "Income/Expense": {
    val: "Indkomst/Udgift",
    translated: 'auto',
    h: "i/Z19mssKMh8vj11iAIlpS59JGc7MtE5zkyAW/IJVdA=",
  },
  "Incoming budget file": {
    val: "Indgående budgetfil",
    translated: 'auto',
    h: "KQwRx6114V/RFL9ilT4S8R+fWFeCu7sLcYe2GcL9JmQ=",
  },
  "Incoming version": {
    val: "Indgående version",
    translated: 'auto',
    h: "u02gUA6+LNLSmH1C76FF2HqPX3K7EuK8xBSB0tl41js=",
  },
  "Install and Relaunch Buckets": {
    val: "Installer og genstart Buckets",
    translated: 'auto',
    h: "bzusTDIT831mqEwmmM59eT12mfoNMYiGPbUfoIzaCwo=",
  },
  "Internet": {
    val: "Internet",
    translated: 'auto',
    h: "LUwTAW8PsV34HKGrTUopI7v3NFK8iWKpv5Nb8EOtU1E=",
  },
  "Invalid categorization.  Categories not set.": {
    val: "Ugyldig kategorisering. Kategorier ikke sat.",
    translated: 'auto',
    h: "DykWhCxgeqeIt2i+Lc2sRdURMNIgRgohpjs83umwH9Y=",
  },
  "Invalid date": {
    val: "Ugyldig dato",
    translated: 'auto',
    h: "wDN2ZzrVLU22Lij4eJJvxPBmC6Qv9SPmgRT36Qpq9KE=",
  },
  "Invalid license": {
    val: "Ugyldig licens",
    translated: 'auto',
    h: "BfJdh6NOzurSCMGRmCP8gb1VAXUlrSSsCFIGHGXtNiA=",
  },
  "Invalid password": {
    val: "Ugyldigt adgangskode",
    translated: 'auto',
    h: "4JKuk5cidGqS+Yy2zWi8Bf+XYJLipTr94xQ+cPTJUVs=",
  },
  "Invalid transactions preventing import": {
    val: "Ugyldige transaktioner forhindrer import",
    translated: 'auto',
    h: "smXPNWsiVwsLzBZ2L/sbD9IO3ZMxKyORNgcKAa3CFRE=",
  },
  "It says:": {
    val: "Det siger:",
    translated: 'auto',
    h: "gbWdWRhcKGQzFCi8CcKy9Bmfg2oYqz1zGMHQzSU8jQE=",
  },
  "It should say:": {
    val: "Det skal sige:",
    translated: 'auto',
    h: "RjwjZtmUgFzGUxR0zMmyXh0cHzpzsbj4nk6R7tGe+i4=",
  },
  "Keep account transactions": {
    val: "Bevar kontotransaktioner",
    translated: 'auto',
    h: "SA/tgP2OPX7K6/Rztew4oai82mmt7fqOHpOuCWNrPZU=",
  },
  "Keep accounts": {
    val: "Før regnskaber",
    translated: 'auto',
    h: "iQX3g3XL9mIf7uX5wDrQIhLNJ464eieqHwhtKtfSuoA=",
  },
  "Keep bucket transactions": {
    val: "Bevar bucket-transaktioner",
    translated: 'auto',
    h: "0LwH6beBDlpdXvsVWW7nGj/5/tkz7gDk+Sm4Kltx3rQ=",
  },
  "Keep buckets": {
    val: "Bevar spande",
    translated: 'auto',
    h: "4lGk6/xvGOvn8z5vLVpqCLE6WQwpEoizH0LM95z1Tvo=",
  },
  "Kick Bucket": {
    /* Name of action.  Consider this "Archive Bucket" */
    val: "Kick Spand",
    translated: 'auto',
    h: "3hmOuv1hNsjpQJ5cSDTlSqN4jGOGFnSPw9r0bK68RWY=",
  },
  "Kick the bucket": {
    /* Button label for archiving a bucket */
    val: "Sparke balen",
    translated: 'auto',
    h: "IvzeGJ9G+Rns8Rbnal26flTFzd+yBNSEBQSptdNy8t8=",
  },
  "Kicked": {
    /* Label for list of archived buckets */
    val: "Sparket",
    translated: 'auto',
    h: "cWApfoLlcBvoHizIFtrDQq3uwrZIYMXKO1iLMvv8szI=",
  },
  "Language": {
    /* Label for application language preference */
    val: "Sprog",
    translated: 'auto',
    h: "H6JLSQVzeo1QvqYd6ewWITP1MyGheSF5eFCeaP6nQwk=",
  },
  "Language default": {
    val: "Sprog standard",
    translated: 'auto',
    h: "B22VmGf23mHOBpC02z4zdK4P34035w3nWPUR86u0Dgg=",
  },
  "Last sync": {
    val: "Sidste synk",
    translated: 'auto',
    h: "ifqkf2oJbmCZakm2f0rOQonkEGgcRhI46mmhSM3tTbA=",
  },
  "Last updated": {
    val: "Sidst opdateret",
    translated: 'auto',
    h: "BenCUeX0s7/BAYHFcK/s7yUcGW68Pyd1JDxeIPnbBGM=",
  },
  "Last used": {
    val: "Sidst brugt",
    translated: 'auto',
    h: "G5a6Jdor9jRT/Wtcg9SfXQsvqL7VFvnVD2+gq7yT1Jg=",
  },
  "Later": {
    /* Button label for purchasing a license later */
    val: "Senere",
    translated: 'auto',
    h: "wZUl6R8m08S1l0zLg0xgDG2XE1sodemTuRDbalIB4VM=",
  },
  "Learn More": {
    val: "Lær Mere",
    translated: 'auto',
    h: "8bk7nEyrz+Q0vmMisWIPVuvHR4/TeW4DhemALir6s1o=",
  },
  "License": {
    /* Label for page where you view license details */
    val: "Licens",
    translated: 'auto',
    h: "qmaEL5BHMIqGJ0RYbmhJPHnRV60sgX8a8RHEh3wAQvc=",
  },
  "License status": {
    val: "Licensstatus",
    translated: 'auto',
    h: "pB9DYc2XWzC+Y3NEmw4dc63G3dstNOjTOAgt+MPA5WU=",
  },
  "Life Insurance": {
    val: "Livsforsikring",
    translated: 'auto',
    h: "CafgTI2ogIOqH6sg0xYnwgpDXmZ5SZQAsRY2jlTsp9c=",
  },
  "Light": {
    /* Option for theme preference */
    val: "Lys",
    translated: 'auto',
    h: "C0avqWOAFWs6Zf7/577zzmx49uDbTZDSmLAJIQchfuE=",
  },
  "Limit": {
    val: "Grænse",
    translated: 'auto',
    h: "tmPeisQPkoz4f2EpO/u0ThQPLC5ev6RKZzs4lkgatBU=",
  },
  "Limit:": {
    val: "Grænse:",
    translated: 'auto',
    h: "fU5A7Xvpww+aXRMyXDk5JaooMFWEKRFeMBtm2aYfRXQ=",
  },
  "Link Account": {
    val: "Forbind konto",
    translated: 'auto',
    h: "Kq3pmMt0lHo1Or0xDzOxrUYLyhXtTVmVmcm/qGByIuk=",
  },
  "Local file": {
    val: "Lokal fil",
    translated: 'auto',
    h: "CMhZhId2bqThTVsNh1c/YbZs+qOkFTdtsZA8px8zwA4=",
  },
  "Local files": {
    val: "Lokale filer",
    translated: 'auto',
    h: "Atqw+RURXK7fFYEzxEV4d43UKK1kgVgoaKusNhnbGZg=",
  },
  "Local network client": {
    val: "Lokal netværk klient",
    translated: 'auto',
    h: "bI/iWjtuzv7DVDFzzviehzbWu1TWwURDNt++OVfSXEg=",
  },
  "Local network server": {
    val: "Lokal netværk server",
    translated: 'auto',
    h: "/eJCfyE7NbbJocHDU+wjKuxXQBWAzekC3W/Bue6h+nI=",
  },
  "Macro deleted": {
    val: "Makro slettet",
    translated: 'auto',
    h: "XdtVcRU7RheAlhzK15asG/s7ppztkgXITjJQkM833Rw=",
  },
  "Macros": {
    val: "Makroer",
    translated: 'auto',
    h: "yo4VuLKqBNhvEBgUZKyI2WypDrv1loL/wA1qO3u4Zq4=",
  },
  "Make Transfer": {
    val: "Foretag overførsel",
    translated: 'auto',
    h: "Rmor5ffKqQTdDQSwA2x/hHhrr0zL7MceXGsR1vHe6b4=",
  },
  "Make it rain!": {
    val: "Lad det regne!",
    translated: 'auto',
    h: "GCU3Hru9VCit7F+BYEMKmg5U8gsc1/UZ+o5wsbMAkeY=",
  },
  "Make it so": {
    /* Button label for causing the set of pending deposits/withdrawls to happen.  Synonyms could be: "Do it" or "Run" or "Go" */
    val: "Gør det så",
    translated: 'auto',
    h: "XRTIWjylWKAy5BW8/0C0rOSW5S1QC+CxmgmFfhi81pk=",
  },
  "Mark Cleared": {
    /* Name of action for marking a transaction as having cleared the bank */
    val: "Marker Afregnet",
    translated: 'auto',
    h: "Z+NICH1z9EYN3Ub7Z9idiTw/t+QaDF9n3h9br9WhjgE=",
  },
  "Mark Not Cleared": {
    /* Name of action for marking a transaction as not having cleared the bank */
    val: "Markér Ikke Afstemt",
    translated: 'auto',
    h: "4VoXUMr4nLIoyueiB8YlIR9HFGPYBhYxJq/cqqwDLs0=",
  },
  "Mass Update": {
    val: "Masseopdatering",
    translated: 'auto',
    h: "8Vx8raw2DARWzkCbKtZrIQdXCP2vDzw/FMYKfw51Jcs=",
  },
  "Medical": {
    val: "Medicinsk",
    translated: 'auto',
    h: "TcuCD6n7/CmRm/jdGZQLDvEdAVaJ2cDy2CahpUk9pCQ=",
  },
  "Memo": {
    val: "Notat",
    translated: 'auto',
    h: "9yClwoAwAV0+DXl8NnkkAnlUi+Ebp2soPwN5meYKgWY=",
  },
  "Memos To Payees": {
    val: "Notater til Modtagere",
    translated: 'auto',
    h: "RrzhV+LUxgPfiFMK0krRxVfeKXhRquwgRwC8neBJ2Xs=",
  },
  "Merge": {
    val: "Flet",
    translated: 'auto',
    h: "mOHySNwxHH1kAQerMpBekxjTXkpm93+75ghAQZBI8YU=",
  },
  "Merge Budgets": {
    val: "Flet Budgetter",
    translated: 'auto',
    h: "7mOfG0hHFzdbEwVuhnSJP2QnEDVFQg4s3d8syq4EMHw=",
  },
  "Merge Payees": {
    val: "Flet Modtagere",
    translated: 'auto',
    h: "E1u4wBRN09jfBf9R5K2xo80gFrGBuDEB39Ri7EL8bYw=",
  },
  "Merge already in progress": {
    val: "Fletning allerede i gang",
    translated: 'auto',
    h: "oIEtjAX5TjxJ78OneCHljWt7hpmZS8AhezCjetJ2UEA=",
  },
  "Merge complete": {
    val: "Sammenfletning fuldført",
    translated: 'auto',
    h: "4DUIP9c3KGNs5H3H3fnNnu8LfaHA4bB8PIds+wSy3jI=",
  },
  "Merge failed": {
    val: "Sammenfletning mislykkedes",
    translated: 'auto',
    h: "6HNyKVatlEsWVRVgjSSAxmGoD1obkrMMWW6Ci7DLb3A=",
  },
  "Minimize": {
    val: "Minimer",
    translated: 'auto',
    h: "ELhkWGGY5oNKpfCzoXXW6TgkfS1nI0ZuJbWyYLmT+ro=",
  },
  "Misc": {
    val: "Diverse",
    translated: 'auto',
    h: "DPoc7CIbzLHJxuar3WnaidO3Ryy1QtYkCswRzVHtVBg=",
  },
  "Month to Month": {
    val: "Måned til måned",
    translated: 'auto',
    h: "VYq/DQYARQsjblXvXMijYnVbyFbLkqoRYmQ8IHhTbDQ=",
  },
  "Monthly": {
    val: "Månedlig",
    translated: 'auto',
    h: "r+AvQ06eYho/PFxjGz8FzHFmEfN+fjBpG0Yzic6/UgU=",
  },
  "Monthly deposit:": {
    val: "Månedlig indbetaling:",
    translated: 'auto',
    h: "GKlnbgfjEkmlOI0TT0pyfI30T1/0jrXjT01JZrBTpP0=",
  },
  "Months": {
    val: "Måneder",
    translated: 'auto',
    h: "wW/jCiA3sxpdbZ8SZ50pYiOvxUk2Ix8T6WB3ZXkAS4s=",
  },
  "Move Account": {
    val: "Flyt Konto",
    translated: 'auto',
    h: "ybDQ63l83HcIPrlccbfuOBNxeGYsiDmXI3tyTZ7nKZI=",
  },
  "Move Bucket": {
    val: "Flyt Bøtte",
    translated: 'auto',
    h: "6lJYNJMplvVHQuXlFYBD81+4kgQQb1SwZ0s13hvlIfI=",
  },
  "Move Group": {
    val: "Flyt Gruppe",
    translated: 'auto',
    h: "zSmn/C+X/cbh/GqqDMPetNfBb8iTmlwFh9Dsbc9qe9k=",
  },
  "Move all transaction memos to blank payee field": {
    val: "Flyt alle transaktionsnoter til tomt modtagerfelt",
    translated: 'auto',
    h: "Ibe3mbvnAzB2IdenvVSIAQdz1//j2Hd5vMpVIn+CH+8=",
  },
  "NO": {
    val: "nej",
    translated: 'auto',
    h: "hxXybQ1uFw+QDmCTj+3XDrm4sicWa7ZqmazhYaf5Nr8=",
  },
  "Name": {
    /* Remote device name */
    /* Label for sharing avenue name */
    val: "Navn",
    translated: 'auto',
    h: "bMXfNfAzjiMOnmM+rZmR8I9iyrRaMmSXja7cZ0eGcwU=",
  },
  "Natural gas/propane/oil": {
    val: "Naturgas/propan/olie",
    translated: 'auto',
    h: "CMjkKDPUYAAymOaPiz0PkXS6Ec3BTRWuNZJQ34kHA5s=",
  },
  "Need ideas for getting started?": {
    val: "Har du idéer til at komme i gang?",
    translated: 'auto',
    h: "JLW3ar4riykgYXyTGeMCNqL+wes0evHH6RERa+qXPaw=",
  },
  "Needs": {
    val: "Behov",
    translated: 'auto',
    h: "RbGrwaVYaT8OdEbNo5YBRWxoGZNYzZKjiDz7JrZVuuc=",
  },
  "Negate": {
    /* Verb meaning to make a number have the opposite sign */
    /* Verb meaning to make a number have the opposite sign */
    val: "Negere",
    translated: 'auto',
    h: "dZDdZz59qbx8gpMDeqIXTcDabOUtC1qWeUHncjptLo0=",
  },
  "Negative": {
    /* Label for choosing which value wihtin a CSV file represents negative */
    val: "Negativ",
    translated: 'auto',
    h: "uu+tZJYytTWkRjWGnhq7P28TYmWJ58RmQcbAv4QEakg=",
  },
  "Net": {
    val: "Netværk",
    translated: 'auto',
    h: "QITdwYnhK1fVfALCDc6jQhY2jLIUBpPp0/bSHOX6p9M=",
  },
  "Net Transfers": {
    val: "Netto overførsler",
    translated: 'auto',
    h: "4FYbJ2rCxhrWW9XBurKbS2mOSTwlxIXH/jCv5FDofeM=",
  },
  "Net Wealth": {
    val: "Nettoformue",
    translated: 'auto',
    h: "XKjeMQyciPmv55LHmQ9l0ulp6PwrF1QA1lN2Pua1Kk8=",
  },
  "Net change": {
    val: "Netto ændring",
    translated: 'auto',
    h: "1giQvPYkVc99a5Ne06RbukR0UJUQY2ba1gRrQHE31bA=",
  },
  "New Bucket": {
    val: " Ny Bøtte",
    translated: 'auto',
    h: "FchHrB6weykpHiqRVxc5QKb6BEdhH4DXrc+t6RNcF8M=",
  },
  "New Budget...": {
    val: " Ny Budget...",
    translated: 'auto',
    h: "daxIu+dqn7pfUDeB26rLQnPnAz2v5opSTHbAyBovaoI=",
  },
  "New Group": {
    val: " Ny Gruppe",
    translated: 'auto',
    h: "1dmXA/VlW+tjhojOGcypAy70L2wupHf9EdVjUByvpmA=",
  },
  "New account": {
    val: " Ny konto",
    translated: 'auto',
    h: "MtAiANg7ugdeUiGmiGklfBPG4T1igh1iChKeC0Mdxnc=",
  },
  "New avenue": {
    val: " Ny avenue",
    translated: 'auto',
    h: "EyqJb2lqkOre5EVjsnQYGA3tj0tYdB/UHeT1HQmp6g4=",
  },
  "New bucket": {
    val: " Ny spand",
    translated: 'auto',
    h: "aIKjDQtVbUMjIHU/6fccfiWBUIwUBnAofdzRJTCuytI=",
  },
  "New car": {
    val: " Ny bil",
    translated: 'auto',
    h: "Bp27l6cn2XdsJhTwsG7CqndX5v6581sQjpY4tMVeh88=",
  },
  "New computer": {
    val: " Ny computer",
    translated: 'auto',
    h: "zrx1OP3GJYjfIIZU0Sa31Mm3aQjGco6OnX25VqxnLlY=",
  },
  "New phone": {
    val: " Ny telefon",
    translated: 'auto',
    h: "v6DgXaDFo1Yjq7Cyz8tC29KXNgr704sFNCnXIedKsHw=",
  },
  "New roof": {
    val: " Ny tag",
    translated: 'auto',
    h: "AzV1g+0ivzcHHsk+jxoIrHthrDJ7wuVUOfurDtwV3j8=",
  },
  "New transaction": {
    val: " Ny transaktion",
    translated: 'auto',
    h: "1VsMSv2xvSjfHSqSZPw0gw1fD9E+Jvyr+2JVT/4bt64=",
  },
  "New value": {
    val: " Ny værdi",
    translated: 'auto',
    h: "IYMui0S7sNqh1DSN12/iCzLNTNeExrjoZ96g5EkvRgc=",
  },
  "No": {
    val: "Nej",
    translated: 'auto',
    h: "ssvE4uVUWmxD9vjMjw5HZnc/psg9I4B2MTtvoeNJyvY=",
  },
  "No conflicts": {
    val: "Ingen konflikter",
    translated: 'auto',
    h: "UlN5g4bplbpYSjOMLbuCBZ5ICB8dMKhKiRial9fMUF8=",
  },
  "No name": {
    val: "Ingen navn",
    translated: 'auto',
    h: "Z85JCnN1GdDw+yMwZqwW8aeKgQkvCHCkVIkIjZt7G00=",
  },
  "No, don't connect": {
    val: "Nej, forbind ikke",
    translated: 'auto',
    h: "MaiZRnZgYzKFsvyy1L/fnIA4McuhD8MAo4t+Rw216oE=",
  },
  "Normal": {
    val: "normal",
    translated: 'auto',
    h: "hjYDsfwaNZVxJ5eupqHy97JfTq/YAPm+bD+Zx0zrGuU=",
  },
  "Not Transfer": {
    val: "Ikke Overførsel",
    translated: 'auto',
    h: "GJsf5+RmvoXTk3dewQIb90+6xb+mujI/mpSM8cmgUEI=",
  },
  "Not running": {
    val: "Ikke kører",
    translated: 'auto',
    h: "PC00/YYL+rTs9SryRz4ennpjhF/LuzL/1aMY6Hiajmc=",
  },
  "Not yet cleared": {
    /* Tooltip text indicating that a transaction has not yet cleared. */
    val: "Ikke endnu afregnet",
    translated: 'auto',
    h: "Hf/KSsxHfxvXx0udkqgCw/QkkE8Vi5ex9pdYnX6qzEU=",
  },
  "Note": {
    val: "Notat",
    translated: 'auto',
    h: "omcHOlFDF1aMLf9t2/tJ9R1dYEFSQC9IiPuXLXuFwEk=",
  },
  "Nothing found matching:": {
    val: "Intet fundet der matcher:",
    translated: 'auto',
    h: "NF10b/Nmjj8holFGK7KIiaJhSb8bsL9Zt/Fa8fFy4gk=",
  },
  "Number format": {
    /* Label for budget number formatting preference */
    val: "Talformat",
    translated: 'auto',
    h: "RxooctpubAJr5NcKn57a5kjGBEdlPT5b2h6PUFLqxxE=",
  },
  "OBJ.account_id": {
    /* Account label */
    /* Account label */
    val: "Konto",
    translated: 'auto',
    h: "ihCgI4A9UaFZ63kuiKXqFHoGsze2dYwzpgSVU0clMfQ=",
  },
  "OBJ.amount": {
    /* Transaction amount label */
    /* Transaction amount label */
    val: "Beløb",
    translated: 'auto',
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
    val: "Oprettet",
    translated: 'auto',
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
    translated: 'auto',
    h: "ge86Jcy26vcv5uPFI29MfLOxHh8ctACck6nRdrl9aM4=",
  },
  "OBJ.last_used": {
    /* Last used date label */
    /* Last used date label */
    val: "Sidst brugt",
    translated: 'auto',
    h: "G5a6Jdor9jRT/Wtcg9SfXQsvqL7VFvnVD2+gq7yT1Jg=",
  },
  "OBJ.memo": {
    /* Transaction memo label */
    /* Transaction memo label */
    val: "Notat",
    translated: 'auto',
    h: "9yClwoAwAV0+DXl8NnkkAnlUi+Ebp2soPwN5meYKgWY=",
  },
  "OBJ.notes": {
    /* Object note label */
    /* Object note label */
    /* Object note label */
    /* Object note label */
    /* Object note label */
    val: "Notat",
    translated: 'auto',
    h: "omcHOlFDF1aMLf9t2/tJ9R1dYEFSQC9IiPuXLXuFwEk=",
  },
  "OBJ.payee": {
    /* Transaction payee */
    val: "Modtager",
    translated: 'auto',
    h: "vEPcESYpxu8dkXCIJQFVpBeYbocJdS1ypbD50YW9B7Q=",
  },
  "OBJ.posted": {
    /* Transaction posted date label */
    /* Transaction posted date label */
    val: "Bogført",
    translated: 'auto',
    h: "h6jjM8ytGdEj+QfDnTVzEdq+0oLSE9zd+MArY7gtjzU=",
  },
  "OFF": {
    /* Label for toggle switch OFF */
    val: "FRA",
    translated: 'auto',
    h: "g0c9fS73Ra/6fEcgtA+AZ5QtmmCEO7dX81vP7YtzM4o=",
  },
  "OK": {
    val: "OK",
    translated: 'auto',
    h: "mMSSK7ZBxlx6MLe8r98jC5sAtmk2McVhRqslsnhu5KM=",
  },
  "ON": {
    /* Label for toggle switch ON */
    val: "på",
    translated: 'auto',
    h: "wZR/9OiLHV0XO5Mm9aURB4fbSWSyea2Z6CQce8Q14gU=",
  },
  "Off Budget Accounts": {
    val: "Konti uden for budgettet",
    translated: 'auto',
    h: "EQ0I5sn/xpO55GIvIhUF8/XeTi0g5sxvvyE7TiynJDQ=",
  },
  "Off budget": {
    val: "Uden for budget",
    translated: 'auto',
    h: "cw3ZD6kn6Mat0qZqOZP0Is9hg7xmOxrKqKCD8CIjmz4=",
  },
  "On": {
    val: "På",
    translated: 'auto',
    h: "nMAfqtecKNqqRD1YLNX1F32SXJy1exEgm1QvpnZLBQQ=",
  },
  "Open Anyway": {
    /* Label for button to indicate that a budget file should be opened even though it was made with a newer version of Buckets */
    val: "Åbn alligevel",
    translated: 'auto',
    h: "C3I8WidkzZOLAGX0ypckK7pR7+e/M/X/YVIV1GCTYms=",
  },
  "Open Buckets Budget": {
    val: "Åbn Spande Budget",
    translated: 'auto',
    h: "5odppwzoA5bC5nAM3F+GDOVrAq3NfjGxrE0ZFXseCDg=",
  },
  "Open Budget...": {
    val: "Åbn Budget...",
    translated: 'auto',
    h: "67FfAce57aSIe2ncVfWeIeiiRLQQ8uuEUdDyI6UHxHU=",
  },
  "Open Recent...": {
    val: "Åbn nyligt...",
    translated: 'auto',
    h: "Uf1w3VIwUvsmKvOkQtBwsGvbRzQ5gMbEq/iyNzv95cs=",
  },
  "Open Transaction File": {
    val: "Åbn Transaktionsfil",
    translated: 'auto',
    h: "8teUT2P/KToCDoMTqS88JNVtG9PTE/5PojtS1SGmokw=",
  },
  "Open Web YNAB Zip File": {
    val: "Åbn Web YNAB Zip-fil",
    translated: 'auto',
    h: "etHUkWVrpkdYsNeOHkK2wLKMkL4YYkEjNO4WwPdIPMY=",
  },
  "Open YNAB4 File": {
    val: "Åbn YNAB4-fil",
    translated: 'auto',
    h: "BrKgvN0SgW410a7e11V3gP+FgW67iTGIY+o/cKI1Ftk=",
  },
  "Opening balance": {
    val: "Åbningssaldo",
    translated: 'auto',
    h: "OEuQ3gAWrV+lPay2usXLKN3bNCH87PEsrcr+thNNbJY=",
  },
  "Optional message:": {
    val: "Valgfri besked:",
    translated: 'auto',
    h: "zVM8610w5Mn1yRIYOsmOY5ZxBd2KLIudsimw610auYU=",
  },
  "Or click to download the new version manually.": {
    val: "Eller klik for at downloade den nye version manuelt.",
    translated: 'auto',
    h: "J+hkW+8xOyf72R6IgkvGlwWYNzHN+/aWRtotPks3C5U=",
  },
  "Other devices have made the following files available. Choose where you would like to save them on this device.": {
    val: "Andre enheder har gjort følgende filer tilgængelige. Vælg, hvor du vil gemme dem på denne enhed.",
    translated: 'auto',
    h: "Fbk5s0n43m2f5wfmDIpYQniAcPes2dp0Opv/VxSZJGE=",
  },
  "Out": {
    val: "Ud",
    translated: 'auto',
    h: "v4Oj0CQx7cmHP4mcJsZX4xMTzMzeFS81XA9gU3qOFKU=",
  },
  "Overwrite budget from backup": {
    val: "Overskriv budget fra backup",
    translated: 'auto',
    h: "p47XTJ4eKHU3WYE+YwdBvSL80vnN/gn5Xf7C+/gs66U=",
  },
  "Pairing code": {
    val: "Parringskode",
    translated: 'auto',
    h: "vEvXjrpoLPbXr+M9YBSVz5TplRIOw8ghDETxlgdUp7k=",
  },
  "Password": {
    val: "Adgangskode",
    translated: 'auto',
    h: "nhByOwQBMFlIuzeSPsoMPTnOwa4wBUBDjDxArgBfXjE=",
  },
  "Password not yet set": {
    val: "Adgangskode ikke sat endnu",
    translated: 'auto',
    h: "8NXPDxaFV7KVroTg3YTaO/dWsepbJT/ASSZw9yGeD5g=",
  },
  "Password reset": {
    val: "Nulstil adgangskode",
    translated: 'auto',
    h: "dVWv+2lbwYUiQVBBqp1wHOfyMDlGJq8aqtvWV20t/Ns=",
  },
  "Passwords did not match": {
    val: "Adgangskoderne matchede ikke",
    translated: 'auto',
    h: "PyUeXNOVYhNDM/De1HIPLeiwy6d+x7bkZphOo5ZqR6Q=",
  },
  "Paste": {
    val: "Indsæt",
    translated: 'auto',
    h: "n2Hnio0AcQPZejqQ+hm35GthBg0zYDNoxd8RCFRUhu4=",
  },
  "Paste and Match Style": {
    val: "Indsæt og match stil",
    translated: 'auto',
    h: "w8hRIxBBNWtXNPcYtQ4t/mTHfPF66U/mJbVpOiIDgYE=",
  },
  "Paused": {
    val: "Pauseret",
    translated: 'auto',
    h: "sMAADusAjpKEUapa7bSzeAnEAbEGpH+NKBgGh068Ifw=",
  },
  "Payee": {
    val: "Modtager",
    translated: 'auto',
    h: "vEPcESYpxu8dkXCIJQFVpBeYbocJdS1ypbD50YW9B7Q=",
  },
  "Payees": {
    val: "Modtagere",
    translated: 'auto',
    h: "YjA+7FE+9F3uMVjqhQQyv29+TRFaEMDJfFGbbX1+9aI=",
  },
  "Pending merges": {
    val: "Afventende sammenlægninger",
    translated: 'auto',
    h: "7vaBvdca+0T8ZgfGLkLVyTGgsK9QgFVnFdWRmqi8cbw=",
  },
  "Pending...": {
    /* Status when a connection to another device is pending but not complete */
    val: "Afventer...",
    translated: 'auto',
    h: "EBff3fGHatt8ejJo8RfuFp62oI9ZKjguA+ZUW6tDU7I=",
  },
  "Permanently delete account and transactions": {
    val: "Slet konto og transaktioner permanent",
    translated: 'auto',
    h: "mSRS1xHHrwwVBuWBlj7RZIGTyGuUy4GwrwOFty5tZrU=",
  },
  "Personal Loan Payment": {
    val: "Personligt lån betaling",
    translated: 'auto',
    h: "cL5KAz7DWc3XTzI4eo3t1PaGUe16WM+dKBg2ykfpQ6A=",
  },
  "Phone": {
    val: "Telefon",
    translated: 'auto',
    h: "9WrpirmkhUIuWq47S+FrVpJP+prT4uInaMOfMHjxS8c=",
  },
  "Playing": {
    val: "Spiller",
    translated: 'auto',
    h: "69elN/r6NyshRWtcjLOKso9OmdOJhvg/ix+Xy/fE+Z0=",
  },
  "Please enter your Buckets License below.": {
    val: "Indtast din Buckets-licens nedenfor.",
    translated: 'auto',
    h: "xbsLH9dKhhcdpY6+CFD5E3/4IdnZZk49WmeisyuQ/oo=",
  },
  "Port": {
    val: "Havn",
    translated: 'auto',
    h: "u+5cy7Hv8eqnpUCJUVP2QmhGFpu7Zq4UquU/U7tcspI=",
  },
  "Possible Duplicates": {
    val: "Mulige Duplikater",
    translated: 'auto',
    h: "ofGzHt7c7jfCo867EwNvCl3vCUJPLeLhFiC5Fmgrgp4=",
  },
  "Posted": {
    val: "Postet",
    translated: 'auto',
    h: "h6jjM8ytGdEj+QfDnTVzEdq+0oLSE9zd+MArY7gtjzU=",
  },
  "Preferences...": {
    val: "Indstillinger...",
    translated: 'auto',
    h: "6iQxyJ1WC9/Z0f0saApfwL5hmhgN5YgJeikLAYqCGBI=",
  },
  "Preparation": {
    val: "Forberedelse",
    translated: 'auto',
    h: "hAU2jJdFn2hdOUvG6S3yousGGeHnblb2/CsaRHWvQwQ=",
  },
  "Preview": {
    /* Noun */
    val: "Forhåndsvisning",
    translated: 'auto',
    h: "ICJraNVGcHJ6dorVH3VtTMdwZV8dD6wjEdY0Jzm4qbA=",
  },
  "Print...": {
    val: "Udskriv...",
    translated: 'auto',
    h: "Zx0axQhFFBAeUJiZxUAcm9hrf0Dd7+kTskEK3MSkm1Q=",
  },
  "Prompt": {
    /* Title for prompt window */
    val: "Anmodning",
    translated: 'auto',
    h: "56HrS6R0zfyg5ruiVb/J04UP3T8O2V99V+mXHvVfEZ0=",
  },
  "Purchase": {
    /* Button label for purchasing a license */
    val: "Køb",
    translated: 'auto',
    h: "SfwhUMXO5ckJhwUkBjdC9n17k8zH4+hoAlFoUdOwE/g=",
  },
  "Purchase Full Version...": {
    val: "Køb fuld version...",
    translated: 'auto',
    h: "+6h2Y0QTHEVui0aUhwAlCsyJp/F+S0PYKMRlQysqjrk=",
  },
  "Purchase license": {
    /* Button that takes people to purchase a license */
    val: "Køb licens",
    translated: 'auto',
    h: "3LYaot06ClRiLOZ31fOKIxzRXO8X0w5qFIfav969me8=",
  },
  "Quit Buckets": {
    val: "Afslut Spande",
    translated: 'auto',
    h: "QILEHXgAk6vuNPV3rqkbn2QRZ8WKrPnAZnscp7n8WaM=",
  },
  "Rain": {
    val: "Regn",
    translated: 'auto',
    h: "fqeHyOaOYnCtGAcJlJbhAR37DG6YMrsasUNtiL6z8hc=",
  },
  "Rain left": {
    val: "Regn forlod",
    translated: 'auto',
    h: "+xrBpD9ex3fqQgh+YuNxsFxWyrbE8G1236f81k2whuY=",
  },
  "Recently used": {
    /* Label for list of recently used buckets files */
    val: "Nyligt brugt",
    translated: 'auto',
    h: "tJ5cBjszrV/JztG5V1FUrgo0bfVgXfK5KB495TvGsYs=",
  },
  "Record change as transaction": {
    val: "Registrer ændring som transaktion",
    translated: 'auto',
    h: "yK0UuSf6pOl+44YBzW+tFNPHt6YYpqe88f+wQCuaHcQ=",
  },
  "Recording": {
    val: "Optagelse",
    translated: 'auto',
    h: "s1hytW8ZlaU8eRtoTfV+4aCpW5biiyifheE3t0kouUo=",
  },
  "Recurring Expenses": {
    val: "Tilbagevendende Udgifter",
    translated: 'auto',
    h: "yDp5Agru+QzDSy583s3kjOdZbbe6X1WDfMeSNXsYlaY=",
  },
  "Redo": {
    val: "Gentag",
    translated: 'auto',
    h: "7buMF65dyGtKDY/ZW/Lkn7eUmdudCsdGV3KR2lYLLA0=",
  },
  "Regenerate": {
    val: "Regenerer",
    translated: 'auto',
    h: "u5QDOgMBGl3INOqya7C/iE0tXSBbYdhLgcM9mBSHQ6k=",
  },
  "Registered to": {
    /* Label for the name/email of the person this application is registered to */
    val: "Registreret til",
    translated: 'auto',
    h: "fDXs0ZL8cmmMNVzrdFyhb8+RwdyTtA2b9yOO1B0nTrA=",
  },
  "Relay client": {
    val: "Relæ klient",
    translated: 'auto',
    h: "mSWVLtN7G9ZyP/WXAVEiOcbZQJIK6YenAW9E0ZZS3B0=",
  },
  "Relay server": {
    val: "Relæ server",
    translated: 'auto',
    h: "+cMcGjAKTrxBcgm02bYOEYsUTqHNoQJayrxZ+3L3Nag=",
  },
  "Reload": {
    val: "Genindlæs",
    translated: 'auto',
    h: "hUVVd3tppLGqwgo2OeC3h334aTF0Y+/GHbuL/I1clYk=",
  },
  "Remote device": {
    val: "Fjern enhed",
    translated: 'auto',
    h: "kGM8ugCEJGdTGfBFNcwYe5BNeXY+Wh9J4nYpxeXj2ZY=",
  },
  "Remote devices": {
    val: "Fjernenheder",
    translated: 'auto',
    h: "Pnrxp4rS7bnapZb26P4HXC5hFardsCyTT6Idz/SFJuE=",
  },
  "Remote file": {
    /* Noun; label for budget filename */
    val: "Fjern fil",
    translated: 'auto',
    h: "56l/nivDa2uMpQGnE8MPPBt60GjEgxNG5Cr/fNrTlO8=",
  },
  "Remove Categorization": {
    val: "Fjern Kategorisering",
    translated: 'auto',
    h: "b5sIQMfXAnBAqHD2NJfIgIAxclRGe5LJ7NzzF6sOruQ=",
  },
  "Rent/Mortgage": {
    val: "Leje/Hypotek",
    translated: 'auto',
    h: "sCLO0xIawRUzVC3QV8aqowoCCfwYNvtXW848jCLfT10=",
  },
  "Reopen": {
    /* Label for button to reopen a close account */
    val: "Genåbn",
    translated: 'auto',
    h: "5497b4yxPFO2M524tL0qmmNk47Qv/aca/7n0zMEeX/o=",
  },
  "Reopen Account": {
    val: "Genåbn Konto",
    translated: 'auto',
    h: "KBv9ohpTpLSanhr/AFbKdJCA0VZ1iJ0THB53Hut00v4=",
  },
  "Report Bug": {
    val: "Rapporter Fejl",
    translated: 'auto',
    h: "RxuE9Dh0Dadda2PtjUPD0dQ7b8aQok84Ytvw31ABBRU=",
  },
  "Report Bug...": {
    val: "Rapporter fejl...",
    translated: 'auto',
    h: "i17nG0QruMiCn612ogDToWB1g4xqqei691Yeh/t8MIk=",
  },
  "Report Translation Error...": {
    val: "Rapporter oversættelsesfejl...",
    translated: 'auto',
    h: "/jSK7LcBLJ1FsOYb9ntsVYAxwAyGLLUZXlTL/zrC020=",
  },
  "Required deposit:": {
    val: "Påkrævet depositum:",
    translated: 'auto',
    h: "Q34JZduUI2Lx8xxjkeH/Md92nqWgEcbPFZjgf5m7tXA=",
  },
  "Reset Password": {
    val: "Nulstil adgangskode",
    translated: 'auto',
    h: "PHk0gZ6FwtHbvhVQhAv2NOv4tUth66ZawXknegPfOIU=",
  },
  "Reset bank macro password": {
    val: "Nulstil bank makro adgangskode",
    translated: 'auto',
    h: "aGiRaSU/j/Kke84s+8fSjfD+y1hVndJAUFpywUJVq50=",
  },
  "Restart Buckets": {
    val: "Genstart Spande",
    translated: 'auto',
    h: "TNcYWk7YxhZ0U9Q+mFMRedeWB36VsDXoYgBapDvZCgM=",
  },
  "Restart Buckets for changes to take effect.": {
    val: "Genstart Buckets for at ændringerne træder i kraft.",
    translated: 'auto',
    h: "WDqnfUftItQB8zteFdZrFOknNYODkXCwU89Lk/Hs/SQ=",
  },
  "Restore from backup": {
    val: "Gendan fra backup",
    translated: 'auto',
    h: "4/wBBIqPRkVkrgO1WQ28ED/bEOnF9yg7FMna28aBMC0=",
  },
  "Restored budget from backup": {
    val: "Gendannet budget fra backup",
    translated: 'auto',
    h: "ETnF9ML8onmHyfTrUsxJwyn/DQp3IFbSD1m6PNM9CAU=",
  },
  "Reverse": {
    /* Label for checkbox indicating that transactions should be imported in reverse order */
    val: "Omvendt",
    translated: 'auto',
    h: "asyh3SM4xzCuJwKJ77z/6mR7GortI9HKht5YBJYkHnk=",
  },
  "Run": {
    val: "Løb",
    translated: 'auto',
    h: "msfklVWTzDTqa2SaDeN2NULTRVjZPdgr6/gggE5vemI=",
  },
  "Running": {
    val: "Kører",
    translated: 'auto',
    h: "Fc5kaM2PdFj1JUHmSYpQFl5RnVw8wUq7J00zdnDXNBc=",
  },
  "Running...": {
    val: "Kører...",
    translated: 'auto',
    h: "a2doeW7lyGRq5yq2cOD55HCblS7Hfy72/2G0cp7fk9c=",
  },
  "SQL Query": {
    val: "SQL-forespørgsel",
    translated: 'auto',
    h: "SNOm941c8lDAaYjd9suzSEkHFjFRo8e683rumVLZhoA=",
  },
  "Save": {
    val: "Gem",
    translated: 'auto',
    h: "wduD0WXtkIpIb6B4R8AA7ph724u3/Gtv27uaky6rEAU=",
  },
  "Screenshots:": {
    val: "Skærmbilleder:",
    translated: 'auto',
    h: "Vl/m/PU/CoPSp/t+drAAfxlQ818VKjlWKN8fsB4/+V4=",
  },
  "Search": {
    val: "Søg",
    translated: 'auto',
    h: "vembE+Cp1aKCKR2j2LCJD29QyiQxfGPUcGI1I8l5/5Y=",
  },
  "Search categories": {
    val: "Søg kategorier",
    translated: 'auto',
    h: "IScCkXq3OcNUufpAsgrWXkdRVqBrowHYo2hdSPS+X7I=",
  },
  "Search...": {
    /* Menu label for search page */
    val: "Søg...",
    translated: 'auto',
    h: "TOtty3gn23+64CNUlKn+bNe2V0f4xfUBGLHQ/Pw8XKQ=",
  },
  "Search:": {
    val: "Søg:",
    translated: 'auto',
    h: "OHBHBOVnuMjmjWHZURDrna8FWv+geQYMQuobRo4tkq0=",
  },
  "Searching...": {
    val: "Søger...",
    translated: 'auto',
    h: "7gAp07Zv3EjrgHoWJ04wEdRefy/aQ0zT8Y2EgQrnbHo=",
  },
  "Select All": {
    val: "Vælg alle",
    translated: 'auto',
    h: "tLJuQPindRFUyvGGdMLJbBHcVpAODsfT5p2gDnpB/Oo=",
  },
  "Self debt": {
    val: "Selv gæld",
    translated: 'auto',
    h: "zRWPLHqBTGcGqHHBHWdXpN2eOUUhRhvCyeAccFlR9Z4=",
  },
  "Send Report": {
    val: "Send rapport",
    translated: 'auto',
    h: "aLgG0qubuw0p0tGIUYKjgxecVsL0e3AKvQ5+W2JZg18=",
  },
  "Services": {
    val: "Tjenester",
    translated: 'auto',
    h: "Y5+GuNZXfFSynDsHvAY8cr0RqU+moaHZNmOk2eQrsNs=",
  },
  "Set Mapping": {
    /* Undo/redo label for setting the mapping of a file import */
    val: "Sæt Kortlægning",
    translated: 'auto',
    h: "0VIJHYOJcEvpUbDh2MFyEtmMxHbY10WbgLG0YVeRSng=",
  },
  "Setting": {
    /* Noun: a single budget setting */
    val: "Indstilling",
    translated: 'auto',
    h: "VPMIV8ll2EYKjYDlgvDS3IbSSfjmE5VmCEGwFTHn/ys=",
  },
  "Settings": {
    val: "Indstillinger",
    translated: 'auto',
    h: "g5CfgkRu6cPoKgSs58kE8baksjDRuXC1WTLWKVn75z0=",
  },
  "Share with": {
    /* Label for remote devices a budget is shared with */
    val: "Del med",
    translated: 'auto',
    h: "U9hHc0V4Fpw0S1hjtdNc0UEGCP7X6n6JmCeoSW/LgVo=",
  },
  "Shared folder": {
    val: "Delt mappe",
    translated: 'auto',
    h: "oeX6u9PQi6wT6MDH6F+w/A90h0XaexWgp2eca3mEfbE=",
  },
  "Sharing": {
    /* Label for sharing preferences */
    val: "Deling",
    translated: 'auto',
    h: "+wdr1d9w83UkBcXqGDOkGlmDhl24ktIp0it2O14f4kE=",
  },
  "Sharing key": {
    val: "Delingsnøgle",
    translated: 'auto',
    h: "T90VMQdBq1lWvcHGfsIRWyHfGz8aM9ZB2cWLO1VoH2Q=",
  },
  "Show All": {
    val: "Vis alle",
    translated: 'auto',
    h: "Kng6HqlojyhuqEK6kaB3KPtAs1w0LcpFWkJYrscali0=",
  },
  "Show Budget File...": {
    /* Show the current budget file in Finder/Explorer */
    val: "Vis budgetfil...",
    translated: 'auto',
    h: "iMBwVJg17i7WagCWW3Att0OrtczZYyVqAM7PDdo5sXk=",
  },
  "Show Log Files...": {
    val: "Vis logfiler...",
    translated: 'auto',
    h: "In00T9z1A4xO6nLu8zAU5s3UzH3+IcK4XjRvrT9CGMs=",
  },
  "Show debug info": {
    val: "Vis fejlfinding info",
    translated: 'auto',
    h: "TXWI2u7pYf+GGAZ9ed2OwHkF93XqFdRCj1q7sE4PsnQ=",
  },
  "Show folder": {
    /* Button to open a folder */
    val: "Vis mappe",
    translated: 'auto',
    h: "479YuRtJUsvCCqzaEjK+WyPmy20v+YQPfY3Xo/eIzKM=",
  },
  "Show full changelog": {
    val: "Vis fuld ændringslog",
    translated: 'auto',
    h: "nu/b3QeVa2N7QmrPffBdK2zSVYIp81gVGbFjcYrlL5A=",
  },
  "Sign": {
    /* Noun referring to the sign of a number (positive or negative) */
    val: "Fortegn",
    translated: 'auto',
    h: "uw6BT7o9vlsgV2TpwBFx/MfF1npvA+6ru4lXXcSzoCM=",
  },
  "Sign in to the YNAB website, click My Budget then Export Budget.": {
    val: "Log ind på YNAB-websitet, klik på Mit Budget derefter Eksporter Budget.",
    translated: 'auto',
    h: "etFjjZd2+flhi9J3CbiPL8eb4Gc3jHFAKkMPuQZmxlA=",
  },
  "SimpleFIN Connections": {
    val: "SimpleFIN-forbindelser",
    translated: 'auto',
    h: "yzXdwvSSNy+FUFHW5+bAqRMq+j6krsNUFb/uFreKPNY=",
  },
  "SimpleFIN connection": {
    val: "SimpleFIN forbindelse",
    translated: 'auto',
    h: "g+4foa5uuY9Yv3vI/gA6gaEoNUJi2k4oFouZlUWwv/U=",
  },
  "Since some buckets have negative balances, this payment balance may not be what you actually have available for a payment.": {
    val: "Da nogle baljer har negative saldi, kan denne betalingsbalance måske ikke være det, du faktisk har tilgængeligt til en betaling.",
    translated: 'auto',
    h: "DcT2jCu9H9VSH4esyPHz75dbhviMkM3N/TD1N6PtYyM=",
  },
  "Skip This Version": {
    val: "Spring over denne version",
    translated: 'auto',
    h: "YnC7GSI4QITirt1GGV/Tc1FvTbJYICkEeF3zj4u4eak=",
  },
  "Skip invalid": {
    /* Label for checkbox which controls skipping invalid transactions during import */
    val: "Spring over ugyldige",
    translated: 'auto',
    h: "sKPi3ongM5VPkq2aFjBN1FX9/N/KiThGWd54qaHNfi8=",
  },
  "Speech": {
    val: "Tale",
    translated: 'auto',
    h: "i4Qm95bH8zVEbjpkUi7jvQiLtDzGkW9z90XEkiglzHM=",
  },
  "Spending Money": {
    val: "Brug af penge",
    translated: 'auto',
    h: "7mLvCPVxhYqWXYW8EcSN4N6vyUtQqT4PnR0iC1ucTtY=",
  },
  "Start Merge": {
    val: "Start Flet",
    translated: 'auto',
    h: "48IhJ8jvgXzTH0cgI8MR9W3NiQFlvBbJA/j7mj6KFhY=",
  },
  "Start Over": {
    val: "Start forfra",
    translated: 'auto',
    h: "hlKNxy6ZDz4ny/qpQfkv6FwXDangtq2ECEo+ICgEbJs=",
  },
  "Start Speaking": {
    val: "Start at tale",
    translated: 'auto',
    h: "v8sFOpEAoczjEjGparKZylHWHoxHMVQriwuhJaec2rY=",
  },
  "Start with a template": {
    val: "Start med en skabelon",
    translated: 'auto',
    h: "HbSWD1rCMlssQIfvhdN+qwtdXT/k2Rq4+lTObtGpWbo=",
  },
  "Status": {
    /* Connection status of remote devices */
    /* Label for connection status of sharing avenues */
    val: "Status",
    translated: 'auto',
    h: "fu712YZJJBbNWIpP5QaYV+fcz5rcN4DkkaOGdL/X6hk=",
  },
  "Step took too long": {
    val: "Trin tog for lang tid",
    translated: 'auto',
    h: "Py3rsk0guEg0d8Ce9Lbfwzf1zP7E4Z8YPSOu165mOc0=",
  },
  "Stop Speaking": {
    val: "Stop med at tale",
    translated: 'auto',
    h: "Pme2/qME7bKdVrHTIEBQYt1Fu/SXRNGyy6sLBfKpqqk=",
  },
  "Stopped": {
    val: "Stoppet",
    translated: 'auto',
    h: "9KSqBDjMEVALs44MtvCW75xXb7Ta+lGl6bMoOlDV824=",
  },
  "Student Loan Payment": {
    val: "Studerendelåns betaling",
    translated: 'auto',
    h: "j83e9PkiJgq0J5iPOaku/mbjw9H3KtXBaDV4ntsQktk=",
  },
  "Success!": {
    val: "Succes!",
    translated: 'auto',
    h: "6NxF/uD6sOEPkEbPFOHdBKRxj0ZXVbmnPkRXNJDy0zs=",
  },
  "Suggested value": {
    val: "Foreslået værdi",
    translated: 'auto',
    h: "k6ScHeFo3C5+aB0s7M5rumKKBu3AJp93St0oUuF2GFw=",
  },
  "Swap NAME and MEMO": {
    /* Label for checkbox that will swap the value for NAME and MEMO when import OFX files */
    val: "Byt NAME og MEMO",
    translated: 'auto',
    h: "ayF7yBQJox0msQ75+rZt4xxanK31lYhwEoynkOsepjc=",
  },
  "Sync": {
    val: "Synk",
    translated: 'auto',
    h: "zJAmFTCwHue7APF8kCb39YCX8J17Tsy3mxyhpQQhge8=",
  },
  "Sync complete": {
    val: "Synkronisering fuldført",
    translated: 'auto',
    h: "e2VXpLTi1mhVSVqDkExwdM5j8PhfW0MHeOqBwabU4Zo=",
  },
  "Sync has not yet been set up.": {
    val: "Synkronisering er ikke blevet opsat endnu.",
    translated: 'auto',
    h: "B5XIfqqMdt0gMHz2zsZr9GTj9vSRAS5R2akgGce+fsg=",
  },
  "Synced balance": {
    val: "Synkroniseret balance",
    translated: 'auto',
    h: "yyCVeQRle/vbcZ1/QyVYtL+ZmyQ5WanHCYKZpJqFd6o=",
  },
  "Syncing...": {
    val: "Synkroniserer...",
    translated: 'auto',
    h: "kuwg7vpvp082IqBtRakekOVu7bqB4PYxhnFVsoBDt/g=",
  },
  "System default": {
    /* Option for Buckets language preference */
    val: "System standard",
    translated: 'auto',
    h: "A9haWZjRR5Su694Q278jjqi/xmRweA6I6et1Q9L3ahI=",
  },
  "Target date:": {
    val: "Måldato:",
    translated: 'auto',
    h: "InmNQoNHlJkDpjvEB+J1XPqDWRqnfNIUwTQ86iNiOGc=",
  },
  "Test Toast": {
    val: "Test Skål",
    translated: 'auto',
    h: "5SbiliirLaAKLdgRThX+cO2RwGuC87t3Z1O0xT2WsAE=",
  },
  "Theme": {
    /* Label for application theme setting */
    val: "Tema",
    translated: 'auto',
    h: "iIVgvkFsqSibVEM+h5dM+gyXv0J8Elgp99rvJsOFYqo=",
  },
  "There are unresolved conflicts": {
    val: "Der er uløste konflikter",
    translated: 'auto',
    h: "WGAgJ2b6hUZ5DKTAJ6APu2LzgV5Fzwg0I80+N1TETdQ=",
  },
  "There has been an error.": {
    val: "Der har været en fejl.",
    translated: 'auto',
    h: "viN5uLRSpgzhvoD9KO9g1cr7ihLQ0Men9LiUpy9RcwE=",
  },
  "There was an error.  Maybe try again?": {
    val: "Der opstod en fejl. Prøv igen?",
    translated: 'auto',
    h: "l+W2GSV3tl8Gx19ZW+wOCziBj5/UeMCVO8tvh4P7LEo=",
  },
  "These devices can talk to each other": {
    val: "Disse enheder kan kommunikere med hinanden",
    translated: 'auto',
    h: "eNTVUVG4RQJPWolU7i1WUrn9Xi4zBpLJ4eQHjG71Kio=",
  },
  "This budget was upgraded for a newer version of Buckets.  Using it with this older version may not work.": {
    val: "Dette budget blev opgraderet til en nyere version af Buckets.  At bruge det med denne ældre version kan ikke virke.",
    translated: 'auto',
    h: "SJjFg0juSV/ZrJcAQJDMXveLnxwSQT4nfJiyMQFkbMw=",
  },
  "This device's name": {
    val: "Denne enheds navn",
    translated: 'auto',
    h: "eTNSTczX466LRmFxprC4rfZhDomB7x4xWYltPshnAB4=",
  },
  "This is a special group for all the buckets without a group.": {
    val: "Dette er en speciel gruppe for alle bøtterne uden en gruppe.",
    translated: 'auto',
    h: "QP5fEqFwlvHWJyjzrIWUJFlMvhFDxxSsl1vnej/p30I=",
  },
  "This tool will delete data to make it easy to start over with your budget.": {
    val: "Dette værktøj vil slette data for at gøre det let at starte forfra med dit budget.",
    translated: 'auto',
    h: "+40oxGj2jDLNe4ggunYHsgL/9aQz0pw5IeRM5VlYIIU=",
  },
  "This will break all existing bank macros": {
    val: "Dette vil bryde alle eksisterende bank-makroer",
    translated: 'auto',
    h: "VStGFY84kcqELxtAwamD6vI9ELaA4dZnOs2Ubvwnao8=",
  },
  "Thousands separator": {
    val: "Tusindseparatør",
    translated: 'auto',
    h: "lYK3D4dxDxbFalJtMHHtc/++mciDmIUg9A3tgDiUkzs=",
  },
  "To": {
    val: "Til",
    translated: 'auto',
    h: "syFKIORaeu0FezL85oAbo76XXa8k7bxITMbNowi8ba0=",
  },
  "To use Buckets, you must accept the End User License Agreement (EULA).": {
    val: "For at bruge Buckets, skal du acceptere Slutbrugerlicensaftalen (EULA).",
    translated: 'auto',
    h: "0six0i9oNNM/hjCYct1UTEqdgMn0uoBbaBq0cvnoZLM=",
  },
  "Toggle Developer Tools": {
    val: "Skift Udviklerværktøjer",
    translated: 'auto',
    h: "IYSSUL9ezB58nRuajYVa+zH4ucrmXQOB92zA7sDlrJc=",
  },
  "Toggle Full Screen": {
    val: "Skift fuld skærm",
    translated: 'auto',
    h: "2ZRq+R5E0Cp4QI+y5jCefU1IOiYvNWLrN/iiJq6hGr8=",
  },
  "Tools": {
    val: "Værktøjer",
    translated: 'auto',
    h: "mPsch0seV0ZNaU+41My/wS+DkAGfYqzWpPlJpfT1sBs=",
  },
  "Total": {
    val: "Total",
    translated: 'auto',
    h: "u6dF4hac3zx/3TL4nED+x50jCos7B3IKIqm+WqkIZXk=",
  },
  "Total amount your buckets want each month.": {
    val: "Samlet beløb dine bøtter ønsker hver måned.",
    translated: 'auto',
    h: "PdavPuX8D9m/BkLbr04OKhddGvl8+l0iDiqd+5K9sMc=",
  },
  "Transaction": {
    val: "Transaktion",
    translated: 'auto',
    h: "G0gRZS6Zq1VoQqtY+L8fY3ogdqSl/OAoTurOZ4L480Q=",
  },
  "Transaction ID": {
    val: "Transaktions-ID",
    translated: 'auto',
    h: "5DaWwSVPo8La/gW0/QWRXAHx08KcbBLOe7BrRuMnKMQ=",
  },
  "Transaction Type": {
    val: "Transaktionstype",
    translated: 'auto',
    h: "5OtdraZlT3YBh5NcgKxXigGdmDWur3wzuyeNvRd4mIM=",
  },
  "Transaction(s) deleted": {
    val: "Transaktion(er) slettet",
    translated: 'auto',
    h: "8umpuy0JiIWHWgMJdIJu2si38T6QhOVeI70IUVV/i3U=",
  },
  "Transactions": {
    val: "Transaktioner",
    translated: 'auto',
    h: "4+yGUer/b71cfxTdeUa5QbonqN9ezC8Eii7KO22Ety0=",
  },
  "Transactions to review": {
    val: "Transaktioner til gennemsyn",
    translated: 'auto',
    h: "fcauVC7MkwNPXVHbfBl427k53jL2beDDx711UkVI5tg=",
  },
  "Transfer": {
    val: "Overførsel",
    translated: 'auto',
    h: "B5GGqjnE8KOjYJjhsFV7zs5TGmGmVPqjihzMVxHJ3sI=",
  },
  "Transferred": {
    val: "Overført",
    translated: 'auto',
    h: "dMUnHOi8B6xpQztmwKOsEkjhvkEKLHaefSUJ0oR9ZEs=",
  },
  "Trial Version": {
    val: "Prøveversion",
    translated: 'auto',
    h: "GtZIXrHILA84HlpKlxi3BErHwR7WIYkQ/e5BE0Fiaxg=",
  },
  "Trial version": {
    val: "Prøveversion",
    translated: 'auto',
    h: "/B8oxaBijS+cHJQBdPRkq7IfcHyPStMT5uGKWUeZQuQ=",
  },
  "Tuition": {
    val: "Undervisning",
    translated: 'auto',
    h: "UpDg7j7/mXJnP7WdFJe4hMlLw2XtH7X3Cj669aLHzec=",
  },
  "Type a date format...": {
    val: "Indtast et datoformat...",
    translated: 'auto',
    h: "oOXoncSSYGIZM5rpYEudSx4xWO7x8hRHdt89DNfPv84=",
  },
  "Un-ignore Account": {
    /* Undo/Redo label for no longer ignoring an account from import */
    val: "Un-ignore Account",
    translated: 'auto',
    h: "DVgAPa6nwJLDg7emkZZ+j85bGwcKjEzqlkZlPHkypU8=",
  },
  "Un-kick": {
    /* Button label for unarchiving a bucket */
    val: "Afarkiver",
    translated: 'auto',
    h: "P5Z1ij4jmS06jNOQiHymi+/D+uYJktoalTdw+AHGukM=",
  },
  "Un-kick Bucket": {
    /* Name of action for undo/redo labels (i.e. Control-Z will "Undo Un-kick Bucket") Consider this the opposite of "Archive Bucket" */
    /* Name of action.  Consider this "Unarchive Bucket" */
    val: "Afarkiver Bøtte",
    translated: 'auto',
    h: "7WOQPepkeOH+dwwSbEjomy0amoqY5JtvtlyCSG02c1Q=",
  },
  "Unable to claim access token": {
    val: "Kan ikke hente adgangstoken",
    translated: 'auto',
    h: "Gao95RuT9JvhdAoZ5winV9os7iMaPIex3Vq9CMSjhzs=",
  },
  "Unable to open the file:": {
    val: "Kan ikke åbne filen:",
    translated: 'auto',
    h: "MxbgnQR4Cyi549ltzzIDDAI1qRGqoeRm0zOApQMS2DY=",
  },
  "Unattended merge not possible": {
    val: "Unattended merge not possible",
    translated: 'auto',
    h: "gj2u4cxLi3C3cxHWoasHcAgEnMNADU6mwZx4EGEZgLU=",
  },
  "Unavailable": {
    val: "Utilgængelig",
    translated: 'auto',
    h: "tML1A7GUQ8Z/SUbUV6zcxmjjrptonGvYtuU1Y2y/gvE=",
  },
  "Uncategorized": {
    val: "Ukategoriseret",
    translated: 'auto',
    h: "BjQg1sHfdAVLyMzfMfC6sQnK4vIGQ6vrl6OsGg8Oqkk=",
  },
  "Uncaught Error": {
    /* Title for error reporting dialog */
    val: "Unfanget Fejl",
    translated: 'auto',
    h: "8shOzic2CgRpaIcNhv/44tsVBDgSItWp3ZbdihMYp9E=",
  },
  "Uncleared": {
    /* Label for sum of uncleared transaction amounts */
    val: "Uklarerede",
    translated: 'auto',
    h: "1GBgqlG+RCS8dFTG2z15jLFFd4PCVVXDefXwBRq0oTs=",
  },
  "Undo": {
    val: "Fortryd",
    translated: 'auto',
    h: "Z1A2vTdYwfdLsWS25iSchnHOHa1VfbQg7u8MDGHk4yo=",
  },
  "Unexpected sync error": {
    val: "Uventet synkroniseringsfejl",
    translated: 'auto',
    h: "78kYsQMTfGS8BNaZVuqYaRojJlTpcmN6CF9PQKKO0ME=",
  },
  "Unknown account": {
    val: "Ukendt konto",
    translated: 'auto',
    h: "fe+Wdg63x9QKcxCX3/yM3LDBqelVYK1tng28BgQRovw=",
  },
  "Unknown account deleted": {
    val: "Ukendt konto slettet",
    translated: 'auto',
    h: "2db3S+9bmJWgpIWRAqHm8irdPTY5ZMEsdHeADQ7HdeQ=",
  },
  "Unknown category": {
    val: "Ukendt kategori",
    translated: 'auto',
    h: "bK4teMnFOuofJ4sX76ozAla50yDaLbvb5pCj+New5f4=",
  },
  "Unlinked Accounts": {
    val: "Ulinkede Konti",
    translated: 'auto',
    h: "BPAjsiEkATiwSf9f6kde3yZwSmmyiPDLiZ7Rr+3Zv/A=",
  },
  "Unregistered Version": {
    val: "Uregistreret Version",
    translated: 'auto',
    h: "x9ekMClqI57T6jREU5VJurBCzlD+hBNJ8pHNQ0zMB1U=",
  },
  "Update": {
    val: "Opdater",
    translated: 'auto',
    h: "cQYLRi89RKalUb+A5uCwnJtCV0x+6+otody2dq/mqxk=",
  },
  "Update Account Balance": {
    val: "Opdater Konto Saldo",
    translated: 'auto',
    h: "iwKjdHzqHPwoupXiUwrVL1tX4QfO//taXOPXFVtWRVE=",
  },
  "Update Account Name": {
    val: "Opdater kontonavn",
    translated: 'auto',
    h: "xcyLhnHNOTDgJsYGhaelbAmXYam4HWMfD5mQiTiZJ50=",
  },
  "Update Bucket Name": {
    val: "Opdater Bucket Navn",
    translated: 'auto',
    h: "Oa+1EZtc4RTtPYyk5LflMMlQq/esZ3qvTgbSLiKIl4E=",
  },
  "Update Bucket Type": {
    val: "Opdater Bucket Type",
    translated: 'auto',
    h: "wt5F9WSIpGlUsGaPnhSJlLYk0qraymNHDw0bYzbHlIE=",
  },
  "Update Color": {
    val: "Opdater Farve",
    translated: 'auto',
    h: "6QBa9YrDFsWCiiS/PMj7r+cTmIgMmmqjTnv9x4l90ic=",
  },
  "Update Currency Symbol": {
    val: "Opdater valutasymbol,"
    translated: 'auto',
    h: "5ni7IpG/zzlc/uAhhkduQ99K/5B9ui5INpaxZw7QTrs=",
  },
  "Update Goal": {
    val: "Opdater Mål",
    translated: 'auto',
    h: "S3dt9ahT1yTXTCP2uHqiTMkyPUmAvAHvsCeGNa+NL1E=",
  },
  "Update Group Name": {
    val: "Opdater gruppenavn",
    translated: 'auto',
    h: "/pmHZLX1mkRHtus8eVyojidhAUe6BocaSkf5dGoIrSM=",
  },
  "Update Macro Name": {
    val: "Opdater Makro Navn",
    translated: 'auto',
    h: "61srDLhVLo6bOo+SbnJ0rMbhNhXXRxEjgP3/nFafMKI=",
  },
  "Update Monthly Deposit": {
    val: "Opdater Månedlig Indbetaling",
    translated: 'auto',
    h: "rFQ5lKjSNpQyyptg2Y+a4LQ6jwa1xWjKarMapXiD1/8=",
  },
  "Update Name": {
    val: "Opdater Navn",
    translated: 'auto',
    h: "fTqm8NUcvzaYHnGFDmVhLePEd/TFNPhUDzSYIIerjNc=",
  },
  "Update Note": {
    val: "Opdater Notat",
    translated: 'auto',
    h: "h4A+jnQW9OrS0wVVoQ9OEJ5I6/h4p7IWrKvN+uSXe4I=",
  },
  "Update Number Format": {
    val: "Opdater Talformat",
    translated: 'auto',
    h: "98Qu07eWAHjS80FuHQajrVMMtd0jq5Zq8rRKuDQEZEU=",
  },
  "Update Payee": {
    val: "Opdater Modtager",
    translated: 'auto',
    h: "28JOAeb8QLlBYMLiOO8RGW8SHBJ14Gdp/t/7rprHodk=",
  },
  "Update Payees": {
    val: "Opdater Modtagere",
    translated: 'auto',
    h: "hJhDyJDaai8R9NXK8J3AOdqOOhdqmkZeR8ziJyzuzVU=",
  },
  "Update Target Date": {
    val: "Opdater Måldato",
    translated: 'auto',
    h: "SEac1rQopyHALPSWU85qYV3GE0x9i2OGDB+JYnVID8A=",
  },
  "Update Transaction": {
    val: "Opdater Transaktion",
    translated: 'auto',
    h: "aMF18BJOMjuVOInpbGKf/3jyTE1qYzq4oHzb3sBVcWw=",
  },
  "Update account balance": {
    val: "Opdater kontosaldo",
    translated: 'auto',
    h: "GQWvUamqQOyoaXm16AiGtHme6kW171erNK5pa4vgDIE=",
  },
  "Update balance": {
    val: "Opdater saldo",
    translated: 'auto',
    h: "XSg0Q5Q7j+G+HNjn3YJOakbNLSjTNcem3BFbw6fTDI8=",
  },
  "Update complete": {
    val: "Opdatering fuldført",
    translated: 'auto',
    h: "5JP6upRWYG0d3p+rGNvUMcl08i6wvxKs0zhYG5NvUj4=",
  },
  "Update downloaded.": {
    val: "Opdatering downloadet.",
    translated: 'auto',
    h: "DO2vE3TgW3xjiD8ZaOWeScL3qWCyiFPK8GENQ9NosYw=",
  },
  "Update failed": {
    val: "Opdatering mislykkedes",
    translated: 'auto',
    h: "MU8WQkSmMfpUADhweg+WSBrhrTcWK23Ow4QqwxyoAfo=",
  },
  "Update opening balance": {
    val: "Opdater åbningssaldo,"
    translated: 'auto',
    h: "Z0BMQUVy9IHw3rAN6dd3xnGsgHNFC+l4FxxGcNc8QJ8=",
  },
  "Updated": {
    val: "Opdateret",
    translated: 'auto',
    h: "zN8HYtieJpXIt5Bdb1SWdC1+tonH7H3QHVbuUzU4rgY=",
  },
  "Updates": {
    /* Label for section about Buckets application updates */
    val: "Opdateringer",
    translated: 'auto',
    h: "lAv/Y2isYNmD0UIkVd8zZO2kJ9FjxPjiL+Bnajfzxtg=",
  },
  "Updating...": {
    val: "Opdaterer...",
    translated: 'auto',
    h: "gAFg4pzFnJ37C/ReDfO2llXdsckG7onQiLq6WjhBWxk=",
  },
  "Used in future": {
    val: "Brugt i fremtiden",
    translated: 'auto',
    h: "O0zGsqv23d44/pWJqCSt+qkDtG/nBrBI2W0aRA9XoDw=",
  },
  "Username": {
    val: "Brugernavn",
    translated: 'auto',
    h: "UAZmOHuQGOos8K4CBGseGzsnoOEV6JPA/VJYYtHu0k8=",
  },
  "Username/Password": {
    val: "Brugernavn/Adgangskode",
    translated: 'auto',
    h: "2pr0zsSsuFii6F31xH62795E7bFmbKwAYd/oe2E1kBc=",
  },
  "Using this tool can ruin your budget file.  Make a copy of your budget if you're worried.": {
    val: "At bruge dette værktøj kan ødelægge din budgetfil. Lav en kopi af din budget, hvis du er bekymret.",
    translated: 'auto',
    h: "TCvA81ztNxeLhpVdiYrF4RLEGEp5FO3YWCgfOyjnjFc=",
  },
  "Vacation ": {
    val: "Ferie ",
    translated: 'auto',
    h: "Buf8KjuQKnfaA4c2qPDVm8FQgYWJUfiCYYkPAnsIIBw=",
  },
  "View": {
    val: "Vis",
    translated: 'auto',
    h: "paIseOhKCT2+NaUBPKk98vQB/lphf7jIGeERV77doDg=",
  },
  "View EULA": {
    val: "Vis EULA",
    translated: 'auto',
    h: "6symBeYWMFH1ySjpbWX+XjygI3Cq3j/ywz3b0tPtIHE=",
  },
  "Waiting to retry": {
    val: "Venter på at forsøge igen",
    translated: 'auto',
    h: "F88F80XANbwofOEoXYAjMA09+UIhKPUY6qNK7dkEQmo=",
  },
  "Want": {
    val: "Vil",
    translated: 'auto',
    h: "lV/eDqkplJ/XKjHyCSE47yOWOl3t3Igj9S559wDKMZI=",
  },
  "Wants": {
    val: "Ønsker",
    translated: 'auto',
    h: "AOckwUko9CT2K8gxtu/GHFhjivPPgTDgQSjCNSujUV4=",
  },
  "Warning: Doing this will use rain you don't have and could steal rain from future months (if available).": {
    val: "Advarsel: At gøre dette vil bruge regn, du ikke har, og kunne stjæle regn fra fremtidige måneder (hvis tilgængelig).",
    translated: 'auto',
    h: "YR+S0SMnFz4+K5vpXrMzMfSaBE5mHBrhQTalzgI0/7U=",
  },
  "Water": {
    val: "Vand",
    translated: 'auto',
    h: "BOL+IhrDsm6ooEqGpFPieQoyXrWpV6LvKh0DvkAJ2bw=",
  },
  "Web YNAB Export": {
    /* Label for YNAB export file type */
    val: "Web YNAB Eksport",
    translated: 'auto',
    h: "tW4h/MIfunRbmUN+oxQ8Sa2pKJQgML5XIcQkPzclpEM=",
  },
  "When \"On\" this macro will be run during a normal sync.": {
    val: "Når "På" vil denne makro køre under en normal synkronisering.",
    translated: 'auto',
    h: "HnJ7qVSPXxIg3/lygw1Ln/VvBMBs8roJwXlCpP2KnMw=",
  },
  "Window": {
    val: "Vindue",
    translated: 'auto',
    h: "qjw17TPhgeX5msjicdTljyCEeBLFbQvz/oyOunMLJnQ=",
  },
  "YES": {
    val: "ja",
    translated: 'auto',
    h: "z2FPqj4x8eJnnL7/njedU5qqPbxgrFqjpsTeqGqJH9U=",
  },
  "Year to Year": {
    val: "År til År",
    translated: 'auto',
    h: "YBGCdB/QACmMM/QS2qMrGlC8qtfWz9bhue7sgDaIRHg=",
  },
  "Year's Supply": {
    val: "Et års forsyning",
    translated: 'auto',
    h: "E5VfnhjiYed/e2Ezg+RdChSIz6cjwl9oyRzpO1rjl0I=",
  },
  "Yearly": {
    val: "Årligt",
    translated: 'auto',
    h: "LjMZRIZX3jdNUpbBBgqpPR9Az6c4sBWYUwd2WDVb9Rw=",
  },
  "Years": {
    val: "År",
    translated: 'auto',
    h: "9bCZk+mcGxconx1JMhBZKdnRo4id89h4UiucsvMRAng=",
  },
  "Yes": {
    val: "Ja",
    translated: 'auto',
    h: "GE/aXJgLnZyzdfQqUogXxiNfvU95d1qAGPrlr8vfKmM=",
  },
  "Yes, connect": {
    val: "Ja, forbind",
    translated: 'auto',
    h: "nQoLGB1tRewici5GtXIrzivf6Eqzjlms2YBdnfRbFFc=",
  },
  "You are running the latest version!": {
    val: "Du kører den nyeste version!",
    translated: 'auto',
    h: "hShy87A6GAhRqqtK+8VdVeGD70zA64iiV0/SwectQ0I=",
  },
  "You can do math in all number inputs, not just here in the calculator.": {
    val: "Du kan foretage beregninger i alle nummerindgange, ikke kun her i kalkulatoren.",
    translated: 'auto',
    h: "dn2W/ktTrcwSzYNSq6IQL7Sl2k8lxZQRsFehzG9Mf7g=",
  },
  "You don't have any recurring expense buckets yet.": {
    val: "Du har ikke nogen tilbagevendende udgiftskategorier endnu.",
    translated: 'auto',
    h: "nq2IDCqs8m0MQJ5lO2TU1cnlj9nP1vwIMWMqi0WGOjk=",
  },
  "You have no closed accounts.": {
    val: "Du har ingen lukkede konti.",
    translated: 'auto',
    h: "8BZG+UdW1Rrd/+2zFNv7SskiNpD6DtlNa8LwQulqX5s=",
  },
  "You haven't kicked the bucket yet...": {
    val: "Du har ikke sparket bøtten endnu...",
    translated: 'auto',
    h: "mtaAsLJ7BgWZcbIkRmZ4ZPSSRGXj6vJ2H8+diLhIba4=",
  },
  "You must backup to a different file.": {
    val: "Du skal sikkerhedskopiere til en anden fil.",
    translated: 'auto',
    h: "LAt5pxdaPsRHDU6bS2Cu1aEDIQ2oZAMw46Pa7H6pc5o=",
  },
  "Your email address:": {
    val: "Din email-adresse:",
    translated: 'auto',
    h: "/ip+dZCEKXdLQFW5CAt/fB8OBf/rD+67pz8etOXlJXc=",
  },
  "Zoom": {
    val: "Forstørrelse",
    translated: 'auto',
    h: "Zjzswxbrkbj1TLPOYCtimoyh/aJlkF/mxeghbzdheSs=",
  },
  "Zoom In": {
    val: "Zoom ind",
    translated: 'auto',
    h: "p3yHl1qkGVfRDPsLKitBuZhRJIDaTy3fV/vbWqOzo24=",
  },
  "Zoom Out": {
    val: "Zoom ud",
    translated: 'auto',
    h: "hRo1uzcSNStVll7ef2xHOB6PqFh+q7Sg/VHiGcK4M8M=",
  },
  "account-in": {
    /* Label for amount put into an account */
    val: "Ind",
    translated: 'auto',
    h: "TcCPpYF7/U7vM5pPmpqvJipZt0WPk3A/vC7Ec8pfDvo=",
  },
  "account-net-amount": {
    /* Label for net value of amount in - amount out for an account */
    val: "Netto",
    translated: 'auto',
    h: "QITdwYnhK1fVfALCDc6jQhY2jLIUBpPp0/bSHOX6p9M=",
  },
  "account-out": {
    /* Label for amount taken out of an account */
    val: "Ud",
    translated: 'auto',
    h: "v4Oj0CQx7cmHP4mcJsZX4xMTzMzeFS81XA9gU3qOFKU=",
  },
  "account-type": {
    val: "Type",
    translated: 'auto',
    h: "xE96uLvSSFjRvRq5lfIcX1LGpnGQeyntOksJQ0X3CyE=",
  },
  "account.balance": {
    /* Account balance label */
    val: "Saldo",
    translated: 'auto',
    h: "azvDWgVPY349dq4q8mbtpDhehRsFKYKNzMk/TcuOvEQ=",
  },
  "account.closed": {
    /* Account closed label */
    val: "Lukket",
    translated: 'auto',
    h: "8pZrnvzAUQTJhDN/XX31DLvx0wIs1Ww3fV6pktEKEHs=",
  },
  "account.currency": {
    /* Account currency label */
    val: "Valuta",
    translated: 'auto',
    h: "3D60KXXRwf14ydWSrd5tvgLQBOCOfNDf05UchJALh14=",
  },
  "account.import_balance": {
    /* Account imported balance label */
    val: "Importeret balance",
    translated: 'auto',
    h: "Z2Hg44o19bCItKOAhixAAwpW972mvt3LZyFy7Y3Dhgk=",
  },
  "account.kind": {
    /* Account type label */
    val: "Type",
    translated: 'auto',
    h: "xE96uLvSSFjRvRq5lfIcX1LGpnGQeyntOksJQ0X3CyE=",
  },
  "account.name": {
    /* Account name label */
    val: "Navn",
    translated: 'auto',
    h: "bMXfNfAzjiMOnmM+rZmR8I9iyrRaMmSXja7cZ0eGcwU=",
  },
  "account.offbudget": {
    /* Deprecated label for off budget accounts */
    val: "Uden for budget",
    translated: 'auto',
    h: "cw3ZD6kn6Mat0qZqOZP0Is9hg7xmOxrKqKCD8CIjmz4=",
  },
  "account.ranking": {
    /* Account order label */
    val: "Ordre",
    translated: 'auto',
    h: "Ggkvvwng4JyzP26RBZ9LrevWhrb766Qq+yTffZWmefg=",
  },
  "account.starting_balance": {
    /* Account opening balance label */
    val: "Åbningssaldo",
    translated: 'auto',
    h: "OEuQ3gAWrV+lPay2usXLKN3bNCH87PEsrcr+thNNbJY=",
  },
  "account_mapping.account_hash": {
    /* Account cryptographic hash label */
    val: "Fingeraftryk",
    translated: 'auto',
    h: "knLiHOJx3KZ0xE/Ex3QjyueLNEC/iAp6T3RHzZ3RayA=",
  },
  "account_transaction.cleared": {
    /* Transaction cleared flag label */
    val: "Afregnet",
    translated: 'auto',
    h: "j1SmbPuDDBP04XfOH9NNFCDzXmB9xAzSoVG7RcHcdBg=",
  },
  "account_transaction.fi_id": {
    /* Financial institution assigned transaction ID label */
    val: "Institution-tildelt ID",
    translated: 'auto',
    h: "gFeirPPl/djXfLKwDK8FtD7JPKjC/2e7sHuRIxqkii8=",
  },
  "account_transaction.general_cat": {
    /* General category label */
    val: "Generel kategori",
    translated: 'auto',
    h: "xEay6AzOg30Omh/FS2qPVa7eCkrUiXxTIclZM+h3BZE=",
  },
  "accounts.name_placeholder": {
    val: "ingen navn",
    translated: 'auto',
    h: "UwMHboI9q49SZQkwMN8ps9zBi6YOSdtwakjLJwudtyA=",
  },
  "action.New bucket": {
    val: " Ny spand",
    translated: 'auto',
    h: "aIKjDQtVbUMjIHU/6fccfiWBUIwUBnAofdzRJTCuytI=",
  },
  "action.New group": {
    val: " Ny gruppe",
    translated: 'auto',
    h: "054RU7JImk6Pavh27xHA9CgGIgjmP0dYIgXez2UWx34=",
  },
  "action.ignore": {
    val: "Ignorer",
    translated: 'auto',
    h: "K8sAh2XND1/tJOuX9xTLmr1fQjUOB70cfc9GwI62fEs=",
  },
  "action.link-account": {
    val: "Link",
    translated: 'auto',
    h: "unfAYQpjuyuTjjRCodr+S+jNjRmz3nahjZ91u/j5HfE=",
  },
  "action.report bug": {
    val: "Rapporter Fejl",
    translated: 'auto',
    h: "RxuE9Dh0Dadda2PtjUPD0dQ7b8aQok84Ytvw31ABBRU=",
  },
  "bank_macro.enabled": {
    /* Bank macro enabled flag label */
    val: "Aktiveret",
    translated: 'auto',
    h: "hHztbKAreElTc7ttNUovJFG0DIq9xfILBM+1aNV8x2Q=",
  },
  "bank_macro.enc_recording": {
    /* Bank macro recording data label */
    val: "Optager data",
    translated: 'auto',
    h: "nCMGHm2pOXvkN7v4hXGbN6g6Q9KfnHLC9ToPAUPTNIo=",
  },
  "bank_macro.name": {
    /* Bank macro name label */
    val: "Navn",
    translated: 'auto',
    h: "bMXfNfAzjiMOnmM+rZmR8I9iyrRaMmSXja7cZ0eGcwU=",
  },
  "bank_macro.uuid": {
    /* Bank macro UUID label */
    val: "UUID",
    translated: 'auto',
    h: "UbH2EWDbIyGX6gVQAsz9xGUQYrsX+er1VM8Fuuxhxrw=",
  },
  "bucket.balance": {
    /* Bucket balance label */
    val: "Saldo",
    translated: 'auto',
    h: "azvDWgVPY349dq4q8mbtpDhehRsFKYKNzMk/TcuOvEQ=",
  },
  "bucket.color": {
    /* Bucket color label */
    val: "Farve",
    translated: 'auto',
    h: "/hiVjO3WJ9JPhG5BDY2SqUELJlWFlhAWkhD3x/c45mU=",
  },
  "bucket.debt_account_id": {
    /* Bucket's related debt account label */
    val: "Gældskonto",
    translated: 'auto',
    h: "VSXRVQC8DbjhKcJjXLieRBksQgQU56PH2njj+P5m/KI=",
  },
  "bucket.deposit": {
    /* Bucket deposit amount label */
    val: "Indbetaling",
    translated: 'auto',
    h: "m1MGQLRYdNxU9nxvjA8qOlurdztaw7NQI15XBoTWhN8=",
  },
  "bucket.detailslabel": {
    val: "Detaljer",
    translated: 'auto',
    h: "68e/QPEuI36iIEcTWmKDrVU9KBReQ3EjFzF1F06KQMA=",
  },
  "bucket.end_date": {
    /* Bucket goal target date label */
    val: "Target date",
    translated: 'auto',
    h: "4+CFBiJaLAXPQeIpTMtcn3dB7Kgzsb0U/1WlSaqWgwM=",
  },
  "bucket.goal": {
    /* Bucket goal amount label */
    val: "Mål",
    translated: 'auto',
    h: "IGWRYx9sqJO1YtI2GyVqdV+i4fFQ+e8XMaiWTNAn/xk=",
  },
  "bucket.group_id": {
    /* Bucket group label */
    val: "Gruppe",
    translated: 'auto',
    h: "sOfjtH37WgstIWC3rRx2AsnvrT3fsQLKx5n8lTeYI0Y=",
  },
  "bucket.kicked": {
    /* Bucket kicked flag label */
    val: "Sparket",
    translated: 'auto',
    h: "cWApfoLlcBvoHizIFtrDQq3uwrZIYMXKO1iLMvv8szI=",
  },
  "bucket.kind": {
    /* Bucket type label */
    val: "Type",
    translated: 'auto',
    h: "xE96uLvSSFjRvRq5lfIcX1LGpnGQeyntOksJQ0X3CyE=",
  },
  "bucket.name": {
    /* Bucket name label */
    val: "Navn",
    translated: 'auto',
    h: "bMXfNfAzjiMOnmM+rZmR8I9iyrRaMmSXja7cZ0eGcwU=",
  },
  "bucket.ranking": {
    /* Bucket order label */
    val: "Rækkefølge",
    translated: 'auto',
    h: "Ggkvvwng4JyzP26RBZ9LrevWhrb766Qq+yTffZWmefg=",
  },
  "bucket.transfer.help": {
    val: "En overførsel er en transaktion fra en konto til en anden. Hvis transaktionen ikke er indkomst eller en udgift, er det sandsynligvis en overførsel.",
    translated: 'auto',
    h: "dh5nslkaB1wNR4tJ5zAn6Hms+9oJqBDmAIR5k6WE6iY=",
  },
  "bucket_group.name": {
    /* Bucket group name label */
    val: "Navn",
    translated: 'auto',
    h: "bMXfNfAzjiMOnmM+rZmR8I9iyrRaMmSXja7cZ0eGcwU=",
  },
  "bucket_group.ranking": {
    /* Bucket group ordering label */
    val: "Bestilling",
    translated: 'auto',
    h: "Ggkvvwng4JyzP26RBZ9LrevWhrb766Qq+yTffZWmefg=",
  },
  "bucket_transaction.account_trans_id": {
    /* Bucket transaction's related account transactions ID label */
    val: "Konto transaktion",
    translated: 'auto',
    h: "LyTdIJwB7IZ3hRIJLfTzbNqAiCegb1SR/QSm722WZkc=",
  },
  "bucket_transaction.bucket_id": {
    /* Bucket transaction bucket label */
    val: "Spand",
    translated: 'auto',
    h: "APPSgbsmF5H9B7YIJDaPcEVh4T7ctWU+hxQv/eG1Dg0=",
  },
  "bucket_transaction.linked_trans_id": {
    /* Label for a debt account's transaction that caused this transaction */
    val: "Gældstransaktion",
    translated: 'auto',
    h: "dsZm4Y+ZMohJRUkDmRya3MF/TZcL+z8GokDuT1P2da0=",
  },
  "bucket_transaction.transfer": {
    /* Transfer flag label */
    val: "Overførsel",
    translated: 'auto',
    h: "B5GGqjnE8KOjYJjhsFV7zs5TGmGmVPqjihzMVxHJ3sI=",
  },
  "buckethead.activity": {
    val: "Netto total af indkomst og udgifter.",
    translated: 'auto',
    h: "Ci5S7xYAKzBYmbK2mxnSj4p0EV9hMsvSs11lDMecqFo=",
  },
  "buckethead.fill": {
    val: "Netto total indsat og udtaget (uafhængig af transaktioner).",
    translated: 'auto',
    h: "T/g+6epzxej0HqIZyFjCZzqwtqqEJPCRV2cntaNNfOE=",
  },
  "bucketinout.help": {
    val: "Brug dette til at sætte penge ind i og tage penge ud af hver spand.",
    translated: 'auto',
    h: "FVxtuv3HRHdU7Snx+P3YYxcSngOkrcKyS5mng6AB8gE=",
  },
  "bucketrain.help": {
    val: "Dette er, hvor meget penge disse spande ønsker hver måned.  Den lille boks angiver, hvor meget de har modtaget.",
    translated: 'auto',
    h: "3dbOFkUiGaEoD01CP7kIWDQHgUbULWexjdEKdEAF3sA=",
  },
  "buckettype.deposit": {
    val: "Tilbagevendende udgift",
    translated: 'auto',
    h: "3HXotB9ZHFm14ArdM0RfCT0merw8+KuXthbzotnPRec=",
  },
  "buckettype.deposit-date": {
    val: "Spar Z/mo indtil Y dato",
    translated: 'auto',
    h: "zdWdEX9eN5qpFDboBF+wi9EIguwYsB9nQCzN9GjrxMc=",
  },
  "buckettype.goal-date": {
    val: "Gem X før Y dato",
    translated: 'auto',
    h: "+boZHIer4ggkvJ8A5cSl1EVyWRwKigC9UkBFn4WSEdg=",
  },
  "buckettype.goal-deposit": {
    val: "Spar X ved at indsætte Z pr. måned",
    translated: 'auto',
    h: "BUzPSZsbi+lN/3tb6eF63oa7CEzS94r6ee5jf5G7inA=",
  },
  "buckettype.plain": {
    val: "Simpel gammel spand",
    translated: 'auto',
    h: "AqvTaZK8lidyI8PZ9JXBBQABazz8uxM+uQM6iEuyO6w=",
  },
  "budget-file-type-name": {
    val: "Spande Budget",
    translated: 'auto',
    h: "g2jeytcuhPOlEo6R2OlTzT3vNdE7sVWGnXuffEioq4c=",
  },
  "change_log.action": {
    /* Change log action type */
    val: "Handling",
    translated: 'auto',
    h: "XvzB5DfL6tpSZT8TMSHzyiWbhLdKUeFcJ3tN6T8RvXU=",
  },
  "change_log.obj": {
    /* Change log object name label */
    val: "Objekt",
    translated: 'auto',
    h: "x6OaEMmJvznVG69QSR5ZH9Xoyu3vlgNaQC6E/ymQjgQ=",
  },
  "change_log.obj_id": {
    /* Change log object id label */
    val: "Objekt-ID",
    translated: 'auto',
    h: "K80xtzHhh4SO59NC0gT7rx1scigZGMneXw1DA+Ycv48=",
  },
  "daterange.all": {
    val: "Hele tiden",
    translated: 'auto',
    h: "Fz1lBhxlewLJ5bSKTiIzzaW3CAtAPxkUWWKU0BVqgAA=",
  },
  "debt-bucket-explanation": {
    val: "Dette er en speciel gældsbetalingsbøtte.",
    translated: 'auto',
    h: "+XZJ0Nl0JR5/xu1lf1csGge9E19plZmcKQmuaBg44aI=",
  },
  "debt-payment-bucket-name": {
    /* A likely account name might be "Credit Card" or "Chase VISA".  This is the name of the bucket that holds the payment for the debt account. */
    val: (account_name:string) => `${account_name} Betaling`,
    translated: 'auto',
    h: "QvSzok8BqSPb+A0q+87lqp62Rk+JFQhIno38JQyUfYg=",
  },
  "default account name": {
    val: "Sparinger",
    translated: 'auto',
    h: "zCYN8vtLT3Hhb9CbDDSL2xOOjqhzmmhMa5yWDTR7bCE=",
  },
  "default new bucket name": {
    val: " Ny Spand",
    translated: 'auto',
    h: "FchHrB6weykpHiqRVxc5QKb6BEdhH4DXrc+t6RNcF8M=",
  },
  "default new group name": {
    val: " Ny Gruppe",
    translated: 'auto',
    h: "1dmXA/VlW+tjhojOGcypAy70L2wupHf9EdVjUByvpmA=",
  },
  "err": {
    val: "fejl",
    translated: 'auto',
    h: "SjZnjAmjB+MXTE65uld0YUG2SmqBsMTAaeG4UnJgm4s=",
  },
  "error-detail": {
    val: "Hvis denne fejl fortsætter med at ske eller ikke giver mening, venligst rapporter en fejl eller chat med os.",
    translated: 'auto',
    h: "10Kk29tlHpBnhcTf7RRMfq1OZPGZgvPPguRlInaLNoY=",
  },
  "file_import_mapping.mapping_json": {
    /* File import mapping data label */
    val: "Data",
    translated: 'auto',
    h: "nb/gDaJJpEyxUczsooYPcWRNvDVzBJLOxevxBEAPM+o=",
  },
  "getting-started-link": {
    val: (clickhandler) => {
          return <span>Første gang du bruger Buckets? Tjek de <a href="#" onClick={clickhandler}>Videoer til at komme i gang.</a></span>
        },
    translated: 'auto',
    h: "9NGQRvIxlAaOF9i+zWPXMFQubcY+5jtA7Td/lii16aM=",
  },
  "go-to-next-month": {
    /* Menu label for "Go To... Next Month" */
    val: "Næste Måned",
    translated: 'auto',
    h: "O3OOxop0NEwRr9eDaqAU+8KU9Pw0GeVnYLo0Abdkotw=",
  },
  "go-to-next-year": {
    /* Menu label for "Go To... Next Year" */
    val: "Næste År",
    translated: 'auto',
    h: "NfnsOERP+IaYQvH6i+9MJ6KRpbYSapnXXUFm60jUbqo=",
  },
  "go-to-prev-month": {
    /* Menu label for "Go To... Previous Month" */
    val: "Forrige Måned",
    translated: 'auto',
    h: "aCvOorN0f6iWVHoOoBvWYttjgiPF/x5zZvXX3IqFI6g=",
  },
  "go-to-prev-year": {
    /* Menu label for "Go To... Previous Year" */
    val: "Forrige År",
    translated: 'auto',
    h: "ZntiItsGCJfJBxKIXyzi3+NpS8jZXYAK8IXrOl9bfFg=",
  },
  "go-to-this-month": {
    /* Menu item for "Go To... This Month" */
    val: "This Month",
    translated: 'auto',
    h: "pjcOO9o+UFMLsp6ovyVzksVtCLcFsauwEITWoeq//bg=",
  },
  "import-verb": {
    val: "Import",
    translated: 'auto',
    h: "F3sijvfYz3oB4iz2rVHjUvNDLQs43MbXDVIr5VFA2/c=",
  },
  "in the bank": {
    val: "i banken",
    translated: 'auto',
    h: "7gl7ZdgJ3HfhOcQMiU7hVkFpXIR3KFxXtlMhKyE/Irw=",
  },
  "misc group name": {
    val: "Diverse",
    translated: 'auto',
    h: "DPoc7CIbzLHJxuar3WnaidO3Ryy1QtYkCswRzVHtVBg=",
  },
  "money-balance-as-of": {
    val: (amount:JSX.Element, date:JSX.Element) => {
                  return <span>{amount} pr. {date}</span>
                },
    translated: 'auto',
    h: "99X4HuXB5SeCrTqn5LuD/S4a6GjUCB6gV1Z1gAZPfKM=",
  },
  "months gain/loss label": {
    val: (gain) => {
                        return gain >= 0 ? "Månedens gevinst" : "Månedens tab";
                      },
    translated: 'auto',
    h: "lGcEnJfZJau2h5ohbKNxY1FjL0vJoW3oJOJQwSCt+Kg=",
  },
  "more": {
    val: "mere",
    translated: 'auto',
    h: "uiqCMjSdL1TgDZHPNYXLnfN/yZq59+kDR/wKZSAP0hU=",
  },
  "nag-message": {
    val: () => `Dette er en uregistreret prøveversion, og selvom prøveperioden er uden tidsbegrænsning, skal en licens købes for fortsat brug.

Vil du gerne købe en licens nu?`,
    translated: 'auto',
    h: "cugeP6FVXqdiCtOers5rslG0mDD5t/Rfl1ZWslfhD48=",
  },
  "navigatestep": {
    val: (url) => `Gå til ${url}`,
    translated: 'auto',
    h: "nI/J4GfYlL6BgRZRSiPFfA5o7ASdx2VVYW6x3vgCuKE=",
  },
  "net-transfers.help": {
    val: "Netto-overførsler er den samlede sum af alle transaktioner markeret som en overførsel. Det bør være 0. Hvis det ikke er, klik gennem for at sikre dig, at der ikke er dublerede transaktioner eller transaktioner forkert kategoriseret som overførsler.",
    translated: 'auto',
    h: "2P3jr/VPQ35tlPa/uDMqi1spXO4Rinn76fgfVOegiA8=",
  },
  "no name": {
    val: "ingen navn",
    translated: 'auto',
    h: "UwMHboI9q49SZQkwMN8ps9zBi6YOSdtwakjLJwudtyA=",
  },
  "noin.income": {
    val: "Indkomst",
    translated: 'auto',
    h: "D2fJbta5d1Z5QYuRC5zzkBHsItZOOgY4FKrFJ64BvRs=",
  },
  "notify-downloaded-file": {
    val: "filename => `Downloadet fil: ${filename}`,"
    translated: 'auto',
    h: "HwxJ2TVx57Qef6bXYySekL/eoBzvIEFUqBxQdxgcyCs=",
  },
  "noun.debt": {
    val: "Gæld",
    translated: 'auto',
    h: "y9kslXhW17gMMFZ9Dq8g/tabfINzlmzT+39QNbWiWGA=",
  },
  "noun.transfer": {
    val: "Overførsel",
    translated: 'auto',
    h: "B5GGqjnE8KOjYJjhsFV7zs5TGmGmVPqjihzMVxHJ3sI=",
  },
  "off": {
    val: "af",
    translated: 'auto',
    h: "nzvsum5LFYOz4ZRB3eTVliJTfZvVSpTSImJ4XkhThNA=",
  },
  "on": {
    val: "på",
    translated: 'auto',
    h: "mQwjhouWWBSxF8+abE3+RUUurcIXHh+YGGXr/ITxByQ=",
  },
  "press Escape to close": {
    val: "Tryk Escape for at lukke",
    translated: 'auto',
    h: "5jKKS3xwogwcB2YptY5sW2/MQ/ikfMbR99l8ViHxmAA=",
  },
  "rain.help.neg": {
    val: (abs_amount:JSX.Element) => {
                                      return <span>
                                      Du har sat {abs_amount} for meget penge i buckets.  Hvis alle transaktioner er kategoriseret denne måned, fjern {abs_amount} fra buckets efter eget valg.
                                      </span>
                                    },
    translated: 'auto',
    h: "tqXmJxZXqyA0mN/8ugZkpCyspyO7XlPnGlEYGWgQ7jk=",
  },
  "rain.help.pos": {
    val: (abs_amount:JSX.Element) => {
                                      return <span>
                                      Du har {abs_amount} tilbage at putte i buckets.
                                      </span>
                                    },
    translated: 'auto',
    h: "boezbSGkVm3dnfFvodJOAeCgAEMIQN9L+8TwEHLpU/o=",
  },
  "sample-size": {
    val: (count:number, total:number) => {
          return `Viser ${count} af ${total}`
        },
    translated: 'auto',
    h: "V4+Zyz6U1+wyTBVSVOfOz+wwkd1EWbQBhFcYdL9jLfY=",
  },
  "settings.key": {
    /* Settings name label */
    val: "Navn",
    translated: 'auto',
    h: "bMXfNfAzjiMOnmM+rZmR8I9iyrRaMmSXja7cZ0eGcwU=",
  },
  "settings.value": {
    /* Settings value label */
    val: "Værdi",
    translated: 'auto',
    h: "+VG3lKNZdlCrMfK2d7yG7/OtZ5iGD3yqkIqOIClVuNw=",
  },
  "simplefin-connect-intro": {
    val: "For at oprette forbindelse, gør følgende:",
    translated: 'auto',
    h: "421gz/BziKZhsIy2YKRFNtwoqPcbQ7uhFZWWfd6ReBg=",
  },
  "simplefin-get-token": {
    val: (mklink) => {
              return <span>Få en SimpleFIN Token fra den {mklink('SimpleFIN Bro')}</span>
            },
    translated: 'auto',
    h: "VEeKjngcHxowWbB2xWy5oNH4MXIfJQ7EqpiomT6V0fg=",
  },
  "simplefin-paste": {
    val: "Så indsæt din SimpleFIN Token her:",
    translated: 'auto',
    h: "vAoRsY20OBqs8bleaXD3auq8VnO9gQj7gXz5p+p71EI=",
  },
  "simplefin_connection.access_token": {
    /* SimpleFIN access token label */
    val: "Adgangstoken",
    translated: 'auto',
    h: "RqJX7GMSAvHvTe36qzKsJI8E56vSQX8DYTUB/G7/RTI=",
  },
  "single-account Closed": {
    val: "Lukket",
    translated: 'auto',
    h: "8pZrnvzAUQTJhDN/XX31DLvx0wIs1Ww3fV6pktEKEHs=",
  },
  "single-bucket Kicked": {
    val: "Sparket",
    translated: 'auto',
    h: "cWApfoLlcBvoHizIFtrDQq3uwrZIYMXKO1iLMvv8szI=",
  },
  "some day...": {
    val: "en dag...",
    translated: 'auto',
    h: "4K+3SY48UwcktULX4xiGt6J8Q8Hys3JjUR3t62WI6mo=",
  },
  "sync-symbol help": {
    val: "Dette symbol betyder, at transaktionen kom fra en import/synkronisering",
    translated: 'auto',
    h: "S3tDRls+AJYj6f8jSNSCa1FVyNY+ngn6Db1EQJ3dpLE=",
  },
  "sync.toast.syncing": {
    val: (start: string, end: string) => {
        return `Synkroniserer transaktioner fra ${start} til ${end}`;
      },
    translated: 'auto',
    h: "utj3wVCxisKfYRDtJ+t5B8jPlLKwhght2S5Cb3b0qZc=",
  },
  "tab": {
    /* Label for 'tab' character */
    val: "Tab",
    translated: 'auto',
    h: "aEXPpTPGGl6vpoXplsnqN9LGRDys7bKMPu0BVvzbxIg=",
  },
  "this_device.name": {
    val: "Ingen navn",
    translated: 'auto',
    h: "Z85JCnN1GdDw+yMwZqwW8aeKgQkvCHCkVIkIjZt7G00=",
  },
  "toast.updated-trans": {
    val: "count => `Opdateret/oprettet ${count} transaktioner`",
    translated: 'auto',
    h: "bBKDE3rQIV5P80cYEL6mkLmIvgxjzVHCIf3aFa+KtmU=",
  },
  "trans-created-outofview": {
    val: (month: string) => {
              return <span>Transaktion oprettet i {month} </span>;
            },
    translated: 'auto',
    h: "ur97iCX3Iw1E262eZ72YAEFdXlwvlqNkyNn1caIKi0E=",
  },
  "transfer-from-account": {
    val: (dropdown:JSX.Element) => {
                return <span>Overfør fra {dropdown}</span>
              },
    translated: 'auto',
    h: "VJmIMDZGOdMKwBpoqDUYiVdCFhw1pJ4qCmKiszAECL4=",
  },
  "transfer-to-account": {
    val: (dropdown:JSX.Element) => {
                return <span>Overfør til {dropdown}</span>
              },
    translated: 'auto',
    h: "Bd1IGkjXo2ruWofGrT+WwLdiy8IwJ/PW+7SO4TaDcps=",
  },
  "unknown_account.account_hash": {
    /* Account fingerprint label */
    val: "Fingeraftryk",
    translated: 'auto',
    h: "knLiHOJx3KZ0xE/Ex3QjyueLNEC/iAp6T3RHzZ3RayA=",
  },
  "unknown_account.description": {
    /* Unknown account description label */
    val: "Beskrivelse",
    translated: 'auto',
    h: "bg0ZDIR+z+PEkinc/ZyqkERMsVZcFFm3NhQoIqZH+WM=",
  },
  "unknown_account.ignore": {
    /* Label for flag indicating if an unknown account is ignored or not */
    val: "Ignorer",
    translated: 'auto',
    h: "K8sAh2XND1/tJOuX9xTLmr1fQjUOB70cfc9GwI62fEs=",
  },
  "use-delimiter": {
    /* When importing CSV files, users can choose a custom delimiter (instead of commas). This presents their custom delimiter as an option. */
    val: (delimiter:string) => `Brug "${delimiter}"`,
    translated: 'auto',
    h: "KJbb5/maOo+aep3dLJiRb5KwueX8VsaGVPIXGXDeXkY=",
  },
  "verb-open": {
    /* Verb to open a page */
    val: "Åbn",
    translated: 'auto',
    h: "PlLwT5LggHCmpOqXIa1xXdU/K/ztbasiD703lhOnltA=",
  },
}
export const pack:ILangPack = {
  name: 'Dansk',
  dir: 'ltr',
  numbers: {
    thousands: '.',
    decimal: ',',
    decimal_places: 2,
  },
  messages,
  contributors,
}
