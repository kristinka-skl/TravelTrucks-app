import css from './Button.module.css';
interface ButtonProps {
  primary?: boolean;
  children: React.ReactNode;
  type: 'submit' | 'reset' | 'button';
  onClick?: () => void;

  disabled?: boolean;
}
export default function Button(props: ButtonProps) {
  return (
    <button
      className={props.primary ? css.primary : css.secondary}
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
