import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { FRIENDS } from '../mock-data';
import { Friend } from '../models/friend.model';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})

export class FriendsComponent implements OnInit {

  userFriendList: Friend[] = this.auth.getCurrentUser().friends;
  availableFriends: Friend[] = FRIENDS;
  searchResult!: Friend[];
  showSearchResult: boolean = false;
  searchValue: string = '';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
  }

  searchFriends() {
    if (!this.showSearchResult) {
      this.showSearchResult = !this.showSearchResult;
    }
    this.searchResult = this.availableFriends.filter(friend => {
      return friend.name.includes(this.searchValue)
    });
  }

  removeFriend(removedFriend: Friend) {
    this.userFriendList.map((friend, idx, arr) => {
      if (friend.id === removedFriend.id) {
        arr.splice(idx, 1)
      }
    })

    this.availableFriends.push(removedFriend)
  }

  addFriend(addedFriend: Friend) {
    this.availableFriends.map((friend, idx, arr) => {
      if (friend.id === addedFriend.id) {
        arr.splice(idx, 1)
      }
    })

    this.searchResult.map((friend, idx, arr) => {
      if (friend.id === addedFriend.id) {
        arr.splice(idx, 1)
      }
    })

    this.userFriendList.push(addedFriend)
  }

  backToFriends() {
    this.showSearchResult = !this.showSearchResult;
    this.searchValue = '';
  }

}
