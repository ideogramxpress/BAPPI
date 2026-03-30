export type UserRole = 
  | 'SuperAdmin' 
  | 'Admin' 
  | 'OperationsManager' 
  | 'FinanceManager' 
  | 'SupportAgent' 
  | 'Moderator' 
  | 'Vendor' 
  | 'Customer';

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

export interface VendorProfile {
  uid: string;
  storeName: string;
  status: 'pending' | 'approved' | 'rejected' | 'suspended';
  riskScore: number;
  walletBalance: number;
  createdAt: string;
}

export interface Product {
  id: string;
  vendorId: string;
  name: string;
  description: string;
  price: number;
  categoryId: string;
  status: 'pending' | 'approved' | 'rejected' | 'flagged';
  stock: number;
  images: string[];
}

export interface Order {
  id: string;
  customerId: string;
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'out_for_delivery' | 'delivered' | 'returned' | 'cancelled' | 'refunded';
  paymentStatus: string;
  createdAt: string;
}

export interface SiteSettings {
  maintenanceMode: boolean;
  siteName: string;
  commissionRate: number;
  homepageSections: any[];
  headerConfig: any;
  footerConfig: any;
}
