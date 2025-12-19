import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { 
  CircleAlert, 
  CircleCheck, 
  Clock, 
  FileText, 
  TriangleAlert,
  ShieldCheck,
  Users,
  Building
} from 'lucide-react';
import { Button } from './ui/button';

export default function Dashboard() {
  const studies = [
    { 
      id: 'PRO-2024-001', 
      name: 'Phase III Cardiovascular Study', 
      phase: 'Phase III',
      status: 'Active',
      completeness: 87,
      sites: 45,
      country: 'Multi-country'
    },
    { 
      id: 'PRO-2024-002', 
      name: 'Phase II Oncology Trial', 
      phase: 'Phase II',
      status: 'Active',
      completeness: 72,
      sites: 23,
      country: 'USA'
    },
    { 
      id: 'PRO-2023-058', 
      name: 'Phase I Safety Study', 
      phase: 'Phase I',
      status: 'Completed',
      completeness: 100,
      sites: 3,
      country: 'UK'
    },
  ];

  const recentActivity = [
    { action: 'Protocol Amendment v2.0 uploaded', user: 'Dr. Sarah Chen', time: '15 minutes ago', type: 'upload' },
    { action: 'ICF approved for Site 012', user: 'John Martinez (Monitor)', time: '1 hour ago', type: 'approval' },
    { action: 'CV expires in 30 days - Site PI', user: 'System', time: '2 hours ago', type: 'warning' },
    { action: 'SAE Report submitted', user: 'Dr. Emily Parker', time: '3 hours ago', type: 'upload' },
    { action: 'Monitoring visit report reviewed', user: 'Jane Smith (CRA)', time: '5 hours ago', type: 'review' },
  ];

  const alerts = [
    { title: 'Missing ICF - Site 003', severity: 'high', zone: 'Zone 03', count: 1 },
    { title: 'Pending Approvals', severity: 'medium', zone: 'Multiple', count: 7 },
    { title: 'Documents Expiring Soon', severity: 'low', zone: 'Zone 02', count: 12 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl text-gray-900 mb-1">Dashboard</h1>
        <p className="text-gray-600">Overview of all clinical trial activities</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Active Studies</CardTitle>
            <FileText className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">12</div>
            <p className="text-xs text-gray-500 mt-1">+2 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Avg TMF Completeness</CardTitle>
            <ShieldCheck className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">84%</div>
            <p className="text-xs text-gray-500 mt-1">
              <span className="text-green-600">+3%</span> from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Pending Approvals</CardTitle>
            <Clock className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">7</div>
            <p className="text-xs text-gray-500 mt-1">Requires attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Active Sites</CardTitle>
            <Building className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">71</div>
            <p className="text-xs text-gray-500 mt-1">Across 12 studies</p>
          </CardContent>
        </Card>
      </div>

      {/* Alerts Section */}
      <Card>
        <CardHeader>
          <CardTitle>Alerts & Notifications</CardTitle>
          <CardDescription>Items requiring immediate attention</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {alerts.map((alert, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  {alert.severity === 'high' && (
                    <div className="p-2 bg-red-100 rounded-lg">
                      <TriangleAlert className="h-4 w-4 text-red-600" />
                    </div>
                  )}
                  {alert.severity === 'medium' && (
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <CircleAlert className="h-4 w-4 text-orange-600" />
                    </div>
                  )}
                  {alert.severity === 'low' && (
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <Clock className="h-4 w-4 text-yellow-600" />
                    </div>
                  )}
                  <div>
                    <p className="text-sm">{alert.title}</p>
                    <p className="text-xs text-gray-500">{alert.zone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">{alert.count}</Badge>
                  <Button variant="outline" size="sm">View</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Studies Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Active Studies</CardTitle>
          <CardDescription>Current clinical trials and their TMF status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {studies.map((study) => (
              <div key={study.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm">{study.name}</h3>
                      <Badge variant="outline">{study.phase}</Badge>
                      {study.status === 'Active' ? (
                        <Badge className="bg-green-500">Active</Badge>
                      ) : (
                        <Badge variant="secondary">Completed</Badge>
                      )}
                    </div>
                    <p className="text-xs text-gray-500">Study ID: {study.id}</p>
                  </div>
                  <Button variant="outline" size="sm">Open</Button>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500">Sites</p>
                    <p className="text-sm">{study.sites}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Country</p>
                    <p className="text-sm">{study.country}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">TMF Completeness</p>
                    <p className="text-sm">{study.completeness}%</p>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">TMF Completeness</span>
                    <span className={study.completeness >= 85 ? 'text-green-600' : study.completeness >= 70 ? 'text-orange-600' : 'text-red-600'}>
                      {study.completeness}%
                    </span>
                  </div>
                  <Progress value={study.completeness} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest updates across all studies</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-3 pb-3 border-b last:border-0">
                <div className={`p-2 rounded-lg ${
                  activity.type === 'upload' ? 'bg-blue-100' :
                  activity.type === 'approval' ? 'bg-green-100' :
                  activity.type === 'warning' ? 'bg-yellow-100' :
                  'bg-gray-100'
                }`}>
                  {activity.type === 'upload' && <FileText className="h-4 w-4 text-blue-600" />}
                  {activity.type === 'approval' && <CircleCheck className="h-4 w-4 text-green-600" />}
                  {activity.type === 'warning' && <Clock className="h-4 w-4 text-yellow-600" />}
                  {activity.type === 'review' && <Users className="h-4 w-4 text-gray-600" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.user} • {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
