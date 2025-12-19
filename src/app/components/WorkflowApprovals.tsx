import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback } from './ui/avatar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import {
  CheckCircle,
  Clock,
  FileText,
  User,
  Calendar,
  MessageSquare,
  X,
  Check
} from 'lucide-react';
import { useState } from 'react';

export default function WorkflowApprovals() {
  const [selectedDoc, setSelectedDoc] = useState<any>(null);
  const [approvalDialogOpen, setApprovalDialogOpen] = useState(false);

  const pendingApprovals = [
    {
      id: 'APR-001',
      documentName: 'Protocol Amendment 3',
      documentType: 'Protocol',
      zone: 'Zone 02',
      version: '3.0',
      submittedBy: 'Dr. Sarah Chen',
      submittedDate: '2024-03-18',
      reviewers: [
        { name: 'Dr. Michael Park', role: 'Medical Director', status: 'Pending' },
        { name: 'Emma Wilson', role: 'Regulatory Lead', status: 'Pending' },
        { name: 'John Martinez', role: 'QA Manager', status: 'Pending' }
      ],
      priority: 'High',
      dueDate: '2024-03-25'
    },
    {
      id: 'APR-002',
      documentName: 'Updated Investigator Brochure',
      documentType: 'IB',
      zone: 'Zone 02',
      version: '5.0',
      submittedBy: 'Medical Affairs Team',
      submittedDate: '2024-03-17',
      reviewers: [
        { name: 'Dr. Sarah Chen', role: 'Medical Monitor', status: 'Approved' },
        { name: 'Regulatory Team', role: 'Regulatory Affairs', status: 'Pending' }
      ],
      priority: 'Medium',
      dueDate: '2024-03-28'
    },
    {
      id: 'APR-003',
      documentName: 'Site Initiation Visit Report - Site 015',
      documentType: 'Monitoring Report',
      zone: 'Zone 05',
      version: '1.0',
      submittedBy: 'Jane Smith (CRA)',
      submittedDate: '2024-03-19',
      reviewers: [
        { name: 'John Martinez', role: 'Monitoring Manager', status: 'Pending' }
      ],
      priority: 'Low',
      dueDate: '2024-04-02'
    }
  ];

  const approvedDocuments = [
    {
      id: 'APR-COMP-001',
      documentName: 'Statistical Analysis Plan',
      version: '1.5',
      approvedBy: 'Dr. Michael Park',
      approvedDate: '2024-03-15',
      signatureId: 'SIG-2024-03-15-001'
    },
    {
      id: 'APR-COMP-002',
      documentName: 'Data Management Plan',
      version: '1.2',
      approvedBy: 'Emma Wilson',
      approvedDate: '2024-03-14',
      signatureId: 'SIG-2024-03-14-002'
    },
    {
      id: 'APR-COMP-003',
      documentName: 'Monitoring Plan',
      version: '2.0',
      approvedBy: 'John Martinez',
      approvedDate: '2024-03-12',
      signatureId: 'SIG-2024-03-12-003'
    }
  ];

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'High':
        return <Badge variant="destructive">High Priority</Badge>;
      case 'Medium':
        return <Badge className="bg-orange-500">Medium</Badge>;
      case 'Low':
        return <Badge variant="secondary">Low</Badge>;
      default:
        return <Badge variant="outline">{priority}</Badge>;
    }
  };

  const getReviewerStatusBadge = (status: string) => {
    switch (status) {
      case 'Approved':
        return <Badge className="bg-green-500">Approved</Badge>;
      case 'Rejected':
        return <Badge variant="destructive">Rejected</Badge>;
      case 'Pending':
        return <Badge variant="secondary">Pending</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl text-gray-900 mb-1">Workflow & Approvals</h1>
        <p className="text-gray-600">Review and approve trial documents with electronic signatures</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Pending Approvals</CardTitle>
            <Clock className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">7</div>
            <p className="text-xs text-gray-500 mt-1">Requires your action</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Approved This Week</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">23</div>
            <p className="text-xs text-gray-500 mt-1">+5 from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Overdue</CardTitle>
            <X className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">2</div>
            <p className="text-xs text-gray-500 mt-1">Immediate attention needed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Avg. Approval Time</CardTitle>
            <Calendar className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">2.3d</div>
            <p className="text-xs text-gray-500 mt-1">Within target SLA</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs for Pending and Approved */}
      <Tabs defaultValue="pending" className="space-y-4">
        <TabsList>
          <TabsTrigger value="pending">
            Pending Approvals ({pendingApprovals.length})
          </TabsTrigger>
          <TabsTrigger value="approved">
            Approved Documents ({approvedDocuments.length})
          </TabsTrigger>
          <TabsTrigger value="rejected">
            Rejected (0)
          </TabsTrigger>
        </TabsList>

        {/* Pending Approvals */}
        <TabsContent value="pending">
          <div className="space-y-4">
            {pendingApprovals.map((approval) => (
              <Card key={approval.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle>{approval.documentName}</CardTitle>
                        {getPriorityBadge(approval.priority)}
                      </div>
                      <CardDescription>
                        <div className="grid grid-cols-2 gap-4 mt-2">
                          <div>
                            <p className="text-xs text-gray-500">Document Type</p>
                            <p className="text-sm">{approval.documentType}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Version</p>
                            <p className="text-sm">{approval.version}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Zone</p>
                            <p className="text-sm">{approval.zone}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Submitted By</p>
                            <p className="text-sm">{approval.submittedBy}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Submitted Date</p>
                            <p className="text-sm">{approval.submittedDate}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Due Date</p>
                            <p className="text-sm">{approval.dueDate}</p>
                          </div>
                        </div>
                      </CardDescription>
                    </div>
                    <Dialog open={approvalDialogOpen && selectedDoc?.id === approval.id} onOpenChange={(open) => {
                      setApprovalDialogOpen(open);
                      if (!open) setSelectedDoc(null);
                    }}>
                      <DialogTrigger asChild>
                        <Button onClick={() => setSelectedDoc(approval)}>
                          Review Document
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl">
                        <DialogHeader>
                          <DialogTitle>Review & Approve: {selectedDoc?.documentName}</DialogTitle>
                          <DialogDescription>
                            Provide your electronic signature and comments
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          {/* Document Preview Placeholder */}
                          <div className="border-2 border-gray-200 rounded-lg p-12 bg-gray-50 text-center">
                            <FileText className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                            <p className="text-sm text-gray-600">Document Preview</p>
                            <p className="text-xs text-gray-500 mt-1">{selectedDoc?.documentName} - Version {selectedDoc?.version}</p>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="comments">Comments</Label>
                            <Textarea 
                              id="comments"
                              placeholder="Add your review comments (optional)"
                              rows={4}
                            />
                          </div>

                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <h4 className="text-sm mb-2">Electronic Signature</h4>
                            <p className="text-xs text-gray-600 mb-3">
                              By approving this document, you are providing your legally binding electronic signature in compliance with 21 CFR Part 11.
                            </p>
                            <div className="grid grid-cols-2 gap-3 text-xs">
                              <div>
                                <span className="text-gray-500">Signature ID:</span>
                                <p>SIG-2024-{new Date().getTime()}</p>
                              </div>
                              <div>
                                <span className="text-gray-500">Timestamp:</span>
                                <p>{new Date().toLocaleString()}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="outline" className="mr-auto" onClick={() => setApprovalDialogOpen(false)}>
                            <X className="mr-2 h-4 w-4" />
                            Reject
                          </Button>
                          <Button variant="outline" onClick={() => setApprovalDialogOpen(false)}>
                            Cancel
                          </Button>
                          <Button onClick={() => setApprovalDialogOpen(false)}>
                            <Check className="mr-2 h-4 w-4" />
                            Approve & Sign
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="text-sm mb-3">Reviewers</h4>
                    <div className="space-y-2">
                      {approval.reviewers.map((reviewer, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback>{reviewer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm">{reviewer.name}</p>
                              <p className="text-xs text-gray-500">{reviewer.role}</p>
                            </div>
                          </div>
                          {getReviewerStatusBadge(reviewer.status)}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Approved Documents */}
        <TabsContent value="approved">
          <Card>
            <CardHeader>
              <CardTitle>Recently Approved Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Document Name</TableHead>
                    <TableHead>Version</TableHead>
                    <TableHead>Approved By</TableHead>
                    <TableHead>Approved Date</TableHead>
                    <TableHead>Signature ID</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {approvedDocuments.map((doc) => (
                    <TableRow key={doc.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-gray-400" />
                          {doc.documentName}
                        </div>
                      </TableCell>
                      <TableCell>{doc.version}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback className="text-xs">
                              {doc.approvedBy.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          {doc.approvedBy}
                        </div>
                      </TableCell>
                      <TableCell>{doc.approvedDate}</TableCell>
                      <TableCell>
                        <code className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {doc.signatureId}
                        </code>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rejected">
          <Card>
            <CardContent className="py-12 text-center">
              <CheckCircle className="h-12 w-12 mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500">No rejected documents</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
