import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import {
  Settings as SettingsIcon,
  Users,
  Shield,
  Bell,
  Folder,
  User,
  Plus,
  Pencil,
  Trash,
  ShieldCheck
} from 'lucide-react';
import { useState } from 'react';

export default function Settings() {
  const [addUserDialogOpen, setAddUserDialogOpen] = useState(false);

  const users = [
    {
      id: 'USR-001',
      name: 'Dr. Sarah Chen',
      email: 'sarah.chen@example.com',
      role: 'Medical Monitor',
      status: 'Active',
      lastLogin: '2024-03-19 14:35'
    },
    {
      id: 'USR-002',
      name: 'John Martinez',
      email: 'john.martinez@example.com',
      role: 'QA Manager',
      status: 'Active',
      lastLogin: '2024-03-19 13:22'
    },
    {
      id: 'USR-003',
      name: 'Emma Wilson',
      email: 'emma.wilson@example.com',
      role: 'Regulatory Lead',
      status: 'Active',
      lastLogin: '2024-03-19 12:10'
    },
    {
      id: 'USR-004',
      name: 'Dr. Michael Park',
      email: 'michael.park@example.com',
      role: 'Medical Director',
      status: 'Active',
      lastLogin: '2024-03-19 09:15'
    },
    {
      id: 'USR-005',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'CRA',
      status: 'Active',
      lastLogin: '2024-03-19 11:45'
    }
  ];

  const roles = [
    {
      name: 'Sponsor',
      permissions: ['Read All', 'Upload Documents', 'Approve Documents', 'Manage Users', 'Configure System'],
      color: 'bg-purple-500'
    },
    {
      name: 'CRO',
      permissions: ['Read All', 'Upload Documents', 'Approve Documents', 'Manage Sites'],
      color: 'bg-blue-500'
    },
    {
      name: 'Monitor/CRA',
      permissions: ['Read Assigned Sites', 'Upload Documents', 'Create Reports'],
      color: 'bg-green-500'
    },
    {
      name: 'Auditor',
      permissions: ['Read-Only Access', 'Export Audit Trail', 'View All Documents'],
      color: 'bg-orange-500'
    },
    {
      name: 'Administrator',
      permissions: ['Full System Access', 'User Management', 'System Configuration', 'Audit Controls'],
      color: 'bg-red-500'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl text-gray-900 mb-1">Settings</h1>
        <p className="text-gray-600">Configure system settings, users, and permissions</p>
      </div>

      <Tabs defaultValue="users" className="space-y-4">
        <TabsList>
          <TabsTrigger value="users">
            <Users className="mr-2 h-4 w-4" />
            User Management
          </TabsTrigger>
          <TabsTrigger value="roles">
            <Shield className="mr-2 h-4 w-4" />
            Roles & Permissions
          </TabsTrigger>
          <TabsTrigger value="tmf">
            <Folder className="mr-2 h-4 w-4" />
            TMF Configuration
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="compliance">
            <ShieldCheck className="mr-2 h-4 w-4" />
            Compliance
          </TabsTrigger>
        </TabsList>

        {/* User Management */}
        <TabsContent value="users">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>Manage user accounts and access controls</CardDescription>
                </div>
                <Dialog open={addUserDialogOpen} onOpenChange={setAddUserDialogOpen}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      Add User
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New User</DialogTitle>
                      <DialogDescription>
                        Create a new user account with appropriate role and permissions
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="user-name">Full Name</Label>
                        <Input id="user-name" placeholder="Enter full name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="user-email">Email Address</Label>
                        <Input id="user-email" type="email" placeholder="user@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="user-role">Role</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sponsor">Sponsor</SelectItem>
                            <SelectItem value="cro">CRO</SelectItem>
                            <SelectItem value="monitor">Monitor/CRA</SelectItem>
                            <SelectItem value="auditor">Auditor</SelectItem>
                            <SelectItem value="admin">Administrator</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="user-studies">Assign to Studies</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select studies" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="study-1">PRO-2024-001</SelectItem>
                            <SelectItem value="study-2">PRO-2024-002</SelectItem>
                            <SelectItem value="study-3">PRO-2023-058</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setAddUserDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={() => setAddUserDialogOpen(false)}>
                        Create User
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          {user.name}
                        </div>
                      </TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{user.role}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-green-500">Active</Badge>
                      </TableCell>
                      <TableCell className="text-sm text-gray-600">{user.lastLogin}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Button variant="ghost" size="icon">
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Roles & Permissions */}
        <TabsContent value="roles">
          <div className="space-y-4">
            {roles.map((role, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 ${role.color} rounded-lg flex items-center justify-center`}>
                        <Shield className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <CardTitle>{role.name}</CardTitle>
                        <CardDescription>{role.permissions.length} permissions assigned</CardDescription>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Pencil className="mr-2 h-4 w-4" />
                      Edit Role
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {role.permissions.map((permission, idx) => (
                      <Badge key={idx} variant="secondary">
                        {permission}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* TMF Configuration */}
        <TabsContent value="tmf">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>TMF Structure Configuration</CardTitle>
                <CardDescription>Configure TMF zones and mandatory documents</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="tmf-model">TMF Reference Model</Label>
                  <Select defaultValue="dia">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dia">DIA TMF Reference Model</SelectItem>
                      <SelectItem value="custom">Custom Model</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Enable Zone-Level Completeness Tracking</Label>
                    <p className="text-sm text-gray-500">Track completeness at zone level</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Enforce Mandatory Document Requirements</Label>
                    <p className="text-sm text-gray-500">Prevent study closure without mandatory docs</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Auto-Archive Completed Studies</Label>
                    <p className="text-sm text-gray-500">Automatically archive after closure</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Document Retention Policy</CardTitle>
                <CardDescription>Configure document retention and archival settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="retention-period">Retention Period (years)</Label>
                  <Input id="retention-period" type="number" defaultValue="25" />
                  <p className="text-xs text-gray-500">
                    As per ICH-GCP guidelines (minimum 2 years after study completion)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure email and in-app notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Missing Document Alerts</Label>
                  <p className="text-sm text-gray-500">Notify when mandatory documents are missing</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Document Expiry Notifications</Label>
                  <p className="text-sm text-gray-500">Alert 90, 60, and 30 days before expiry</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Approval Request Notifications</Label>
                  <p className="text-sm text-gray-500">Notify reviewers of pending approvals</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Audit Trail Digest</Label>
                  <p className="text-sm text-gray-500">Weekly summary of audit activities</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>TMF Completeness Reports</Label>
                  <p className="text-sm text-gray-500">Monthly completeness report emails</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Compliance */}
        <TabsContent value="compliance">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Regulatory Compliance Settings</CardTitle>
                <CardDescription>Configure compliance and audit settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>21 CFR Part 11 Compliance</Label>
                    <p className="text-sm text-gray-500">Enable electronic signature requirements</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Audit Trail Logging</Label>
                    <p className="text-sm text-gray-500">Log all system activities</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Version Control</Label>
                    <p className="text-sm text-gray-500">Maintain document version history</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Inspection Mode</Label>
                    <p className="text-sm text-gray-500">Enable read-only access for auditors</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="py-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="text-sm text-blue-900 mb-1">Compliance Standards</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• ICH-GCP (International Council for Harmonisation - Good Clinical Practice)</li>
                      <li>• 21 CFR Part 11 (Electronic Records and Signatures)</li>
                      <li>• EU GCP Directive 2001/20/EC and Regulation (EU) No 536/2014</li>
                      <li>• GDPR (General Data Protection Regulation) for EU trials</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
