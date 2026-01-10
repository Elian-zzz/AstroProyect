import { useState } from "react";
import {
  User,
  BookOpen,
  Calendar,
  Settings,
  LogOut,
  Award,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

export function UserDashboard({ navigateTo }) {
  const [activeTab, setActiveTab] = useState("mis-cursos");

  // Mock user data
  const userData = {
    name: "María González",
    email: "maria@ejemplo.com",
    memberSince: "Enero 2024",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    totalCourses: 3,
    completedCourses: 1,
    upcomingConsultations: 1,
  };

  // Mock purchased courses with progress
  const purchasedCourses = [
    {
      id: "carta-natal-inicial",
      title: "Carta Natal: Introducción al Autoconocimiento",
      progress: 100,
      status: "completed",
      lastAccessed: "15 Dic 2024",
      certificate: true,
      image:
        "https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      id: "luna-y-emociones",
      title: "Luna y Emociones: Sanación a través de la Astrología",
      progress: 65,
      status: "in-progress",
      lastAccessed: "8 Ene 2025",
      certificate: false,
      image:
        "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      id: "retornos-solares",
      title: "Retornos Solares: Tu Año Personal",
      progress: 20,
      status: "in-progress",
      lastAccessed: "10 Ene 2025",
      certificate: false,
      image:
        "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
  ];

  // Mock upcoming consultations
  const upcomingConsultations = [
    {
      id: 1,
      type: "Lectura de Carta Natal",
      date: "18 Enero 2025",
      time: "16:00 - 17:00",
      status: "confirmed",
      meetingLink: "https://zoom.us/j/ejemplo",
    },
  ];

  const renderMisCursos = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl text-[#424658]">Mis Cursos</h2>
        <Link
          to="/cursos"
          className="px-4 py-2 bg-[#678973] text-white rounded-lg hover:bg-[#6C739C] transition-colors"
        >
          Explorar más cursos
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-6 border border-[#BABBB1]">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#F0DAD5] rounded-lg">
              <BookOpen className="w-6 h-6 text-[#424658]" />
            </div>
            <div>
              <p className="text-sm text-[#6C739C]">Cursos Activos</p>
              <p className="text-2xl text-[#424658]">{userData.totalCourses}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-[#BABBB1]">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#DEA785] bg-opacity-30 rounded-lg">
              <Award className="w-6 h-6 text-[#C79576]" />
            </div>
            <div>
              <p className="text-sm text-[#6C739C]">Completados</p>
              <p className="text-2xl text-[#424658]">
                {userData.completedCourses}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-[#BABBB1]">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#D9A69F] bg-opacity-30 rounded-lg">
              <Clock className="w-6 h-6 text-[#C56B62]" />
            </div>
            <div>
              <p className="text-sm text-[#6C739C]">En Progreso</p>
              <p className="text-2xl text-[#424658]">
                {userData.totalCourses - userData.completedCourses}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Courses List */}
      <div className="space-y-4">
        {purchasedCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg overflow-hidden border border-[#BABBB1] hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row">
              {/* Course Image */}
              <div className="md:w-48 h-48 md:h-auto">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Course Info */}
              <div className="flex-1 p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl text-[#424658] mb-1">
                      {course.title}
                    </h3>
                    <p className="text-sm text-[#6C739C]">
                      Último acceso: {course.lastAccessed}
                    </p>
                  </div>
                  {course.certificate && (
                    <span className="px-3 py-1 bg-[#678973] text-white text-sm rounded-full flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      Certificado
                    </span>
                  )}
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#6C739C]">
                      Progreso del curso
                    </span>
                    <span className="text-sm text-[#424658]">
                      {course.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-[#BABBB1] rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        course.progress === 100
                          ? "bg-[#678973]"
                          : "bg-[#DEA785]"
                      }`}
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link
                    to={"/cursos/" + course.id}
                    className="px-4 py-2 bg-[#424658] text-white rounded-lg hover:bg-[#6C739C] transition-colors"
                  >
                    {course.progress === 100 ? "Revisar curso" : "Continuar"}
                  </Link>
                  {course.certificate && (
                    <button className="px-4 py-2 border border-[#678973] text-[#678973] rounded-lg hover:bg-[#678973] hover:text-white transition-colors">
                      Descargar certificado
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPerfil = () => (
    <div className="space-y-6">
      <h2 className="text-2xl text-[#424658]">Mi Perfil</h2>

      <div className="bg-white rounded-lg p-8 border border-[#BABBB1]">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Avatar */}
          <div className="flex flex-col items-center">
            <img
              src={userData.avatar}
              alt={userData.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-[#F0DAD5]"
            />
            <button className="mt-4 text-sm text-[#678973] hover:text-[#6C739C]">
              Cambiar foto
            </button>
          </div>

          {/* Info */}
          <div className="flex-1 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-[#6C739C] mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  value={userData.name}
                  className="w-full px-4 py-2 border border-[#BABBB1] rounded-lg focus:outline-none focus:border-[#678973]"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm text-[#6C739C] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={userData.email}
                  className="w-full px-4 py-2 border border-[#BABBB1] rounded-lg focus:outline-none focus:border-[#678973]"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm text-[#6C739C] mb-2">
                  Miembro desde
                </label>
                <input
                  type="text"
                  value={userData.memberSince}
                  className="w-full px-4 py-2 border border-[#BABBB1] rounded-lg bg-[#F0DAD5] bg-opacity-30"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm text-[#6C739C] mb-2">
                  Fecha de nacimiento
                </label>
                <input
                  type="text"
                  value="15/03/1990"
                  className="w-full px-4 py-2 border border-[#BABBB1] rounded-lg focus:outline-none focus:border-[#678973]"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm text-[#6C739C] mb-2">
                  Lugar de nacimiento
                </label>
                <input
                  type="text"
                  value="Buenos Aires, Argentina"
                  className="w-full px-4 py-2 border border-[#BABBB1] rounded-lg focus:outline-none focus:border-[#678973]"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm text-[#6C739C] mb-2">
                  Hora de nacimiento
                </label>
                <input
                  type="text"
                  value="14:30"
                  className="w-full px-4 py-2 border border-[#BABBB1] rounded-lg focus:outline-none focus:border-[#678973]"
                  readOnly
                />
              </div>
            </div>

            <div className="pt-4 border-t border-[#BABBB1]">
              <button className="px-6 py-2 bg-[#424658] text-white rounded-lg hover:bg-[#6C739C] transition-colors">
                Editar información
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Birth Chart Info */}
      <div className="bg-white rounded-lg p-6 border border-[#BABBB1]">
        <h3 className="text-xl text-[#424658] mb-4">Información Astrológica</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-[#F0DAD5] bg-opacity-30 rounded-lg">
            <p className="text-sm text-[#6C739C] mb-1">Signo Solar</p>
            <p className="text-lg text-[#424658]">♓ Piscis</p>
          </div>
          <div className="p-4 bg-[#DEA785] bg-opacity-20 rounded-lg">
            <p className="text-sm text-[#6C739C] mb-1">Signo Lunar</p>
            <p className="text-lg text-[#424658]">♋ Cáncer</p>
          </div>
          <div className="p-4 bg-[#D9A69F] bg-opacity-30 rounded-lg">
            <p className="text-sm text-[#6C739C] mb-1">Ascendente</p>
            <p className="text-lg text-[#424658]">♌ Leo</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderConsultas = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl text-[#424658]">Mis Consultas</h2>
        <Link
          to="/consultas"
          className="px-4 py-2 bg-[#678973] text-white rounded-lg hover:bg-[#6C739C] transition-colors"
        >
          Agendar nueva consulta
        </Link>
      </div>

      {/* Upcoming Consultations */}
      <div>
        <h3 className="text-lg text-[#424658] mb-4">Próximas Sesiones</h3>
        {upcomingConsultations.length > 0 ? (
          <div className="space-y-4">
            {upcomingConsultations.map((consultation) => (
              <div
                key={consultation.id}
                className="bg-white rounded-lg p-6 border border-[#BABBB1]"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#F0DAD5] rounded-lg">
                      <Calendar className="w-6 h-6 text-[#424658]" />
                    </div>
                    <div>
                      <h4 className="text-lg text-[#424658] mb-1">
                        {consultation.type}
                      </h4>
                      <p className="text-[#6C739C] mb-1">{consultation.date}</p>
                      <p className="text-sm text-[#6C739C]">
                        {consultation.time}
                      </p>
                      <span className="inline-block mt-2 px-3 py-1 bg-[#678973] bg-opacity-20 text-[#678973] text-sm rounded-full">
                        Confirmada
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-[#424658] text-white rounded-lg hover:bg-[#6C739C] transition-colors">
                      Unirse a la sesión
                    </button>
                    <button className="px-4 py-2 border border-[#C56B62] text-[#C56B62] rounded-lg hover:bg-[#C56B62] hover:text-white transition-colors">
                      Reagendar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg p-12 border border-[#BABBB1] text-center">
            <Calendar className="w-16 h-16 text-[#BABBB1] mx-auto mb-4" />
            <p className="text-[#6C739C] mb-4">
              No tienes consultas programadas
            </p>
            <Link
              to="/consultas"
              className="px-6 py-2 bg-[#678973] text-white rounded-lg hover:bg-[#6C739C] transition-colors"
            >
              Agendar mi primera consulta
            </Link>
          </div>
        )}
      </div>

      {/* Past Consultations */}
      <div>
        <h3 className="text-lg text-[#424658] mb-4">Consultas Anteriores</h3>
        <div className="bg-white rounded-lg border border-[#BABBB1]">
          <div className="p-4 border-b border-[#BABBB1] hover:bg-[#F0DAD5] hover:bg-opacity-20 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#424658]">
                  Lectura de Carta Natal Completa
                </p>
                <p className="text-sm text-[#6C739C]">
                  Completada el 10 Dic 2024
                </p>
              </div>
              <button className="text-sm text-[#678973] hover:text-[#6C739C]">
                Ver resumen
              </button>
            </div>
          </div>
          <div className="p-4 hover:bg-[#F0DAD5] hover:bg-opacity-20 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#424658]">Consulta de Tránsitos 2024</p>
                <p className="text-sm text-[#6C739C]">
                  Completada el 5 Nov 2024
                </p>
              </div>
              <button className="text-sm text-[#678973] hover:text-[#6C739C]">
                Ver resumen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderConfiguracion = () => (
    <div className="space-y-6">
      <h2 className="text-2xl text-[#424658]">Configuración</h2>

      <div className="bg-white rounded-lg p-6 border border-[#BABBB1]">
        <h3 className="text-lg text-[#424658] mb-4">Preferencias de cuenta</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-[#BABBB1]">
            <div>
              <p className="text-[#424658]">Notificaciones por email</p>
              <p className="text-sm text-[#6C739C]">
                Recibe actualizaciones sobre tus cursos y consultas
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-[#BABBB1] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#678973]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-[#BABBB1]">
            <div>
              <p className="text-[#424658]">Recordatorios de consultas</p>
              <p className="text-sm text-[#6C739C]">
                Recibe recordatorios 24 horas antes
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-[#BABBB1] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#678973]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-[#424658]">Newsletter mensual</p>
              <p className="text-sm text-[#6C739C]">
                Contenido exclusivo y novedades
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-[#BABBB1] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#678973]"></div>
            </label>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-[#BABBB1]">
        <h3 className="text-lg text-[#424658] mb-4">Seguridad</h3>
        <div className="space-y-3">
          <button className="w-full text-left px-4 py-3 border border-[#BABBB1] rounded-lg hover:bg-[#F0DAD5] hover:bg-opacity-20 transition-colors">
            Cambiar contraseña
          </button>
          <button className="w-full text-left px-4 py-3 border border-[#BABBB1] rounded-lg hover:bg-[#F0DAD5] hover:bg-opacity-20 transition-colors">
            Autenticación de dos factores
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-[#C56B62]">
        <h3 className="text-lg text-[#C56B62] mb-2">Zona de peligro</h3>
        <p className="text-sm text-[#6C739C] mb-4">
          Esta acción es irreversible
        </p>
        <button className="px-4 py-2 bg-[#C56B62] text-white rounded-lg hover:bg-opacity-90 transition-colors">
          Eliminar cuenta
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F0DAD5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl text-[#424658] mb-2">Mi Dashboard</h1>
          <p className="text-[#6C739C]">Bienvenida de nuevo, {userData.name}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-4 border border-[#BABBB1] sticky top-24">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab("mis-cursos")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === "mis-cursos"
                      ? "bg-[#424658] text-white"
                      : "text-[#424658] hover:bg-[#F0DAD5]"
                  }`}
                >
                  <BookOpen className="w-5 h-5" />
                  Mis Cursos
                </button>

                <button
                  onClick={() => setActiveTab("perfil")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === "perfil"
                      ? "bg-[#424658] text-white"
                      : "text-[#424658] hover:bg-[#F0DAD5]"
                  }`}
                >
                  <User className="w-5 h-5" />
                  Mi Perfil
                </button>

                <button
                  onClick={() => setActiveTab("consultas")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === "consultas"
                      ? "bg-[#424658] text-white"
                      : "text-[#424658] hover:bg-[#F0DAD5]"
                  }`}
                >
                  <Calendar className="w-5 h-5" />
                  Mis Consultas
                  {userData.upcomingConsultations > 0 && (
                    <span className="ml-auto bg-[#C56B62] text-white text-xs px-2 py-1 rounded-full">
                      {userData.upcomingConsultations}
                    </span>
                  )}
                </button>

                <button
                  onClick={() => setActiveTab("configuracion")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === "configuracion"
                      ? "bg-[#424658] text-white"
                      : "text-[#424658] hover:bg-[#F0DAD5]"
                  }`}
                >
                  <Settings className="w-5 h-5" />
                  Configuración
                </button>

                <div className="pt-4 mt-4 border-t border-[#BABBB1]">
                  <Link
                    to="/"
                    className="w-full flex items-center gap-3 px-4 py-3 text-[#C56B62] hover:bg-[#F0DAD5] rounded-lg transition-colors"
                  >
                    <LogOut className="w-5 h-5" />
                    Cerrar Sesión
                  </Link>
                </div>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "mis-cursos" && renderMisCursos()}
            {activeTab === "perfil" && renderPerfil()}
            {activeTab === "consultas" && renderConsultas()}
            {activeTab === "configuracion" && renderConfiguracion()}
          </div>
        </div>
      </div>
    </div>
  );
}
