"use client";
import { useEffect, useState } from "react";
interface ClientOnlyProps {
  children: React.ReactNode;
}
const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return <>{children}</>;
};
export default ClientOnly;
//The ClientOnly component ensures that its children are only rendered on the client side. This can be useful in scenarios where certain elements or code should not be rendered or executed during server-side rendering (SSR). By using useEffect to update the hasMounted state, the component ensures that the children are only rendered after the initial mount on the client.
