/* eslint-disable */ 
import { Link } from '@mui/material';

export function ChatList() {
  return (
    <div>
      Chat List
      <ul>
        <li>
          <Link href="/123">To Room</Link>
        </li>
        <li>
          <Link href="/signin">To SignIn</Link>
        </li>
        <li>
          <Link href="/signup">To SignUp</Link>
        </li>
        <li>
          <Link href="/chat">To Chat</Link>
        </li>
      </ul>
    </div>
  );
}
