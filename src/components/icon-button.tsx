import { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  transparent?: boolean;
}

export function IconButton({ transparent, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={
        transparent
          ? 'bg-black/20 border border-white/10 rounded-md p-1.5'
          : 'bg-white/20 border border-white/10 rounded-md p-1.5'
      }
    />
  );
}
