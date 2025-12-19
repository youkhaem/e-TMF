import { useState } from 'react';
// Ces imports fonctionneront peu importe l'emplacement de App.tsx
import Login from "@/app/components/Login";
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
import Dashboard from "@/app/components/Dashboard";
import TMFZoneView from "@/app/components/TMFZoneView";
import DocumentManagement from "@/app/components/DocumentManagement";
import WorkflowApprovals from "@/app/components/WorkflowApprovals"
import AuditTrail from "@/app/components/AuditTrail"
import Settings from "@/app/components/Settings"



// N'oubliez pas votre CSS qui est dans src/styles/
import "@/styles/index.css";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');
  const [user, setUser] = useState<{
    name: string;
    email: string;
    role: string;
  } | null>(null);

  const handleLogin = (email: string, password: string, role: string) => {
    // Mock authentication
    setUser({
      name: email.split('@')[0],
      email,
      role,
    });
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setCurrentView('dashboard');
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar currentView={currentView} onNavigate={setCurrentView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={user} onLogout={handleLogout} />
        <main className="flex-1 overflow-y-auto p-6">
          {currentView === 'dashboard' && <Dashboard />}
          {currentView === 'tmf-zones' && <TMFZoneView />}
          {currentView === 'documents' && <DocumentManagement />}
          {currentView === 'approvals' && <WorkflowApprovals />}
          {currentView === 'audit-trail' && <AuditTrail />}
          {currentView === 'settings' && <Settings />}
        </main>
      </div>
    </div>
  );
}

export default App;
