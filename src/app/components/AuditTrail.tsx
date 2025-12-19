import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
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
  Shield,
  Download,
  Search,
  FileText,
  Upload,
  Pencil,
  CheckCircle,
  Trash,
  User,
  Calendar,
  Filter
} from 'lucide-react';
import { useState } from 'react';

export default function AuditTrail() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterAction, setFilterAction] = useState('all');
  const [filterUser, setFilterUser] = useState('all');

  const auditLogs = [
    {
      id: 'AUD-001',
      timestamp: '2024-03-19 14:35:22',
      user: 'Dr. Sarah Chen',
      userRole: 'Medical Monitor',
      action: 'Document Upload',
      documentName: 'Protocol Amendment 3',
      documentId: 'DOC-045',
      zone: 'Zone 02',
      details: 'Uploaded Protocol Amendment 3, Version 3.0',
      ipAddress: '192.168.1.45',
      userAgent: 'Chrome 122.0 on Windows 10'
    },
    {
      id: 'AUD-002',
      timestamp: '2024-03-19 13:22:15',
      user: 'John Martinez',
      userRole: 'QA Manager',
      action: 'Document Approved',
      documentName: 'Monitoring Plan',
      documentId: 'DOC-039',
      zone: 'Zone 05',
      details: 'Approved Monitoring Plan v2.0 with e-signature SIG-2024-03-19-001',
      ipAddress: '192.168.1.78',
      userAgent: 'Firefox 123.0 on macOS'
    },
    {
      id: 'AUD-003',
      timestamp: '2024-03-19 12:10:33',
      user: 'Emma Wilson',
      userRole: 'Regulatory Lead',
      action: 'Document Modified',
      documentName: 'IRB Approval Letter',
      documentId: 'DOC-028',
      zone: 'Zone 04',
      details: 'Updated metadata: Expiry date changed to 2025-01-20',
      ipAddress: '192.168.1.92',
      userAgent: 'Safari 17.3 on macOS'
    },
    {
      id: 'AUD-004',
      timestamp: '2024-03-19 11:45:09',
      user: 'Jane Smith',
      userRole: 'CRA',
      action: 'Document Upload',
      documentName: 'Monitoring Visit Report - Site 003',
      documentId: 'DOC-051',
      zone: 'Zone 05',
      details: 'Uploaded MVR for Site 003, Version 1.0 (Draft)',
      ipAddress: '192.168.1.56',
      userAgent: 'Chrome 122.0 on Windows 11'
    },
    {
      id: 'AUD-005',
      timestamp: '2024-03-19 10:30:45',
      user: 'System',
      userRole: 'Automated Process',
      action: 'Notification Sent',
      documentName: 'CV - Site PI 001',
      documentId: 'DOC-019',
      zone: 'Zone 03',
      details: 'Sent expiry notification: Document expires in 30 days',
      ipAddress: 'System',
      userAgent: 'Automated Task'
    },
    {
      id: 'AUD-006',
      timestamp: '2024-03-19 09:15:28',
      user: 'Dr. Michael Park',
      userRole: 'Medical Director',
      action: 'User Login',
      documentName: '-',
      documentId: '-',
      zone: '-',
      details: 'User logged in successfully',
      ipAddress: '192.168.1.34',
      userAgent: 'Chrome 122.0 on Windows 10'
    },
    {
      id: 'AUD-007',
      timestamp: '2024-03-18 16:22:11',
      user: 'Regulatory Team',
      userRole: 'Regulatory Affairs',
      action: 'Document Approved',
      documentName: 'Statistical Analysis Plan',
      documentId: 'DOC-042',
      zone: 'Zone 09',
      details: 'Approved SAP v1.5 with e-signature SIG-2024-03-18-007',
      ipAddress: '192.168.1.88',
      userAgent: 'Edge 122.0 on Windows 11'
    },
    {
      id: 'AUD-008',
      timestamp: '2024-03-18 15:10:55',
      user: 'Safety Manager',
      userRole: 'Safety',
      action: 'Document Upload',
      documentName: 'SAE Report 003',
      documentId: 'DOC-053',
      zone: 'Zone 07',
      details: 'Uploaded SAE Report 003, Version 1.0',
      ipAddress: '192.168.1.67',
      userAgent: 'Chrome 122.0 on Windows 10'
    },
    {
      id: 'AUD-009',
      timestamp: '2024-03-18 14:05:32',
      user: 'Dr. Sarah Chen',
      userRole: 'Medical Monitor',
      action: 'Permission Changed',
      documentName: '-',
      documentId: '-',
      zone: '-',
      details: 'Granted read access to Auditor (audit-user@example.com) for Study PRO-2024-001',
      ipAddress: '192.168.1.45',
      userAgent: 'Chrome 122.0 on Windows 10'
    },
    {
      id: 'AUD-010',
      timestamp: '2024-03-18 13:40:17',
      user: 'DM Lead',
      userRole: 'Data Management',
      action: 'Document Modified',
      documentName: 'Data Management Plan',
      documentId: 'DOC-044',
      zone: 'Zone 08',
      details: 'Updated document version from 1.1 to 1.2',
      ipAddress: '192.168.1.71',
      userAgent: 'Firefox 123.0 on Ubuntu'
    }
  ];

  const getActionIcon = (action: string) => {
    switch (action) {
      case 'Document Upload':
        return <Upload className="h-4 w-4 text-blue-500" />;
      case 'Document Approved':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'Document Modified':
        return <Pencil className="h-4 w-4 text-orange-500" />;
      case 'Document Deleted':
        return <Trash className="h-4 w-4 text-red-500" />;
      case 'User Login':
        return <User className="h-4 w-4 text-gray-500" />;
      case 'Permission Changed':
        return <Shield className="h-4 w-4 text-purple-500" />;
      case 'Notification Sent':
        return <FileText className="h-4 w-4 text-yellow-500" />;
      default:
        return <FileText className="h-4 w-4 text-gray-500" />;
    }
  };

  const getActionBadge = (action: string) => {
    switch (action) {
      case 'Document Upload':
        return <Badge className="bg-blue-500">Upload</Badge>;
      case 'Document Approved':
        return <Badge className="bg-green-500">Approved</Badge>;
      case 'Document Modified':
        return <Badge className="bg-orange-500">Modified</Badge>;
      case 'Document Deleted':
        return <Badge variant="destructive">Deleted</Badge>;
      case 'User Login':
        return <Badge variant="secondary">Login</Badge>;
      case 'Permission Changed':
        return <Badge className="bg-purple-500">Permission</Badge>;
      case 'Notification Sent':
        return <Badge variant="outline">Notification</Badge>;
      default:
        return <Badge variant="outline">{action}</Badge>;
    }
  };

  const filteredLogs = auditLogs.filter(log => {
    const matchesSearch = 
      log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.documentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.details.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAction = filterAction === 'all' || log.action === filterAction;
    const matchesUser = filterUser === 'all' || log.user === filterUser;
    return matchesSearch && matchesAction && matchesUser;
  });

  const uniqueUsers = Array.from(new Set(auditLogs.map(log => log.user)));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-gray-900 mb-1">Audit Trail</h1>
          <p className="text-gray-600">Complete audit log for regulatory compliance and inspection readiness</p>
        </div>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Export Audit Report
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Total Activities</CardTitle>
            <Shield className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">1,247</div>
            <p className="text-xs text-gray-500 mt-1">Last 30 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Documents Modified</CardTitle>
            <Pencil className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">89</div>
            <p className="text-xs text-gray-500 mt-1">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Approvals</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">156</div>
            <p className="text-xs text-gray-500 mt-1">With e-signatures</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Active Users</CardTitle>
            <User className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">34</div>
            <p className="text-xs text-gray-500 mt-1">Last 7 days</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters & Search
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by user, document, or activity..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filterAction} onValueChange={setFilterAction}>
              <SelectTrigger className="w-56">
                <SelectValue placeholder="All Actions" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Actions</SelectItem>
                <SelectItem value="Document Upload">Document Upload</SelectItem>
                <SelectItem value="Document Approved">Document Approved</SelectItem>
                <SelectItem value="Document Modified">Document Modified</SelectItem>
                <SelectItem value="User Login">User Login</SelectItem>
                <SelectItem value="Permission Changed">Permission Changed</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterUser} onValueChange={setFilterUser}>
              <SelectTrigger className="w-56">
                <SelectValue placeholder="All Users" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Users</SelectItem>
                {uniqueUsers.map(user => (
                  <SelectItem key={user} value={user}>{user}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Audit Trail Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Audit Log ({filteredLogs.length} entries)</CardTitle>
              <CardDescription>Complete record of all system activities</CardDescription>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Shield className="h-4 w-4" />
              <span>21 CFR Part 11 Compliant</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Timestamp</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Document/Details</TableHead>
                <TableHead>Zone</TableHead>
                <TableHead>IP Address</TableHead>
                <TableHead className="text-right">Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <div>
                        <p className="text-sm">{log.timestamp.split(' ')[0]}</p>
                        <p className="text-xs text-gray-500">{log.timestamp.split(' ')[1]}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="text-sm">{log.user}</p>
                      <p className="text-xs text-gray-500">{log.userRole}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getActionIcon(log.action)}
                      {getActionBadge(log.action)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="text-sm">{log.documentName}</p>
                      {log.documentId !== '-' && (
                        <p className="text-xs text-gray-500">{log.documentId}</p>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">{log.zone}</TableCell>
                  <TableCell>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {log.ipAddress}
                    </code>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      View Full Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Compliance Notice */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="py-4">
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="text-sm text-blue-900 mb-1">Regulatory Compliance</h4>
              <p className="text-sm text-blue-700">
                This audit trail is maintained in compliance with ICH-GCP, 21 CFR Part 11, and EU GCP guidelines. 
                All entries are timestamped, immutable, and include complete user identification and activity details 
                for regulatory inspections and audits.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
