import { ILangPack } from './spec';

export const pack:ILangPack = {
  name: 'español',
  messages: {
    labels: {
      TrialVersion: 'Versión de Prueba',
      Rain: 'Lluvia',
    },
    nav: {
      Accounts: 'Cuentas',
      Transactions: 'Transacciones',
      Buckets: 'Cubos',
      Kicked: 'Echados',
      Analysis: 'Analysis', // XXX
      AnalysisSub: {
        Recurring_Expenses: 'Recurring Expenses', // XXX
      },
      Connections: 'Conexiones',
      Import: 'Importar',
    },
    menu: {
      file: {
        label: 'Archivo',
        NewBudget: 'Presupuesto nuevo...',
        OpenBudget: 'Abrir presupuesto...',
        OpenRecent: 'Abrir lo recientemente',
        DuplicateWindow: 'Duplicar la ventana',
        ImportTransactions: 'Importar transacciones...',
      },
      register: {
        PurchaseFullVersion: 'Comprar las versión completa...',
        EnterLicense: 'Entrar licencia...',
      },
      help: {
        LearnMore: 'Aprende más',
        ShowLogFiles: 'Mostrar archivos de registro',
        ReportBug: 'Reportar un error',
        Chat: 'Charlar...',
      },
    },
  },
}
