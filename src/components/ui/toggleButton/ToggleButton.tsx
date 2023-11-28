import { useState, FC } from 'react';

interface ToggleButtonProps {
  onToggle?: (isActive: boolean) => void;
  defaultState?: boolean;
}

const ToggleButton: FC<ToggleButtonProps> = ({
  onToggle,
  defaultState = false
}) => {
  const [isActive, setIsActive] = useState<boolean>(defaultState);

  const handleClick = () => {
    setIsActive((prevIsActive) => !prevIsActive);
    onToggle && onToggle(!isActive);
  };

  return (
    <button
      style={{
        padding: '8px',
        margin: '8px',
        backgroundColor: isActive ? 'green' : 'red',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
      onClick={handleClick}
    >
      {isActive ? 'Light' : 'Dark'}
    </button>
  );
};

export default ToggleButton;
