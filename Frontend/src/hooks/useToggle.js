import { useState } from 'react';

export default function useToggle() {
  const [on, setOn] = useState(false);
  const handleToggle = () => {
    setOn(!on);
  };

  return { on, handleToggle };
}
