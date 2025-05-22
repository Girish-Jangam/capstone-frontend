export interface TravelGroup {
    _id: string;
    name: string;
    description: string;
    isPublic: boolean;
    members: string[];
    createdBy: string;
    messages: any[];
    invitations: any[];
  }
  