import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { 
  ChevronRight, 
  ChevronDown, 
  Folder, 
  FolderOpen,
  FileText,
  CircleCheck,
  CircleAlert,
  Clock
} from 'lucide-react';
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ui/collapsible';

export default function TMFZoneView() {
  const [expandedZones, setExpandedZones] = useState<string[]>(['zone-01']);

  const zones = [
    {
      id: 'zone-01',
      code: '01',
      name: 'Trial Management',
      completeness: 92,
      totalDocs: 45,
      completeDocs: 41,
      sections: [
        { 
          id: 'sec-01-01', 
          name: 'Trial Team Organization',
          artifacts: [
            { id: 'art-001', name: 'Delegation Log', status: 'Approved', version: '2.1', owner: 'Site Coordinator' },
            { id: 'art-002', name: 'Trial Team Contact List', status: 'Final', version: '1.5', owner: 'Project Manager' },
          ]
        },
        { 
          id: 'sec-01-02', 
          name: 'Meeting Minutes',
          artifacts: [
            { id: 'art-003', name: 'Kick-off Meeting Minutes', status: 'Approved', version: '1.0', owner: 'Sponsor' },
            { id: 'art-004', name: 'Investigator Meeting Minutes', status: 'Draft', version: '0.9', owner: 'CRO' },
          ]
        },
      ]
    },
    {
      id: 'zone-02',
      code: '02',
      name: 'Central Trial Documents',
      completeness: 88,
      totalDocs: 67,
      completeDocs: 59,
      sections: [
        { 
          id: 'sec-02-01', 
          name: 'Protocol and Amendments',
          artifacts: [
            { id: 'art-005', name: 'Protocol v3.0', status: 'Approved', version: '3.0', owner: 'Medical Monitor' },
            { id: 'art-006', name: 'Protocol Amendment 1', status: 'Approved', version: '1.0', owner: 'Medical Monitor' },
            { id: 'art-007', name: 'Protocol Amendment 2', status: 'Final', version: '1.0', owner: 'Medical Monitor' },
          ]
        },
        { 
          id: 'sec-02-02', 
          name: 'Investigator Brochure',
          artifacts: [
            { id: 'art-008', name: 'IB Version 4.2', status: 'Approved', version: '4.2', owner: 'Medical Affairs' },
          ]
        },
      ]
    },
    {
      id: 'zone-03',
      code: '03',
      name: 'Trial Sites',
      completeness: 75,
      totalDocs: 234,
      completeDocs: 175,
      sections: [
        { 
          id: 'sec-03-01', 
          name: 'Site Selection and Qualification',
          artifacts: [
            { id: 'art-009', name: 'Site Feasibility Questionnaire', status: 'Approved', version: '1.0', owner: 'CRA' },
            { id: 'art-010', name: 'Site Selection Visit Report', status: 'Final', version: '1.2', owner: 'Monitor' },
          ]
        },
        { 
          id: 'sec-03-02', 
          name: 'Site Regulatory Documents',
          artifacts: [
            { id: 'art-011', name: 'Investigator CV - Site 001', status: 'Approved', version: '2.0', owner: 'PI' },
            { id: 'art-012', name: 'Medical License - Site 001', status: 'Approved', version: '1.0', owner: 'PI' },
            { id: 'art-013', name: 'Financial Disclosure - Site 001', status: 'Missing', version: '-', owner: 'Site' },
          ]
        },
      ]
    },
    {
      id: 'zone-04',
      code: '04',
      name: 'Central IRB / IEC',
      completeness: 95,
      totalDocs: 28,
      completeDocs: 27,
      sections: [
        { 
          id: 'sec-04-01', 
          name: 'IRB Approval Documents',
          artifacts: [
            { id: 'art-014', name: 'IRB Approval Letter', status: 'Approved', version: '1.0', owner: 'Regulatory' },
            { id: 'art-015', name: 'IRB-approved ICF', status: 'Approved', version: '2.1', owner: 'Regulatory' },
          ]
        },
      ]
    },
    {
      id: 'zone-05',
      code: '05',
      name: 'Study Management',
      completeness: 82,
      totalDocs: 52,
      completeDocs: 43,
      sections: [
        { 
          id: 'sec-05-01', 
          name: 'Monitoring',
          artifacts: [
            { id: 'art-016', name: 'Monitoring Plan', status: 'Approved', version: '1.1', owner: 'QA Manager' },
            { id: 'art-017', name: 'Monitoring Visit Report - Site 001', status: 'Final', version: '1.0', owner: 'CRA' },
          ]
        },
      ]
    },
    {
      id: 'zone-06',
      code: '06',
      name: 'Investigational Product',
      completeness: 90,
      totalDocs: 34,
      completeDocs: 31,
      sections: [
        { 
          id: 'sec-06-01', 
          name: 'IP Documentation',
          artifacts: [
            { id: 'art-018', name: 'IP Manual', status: 'Approved', version: '2.0', owner: 'Drug Supply' },
          ]
        },
      ]
    },
    {
      id: 'zone-07',
      code: '07',
      name: 'Safety',
      completeness: 78,
      totalDocs: 89,
      completeDocs: 69,
      sections: [
        { 
          id: 'sec-07-01', 
          name: 'Safety Reports',
          artifacts: [
            { id: 'art-019', name: 'SAE Report 001', status: 'Approved', version: '1.0', owner: 'Safety Manager' },
            { id: 'art-020', name: 'DSUR', status: 'Final', version: '1.0', owner: 'Safety Team' },
          ]
        },
      ]
    },
    {
      id: 'zone-08',
      code: '08',
      name: 'Clinical Data',
      completeness: 85,
      totalDocs: 156,
      completeDocs: 133,
      sections: [
        { 
          id: 'sec-08-01', 
          name: 'Data Management',
          artifacts: [
            { id: 'art-021', name: 'Data Management Plan', status: 'Approved', version: '1.2', owner: 'DM Lead' },
          ]
        },
      ]
    },
    {
      id: 'zone-09',
      code: '09',
      name: 'Statistics',
      completeness: 88,
      totalDocs: 23,
      completeDocs: 20,
      sections: [
        { 
          id: 'sec-09-01', 
          name: 'Statistical Documents',
          artifacts: [
            { id: 'art-022', name: 'Statistical Analysis Plan', status: 'Approved', version: '1.5', owner: 'Statistician' },
          ]
        },
      ]
    },
    {
      id: 'zone-10',
      code: '10',
      name: 'Publications',
      completeness: 45,
      totalDocs: 12,
      completeDocs: 5,
      sections: [
        { 
          id: 'sec-10-01', 
          name: 'Publication Plan',
          artifacts: [
            { id: 'art-023', name: 'Publication Strategy', status: 'Draft', version: '0.5', owner: 'Medical Writing' },
          ]
        },
      ]
    },
  ];

  const toggleZone = (zoneId: string) => {
    setExpandedZones(prev =>
      prev.includes(zoneId)
        ? prev.filter(id => id !== zoneId)
        : [...prev, zoneId]
    );
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Approved':
        return <Badge className="bg-green-500">Approved</Badge>;
      case 'Final':
        return <Badge className="bg-blue-500">Final</Badge>;
      case 'Draft':
        return <Badge variant="secondary">Draft</Badge>;
      case 'Missing':
        return <Badge variant="destructive">Missing</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-gray-900 mb-1">TMF Zone Structure</h1>
          <p className="text-gray-600">Based on DIA TMF Reference Model</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline">Study: PRO-2024-001</Badge>
        </div>
      </div>

      {/* Overall Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Overall TMF Completeness</CardTitle>
          <CardDescription>Aggregate across all zones</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Total Progress</span>
              <span className="text-2xl">84%</span>
            </div>
            <Progress value={84} className="h-3" />
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>656 of 780 documents complete</span>
              <span>124 missing</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Zones */}
      <div className="space-y-3">
        {zones.map((zone) => {
          const isExpanded = expandedZones.includes(zone.id);
          
          return (
            <Card key={zone.id}>
              <Collapsible open={isExpanded} onOpenChange={() => toggleZone(zone.id)}>
                <CollapsibleTrigger asChild>
                  <div className="cursor-pointer hover:bg-gray-50 transition-colors">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 flex-1">
                          {isExpanded ? (
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                          ) : (
                            <ChevronRight className="h-5 w-5 text-gray-500" />
                          )}
                          {isExpanded ? (
                            <FolderOpen className="h-5 w-5 text-blue-600" />
                          ) : (
                            <Folder className="h-5 w-5 text-gray-400" />
                          )}
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <CardTitle>Zone {zone.code}: {zone.name}</CardTitle>
                              {zone.completeness >= 90 && (
                                <CircleCheck className="h-5 w-5 text-green-500" />
                              )}
                              {zone.completeness >= 70 && zone.completeness < 90 && (
                                <Clock className="h-5 w-5 text-orange-500" />
                              )}
                              {zone.completeness < 70 && (
                                <CircleAlert className="h-5 w-5 text-red-500" />
                              )}
                            </div>
                            <CardDescription>
                              {zone.completeDocs} of {zone.totalDocs} documents • {zone.completeness}% complete
                            </CardDescription>
                          </div>
                        </div>
                        <div className="w-48">
                          <Progress value={zone.completeness} className="h-2" />
                        </div>
                      </div>
                    </CardHeader>
                  </div>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {zone.sections.map((section) => (
                        <div key={section.id} className="border-l-2 border-gray-200 pl-4 ml-4">
                          <h4 className="text-sm mb-3">{section.name}</h4>
                          <div className="space-y-2">
                            {section.artifacts.map((artifact) => (
                              <div 
                                key={artifact.id} 
                                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                              >
                                <div className="flex items-center gap-3 flex-1">
                                  <FileText className="h-4 w-4 text-gray-400" />
                                  <div className="flex-1">
                                    <p className="text-sm">{artifact.name}</p>
                                    <p className="text-xs text-gray-500">
                                      Version {artifact.version} • Owner: {artifact.owner}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-3">
                                  {getStatusBadge(artifact.status)}
                                  <Button variant="ghost" size="sm">View</Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
