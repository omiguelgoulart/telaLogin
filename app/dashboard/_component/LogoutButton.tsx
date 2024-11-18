"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"; // Certifique-se de que o botão está importado corretamente

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove o token do localStorage
    router.push("/login"); // Redireciona para a página de login
  };

  return (
    <Button onClick={handleLogout} className="mt-4">
      Logout
    </Button>
  );
}
