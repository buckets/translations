import * as React from 'react'

import { ILangPack } from '@iffycan/i18n'
import { IMessages } from './base'

// Contributors, include your name and optionally a link to
// a website as you want it to appear in any credits.
const contributors = [
  {
    name: 'Carlos',
    // href: '',
  },
  // {
  //   name: '',
  //   // href: '', /* optional */
  // },
];

const messages:IMessages = {
  "": {
    val: "",
    translated: false,
    h: "Eq4yyx7ALQHto1gbEnwf7jsNxTVy7WuvI5choD2C4SY=",
  },
  "\n        Though filling out this form is preferrable, you can also email bugs@budgetwithbuckets.com\n      ": {
    val: "\n        Apesar de ser preferível que você preencha esse formulário, você também pode enviar um email bugs@budgetwithbuckets.com\n      ",
    translated: true,
    h: "05fPQ/cX0e4UXnYsbNTo8b6FUwq/WZ1URc7ixr6WlV8=",
  },
  "(Drop files or click)": {
    val: "(Arraste os arquivos ou clique)",
    translated: true,
    h: "cn8vjUpkolK+X1qsHPyR11Qj7uQWZVR6eWnhPRb/zfw=",
  },
  "(If you want a response)": {
    val: "(Se você quiser uma resposta)",
    translated: true,
    h: "Ij4mQm0L5WO4Iunvl3fKwbhLwjTodc3Chq81GsFM+T0=",
  },
  "(optional)": {
    val: "(opicional)",
    translated: true,
    h: "njVpYkgCdiB755Pxnsk1D8GELOWqw1mBBYG+YQr7e98=",
  },
  "/mo": {
    val: "/mo",
    translated: true,
    h: "ggq7na5vMB1wOjQQo0Wq0o7ctwbMUiiJr1tRRKphHss=",
  },
  "A sync is already in progress": {
    val: "Uma sincroniza já está em progresso",
    translated: true,
    h: "z6CqgxENo0xxB0LPp8P8rmnLPp1m2NElecEaJM8GDfI=",
  },
  "About Buckets": {
    /* 'Buckets' refers to the application name */
    val: "Sobre Buckets",
    translated: true,
    h: "9bzPsx+kCkNUeLTSVjaygyWCkm3VCdsFaAFRvdS+xEU=",
  },
  "Access": {
    /* Label for section describing which budget files a remote device has access to */
    val: "Access",
    translated: false,
    h: "fm1fE44xW9uYPR90N2BgNNY+xQ/yovAUMBTbUTFj0F0=",
  },
  "Account": {
    val: "Conta",
    translated: true,
    h: "ihCgI4A9UaFZ63kuiKXqFHoGsze2dYwzpgSVU0clMfQ=",
  },
  "Account Transactions": {
    val: "Transações da Conta",
    translated: true,
    h: "GPJhFDki3xJdCOMqCkqdUDX7SfEZcg9wGee8KMIuIno=",
  },
  "Account and transactions deleted": {
    val: "Conta e transações apagados",
    translated: true,
    h: "iwS2+dAqfDOEtU5SUm1d1oPFTe0+JT5NCm4nH2SrglE=",
  },
  "Account closed": {
    val: "Conta fechada",
    translated: true,
    h: "l9xs5wLKF3KIgunL1SJh9r9XDYpWkC7LYrL4KUUFm3M=",
  },
  "Account deleted completely": {
    val: "Conta apagada completamente",
    translated: true,
    h: "LswJ+SxzkHRVy6+Et4Wga6r/Io1P6MBlTiwdjUAUj48=",
  },
  "Account name": {
    val: "Nome da conta",
    translated: true,
    h: "Wo+ZnjRTxGkow1m4BGCavACj82/UajUNs6oLDXB++sU=",
  },
  "Accounts": {
    val: "Contas",
    translated: true,
    h: "1oHDkv2zB1yiCABVTWBY5oX4Ccu36nJBCG7Q+JVg8TA=",
  },
  "Accounts in side bar": {
    val: "Accounts in side bar",
    translated: false,
    h: "BsDoJS2nPDKya2do9fNF2o2jl0mIUxjdBycHbmsu6HY=",
  },
  "Actions": {
    val: "Ações",
    translated: true,
    h: "qm2CvbPMHZpeVCriZp/vJ2kAGatdeyDxfZ8TMaapQvo=",
  },
  "Activity": {
    val: "Atividade",
    translated: true,
    h: "jfKSYDWvDxzcenHtImEM9HokIu7tBJbMki25BNTynTI=",
  },
  "Actual Size": {
    val: "Tamanho Atual",
    translated: true,
    h: "k1ZfUj7bmT4XwiALRlZo7ztl2d+e7JcLt3WCnvjpBYg=",
  },
  "Add": {
    val: "Add",
    translated: false,
    h: "sHHJQ9jaFQD0ZjykXnD1vKiFV5C98TviMmSgajkSEXY=",
  },
  "Add device": {
    val: "Add device",
    translated: false,
    h: "VdeXP2eoJR+Sf3pph0sG+PV5E5Jq/mFGXEOAve8aad4=",
  },
  "All Files": {
    /* Label for letting users select any file for import regardless of extension */
    val: "All Files",
    translated: false,
    h: "xP+YqxC7o4/NEWANvugOAGzJXIF368ZNwle6rV7nVRg=",
  },
  "Amazon.com Reconciliation": {
    val: "Reconciliação Amazon.com",
    translated: true,
    h: "SS/vhEAqfP5cTcprv5/4dDYZCEsTIMySGfXEngOoMj0=",
  },
  "Amount": {
    val: "Quantidade",
    translated: true,
    h: "DHNNaJF4hWTWIFdaMdMhUT4aSdti7ZfaNexABzxWWzc=",
  },
  "Amount of money over-allocated in buckets.": {
    val: "Quantidade de dinheiro superalocado nos buckets.",
    translated: true,
    h: "kFucvPefN9Kae7dArnle8i0rTZZq1U+3d8w81lDNVKw=",
  },
  "Analysis": {
    val: "Análises",
    translated: true,
    h: "+LNAOPSLW2rpFCrT+U1suhdnoYyZa1k8ALddRlddDlI=",
  },
  "Animation": {
    /* Label for application preference enabling/disabling animations */
    val: "Animação",
    translated: true,
    h: "Vk4XaMgXNIEY4+Gcal1n+qdnamgr4Q5af/+wzFRoIHU=",
  },
  "Any other monthly bills you have?": {
    val: "Outras contas mensais que você tem?",
    translated: true,
    h: "rmA9D10bvYOVj3U4kE7U6jALpz7WpqBJTv6HZaI4T/M=",
  },
  "Application preferences": {
    val: "Preferências da aplicação",
    translated: true,
    h: "PIhGW3aVUScG87KKiDCF4fLhudwZ3eYbz7n7msHJU1U=",
  },
  "Assets": {
    val: "Ativos",
    translated: true,
    h: "VBLBowZo0Lx8GWGbWVcEEFzSxnwQmcEOSxwtD5yIhwQ=",
  },
  "Attached files are too large.": {
    val: "O arquivo em anexo é muito grande.",
    translated: true,
    h: "HfDI7uw+P4uLUPkDu0rxQhxJqjqcriWmD9EWYaiUqvY=",
  },
  "Average": {
    val: "Média",
    translated: true,
    h: "zLxQhptvlIYtt0l/prvWMqnsQHh7N1gxh33WeorRi2w=",
  },
  "Avg:": {
    val: "Média:",
    translated: true,
    h: "EVMZyhHQEFPlI2ib8VqTJo25bJBk8gHsgZR1SZ2Jcj0=",
  },
  "Babysitting": {
    val: "Babá",
    translated: true,
    h: "yOfOnHbye/Uhao1fb5jtfP4z0XPyc757kdBFt32Uwrc=",
  },
  "Balance": {
    val: "Saldo",
    translated: true,
    h: "azvDWgVPY349dq4q8mbtpDhehRsFKYKNzMk/TcuOvEQ=",
  },
  "Balance:": {
    val: "Saldo:",
    translated: true,
    h: "hHHAAGXs0oscbD5jkMQSQUQ5sLsgo/sPaBumUBAq+CA=",
  },
  "Birthdays": {
    val: "Aniversários",
    translated: true,
    h: "rzI9rIMV5VD86pAzRZf+uFAA8rWYhz1rIH5N9fDesSk=",
  },
  "Break Import Links": {
    val: "Tirar Links Importados",
    translated: true,
    h: "XQYKw3qJ7xKoR/DX6K6NdZxbJLHVJhxy9mFVV8r1ZU4=",
  },
  "Bring All to Front": {
    val: "Trazer Todos Para a Frente",
    translated: true,
    h: "vXNLSncC5dTsDdfhZY5dhbev+Y3PpqQEy1fwxTkGWU0=",
  },
  "Bucket": {
    val: "Bucket",
    translated: true,
    h: "APPSgbsmF5H9B7YIJDaPcEVh4T7ctWU+hxQv/eG1Dg0=",
  },
  "Bucket Transactions": {
    val: "Transações do Bucket",
    translated: true,
    h: "5hMoGWO5uTeCOujLdFnRx4w3D6Zka/avSxnH14UmJiI=",
  },
  "Bucket deleted completely": {
    val: "Bucket apagado completamente",
    translated: true,
    h: "gBMlSFTWDRRSWZeZ3fuxDhpJnhv2MoF3EvZSwo1BZHg=",
  },
  "Bucket type:": {
    val: "Tipo de Bucket:",
    translated: true,
    h: "NMC+sjsH6UgNhNtiqYeiHDi4zDK/+S5h5yMfZ5CQk1c=",
  },
  "Buckets": {
    /* Bucket list page title.  Does NOT refer to the application name */
    /* Refers to a list of buckets, not the application title */
    /* Refers to a list of buckets, not the application title */
    val: "Buckets",
    translated: true,
    h: "fMPIWzGvVEG0t7+bZX1ucgzulk8FaQfqioLgwLsj+oE=",
  },
  "Buckets Budget Filename": {
    /* 'Buckets' refers to the application name */
    val: "Nome do arquivo de Despesas Buckets",
    translated: true,
    h: "PMqvee/qJsh/OYtRi+hbcH4fgl07SR6XM0wx4c1C+sU=",
  },
  "Buckets License": {
    /* 'Buckets' refers to the application name */
    /* 'Buckets' refers to the application name */
    val: "Licença Buckets",
    translated: true,
    h: "sym++hSpJ7LeHTQAaiYRAK41eYIw9pfMFO2EbYTHGxo=",
  },
  "Buckets has crashed.  Please restart after submitting a bug report.": {
    val: "Buckets has crashed.  Please restart after submitting a bug report.",
    translated: false,
    h: "jPwdFrODeZ3bxIdD+YJ9CFGjCQTqdwQNr9CdB4QTI6U=",
  },
  "Budget": {
    val: "Despesa",
    translated: true,
    h: "zOO4DqNSFLa6Z9vlmfaz8OnwggHn8wJeP058V5mUKbE=",
  },
  "Budget Specific Settings": {
    /* Title for budget settings page */
    val: "Opções Específicas para o Orçamento",
    translated: true,
    h: "/RQVOKmoXTgeciF+ohehk19BxpvBXud+3HjfZPPw1v8=",
  },
  "Budget password:": {
    /* Label for bank macro password prompt */
    val: "Senha de Orçamento:",
    translated: true,
    h: "yB5u4awiXu76+/Pw81ZYhBtgYQktcAVe6KU4WreiReU=",
  },
  "Budgeted": {
    val: "Orçado",
    translated: true,
    h: "aP72arzLN/j79zGtL8DWE7wcBGciRcWqMOR1aTHJmNo=",
  },
  "CSV Account": {
    val: "Conta CSV",
    translated: true,
    h: "iUtlYMX6nlvjb8WPFElRbcnOQ/BXPc6BjaHKp6b6GUM=",
  },
  "CSV Fields": {
    val: "Campos CSV",
    translated: true,
    h: "oqAayNv4L3OeWfsN66FDAh9MWIsR//voLRTEotp3GUQ=",
  },
  "Cable TV": {
    val: "TV a Cabe",
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
  "Cancel sync": {
    val: "Cancelar sincronia",
    translated: true,
    h: "8xFWyPShIifEhumOA/PeoTtccm5TTtbQmWFViIGcPQA=",
  },
  "Car Insurance": {
    val: "Seguro do Carro",
    translated: true,
    h: "x3xbGNEH/vHcpYAm2HXTUhRRuz2sb6yfH0gBYFFkqc4=",
  },
  "Car Maintenance": {
    val: "Manutenção do Carro",
    translated: true,
    h: "Lsok3+kX1L7SXMumFWNo+oxBgfmGJcWg1CdSDw6byx8=",
  },
  "Car Payment": {
    val: "Consórcio do Carro",
    translated: true,
    h: "wp49ZoinRgifzKQ+N9RrJ6LG/9Yw6hkw1RCwXwHc6tA=",
  },
  "Categorization": {
    val: "Categorização",
    translated: true,
    h: "DShuYOF3daz37AE7lGCN1TajYU1VyorRCvLwh4bM1r8=",
  },
  "Categorize": {
    val: "Categorizar",
    translated: true,
    h: "mA6/TefxgXpo2M+OUx/ATLQ4QYHv4t1+8vy3MmV+EQg=",
  },
  "Category": {
    val: "Categoria",
    translated: true,
    h: "/frArhrZL+bxdiiBKi/1cYdR/tSD7rhbMHJLgHQQdNQ=",
  },
  "Change Account Type": {
    val: "Mudar Tipo de Conta",
    translated: true,
    h: "elw7uWDm9Vij1azrwiBbY+VwbjMQuo/xziG393BqGUA=",
  },
  "Charity": {
    val: "Caridade",
    translated: true,
    h: "5OqY1JRI3brWCHQyu9VDY9hpjXzg1cVB1oQnXLQjZ4U=",
  },
  "Chat with Matt": {
    /* If "Chat with Matt" is too wide, you can translate this as just "Chat" */
    val: "Conversar com o Matt",
    translated: true,
    h: "9nQjbkjkf8l2mX6xeNaU///NYhxxWFqnvTKOmakMmRY=",
  },
  "Chat...": {
    val: "Conversar...",
    translated: true,
    h: "SytGirG0+cdtbPfjBma/G/tEOt4rdOj4mnjcaWsTbt8=",
  },
  "Check For Updates...": {
    val: "Procurar por Atualizações...",
    translated: true,
    h: "S/1p0syaOMqjAbHpmZa6gWaIh/9e29QR2cRJhiMadz0=",
  },
  "Check for Updates": {
    val: "Checar por atualizações",
    translated: true,
    h: "6vtxqhyfiDaIXgTBH0pdoPzTGftDDEoRFNGU082PhRk=",
  },
  "Checking for updates...": {
    val: "Checando por atualizações...",
    translated: true,
    h: "wjjhyYhYEFdJWUmwdJIEdxm0iAq2bwrWU79ANObzzZY=",
  },
  "Cleared": {
    /* Tooltip text indicating that a transaction has cleared. */
    val: "Liquidado",
    translated: true,
    h: "j1SmbPuDDBP04XfOH9NNFCDzXmB9xAzSoVG7RcHcdBg=",
  },
  "Cleared balance": {
    /* Label for balance minus uncleared transactions */
    val: "Balanço liquidado",
    translated: true,
    h: "3SpY0eBe4gJ1WtupFnV904/a1Xlfx5Y4ybAdHQGzGV0=",
  },
  "Click the \"Set mapping\" to continue.": {
    val: "Clique em \"Selecionar Mapeamento\" para continuar.",
    translated: true,
    h: "17QBrVZk8kjbKoqmqsbEBBHyjcoru22TcYanag65Jrw=",
  },
  "Close Account": {
    val: "Fechar Conta",
    translated: true,
    h: "qTJEf8mdhLx1bU9LZPYaTtrT8pMLqxemoL/YqbhjESI=",
  },
  "Close Window": {
    val: "Fechar Janela",
    translated: true,
    h: "hrPxvP/hrVgtNNTMX4sv5sljx57neTy+2p0U1TKGuCE=",
  },
  "Close account": {
    val: "Fechar conta",
    translated: true,
    h: "7HdV8X8++teDNW33urE2eccDw3VLdSpvII89zC/sfu4=",
  },
  "Closed": {
    /* ! Label for list of closed accounts */
    val: "Fechado",
    translated: true,
    h: "8pZrnvzAUQTJhDN/XX31DLvx0wIs1Ww3fV6pktEKEHs=",
  },
  "Clothing": {
    val: "Roupas",
    translated: true,
    h: "as4CQmPu3VF2LxSvA5djgiAPatdFRqwmOt0NiHJCe7E=",
  },
  "Confirm password:": {
    val: "Confirmar senha:",
    translated: true,
    h: "Px/rLFgkE/Sv1Z+Xm0frULVV3lxvrEc7ABJaDzmv670=",
  },
  "Connect": {
    val: "Conectar",
    translated: true,
    h: "pCLQy6ZAsZnJ3ff5r+iD+O2vHQhIJEEUHUhiY1NrMP0=",
  },
  "Connect to bank": {
    val: "Conectar ao banco",
    translated: true,
    h: "0T7eA3oFvMxyPIOAkMZ2rDpJxQVORgxrLqrDx87L1ZY=",
  },
  "Connected": {
    val: "Connected",
    translated: false,
    h: "fV/VOfsqBR+vyqF2tRjG6qsC8ufS/QDaTRaUee+UEMA=",
  },
  "Connecting...": {
    val: "Conectando...",
    translated: true,
    h: "fYdj0RfOQMPN3n28gswFnK4aOvozPH0hqm9oqd+NcWI=",
  },
  "Connection saved!": {
    val: "Conexão salva!",
    translated: true,
    h: "wAgyeIQsbaI/kFPgBf8sWlKK1mf/VcP7BjHpC9TNYuc=",
  },
  "Copy": {
    val: "Copiar",
    translated: true,
    h: "T2DR4UKv+pyVWY8GzF/WWjk5XqMXgZ0gDyXkZmYczHw=",
  },
  "Create Account": {
    val: "Criar Conta",
    translated: true,
    h: "0N2I0sNdMLVk7zC9FqlNYoA1G6RDgQDvQErp/TjAnRA=",
  },
  "Create Backup": {
    val: "Criar Backup",
    translated: true,
    h: "tUZEq5sa8Ggh6lIgsWzX8Blj6/unJ8dhl9sKpfwxRYY=",
  },
  "Create Backup and Start Over": {
    val: "Criar Backup e Começar Nnovamente",
    translated: true,
    h: "55tb3CtVKNADQpK4SdoMMPQvHu1ftBosd/dP8lFHV/o=",
  },
  "Create Macro": {
    val: "Criar Macro",
    translated: true,
    h: "F6PDykaoACWoqQ+oKUyJyhERAe1FjT6A3OkxL+S5l8k=",
  },
  "Create Template": {
    val: "Criar Modelo",
    translated: true,
    h: "gAbtUL3vhxk+yCSp7fzAF4Z9tV0I4x7Uq5xDJ4nm2Uk=",
  },
  "Create Transaction": {
    val: "Criar Transação",
    translated: true,
    h: "G5NDAP857MBDE66GWUREcFAJc2pCogndYa6y+m6PRfE=",
  },
  "Create budget password:": {
    val: "Criar senha para as despesas:",
    translated: true,
    h: "Bf9XVrpN9UpVSKpZNRpBUw/IaFjMkNCmH4gpAfhYFkY=",
  },
  "Create macro": {
    val: "Criar macro",
    translated: true,
    h: "9xZZAswDH8zePPUhfsaSEDJ21GU1yhILKhDWtvnUlr0=",
  },
  "Create new account": {
    val: "Criar nova conta",
    translated: true,
    h: "SmoVFbeAWSO4cW1YQJbuDJQz8kenVz5++WTJEkS6Vos=",
  },
  "Currency symbol": {
    /* Label for currency symbol setting */
    val: "Símbolo de moeda",
    translated: true,
    h: "/zaBMXJh747DLHbqocisO7iV5wDJpVTSCx8RhH7Ye0E=",
  },
  "Cut": {
    val: "Cortar",
    translated: true,
    h: "+kuX06pgC809fwr+5h9VbC8sVgVWo6EXgg6bzfXXtJs=",
  },
  "Date Posted": {
    val: "Data Postado",
    translated: true,
    h: "3A+vhaBB21UASdnwmNYVGMV9qH/U43D3DCsVSXlWasY=",
  },
  "Debt": {
    /* Label for a total debt amount */
    /* Name of bucket group for debts */
    val: "Débito",
    translated: true,
    h: "y9kslXhW17gMMFZ9Dq8g/tabfINzlmzT+39QNbWiWGA=",
  },
  "Delete": {
    val: "Apagar",
    translated: true,
    h: "sm3jcrSw6qxgICiEpy25imvm6QNueF6oZ+oBxfeSEJg=",
  },
  "Delete Account": {
    val: "Apagar Conta",
    translated: true,
    h: "zTJTocYLEbNVwJ0ojyPCB6M0JpGx6fe6AZHWtuVJv0M=",
  },
  "Delete Connection": {
    val: "Apagar Conexão",
    translated: true,
    h: "o6bxlUpjZFFTleiRLA4ykeB3yEHsAiXW9usUdJ9jh1g=",
  },
  "Delete Group": {
    val: "Apagar Grupo",
    translated: true,
    h: "VaefOk8g8N64N+Td8TEorhhMQBe0AuWmfRz7u7+Q1Ko=",
  },
  "Delete Macro": {
    val: "Apagar Macro",
    translated: true,
    h: "Qb7shd6fRLybaDzPvdr0Z4VfVek/fHVV556kEcNZrH8=",
  },
  "Delete Transactions": {
    val: "Apagar Transações",
    translated: true,
    h: "5rAWRNk97CWy9OfDP5IWSE/T2Ao461w7C3z/IDV154I=",
  },
  "Delete all": {
    val: "Apagar tudo",
    translated: true,
    h: "nKzti1takFUxZyWfLTGqgvdL3dJMx6CdNwVfBH1jUYE=",
  },
  "Description": {
    val: "Descrição",
    translated: true,
    h: "bg0ZDIR+z+PEkinc/ZyqkERMsVZcFFm3NhQoIqZH+WM=",
  },
  "Diapers": {
    val: "Fraldas",
    translated: true,
    h: "Vr53xwIeHjIIuMymcxrQ3l1RsDE6ra+ZTFT4dbR/rlI=",
  },
  "Disable Macro": {
    val: "Desabilitar Macro",
    translated: true,
    h: "k0HEkS8+oirJJHylM2fcT1D1/IqnGFVX3cGlU3d3G50=",
  },
  "Do both devices display the same image and code?": {
    val: "Do both devices display the same image and code?",
    translated: false,
    h: "b4hrUuVyQY42ZQnEyYvmBHmzVT6WcHo30VshIQAx3zQ=",
  },
  "Done": {
    val: "Pronto",
    translated: true,
    h: "FlUsJYC76LgtNYLenrPiDvDgAVk3wLT14rwyk2hHYiY=",
  },
  "Download": {
    val: "Baixar",
    translated: true,
    h: "QVM3NKWnuJ19cWUaN3y9fVCbkiQTygWbOYuFMklAwNc=",
  },
  "Download Update": {
    val: "Baixar Atualização",
    translated: true,
    h: "OvekDBh71chOkbTXqPs/V/x0lNbpc668s4hyXRF5G+I=",
  },
  "Downloading update...": {
    val: "Baixando atualização...",
    translated: true,
    h: "vTHXpZeFxjQhKPwUQPCm+eHcyYR6YjSmIm4mtV/5iTE=",
  },
  "Duplicate Window": {
    val: "Duplicar Janela",
    translated: true,
    h: "tjwFTBARBKQ5uC9Fh0zm7ag/RViV95pptJBJn9eVqHE=",
  },
  "EXPERIMENTAL Buckets Macro Maker": {
    /* 'Buckets' refers to the application name */
    val: "EXPERIMENTAL Criador de Macro Buckets",
    translated: true,
    h: "NZPVXQ+Dw1vv0fLXY+Z4R1KiEkXjDZtSmY3tVz5L1VI=",
  },
  "Eating out": {
    val: "Comer Fora",
    translated: true,
    h: "aiQggrM+Wb8WtkoJykeSDnNiCBgzGqVGc1Hvkf5Uzg8=",
  },
  "Edit": {
    val: "Editar",
    translated: true,
    h: "9+ZynTDPePvsJX4rW8Mn0wEzk0GRQ+udON01NKHVsQU=",
  },
  "Electricity": {
    val: "Luz",
    translated: true,
    h: "D85G++Fy1hUUGZfHiKAUcNRlXmLcdkKK7RtxnwJ110U=",
  },
  "Enable Macro": {
    val: "Habilitar Macro",
    translated: true,
    h: "9SWFr96CNVD21JQ30lw4cj1JCAZ44RNlKkDzQJ/RyuE=",
  },
  "Ending Balance": {
    val: "Saldo Final",
    translated: true,
    h: "bwan2qqqdDloluCkgp+UPYWSAeOQk9zkaNwb2p0kUDk=",
  },
  "Ending amount:": {
    val: "Montante final:",
    translated: true,
    h: "0IUvXk9nogxjdL1n0VZPrxcMOUZODNXMlGrlpyXq8bI=",
  },
  "Enter Buckets License": {
    val: "Coloque a Licença do Buckets",
    translated: true,
    h: "QPy/bCk+yTP2DzZAmXWbRYj2KC5QbrLq/XeXrysIX6Q=",
  },
  "Enter License...": {
    val: "Coloque a Licença...",
    translated: true,
    h: "A+/eZ8qTAh97iBouJPInRkCg7F0nOkteYEBO7+lFHHA=",
  },
  "Error": {
    val: "Erro",
    translated: true,
    h: "/ErBlknw7o83xx0uIDCjdDA4u5bAwnNZuhFd2GV1Zcw=",
  },
  "Error fetching data": {
    val: "Erro ao baixar os dados",
    translated: true,
    h: "z94B0956dECmmaMVLZFW0oZMVtA92etw+2ZqumR4K9Q=",
  },
  "Error importing": {
    val: "Erro importando",
    translated: true,
    h: "rekzwWcY0HRZEhFebX1fJrp4aDJ/NTPxIwWaCYAk+7k=",
  },
  "Error parsing response": {
    val: "Error na resposta da análise",
    translated: true,
    h: "PsIRbom+m8Y5OIEPW2rzJYVlNA2NQrZmEQnpW7Y/9KI=",
  },
  "Error running recording": {
    val: "Erro executando a gravação",
    translated: true,
    h: "eE9Fw8G4vQpND3fFWnfGNvtN5LxCcQQecWO6fQgBmpM=",
  },
  "Error running sync": {
    val: "Erro ao sincronizar",
    translated: true,
    h: "LB/WNzHp4orPsbCVEJuDzUPsQUfNRDNXw7sFnbzfguw=",
  },
  "Expenses": {
    val: "Despesas",
    translated: true,
    h: "d6aKytFAPwPUzFOv41R0itfcMu11VdE29vkM05dnpBU=",
  },
  "Export": {
    val: "Exportar",
    translated: true,
    h: "mZJs0iE089tMZ5BWqTUBp+2aJ90wKL4act4hUPt7zkA=",
  },
  "File": {
    val: "Arquivo",
    translated: true,
    h: "9XpUff7TtVQbIncvgmrfzVB2gkBh35RnM1ET/HFr3k0=",
  },
  "File does not exist:": {
    val: "O arquivo não existe:",
    translated: true,
    h: "RPeWW9lCHkg+d6XybADj3OH2jxrYcSOhrA3+QHEcYz0=",
  },
  "File saved: ": {
    val: "Arquivo salvo: ",
    translated: true,
    h: "e6UDV8UzF5qqysQpN3OrcspjD8zPNn72zKd1CH1lFe8=",
  },
  "File type not recognized.": {
    val: "Importação Falhou",
    translated: true,
    h: "Z6QnadHff9fEji/vnFxKuxbfAKGNb263Hm13z3txfSM=",
  },
  "Find Next": {
    /* Edit menu label for finding the next match.  Perhaps use what your browser or other applications use. */
    val: "Encontrar próximo",
    translated: true,
    h: "LALfI5V4TsQo0DcGJwmNmrm3xNPtY5PmQuxB1voZo34=",
  },
  "Find Previous": {
    /* Edit menu label for finding the previous match.  Perhaps use what your browser or other applications use. */
    val: "Encontrar anterior",
    translated: true,
    h: "0n6Dq5KDTxxsTAKrJE+RDdgi9ln6FyfUEPNBJ6ejZ5o=",
  },
  "Find...": {
    val: "Encontrar...",
    translated: true,
    h: "aUU1pzvlZzKNgYZP2ZpPtQMImBOStbFnK33P3YwXTNs=",
  },
  "Finish import": {
    val: "Terminar importação",
    translated: true,
    h: "4xsUuxEj2AOOfV6aSUBcosl89BFoAZ+srMPIeWzIjUI=",
  },
  "For Date Posted, you must also choose the date format.": {
    val: "Para Date Posted, você também tem que escolher o formato da data.",
    translated: true,
    h: "G2XPMMlP2JPnutFhPAo1RnCQMTzdukxPSc+FjoF2Vjs=",
  },
  "Force Reload": {
    val: "Forçar Recarga",
    translated: true,
    h: "ktBJY2UXO+2r0ZvmbQXhArN51bSTnyaNnnBNR9PQ5K8=",
  },
  "From": {
    val: "De",
    translated: true,
    h: "cCFAY2/zl3pq5fMwrP/2LBsrrL36SYzS+6in7mvWyvY=",
  },
  "Fuel": {
    val: "Combustível",
    translated: true,
    h: "lU9dO2a3oisfgHqd0n39sKC/wl7ymSV/XprtLhQLEiI=",
  },
  "Gain/Loss": {
    val: "Ganho/Perda",
    translated: true,
    h: "Kop7hNPijjGN5jXxpDmcP32CJy22tzVz1qXWTjNxVg0=",
  },
  "Getting Started...": {
    val: "Começando...",
    translated: true,
    h: "XD8GQYEIDrNjTMPX4TjGeAbbCIEBcAONlYPd/D8Hz84=",
  },
  "Go To...": {
    /* Submenu title for navigation shortcuts */
    val: "Vá para...",
    translated: true,
    h: "AsKW6buNlZ7YlWHN1pVgNlCAzqiFIsJGL1cg8CkVGkg=",
  },
  "Goal completion:": {
    val: "Objetivo completado:",
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
    val: "Mantimentos",
    translated: true,
    h: "T6Kz6/FDxQkeIUJq8SVGn0T7OPdZ7B0YjPD3qHqW5p4=",
  },
  "Guide": {
    /* Menu label for the Buckets user guide */
    val: "Guia",
    translated: true,
    h: "E0TqJgLjqp65xs2CJV72FGZk5q/R8lIwaWCMnXpvTPE=",
  },
  "Header row": {
    /* Label for checkbox indicating whether a CSV file has a header row or not */
    val: "Linha do cabeçalho",
    translated: true,
    h: "uRtdJlb7w3q8Zl9lZhtY0JReqNVI7CfOdo5I9SW5lfw=",
  },
  "Health Insurance": {
    val: "Seguro de Saúde",
    translated: true,
    h: "nsWIG2Kbb9OtoQkBvgkFh5MfMVNfbuGKhZypQ3uoQJw=",
  },
  "Hello!  Thanks for trying out Buckets.": {
    val: "Olá!  Obrigado por testar o Buckets.",
    translated: true,
    h: "0m9VvMGwLCqD3lmZ24GbzlkRxPX1kf/DsbWA9kkBWX0=",
  },
  "Help": {
    val: "Ajuda",
    translated: true,
    h: "TvUUB7AuCuFJ9IWiz2SbsjnUvYoDPZAaMPxup/rwosM=",
  },
  "Hide Buckets": {
    /* 'Buckets' refers to the application name. */
    val: "Esconder Buckets",
    translated: true,
    h: "38YdGXFjndmgDFgXTpfUZ0F+W/D9e267YaAvzYZm4O8=",
  },
  "Hide Others": {
    val: "Esconder Outros",
    translated: true,
    h: "RpKz0G7Y8OE5oyGm0/zRffPdr7RQkneZCYrikLHIZ+U=",
  },
  "Holidays": {
    val: "Feriados",
    translated: true,
    h: "HTQ10E8CaKVUu71N6uLx9J+Y6naLLRX37v0oQkesV3k=",
  },
  "Household goods": {
    val: "Bons domésticos",
    translated: true,
    h: "UK1mJCSwg2XnGpH47pKFFD8NlrCfcd3bQb1bJt2RXEg=",
  },
  "ID": {
    val: "ID",
    translated: true,
    h: "ge86Jcy26vcv5uPFI29MfLOxHh8ctACck6nRdrl9aM4=",
  },
  "Identify the data each column contains using the drop downs below.": {
    val: "Identifique os dados que cada coluna contém usando o dropdown abaixo.",
    translated: true,
    h: "59JoGSJaPOdtgmCL+QLp8U/e6y+OGGM8fdEX4sClrpk=",
  },
  "If Net is 0, the bucket transactions will be marked as transfers rather than as income or expenses.": {
    val: "Se o Líquido é 0, as transações do bucket serão marcadas como transferências ao invés de renda ou despesas.",
    translated: true,
    h: "/btREV6/jPJtrc1ERDwLUyJAowC8+v6gUB7bmJJYzT4=",
  },
  "If multiple columns are selected for Amount, the first non-zero value will be used.  This is helpful if the CSV contains separate Credit and Debit columns.": {
    val: "Se múltiplas colunas forem selecionadas para Amount, a primeira não-nula será usada.  Isto é importante se o CSV tiver colunas de Crédito e Débito separadas.",
    translated: true,
    h: "bxc4+JxhDrm2oYWek0ISeJDxq173KLfpcnOT4GEMWGQ=",
  },
  "Import": {
    val: "Importar",
    translated: true,
    h: "F3sijvfYz3oB4iz2rVHjUvNDLQs43MbXDVIr5VFA2/c=",
  },
  "Import From YNAB4...": {
    val: "Importar do YNAB4...",
    translated: true,
    h: "z10Vp9BzEC6CkLTNtR8xywSTNYGMBbGFZMD7XUEbrVs=",
  },
  "Import Transactions...": {
    val: "Importar Transações...",
    translated: true,
    h: "PPLzf/61MKc3iWfDMTRo6ERH/TYu6TxBH2vmVbZD5Lk=",
  },
  "Import all Amazon Reports": {
    val: "Importar todos os Relatórios da Amazon",
    translated: true,
    h: "EwzV2gCi/cxxLtdXGeSBJLDZhAhXqomL1rdi7QPOQxA=",
  },
  "Import file": {
    /* Button label for starting a file import */
    /* Button label for starting a file import */
    val: "Importar arquivo",
    translated: true,
    h: "iaQvPnsbTKu/ItmjoC8ctwpVbyumVe15GLL8nCbe25Q=",
  },
  "Import from YNAB4": {
    val: "Importar do YNAB4",
    translated: true,
    h: "FJ55mGfxitbc5YeY1s6YEji8I54ILSi3sfzQALSx50I=",
  },
  "Import links broken": {
    /* Notification indicating that the links between imported transaction files and a particular account have been broken. */
    val: "Links importados estão quebrados",
    translated: true,
    h: "rLgGF32tMx7KSWu+vRLEbr+IbkedxhS8ELcYZhNCqTs=",
  },
  "In": {
    val: "In",
    translated: true,
    h: "TcCPpYF7/U7vM5pPmpqvJipZt0WPk3A/vC7Ec8pfDvo=",
  },
  "In/Out": {
    val: "Dentro/Fora",
    translated: true,
    h: "G/e+QHikQOjTM9bcDBrmUZj6ONRstDFt17sNXu9zUd8=",
  },
  "Include log file": {
    val: "Incluir o arquivo de log",
    translated: true,
    h: "rjy01ggb0uSRPn/tmrf/BVwGQiXaaSc6Nh+o92BIU3U=",
  },
  "Income": {
    val: "Renda",
    translated: true,
    h: "D2fJbta5d1Z5QYuRC5zzkBHsItZOOgY4FKrFJ64BvRs=",
  },
  "Install and Relaunch Buckets": {
    val: "Instalar e Reiniciar o Buckets",
    translated: true,
    h: "bzusTDIT831mqEwmmM59eT12mfoNMYiGPbUfoIzaCwo=",
  },
  "Internet": {
    val: "Internet",
    translated: true,
    h: "LUwTAW8PsV34HKGrTUopI7v3NFK8iWKpv5Nb8EOtU1E=",
  },
  "Invalid": {
    val: "Inválido",
    translated: true,
    h: "TTWlQj/xySwj3x3tLJd80Tl+VmJXWWdhFpMq90hNbfg=",
  },
  "Invalid SimpleFIN Token": {
    val: "Token SimpleFIN inválido",
    translated: true,
    h: "C6BzeT0S0G+xUVzgdubtVeH39oIVS4hUaVBd2gKS3Uo=",
  },
  "Invalid categorization.  Categories not set.": {
    val: "Categorização inválida. Categoria não foi marcada.",
    translated: true,
    h: "DykWhCxgeqeIt2i+Lc2sRdURMNIgRgohpjs83umwH9Y=",
  },
  "Invalid license": {
    val: "Licença inválida",
    translated: true,
    h: "BfJdh6NOzurSCMGRmCP8gb1VAXUlrSSsCFIGHGXtNiA=",
  },
  "It says:": {
    val: "Diz:",
    translated: true,
    h: "gbWdWRhcKGQzFCi8CcKy9Bmfg2oYqz1zGMHQzSU8jQE=",
  },
  "It should say:": {
    val: "Deveria dizer:",
    translated: true,
    h: "RjwjZtmUgFzGUxR0zMmyXh0cHzpzsbj4nk6R7tGe+i4=",
  },
  "Keep account transactions": {
    val: "Manter as transações da conta",
    translated: true,
    h: "SA/tgP2OPX7K6/Rztew4oai82mmt7fqOHpOuCWNrPZU=",
  },
  "Keep accounts": {
    val: "Manter contas",
    translated: true,
    h: "iQX3g3XL9mIf7uX5wDrQIhLNJ464eieqHwhtKtfSuoA=",
  },
  "Keep bucket transactions": {
    val: "Manter transações do balde",
    translated: true,
    h: "0LwH6beBDlpdXvsVWW7nGj/5/tkz7gDk+Sm4Kltx3rQ=",
  },
  "Keep buckets": {
    val: "Manter balde",
    translated: true,
    h: "4lGk6/xvGOvn8z5vLVpqCLE6WQwpEoizH0LM95z1Tvo=",
  },
  "Kick Bucket": {
    /* Name of action.  Consider this "Archive Bucket" */
    val: "Chutar balde(Bucket)",
    translated: true,
    h: "3hmOuv1hNsjpQJ5cSDTlSqN4jGOGFnSPw9r0bK68RWY=",
  },
  "Kick the bucket": {
    /* Button label for archiving a bucket */
    val: "Chutar o balde",
    translated: true,
    h: "IvzeGJ9G+Rns8Rbnal26flTFzd+yBNSEBQSptdNy8t8=",
  },
  "Kicked": {
    /* Label for list of archived buckets */
    val: "Chutado",
    translated: true,
    h: "cWApfoLlcBvoHizIFtrDQq3uwrZIYMXKO1iLMvv8szI=",
  },
  "Language": {
    /* Label for application language preference */
    val: "Idioma",
    translated: true,
    h: "H6JLSQVzeo1QvqYd6ewWITP1MyGheSF5eFCeaP6nQwk=",
  },
  "Language default": {
    val: "Idioma padrão",
    translated: true,
    h: "B22VmGf23mHOBpC02z4zdK4P34035w3nWPUR86u0Dgg=",
  },
  "Last used": {
    val: "Usado por último",
    translated: true,
    h: "G5a6Jdor9jRT/Wtcg9SfXQsvqL7VFvnVD2+gq7yT1Jg=",
  },
  "Later": {
    /* Button label for purchasing a license later */
    val: "Depois",
    translated: true,
    h: "wZUl6R8m08S1l0zLg0xgDG2XE1sodemTuRDbalIB4VM=",
  },
  "Learn More": {
    val: "Aprender Mais",
    translated: true,
    h: "8bk7nEyrz+Q0vmMisWIPVuvHR4/TeW4DhemALir6s1o=",
  },
  "Life Insurance": {
    val: "Seguro de Vida",
    translated: true,
    h: "CafgTI2ogIOqH6sg0xYnwgpDXmZ5SZQAsRY2jlTsp9c=",
  },
  "Link Account": {
    val: "Ligar Conta",
    translated: true,
    h: "Kq3pmMt0lHo1Or0xDzOxrUYLyhXtTVmVmcm/qGByIuk=",
  },
  "Macros": {
    val: "Macros",
    translated: true,
    h: "yo4VuLKqBNhvEBgUZKyI2WypDrv1loL/wA1qO3u4Zq4=",
  },
  "Make Transfer": {
    val: "Fazer Transferência",
    translated: true,
    h: "Rmor5ffKqQTdDQSwA2x/hHhrr0zL7MceXGsR1vHe6b4=",
  },
  "Make it rain!": {
    val: "Faça chover!",
    translated: true,
    h: "GCU3Hru9VCit7F+BYEMKmg5U8gsc1/UZ+o5wsbMAkeY=",
  },
  "Make it so": {
    /* Button label for causing the set of pending deposits/withdrawls to happen.  Synonyms could be: "Do it" or "Run" or "Go" */
    val: "Confirmar",
    translated: true,
    h: "XRTIWjylWKAy5BW8/0C0rOSW5S1QC+CxmgmFfhi81pk=",
  },
  "Mark Cleared": {
    /* Name of action for marking a transaction as having cleared the bank */
    val: "Marcar Liquidado",
    translated: true,
    h: "Z+NICH1z9EYN3Ub7Z9idiTw/t+QaDF9n3h9br9WhjgE=",
  },
  "Mark Not Cleared": {
    /* Name of action for marking a transaction as not having cleared the bank */
    val: "Marcar Não Liquidado",
    translated: true,
    h: "4VoXUMr4nLIoyueiB8YlIR9HFGPYBhYxJq/cqqwDLs0=",
  },
  "Medical": {
    val: "Médico",
    translated: true,
    h: "TcuCD6n7/CmRm/jdGZQLDvEdAVaJ2cDy2CahpUk9pCQ=",
  },
  "Memo": {
    val: "Memo",
    translated: true,
    h: "9yClwoAwAV0+DXl8NnkkAnlUi+Ebp2soPwN5meYKgWY=",
  },
  "Minimize": {
    val: "Minimizar",
    translated: true,
    h: "ELhkWGGY5oNKpfCzoXXW6TgkfS1nI0ZuJbWyYLmT+ro=",
  },
  "Month to Month": {
    val: "Mês a mês",
    translated: true,
    h: "VYq/DQYARQsjblXvXMijYnVbyFbLkqoRYmQ8IHhTbDQ=",
  },
  "Monthly": {
    val: "Mensalmente",
    translated: true,
    h: "r+AvQ06eYho/PFxjGz8FzHFmEfN+fjBpG0Yzic6/UgU=",
  },
  "Monthly deposit:": {
    val: "Depósito mensal:",
    translated: true,
    h: "GKlnbgfjEkmlOI0TT0pyfI30T1/0jrXjT01JZrBTpP0=",
  },
  "Months": {
    val: "Meses",
    translated: true,
    h: "wW/jCiA3sxpdbZ8SZ50pYiOvxUk2Ix8T6WB3ZXkAS4s=",
  },
  "Move Bucket": {
    val: "Mover Bucket",
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
    val: "Nome",
    translated: true,
    h: "bMXfNfAzjiMOnmM+rZmR8I9iyrRaMmSXja7cZ0eGcwU=",
  },
  "Natural gas/propane/oil": {
    val: "Gás/propano/óleo",
    translated: true,
    h: "CMjkKDPUYAAymOaPiz0PkXS6Ec3BTRWuNZJQ34kHA5s=",
  },
  "Need ideas for getting started?": {
    val: "Você precisa de ideias para começar?",
    translated: true,
    h: "JLW3ar4riykgYXyTGeMCNqL+wes0evHH6RERa+qXPaw=",
  },
  "Needs": {
    val: "Precisa",
    translated: true,
    h: "RbGrwaVYaT8OdEbNo5YBRWxoGZNYzZKjiDz7JrZVuuc=",
  },
  "Negate": {
    /* Verb meaning to make a number have the opposite sign */
    val: "Negativar",
    translated: true,
    h: "dZDdZz59qbx8gpMDeqIXTcDabOUtC1qWeUHncjptLo0=",
  },
  "Negative": {
    /* Label for choosing the word/symbol that signifies a negative number */
    val: "Negativo",
    translated: true,
    h: "uu+tZJYytTWkRjWGnhq7P28TYmWJ58RmQcbAv4QEakg=",
  },
  "Net": {
    val: "Líquido",
    translated: true,
    h: "QITdwYnhK1fVfALCDc6jQhY2jLIUBpPp0/bSHOX6p9M=",
  },
  "Net Transfers": {
    val: "Transferência líquida",
    translated: true,
    h: "4FYbJ2rCxhrWW9XBurKbS2mOSTwlxIXH/jCv5FDofeM=",
  },
  "Net Wealth": {
    val: "Patrimônio Líquido",
    translated: true,
    h: "XKjeMQyciPmv55LHmQ9l0ulp6PwrF1QA1lN2Pua1Kk8=",
  },
  "New Bucket": {
    val: "Novo Bucket",
    translated: true,
    h: "FchHrB6weykpHiqRVxc5QKb6BEdhH4DXrc+t6RNcF8M=",
  },
  "New Budget...": {
    val: "Nova Despesa...",
    translated: true,
    h: "daxIu+dqn7pfUDeB26rLQnPnAz2v5opSTHbAyBovaoI=",
  },
  "New Group": {
    val: "Novo Grupo",
    translated: true,
    h: "1dmXA/VlW+tjhojOGcypAy70L2wupHf9EdVjUByvpmA=",
  },
  "New account": {
    val: "Nova conta",
    translated: true,
    h: "MtAiANg7ugdeUiGmiGklfBPG4T1igh1iChKeC0Mdxnc=",
  },
  "New bucket": {
    val: "Novo bucket",
    translated: true,
    h: "aIKjDQtVbUMjIHU/6fccfiWBUIwUBnAofdzRJTCuytI=",
  },
  "New car": {
    val: "Novo carro",
    translated: true,
    h: "Bp27l6cn2XdsJhTwsG7CqndX5v6581sQjpY4tMVeh88=",
  },
  "New computer": {
    val: "Novo computador",
    translated: true,
    h: "zrx1OP3GJYjfIIZU0Sa31Mm3aQjGco6OnX25VqxnLlY=",
  },
  "New phone": {
    val: "Novo telefone",
    translated: true,
    h: "v6DgXaDFo1Yjq7Cyz8tC29KXNgr704sFNCnXIedKsHw=",
  },
  "New roof": {
    val: "Novo teto",
    translated: true,
    h: "AzV1g+0ivzcHHsk+jxoIrHthrDJ7wuVUOfurDtwV3j8=",
  },
  "No": {
    val: "No",
    translated: false,
    h: "ssvE4uVUWmxD9vjMjw5HZnc/psg9I4B2MTtvoeNJyvY=",
  },
  "No file chosen": {
    val: "Nenhum nome de arquivo escolhido",
    translated: true,
    h: "MKsAG2u3PyHfYzTNB+XEA8Myeu1DiSU2HNpIW8QXTpc=",
  },
  "No matches found": {
    val: "Nada encontrado",
    translated: true,
    h: "p4er9wMKH/YiF5PrBRKpfEzR8HINC3N0d9Iol4zqgtQ=",
  },
  "No name": {
    val: "No name",
    translated: false,
    h: "Z85JCnN1GdDw+yMwZqwW8aeKgQkvCHCkVIkIjZt7G00=",
  },
  "No orders imported": {
    val: "Nenhuma emcomenda importada",
    translated: true,
    h: "BSXGKYKVKCk7fbaNo3wAigIjqpZPNfJFNISloGmngZg=",
  },
  "No refunds imported": {
    val: "Nenhuma restituição importada",
    translated: true,
    h: "J8bwMBTknpk9dMKKsTWTqNlncBVGlUjhrnjwN6Z7uJk=",
  },
  "Normal": {
    val: "Normal",
    translated: true,
    h: "hjYDsfwaNZVxJ5eupqHy97JfTq/YAPm+bD+Zx0zrGuU=",
  },
  "Not Transfer": {
    val: "Não Transferir",
    translated: true,
    h: "GJsf5+RmvoXTk3dewQIb90+6xb+mujI/mpSM8cmgUEI=",
  },
  "Not yet cleared": {
    /* Tooltip text indicating that a transaction has not yet cleared. */
    val: "Ainda não foi liquidado",
    translated: true,
    h: "Hf/KSsxHfxvXx0udkqgCw/QkkE8Vi5ex9pdYnX6qzEU=",
  },
  "Note": {
    val: "Nota",
    translated: true,
    h: "omcHOlFDF1aMLf9t2/tJ9R1dYEFSQC9IiPuXLXuFwEk=",
  },
  "Nothing found matching:": {
    val: "Nenhuma correspondência encontrada:",
    translated: true,
    h: "NF10b/Nmjj8holFGK7KIiaJhSb8bsL9Zt/Fa8fFy4gk=",
  },
  "Number format": {
    /* Label for application number formatting preference */
    val: "Formato do número",
    translated: true,
    h: "RxooctpubAJr5NcKn57a5kjGBEdlPT5b2h6PUFLqxxE=",
  },
  "OK": {
    val: "OK",
    translated: true,
    h: "mMSSK7ZBxlx6MLe8r98jC5sAtmk2McVhRqslsnhu5KM=",
  },
  "Off Budget Accounts": {
    val: "Contas Fora do Orçamento",
    translated: true,
    h: "EQ0I5sn/xpO55GIvIhUF8/XeTi0g5sxvvyE7TiynJDQ=",
  },
  "Off budget": {
    val: "Fora do orçamento",
    translated: true,
    h: "cw3ZD6kn6Mat0qZqOZP0Is9hg7xmOxrKqKCD8CIjmz4=",
  },
  "On": {
    val: "On",
    translated: true,
    h: "nMAfqtecKNqqRD1YLNX1F32SXJy1exEgm1QvpnZLBQQ=",
  },
  "Only select a column for Unique ID if you are sure it contains bank-assigned, unique transaction IDs.  Most CSVs will not have this field.": {
    val: "Selecione apenas a coluna para UNIQUE ID se você tiver certeza que o arquivo contem ID transacional únicos provido pelo banco. A maioria dos CSVs não tem essa coluna.",
    translated: true,
    h: "MUc4sPlkaqyooNhJKZ15rbBQdclJSNbaarHERiW1hrs=",
  },
  "Open Anyway": {
    /* Label for button to indicate that a budget file should be opened even though it was made with a newer version of Buckets */
    val: "Abra mesmo assim",
    translated: true,
    h: "C3I8WidkzZOLAGX0ypckK7pR7+e/M/X/YVIV1GCTYms=",
  },
  "Open Buckets Budget": {
    val: "Abrir as despesas Buckets",
    translated: true,
    h: "5odppwzoA5bC5nAM3F+GDOVrAq3NfjGxrE0ZFXseCDg=",
  },
  "Open Budget...": {
    val: "Abrir Despesa...",
    translated: true,
    h: "67FfAce57aSIe2ncVfWeIeiiRLQQ8uuEUdDyI6UHxHU=",
  },
  "Open Recent...": {
    val: "Abrir Recente...",
    translated: true,
    h: "Uf1w3VIwUvsmKvOkQtBwsGvbRzQ5gMbEq/iyNzv95cs=",
  },
  "Open Transaction File": {
    val: "Abrir o arquivo de transação",
    translated: true,
    h: "8teUT2P/KToCDoMTqS88JNVtG9PTE/5PojtS1SGmokw=",
  },
  "Open YNAB4 File": {
    val: "Abrir arquivo YNAB4",
    translated: true,
    h: "BrKgvN0SgW410a7e11V3gP+FgW67iTGIY+o/cKI1Ftk=",
  },
  "Optional message:": {
    val: "Mensagem Opcional:",
    translated: true,
    h: "zVM8610w5Mn1yRIYOsmOY5ZxBd2KLIudsimw610auYU=",
  },
  "Optionally request an Amazon Refunds report": {
    val: "Requisitar opcionalmente um relatório de reembolso da Amazon",
    translated: true,
    h: "j+ZBzvgoK0z7wbJ25sNsy9fYopXOCUEqjbTFdt559Zo=",
  },
  "Or click to download the new version manually.": {
    val: "Ou clique para baixar a nova versão manualmente.",
    translated: true,
    h: "J+hkW+8xOyf72R6IgkvGlwWYNzHN+/aWRtotPks3C5U=",
  },
  "Order": {
    /* Label for an Amazon order row */
    val: "Pedido",
    translated: true,
    h: "Ggkvvwng4JyzP26RBZ9LrevWhrb766Qq+yTffZWmefg=",
  },
  "Orders": {
    /* List of orders */
    val: "Pedidos",
    translated: true,
    h: "0W3ENYY4AiEiX9CGdCzK/r0XLyqTqbYi8N91GQpTqnM=",
  },
  "Out": {
    val: "Fora",
    translated: true,
    h: "v4Oj0CQx7cmHP4mcJsZX4xMTzMzeFS81XA9gU3qOFKU=",
  },
  "Pair code": {
    /* Label for the code used to identify a pair of devices */
    val: "Pair code",
    translated: false,
    h: "7FQzZYGJbXsqp9NdhzzjEApNUEvX9Gs6JABM8Acc2YU=",
  },
  "Passwords did not match": {
    val: "A Senha está diferente",
    translated: true,
    h: "PyUeXNOVYhNDM/De1HIPLeiwy6d+x7bkZphOo5ZqR6Q=",
  },
  "Paste": {
    val: "Colar",
    translated: true,
    h: "n2Hnio0AcQPZejqQ+hm35GthBg0zYDNoxd8RCFRUhu4=",
  },
  "Paste and Match Style": {
    val: "Colar e Combinar Estilo",
    translated: true,
    h: "w8hRIxBBNWtXNPcYtQ4t/mTHfPF66U/mJbVpOiIDgYE=",
  },
  "Paused": {
    val: "Pausado",
    translated: true,
    h: "sMAADusAjpKEUapa7bSzeAnEAbEGpH+NKBgGh068Ifw=",
  },
  "Pending devices": {
    val: "Pending devices",
    translated: false,
    h: "Er8hgX1RiLPLj22DHMixOaj5wHsWbUM6mL2mdSbt+Sc=",
  },
  "Permanently delete account": {
    val: "Conta apagada permanentemente",
    translated: true,
    h: "fcpAc/TcJr/ayfOjnYZmGo2BIga/mx8UyuwCbh2BRFg=",
  },
  "Personal Loan Payment": {
    val: "Empréstimo Pessoal",
    translated: true,
    h: "cL5KAz7DWc3XTzI4eo3t1PaGUe16WM+dKBg2ykfpQ6A=",
  },
  "Phone": {
    val: "Telefone",
    translated: true,
    h: "9WrpirmkhUIuWq47S+FrVpJP+prT4uInaMOfMHjxS8c=",
  },
  "Playing": {
    val: "Executando",
    translated: true,
    h: "69elN/r6NyshRWtcjLOKso9OmdOJhvg/ix+Xy/fE+Z0=",
  },
  "Port": {
    val: "Port",
    translated: false,
    h: "u+5cy7Hv8eqnpUCJUVP2QmhGFpu7Zq4UquU/U7tcspI=",
  },
  "Possible Duplicates": {
    val: "Possíveis Duplicadas",
    translated: true,
    h: "ofGzHt7c7jfCo867EwNvCl3vCUJPLeLhFiC5Fmgrgp4=",
  },
  "Posted": {
    val: "Postou",
    translated: true,
    h: "h6jjM8ytGdEj+QfDnTVzEdq+0oLSE9zd+MArY7gtjzU=",
  },
  "Preferences": {
    val: "Preferências",
    translated: true,
    h: "g621xQsjA9sSCp1y6ZMsd3RolFp3OMEblL/gPz1k0v8=",
  },
  "Preferences...": {
    val: "Preferências...",
    translated: true,
    h: "6iQxyJ1WC9/Z0f0saApfwL5hmhgN5YgJeikLAYqCGBI=",
  },
  "Preparation": {
    val: "Preparação",
    translated: true,
    h: "hAU2jJdFn2hdOUvG6S3yousGGeHnblb2/CsaRHWvQwQ=",
  },
  "Prompt": {
    /* Title for prompt window */
    val: "Prompt",
    translated: true,
    h: "56HrS6R0zfyg5ruiVb/J04UP3T8O2V99V+mXHvVfEZ0=",
  },
  "Provide a name for the new account.": {
    val: "Coloque um nome para a nova conta.",
    translated: true,
    h: "WFHwJzRVIraGkeqDS03YjWe0vMsPsiRE1qM6V/Ef/xE=",
  },
  "Purchase": {
    /* Button label for purchasing a license */
    val: "Comprar",
    translated: true,
    h: "SfwhUMXO5ckJhwUkBjdC9n17k8zH4+hoAlFoUdOwE/g=",
  },
  "Purchase Full Version...": {
    val: "Comprar Versão Completa...",
    translated: true,
    h: "+6h2Y0QTHEVui0aUhwAlCsyJp/F+S0PYKMRlQysqjrk=",
  },
  "Quit Buckets": {
    val: "Sair do Buckets",
    translated: true,
    h: "QILEHXgAk6vuNPV3rqkbn2QRZ8WKrPnAZnscp7n8WaM=",
  },
  "Rain": {
    val: "Chuva",
    translated: true,
    h: "fqeHyOaOYnCtGAcJlJbhAR37DG6YMrsasUNtiL6z8hc=",
  },
  "Rain left": {
    val: "Chuva sobrando",
    translated: true,
    h: "+xrBpD9ex3fqQgh+YuNxsFxWyrbE8G1236f81k2whuY=",
  },
  "Rainfall this month:": {
    val: "Chuva desse mês:",
    translated: true,
    h: "S6dFwRYAFyRMUh4i6My2aNacGwMh8taa7neVTx9aiAM=",
  },
  "Recently used": {
    /* Label for list of recently used buckets files */
    val: "Utilizado Recentemente",
    translated: true,
    h: "tJ5cBjszrV/JztG5V1FUrgo0bfVgXfK5KB495TvGsYs=",
  },
  "Record change as transaction": {
    val: "Gravar as alterções na transação",
    translated: true,
    h: "yK0UuSf6pOl+44YBzW+tFNPHt6YYpqe88f+wQCuaHcQ=",
  },
  "Recording": {
    val: "Gravando",
    translated: true,
    h: "s1hytW8ZlaU8eRtoTfV+4aCpW5biiyifheE3t0kouUo=",
  },
  "Recurring Expenses": {
    val: "Despesas Recorrentes",
    translated: true,
    h: "yDp5Agru+QzDSy583s3kjOdZbbe6X1WDfMeSNXsYlaY=",
  },
  "Redo": {
    val: "Refazer",
    translated: true,
    h: "7buMF65dyGtKDY/ZW/Lkn7eUmdudCsdGV3KR2lYLLA0=",
  },
  "Refunds": {
    /* List of refunds */
    val: "Reembolso",
    translated: true,
    h: "4I/iPkFh9gYRoT0f6GWUl2eb1/8WRv59q6yPjB1KOOU=",
  },
  "Reload": {
    val: "Recarregar",
    translated: true,
    h: "hUVVd3tppLGqwgo2OeC3h334aTF0Y+/GHbuL/I1clYk=",
  },
  "Remote devices": {
    val: "Remote devices",
    translated: false,
    h: "Pnrxp4rS7bnapZb26P4HXC5hFardsCyTT6Idz/SFJuE=",
  },
  "Remove Categorization": {
    val: "Remover Categorização",
    translated: true,
    h: "b5sIQMfXAnBAqHD2NJfIgIAxclRGe5LJ7NzzF6sOruQ=",
  },
  "Rent/Mortgage": {
    val: "Aluguel/Hipoteca",
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
    val: "Reabrir Conta",
    translated: true,
    h: "KBv9ohpTpLSanhr/AFbKdJCA0VZ1iJ0THB53Hut00v4=",
  },
  "Report Bug": {
    val: "Reportar Bug",
    translated: true,
    h: "RxuE9Dh0Dadda2PtjUPD0dQ7b8aQok84Ytvw31ABBRU=",
  },
  "Report Bug...": {
    val: "Reportar Bug...",
    translated: true,
    h: "i17nG0QruMiCn612ogDToWB1g4xqqei691Yeh/t8MIk=",
  },
  "Report Translation Error...": {
    val: "Reportar Erro de Tradução...",
    translated: true,
    h: "/jSK7LcBLJ1FsOYb9ntsVYAxwAyGLLUZXlTL/zrC020=",
  },
  "Request an Amazon Items report": {
    val: "Pedir um relatório de Itens da Amazon",
    translated: true,
    h: "P4rrDh5nDkcbT6+2mP6w2/DdQS+Hlhu7u/AEo7usOGc=",
  },
  "Request an Amazon Orders report": {
    val: "Pedir um relatório de pedidos da Amazon",
    translated: true,
    h: "c+Qi3RJelGSlC9MybLul6oqMPosN10WOFW6k+roCtxk=",
  },
  "Required deposit:": {
    val: "Depósito obrigatório:",
    translated: true,
    h: "Q34JZduUI2Lx8xxjkeH/Md92nqWgEcbPFZjgf5m7tXA=",
  },
  "Restart Buckets": {
    val: "Reiniciar Buckets",
    translated: true,
    h: "TNcYWk7YxhZ0U9Q+mFMRedeWB36VsDXoYgBapDvZCgM=",
  },
  "Restart Buckets for changes to take effect.": {
    val: "Reinicie o Buckets para que as mudanças apareçam.",
    translated: true,
    h: "WDqnfUftItQB8zteFdZrFOknNYODkXCwU89Lk/Hs/SQ=",
  },
  "Save": {
    val: "Savar",
    translated: true,
    h: "wduD0WXtkIpIb6B4R8AA7ph724u3/Gtv27uaky6rEAU=",
  },
  "Screenshots:": {
    val: "Captura de Tela:",
    translated: true,
    h: "Vl/m/PU/CoPSp/t+drAAfxlQ818VKjlWKN8fsB4/+V4=",
  },
  "Search": {
    val: "Procurar",
    translated: true,
    h: "vembE+Cp1aKCKR2j2LCJD29QyiQxfGPUcGI1I8l5/5Y=",
  },
  "Search for Amazon transactions:": {
    val: "Procurar por transações da Amazon:",
    translated: true,
    h: "FGAckk6wNL4OYfSaGK3CYf8NLHv4tvh6bf9YErgSb5E=",
  },
  "Search:": {
    val: "Procurar:",
    translated: true,
    h: "OHBHBOVnuMjmjWHZURDrna8FWv+geQYMQuobRo4tkq0=",
  },
  "Searching...": {
    val: "Procurando...",
    translated: true,
    h: "7gAp07Zv3EjrgHoWJ04wEdRefy/aQ0zT8Y2EgQrnbHo=",
  },
  "Select All": {
    val: "Selecionar Tudo",
    translated: true,
    h: "tLJuQPindRFUyvGGdMLJbBHcVpAODsfT5p2gDnpB/Oo=",
  },
  "Select the account these transactions belong to.": {
    val: "Selecione a conta que essas transações pertencem.",
    translated: true,
    h: "qkaCMMw9CYakrPrLxgfkBp3KsfadBdGLYgZB8urPaC4=",
  },
  "Self debt": {
    val: "Débito próprio",
    translated: true,
    h: "zRWPLHqBTGcGqHHBHWdXpN2eOUUhRhvCyeAccFlR9Z4=",
  },
  "Send Report": {
    val: "Enviar Relatório",
    translated: true,
    h: "aLgG0qubuw0p0tGIUYKjgxecVsL0e3AKvQ5+W2JZg18=",
  },
  "Services": {
    val: "Serviços",
    translated: true,
    h: "Y5+GuNZXfFSynDsHvAY8cr0RqU+moaHZNmOk2eQrsNs=",
  },
  "Set mapping": {
    val: "Selecionar Mapeamento",
    translated: true,
    h: "0GImzkG1VPzFzjFdepzZz8+Ysis4xn7QQRVGlxVrQIw=",
  },
  "Settings": {
    val: "Opções",
    translated: true,
    h: "g5CfgkRu6cPoKgSs58kE8baksjDRuXC1WTLWKVn75z0=",
  },
  "Share from this computer": {
    val: "Share from this computer",
    translated: false,
    h: "sXtF785DDyaMA5+7grS0FR9Xf+cCqlpKgGWZAi6By8g=",
  },
  "Sharing": {
    val: "Sharing",
    translated: false,
    h: "+wdr1d9w83UkBcXqGDOkGlmDhl24ktIp0it2O14f4kE=",
  },
  "Show All": {
    val: "Mostrar Tudo",
    translated: true,
    h: "Kng6HqlojyhuqEK6kaB3KPtAs1w0LcpFWkJYrscali0=",
  },
  "Show Log Files...": {
    val: "Mostrar arquivos de Log...",
    translated: true,
    h: "In00T9z1A4xO6nLu8zAU5s3UzH3+IcK4XjRvrT9CGMs=",
  },
  "Show uncategorized": {
    val: "Mostrar não-categorizado",
    translated: true,
    h: "ZHhB69+qL72sD+upbAXLXIDMlEWXgSbwb5RupMV5K0c=",
  },
  "Sign": {
    /* Noun referring to the sign of a number (positive or negative) */
    val: "Sinal",
    translated: true,
    h: "uw6BT7o9vlsgV2TpwBFx/MfF1npvA+6ru4lXXcSzoCM=",
  },
  "SimpleFIN Connections": {
    val: "Conexões SimpleFIN",
    translated: true,
    h: "yzXdwvSSNy+FUFHW5+bAqRMq+j6krsNUFb/uFreKPNY=",
  },
  "Since some buckets have negative balances, this payment balance may not be what you actually have available for a payment.": {
    val: "Como alguns baldes tem saldo negativo, esse saldo de pagamento pode não ser exatamente o que você tem disponível no momento.",
    translated: true,
    h: "DcT2jCu9H9VSH4esyPHz75dbhviMkM3N/TD1N6PtYyM=",
  },
  "Skip This Version": {
    val: "Pular Essa Versão",
    translated: true,
    h: "YnC7GSI4QITirt1GGV/Tc1FvTbJYICkEeF3zj4u4eak=",
  },
  "Speech": {
    val: "Falar",
    translated: true,
    h: "i4Qm95bH8zVEbjpkUi7jvQiLtDzGkW9z90XEkiglzHM=",
  },
  "Spending Money": {
    val: "Dinheiro Gasto",
    translated: true,
    h: "7mLvCPVxhYqWXYW8EcSN4N6vyUtQqT4PnR0iC1ucTtY=",
  },
  "Start Over": {
    val: "Começar Novamente",
    translated: true,
    h: "hlKNxy6ZDz4ny/qpQfkv6FwXDangtq2ECEo+ICgEbJs=",
  },
  "Start Speaking": {
    val: "Comecar a Falar",
    translated: true,
    h: "v8sFOpEAoczjEjGparKZylHWHoxHMVQriwuhJaec2rY=",
  },
  "Start with a template": {
    val: "Começe com um modelo",
    translated: true,
    h: "HbSWD1rCMlssQIfvhdN+qwtdXT/k2Rq4+lTObtGpWbo=",
  },
  "Status": {
    /* Connection status of remote devices */
    val: "Status",
    translated: false,
    h: "fu712YZJJBbNWIpP5QaYV+fcz5rcN4DkkaOGdL/X6hk=",
  },
  "Step took too long": {
    val: "Etapa demorou muito",
    translated: true,
    h: "Py3rsk0guEg0d8Ce9Lbfwzf1zP7E4Z8YPSOu165mOc0=",
  },
  "Stop Speaking": {
    val: "Parar a Fala",
    translated: true,
    h: "Pme2/qME7bKdVrHTIEBQYt1Fu/SXRNGyy6sLBfKpqqk=",
  },
  "Student Loan Payment": {
    val: "Empréstimo Estudantil",
    translated: true,
    h: "j83e9PkiJgq0J5iPOaku/mbjw9H3KtXBaDV4ntsQktk=",
  },
  "Submit": {
    val: "Enviar",
    translated: true,
    h: "/plzMiu0xhKwtFcT4VqbJMoCd2dB03dB9EJhijEA284=",
  },
  "Success!": {
    val: "Sucesso!",
    translated: true,
    h: "6NxF/uD6sOEPkEbPFOHdBKRxj0ZXVbmnPkRXNJDy0zs=",
  },
  "Successfully imported Amazon Items report": {
    val: "Amazon Items report importados com sucesso",
    translated: true,
    h: "zcIlaWv/ZpEjOL5xQHbD/Q8+nNhqDbq4oJsVr0hLKcI=",
  },
  "Successfully imported Amazon Orders report": {
    val: "Amazon Orders report importados com sucesso",
    translated: true,
    h: "jD2nczKNctIdPeGX20WLyUGOlIl/MbKqKpP5hCxbtt8=",
  },
  "Successfully imported Amazon Refunds report": {
    val: "Amazon Refunds report impostados com sucesso",
    translated: true,
    h: "cL1VAhdyv9ML3nJT0QY3lg6QrxkJ/UQf0gbcokIDJGU=",
  },
  "Sync": {
    val: "Sincronizar",
    translated: true,
    h: "zJAmFTCwHue7APF8kCb39YCX8J17Tsy3mxyhpQQhge8=",
  },
  "Sync complete": {
    val: "Sincroniza completa",
    translated: true,
    h: "e2VXpLTi1mhVSVqDkExwdM5j8PhfW0MHeOqBwabU4Zo=",
  },
  "Sync failed": {
    val: "Sincronia falhou",
    translated: true,
    h: "jBGq60u/Y2WKAulnVvspUq9tLPFtXOnQYczjXXViGA0=",
  },
  "Sync has not yet been set up.": {
    val: "A sincronia ainda não foi configurada.",
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
    val: "Padrão do sistema",
    translated: true,
    h: "A9haWZjRR5Su694Q278jjqi/xmRweA6I6et1Q9L3ahI=",
  },
  "Target date:": {
    val: "Dia alvo:",
    translated: true,
    h: "InmNQoNHlJkDpjvEB+J1XPqDWRqnfNIUwTQ86iNiOGc=",
  },
  "Test Toast": {
    val: "Testar Toast",
    translated: true,
    h: "5SbiliirLaAKLdgRThX+cO2RwGuC87t3Z1O0xT2WsAE=",
  },
  "There has been an error.": {
    val: "Houve um erro.",
    translated: true,
    h: "viN5uLRSpgzhvoD9KO9g1cr7ihLQ0Men9LiUpy9RcwE=",
  },
  "There was an error.  Maybe try again?": {
    val: "Existe um erro. Que tal tentar novamente?",
    translated: true,
    h: "l+W2GSV3tl8Gx19ZW+wOCziBj5/UeMCVO8tvh4P7LEo=",
  },
  "This budget was upgraded for a newer version of Buckets.  Using it with this older version may not work.": {
    val: "Esse orçamento foi atualizado para a nova versão do Buckets.  Usá-lo com a versão anterior pode não funcionar.",
    translated: true,
    h: "SJjFg0juSV/ZrJcAQJDMXveLnxwSQT4nfJiyMQFkbMw=",
  },
  "This device's name": {
    val: "This device's name",
    translated: false,
    h: "eTNSTczX466LRmFxprC4rfZhDomB7x4xWYltPshnAB4=",
  },
  "This is a special group for all the buckets without a group.": {
    val: "Esse é um grupo especial para todos os buckets sem um grupo.",
    translated: true,
    h: "QP5fEqFwlvHWJyjzrIWUJFlMvhFDxxSsl1vnej/p30I=",
  },
  "This tool will delete data to make it easy to start over with your budget.": {
    val: "Essa ferramenta vai apagar os dados para facilitar começar novamente com o seu orçamento.",
    translated: true,
    h: "+40oxGj2jDLNe4ggunYHsgL/9aQz0pw5IeRM5VlYIIU=",
  },
  "To": {
    val: "Para",
    translated: true,
    h: "syFKIORaeu0FezL85oAbo76XXa8k7bxITMbNowi8ba0=",
  },
  "Toggle Developer Tools": {
    val: "Alternar Ferramenta de Desenvolvedor",
    translated: true,
    h: "IYSSUL9ezB58nRuajYVa+zH4ucrmXQOB92zA7sDlrJc=",
  },
  "Toggle Full Screen": {
    val: "Alternar Tela Cheia",
    translated: true,
    h: "2ZRq+R5E0Cp4QI+y5jCefU1IOiYvNWLrN/iiJq6hGr8=",
  },
  "Tools": {
    val: "Ferramentas",
    translated: true,
    h: "mPsch0seV0ZNaU+41My/wS+DkAGfYqzWpPlJpfT1sBs=",
  },
  "Total amount your buckets expect each month.": {
    val: "Quantidade total esperada para seus buckets a cada mês.",
    translated: true,
    h: "UtK2gxh+N9D/p1G6dLyhcKMP5Df5XCyEp0jM0c+qoUw=",
  },
  "Transaction": {
    val: "Transação",
    translated: true,
    h: "G0gRZS6Zq1VoQqtY+L8fY3ogdqSl/OAoTurOZ4L480Q=",
  },
  "Transactions": {
    val: "Transações",
    translated: true,
    h: "4+yGUer/b71cfxTdeUa5QbonqN9ezC8Eii7KO22Ety0=",
  },
  "Transactions to review": {
    val: "Transações para revisar",
    translated: true,
    h: "fcauVC7MkwNPXVHbfBl427k53jL2beDDx711UkVI5tg=",
  },
  "Transfer": {
    val: "Transferência",
    translated: true,
    h: "B5GGqjnE8KOjYJjhsFV7zs5TGmGmVPqjihzMVxHJ3sI=",
  },
  "Trial Version": {
    val: "Versão Trial",
    translated: true,
    h: "GtZIXrHILA84HlpKlxi3BErHwR7WIYkQ/e5BE0Fiaxg=",
  },
  "Tuition": {
    val: "Mensalidade Escolar",
    translated: true,
    h: "UpDg7j7/mXJnP7WdFJe4hMlLw2XtH7X3Cj669aLHzec=",
  },
  "Un-kick": {
    /* Button label for unarchiving a bucket */
    val: "Desfazer chutar",
    translated: true,
    h: "P5Z1ij4jmS06jNOQiHymi+/D+uYJktoalTdw+AHGukM=",
  },
  "Un-kick Bucket": {
    /* Name of action for undo/redo labels (i.e. Control-Z will "Undo Un-kick Bucket") Consider this the opposite of "Archive Bucket" */
    /* Name of action.  Consider this "Unarchive Bucket" */
    val: "Desfazer Chutar o balde(Bucket)",
    translated: true,
    h: "7WOQPepkeOH+dwwSbEjomy0amoqY5JtvtlyCSG02c1Q=",
  },
  "Unable to claim access token": {
    val: "Não é possível ter acesso ao token",
    translated: true,
    h: "Gao95RuT9JvhdAoZ5winV9os7iMaPIex3Vq9CMSjhzs=",
  },
  "Unable to open the file:": {
    val: "Não é possivel abrir o arquivo:",
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
    val: "Não apurado",
    translated: true,
    h: "1GBgqlG+RCS8dFTG2z15jLFFd4PCVVXDefXwBRq0oTs=",
  },
  "Undo": {
    val: "Desfazer",
    translated: true,
    h: "Z1A2vTdYwfdLsWS25iSchnHOHa1VfbQg7u8MDGHk4yo=",
  },
  "Unexpected sync error": {
    val: "Erro de sincronia inesperada",
    translated: true,
    h: "78kYsQMTfGS8BNaZVuqYaRojJlTpcmN6CF9PQKKO0ME=",
  },
  "Unique ID": {
    val: "Unique ID",
    translated: true,
    h: "UZsJmQ28mtEO349l3zdNHoAtb0JT1LT9e7EjedqptSE=",
  },
  "Unknown category": {
    val: "Categoria desconhecida",
    translated: true,
    h: "bK4teMnFOuofJ4sX76ozAla50yDaLbvb5pCj+New5f4=",
  },
  "Unlinked Accounts": {
    val: "Contas desvinculadas",
    translated: true,
    h: "BPAjsiEkATiwSf9f6kde3yZwSmmyiPDLiZ7Rr+3Zv/A=",
  },
  "Unregistered Version": {
    val: "Version Não Registrada",
    translated: true,
    h: "x9ekMClqI57T6jREU5VJurBCzlD+hBNJ8pHNQ0zMB1U=",
  },
  "Update Account Balance": {
    val: "Atualizar Saldo da Conta",
    translated: true,
    h: "iwKjdHzqHPwoupXiUwrVL1tX4QfO//taXOPXFVtWRVE=",
  },
  "Update Account Name": {
    val: "Atualizar Nome da Conta",
    translated: true,
    h: "xcyLhnHNOTDgJsYGhaelbAmXYam4HWMfD5mQiTiZJ50=",
  },
  "Update Available": {
    val: "Atualização Disponível",
    translated: true,
    h: "FKOD6i3t69T8rvTwVJ5VSnLfkQPBcceuuk2X4ZsNKMY=",
  },
  "Update Bucket Name": {
    val: "Atualizar Nome do Bucket",
    translated: true,
    h: "Oa+1EZtc4RTtPYyk5LflMMlQq/esZ3qvTgbSLiKIl4E=",
  },
  "Update Bucket Type": {
    val: "Atualizar Tipo de Bucket",
    translated: true,
    h: "wt5F9WSIpGlUsGaPnhSJlLYk0qraymNHDw0bYzbHlIE=",
  },
  "Update Color": {
    val: "Atualizar Cor",
    translated: true,
    h: "6QBa9YrDFsWCiiS/PMj7r+cTmIgMmmqjTnv9x4l90ic=",
  },
  "Update Currency Symbol": {
    val: "Update Currency Symbol",
    translated: false,
    h: "5ni7IpG/zzlc/uAhhkduQ99K/5B9ui5INpaxZw7QTrs=",
  },
  "Update Goal": {
    val: "Atualizar Objetivo",
    translated: true,
    h: "S3dt9ahT1yTXTCP2uHqiTMkyPUmAvAHvsCeGNa+NL1E=",
  },
  "Update Group Name": {
    val: "Atualizar Nome do Grupo",
    translated: true,
    h: "/pmHZLX1mkRHtus8eVyojidhAUe6BocaSkf5dGoIrSM=",
  },
  "Update Macro Name": {
    val: "Atualizar Nome da Macro",
    translated: true,
    h: "61srDLhVLo6bOo+SbnJ0rMbhNhXXRxEjgP3/nFafMKI=",
  },
  "Update Monthly Deposit": {
    val: "Atualizar Depósito Mensal",
    translated: true,
    h: "rFQ5lKjSNpQyyptg2Y+a4LQ6jwa1xWjKarMapXiD1/8=",
  },
  "Update Name": {
    val: "Atualizar Nome",
    translated: true,
    h: "fTqm8NUcvzaYHnGFDmVhLePEd/TFNPhUDzSYIIerjNc=",
  },
  "Update Note": {
    val: "Atualizar Nota",
    translated: true,
    h: "h4A+jnQW9OrS0wVVoQ9OEJ5I6/h4p7IWrKvN+uSXe4I=",
  },
  "Update Target Date": {
    val: "Atualizar Dia Alvo",
    translated: true,
    h: "SEac1rQopyHALPSWU85qYV3GE0x9i2OGDB+JYnVID8A=",
  },
  "Update Transaction": {
    val: "Atualizar Transação",
    translated: true,
    h: "aMF18BJOMjuVOInpbGKf/3jyTE1qYzq4oHzb3sBVcWw=",
  },
  "Update account balance": {
    val: "Atualizar saldo da conta",
    translated: true,
    h: "GQWvUamqQOyoaXm16AiGtHme6kW171erNK5pa4vgDIE=",
  },
  "Update balance": {
    val: "Atualizar saldo",
    translated: true,
    h: "XSg0Q5Q7j+G+HNjn3YJOakbNLSjTNcem3BFbw6fTDI8=",
  },
  "Update balance without a transaction": {
    val: "Atualizar saldo sem uma transação",
    translated: true,
    h: "thUs8btJm84m3sFUOg0QZBXmDfqGOrDhsYqwJ31BIAo=",
  },
  "Update downloaded.": {
    val: "Atualização baixada.",
    translated: true,
    h: "DO2vE3TgW3xjiD8ZaOWeScL3qWCyiFPK8GENQ9NosYw=",
  },
  "Used in future": {
    val: "Usado no futuro",
    translated: true,
    h: "O0zGsqv23d44/pWJqCSt+qkDtG/nBrBI2W0aRA9XoDw=",
  },
  "Vacation ": {
    val: "Férias ",
    translated: true,
    h: "Buf8KjuQKnfaA4c2qPDVm8FQgYWJUfiCYYkPAnsIIBw=",
  },
  "View": {
    val: "Ver",
    translated: true,
    h: "paIseOhKCT2+NaUBPKk98vQB/lphf7jIGeERV77doDg=",
  },
  "Want": {
    val: "Deseja",
    translated: true,
    h: "lV/eDqkplJ/XKjHyCSE47yOWOl3t3Igj9S559wDKMZI=",
  },
  "Wants": {
    val: "Precisa",
    translated: true,
    h: "AOckwUko9CT2K8gxtu/GHFhjivPPgTDgQSjCNSujUV4=",
  },
  "Warning: Doing this will use rain you don't have and could steal rain from future months (if available).": {
    val: "Aviso: Fazendo isso irá usar a chuva que você não tem e pode roubar chuva de meses futuros (se disponível).",
    translated: true,
    h: "YR+S0SMnFz4+K5vpXrMzMfSaBE5mHBrhQTalzgI0/7U=",
  },
  "Water": {
    val: "Água",
    translated: true,
    h: "BOL+IhrDsm6ooEqGpFPieQoyXrWpV6LvKh0DvkAJ2bw=",
  },
  "When \"On\" this macro will be run during a normal sync.": {
    val: "Quando \"On\" essa macro irá executar durante a sincronia normal.",
    translated: true,
    h: "HnJ7qVSPXxIg3/lygw1Ln/VvBMBs8roJwXlCpP2KnMw=",
  },
  "Window": {
    val: "Janela",
    translated: true,
    h: "qjw17TPhgeX5msjicdTljyCEeBLFbQvz/oyOunMLJnQ=",
  },
  "Year to Year": {
    val: "Ano a ano",
    translated: true,
    h: "YBGCdB/QACmMM/QS2qMrGlC8qtfWz9bhue7sgDaIRHg=",
  },
  "Year's Supply": {
    val: "Suprimento do Ano",
    translated: true,
    h: "E5VfnhjiYed/e2Ezg+RdChSIz6cjwl9oyRzpO1rjl0I=",
  },
  "Yearly": {
    val: "Anualmente",
    translated: true,
    h: "LjMZRIZX3jdNUpbBBgqpPR9Az6c4sBWYUwd2WDVb9Rw=",
  },
  "Years": {
    val: "Anos",
    translated: true,
    h: "9bCZk+mcGxconx1JMhBZKdnRo4id89h4UiucsvMRAng=",
  },
  "Yes": {
    val: "Yes",
    translated: false,
    h: "GE/aXJgLnZyzdfQqUogXxiNfvU95d1qAGPrlr8vfKmM=",
  },
  "You are running the latest version!": {
    val: "Você está rodando a versão mais atual!",
    translated: true,
    h: "hShy87A6GAhRqqtK+8VdVeGD70zA64iiV0/SwectQ0I=",
  },
  "You can do math in all number inputs, not just here in the calculator.": {
    val: "Você pode fazer contas em todos os campos numéricos, não apenas aqui na calculadora.",
    translated: true,
    h: "dn2W/ktTrcwSzYNSq6IQL7Sl2k8lxZQRsFehzG9Mf7g=",
  },
  "You don't have any recurring expense buckets yet.": {
    val: "Você ainda não tem buckets com despesa recorrente.",
    translated: true,
    h: "nq2IDCqs8m0MQJ5lO2TU1cnlj9nP1vwIMWMqi0WGOjk=",
  },
  "You have no closed accounts.": {
    val: "Você não tem contas fechadas.",
    translated: true,
    h: "8BZG+UdW1Rrd/+2zFNv7SskiNpD6DtlNa8LwQulqX5s=",
  },
  "You haven't kicked the bucket yet...": {
    val: "Você ainda não chutou o balde...",
    translated: true,
    h: "mtaAsLJ7BgWZcbIkRmZ4ZPSSRGXj6vJ2H8+diLhIba4=",
  },
  "You must backup to a different file.": {
    val: "Você deve fazer o backup em um arquivo diferente.",
    translated: true,
    h: "LAt5pxdaPsRHDU6bS2Cu1aEDIQ2oZAMw46Pa7H6pc5o=",
  },
  "You must have at least one column each set to Amount, Memo and Date Posted.": {
    val: "Você deve ter ao menos uma coluna de cada marcado como Amount, Memo e Date Posted.",
    translated: true,
    h: "k5NuGeKNgPfZs7xUbwp5PgfPr6dosV0ZTVxAnphHH6E=",
  },
  "Your email address:": {
    val: "Seu endereço de email:",
    translated: true,
    h: "/ip+dZCEKXdLQFW5CAt/fB8OBf/rD+67pz8etOXlJXc=",
  },
  "Zoom": {
    val: "Zoom",
    translated: true,
    h: "Zjzswxbrkbj1TLPOYCtimoyh/aJlkF/mxeghbzdheSs=",
  },
  "Zoom In": {
    val: "Mais Zoom",
    translated: true,
    h: "p3yHl1qkGVfRDPsLKitBuZhRJIDaTy3fV/vbWqOzo24=",
  },
  "Zoom Out": {
    val: "Menos Zoom",
    translated: true,
    h: "hRo1uzcSNStVll7ef2xHOB6PqFh+q7Sg/VHiGcK4M8M=",
  },
  "account-bal-diff-1": {
    val: "O Saldo atual não confere com a última sincronia por uma destas razões:",
    translated: true,
    h: "9KaivrLeSKn8ROgvad6S9iE9NAz0BZRwQh3/ufRahVA=",
  },
  "account-bal-diff-fix-1": {
    /* 'Buckets' refers to the application name */
    val: "O banco informou um saldo futuro.  Para consertar isso, espere que todas as transações chegem aos seus baldes.",
    translated: true,
    h: "CRYYgg8YHspvP5KI3HGvyzlrOhxZf4rrjjUQbmL6Z7Q=",
  },
  "account-bal-diff-fix-2": {
    /* 'Buckets' refers to the application name. */
    val: "Transações estão sumidas dos Baldes.",
    translated: true,
    h: "CeKVWaErT3a5EvPpQb/Av2kHD7RtudYjlQntfcMMtS8=",
  },
  "account-in": {
    /* Label for amount put into an account */
    val: "Entrada",
    translated: true,
    h: "TcCPpYF7/U7vM5pPmpqvJipZt0WPk3A/vC7Ec8pfDvo=",
  },
  "account-net-amount": {
    /* Label for net value of amount in - amount out for an account */
    val: "Líquido",
    translated: true,
    h: "QITdwYnhK1fVfALCDc6jQhY2jLIUBpPp0/bSHOX6p9M=",
  },
  "account-out": {
    /* Label for amount taken out of an account */
    val: "Saída",
    translated: true,
    h: "v4Oj0CQx7cmHP4mcJsZX4xMTzMzeFS81XA9gU3qOFKU=",
  },
  "account-type": {
    val: "Tipo",
    translated: true,
    h: "xE96uLvSSFjRvRq5lfIcX1LGpnGQeyntOksJQ0X3CyE=",
  },
  "accounts.balance_mismatch_msg": {
    val: "O saldo mais recente que foi sincronizado não confere com o saldo computado das transações.  Clique ... para mais informações.",
    translated: true,
    h: "8xHas2SyXqC7roWhYQNIVhFVNvbvzMi6Y3mQce5sIbc=",
  },
  "accounts.name_placeholder": {
    val: "sem nome",
    translated: true,
    h: "UwMHboI9q49SZQkwMN8ps9zBi6YOSdtwakjLJwudtyA=",
  },
  "action.New bucket": {
    val: "Novo bucket",
    translated: true,
    h: "aIKjDQtVbUMjIHU/6fccfiWBUIwUBnAofdzRJTCuytI=",
  },
  "action.New group": {
    val: "Novo grupo",
    translated: true,
    h: "054RU7JImk6Pavh27xHA9CgGIgjmP0dYIgXez2UWx34=",
  },
  "action.ignore": {
    val: "Ignorar",
    translated: true,
    h: "K8sAh2XND1/tJOuX9xTLmr1fQjUOB70cfc9GwI62fEs=",
  },
  "action.link-account": {
    val: "Ligar",
    translated: true,
    h: "unfAYQpjuyuTjjRCodr+S+jNjRmz3nahjZ91u/j5HfE=",
  },
  "action.report bug": {
    val: "Reportar um Bug",
    translated: true,
    h: "RxuE9Dh0Dadda2PtjUPD0dQ7b8aQok84Ytvw31ABBRU=",
  },
  "bucket.detailslabel": {
    val: "Detalhes",
    translated: true,
    h: "68e/QPEuI36iIEcTWmKDrVU9KBReQ3EjFzF1F06KQMA=",
  },
  "bucket.transfer.help": {
    val: "Uma transferência é uma transação de um bucket para outro.  Se a transação não for uma renda ou uma despesa, provavelmente é uma transferência.",
    translated: true,
    h: "dh5nslkaB1wNR4tJ5zAn6Hms+9oJqBDmAIR5k6WE6iY=",
  },
  "bucketactivity.help": {
    val: "Esta é a soma do dinheiro retirado desse bucket e transferido de outros buckets nesse mês.",
    translated: true,
    h: "//A1247jGgumC/yiUDcTLEsXMcwseMWOiaZOpsiMCu0=",
  },
  "buckethead.in": {
    val: "Quantidade de dinheiro para colocar esse mês.",
    translated: true,
    h: "VaDlj3R8L2TD4QFh1rotfK5RjV7WF91mP3iqVAvdppc=",
  },
  "bucketinout.help": {
    val: "Utilize para colocar ou retirar dinheiro de cada bucket.",
    translated: true,
    h: "FVxtuv3HRHdU7Snx+P3YYxcSngOkrcKyS5mng6AB8gE=",
  },
  "bucketrain.help": {
    val: "Isso é quanto dinheiro esses buckets querem a cada mês.  A pequena caixa indica quanto eles receberam.",
    translated: true,
    h: "3dbOFkUiGaEoD01CP7kIWDQHgUbULWexjdEKdEAF3sA=",
  },
  "buckettype.deposit": {
    val: "Despesa recorrente",
    translated: true,
    h: "3HXotB9ZHFm14ArdM0RfCT0merw8+KuXthbzotnPRec=",
  },
  "buckettype.deposit-date": {
    val: "Guardar Z/mês até Y data",
    translated: true,
    h: "zdWdEX9eN5qpFDboBF+wi9EIguwYsB9nQCzN9GjrxMc=",
  },
  "buckettype.goal-date": {
    val: "Guardar X por Y data",
    translated: true,
    h: "+boZHIer4ggkvJ8A5cSl1EVyWRwKigC9UkBFn4WSEdg=",
  },
  "buckettype.goal-deposit": {
    val: "Guardar X depositando Z/mês",
    translated: true,
    h: "BUzPSZsbi+lN/3tb6eF63oa7CEzS94r6ee5jf5G7inA=",
  },
  "buckettype.plain": {
    val: "Bucket padrão",
    translated: true,
    h: "AqvTaZK8lidyI8PZ9JXBBQABazz8uxM+uQM6iEuyO6w=",
  },
  "budget-file-type-name": {
    val: "Despesas Buckets",
    translated: true,
    h: "g2jeytcuhPOlEo6R2OlTzT3vNdE7sVWGnXuffEioq4c=",
  },
  "connection-instructions": {
    val: "Provide the following Connection URL to the other device",
    translated: false,
    h: "kwKSKlSPTFMLAO7bG4077aAVl7XZft2SrNJMOfe5ILQ=",
  },
  "daterange.all": {
    val: "Todo o período",
    translated: true,
    h: "Fz1lBhxlewLJ5bSKTiIzzaW3CAtAPxkUWWKU0BVqgAA=",
  },
  "daterange.from2monthsago": {
    val: "Desde 2 meses atrás",
    translated: true,
    h: "zb4vtJXSL+UcXZTjSbkQueS8khVvJO2MDoFKKPuuDPM=",
  },
  "daterange.from3monthsago": {
    val: "Desde 3 meses atrás",
    translated: true,
    h: "4957XI6fjMtXcCqj3IRSUSQzX4ZlEucDTuwgu2krTLw=",
  },
  "daterange.fromlastmonth": {
    val: "Desde o último mês",
    translated: true,
    h: "tIBgx9VgMgV21a9XhH7L7TIe/PfdgcW3fdfGaGOeVMo=",
  },
  "daterange.thismonth": {
    val: "Esse mês",
    translated: true,
    h: "jqSPxB9W3Xqmvb/7MIrwKgcCTUR0zgU3qqTqJFET1e0=",
  },
  "debt-bucket-explanation": {
    val: "Esse é um balde de débito especial.",
    translated: true,
    h: "+XZJ0Nl0JR5/xu1lf1csGge9E19plZmcKQmuaBg44aI=",
  },
  "debt-payment-bucket-name": {
    /* A likely account name might be "Credit Card" or "Chase VISA".  This is the name of the bucket that holds the payment for the debt account. */
    val: (account_name:string) => `${account_name} Pagamento`,
    translated: true,
    h: "QvSzok8BqSPb+A0q+87lqp62Rk+JFQhIno38JQyUfYg=",
  },
  "default account name": {
    val: "Economias",
    translated: true,
    h: "zCYN8vtLT3Hhb9CbDDSL2xOOjqhzmmhMa5yWDTR7bCE=",
  },
  "default new bucket name": {
    val: "Novo Bucket",
    translated: true,
    h: "FchHrB6weykpHiqRVxc5QKb6BEdhH4DXrc+t6RNcF8M=",
  },
  "default new group name": {
    val: "Novo Grupo",
    translated: true,
    h: "1dmXA/VlW+tjhojOGcypAy70L2wupHf9EdVjUByvpmA=",
  },
  "edit.mapping": {
    val: (onClick) => {
          return <span>Or <a href="#" onClick={onClick}>editar mapeamento.</a></span>
        },
    translated: true,
    h: "hFYUKKIqC+nYQ+RRKwNu3/PGxbtuHzNHoigSJwCK8d4=",
  },
  "enter-license-prompt": {
    val: "\n      Por favor coloque a licença do Buckets abaixo.  Não tem uma licença?  <a href=\"#\" id=\"clicktobuy\">Clique aqui e compre uma.</a>\n    ",
    translated: true,
    h: "bQ5kF1mLhFNyrJzVhTf5Cz5lxO8mRww7nwMpeCy9HC8=",
  },
  "error-detail": {
    val: "Se esse erro continuar acontecendo ou se ele não fizer sentido, por favor reporte um bug ou converse conosco.",
    translated: true,
    h: "10Kk29tlHpBnhcTf7RRMfq1OZPGZgvPPguRlInaLNoY=",
  },
  "getting-started-link": {
    val: (clickhandler) => {
          return <span>Primeira vez usando o Buckets?  Veja o <a href="#" onClick={clickhandler}>Videos para quem está começando.</a></span>
        },
    translated: true,
    h: "9NGQRvIxlAaOF9i+zWPXMFQubcY+5jtA7Td/lii16aM=",
  },
  "go-to-next-month": {
    /* Menu label for "Go To... Next Month" */
    val: "Próximo Mês",
    translated: true,
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
    val: "Mês Anterior",
    translated: true,
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
    val: "Esse Mês",
    translated: true,
    h: "pjcOO9o+UFMLsp6ovyVzksVtCLcFsauwEITWoeq//bg=",
  },
  "in the bank": {
    val: "no banco",
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
    val: "Misc",
    translated: true,
    h: "DPoc7CIbzLHJxuar3WnaidO3Ryy1QtYkCswRzVHtVBg=",
  },
  "money-balance-as-of": {
    val: (amount:JSX.Element, date:JSX.Element) => {
                  return <span>{amount} as de {date}</span>
                },
    translated: true,
    h: "99X4HuXB5SeCrTqn5LuD/S4a6GjUCB6gV1Z1gAZPfKM=",
  },
  "months gain/loss label": {
    val: (gain) => {
                        return gain >= 0 ? "Ganhos do mês" : "Perdas do mês";
                      },
    translated: true,
    h: "lGcEnJfZJau2h5ohbKNxY1FjL0vJoW3oJOJQwSCt+Kg=",
  },
  "more": {
    val: "mais",
    translated: true,
    h: "uiqCMjSdL1TgDZHPNYXLnfN/yZq59+kDR/wKZSAP0hU=",
  },
  "nag-message": {
    val: () => `Essa é uma versão trial não registrada, e embora o trial seja sem limite de tempo, uma licença deve ser comprada para continuar sendo utilizada.

Você gostaria de comprar uma licença agora?`,
    translated: true,
    h: "cugeP6FVXqdiCtOers5rslG0mDD5t/Rfl1ZWslfhD48=",
  },
  "navigatestep": {
    val: (url) => `Va para ${url}`,
    translated: true,
    h: "nI/J4GfYlL6BgRZRSiPFfA5o7ASdx2VVYW6x3vgCuKE=",
  },
  "net-transfers.help": {
    val: "Transferência líquida é a soma total de todas as transações marcadas como transferência.  Deveria ser 0.  Se não é, clique no valor para se certificar de que não existem transações duplicadas ou categorazada incorretamente como transferência.",
    translated: true,
    h: "2P3jr/VPQ35tlPa/uDMqi1spXO4Rinn76fgfVOegiA8=",
  },
  "noin.income": {
    val: "Renda",
    translated: true,
    h: "D2fJbta5d1Z5QYuRC5zzkBHsItZOOgY4FKrFJ64BvRs=",
  },
  "notify-downloaded-file": {
    val: filename => `Arquivo baixado: ${filename}`,
    translated: true,
    h: "HwxJ2TVx57Qef6bXYySekL/eoBzvIEFUqBxQdxgcyCs=",
  },
  "noun.debt": {
    val: "Débto",
    translated: true,
    h: "y9kslXhW17gMMFZ9Dq8g/tabfINzlmzT+39QNbWiWGA=",
  },
  "noun.transfer": {
    val: "Transferência",
    translated: true,
    h: "B5GGqjnE8KOjYJjhsFV7zs5TGmGmVPqjihzMVxHJ3sI=",
  },
  "off": {
    val: "desligado",
    translated: true,
    h: "nzvsum5LFYOz4ZRB3eTVliJTfZvVSpTSImJ4XkhThNA=",
  },
  "on": {
    val: "ligado",
    translated: true,
    h: "mQwjhouWWBSxF8+abE3+RUUurcIXHh+YGGXr/ITxByQ=",
  },
  "press Escape to close": {
    val: "pressione Esc para fechar",
    translated: true,
    h: "5jKKS3xwogwcB2YptY5sW2/MQ/ikfMbR99l8ViHxmAA=",
  },
  "rain.help.neg": {
    val: (abs_amount:JSX.Element) => {
                                      return <span>
                                      Você guardou {abs_amount} a mais nos buckets.  Se todas as transações foram categorizadas esse mês, remova {abs_amount} dos buckets a sua escolha.
                                      </span>
                                    },
    translated: true,
    h: "tqXmJxZXqyA0mN/8ugZkpCyspyO7XlPnGlEYGWgQ7jk=",
  },
  "rain.help.pos": {
    val: (abs_amount:JSX.Element) => {
                                      return <span>
                                      Você tem {abs_amount} sobrando para guardar nos buckets.
                                      </span>
                                    },
    translated: true,
    h: "boezbSGkVm3dnfFvodJOAeCgAEMIQN9L+8TwEHLpU/o=",
  },
  "shipment-number": {
    /* Noun labeling this shipment number */
    val: (number:number)=>`Envio ${number}`,
    translated: true,
    h: "kOj0AkivxHYJj3IKqIFziGCcIwk1yxyUrloX+kGlOd0=",
  },
  "simplefin-connect-intro": {
    val: "Para conectar, faça o seguinte:",
    translated: true,
    h: "421gz/BziKZhsIy2YKRFNtwoqPcbQ7uhFZWWfd6ReBg=",
  },
  "simplefin-get-token": {
    val: (mklink) => {
              return <span>Pegue um token SimpleFIN do {mklink('SimpleFIN Bridge')}</span>
            },
    translated: true,
    h: "VEeKjngcHxowWbB2xWy5oNH4MXIfJQ7EqpiomT6V0fg=",
  },
  "simplefin-paste": {
    val: "Então cole seu Token SimpleFIN aqui:",
    translated: true,
    h: "vAoRsY20OBqs8bleaXD3auq8VnO9gQj7gXz5p+p71EI=",
  },
  "single-account Closed": {
    val: "Fechado",
    translated: true,
    h: "8pZrnvzAUQTJhDN/XX31DLvx0wIs1Ww3fV6pktEKEHs=",
  },
  "single-bucket Kicked": {
    val: "Chutado",
    translated: true,
    h: "cWApfoLlcBvoHizIFtrDQq3uwrZIYMXKO1iLMvv8szI=",
  },
  "some day...": {
    val: "algum dia...",
    translated: true,
    h: "4K+3SY48UwcktULX4xiGt6J8Q8Hys3JjUR3t62WI6mo=",
  },
  "sync-symbol help": {
    val: "Esse simbolo significa que a transação veio de uma sincronia/importação",
    translated: true,
    h: "S3tDRls+AJYj6f8jSNSCa1FVyNY+ngn6Db1EQJ3dpLE=",
  },
  "sync.toast.syncing": {
    val: (start: string, end: string) => {
        return `Sincronizando transações de ${start} até ${end}`;
      },
    translated: true,
    h: "utj3wVCxisKfYRDtJ+t5B8jPlLKwhght2S5Cb3b0qZc=",
  },
  "this_device.name": {
    val: "No name",
    translated: false,
    h: "Z85JCnN1GdDw+yMwZqwW8aeKgQkvCHCkVIkIjZt7G00=",
  },
  "toast.updated-trans": {
    val: count => `Atualizada/Criada ${count} transações`,
    translated: true,
    h: "bBKDE3rQIV5P80cYEL6mkLmIvgxjzVHCIf3aFa+KtmU=",
  },
  "trans-created-outofview": {
    val: (month: string) => {
              return <span>Transação criada em {month} </span>;
            },
    translated: true,
    h: "ur97iCX3Iw1E262eZ72YAEFdXlwvlqNkyNn1caIKi0E=",
  },
  "transfer-from-account": {
    val: (dropdown:JSX.Element) => {
                return <span>Transferir de {dropdown}</span>
              },
    translated: true,
    h: "VJmIMDZGOdMKwBpoqDUYiVdCFhw1pJ4qCmKiszAECL4=",
  },
  "transfer-to-account": {
    val: (dropdown:JSX.Element) => {
                return <span>Transferir para {dropdown}</span>
              },
    translated: true,
    h: "Bd1IGkjXo2ruWofGrT+WwLdiy8IwJ/PW+7SO4TaDcps=",
  },
  "verb-open": {
    /* Verb to open a page */
    val: "Abrir",
    translated: true,
    h: "PlLwT5LggHCmpOqXIa1xXdU/K/ztbasiD703lhOnltA=",
  },
  "version-available": {
    val: (newv:string) => `Versão ${newv} disponível.`,
    translated: true,
    h: "YCoofx1v0tRUHkHfhFnm6bV2xXfnsNT6QAyXqgkUa9c=",
  },
}
export const pack:ILangPack = {
  name: 'Português',
  dir: 'ltr',
  numbers: 'period-comma',
  messages,
  contributors,
}
