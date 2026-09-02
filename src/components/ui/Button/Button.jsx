import styles from './Button.module.css';

export const Button = ({ children, variant = 'primary', className = '', href, ...props }) => {
  const baseClass = styles.btn;
  const variantClass = styles[variant] || styles.primary;
  
  if (href) {
    return (
      <a href={href} className={`${baseClass} ${variantClass} ${className}`} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseClass} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
};
