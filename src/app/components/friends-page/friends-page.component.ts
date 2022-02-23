import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NotificationService } from '../../services/notification.service';
import { Friend } from '../../shared/models/friend.model';
import { User } from 'src/app/shared/models/user.model';
import { Message } from 'src/app/shared/enum-data';

@Component({
  selector: 'app-friends-page',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.css']
})

export class FriendsPageComponent {

  currentUser: User = this.data.getCurrentUser();
  userFriendList: Friend[] = this.currentUser.friends;
  availableFriends: Friend[] = this.data.getFriendsData();
  searchResult!: Friend[];
  showSearchResult: boolean = false;
  searchValue: string = '';
  message = Message;

  constructor(private notification: NotificationService, private data: DataService) { }

  searchFriends() {
    if (!this.showSearchResult) {
      this.showSearchResult = !this.showSearchResult;
    }
    this.searchResult = this.availableFriends.filter(friend => {
      return friend.name.includes(this.searchValue);
    });
  }

  removeFriend(removedFriend: Friend) {
    this.userFriendList.map((friend, idx, arr) => {
      if (friend.id === removedFriend.id) {
        arr.splice(idx, 1);
      }
    })

    this.availableFriends.push(removedFriend);
    this.data.saveUserData(this.currentUser);
    this.data.saveFriendsData(this.availableFriends);
    this.notification.showMessage(this.message.REMOVE_FRIEND);
  }

  addFriend(addedFriend: Friend) {
    this.availableFriends.map((friend, idx, arr) => {
      if (friend.id === addedFriend.id) {
        arr.splice(idx, 1);
      }
    })

    this.searchResult.map((friend, idx, arr) => {
      if (friend.id === addedFriend.id) {
        arr.splice(idx, 1);
      }
    })

    this.userFriendList.push(addedFriend);
    this.data.saveUserData(this.currentUser);
    this.data.saveFriendsData(this.availableFriends);
    this.notification.showMessage(this.message.ADD_FRIEND);
  }

  backToFriends() {
    this.showSearchResult = !this.showSearchResult;
    this.searchValue = '';
  }
}
