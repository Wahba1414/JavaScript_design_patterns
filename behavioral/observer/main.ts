import { Dashboard } from './Dashboard.observer';
import { PayrollData } from './PayrollData.observable';


export function observerMain(): void {
  const payrollData: PayrollData = new PayrollData();

  const dashboard1: Dashboard = new Dashboard(payrollData, '1');
  const dashboard2: Dashboard = new Dashboard(payrollData, '2');

  payrollData.dataChanged('A new Payslip is created');

  dashboard1.display();
  dashboard2.display();


  payrollData.dataChanged('A new Timesheet is created');

  dashboard1.display();
  dashboard2.display();

}