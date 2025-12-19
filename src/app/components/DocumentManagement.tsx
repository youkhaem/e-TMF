import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
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
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import {
  Upload,
  Download,
  Search,
  SlidersHorizontal,
  FileText,
  Eye,
  Pencil,
  Trash,
  Plus,
  Calendar
} from 'lucide-react';

export default function DocumentManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterZone, setFilterZone] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);

  const documents = [
    {
      id: 'DOC-001',
      name: 'Protocol v3.0',
      zone: 'Zone 02',
      section: 'Protocol and Amendments',
      version: '3.0',
      status: 'Approved',
      owner: 'Dr. Sarah Chen',
      uploadDate: '2024-03-15',
      expiryDate: '-',
      mandatory: true,
      fileSize: '2.4 MB'
    },
    {
      id: 'DOC-002',
      name: 'Investigator CV - Site 001',
      zone: 'Zone 03',
      section: 'Site Regulatory Documents',
      version: '2.0',
      status: 'Approved',
      owner: 'Dr. Michael Park',
      uploadDate: '2024-02-28',
      expiryDate: '2025-02-28',
      mandatory: true,
      fileSize: '856 KB'
    },
    {
      id: 'DOC-003',
      name: 'Statistical Analysis Plan',
      zone: 'Zone 09',
      section: 'Statistical Documents',
      version: '1.5',
      status: 'Final',
      owner: 'Emma Wilson',
      uploadDate: '2024-03-10',
      expiryDate: '-',
      mandatory: true,
      fileSize: '1.8 MB'
    },
    {
      id: 'DOC-004',
      name: 'Monitoring Visit Report - Site 003',
      zone: 'Zone 05',
      section: 'Monitoring',
      version: '1.0',
      status: 'Draft',
      owner: 'John Martinez',
      uploadDate: '2024-03-18',
      expiryDate: '-',
      mandatory: false,
      fileSize: '654 KB'
    },
    {
      id: 'DOC-005',
      name: 'IRB Approval Letter',
      zone: 'Zone 04',
      section: 'IRB Approval Documents',
      version: '2.1',
      status: 'Approved',
      owner: 'Regulatory Team',
      uploadDate: '2024-01-20',
      expiryDate: '2025-01-20',
      mandatory: true,
      fileSize: '342 KB'
    },
    {
      id: 'DOC-006',
      name: 'SAE Report 003',
      zone: 'Zone 07',
      section: 'Safety Reports',
      version: '1.0',
      status: 'Approved',
      owner: 'Safety Manager',
      uploadDate: '2024-03-17',
      expiryDate: '-',
      mandatory: true,
      fileSize: '523 KB'
    },
    {
      id: 'DOC-007',
      name: 'Data Management Plan',
      zone: 'Zone 08',
      section: 'Data Management',
      version: '1.2',
      status: 'Final',
      owner: 'DM Lead',
      uploadDate: '2024-02-15',
      expiryDate: '-',
      mandatory: true,
      fileSize: '1.2 MB'
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Approved':
        return <Badge className="bg-green-500">Approved</Badge>;
      case 'Final':
        return <Badge className="bg-blue-500">Final</Badge>;
      case 'Draft':
        return <Badge variant="secondary">Draft</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const isExpiringSoon = (expiryDate: string) => {
    if (expiryDate === '-') return false;
    const expiry = new Date(expiryDate);
    const today = new Date();
    const daysUntilExpiry = Math.floor((expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return daysUntilExpiry <= 90 && daysUntilExpiry > 0;
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.zone.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.owner.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesZone = filterZone === 'all' || doc.zone === filterZone;
    const matchesStatus = filterStatus === 'all' || doc.status === filterStatus;
    return matchesSearch && matchesZone && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-gray-900 mb-1">Document Management</h1>
          <p className="text-gray-600">Upload, manage, and track trial documents</p>
        </div>
        <Dialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Upload className="mr-2 h-4 w-4" />
              Upload Document
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Upload Document</DialogTitle>
              <DialogDescription>
                Add a new document to the Trial Master File
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="doc-name">Document Name</Label>
                <Input id="doc-name" placeholder="Enter document name" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="zone">TMF Zone</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select zone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="zone-01">Zone 01: Trial Management</SelectItem>
                      <SelectItem value="zone-02">Zone 02: Central Trial Documents</SelectItem>
                      <SelectItem value="zone-03">Zone 03: Trial Sites</SelectItem>
                      <SelectItem value="zone-04">Zone 04: Central IRB/IEC</SelectItem>
                      <SelectItem value="zone-05">Zone 05: Study Management</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="section">Section</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select section" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sec-1">Protocol and Amendments</SelectItem>
                      <SelectItem value="sec-2">Site Regulatory Documents</SelectItem>
                      <SelectItem value="sec-3">Monitoring</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="version">Version</Label>
                  <Input id="version" placeholder="e.g., 1.0" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="final">Final</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date (if applicable)</Label>
                <Input id="expiry" type="date" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="file">File Upload</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
                  <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600">Click to browse or drag and drop</p>
                  <p className="text-xs text-gray-500 mt-1">PDF, DOCX, XLSX (max 50MB)</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea 
                  id="notes" 
                  placeholder="Add any additional notes or comments"
                  rows={3}
                />
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setUploadDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setUploadDialogOpen(false)}>
                Upload Document
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <SlidersHorizontal className="h-5 w-5" />
            Search & Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by document name, zone, or owner..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filterZone} onValueChange={setFilterZone}>
              <SelectTrigger className="w-64">
                <SelectValue placeholder="All Zones" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Zones</SelectItem>
                <SelectItem value="Zone 02">Zone 02</SelectItem>
                <SelectItem value="Zone 03">Zone 03</SelectItem>
                <SelectItem value="Zone 04">Zone 04</SelectItem>
                <SelectItem value="Zone 05">Zone 05</SelectItem>
                <SelectItem value="Zone 07">Zone 07</SelectItem>
                <SelectItem value="Zone 08">Zone 08</SelectItem>
                <SelectItem value="Zone 09">Zone 09</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Approved">Approved</SelectItem>
                <SelectItem value="Final">Final</SelectItem>
                <SelectItem value="Draft">Draft</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Documents Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Documents ({filteredDocuments.length})</CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Document Name</TableHead>
                <TableHead>Zone/Section</TableHead>
                <TableHead>Version</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>Upload Date</TableHead>
                <TableHead>Expiry Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDocuments.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-gray-400" />
                      <div>
                        <p className="text-sm">{doc.name}</p>
                        {doc.mandatory && (
                          <Badge variant="outline" className="text-xs mt-1">Mandatory</Badge>
                        )}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="text-sm">{doc.zone}</p>
                      <p className="text-xs text-gray-500">{doc.section}</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">{doc.version}</TableCell>
                  <TableCell>{getStatusBadge(doc.status)}</TableCell>
                  <TableCell className="text-sm">{doc.owner}</TableCell>
                  <TableCell className="text-sm">{doc.uploadDate}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{doc.expiryDate}</span>
                      {isExpiringSoon(doc.expiryDate) && (
                        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                          Expiring Soon
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
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
    </div>
  );
}
