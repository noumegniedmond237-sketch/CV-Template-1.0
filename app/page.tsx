import {
  User,
  Contact,
  Phone,
  Mail,
  MapPin,
  Cake,
  Globe,
  Languages,
  Sparkles,
  Heart,
  BookOpen,
  Target,
  Briefcase,
  GraduationCap,
  Leaf,
  Fish,
  Apple,
  Folder,
  Scissors,
  Award,
  Check,
} from 'lucide-react';
import { PrintButton } from '@/components/PrintButton';

export default function CVPage() {
  return (
    <div className="py-8 px-4 print:p-0 print:bg-white">
      {/* CV Container */}
      <div className="cv-container max-w-5xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden print:rounded-none">
        {/* Header */}
        <header className="bg-primary text-white px-8 py-10 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-light rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent rounded-full opacity-10 translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 flex flex-col md:flex-row print:flex-row items-center gap-8">
            {/* Photo placeholder */}
            <div className="w-32 h-32 rounded-full bg-accent/30 border-4 border-white/50 flex items-center justify-center shrink-0">
              <User className="w-12 h-12 text-white/80" />
            </div>

            {/* Name & Title */}
            <div className="text-center md:text-left print:text-left flex-1">
              <h1 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight mb-2">
                MBUYU NGOYI Antho
              </h1>
              <p className="text-accent text-lg font-light tracking-wide uppercase">
                Aide Soignante
              </p>
              <p className="text-white/70 text-sm mt-3 max-w-lg font-light leading-relaxed">
                Professionnelle polyvalente alliant une solide experience en soins d&apos;assistance et une expertise technique en milieu agroalimentaire et cosmetique.
              </p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row print:flex-row">
          {/* Sidebar */}
          <aside className="md:w-1/3 print:w-1/3 bg-sage-light p-8 order-2 md:order-1 print:order-1">
            {/* Contact */}
            <section className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-2">
                <Contact className="w-4 h-4 text-accent" />
                Contact
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-stone-600">
                  <Phone className="w-4 h-4 text-primary-lighter" />
                  <span>(237) 995 739 87</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-stone-600">
                  <Mail className="w-4 h-4 text-primary-lighter" />
                  <span>hello@reallygreatsite.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-stone-600">
                  <MapPin className="w-4 h-4 text-primary-lighter" />
                  <span>BP 20506, Douala, Cameroun</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-stone-600">
                  <Cake className="w-4 h-4 text-primary-lighter" />
                  <span>Née le 02/08/1975 à Kinshasa</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-stone-600">
                  <Globe className="w-4 h-4 text-primary-lighter" />
                  <a href="#" className="hover:text-primary transition-colors">
                    www.reallygreatsite.com
                  </a>
                </div>
              </div>
            </section>

            {/* Langues */}
            <section className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-2">
                <Languages className="w-4 h-4 text-accent" />
                Langues
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-stone-700 font-medium">Français</span>
                    <span className="text-stone-500 text-xs">Natif</span>
                  </div>
                  <div className="h-2 bg-stone-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary-lighter rounded-full"
                      style={{ width: '100%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-stone-700 font-medium">Anglais</span>
                    <span className="text-stone-500 text-xs">Intermédiaire</span>
                  </div>
                  <div className="h-2 bg-stone-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary-lighter rounded-full"
                      style={{ width: '65%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </section>

            {/* Compétences */}
            <section className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent" />
                Compétences
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Critical Thinking',
                  'Digital Marketing',
                  'Management Skills',
                  'Negotiation',
                  'Leadership',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white border border-stone-200 rounded-full text-xs text-stone-600 hover:border-primary hover:text-primary transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Centres d'intérêt */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-2">
                <Heart className="w-4 h-4 text-accent" />
                Centres d&apos;intérêt
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="flex items-center gap-2 px-3 py-1.5 bg-sage rounded-lg text-sm text-stone-600">
                  <BookOpen className="w-4 h-4 text-primary-lighter" />
                  Lecture
                </span>
              </div>
            </section>
          </aside>

          {/* Main Column */}
          <main className="md:w-2/3 print:w-2/3 p-8 order-1 md:order-2 print:order-2">
            {/* Objectif */}
            <section className="mb-8 pb-6 border-b border-stone-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-sage flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">
                    Objectif Professionnel
                  </h3>
                  <p className="text-sm text-stone-600 font-light leading-relaxed">
                    Rigoureuse sur l&apos;hygiene et la securite, je maitrise la gestion des produits d&apos;entretien et les processus de transformation. Expert(e) dans la surveillance clinique, l&apos;administration des thérapeutiques complexes et l&apos;assistance aux gestes techniques. Orienté(e) vers la sécurité des patients et l&apos;efficacité opérationnelle en environnement à haute pression.
                  </p>
                </div>
              </div>
            </section>

            {/* Expérience Professionnelle */}
            <section className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-accent" />
                Expérience Professionnelle
              </h3>

              <div className="space-y-6">
                {/* Exp 1 */}
                <div className="relative pl-6 border-l-2 border-sage hover:border-accent transition-colors group">
                  <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-accent -translate-x-[7px] group-hover:bg-primary transition-colors"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="font-serif text-lg text-stone-800">Aide Soignante</h4>
                    <span className="text-xs font-medium text-primary bg-sage px-2 py-1 rounded">
                      Depuis 2004
                    </span>
                  </div>
                  <p className="text-sm text-primary-lighter font-medium mb-2">
                    Healing Medical Center, Etoudi Yaoundé
                  </p>
                  <p className="text-sm text-stone-500 font-light leading-relaxed">
                    Alliant réactivité et maîtrise technique. Surveillance clinique, administration des thérapeutiques complexes et assistance aux gestes techniques.
                  </p>
                </div>

                {/* Exp 2 */}
                <div className="relative pl-6 border-l-2 border-sage hover:border-accent transition-colors group">
                  <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-accent -translate-x-[7px] group-hover:bg-primary transition-colors"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="font-serif text-lg text-stone-800">Infirmière</h4>
                    <span className="text-xs font-medium text-primary bg-sage px-2 py-1 rounded">
                      2021 - 2022
                    </span>
                  </div>
                  <p className="text-sm text-primary-lighter font-medium mb-2">
                    Ngodi-Bakoko, Carrefour Cimetière
                  </p>
                  <p className="text-sm text-stone-500 font-light leading-relaxed">
                    Service rendu au FAIR MED (Santé pour les démunis).
                  </p>
                </div>

                {/* Exp 3 */}
                <div className="relative pl-6 border-l-2 border-sage hover:border-accent transition-colors group">
                  <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-accent -translate-x-[7px] group-hover:bg-primary transition-colors"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="font-serif text-lg text-stone-800">
                      Mobilisateur Communautaire
                    </h4>
                    <span className="text-xs font-medium text-primary bg-sage px-2 py-1 rounded">
                      Juillet - Déc 2021
                    </span>
                  </div>
                  <p className="text-sm text-primary-lighter font-medium mb-2">
                    Douala, Cameroun
                  </p>
                </div>

                {/* Exp 4 */}
                <div className="relative pl-6 border-l-2 border-sage hover:border-accent transition-colors group">
                  <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-accent -translate-x-[7px] group-hover:bg-primary transition-colors"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="font-serif text-lg text-stone-800">Aide Soignante</h4>
                    <span className="text-xs font-medium text-primary bg-sage px-2 py-1 rounded">
                      2010 - 2011
                    </span>
                  </div>
                  <p className="text-sm text-primary-lighter font-medium mb-2">
                    Centre de Santé Roserie, Yaoundé
                  </p>
                </div>

                {/* Exp 5 */}
                <div className="relative pl-6 border-l-2 border-sage hover:border-accent transition-colors group">
                  <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-accent -translate-x-[7px] group-hover:bg-primary transition-colors"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="font-serif text-lg text-stone-800">Aide Soignante</h4>
                    <span className="text-xs font-medium text-primary bg-sage px-2 py-1 rounded">
                      2005 - 2006
                    </span>
                  </div>
                  <p className="text-sm text-primary-lighter font-medium mb-2">
                    Hope Services Clinic ET Maternity, Yaoundé
                  </p>
                </div>
              </div>
            </section>

            {/* Formation */}
            <section className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-accent" />
                Formation & Diplômes
              </h3>

              <div className="space-y-4">
                {/* Diplôme principal */}
                <div className="bg-sage-light rounded-xl p-5 border border-stone-100">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 className="font-serif text-lg text-stone-800">
                      Diplôme d&apos;Aide Soignante Generaliste
                    </h4>
                    <span className="text-xs font-medium text-white bg-primary px-3 py-1 rounded-full">
                      2021 - 2022
                    </span>
                  </div>
                  <p className="text-sm text-primary-lighter">
                    Université de Dschang (CFPB-NSANGOU), Cameroun
                  </p>
                </div>

                {/* Autres formations */}
                <div className="grid gap-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-sage-light transition-colors">
                    <Leaf className="w-5 h-5 text-accent" />
                    <div className="flex-1">
                      <p className="text-sm text-stone-700">
                        Formation en Agroalimentaire et Cosmétiques
                      </p>
                      <p className="text-xs text-stone-500">2023</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-sage-light transition-colors">
                    <Fish className="w-5 h-5 text-accent" />
                    <div className="flex-1">
                      <p className="text-sm text-stone-700">
                        Formation Pisciculture - Révolution Verte
                      </p>
                      <p className="text-xs text-stone-500">2023</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-sage-light transition-colors">
                    <Apple className="w-5 h-5 text-accent" />
                    <div className="flex-1">
                      <p className="text-sm text-stone-700">
                        Formation en Nutrition (Alphabétisation nutritionnelle)
                      </p>
                      <p className="text-xs text-stone-500">2020 - 2023</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-sage-light transition-colors">
                    <Folder className="w-5 h-5 text-accent" />
                    <div className="flex-1">
                      <p className="text-sm text-stone-700">
                        Gestion des Microprojets - Croix-Rouge Cameroun
                      </p>
                      <p className="text-xs text-stone-500">2015</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-sage-light transition-colors">
                    <Scissors className="w-5 h-5 text-accent" />
                    <div className="flex-1">
                      <p className="text-sm text-stone-700">
                        Formation permanente en Couture - Croix-Rouge
                      </p>
                      <p className="text-xs text-stone-500">2011</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-accent" />
                Certifications & Attestations
              </h3>

              <div className="grid gap-3">
                <div className="flex items-start gap-3 p-4 bg-white border border-stone-100 rounded-xl hover:border-accent hover:shadow-md transition-all">
                  <div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-700 font-medium">
                      Commissaire aux Comptes du Comité des Réfugiés
                    </p>
                    <p className="text-xs text-stone-500">Douala, Cameroun - 2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white border border-stone-100 rounded-xl hover:border-accent hover:shadow-md transition-all">
                  <div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-700 font-medium">
                      Certificate of Training - RSC Africa&apos;s Interpreter Training
                    </p>
                    <p className="text-xs text-stone-500">2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white border border-stone-100 rounded-xl hover:border-accent hover:shadow-md transition-all">
                  <div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-700 font-medium">
                      Attestation de travail - Centre de Santé Val de Grâce
                    </p>
                    <p className="text-xs text-stone-500">Aide Soignante</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white border border-stone-100 rounded-xl hover:border-accent hover:shadow-md transition-all">
                  <div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-700 font-medium">
                      Attestation d&apos;engagement bénévole - Trésorière du Comité des Réfugiés
                    </p>
                    <p className="text-xs text-stone-500">Douala</p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>

        {/* Footer */}
        <footer className="bg-primary px-8 py-4 text-center">
        </footer>
      </div>

      {/* Print Button */}
      <PrintButton />
    </div>
  );
}
