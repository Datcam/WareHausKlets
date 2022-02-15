import { AVAILABLE_FRIENDS } from '../mock-friends-data';
import { Component, OnInit } from '@angular/core';
import { CURRENT_USER } from '../mock-friends-data';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  userFriendList = CURRENT_USER.friends;
  availableFriends = AVAILABLE_FRIENDS;
  showSearchResult: boolean = false;
  searchValue: string = '';
  searchResult!: {id: number, name: string}[];
  noResults: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  searchFriends() {
    this.noResults = false;
    if (!this.showSearchResult) {
      this.showSearchResult = !this.showSearchResult;
    }
    this.searchResult = this.availableFriends.filter(friend => {
      return friend.name.includes(this.searchValue)
    });

    if (this.searchResult.length === 0) {
      this.noResults = true
    }
  }

  removeFriend(removedFriend: {id: number, name: string}) {
    this.userFriendList.map((friend, idx, arr) => {
      if (friend.id === removedFriend.id) {
        arr.splice(idx, 1)
      }
    })
    const lastFriendItem = this.availableFriends[this.availableFriends.length - 1]
    const friend = {
      id: lastFriendItem?.id ? lastFriendItem.id + 1 : 0,
      name: removedFriend.name
    }
    this.availableFriends.push(friend)
  }

  addFriend(addedFriend: {id: number, name: string}) {
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

    const lastFriendItem = this.userFriendList[this.userFriendList.length - 1]
    const friend = {
      id: lastFriendItem?.id ? lastFriendItem.id + 1 : 0,
      name: addedFriend.name
    }
    this.userFriendList.push(friend)
  }

  backToFriends() {
    this.showSearchResult = !this.showSearchResult;
    this.searchValue = '';
  }

}
