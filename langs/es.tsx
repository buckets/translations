import * as React from 'react'

import { ILangPack } from '@iffycan/i18n'
import { IMessages } from './base'

// Contributors, include your name and optionally a link to
// a website as you want it to appear in any credits.
const contributors = [
  {
    name: "osanchez",
    href: "https://osanchez.dev", /* optional */
  },
  {
    name: "Rafael Sillero",
    href: "https://github.com/Rsilnav",
  },
  {
     name: "Mario Rodrigo",
     href: "https://github.com/capitantrueno",
  },
  {
    name: "Laureano Rodrigo",
    href: "", /* optional */
  },
  // {
  //   name: "",
  //   href: "", /* optional */
  // },
];

const messages:IMessages = {
  "\n        Though filling out this form is preferrable, you can also email bugs@budgetwithbuckets.com\n      ": {
    val: "\n        Aunque es preferible llenar este formulario, puedes enviar un correo electrónico a bugs@budgetwithbuckets.com \n      ",
    translated: true,
    h: "05fPQ/cX0e4UXnYsbNTo8b6FUwq/WZ1URc7ixr6WlV8=",
  },
  "(Drop files or click)": {
    val: "(Arrastra los archivos o haz click aquí)",
    translated: true,
    h: "cn8vjUpkolK+X1qsHPyR11Qj7uQWZVR6eWnhPRb/zfw=",
  },
  "(If you want a response)": {
    val: "(Si quieres una respuesta)",
    translated: true,
    h: "Ij4mQm0L5WO4Iunvl3fKwbhLwjTodc3Chq81GsFM+T0=",
  },
  "(optional)": {
    val: "(opcional)",
    translated: true,
    h: "njVpYkgCdiB755Pxnsk1D8GELOWqw1mBBYG+YQr7e98=",
  },
  "/mo": {
    val: "/mes",
    translated: true,
    h: "ggq7na5vMB1wOjQQo0Wq0o7ctwbMUiiJr1tRRKphHss=",
  },
  "A sync is already in progress": {
    val: "Hay una sincronización en progreso",
    translated: true,
    h: "z6CqgxENo0xxB0LPp8P8rmnLPp1m2NElecEaJM8GDfI=",
  },
  "About Buckets": {
    /* 'Buckets' refers to the application name */
    val: "Acerca de Buckets",
    translated: true,
    h: "9bzPsx+kCkNUeLTSVjaygyWCkm3VCdsFaAFRvdS+xEU=",
  },
  "Account": {
    val: "Cuenta",
    translated: true,
    h: "ihCgI4A9UaFZ63kuiKXqFHoGsze2dYwzpgSVU0clMfQ=",
  },
  "Account Transactions": {
    val: "Transacciones en la cuenta",
    translated: true,
    h: "GPJhFDki3xJdCOMqCkqdUDX7SfEZcg9wGee8KMIuIno=",
  },
  "Account and transactions deleted": {
    val: "La cuenta y las transacciones fueron borradas",
    translated: true,
    h: "iwS2+dAqfDOEtU5SUm1d1oPFTe0+JT5NCm4nH2SrglE=",
  },
  "Account closed": {
    val: "Cuenta eliminada",
    translated: true,
    h: "l9xs5wLKF3KIgunL1SJh9r9XDYpWkC7LYrL4KUUFm3M=",
  },
  "Account deleted completely": {
    val: "Cuenta borrada completamente",
    translated: true,
    h: "LswJ+SxzkHRVy6+Et4Wga6r/Io1P6MBlTiwdjUAUj48=",
  },
  "Accounts": {
    val: "Cuentas",
    translated: true,
    h: "1oHDkv2zB1yiCABVTWBY5oX4Ccu36nJBCG7Q+JVg8TA=",
  },
  "Accounts in side bar": {
    val: "Cuentas en la barra lateral",
    translated: true,
    h: "BsDoJS2nPDKya2do9fNF2o2jl0mIUxjdBycHbmsu6HY=",
  },
  "Actions": {
    val: "Acciones",
    translated: true,
    h: "qm2CvbPMHZpeVCriZp/vJ2kAGatdeyDxfZ8TMaapQvo=",
  },
  "Activity": {
    /* Noun, label for a bucket's usage (income/expenses) for a period */
    val: "Actividad",
    translated: true,
    h: "jfKSYDWvDxzcenHtImEM9HokIu7tBJbMki25BNTynTI=",
  },
  "Actual Size": {
    val: "Tamaño real",
    translated: true,
    h: "k1ZfUj7bmT4XwiALRlZo7ztl2d+e7JcLt3WCnvjpBYg=",
  },
  "Add": {
    val: "Añadir",
    translated: true,
    h: "sHHJQ9jaFQD0ZjykXnD1vKiFV5C98TviMmSgajkSEXY=",
  },
  "All Files": {
    /* Label for letting users select any file for import regardless of extension */
    /* Label for letting users select any file for import regardless of extension */
    /* Label for letting users select any file for import regardless of extension */
    val: "Todos los archivos",
    translated: true,
    h: "xP+YqxC7o4/NEWANvugOAGzJXIF368ZNwle6rV7nVRg=",
  },
  "Allow new device requests": {
    val: "Permitir peticiones de un nuevo dispositivo",
    translated: true,
    h: "+ADhW+DC+iBwee59O+D2to40KBQLqc3YMIxy7akwYiQ=",
  },
  "Amazon.com Reconciliation": {
    val: "Conciliación con Amazon.com",
    translated: true,
    h: "SS/vhEAqfP5cTcprv5/4dDYZCEsTIMySGfXEngOoMj0=",
  },
  "Amount": {
    val: "Cantidad",
    translated: true,
    h: "DHNNaJF4hWTWIFdaMdMhUT4aSdti7ZfaNexABzxWWzc=",
  },
  "Amount of money over-allocated in buckets.": {
    val: "Cantidad sobrepasada en los cubos.",
    translated: true,
    h: "kFucvPefN9Kae7dArnle8i0rTZZq1U+3d8w81lDNVKw=",
  },
  "Analysis": {
    val: "Análisis",
    translated: true,
    h: "+LNAOPSLW2rpFCrT+U1suhdnoYyZa1k8ALddRlddDlI=",
  },
  "Animation": {
    /* Label for application preference enabling/disabling animations */
    val: "Animación",
    translated: true,
    h: "Vk4XaMgXNIEY4+Gcal1n+qdnamgr4Q5af/+wzFRoIHU=",
  },
  "Any other monthly bills you have?": {
    val: "¿Tienes algún otro recibo mensual?",
    translated: true,
    h: "rmA9D10bvYOVj3U4kE7U6jALpz7WpqBJTv6HZaI4T/M=",
  },
  "Application preferences": {
    val: "Preferencias de la aplicación",
    translated: true,
    h: "PIhGW3aVUScG87KKiDCF4fLhudwZ3eYbz7n7msHJU1U=",
  },
  "Assets": {
    val: "Activos",
    translated: true,
    h: "VBLBowZo0Lx8GWGbWVcEEFzSxnwQmcEOSxwtD5yIhwQ=",
  },
  "Attached files are too large.": {
    val: "Los archivos adjuntos son demasiado grandes.",
    translated: true,
    h: "HfDI7uw+P4uLUPkDu0rxQhxJqjqcriWmD9EWYaiUqvY=",
  },
  "Average": {
    val: "Promedio",
    translated: true,
    h: "zLxQhptvlIYtt0l/prvWMqnsQHh7N1gxh33WeorRi2w=",
  },
  "Avg:": {
    val: "Promedio:",
    translated: true,
    h: "EVMZyhHQEFPlI2ib8VqTJo25bJBk8gHsgZR1SZ2Jcj0=",
  },
  "Babysitting": {
    val: "Cuidado infantil",
    translated: true,
    h: "yOfOnHbye/Uhao1fb5jtfP4z0XPyc757kdBFt32Uwrc=",
  },
  "Balance": {
    val: "Saldo",
    translated: true,
    h: "azvDWgVPY349dq4q8mbtpDhehRsFKYKNzMk/TcuOvEQ=",
  },
  "Birthdays": {
    val: "Cumpleaños",
    translated: true,
    h: "rzI9rIMV5VD86pAzRZf+uFAA8rWYhz1rIH5N9fDesSk=",
  },
  "Break Import Links": {
    val: "Enlaces de importación rotos",
    translated: false,
    h: "XQYKw3qJ7xKoR/DX6K6NdZxbJLHVJhxy9mFVV8r1ZU4=",
  },
  "Bring All to Front": {
    val: "Traer todo al frente",
    translated: true,
    h: "vXNLSncC5dTsDdfhZY5dhbev+Y3PpqQEy1fwxTkGWU0=",
  },
  "Bucket": {
    val: "Cubo",
    translated: true,
    h: "APPSgbsmF5H9B7YIJDaPcEVh4T7ctWU+hxQv/eG1Dg0=",
  },
  "Bucket Transactions": {
    val: "Transacciones del cubo",
    translated: true,
    h: "5hMoGWO5uTeCOujLdFnRx4w3D6Zka/avSxnH14UmJiI=",
  },
  "Bucket deleted completely": {
    val: "Cubo borrado definitivamente",
    translated: true,
    h: "gBMlSFTWDRRSWZeZ3fuxDhpJnhv2MoF3EvZSwo1BZHg=",
  },
  "Bucket type:": {
    val: "Tipo de cubo:",
    translated: true,
    h: "NMC+sjsH6UgNhNtiqYeiHDi4zDK/+S5h5yMfZ5CQk1c=",
  },
  "Buckets": {
    /* Bucket list page title.  Does NOT refer to the application name */
    /* Refers to a list of buckets, not the application title */
    /* Refers to a list of buckets, not the application title */
    val: "Cubos",
    translated: true,
    h: "fMPIWzGvVEG0t7+bZX1ucgzulk8FaQfqioLgwLsj+oE=",
  },
  "Buckets Budget Filename": {
    /* 'Buckets' refers to the application name */
    val: "Nombre de archivo para el presupuesto",
    translated: true,
    h: "PMqvee/qJsh/OYtRi+hbcH4fgl07SR6XM0wx4c1C+sU=",
  },
  "Buckets License": {
    /* 'Buckets' refers to the application name */
    /* 'Buckets' refers to the application name */
    val: "Licencia para Buckets",
    translated: true,
    h: "sym++hSpJ7LeHTQAaiYRAK41eYIw9pfMFO2EbYTHGxo=",
  },
  "Buckets has crashed.  Please restart after submitting a bug report.": {
    val: "Buckets se cerró inesperadamente. Por favor reinicia para enviar un informe de errores.",
    translated: true,
    h: "jPwdFrODeZ3bxIdD+YJ9CFGjCQTqdwQNr9CdB4QTI6U=",
  },
  "Budget": {
    val: "Presupuesto",
    translated: true,
    h: "zOO4DqNSFLa6Z9vlmfaz8OnwggHn8wJeP058V5mUKbE=",
  },
  "Budget Specific Settings": {
    /* Title for budget settings page */
    val: "Preferencias especificas para el presupuesto",
    translated: true,
    h: "/RQVOKmoXTgeciF+ohehk19BxpvBXud+3HjfZPPw1v8=",
  },
  "Budget password:": {
    /* Label for bank macro password prompt */
    val: "Contraseña del presupuesto:",
    translated: true,
    h: "yB5u4awiXu76+/Pw81ZYhBtgYQktcAVe6KU4WreiReU=",
  },
  "Budget-specific number format": {
    val: "Budget-specific number format",
    translated: false,
    h: "34SWA6JebUvD6EsRbt8oe1ERhdfOkpdEfhXNZsRVcx4=",
  },
  "Budgeted": {
    val: "Presupuestado",
    translated: true,
    h: "aP72arzLN/j79zGtL8DWE7wcBGciRcWqMOR1aTHJmNo=",
  },
  "Cable TV": {
    val: "TV por cable",
    translated: true,
    h: "wISz6Dh0vnQ1Tjhr9GWcJ2rhiif2af6NXsAzEAXYxfo=",
  },
  "Calculator": {
    val: "Calculadora",
    translated: true,
    h: "IiaAFlM5LkjsirGL06i1plXy1FoW75TKBiuin2r4s6Q=",
  },
  "Cancel": {
    /* Button label */
    val: "Cancelar",
    translated: true,
    h: "wHdMGFBg/BNmqwwBSIr4TrXk4fT1kilDHgZN5z4N5sU=",
  },
  "Cancel Import": {
    /* Undo/redo label for canceling import */
    val: "Cancel Import",
    translated: false,
    h: "ASPyW8TypDFl1ANm1SIrpmykDdl3rBQDzC+wk4mdZXA=",
  },
  "Cancel sync": {
    val: "Cancelar sincronización",
    translated: true,
    h: "8xFWyPShIifEhumOA/PeoTtccm5TTtbQmWFViIGcPQA=",
  },
  "Car Insurance": {
    val: "Seguro del vehículo",
    translated: true,
    h: "x3xbGNEH/vHcpYAm2HXTUhRRuz2sb6yfH0gBYFFkqc4=",
  },
  "Car Maintenance": {
    val: "Mantenimiento del vehículo",
    translated: true,
    h: "Lsok3+kX1L7SXMumFWNo+oxBgfmGJcWg1CdSDw6byx8=",
  },
  "Car Payment": {
    val: "Pago del vehículo",
    translated: true,
    h: "wp49ZoinRgifzKQ+N9RrJ6LG/9Yw6hkw1RCwXwHc6tA=",
  },
  "Categorization": {
    val: "Categorización",
    translated: true,
    h: "DShuYOF3daz37AE7lGCN1TajYU1VyorRCvLwh4bM1r8=",
  },
  "Categorize": {
    val: "Categorizar",
    translated: true,
    h: "mA6/TefxgXpo2M+OUx/ATLQ4QYHv4t1+8vy3MmV+EQg=",
  },
  "Category": {
    val: "Categoría",
    translated: true,
    h: "/frArhrZL+bxdiiBKi/1cYdR/tSD7rhbMHJLgHQQdNQ=",
  },
  "Change Account Type": {
    val: "Cambiar tipo de cuenta",
    translated: true,
    h: "elw7uWDm9Vij1azrwiBbY+VwbjMQuo/xziG393BqGUA=",
  },
  "Channel": {
    /* Label for sharing channel name */
    val: "Canal",
    translated: true,
    h: "6McSbB26j6gQAt0v7ByUJ/jiHqBZ2yz4LSOmbKx3YvY=",
  },
  "Channels": {
    val: "Canales",
    translated: true,
    h: "3WbePrysEPFoKdtJSdWovHXxPrOsBkkHhJdOkxTq8wQ=",
  },
  "Charity": {
    val: "Donativos",
    translated: true,
    h: "5OqY1JRI3brWCHQyu9VDY9hpjXzg1cVB1oQnXLQjZ4U=",
  },
  "Chat with Matt": {
    /* If "Chat with Matt" is too wide, you can translate this as just "Chat" */
    val: "Charlar con Matt",
    translated: true,
    h: "9nQjbkjkf8l2mX6xeNaU///NYhxxWFqnvTKOmakMmRY=",
  },
  "Chat...": {
    val: "Charlar...",
    translated: true,
    h: "SytGirG0+cdtbPfjBma/G/tEOt4rdOj4mnjcaWsTbt8=",
  },
  "Check For Updates...": {
    val: "Buscar actualizaciones...",
    translated: true,
    h: "S/1p0syaOMqjAbHpmZa6gWaIh/9e29QR2cRJhiMadz0=",
  },
  "Check for Updates": {
    val: "Buscar actualizaciones",
    translated: true,
    h: "6vtxqhyfiDaIXgTBH0pdoPzTGftDDEoRFNGU082PhRk=",
  },
  "Checking for updates...": {
    val: "Buscando actualizaciones...",
    translated: true,
    h: "wjjhyYhYEFdJWUmwdJIEdxm0iAq2bwrWU79ANObzzZY=",
  },
  "Choose a file ending in either .ynab4 or .ymeta": {
    val: "Selecciona un archivo con extensión .ynab4 o .ymeta",
    translated: true,
    h: "Tym1GWz52+2AgA4qwsbqknBtvR9QYYGN2y5oYYQ7yZQ=",
  },
  "Cleared": {
    /* Tooltip text indicating that a transaction has cleared. */
    val: "Conciliado",
    translated: true,
    h: "j1SmbPuDDBP04XfOH9NNFCDzXmB9xAzSoVG7RcHcdBg=",
  },
  "Cleared balance": {
    /* Label for balance minus uncleared transactions */
    val: "Saldo conciliado",
    translated: true,
    h: "3SpY0eBe4gJ1WtupFnV904/a1Xlfx5Y4ybAdHQGzGV0=",
  },
  "Close Account": {
    val: "Cerrar cuenta",
    translated: true,
    h: "qTJEf8mdhLx1bU9LZPYaTtrT8pMLqxemoL/YqbhjESI=",
  },
  "Close Window": {
    val: "Cerrar ventana",
    translated: true,
    h: "hrPxvP/hrVgtNNTMX4sv5sljx57neTy+2p0U1TKGuCE=",
  },
  "Close account": {
    val: "Cerrar cuenta",
    translated: true,
    h: "7HdV8X8++teDNW33urE2eccDw3VLdSpvII89zC/sfu4=",
  },
  "Closed": {
    /* ! Label for list of closed accounts */
    val: "Cerrado",
    translated: true,
    h: "8pZrnvzAUQTJhDN/XX31DLvx0wIs1Ww3fV6pktEKEHs=",
  },
  "Clothing": {
    val: "Ropa",
    translated: true,
    h: "as4CQmPu3VF2LxSvA5djgiAPatdFRqwmOt0NiHJCe7E=",
  },
  "Confirm password:": {
    val: "Confirmar contraseña:",
    translated: true,
    h: "Px/rLFgkE/Sv1Z+Xm0frULVV3lxvrEc7ABJaDzmv670=",
  },
  "Connect": {
    val: "Conectar",
    translated: true,
    h: "pCLQy6ZAsZnJ3ff5r+iD+O2vHQhIJEEUHUhiY1NrMP0=",
  },
  "Connect to bank": {
    val: "Conectar con el banco",
    translated: true,
    h: "0T7eA3oFvMxyPIOAkMZ2rDpJxQVORgxrLqrDx87L1ZY=",
  },
  "Connected": {
    val: "Conectado",
    translated: true,
    h: "fV/VOfsqBR+vyqF2tRjG6qsC8ufS/QDaTRaUee+UEMA=",
  },
  "Connecting...": {
    val: "Conectando...",
    translated: true,
    h: "fYdj0RfOQMPN3n28gswFnK4aOvozPH0hqm9oqd+NcWI=",
  },
  "Connection corrupted. Please delete and re-create.": {
    /* Error when an invalid SimpleFIN connection is attempted */
    val: "Conexión inválida. Por favor, bórrala y créala de nuevo",
    translated: true,
    h: "YjH9IxACkJ2e9cq+MYI3I6l3RmOWZPEBAwzjq3W7x0s=",
  },
  "Connection saved!": {
    val: "¡Conexión guardada!",
    translated: true,
    h: "wAgyeIQsbaI/kFPgBf8sWlKK1mf/VcP7BjHpC9TNYuc=",
  },
  "Copy": {
    val: "Copiar",
    translated: true,
    h: "T2DR4UKv+pyVWY8GzF/WWjk5XqMXgZ0gDyXkZmYczHw=",
  },
  "Create Account": {
    /* Undo/redo label for creating an account */
    /* Undo/redo label for creating an account */
    val: "Crear Cuenta",
    translated: true,
    h: "0N2I0sNdMLVk7zC9FqlNYoA1G6RDgQDvQErp/TjAnRA=",
  },
  "Create Backup": {
    val: "Crear copia de seguridad",
    translated: true,
    h: "tUZEq5sa8Ggh6lIgsWzX8Blj6/unJ8dhl9sKpfwxRYY=",
  },
  "Create Backup and Start Over": {
    val: "Crear copia de segurtidad y empezar de cero",
    translated: true,
    h: "55tb3CtVKNADQpK4SdoMMPQvHu1ftBosd/dP8lFHV/o=",
  },
  "Create Macro": {
    val: "Crear Macro",
    translated: true,
    h: "F6PDykaoACWoqQ+oKUyJyhERAe1FjT6A3OkxL+S5l8k=",
  },
  "Create Template": {
    val: "Crear Plantilla",
    translated: true,
    h: "gAbtUL3vhxk+yCSp7fzAF4Z9tV0I4x7Uq5xDJ4nm2Uk=",
  },
  "Create Transaction": {
    val: "Crear Transacción",
    translated: true,
    h: "G5NDAP857MBDE66GWUREcFAJc2pCogndYa6y+m6PRfE=",
  },
  "Create budget password:": {
    val: "Crear password para el presupuesto:",
    translated: true,
    h: "Bf9XVrpN9UpVSKpZNRpBUw/IaFjMkNCmH4gpAfhYFkY=",
  },
  "Create macro": {
    val: "Crear macro",
    translated: true,
    h: "9xZZAswDH8zePPUhfsaSEDJ21GU1yhILKhDWtvnUlr0=",
  },
  "Create new account": {
    val: "Crear nueva cuenta",
    translated: true,
    h: "SmoVFbeAWSO4cW1YQJbuDJQz8kenVz5++WTJEkS6Vos=",
  },
  "Currency symbol": {
    /* Label for currency symbol setting */
    val: "Símbolo de moneda",
    translated: true,
    h: "/zaBMXJh747DLHbqocisO7iV5wDJpVTSCx8RhH7Ye0E=",
  },
  "Cut": {
    val: "Cortar",
    translated: true,
    h: "+kuX06pgC809fwr+5h9VbC8sVgVWo6EXgg6bzfXXtJs=",
  },
  "Data": {
    val: "Data",
    translated: false,
    h: "nb/gDaJJpEyxUczsooYPcWRNvDVzBJLOxevxBEAPM+o=",
  },
  "Date Posted": {
    val: "Fecha Valor",
    translated: true,
    h: "3A+vhaBB21UASdnwmNYVGMV9qH/U43D3DCsVSXlWasY=",
  },
  "Date format": {
    val: "Formado de fecha",
    translated: true,
    h: "fY1FnR2YTcyORx9p/4BdLTjtjH1FNW35jtGy64ltO4E=",
  },
  "Debt": {
    /* Label for a total debt amount */
    /* Name of bucket group for debts */
    val: "Deuda",
    translated: true,
    h: "y9kslXhW17gMMFZ9Dq8g/tabfINzlmzT+39QNbWiWGA=",
  },
  "Debugger": {
    val: "Depurador",
    translated: true,
    h: "4ScsdyOtUZsKH/cENJNnmyZFMuIjtHzPrPhrpnc+kOk=",
  },
  "Decimal delimiter": {
    val: "Carácter separador de decimales",
    translated: true,
    h: "Qjuny9lynn/v2WJwTnYLdXQb/ne+0Q2TBiSM+KFIrIU=",
  },
  "Default number format": {
    /* Label for application number formatting preference */
    val: "Default number format",
    translated: false,
    h: "mgzNoP6jlMs5CPedg7OHyJuqrwEkQlj6DduekmeqfCY=",
  },
  "Delete": {
    val: "Eliminar",
    translated: true,
    h: "sm3jcrSw6qxgICiEpy25imvm6QNueF6oZ+oBxfeSEJg=",
  },
  "Delete Account": {
    val: "Borrar Cuenta",
    translated: true,
    h: "zTJTocYLEbNVwJ0ojyPCB6M0JpGx6fe6AZHWtuVJv0M=",
  },
  "Delete Connection": {
    val: "Borrar Conexión",
    translated: true,
    h: "o6bxlUpjZFFTleiRLA4ykeB3yEHsAiXW9usUdJ9jh1g=",
  },
  "Delete Group": {
    val: "Borrar Grupo",
    translated: true,
    h: "VaefOk8g8N64N+Td8TEorhhMQBe0AuWmfRz7u7+Q1Ko=",
  },
  "Delete Macro": {
    val: "Borrar Macro",
    translated: true,
    h: "Qb7shd6fRLybaDzPvdr0Z4VfVek/fHVV556kEcNZrH8=",
  },
  "Delete Transactions": {
    val: "Borrar Transacciones",
    translated: true,
    h: "5rAWRNk97CWy9OfDP5IWSE/T2Ao461w7C3z/IDV154I=",
  },
  "Delete Unknown Account": {
    val: "Delete Unknown Account",
    translated: false,
    h: "SzZ+N6/hpntSyAoyuLxzaipQcinkrh5c33ceQdtoUcE=",
  },
  "Delete all": {
    val: "Borrar todo",
    translated: true,
    h: "nKzti1takFUxZyWfLTGqgvdL3dJMx6CdNwVfBH1jUYE=",
  },
  "Delimiter": {
    val: "Delimiter",
    translated: false,
    h: "VDesNaCayRIGFHLEXOjH3Eev3D/EzM6/dVsl7zN/+Mo=",
  },
  "Description": {
    val: "Descripción",
    translated: true,
    h: "bg0ZDIR+z+PEkinc/ZyqkERMsVZcFFm3NhQoIqZH+WM=",
  },
  "Details": {
    /* Label for sharing channel details */
    val: "Detalles",
    translated: true,
    h: "68e/QPEuI36iIEcTWmKDrVU9KBReQ3EjFzF1F06KQMA=",
  },
  "Diapers": {
    val: "Pañales",
    translated: true,
    h: "Vr53xwIeHjIIuMymcxrQ3l1RsDE6ra+ZTFT4dbR/rlI=",
  },
  "Disable Macro": {
    val: "Desactivar Macro",
    translated: true,
    h: "k0HEkS8+oirJJHylM2fcT1D1/IqnGFVX3cGlU3d3G50=",
  },
  "Disconnected": {
    val: "Desconectada",
    translated: true,
    h: "8d3FMs2ZCPYbCLDzsVcqXsv6b5vDilOwJCEAevNsZDM=",
  },
  "Do both devices display the same image and code?": {
    val: "¿Muestran ambos dispositivos la misma imagen y código?",
    translated: true,
    h: "b4hrUuVyQY42ZQnEyYvmBHmzVT6WcHo30VshIQAx3zQ=",
  },
  "Done": {
    val: "Hecho",
    translated: true,
    h: "FlUsJYC76LgtNYLenrPiDvDgAVk3wLT14rwyk2hHYiY=",
  },
  "Download": {
    val: "Descargar",
    translated: true,
    h: "QVM3NKWnuJ19cWUaN3y9fVCbkiQTygWbOYuFMklAwNc=",
  },
  "Download Update": {
    val: "Descargar la actualización",
    translated: true,
    h: "OvekDBh71chOkbTXqPs/V/x0lNbpc668s4hyXRF5G+I=",
  },
  "Downloading update...": {
    val: "Descargando actualización...",
    translated: true,
    h: "vTHXpZeFxjQhKPwUQPCm+eHcyYR6YjSmIm4mtV/5iTE=",
  },
  "Duplicate Window": {
    val: "Duplicar la ventana",
    translated: true,
    h: "tjwFTBARBKQ5uC9Fh0zm7ag/RViV95pptJBJn9eVqHE=",
  },
  "EXPERIMENTAL Buckets Macro Maker": {
    /* 'Buckets' refers to the application name */
    val: "EXPERIMENTAL Creador de Macros de Buckets",
    translated: true,
    h: "NZPVXQ+Dw1vv0fLXY+Z4R1KiEkXjDZtSmY3tVz5L1VI=",
  },
  "Eating out": {
    val: "Comer fuera de casa",
    translated: true,
    h: "aiQggrM+Wb8WtkoJykeSDnNiCBgzGqVGc1Hvkf5Uzg8=",
  },
  "Edit": {
    val: "Editar",
    translated: true,
    h: "9+ZynTDPePvsJX4rW8Mn0wEzk0GRQ+udON01NKHVsQU=",
  },
  "Electricity": {
    val: "Electricidad",
    translated: true,
    h: "D85G++Fy1hUUGZfHiKAUcNRlXmLcdkKK7RtxnwJ110U=",
  },
  "Enable Macro": {
    val: "Activar Macro",
    translated: false,
    h: "9SWFr96CNVD21JQ30lw4cj1JCAZ44RNlKkDzQJ/RyuE=",
  },
  "Ending Balance": {
    val: "Saldo final",
    translated: true,
    h: "bwan2qqqdDloluCkgp+UPYWSAeOQk9zkaNwb2p0kUDk=",
  },
  "Ending amount:": {
    val: "Cantidad final:",
    translated: true,
    h: "0IUvXk9nogxjdL1n0VZPrxcMOUZODNXMlGrlpyXq8bI=",
  },
  "Enter Buckets License": {
    val: "Introducir licencia de Buckets",
    translated: true,
    h: "QPy/bCk+yTP2DzZAmXWbRYj2KC5QbrLq/XeXrysIX6Q=",
  },
  "Enter License...": {
    val: "Introducir licencia...",
    translated: true,
    h: "A+/eZ8qTAh97iBouJPInRkCg7F0nOkteYEBO7+lFHHA=",
  },
  "Error": {
    val: "Error",
    translated: true,
    h: "/ErBlknw7o83xx0uIDCjdDA4u5bAwnNZuhFd2GV1Zcw=",
  },
  "Error during import": {
    val: "Error durante la importación",
    translated: true,
    h: "BiI3zjvgdX5vXe4kX0mS7AvEFln+iIdMmLNX1xeQqLU=",
  },
  "Error fetching data": {
    val: "Error al obtener datos",
    translated: true,
    h: "z94B0956dECmmaMVLZFW0oZMVtA92etw+2ZqumR4K9Q=",
  },
  "Error importing": {
    val: "Se ha producido un error mientras se importaba",
    translated: true,
    h: "rekzwWcY0HRZEhFebX1fJrp4aDJ/NTPxIwWaCYAk+7k=",
  },
  "Error parsing response": {
    val: "Error al analizar la respuesta",
    translated: true,
    h: "PsIRbom+m8Y5OIEPW2rzJYVlNA2NQrZmEQnpW7Y/9KI=",
  },
  "Error running recording": {
    val: "Error al ejecutar grabación",
    translated: true,
    h: "eE9Fw8G4vQpND3fFWnfGNvtN5LxCcQQecWO6fQgBmpM=",
  },
  "Error running sync": {
    val: "Error al sincronizar",
    translated: true,
    h: "LB/WNzHp4orPsbCVEJuDzUPsQUfNRDNXw7sFnbzfguw=",
  },
  "Error updating transaction": {
    val: "Error al actualizar transacción",
    translated: true,
    h: "IEJfuOO0LRCEv2OUh8Cz02PtiJ8tqVTRzeXK5DyqBQs=",
  },
  "Expenses": {
    val: "Gastos",
    translated: true,
    h: "d6aKytFAPwPUzFOv41R0itfcMu11VdE29vkM05dnpBU=",
  },
  "Export": {
    val: "Exportar",
    translated: true,
    h: "mZJs0iE089tMZ5BWqTUBp+2aJ90wKL4act4hUPt7zkA=",
  },
  "Faint cents": {
    /* Label for application preference enabling/disabling faint cents */
    val: "Faint cents",
    translated: false,
    h: "gL5W+6nmqNfRsbiNIBEyHIX0LvI1xCYl+kDyuUwFsGI=",
  },
  "File": {
    val: "Archivo",
    translated: true,
    h: "9XpUff7TtVQbIncvgmrfzVB2gkBh35RnM1ET/HFr3k0=",
  },
  "File does not exist:": {
    val: "El archivo no existe:",
    translated: true,
    h: "RPeWW9lCHkg+d6XybADj3OH2jxrYcSOhrA3+QHEcYz0=",
  },
  "File saved: ": {
    val: "Archivo guardado: ",
    translated: true,
    h: "e6UDV8UzF5qqysQpN3OrcspjD8zPNn72zKd1CH1lFe8=",
  },
  "Find Next": {
    /* Edit menu label for finding the next match.  Perhaps use what your browser or other applications use. */
    val: "Buscar siguiente",
    translated: true,
    h: "LALfI5V4TsQo0DcGJwmNmrm3xNPtY5PmQuxB1voZo34=",
  },
  "Find Previous": {
    /* Edit menu label for finding the previous match.  Perhaps use what your browser or other applications use. */
    val: "Buscar anterior",
    translated: true,
    h: "0n6Dq5KDTxxsTAKrJE+RDdgi9ln6FyfUEPNBJ6ejZ5o=",
  },
  "Find...": {
    val: "Buscar...",
    translated: true,
    h: "aUU1pzvlZzKNgYZP2ZpPtQMImBOStbFnK33P3YwXTNs=",
  },
  "Force Reload": {
    val: "Forzar Recarga",
    translated: true,
    h: "ktBJY2UXO+2r0ZvmbQXhArN51bSTnyaNnnBNR9PQ5K8=",
  },
  "From": {
    val: "Desde",
    translated: true,
    h: "cCFAY2/zl3pq5fMwrP/2LBsrrL36SYzS+6in7mvWyvY=",
  },
  "Fuel": {
    val: "Combustible",
    translated: true,
    h: "lU9dO2a3oisfgHqd0n39sKC/wl7ymSV/XprtLhQLEiI=",
  },
  "Gain/Loss": {
    val: "Ganancia/pérdida",
    translated: true,
    h: "Kop7hNPijjGN5jXxpDmcP32CJy22tzVz1qXWTjNxVg0=",
  },
  "Getting Started...": {
    val: "Empezar...",
    translated: true,
    h: "XD8GQYEIDrNjTMPX4TjGeAbbCIEBcAONlYPd/D8Hz84=",
  },
  "Go To...": {
    /* Submenu title for navigation shortcuts */
    val: "Ir a...",
    translated: true,
    h: "AsKW6buNlZ7YlWHN1pVgNlCAzqiFIsJGL1cg8CkVGkg=",
  },
  "Goal completion:": {
    val: "El objetivo se cumplirá:",
    translated: true,
    h: "v+G5gj6B+MtHwQovNmj/BWbpnQncARZGo+swhE1fbtg=",
  },
  "Goal:": {
    val: "Objetivo:",
    translated: true,
    h: "77+E2dn/Mw53xjGhNc6irsiq1WULAiC4yIyt4NaO0DM=",
  },
  "Goal: 0": {
    val: "Objetivo: 0",
    translated: true,
    h: "rtvJnJFYA7lHYjPjGpF27/h2So3pRdrRLjfnkg78woQ=",
  },
  "Groceries": {
    val: "Alimentación",
    translated: true,
    h: "T6Kz6/FDxQkeIUJq8SVGn0T7OPdZ7B0YjPD3qHqW5p4=",
  },
  "Guide": {
    /* Menu label for the Buckets user guide */
    val: "Guía",
    translated: true,
    h: "E0TqJgLjqp65xs2CJV72FGZk5q/R8lIwaWCMnXpvTPE=",
  },
  "Health Insurance": {
    val: "Seguro de Salud",
    translated: true,
    h: "nsWIG2Kbb9OtoQkBvgkFh5MfMVNfbuGKhZypQ3uoQJw=",
  },
  "Hello!  Thanks for trying out Buckets.": {
    val: "Hola!  Gracias por probar Buckets.",
    translated: true,
    h: "0m9VvMGwLCqD3lmZ24GbzlkRxPX1kf/DsbWA9kkBWX0=",
  },
  "Help": {
    val: "Ayuda",
    translated: true,
    h: "TvUUB7AuCuFJ9IWiz2SbsjnUvYoDPZAaMPxup/rwosM=",
  },
  "Hide Buckets": {
    /* 'Buckets' refers to the application name. */
    val: "Ocultar Buckets",
    translated: true,
    h: "38YdGXFjndmgDFgXTpfUZ0F+W/D9e267YaAvzYZm4O8=",
  },
  "Hide Others": {
    val: "Ocultar otros",
    translated: true,
    h: "RpKz0G7Y8OE5oyGm0/zRffPdr7RQkneZCYrikLHIZ+U=",
  },
  "Holidays": {
    val: "Vacaciones",
    translated: true,
    h: "HTQ10E8CaKVUu71N6uLx9J+Y6naLLRX37v0oQkesV3k=",
  },
  "Household goods": {
    val: "Artículos para el hogar",
    translated: true,
    h: "UK1mJCSwg2XnGpH47pKFFD8NlrCfcd3bQb1bJt2RXEg=",
  },
  "ID": {
    val: "ID",
    translated: true,
    h: "ge86Jcy26vcv5uPFI29MfLOxHh8ctACck6nRdrl9aM4=",
  },
  "If Net is 0, the bucket transactions will be marked as transfers rather than as income or expenses.": {
    val: "Si Neto es 0, la transacción del cubo será identificada como transferencia en lugar de como ingreso o gasto.",
    translated: true,
    h: "/btREV6/jPJtrc1ERDwLUyJAowC8+v6gUB7bmJJYzT4=",
  },
  "Ignore": {
    /* Label for checkbox controlling whether an account is ignored or not */
    val: "Ignore",
    translated: false,
    h: "K8sAh2XND1/tJOuX9xTLmr1fQjUOB70cfc9GwI62fEs=",
  },
  "Ignore Account": {
    /* Undo/Redo label for ignoring an account from import */
    val: "Ignore Account",
    translated: false,
    h: "Ils1ViOchbpiaHmdalbFiGmOlTK7ck+6+BhoyvUVrqM=",
  },
  "Import": {
    val: "Importar",
    translated: true,
    h: "F3sijvfYz3oB4iz2rVHjUvNDLQs43MbXDVIr5VFA2/c=",
  },
  "Import .zip file": {
    val: "Importar archivo .zip",
    translated: true,
    h: "EmJa8O6YE7jrgmaqDUM5pIdurIYHfx1RIvVLHmqhRws=",
  },
  "Import From Web YNAB...": {
    val: "Importar de YNAB Web...",
    translated: true,
    h: "7Yteq/akhgWWCBUeqgBRz4wP6bKcirfp74uLeTQop3Q=",
  },
  "Import From YNAB4...": {
    val: "Importar de YNAB4...",
    translated: true,
    h: "z10Vp9BzEC6CkLTNtR8xywSTNYGMBbGFZMD7XUEbrVs=",
  },
  "Import Transactions": {
    /* Undo/redo label for importing transactions */
    val: "Import Transactions",
    translated: false,
    h: "0RkMBEPqgu5UHcGd2OzH7z/1vkRlIhOPxBSeollnMnU=",
  },
  "Import Transactions...": {
    val: "Importar transacciones...",
    translated: true,
    h: "PPLzf/61MKc3iWfDMTRo6ERH/TYu6TxBH2vmVbZD5Lk=",
  },
  "Import all Amazon Reports": {
    val: "Import all Amazon Reports",
    translated: false,
    h: "EwzV2gCi/cxxLtdXGeSBJLDZhAhXqomL1rdi7QPOQxA=",
  },
  "Import complete!": {
    /* Notification when an import is complete */
    val: "Importación finalizada!",
    translated: true,
    h: "L9VgrAXBV8q2Ux9I1Y2Mr/vbc6PiBI0Uxct20Hw6hwY=",
  },
  "Import file": {
    /* Button label for starting a file import */
    /* Button label for starting a file import */
    val: "Importar archivo",
    translated: true,
    h: "iaQvPnsbTKu/ItmjoC8ctwpVbyumVe15GLL8nCbe25Q=",
  },
  "Import from Web YNAB": {
    val: "Importar de YNAB Web",
    translated: true,
    h: "NyXkbdCVf1mZfbmhjqJx4M10Vz/UfGdvSHdz+G6CGKc=",
  },
  "Import from YNAB4": {
    val: "Importar de YNAB4",
    translated: true,
    h: "FJ55mGfxitbc5YeY1s6YEji8I54ILSi3sfzQALSx50I=",
  },
  "Import links broken": {
    /* Notification indicating that the links between imported transaction files and a particular account have been broken. */
    val: "La conexión entre los archivos de transacciones importados y la cuenta ha desaparecido",
    translated: true,
    h: "rLgGF32tMx7KSWu+vRLEbr+IbkedxhS8ELcYZhNCqTs=",
  },
  "In": {
    val: "Añadir",
    translated: true,
    h: "TcCPpYF7/U7vM5pPmpqvJipZt0WPk3A/vC7Ec8pfDvo=",
  },
  "In/Out": {
    val: "Añadir/Sacar",
    translated: true,
    h: "G/e+QHikQOjTM9bcDBrmUZj6ONRstDFt17sNXu9zUd8=",
  },
  "Include log file": {
    val: "Incluir el archivo de registro",
    translated: true,
    h: "rjy01ggb0uSRPn/tmrf/BVwGQiXaaSc6Nh+o92BIU3U=",
  },
  "Income": {
    val: "Ingresos",
    translated: true,
    h: "D2fJbta5d1Z5QYuRC5zzkBHsItZOOgY4FKrFJ64BvRs=",
  },
  "Install and Relaunch Buckets": {
    val: "Instalar y reiniciar Buckets",
    translated: true,
    h: "bzusTDIT831mqEwmmM59eT12mfoNMYiGPbUfoIzaCwo=",
  },
  "Internet": {
    val: "Internet",
    translated: true,
    h: "LUwTAW8PsV34HKGrTUopI7v3NFK8iWKpv5Nb8EOtU1E=",
  },
  "Invalid SimpleFIN Token": {
    val: "El token para SimpleFIN es inválido",
    translated: true,
    h: "C6BzeT0S0G+xUVzgdubtVeH39oIVS4hUaVBd2gKS3Uo=",
  },
  "Invalid categorization.  Categories not set.": {
    val: "Categorización errónea. No se ha creado esta categoría.",
    translated: true,
    h: "DykWhCxgeqeIt2i+Lc2sRdURMNIgRgohpjs83umwH9Y=",
  },
  "Invalid license": {
    val: "Licencia inválida",
    translated: true,
    h: "BfJdh6NOzurSCMGRmCP8gb1VAXUlrSSsCFIGHGXtNiA=",
  },
  "Invalid transactions preventing import": {
    val: "Invalid transactions preventing import",
    translated: false,
    h: "smXPNWsiVwsLzBZ2L/sbD9IO3ZMxKyORNgcKAa3CFRE=",
  },
  "It says:": {
    val: "Dice:",
    translated: true,
    h: "gbWdWRhcKGQzFCi8CcKy9Bmfg2oYqz1zGMHQzSU8jQE=",
  },
  "It should say:": {
    val: "Debería decir:",
    translated: true,
    h: "RjwjZtmUgFzGUxR0zMmyXh0cHzpzsbj4nk6R7tGe+i4=",
  },
  "Keep account transactions": {
    val: "Conservar las transacciones de la cuenta",
    translated: true,
    h: "SA/tgP2OPX7K6/Rztew4oai82mmt7fqOHpOuCWNrPZU=",
  },
  "Keep accounts": {
    val: "Conservar cuentas",
    translated: true,
    h: "iQX3g3XL9mIf7uX5wDrQIhLNJ464eieqHwhtKtfSuoA=",
  },
  "Keep bucket transactions": {
    val: "Conservar las transacciones entre cubos",
    translated: true,
    h: "0LwH6beBDlpdXvsVWW7nGj/5/tkz7gDk+Sm4Kltx3rQ=",
  },
  "Keep buckets": {
    val: "Conservar cubos",
    translated: true,
    h: "4lGk6/xvGOvn8z5vLVpqCLE6WQwpEoizH0LM95z1Tvo=",
  },
  "Kick Bucket": {
    /* Name of action.  Consider this "Archive Bucket" */
    val: "Archivar Cubo",
    translated: true,
    h: "3hmOuv1hNsjpQJ5cSDTlSqN4jGOGFnSPw9r0bK68RWY=",
  },
  "Kick the bucket": {
    /* Button label for archiving a bucket */
    val: "Archivar el cubo",
    translated: true,
    h: "IvzeGJ9G+Rns8Rbnal26flTFzd+yBNSEBQSptdNy8t8=",
  },
  "Kicked": {
    /* Label for list of archived buckets */
    val: "Archivados",
    translated: true,
    h: "cWApfoLlcBvoHizIFtrDQq3uwrZIYMXKO1iLMvv8szI=",
  },
  "Language": {
    /* Label for application language preference */
    val: "Idioma",
    translated: true,
    h: "H6JLSQVzeo1QvqYd6ewWITP1MyGheSF5eFCeaP6nQwk=",
  },
  "Last used": {
    val: "Último uso",
    translated: true,
    h: "G5a6Jdor9jRT/Wtcg9SfXQsvqL7VFvnVD2+gq7yT1Jg=",
  },
  "Later": {
    /* Button label for purchasing a license later */
    val: "Ahora no",
    translated: true,
    h: "wZUl6R8m08S1l0zLg0xgDG2XE1sodemTuRDbalIB4VM=",
  },
  "Learn More": {
    val: "Aprender más",
    translated: true,
    h: "8bk7nEyrz+Q0vmMisWIPVuvHR4/TeW4DhemALir6s1o=",
  },
  "Life Insurance": {
    val: "Seguro de Vida",
    translated: true,
    h: "CafgTI2ogIOqH6sg0xYnwgpDXmZ5SZQAsRY2jlTsp9c=",
  },
  "Limit": {
    val: "Límite",
    translated: true,
    h: "tmPeisQPkoz4f2EpO/u0ThQPLC5ev6RKZzs4lkgatBU=",
  },
  "Link Account": {
    val: "Enlazar Cuenta",
    translated: true,
    h: "Kq3pmMt0lHo1Or0xDzOxrUYLyhXtTVmVmcm/qGByIuk=",
  },
  "Macros": {
    val: "Macros",
    translated: true,
    h: "yo4VuLKqBNhvEBgUZKyI2WypDrv1loL/wA1qO3u4Zq4=",
  },
  "Make Transfer": {
    val: "Hacer Transferencia",
    translated: true,
    h: "Rmor5ffKqQTdDQSwA2x/hHhrr0zL7MceXGsR1vHe6b4=",
  },
  "Make it rain!": {
    val: "¡Haz que llueva!",
    translated: true,
    h: "GCU3Hru9VCit7F+BYEMKmg5U8gsc1/UZ+o5wsbMAkeY=",
  },
  "Make it so": {
    /* Button label for causing the set of pending deposits/withdrawls to happen.  Synonyms could be: "Do it" or "Run" or "Go" */
    val: "Aceptar",
    translated: true,
    h: "XRTIWjylWKAy5BW8/0C0rOSW5S1QC+CxmgmFfhi81pk=",
  },
  "Mark Cleared": {
    /* Name of action for marking a transaction as having cleared the bank */
    val: "Marcar como Comprobado",
    translated: true,
    h: "Z+NICH1z9EYN3Ub7Z9idiTw/t+QaDF9n3h9br9WhjgE=",
  },
  "Mark Not Cleared": {
    /* Name of action for marking a transaction as not having cleared the bank */
    val: "Marcar como No Comprobado",
    translated: true,
    h: "4VoXUMr4nLIoyueiB8YlIR9HFGPYBhYxJq/cqqwDLs0=",
  },
  "Medical": {
    val: "Gastos médicos",
    translated: true,
    h: "TcuCD6n7/CmRm/jdGZQLDvEdAVaJ2cDy2CahpUk9pCQ=",
  },
  "Memo": {
    val: "Nota",
    translated: true,
    h: "9yClwoAwAV0+DXl8NnkkAnlUi+Ebp2soPwN5meYKgWY=",
  },
  "Minimize": {
    val: "Minimizar",
    translated: true,
    h: "ELhkWGGY5oNKpfCzoXXW6TgkfS1nI0ZuJbWyYLmT+ro=",
  },
  "Month to Month": {
    val: "Mes a mes",
    translated: true,
    h: "VYq/DQYARQsjblXvXMijYnVbyFbLkqoRYmQ8IHhTbDQ=",
  },
  "Monthly": {
    val: "Mensualmente",
    translated: true,
    h: "r+AvQ06eYho/PFxjGz8FzHFmEfN+fjBpG0Yzic6/UgU=",
  },
  "Monthly deposit:": {
    val: "Depósito mensual:",
    translated: true,
    h: "GKlnbgfjEkmlOI0TT0pyfI30T1/0jrXjT01JZrBTpP0=",
  },
  "Months": {
    val: "Meses",
    translated: true,
    h: "wW/jCiA3sxpdbZ8SZ50pYiOvxUk2Ix8T6WB3ZXkAS4s=",
  },
  "Move Bucket": {
    val: "Mover Cubo",
    translated: true,
    h: "6lJYNJMplvVHQuXlFYBD81+4kgQQb1SwZ0s13hvlIfI=",
  },
  "Move Group": {
    val: "Mover Grupo",
    translated: true,
    h: "zSmn/C+X/cbh/GqqDMPetNfBb8iTmlwFh9Dsbc9qe9k=",
  },
  "Name": {
    /* Remote device name */
    val: "Nombre",
    translated: true,
    h: "bMXfNfAzjiMOnmM+rZmR8I9iyrRaMmSXja7cZ0eGcwU=",
  },
  "Natural gas/propane/oil": {
    val: "Gas Natural/Propano/Aceite",
    translated: true,
    h: "CMjkKDPUYAAymOaPiz0PkXS6Ec3BTRWuNZJQ34kHA5s=",
  },
  "Need ideas for getting started?": {
    val: "¿Necesitas ideas para empezar?",
    translated: true,
    h: "JLW3ar4riykgYXyTGeMCNqL+wes0evHH6RERa+qXPaw=",
  },
  "Needs": {
    val: "Necesidades",
    translated: true,
    h: "RbGrwaVYaT8OdEbNo5YBRWxoGZNYzZKjiDz7JrZVuuc=",
  },
  "Negate": {
    /* Verb meaning to make a number have the opposite sign */
    val: "Cambiar signo en la cifra",
    translated: true,
    h: "dZDdZz59qbx8gpMDeqIXTcDabOUtC1qWeUHncjptLo0=",
  },
  "Negative": {
    /* Label for choosing which value wihtin a CSV file represents negative */
    val: "Negativo",
    translated: true,
    h: "uu+tZJYytTWkRjWGnhq7P28TYmWJ58RmQcbAv4QEakg=",
  },
  "Net": {
    val: "Neto",
    translated: true,
    h: "QITdwYnhK1fVfALCDc6jQhY2jLIUBpPp0/bSHOX6p9M=",
  },
  "Net Transfers": {
    val: "Transferencias netas",
    translated: true,
    h: "4FYbJ2rCxhrWW9XBurKbS2mOSTwlxIXH/jCv5FDofeM=",
  },
  "Net Wealth": {
    val: "Riqueza Neta",
    translated: true,
    h: "XKjeMQyciPmv55LHmQ9l0ulp6PwrF1QA1lN2Pua1Kk8=",
  },
  "Net change": {
    val: "Net change",
    translated: false,
    h: "1giQvPYkVc99a5Ne06RbukR0UJUQY2ba1gRrQHE31bA=",
  },
  "New Bucket": {
    val: "Cubo Nuevo",
    translated: true,
    h: "FchHrB6weykpHiqRVxc5QKb6BEdhH4DXrc+t6RNcF8M=",
  },
  "New Budget...": {
    val: "Presupuesto nuevo...",
    translated: true,
    h: "daxIu+dqn7pfUDeB26rLQnPnAz2v5opSTHbAyBovaoI=",
  },
  "New Group": {
    val: "Grupo Nuevo",
    translated: true,
    h: "1dmXA/VlW+tjhojOGcypAy70L2wupHf9EdVjUByvpmA=",
  },
  "New account": {
    val: "Cuenta nueva",
    translated: true,
    h: "MtAiANg7ugdeUiGmiGklfBPG4T1igh1iChKeC0Mdxnc=",
  },
  "New bucket": {
    val: "Cubo nuevo",
    translated: true,
    h: "aIKjDQtVbUMjIHU/6fccfiWBUIwUBnAofdzRJTCuytI=",
  },
  "New car": {
    val: "Coche nuevo",
    translated: true,
    h: "Bp27l6cn2XdsJhTwsG7CqndX5v6581sQjpY4tMVeh88=",
  },
  "New computer": {
    val: "Ordenador nuevo",
    translated: true,
    h: "zrx1OP3GJYjfIIZU0Sa31Mm3aQjGco6OnX25VqxnLlY=",
  },
  "New phone": {
    val: "Teléfono nuevo",
    translated: true,
    h: "v6DgXaDFo1Yjq7Cyz8tC29KXNgr704sFNCnXIedKsHw=",
  },
  "New roof": {
    val: "Hogar nuevo",
    translated: true,
    h: "AzV1g+0ivzcHHsk+jxoIrHthrDJ7wuVUOfurDtwV3j8=",
  },
  "No": {
    val: "No",
    translated: true,
    h: "ssvE4uVUWmxD9vjMjw5HZnc/psg9I4B2MTtvoeNJyvY=",
  },
  "No matches found": {
    val: "No se han encontrado resultados",
    translated: true,
    h: "p4er9wMKH/YiF5PrBRKpfEzR8HINC3N0d9Iol4zqgtQ=",
  },
  "No name": {
    val: "No hay nombre",
    translated: true,
    h: "Z85JCnN1GdDw+yMwZqwW8aeKgQkvCHCkVIkIjZt7G00=",
  },
  "No orders imported": {
    val: "No se ha importado ninguna orden",
    translated: true,
    h: "BSXGKYKVKCk7fbaNo3wAigIjqpZPNfJFNISloGmngZg=",
  },
  "No refunds imported": {
    val: "No se ha importado reembolso alguno",
    translated: true,
    h: "J8bwMBTknpk9dMKKsTWTqNlncBVGlUjhrnjwN6Z7uJk=",
  },
  "Normal": {
    val: "Normal",
    translated: true,
    h: "hjYDsfwaNZVxJ5eupqHy97JfTq/YAPm+bD+Zx0zrGuU=",
  },
  "Not Transfer": {
    val: "Not Transfer",
    translated: false,
    h: "GJsf5+RmvoXTk3dewQIb90+6xb+mujI/mpSM8cmgUEI=",
  },
  "Not yet cleared": {
    /* Tooltip text indicating that a transaction has not yet cleared. */
    val: "No se ha comprobado todavía",
    translated: true,
    h: "Hf/KSsxHfxvXx0udkqgCw/QkkE8Vi5ex9pdYnX6qzEU=",
  },
  "Note": {
    val: "Nota",
    translated: true,
    h: "omcHOlFDF1aMLf9t2/tJ9R1dYEFSQC9IiPuXLXuFwEk=",
  },
  "Nothing found matching:": {
    val: "No se han encontrado resultados coincidentes con los criterios de búsqueda:",
    translated: true,
    h: "NF10b/Nmjj8holFGK7KIiaJhSb8bsL9Zt/Fa8fFy4gk=",
  },
  "Number format": {
    /* Label for budget number formatting preference */
    val: "Formato de número",
    translated: true,
    h: "RxooctpubAJr5NcKn57a5kjGBEdlPT5b2h6PUFLqxxE=",
  },
  "OK": {
    val: "OK",
    translated: true,
    h: "mMSSK7ZBxlx6MLe8r98jC5sAtmk2McVhRqslsnhu5KM=",
  },
  "Off Budget Accounts": {
    val: "Cuentas fuera del Presupuesto",
    translated: true,
    h: "EQ0I5sn/xpO55GIvIhUF8/XeTi0g5sxvvyE7TiynJDQ=",
  },
  "Off budget": {
    val: "Fuera del presupuesto",
    translated: true,
    h: "cw3ZD6kn6Mat0qZqOZP0Is9hg7xmOxrKqKCD8CIjmz4=",
  },
  "On": {
    val: "Activado",
    translated: true,
    h: "nMAfqtecKNqqRD1YLNX1F32SXJy1exEgm1QvpnZLBQQ=",
  },
  "Open Anyway": {
    /* Label for button to indicate that a budget file should be opened even though it was made with a newer version of Buckets */
    val: "Abrir de todos modos",
    translated: true,
    h: "C3I8WidkzZOLAGX0ypckK7pR7+e/M/X/YVIV1GCTYms=",
  },
  "Open Buckets Budget": {
    val: "Abrir Presupuesto de Buckets",
    translated: true,
    h: "5odppwzoA5bC5nAM3F+GDOVrAq3NfjGxrE0ZFXseCDg=",
  },
  "Open Budget...": {
    val: "Abrir Presupuesto...",
    translated: true,
    h: "67FfAce57aSIe2ncVfWeIeiiRLQQ8uuEUdDyI6UHxHU=",
  },
  "Open Recent...": {
    val: "Abrir recientes...",
    translated: true,
    h: "Uf1w3VIwUvsmKvOkQtBwsGvbRzQ5gMbEq/iyNzv95cs=",
  },
  "Open Transaction File": {
    val: "Abrir archivo de transacciones",
    translated: true,
    h: "8teUT2P/KToCDoMTqS88JNVtG9PTE/5PojtS1SGmokw=",
  },
  "Open Web YNAB Zip File": {
    val: "Open archivo comprimido en Zip de YNAB-Web",
    translated: true,
    h: "etHUkWVrpkdYsNeOHkK2wLKMkL4YYkEjNO4WwPdIPMY=",
  },
  "Open YNAB4 File": {
    val: "Abrir archivo de YNAB4",
    translated: true,
    h: "BrKgvN0SgW410a7e11V3gP+FgW67iTGIY+o/cKI1Ftk=",
  },
  "Optional message:": {
    val: "Mensaje opcional:",
    translated: true,
    h: "zVM8610w5Mn1yRIYOsmOY5ZxBd2KLIudsimw610auYU=",
  },
  "Optionally request an Amazon Refunds report": {
    val: "Optionally request an Amazon Refunds report",
    translated: false,
    h: "j+ZBzvgoK0z7wbJ25sNsy9fYopXOCUEqjbTFdt559Zo=",
  },
  "Or click to download the new version manually.": {
    val: "O haz clic aquí para descargar la nueva versión de forma manual.",
    translated: true,
    h: "J+hkW+8xOyf72R6IgkvGlwWYNzHN+/aWRtotPks3C5U=",
  },
  "Order": {
    /* Label for an Amazon order row */
    val: "Order",
    translated: false,
    h: "Ggkvvwng4JyzP26RBZ9LrevWhrb766Qq+yTffZWmefg=",
  },
  "Orders": {
    /* List of orders */
    val: "Orders",
    translated: false,
    h: "0W3ENYY4AiEiX9CGdCzK/r0XLyqTqbYi8N91GQpTqnM=",
  },
  "Out": {
    val: "Sacar",
    translated: true,
    h: "v4Oj0CQx7cmHP4mcJsZX4xMTzMzeFS81XA9gU3qOFKU=",
  },
  "Pair code": {
    /* Label for the code used to identify a pair of devices */
    val: "Código de emparejamiento",
    translated: true,
    h: "7FQzZYGJbXsqp9NdhzzjEApNUEvX9Gs6JABM8Acc2YU=",
  },
  "Passwords did not match": {
    val: "Las contraseñas no coinciden",
    translated: true,
    h: "PyUeXNOVYhNDM/De1HIPLeiwy6d+x7bkZphOo5ZqR6Q=",
  },
  "Paste": {
    val: "Pegar",
    translated: true,
    h: "n2Hnio0AcQPZejqQ+hm35GthBg0zYDNoxd8RCFRUhu4=",
  },
  "Paste and Match Style": {
    val: "Pegar con el mismo estilo",
    translated: true,
    h: "w8hRIxBBNWtXNPcYtQ4t/mTHfPF66U/mJbVpOiIDgYE=",
  },
  "Paused": {
    val: "En pausa",
    translated: true,
    h: "sMAADusAjpKEUapa7bSzeAnEAbEGpH+NKBgGh068Ifw=",
  },
  "Pending devices": {
    val: "Dispositivos pendientes",
    translated: true,
    h: "Er8hgX1RiLPLj22DHMixOaj5wHsWbUM6mL2mdSbt+Sc=",
  },
  "Permanently delete account": {
    val: "Eliminar cuenta de forma permanente",
    translated: true,
    h: "fcpAc/TcJr/ayfOjnYZmGo2BIga/mx8UyuwCbh2BRFg=",
  },
  "Personal Loan Payment": {
    val: "Pago de préstamo personal",
    translated: true,
    h: "cL5KAz7DWc3XTzI4eo3t1PaGUe16WM+dKBg2ykfpQ6A=",
  },
  "Phone": {
    val: "Teléfono",
    translated: true,
    h: "9WrpirmkhUIuWq47S+FrVpJP+prT4uInaMOfMHjxS8c=",
  },
  "Playing": {
    val: "Diversión",
    translated: true,
    h: "69elN/r6NyshRWtcjLOKso9OmdOJhvg/ix+Xy/fE+Z0=",
  },
  "Port": {
    val: "Port",
    translated: false,
    h: "u+5cy7Hv8eqnpUCJUVP2QmhGFpu7Zq4UquU/U7tcspI=",
  },
  "Possible Duplicates": {
    val: "Posibles transacciones duplicadas",
    translated: true,
    h: "ofGzHt7c7jfCo867EwNvCl3vCUJPLeLhFiC5Fmgrgp4=",
  },
  "Posted": {
    val: "Fecha",
    translated: true,
    h: "h6jjM8ytGdEj+QfDnTVzEdq+0oLSE9zd+MArY7gtjzU=",
  },
  "Preferences": {
    val: "Preferencias",
    translated: true,
    h: "g621xQsjA9sSCp1y6ZMsd3RolFp3OMEblL/gPz1k0v8=",
  },
  "Preferences...": {
    val: "Preferencias...",
    translated: true,
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
  "Prompt": {
    /* Title for prompt window */
    val: "Prompt",
    translated: false,
    h: "56HrS6R0zfyg5ruiVb/J04UP3T8O2V99V+mXHvVfEZ0=",
  },
  "Purchase": {
    /* Button label for purchasing a license */
    val: "Comprar",
    translated: true,
    h: "SfwhUMXO5ckJhwUkBjdC9n17k8zH4+hoAlFoUdOwE/g=",
  },
  "Purchase Full Version...": {
    val: "Comprar la versión completa...",
    translated: true,
    h: "+6h2Y0QTHEVui0aUhwAlCsyJp/F+S0PYKMRlQysqjrk=",
  },
  "Quit Buckets": {
    val: "Salir de Buckets",
    translated: true,
    h: "QILEHXgAk6vuNPV3rqkbn2QRZ8WKrPnAZnscp7n8WaM=",
  },
  "Rain": {
    val: "Lluvia",
    translated: true,
    h: "fqeHyOaOYnCtGAcJlJbhAR37DG6YMrsasUNtiL6z8hc=",
  },
  "Rain left": {
    val: "Gotas de lluvia restantes",
    translated: true,
    h: "+xrBpD9ex3fqQgh+YuNxsFxWyrbE8G1236f81k2whuY=",
  },
  "Recently used": {
    /* Label for list of recently used buckets files */
    val: "Recientes",
    translated: true,
    h: "tJ5cBjszrV/JztG5V1FUrgo0bfVgXfK5KB495TvGsYs=",
  },
  "Record change as transaction": {
    val: "Guardar cambio como transacción",
    translated: true,
    h: "yK0UuSf6pOl+44YBzW+tFNPHt6YYpqe88f+wQCuaHcQ=",
  },
  "Recording": {
    val: "Guardando",
    translated: true,
    h: "s1hytW8ZlaU8eRtoTfV+4aCpW5biiyifheE3t0kouUo=",
  },
  "Recurring Expenses": {
    val: "Gastos recurrentes",
    translated: true,
    h: "yDp5Agru+QzDSy583s3kjOdZbbe6X1WDfMeSNXsYlaY=",
  },
  "Redo": {
    val: "Rehacer",
    translated: true,
    h: "7buMF65dyGtKDY/ZW/Lkn7eUmdudCsdGV3KR2lYLLA0=",
  },
  "Refunds": {
    /* List of refunds */
    val: "Reembolsos",
    translated: true,
    h: "4I/iPkFh9gYRoT0f6GWUl2eb1/8WRv59q6yPjB1KOOU=",
  },
  "Reload": {
    val: "Recargar",
    translated: true,
    h: "hUVVd3tppLGqwgo2OeC3h334aTF0Y+/GHbuL/I1clYk=",
  },
  "Remote devices": {
    val: "Dispositivos remotos",
    translated: true,
    h: "Pnrxp4rS7bnapZb26P4HXC5hFardsCyTT6Idz/SFJuE=",
  },
  "Remove Categorization": {
    val: "Eliminar Categorización",
    translated: true,
    h: "b5sIQMfXAnBAqHD2NJfIgIAxclRGe5LJ7NzzF6sOruQ=",
  },
  "Rent/Mortgage": {
    val: "Alquiler/Hipoteca",
    translated: true,
    h: "sCLO0xIawRUzVC3QV8aqowoCCfwYNvtXW848jCLfT10=",
  },
  "Reopen": {
    /* Label for button to reopen a close account */
    val: "Reabrir",
    translated: true,
    h: "5497b4yxPFO2M524tL0qmmNk47Qv/aca/7n0zMEeX/o=",
  },
  "Reopen Account": {
    val: "Reabrir Cuenta",
    translated: true,
    h: "KBv9ohpTpLSanhr/AFbKdJCA0VZ1iJ0THB53Hut00v4=",
  },
  "Report Bug": {
    val: "Informar de un error",
    translated: true,
    h: "RxuE9Dh0Dadda2PtjUPD0dQ7b8aQok84Ytvw31ABBRU=",
  },
  "Report Bug...": {
    val: "Informar de un error sobre...",
    translated: true,
    h: "i17nG0QruMiCn612ogDToWB1g4xqqei691Yeh/t8MIk=",
  },
  "Report Translation Error...": {
    val: "Informar de un error de traducción...",
    translated: true,
    h: "/jSK7LcBLJ1FsOYb9ntsVYAxwAyGLLUZXlTL/zrC020=",
  },
  "Request an Amazon Items report": {
    val: "Request an Amazon Items report",
    translated: false,
    h: "P4rrDh5nDkcbT6+2mP6w2/DdQS+Hlhu7u/AEo7usOGc=",
  },
  "Request an Amazon Orders report": {
    val: "Request an Amazon Orders report",
    translated: false,
    h: "c+Qi3RJelGSlC9MybLul6oqMPosN10WOFW6k+roCtxk=",
  },
  "Required deposit:": {
    val: "Deposito requerido:",
    translated: true,
    h: "Q34JZduUI2Lx8xxjkeH/Md92nqWgEcbPFZjgf5m7tXA=",
  },
  "Restart Buckets": {
    val: "Reiniciar Buckets",
    translated: true,
    h: "TNcYWk7YxhZ0U9Q+mFMRedeWB36VsDXoYgBapDvZCgM=",
  },
  "Restart Buckets for changes to take effect.": {
    val: "Reiniciar Buckets para que los cambios surtan efecto.",
    translated: true,
    h: "WDqnfUftItQB8zteFdZrFOknNYODkXCwU89Lk/Hs/SQ=",
  },
  "Reverse": {
    /* Label for checkbox indicating that transactions should be imported in reverse order */
    val: "Reverse",
    translated: false,
    h: "asyh3SM4xzCuJwKJ77z/6mR7GortI9HKht5YBJYkHnk=",
  },
  "Run": {
    val: "Ejecutar",
    translated: true,
    h: "msfklVWTzDTqa2SaDeN2NULTRVjZPdgr6/gggE5vemI=",
  },
  "Running...": {
    val: "Ejecutando...",
    translated: true,
    h: "a2doeW7lyGRq5yq2cOD55HCblS7Hfy72/2G0cp7fk9c=",
  },
  "SQL Query": {
    val: "Consulta SQL",
    translated: true,
    h: "SNOm941c8lDAaYjd9suzSEkHFjFRo8e683rumVLZhoA=",
  },
  "Save": {
    val: "Guardar",
    translated: true,
    h: "wduD0WXtkIpIb6B4R8AA7ph724u3/Gtv27uaky6rEAU=",
  },
  "Screenshots:": {
    val: "Capturas de pantalla:",
    translated: true,
    h: "Vl/m/PU/CoPSp/t+drAAfxlQ818VKjlWKN8fsB4/+V4=",
  },
  "Search": {
    val: "Buscar",
    translated: true,
    h: "vembE+Cp1aKCKR2j2LCJD29QyiQxfGPUcGI1I8l5/5Y=",
  },
  "Search for Amazon transactions:": {
    val: "Search for Amazon transactions:",
    translated: false,
    h: "FGAckk6wNL4OYfSaGK3CYf8NLHv4tvh6bf9YErgSb5E=",
  },
  "Search...": {
    /* Menu label for search page */
    val: "Search...",
    translated: false,
    h: "TOtty3gn23+64CNUlKn+bNe2V0f4xfUBGLHQ/Pw8XKQ=",
  },
  "Search:": {
    val: "Buscar:",
    translated: true,
    h: "OHBHBOVnuMjmjWHZURDrna8FWv+geQYMQuobRo4tkq0=",
  },
  "Searching...": {
    val: "Buscando...",
    translated: true,
    h: "7gAp07Zv3EjrgHoWJ04wEdRefy/aQ0zT8Y2EgQrnbHo=",
  },
  "Select All": {
    val: "Seleccionar todo",
    translated: true,
    h: "tLJuQPindRFUyvGGdMLJbBHcVpAODsfT5p2gDnpB/Oo=",
  },
  "Self debt": {
    val: "Auto deudas",
    translated: true,
    h: "zRWPLHqBTGcGqHHBHWdXpN2eOUUhRhvCyeAccFlR9Z4=",
  },
  "Send Report": {
    val: "Enviar Informe",
    translated: true,
    h: "aLgG0qubuw0p0tGIUYKjgxecVsL0e3AKvQ5+W2JZg18=",
  },
  "Services": {
    val: "Servicios",
    translated: true,
    h: "Y5+GuNZXfFSynDsHvAY8cr0RqU+moaHZNmOk2eQrsNs=",
  },
  "Set Mapping": {
    /* Undo/redo label for setting the mapping of a file import */
    val: "Set Mapping",
    translated: false,
    h: "0VIJHYOJcEvpUbDh2MFyEtmMxHbY10WbgLG0YVeRSng=",
  },
  "Settings": {
    val: "Ajustes",
    translated: true,
    h: "g5CfgkRu6cPoKgSs58kE8baksjDRuXC1WTLWKVn75z0=",
  },
  "Share from this computer": {
    val: "Compartir desde este ordenador",
    translated: true,
    h: "sXtF785DDyaMA5+7grS0FR9Xf+cCqlpKgGWZAi6By8g=",
  },
  "Shared budgets": {
    /* Label for section describing which budget files a remote device has access to */
    val: "Presupuestos compartidos",
    translated: true,
    h: "UQn60QixD7w25g/NX5rq2c4M8zrsWvc6m5TUNcT82oI=",
  },
  "Sharing": {
    val: "Compartiendo",
    translated: true,
    h: "+wdr1d9w83UkBcXqGDOkGlmDhl24ktIp0it2O14f4kE=",
  },
  "Show All": {
    val: "Mostrar todo",
    translated: true,
    h: "Kng6HqlojyhuqEK6kaB3KPtAs1w0LcpFWkJYrscali0=",
  },
  "Show Log Files...": {
    val: "Mostrar archivos de registro...",
    translated: true,
    h: "In00T9z1A4xO6nLu8zAU5s3UzH3+IcK4XjRvrT9CGMs=",
  },
  "Show uncategorized": {
    val: "Mostrar transacciones sin categoría",
    translated: true,
    h: "ZHhB69+qL72sD+upbAXLXIDMlEWXgSbwb5RupMV5K0c=",
  },
  "Sign": {
    /* Noun referring to the sign of a number (positive or negative) */
    val: "Signo (+/-)",
    translated: true,
    h: "uw6BT7o9vlsgV2TpwBFx/MfF1npvA+6ru4lXXcSzoCM=",
  },
  "Sign in to the YNAB website, click My Budget then Export Budget.": {
    val: "Identifíquese en la web de YNAB, pulse en 'My Budget' y luego en 'Export Budget'.",
    translated: false,
    h: "etFjjZd2+flhi9J3CbiPL8eb4Gc3jHFAKkMPuQZmxlA=",
  },
  "SimpleFIN Connections": {
    val: "Conexiones de SimpleFIN",
    translated: true,
    h: "yzXdwvSSNy+FUFHW5+bAqRMq+j6krsNUFb/uFreKPNY=",
  },
  "SimpleFIN client unconfigured": {
    /* Error when SimpleFIN is not configured */
    val: "Cliente SimpleFIN sin configurar",
    translated: true,
    h: "KYsU2dr94wbYwGx9gIb2sR6Hhmm8Eu4AYBSKf4nnWMU=",
  },
  "Since some buckets have negative balances, this payment balance may not be what you actually have available for a payment.": {
    val: "Dado que algunos cubos tienen saldo negativo, el saldo puede no corresponderse con el que en realidad esté disponible para realizar el pago.",
    translated: true,
    h: "DcT2jCu9H9VSH4esyPHz75dbhviMkM3N/TD1N6PtYyM=",
  },
  "Skip This Version": {
    val: "Saltar esta versión",
    translated: true,
    h: "YnC7GSI4QITirt1GGV/Tc1FvTbJYICkEeF3zj4u4eak=",
  },
  "Skip invalid": {
    /* Label for checkbox which controls skipping invalid transactions during import */
    val: "Skip invalid",
    translated: false,
    h: "sKPi3ongM5VPkq2aFjBN1FX9/N/KiThGWd54qaHNfi8=",
  },
  "Speech": {
    val: "Voz",
    translated: true,
    h: "i4Qm95bH8zVEbjpkUi7jvQiLtDzGkW9z90XEkiglzHM=",
  },
  "Spending Money": {
    val: "Dinero para gastar",
    translated: true,
    h: "7mLvCPVxhYqWXYW8EcSN4N6vyUtQqT4PnR0iC1ucTtY=",
  },
  "Start Over": {
    val: "Empezar de cero",
    translated: true,
    h: "hlKNxy6ZDz4ny/qpQfkv6FwXDangtq2ECEo+ICgEbJs=",
  },
  "Start Speaking": {
    val: "Iniciar locución",
    translated: true,
    h: "v8sFOpEAoczjEjGparKZylHWHoxHMVQriwuhJaec2rY=",
  },
  "Start with a template": {
    val: "Comenzar con una plantilla",
    translated: true,
    h: "HbSWD1rCMlssQIfvhdN+qwtdXT/k2Rq4+lTObtGpWbo=",
  },
  "Status": {
    /* Connection status of remote devices */
    val: "Estado de la conexión",
    translated: true,
    h: "fu712YZJJBbNWIpP5QaYV+fcz5rcN4DkkaOGdL/X6hk=",
  },
  "Step took too long": {
    val: "Este paso está durando demasiado tiempo",
    translated: true,
    h: "Py3rsk0guEg0d8Ce9Lbfwzf1zP7E4Z8YPSOu165mOc0=",
  },
  "Stop Speaking": {
    val: "Detener locución",
    translated: true,
    h: "Pme2/qME7bKdVrHTIEBQYt1Fu/SXRNGyy6sLBfKpqqk=",
  },
  "Student Loan Payment": {
    val: "Pago de préstamo de estudios",
    translated: true,
    h: "j83e9PkiJgq0J5iPOaku/mbjw9H3KtXBaDV4ntsQktk=",
  },
  "Submit": {
    val: "Enviar",
    translated: true,
    h: "/plzMiu0xhKwtFcT4VqbJMoCd2dB03dB9EJhijEA284=",
  },
  "Success!": {
    val: "¡Éxito!",
    translated: true,
    h: "6NxF/uD6sOEPkEbPFOHdBKRxj0ZXVbmnPkRXNJDy0zs=",
  },
  "Successfully imported Amazon Items report": {
    val: "Successfully imported Amazon Items report",
    translated: false,
    h: "zcIlaWv/ZpEjOL5xQHbD/Q8+nNhqDbq4oJsVr0hLKcI=",
  },
  "Successfully imported Amazon Orders report": {
    val: "Successfully imported Amazon Orders report",
    translated: false,
    h: "jD2nczKNctIdPeGX20WLyUGOlIl/MbKqKpP5hCxbtt8=",
  },
  "Successfully imported Amazon Refunds report": {
    val: "Successfully imported Amazon Refunds report",
    translated: false,
    h: "cL1VAhdyv9ML3nJT0QY3lg6QrxkJ/UQf0gbcokIDJGU=",
  },
  "Swap NAME and MEMO": {
    /* Label for checkbox that will swap the value for NAME and MEMO when import OFX files */
    val: "Swap NAME and MEMO",
    translated: false,
    h: "ayF7yBQJox0msQ75+rZt4xxanK31lYhwEoynkOsepjc=",
  },
  "Sync": {
    val: "Sincronizar",
    translated: true,
    h: "zJAmFTCwHue7APF8kCb39YCX8J17Tsy3mxyhpQQhge8=",
  },
  "Sync complete": {
    val: "Sincronización finalizada",
    translated: true,
    h: "e2VXpLTi1mhVSVqDkExwdM5j8PhfW0MHeOqBwabU4Zo=",
  },
  "Sync has not yet been set up.": {
    val: "No se ha configurado todavía la sincronización.",
    translated: true,
    h: "B5XIfqqMdt0gMHz2zsZr9GTj9vSRAS5R2akgGce+fsg=",
  },
  "Synced balance": {
    val: "Saldo sincronizado",
    translated: true,
    h: "yyCVeQRle/vbcZ1/QyVYtL+ZmyQ5WanHCYKZpJqFd6o=",
  },
  "Syncing...": {
    val: "Sincronizando...",
    translated: true,
    h: "kuwg7vpvp082IqBtRakekOVu7bqB4PYxhnFVsoBDt/g=",
  },
  "System default": {
    /* Option for Buckets language preference */
    val: "SIdioma del sistema operativo por defecto",
    translated: true,
    h: "A9haWZjRR5Su694Q278jjqi/xmRweA6I6et1Q9L3ahI=",
  },
  "Target date:": {
    val: "Fecha objetiva:",
    translated: true,
    h: "InmNQoNHlJkDpjvEB+J1XPqDWRqnfNIUwTQ86iNiOGc=",
  },
  "Test Toast": {
    val: "Prueba de notificación",
    translated: true,
    h: "5SbiliirLaAKLdgRThX+cO2RwGuC87t3Z1O0xT2WsAE=",
  },
  "There has been an error.": {
    val: "Se ha producido un error.",
    translated: true,
    h: "viN5uLRSpgzhvoD9KO9g1cr7ihLQ0Men9LiUpy9RcwE=",
  },
  "There was an error.  Maybe try again?": {
    val: "Se ha producido un error.  ¿Debería intentarlo de nuevo?",
    translated: true,
    h: "l+W2GSV3tl8Gx19ZW+wOCziBj5/UeMCVO8tvh4P7LEo=",
  },
  "This budget was upgraded for a newer version of Buckets.  Using it with this older version may not work.": {
    val: "Este presupuesto ha sido modificado por una versión más moderna de Bucket. Si lo abre en una versión más antigua, tal vez no funcione.",
    translated: true,
    h: "SJjFg0juSV/ZrJcAQJDMXveLnxwSQT4nfJiyMQFkbMw=",
  },
  "This device's name": {
    val: "Nombre de este dispositivo",
    translated: true,
    h: "eTNSTczX466LRmFxprC4rfZhDomB7x4xWYltPshnAB4=",
  },
  "This is a special group for all the buckets without a group.": {
    val: "Este es un grupo especial en que se incluyen todos los cubos que no lo están ya en otro.",
    translated: true,
    h: "QP5fEqFwlvHWJyjzrIWUJFlMvhFDxxSsl1vnej/p30I=",
  },
  "This tool will delete data to make it easy to start over with your budget.": {
    val: "Esta herramienta eliminará los datos para facilitar el comienzo desde cero en su nuevo presupuesto.",
    translated: true,
    h: "+40oxGj2jDLNe4ggunYHsgL/9aQz0pw5IeRM5VlYIIU=",
  },
  "Thousands separator": {
    val: "Carácter separador de unidades de millar",
    translated: true,
    h: "lYK3D4dxDxbFalJtMHHtc/++mciDmIUg9A3tgDiUkzs=",
  },
  "To": {
    val: "Hasta",
    translated: true,
    h: "syFKIORaeu0FezL85oAbo76XXa8k7bxITMbNowi8ba0=",
  },
  "Toggle Developer Tools": {
    val: "Alternar herramientas del programador",
    translated: true,
    h: "IYSSUL9ezB58nRuajYVa+zH4ucrmXQOB92zA7sDlrJc=",
  },
  "Toggle Full Screen": {
    val: "Alternar pantalla completa",
    translated: true,
    h: "2ZRq+R5E0Cp4QI+y5jCefU1IOiYvNWLrN/iiJq6hGr8=",
  },
  "Tools": {
    val: "Herramientas",
    translated: true,
    h: "mPsch0seV0ZNaU+41My/wS+DkAGfYqzWpPlJpfT1sBs=",
  },
  "Total amount your buckets expect each month.": {
    val: "Cantidad total que requieren los cubos cada mes.",
    translated: true,
    h: "UtK2gxh+N9D/p1G6dLyhcKMP5Df5XCyEp0jM0c+qoUw=",
  },
  "Transaction": {
    val: "Transacción",
    translated: true,
    h: "G0gRZS6Zq1VoQqtY+L8fY3ogdqSl/OAoTurOZ4L480Q=",
  },
  "Transactions": {
    val: "Transacciones",
    translated: true,
    h: "4+yGUer/b71cfxTdeUa5QbonqN9ezC8Eii7KO22Ety0=",
  },
  "Transactions to review": {
    val: "Transacciones a revisar",
    translated: true,
    h: "fcauVC7MkwNPXVHbfBl427k53jL2beDDx711UkVI5tg=",
  },
  "Transfer": {
    val: "Transferencia",
    translated: true,
    h: "B5GGqjnE8KOjYJjhsFV7zs5TGmGmVPqjihzMVxHJ3sI=",
  },
  "Transferred": {
    val: "Transferred",
    translated: false,
    h: "dMUnHOi8B6xpQztmwKOsEkjhvkEKLHaefSUJ0oR9ZEs=",
  },
  "Trial Version": {
    val: "Versión de prueba",
    translated: true,
    h: "GtZIXrHILA84HlpKlxi3BErHwR7WIYkQ/e5BE0Fiaxg=",
  },
  "Tuition": {
    val: "Matrícula de estudios",
    translated: true,
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
    val: "Desarchivar",
    translated: true,
    h: "P5Z1ij4jmS06jNOQiHymi+/D+uYJktoalTdw+AHGukM=",
  },
  "Un-kick Bucket": {
    /* Name of action for undo/redo labels (i.e. Control-Z will "Undo Un-kick Bucket") Consider this the opposite of "Archive Bucket" */
    /* Name of action.  Consider this "Unarchive Bucket" */
    val: "Desarchivar cubo",
    translated: true,
    h: "7WOQPepkeOH+dwwSbEjomy0amoqY5JtvtlyCSG02c1Q=",
  },
  "Unable to claim access token": {
    val: "Ha sido imposible recabar el Token",
    translated: true,
    h: "Gao95RuT9JvhdAoZ5winV9os7iMaPIex3Vq9CMSjhzs=",
  },
  "Unable to open the file:": {
    val: "No se puede abrir el archivo:",
    translated: true,
    h: "MxbgnQR4Cyi549ltzzIDDAI1qRGqoeRm0zOApQMS2DY=",
  },
  "Uncaught Error": {
    /* Title for error reporting dialog */
    val: "Uncaught Error",
    translated: false,
    h: "8shOzic2CgRpaIcNhv/44tsVBDgSItWp3ZbdihMYp9E=",
  },
  "Uncleared": {
    /* Label for sum of uncleared transaction amounts */
    val: "No comprobados",
    translated: true,
    h: "1GBgqlG+RCS8dFTG2z15jLFFd4PCVVXDefXwBRq0oTs=",
  },
  "Undo": {
    val: "Deshacer",
    translated: true,
    h: "Z1A2vTdYwfdLsWS25iSchnHOHa1VfbQg7u8MDGHk4yo=",
  },
  "Unexpected sync error": {
    val: "Se ha producido un error inesperado al sincronizar",
    translated: true,
    h: "78kYsQMTfGS8BNaZVuqYaRojJlTpcmN6CF9PQKKO0ME=",
  },
  "Unknown category": {
    val: "Categoría desconocida",
    translated: true,
    h: "bK4teMnFOuofJ4sX76ozAla50yDaLbvb5pCj+New5f4=",
  },
  "Unlinked Accounts": {
    val: "Cuentas no vinculadas",
    translated: true,
    h: "BPAjsiEkATiwSf9f6kde3yZwSmmyiPDLiZ7Rr+3Zv/A=",
  },
  "Unregistered Version": {
    val: "Versión sin registrar",
    translated: true,
    h: "x9ekMClqI57T6jREU5VJurBCzlD+hBNJ8pHNQ0zMB1U=",
  },
  "Update Account Balance": {
    val: "Actualizar Saldo de la Cuenta",
    translated: true,
    h: "iwKjdHzqHPwoupXiUwrVL1tX4QfO//taXOPXFVtWRVE=",
  },
  "Update Account Name": {
    val: "Actualizar Nombre de la Cuenta",
    translated: true,
    h: "xcyLhnHNOTDgJsYGhaelbAmXYam4HWMfD5mQiTiZJ50=",
  },
  "Update Available": {
    val: "Actualización disponible",
    translated: true,
    h: "FKOD6i3t69T8rvTwVJ5VSnLfkQPBcceuuk2X4ZsNKMY=",
  },
  "Update Bucket Name": {
    val: "Actualizar Nombre del Cubo",
    translated: true,
    h: "Oa+1EZtc4RTtPYyk5LflMMlQq/esZ3qvTgbSLiKIl4E=",
  },
  "Update Bucket Type": {
    val: "Actualizar Tipo de Cubo",
    translated: true,
    h: "wt5F9WSIpGlUsGaPnhSJlLYk0qraymNHDw0bYzbHlIE=",
  },
  "Update Color": {
    val: "Actualizar Color",
    translated: true,
    h: "6QBa9YrDFsWCiiS/PMj7r+cTmIgMmmqjTnv9x4l90ic=",
  },
  "Update Currency Symbol": {
    val: "Actualizar Símbolo de Divisa",
    translated: true,
    h: "5ni7IpG/zzlc/uAhhkduQ99K/5B9ui5INpaxZw7QTrs=",
  },
  "Update Goal": {
    val: "Actualizar Objetivo",
    translated: true,
    h: "S3dt9ahT1yTXTCP2uHqiTMkyPUmAvAHvsCeGNa+NL1E=",
  },
  "Update Group Name": {
    val: "Actualizar Nombre de Grupo",
    translated: true,
    h: "/pmHZLX1mkRHtus8eVyojidhAUe6BocaSkf5dGoIrSM=",
  },
  "Update Macro Name": {
    val: "Actualizar Nombre de Macro",
    translated: true,
    h: "61srDLhVLo6bOo+SbnJ0rMbhNhXXRxEjgP3/nFafMKI=",
  },
  "Update Monthly Deposit": {
    val: "Actualizar Depósito Mensual",
    translated: true,
    h: "rFQ5lKjSNpQyyptg2Y+a4LQ6jwa1xWjKarMapXiD1/8=",
  },
  "Update Name": {
    val: "Actualizar Nombre",
    translated: true,
    h: "fTqm8NUcvzaYHnGFDmVhLePEd/TFNPhUDzSYIIerjNc=",
  },
  "Update Note": {
    val: "Actualizar Nota",
    translated: true,
    h: "h4A+jnQW9OrS0wVVoQ9OEJ5I6/h4p7IWrKvN+uSXe4I=",
  },
  "Update Number Format": {
    val: "Update Number Format",
    translated: false,
    h: "98Qu07eWAHjS80FuHQajrVMMtd0jq5Zq8rRKuDQEZEU=",
  },
  "Update Target Date": {
    val: "Actualizar Fecha Objetivo",
    translated: true,
    h: "SEac1rQopyHALPSWU85qYV3GE0x9i2OGDB+JYnVID8A=",
  },
  "Update Transaction": {
    val: "Actualizar Transacción",
    translated: true,
    h: "aMF18BJOMjuVOInpbGKf/3jyTE1qYzq4oHzb3sBVcWw=",
  },
  "Update account balance": {
    val: "Actualizar saldo de la cuenta",
    translated: true,
    h: "GQWvUamqQOyoaXm16AiGtHme6kW171erNK5pa4vgDIE=",
  },
  "Update balance": {
    val: "Actualizar saldo",
    translated: true,
    h: "XSg0Q5Q7j+G+HNjn3YJOakbNLSjTNcem3BFbw6fTDI8=",
  },
  "Update balance without a transaction": {
    val: "Actualizar saldo sin introducir transacción alguna",
    translated: true,
    h: "thUs8btJm84m3sFUOg0QZBXmDfqGOrDhsYqwJ31BIAo=",
  },
  "Update downloaded.": {
    val: "Actualización descargada.",
    translated: true,
    h: "DO2vE3TgW3xjiD8ZaOWeScL3qWCyiFPK8GENQ9NosYw=",
  },
  "Used in future": {
    val: "Usado a futuro",
    translated: true,
    h: "O0zGsqv23d44/pWJqCSt+qkDtG/nBrBI2W0aRA9XoDw=",
  },
  "Using this tool can ruin your budget file.  Make a copy of your budget if you're worried.": {
    val: "La utilización de esta herramienta puede desajustar su presupuesto. Haga una copia de seguridad si le preocupa.",
    translated: true,
    h: "TCvA81ztNxeLhpVdiYrF4RLEGEp5FO3YWCgfOyjnjFc=",
  },
  "Vacation ": {
    val: "Vacaciones ",
    translated: true,
    h: "Buf8KjuQKnfaA4c2qPDVm8FQgYWJUfiCYYkPAnsIIBw=",
  },
  "View": {
    val: "Visualización",
    translated: true,
    h: "paIseOhKCT2+NaUBPKk98vQB/lphf7jIGeERV77doDg=",
  },
  "Want": {
    val: "Deseo",
    translated: true,
    h: "lV/eDqkplJ/XKjHyCSE47yOWOl3t3Igj9S559wDKMZI=",
  },
  "Wants": {
    val: "Deseos",
    translated: true,
    h: "AOckwUko9CT2K8gxtu/GHFhjivPPgTDgQSjCNSujUV4=",
  },
  "Warning: Doing this will use rain you don't have and could steal rain from future months (if available).": {
    val: "Peligro: Hacer esto supondrá usar lluvia de la que no dispone y podría emplear lluvia de los meses futuros (si está disponible).",
    translated: true,
    h: "YR+S0SMnFz4+K5vpXrMzMfSaBE5mHBrhQTalzgI0/7U=",
  },
  "Water": {
    val: "Agua",
    translated: true,
    h: "BOL+IhrDsm6ooEqGpFPieQoyXrWpV6LvKh0DvkAJ2bw=",
  },
  "Web YNAB Export": {
    /* Label for YNAB export file type */
    val: "Archivo exportado de YNAB Web",
    translated: true,
    h: "tW4h/MIfunRbmUN+oxQ8Sa2pKJQgML5XIcQkPzclpEM=",
  },
  "When \"On\" this macro will be run during a normal sync.": {
    val: "Cuando \"Activado\" esta macro se ejecutará al mismo tiempo que la sincronización.",
    translated: true,
    h: "HnJ7qVSPXxIg3/lygw1Ln/VvBMBs8roJwXlCpP2KnMw=",
  },
  "Window": {
    val: "Ventana",
    translated: true,
    h: "qjw17TPhgeX5msjicdTljyCEeBLFbQvz/oyOunMLJnQ=",
  },
  "Year to Year": {
    val: "Año a año",
    translated: true,
    h: "YBGCdB/QACmMM/QS2qMrGlC8qtfWz9bhue7sgDaIRHg=",
  },
  "Year's Supply": {
    val: "Suministros anuales",
    translated: true,
    h: "E5VfnhjiYed/e2Ezg+RdChSIz6cjwl9oyRzpO1rjl0I=",
  },
  "Yearly": {
    val: "Anual",
    translated: true,
    h: "LjMZRIZX3jdNUpbBBgqpPR9Az6c4sBWYUwd2WDVb9Rw=",
  },
  "Years": {
    val: "Años",
    translated: true,
    h: "9bCZk+mcGxconx1JMhBZKdnRo4id89h4UiucsvMRAng=",
  },
  "Yes": {
    val: "Sí",
    translated: true,
    h: "GE/aXJgLnZyzdfQqUogXxiNfvU95d1qAGPrlr8vfKmM=",
  },
  "You are running the latest version!": {
    val: "Buckets está actualizado!",
    translated: true,
    h: "hShy87A6GAhRqqtK+8VdVeGD70zA64iiV0/SwectQ0I=",
  },
  "You can do math in all number inputs, not just here in the calculator.": {
    val: "Puedes llevar a cabo operaciones aritméticas en cualquier campo numérico, no solo en la calculadora.",
    translated: true,
    h: "dn2W/ktTrcwSzYNSq6IQL7Sl2k8lxZQRsFehzG9Mf7g=",
  },
  "You don't have any recurring expense buckets yet.": {
    val: "No tienes ningún cubo para gastos recurrentes todavía.",
    translated: true,
    h: "nq2IDCqs8m0MQJ5lO2TU1cnlj9nP1vwIMWMqi0WGOjk=",
  },
  "You have no closed accounts.": {
    val: "No tienes cuentas cerradas.",
    translated: true,
    h: "8BZG+UdW1Rrd/+2zFNv7SskiNpD6DtlNa8LwQulqX5s=",
  },
  "You haven't kicked the bucket yet...": {
    val: "Todavía no has archivado ningún cubo...",
    translated: true,
    h: "mtaAsLJ7BgWZcbIkRmZ4ZPSSRGXj6vJ2H8+diLhIba4=",
  },
  "You must backup to a different file.": {
    val: "Debe realizar la copia de seguridad indicando un tipo de archivo diferente.",
    translated: true,
    h: "LAt5pxdaPsRHDU6bS2Cu1aEDIQ2oZAMw46Pa7H6pc5o=",
  },
  "Your email address:": {
    val: "Su dirección de correo electrónico:",
    translated: true,
    h: "/ip+dZCEKXdLQFW5CAt/fB8OBf/rD+67pz8etOXlJXc=",
  },
  "Zoom": {
    val: "Zoom",
    translated: true,
    h: "Zjzswxbrkbj1TLPOYCtimoyh/aJlkF/mxeghbzdheSs=",
  },
  "Zoom In": {
    val: "Acercar",
    translated: true,
    h: "p3yHl1qkGVfRDPsLKitBuZhRJIDaTy3fV/vbWqOzo24=",
  },
  "Zoom Out": {
    val: "Alejar",
    translated: true,
    h: "hRo1uzcSNStVll7ef2xHOB6PqFh+q7Sg/VHiGcK4M8M=",
  },
  "account-in": {
    /* Label for amount put into an account */
    val: "Añadir",
    translated: true,
    h: "TcCPpYF7/U7vM5pPmpqvJipZt0WPk3A/vC7Ec8pfDvo=",
  },
  "account-net-amount": {
    /* Label for net value of amount in - amount out for an account */
    val: "Neto",
    translated: true,
    h: "QITdwYnhK1fVfALCDc6jQhY2jLIUBpPp0/bSHOX6p9M=",
  },
  "account-out": {
    /* Label for amount taken out of an account */
    val: "Sacar",
    translated: true,
    h: "v4Oj0CQx7cmHP4mcJsZX4xMTzMzeFS81XA9gU3qOFKU=",
  },
  "account-type": {
    val: "Tipo",
    translated: true,
    h: "xE96uLvSSFjRvRq5lfIcX1LGpnGQeyntOksJQ0X3CyE=",
  },
  "accounts.name_placeholder": {
    val: "Desconocido",
    translated: true,
    h: "UwMHboI9q49SZQkwMN8ps9zBi6YOSdtwakjLJwudtyA=",
  },
  "action.New bucket": {
    val: "Cubo nuevo",
    translated: true,
    h: "aIKjDQtVbUMjIHU/6fccfiWBUIwUBnAofdzRJTCuytI=",
  },
  "action.New group": {
    val: "Grupo nuevo",
    translated: true,
    h: "054RU7JImk6Pavh27xHA9CgGIgjmP0dYIgXez2UWx34=",
  },
  "action.ignore": {
    val: "Ignorar",
    translated: true,
    h: "K8sAh2XND1/tJOuX9xTLmr1fQjUOB70cfc9GwI62fEs=",
  },
  "action.link-account": {
    val: "Vincular",
    translated: true,
    h: "unfAYQpjuyuTjjRCodr+S+jNjRmz3nahjZ91u/j5HfE=",
  },
  "action.report bug": {
    val: "Informar de un error",
    translated: true,
    h: "RxuE9Dh0Dadda2PtjUPD0dQ7b8aQok84Ytvw31ABBRU=",
  },
  "bucket.detailslabel": {
    val: "Detalles",
    translated: true,
    h: "68e/QPEuI36iIEcTWmKDrVU9KBReQ3EjFzF1F06KQMA=",
  },
  "bucket.transfer.help": {
    val: "Una transferencia es una transacción de un cubo a otro. Si la transacción no es un ingreso ni un gasto, es probablemente una transferencia.",
    translated: true,
    h: "dh5nslkaB1wNR4tJ5zAn6Hms+9oJqBDmAIR5k6WE6iY=",
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
    val: "Desde aquí puede añadir dinero y también sacarlo de cada cubo.",
    translated: true,
    h: "FVxtuv3HRHdU7Snx+P3YYxcSngOkrcKyS5mng6AB8gE=",
  },
  "bucketrain.help": {
    val: "Cantidad que los cubos quieren cada mes. La caja muestra cuanto han recibido ya.",
    translated: true,
    h: "3dbOFkUiGaEoD01CP7kIWDQHgUbULWexjdEKdEAF3sA=",
  },
  "buckettype.deposit": {
    val: "Gasto recurrente",
    translated: true,
    h: "3HXotB9ZHFm14ArdM0RfCT0merw8+KuXthbzotnPRec=",
  },
  "buckettype.deposit-date": {
    val: "Ahorra Z cada mes hasta una fecha",
    translated: true,
    h: "zdWdEX9eN5qpFDboBF+wi9EIguwYsB9nQCzN9GjrxMc=",
  },
  "buckettype.goal-date": {
    val: "Ahorra X antes de la fecha Y",
    translated: true,
    h: "+boZHIer4ggkvJ8A5cSl1EVyWRwKigC9UkBFn4WSEdg=",
  },
  "buckettype.goal-deposit": {
    val: "Ahorra X depositando Z cada mes",
    translated: true,
    h: "BUzPSZsbi+lN/3tb6eF63oa7CEzS94r6ee5jf5G7inA=",
  },
  "buckettype.plain": {
    val: "Cubo normal",
    translated: true,
    h: "AqvTaZK8lidyI8PZ9JXBBQABazz8uxM+uQM6iEuyO6w=",
  },
  "budget-file-type-name": {
    val: "Presupuesto de Buckets",
    translated: true,
    h: "g2jeytcuhPOlEo6R2OlTzT3vNdE7sVWGnXuffEioq4c=",
  },
  "click-to-buy-license": {
    val: "Click here to purchase a license.",
    translated: false,
    h: "SG8574IFjT8lV9ejaxh3+l1/7egqVVKC59elWkHN3IU=",
  },
  "connection-instructions-v2": {
    val: "Proporcione el siguiente enlace URL al otro dispositivo",
    translated: true,
    h: "thD/PduOJDWrYRJ+keTXRs1XF7c7vgIpmmPpmtO/B7M=",
  },
  "daterange.all": {
    val: "Todas las fechas",
    translated: true,
    h: "Fz1lBhxlewLJ5bSKTiIzzaW3CAtAPxkUWWKU0BVqgAA=",
  },
  "daterange.from2monthsago": {
    val: "Últimos dos meses hasta hoy",
    translated: true,
    h: "zb4vtJXSL+UcXZTjSbkQueS8khVvJO2MDoFKKPuuDPM=",
  },
  "daterange.from3monthsago": {
    val: "Últimos tres meses hasta hoy",
    translated: true,
    h: "4957XI6fjMtXcCqj3IRSUSQzX4ZlEucDTuwgu2krTLw=",
  },
  "daterange.fromlastmonth": {
    val: "Último mes hasta hoy",
    translated: true,
    h: "tIBgx9VgMgV21a9XhH7L7TIe/PfdgcW3fdfGaGOeVMo=",
  },
  "daterange.thismonth": {
    val: "Mes actual",
    translated: true,
    h: "jqSPxB9W3Xqmvb/7MIrwKgcCTUR0zgU3qqTqJFET1e0=",
  },
  "debt-bucket-explanation": {
    val: "Este es un cubo para los pagos extraordinarios de deuda.",
    translated: true,
    h: "+XZJ0Nl0JR5/xu1lf1csGge9E19plZmcKQmuaBg44aI=",
  },
  "debt-payment-bucket-name": {
    /* A likely account name might be "Credit Card" or "Chase VISA".  This is the name of the bucket that holds the payment for the debt account. */
    val: (account_name:string) => `${account_name} Payment`,
    translated: false,
    h: "QvSzok8BqSPb+A0q+87lqp62Rk+JFQhIno38JQyUfYg=",
  },
  "default account name": {
    val: "Ahorros",
    translated: true,
    h: "zCYN8vtLT3Hhb9CbDDSL2xOOjqhzmmhMa5yWDTR7bCE=",
  },
  "default new bucket name": {
    val: "Cubo nuevo",
    translated: true,
    h: "FchHrB6weykpHiqRVxc5QKb6BEdhH4DXrc+t6RNcF8M=",
  },
  "default new group name": {
    val: "Grupo nuevo",
    translated: true,
    h: "1dmXA/VlW+tjhojOGcypAy70L2wupHf9EdVjUByvpmA=",
  },
  "enter-license-prompt": {
    val: "Por favor, ingrese su licencia de Buckets abajo.",
    translated: true,
    h: "xbsLH9dKhhcdpY6+CFD5E3/4IdnZZk49WmeisyuQ/oo=",
  },
  "error-detail": {
    val: "Si este error sigue ocurriendo o no tiene sentido, informe un error o hable con nosotros.",
    translated: true,
    h: "10Kk29tlHpBnhcTf7RRMfq1OZPGZgvPPguRlInaLNoY=",
  },
  "getting-started-link": {
    val: (clickhandler) => {
          return <span>¿Primera vez usando Buckets?  Echa un vistazo a <a href="#" onClick={clickhandler}>los vídeos de inicio.</a></span>
        },
    translated: true,
    h: "9NGQRvIxlAaOF9i+zWPXMFQubcY+5jtA7Td/lii16aM=",
  },
  "go-to-next-month": {
    /* Menu label for "Go To... Next Month" */
    val: "Próximo Mes",
    translated: true,
    h: "O3OOxop0NEwRr9eDaqAU+8KU9Pw0GeVnYLo0Abdkotw=",
  },
  "go-to-next-year": {
    /* Menu label for "Go To... Next Year" */
    val: "Próximo Año",
    translated: true,
    h: "NfnsOERP+IaYQvH6i+9MJ6KRpbYSapnXXUFm60jUbqo=",
  },
  "go-to-prev-month": {
    /* Menu label for "Go To... Previous Month" */
    val: "Mes Anterior",
    translated: true,
    h: "aCvOorN0f6iWVHoOoBvWYttjgiPF/x5zZvXX3IqFI6g=",
  },
  "go-to-prev-year": {
    /* Menu label for "Go To... Previous Year" */
    val: "Año Anterior",
    translated: true,
    h: "ZntiItsGCJfJBxKIXyzi3+NpS8jZXYAK8IXrOl9bfFg=",
  },
  "go-to-this-month": {
    /* Menu item for "Go To... This Month" */
    val: "Mes Actual",
    translated: true,
    h: "pjcOO9o+UFMLsp6ovyVzksVtCLcFsauwEITWoeq//bg=",
  },
  "import-verb": {
    val: "Import",
    translated: false,
    h: "F3sijvfYz3oB4iz2rVHjUvNDLQs43MbXDVIr5VFA2/c=",
  },
  "in the bank": {
    val: "en el banco",
    translated: true,
    h: "7gl7ZdgJ3HfhOcQMiU7hVkFpXIR3KFxXtlMhKyE/Irw=",
  },
  "match-count": {
    val: (target_match:number, total_matches:number) => {
        return `${target_match} de ${total_matches}`;
      },
    translated: true,
    h: "v7j9K2L04kDpmH02jGxiXPoyxuQwZTCdUx025bb0Yj4=",
  },
  "misc group name": {
    val: "Miscelánea",
    translated: true,
    h: "DPoc7CIbzLHJxuar3WnaidO3Ryy1QtYkCswRzVHtVBg=",
  },
  "money-balance-as-of": {
    val: (amount:JSX.Element, date:JSX.Element) => {
                  return <span>{amount} as of {date}</span>
                },
    translated: false,
    h: "99X4HuXB5SeCrTqn5LuD/S4a6GjUCB6gV1Z1gAZPfKM=",
  },
  "months gain/loss label": {
    val: (gain) => {
                        return gain >= 0 ? "Ganacia" : "Pérdida";
                      },
    translated: true,
    h: "lGcEnJfZJau2h5ohbKNxY1FjL0vJoW3oJOJQwSCt+Kg=",
  },
  "more": {
    val: "más",
    translated: true,
    h: "uiqCMjSdL1TgDZHPNYXLnfN/yZq59+kDR/wKZSAP0hU=",
  },
  "nag-message": {
    val: () => `Esta es una versión de prueba sin registrar y, aunque la prueba no tiene límite temporal, debería adquirir una licencia si pretende utilizarla de forma continuada.

¿Le gustaría adquirir una licencia ahora?`,
    translated: true,
    h: "cugeP6FVXqdiCtOers5rslG0mDD5t/Rfl1ZWslfhD48=",
  },
  "navigatestep": {
    val: (url) => `Ir a ${url}`,
    translated: true,
    h: "nI/J4GfYlL6BgRZRSiPFfA5o7ASdx2VVYW6x3vgCuKE=",
  },
  "net-transfers.help": {
    val: "Las transferencias netas son la suma total de todas las transacciones marcadas como transferencia.  Debe ser 0.  Si no es así, haga clic para asegurarse de que no hay transacciones duplicadas o transacciones mal clasificadas como transferencias.",
    translated: true,
    h: "2P3jr/VPQ35tlPa/uDMqi1spXO4Rinn76fgfVOegiA8=",
  },
  "no name": {
    val: "no name",
    translated: false,
    h: "UwMHboI9q49SZQkwMN8ps9zBi6YOSdtwakjLJwudtyA=",
  },
  "noin.income": {
    val: "Ingresos",
    translated: true,
    h: "D2fJbta5d1Z5QYuRC5zzkBHsItZOOgY4FKrFJ64BvRs=",
  },
  "notify-downloaded-file": {
    val: filename => `Archivo descargado: ${filename}`,
    translated: true,
    h: "HwxJ2TVx57Qef6bXYySekL/eoBzvIEFUqBxQdxgcyCs=",
  },
  "noun.debt": {
    val: "Deuda",
    translated: true,
    h: "y9kslXhW17gMMFZ9Dq8g/tabfINzlmzT+39QNbWiWGA=",
  },
  "noun.transfer": {
    val: "Transferencia",
    translated: true,
    h: "B5GGqjnE8KOjYJjhsFV7zs5TGmGmVPqjihzMVxHJ3sI=",
  },
  "off": {
    val: "Desactivado",
    translated: true,
    h: "nzvsum5LFYOz4ZRB3eTVliJTfZvVSpTSImJ4XkhThNA=",
  },
  "on": {
    val: "Activado",
    translated: true,
    h: "mQwjhouWWBSxF8+abE3+RUUurcIXHh+YGGXr/ITxByQ=",
  },
  "press Escape to close": {
    val: "pulsa Escape para cerrar",
    translated: true,
    h: "5jKKS3xwogwcB2YptY5sW2/MQ/ikfMbR99l8ViHxmAA=",
  },
  "rain.help.neg": {
    val: (abs_amount:JSX.Element) => {
                                      return <span>
                                      Tienes {abs_amount} demasiado en los cubos.  Si todas las transacciones se han categorizado este mes, elimine {abs_amount} de los cubos que elija.
                                      </span>
                                    },
    translated: true,
    h: "tqXmJxZXqyA0mN/8ugZkpCyspyO7XlPnGlEYGWgQ7jk=",
  },
  "rain.help.pos": {
    val: (abs_amount:JSX.Element) => {
                                      return <span>
                                      Te quedan {abs_amount} para poner en los cubos.
                                      </span>
                                    },
    translated: true,
    h: "boezbSGkVm3dnfFvodJOAeCgAEMIQN9L+8TwEHLpU/o=",
  },
  "sample-size": {
    val: (count:number, total:number) => {
          return `Showing ${count} of ${total}`
        },
    translated: false,
    h: "V4+Zyz6U1+wyTBVSVOfOz+wwkd1EWbQBhFcYdL9jLfY=",
  },
  "shipment-number": {
    /* Noun labeling this shipment number */
    val: (number:number)=>`Shipment ${number}`,
    translated: false,
    h: "kOj0AkivxHYJj3IKqIFziGCcIwk1yxyUrloX+kGlOd0=",
  },
  "simplefin-connect-intro": {
    val: "Para conectarse, haga lo siguiente::",
    translated: true,
    h: "421gz/BziKZhsIy2YKRFNtwoqPcbQ7uhFZWWfd6ReBg=",
  },
  "simplefin-get-token": {
    val: (mklink) => {
              return <span>Obtenga un SimpleFIN Token del {mklink('SimpleFIN Bridge')}</span>
            },
    translated: true,
    h: "VEeKjngcHxowWbB2xWy5oNH4MXIfJQ7EqpiomT6V0fg=",
  },
  "simplefin-paste": {
    val: "Luego, pegue el SimpleFIN Token aquí:",
    translated: true,
    h: "vAoRsY20OBqs8bleaXD3auq8VnO9gQj7gXz5p+p71EI=",
  },
  "single-account Closed": {
    val: "Cerrada",
    translated: true,
    h: "8pZrnvzAUQTJhDN/XX31DLvx0wIs1Ww3fV6pktEKEHs=",
  },
  "single-bucket Kicked": {
    val: "Archivado",
    translated: true,
    h: "cWApfoLlcBvoHizIFtrDQq3uwrZIYMXKO1iLMvv8szI=",
  },
  "some day...": {
    val: "algún día...",
    translated: true,
    h: "4K+3SY48UwcktULX4xiGt6J8Q8Hys3JjUR3t62WI6mo=",
  },
  "sync-symbol help": {
    val: "Esta transacción provenía de una importación o sincronización",
    translated: true,
    h: "S3tDRls+AJYj6f8jSNSCa1FVyNY+ngn6Db1EQJ3dpLE=",
  },
  "sync.toast.syncing": {
    val: (start: string, end: string) => {
      return `Sincronizando transacciones de ${start} a ${end}`;
      },
    translated: true,
    h: "utj3wVCxisKfYRDtJ+t5B8jPlLKwhght2S5Cb3b0qZc=",
  },
  "tab": {
    /* Label for 'tab' character */
    val: "tab",
    translated: false,
    h: "aEXPpTPGGl6vpoXplsnqN9LGRDys7bKMPu0BVvzbxIg=",
  },
  "this_device.name": {
    val: "Sin nombre",
    translated: true,
    h: "Z85JCnN1GdDw+yMwZqwW8aeKgQkvCHCkVIkIjZt7G00=",
  },
  "toast.updated-trans": {
    val: count => `Actualizadas/creadas ${count} transacciones`,
    translated: true,
    h: "bBKDE3rQIV5P80cYEL6mkLmIvgxjzVHCIf3aFa+KtmU=",
  },
  "trans-created-outofview": {
    val: (month: string) => {
              return <span>Transacción creada en {month} </span>;
            },
    translated: true,
    h: "ur97iCX3Iw1E262eZ72YAEFdXlwvlqNkyNn1caIKi0E=",
  },
  "transfer-from-account": {
    val: (dropdown:JSX.Element) => {
                return <span>Transferencia desde {dropdown}</span>
              },
    translated: true,
    h: "VJmIMDZGOdMKwBpoqDUYiVdCFhw1pJ4qCmKiszAECL4=",
  },
  "transfer-to-account": {
    val: (dropdown:JSX.Element) => {
                return <span>Transferencia a {dropdown}</span>
              },
    translated: true,
    h: "Bd1IGkjXo2ruWofGrT+WwLdiy8IwJ/PW+7SO4TaDcps=",
  },
  "use-delimiter": {
    /* When importing CSV files, users can choose a custom delimiter (instead of commas). This presents their custom delimiter as an option. */
    val: (delimiter:string) => `Use "${delimiter}"`,
    translated: false,
    h: "KJbb5/maOo+aep3dLJiRb5KwueX8VsaGVPIXGXDeXkY=",
  },
  "verb-open": {
    /* Verb to open a page */
    val: "Abrir",
    translated: true,
    h: "PlLwT5LggHCmpOqXIa1xXdU/K/ztbasiD703lhOnltA=",
  },
  "version-available": {
    val: (newv:string) => `Versión ${newv} disponible.`,
    translated: true,
    h: "YCoofx1v0tRUHkHfhFnm6bV2xXfnsNT6QAyXqgkUa9c=",
  },
}
export const pack:ILangPack = {
  name: 'Español',
  dir: 'ltr',
  numbers: {
    thousands: ',',
    decimal: '.',
    decimal_places: 2,
  },
  messages,
  contributors,
}
