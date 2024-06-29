import React, { ComponentPropsWithoutRef } from "react";

export const LinkIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number; color?: string }
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-icon link-icon"
    >
      <path
        fill-rule="evenodd"
        d="M8 3.517a1 1 0 011.62-.784l5.348 4.233a1 1 0 010 1.568l-5.347 4.233A1 1 0 018 11.983v-1.545c-.76-.043-1.484.003-2.254.218-.994.279-2.118.857-3.506 1.99a.993.993 0 01-1.129.096.962.962 0 01-.445-1.099c.415-1.5 1.425-3.141 2.808-4.412C4.69 6.114 6.244 5.241 8 5.042V3.517zm1.5 1.034v1.2a.75.75 0 01-.75.75c-1.586 0-3.066.738-4.261 1.835a8.996 8.996 0 00-1.635 2.014c.878-.552 1.695-.916 2.488-1.138 1.247-.35 2.377-.33 3.49-.207a.75.75 0 01.668.745v1.2l4.042-3.2L9.5 4.55z"
        clip-rule="evenodd"
      />
    </svg>
  );
};
