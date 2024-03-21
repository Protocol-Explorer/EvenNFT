import { FC } from 'react';
import { Button } from "@/components/ui/button";

interface ActionButtonProps {
  label: string;
}

const ActionButton: FC<ActionButtonProps> = ({ label }) => {
  return (
    <Button>{label}</Button>
  );
}

export default ActionButton;
