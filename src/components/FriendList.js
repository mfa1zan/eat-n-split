import Friend from "./Friend";

export default function FriendList({ friends, selectedFriend, onSelection }) {
  return <ul>
    {friends.map(friend => <Friend friend={friend} selectedFriend={selectedFriend} key={friend.id} onSelection={onSelection} />)}
  </ul>;
}
