import { 
  LayoutDashboard, 
  Folder, 
  FileText, 
  CheckCircle, 
  Shield, 
  Settings,
  ShieldCheck
} from 'lucide-react';
import { Button } from './ui/button';

interface SidebarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

const navigation = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'tmf-zones', label: 'TMF Zones', icon: Folder },
  { id: 'documents', label: 'Documents', icon: FileText },
  { id: 'approvals', label: 'Approvals', icon: CheckCircle },
  { id: 'audit-trail', label: 'Audit Trail', icon: Shield },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function Sidebar({ currentView, onNavigate }: SidebarProps) {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <ShieldCheck className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg text-gray-900">e-TMF</h1>
            <p className="text-xs text-gray-500">Clinical Trials</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            
            return (
              <Button
                key={item.id}
                variant={isActive ? "secondary" : "ghost"}
                className={`w-full justify-start ${
                  isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                }`}
                onClick={() => onNavigate(item.id)}
              >
                <Icon className={`mr-3 h-5 w-5 ${isActive ? 'text-blue-700' : 'text-gray-500'}`} />
                {item.label}
              </Button>
            );
          })}
        </div>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-xs text-blue-900 mb-2">ICH-GCP Compliant</p>
          <p className="text-xs text-blue-700">21 CFR Part 11</p>
        </div>
      </div>
    </aside>
  );
}
