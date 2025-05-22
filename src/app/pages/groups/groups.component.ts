import { Component, OnInit } from '@angular/core';
import { TravelGroupsService } from 'src/app/services/groups.service';
import { TravelGroup } from '../../models/travels.group'; // Adjust the path if needed
import { ActivatedRoute } from '@angular/router';  // Import ActivatedRoute to access route parameters

interface Message {
  sender: string;
  text: string;
}

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups: TravelGroup[] = []; // List of travel groups
  newGroup = { name: '', description: '', isPublic: true }; // New group data
  messageText: string = '';  // Declare newMessage as a string
  errorMessage: string = '';
  userId: string = localStorage.getItem('userId') || '12345'; // Get logged in user ID from local storage
  action: string = '';  // Variable to store the current action (create, view, join)
  messages: Message[] = [];
  group: any;

  constructor(
    private travelService: TravelGroupsService,
    private route: ActivatedRoute,  // Inject ActivatedRoute to access route parameters
  ) {}

  ngOnInit(): void {
    this.loadGroups();
    const groupName = 'Your Group Name';  // Replace with dynamic group name if necessary

    this.route.data.subscribe(data => {
      this.action = data['action'];
      if (this.action === 'view') {
        this.loadGroup(groupName);  // Load group info when viewing
      }
    });
  }

  loadGroups(): void {
    this.travelService.getAllGroups().subscribe({
      next: (data) => {
        this.groups = data;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  loadGroup(groupName: string): void {
    this.travelService.getGroupByName(groupName).subscribe(
      (groupData) => {
        this.group = groupData;
        this.messages = groupData.messages || [];
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // Create a new travel group
  createGroup(): void {
    this.travelService.createGroup(this.newGroup).subscribe(
      (response: TravelGroup) => {
        alert('Group created successfully!');
        this.loadGroups(); // Refresh the group list
        this.newGroup = { name: '', description: '', isPublic: true }; // Reset form
      },
      (error) => {
        alert('Failed to create group.');
        console.error(error);
      }
    );
  }

  // Join group and load chat messages
  joinGroup(groupName: string): void {
    if (!this.userId) {
      alert('Please log in to join a group!');
      return;
    }

    this.travelService.joinGroup(groupName).subscribe(
      (group) => {
        alert(`Joined ${groupName} successfully!`);
        this.loadGroup(groupName);  // Refresh group details including messages
      },
      (error) => {
        console.error(error);
      }
    );
  }

  sendMessage(groupName: string): void {
    if (!this.messageText.trim()) {
      alert('Message cannot be empty!');
      return;
    }

    this.travelService.sendMessage(groupName, 'Guest', this.messageText).subscribe(
      (response) => {
        this.messageText = '';
        this.loadGroup(groupName);  // Reload group to show new message
      },
      (error) => {
        console.error(error);
      }
    );
  }

  goBack(): void {
    this.group = null;  // Hide the group chat card and return to group listing
  }

  // Check if user is part of the group
  isUserInGroup(group: TravelGroup): boolean {
    return group.members.includes(this.userId);
  }
}
