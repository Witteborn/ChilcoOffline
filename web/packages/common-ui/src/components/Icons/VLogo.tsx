import React from 'react';

import { colors } from '../../styles/colors';

interface PropsType {
  color?: string;
}

export function VLogo({ color = colors.white, ...props }: PropsType) {
  return (
    <svg width="29" height="33" viewBox="0 0 29 33" fill="none" {...props}>
      <path
        fill={color}
        d="M27.2917 16.448C27.8437 16.448 28.2397 16.568 28.4797 16.808C28.7437 17.048 28.8757 17.36 28.8757 17.744C28.8757 18.368 28.6837 18.92 28.2997 19.4C27.9397 19.88 27.3637 20.132 26.5717 20.156C24.6517 20.204 22.9477 20.06 21.4597 19.724C19.7557 23.3 17.6917 26.276 15.2677 28.652C12.8677 31.004 10.4557 32.18 8.03175 32.18C5.53574 32.18 3.67574 30.728 2.45174 27.824C1.22774 24.92 0.615744 20.996 0.615744 16.052C0.615744 11.828 0.915744 8.036 1.51574 4.676C1.73174 3.428 2.03174 2.588 2.41574 2.156C2.82374 1.7 3.50774 1.472 4.46774 1.472C6.05174 1.472 6.84374 2.156 6.84374 3.524C6.84374 3.668 6.81974 3.932 6.77174 4.316C6.05174 8.636 5.69174 12.548 5.69174 16.052C5.69174 19.724 5.99174 22.52 6.59174 24.44C7.21574 26.336 8.13975 27.284 9.36375 27.284C10.6117 27.284 11.9677 26.42 13.4317 24.692C14.8957 22.964 16.2397 20.792 17.4637 18.176C15.9997 17.264 14.8957 16.088 14.1517 14.648C13.4077 13.184 13.0357 11.504 13.0357 9.608C13.0357 7.712 13.3237 6.116 13.8997 4.82C14.4997 3.5 15.3037 2.516 16.3117 1.868C17.3437 1.22 18.4837 0.895999 19.7317 0.895999C21.2677 0.895999 22.4797 1.448 23.3677 2.552C24.2797 3.656 24.7357 5.168 24.7357 7.088C24.7357 9.848 24.1357 12.86 22.9357 16.124C24.2077 16.34 25.6597 16.448 27.2917 16.448ZM16.6717 9.356C16.6717 11.708 17.4277 13.448 18.9397 14.576C19.8757 11.888 20.3437 9.668 20.3437 7.916C20.3437 6.908 20.2117 6.176 19.9477 5.72C19.6837 5.24 19.3237 5 18.8677 5C18.2197 5 17.6917 5.384 17.2837 6.152C16.8757 6.896 16.6717 7.964 16.6717 9.356Z"
      />
    </svg>
  );
}
export default VLogo;
