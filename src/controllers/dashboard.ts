import DashboardModal from '../modals/dashboard';
import { IDashboard } from '../types/iDashboard';

export const readDashboard = async () => {
      const result: IDashboard[] = await DashboardModal.find();
      return result;
};
