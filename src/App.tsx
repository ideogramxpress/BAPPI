import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Layout } from './components/layout/Layout';
import { DashboardLayout } from './components/layout/DashboardLayout';

// Pages
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Login } from './pages/Login';

// Dashboards
import { CustomerDashboard } from './pages/dashboards/CustomerDashboard';
import { VendorDashboard } from './pages/dashboards/VendorDashboard';
import { AdminDashboard } from './pages/dashboards/AdminDashboard';
import { SupportDashboard } from './pages/dashboards/SupportDashboard';

const ProtectedRoute: React.FC<{ children: React.ReactNode; roles?: string[] }> = ({ children, roles }) => {
  const { user, profile, loading } = useAuth();

  if (loading) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  if (!user) return <Navigate to="/login" />;
  if (roles && profile && !roles.includes(profile.role)) return <Navigate to="/" />;

  return <>{children}</>;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/product/:id" element={<Layout><ProductDetail /></Layout>} />
      <Route path="/cart" element={<Layout><Cart /></Layout>} />
      <Route path="/checkout" element={<Layout><Checkout /></Layout>} />
      <Route path="/login" element={<Login />} />

      {/* Role-based Dashboards */}
      <Route path="/dashboard" element={
        <ProtectedRoute roles={['Customer']}>
          <DashboardLayout><CustomerDashboard /></DashboardLayout>
        </ProtectedRoute>
      } />
      <Route path="/vendor-dashboard" element={
        <ProtectedRoute roles={['Vendor']}>
          <DashboardLayout><VendorDashboard /></DashboardLayout>
        </ProtectedRoute>
      } />
      <Route path="/admin-dashboard/*" element={
        <ProtectedRoute roles={['SuperAdmin', 'Admin']}>
          <DashboardLayout><AdminDashboard /></DashboardLayout>
        </ProtectedRoute>
      } />
      <Route path="/support-dashboard" element={
        <ProtectedRoute roles={['SupportAgent']}>
          <DashboardLayout><SupportDashboard /></DashboardLayout>
        </ProtectedRoute>
      } />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}
