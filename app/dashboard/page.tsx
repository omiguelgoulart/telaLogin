import LogoutButton from "./_component/LogoutButton"; // Importa o componente de LogoutButton

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold">Bem-vindo ao Dashboard</h1>
      <p className="text-gray-600 mt-2">Este é o conteúdo protegido.</p>
      <LogoutButton /> {/* Botão de Logout */}
    </div>
  );
}
