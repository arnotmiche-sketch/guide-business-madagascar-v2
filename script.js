const platforms = [
  { 
    id: "jumptask",
    icon: "J", 
    bg: "linear-gradient(135deg, #0284c7, #0369a1)", 
    tag: "Tâches", 
    title: "JumpTask", 
    desc: "Effectuez des petites tâches et gagnez des récompenses.", 
    url: "https://www.jumptask.io/r/winovisimigu",
    steps: [
      { title: "Étape 1 : Inscription", text: "Cliquez sur le bouton ci-dessous pour ouvrir JumpTask via votre lien de parrainage." },
      { title: "Étape 2 : Connexion", text: "Connectez-vous en utilisant votre compte Google ou un portefeuille crypto compatible." },
      { title: "Étape 3 : Réaliser les tâches", text: "Accomplissez des micro-tâches, regardez des vidéos ou répondez à des sondages pour accumuler des gains." },
      { title: "Étape 4 : Retrait", text: "Retirez vos gains dès le seuil minimal atteint vers votre portefeuille." }
    ]
  },
  { 
    id: "atoshi",
    icon: "A", 
    bg: "linear-gradient(135deg, #8b5cf6, #6d28d9)", 
    tag: "Crypto / Tâches", 
    title: "Atoshi", 
    desc: "Explorez la plateforme, validez votre KYC 1 et configurez votre cercle de sécurité.", 
    url: "https://invite.atoshi.org",
    steps: [
      { title: "Étape 1 : Téléchargement et Installation", text: "Cliquez sur le bouton pour accéder à la plateforme, téléchargez l'application officielle Atoshi et installez-la sur votre téléphone." },
      { title: "Étape 2 : Création du compte & Code d'invitation", text: "Ouvrez l'application Atoshi, inscrivez-vous avec votre adresse e-mail et entrez le code d'invitation officiel : <strong>XYRAHX</strong> pour lier votre compte." },
      { title: "Étape 3 : Validation du Statut KYC - Niveau 1", text: "Pour réussir le KYC niveau 1, remplissez les deux conditions requises :\n1. <strong>Image de profil :</strong> Téléchargez une vraie photo de profil originale, non modifiée et authentique.\n2. <strong>Cercle de sécurité :</strong> Ajoutez obligatoirement les 5 comptes d'amis suivants (qui existent déjà sur Atoshi) :\n• arnotmiche@gmail.com\n• felana601@gmail.com\n• ramaroson124@gmail.com\n• lebotritra@gmail.com\n• fanomezantsoarijaldo07@gmail.com" },
      { title: "Étape 4 : Gestion du Profil & Paramètres", text: "Dans le menu de l'application, vérifiez votre 'Statut KYC', consultez votre compte e-mail associé, modifiez la langue ou contactez le support en cas de besoin." },
      { title: "Étape 5 : Sessions quotidiennes", text: "Profitez des fonctionnalités de l'application et participez régulièrement aux activités pour optimiser vos gains." }
    ]
  },
  { 
    id: "blockbuster",
    icon: "B", 
    bg: "linear-gradient(135deg, #f59e0b, #d97706)", 
    tag: "Tâches", 
    title: "Blockbuster", 
    desc: "Regardez des vidéos, configurez votre profil et sécurisez votre compte.", 
    url: "https://playbb.fun/u/28200662",
    steps: [
      { title: "Étape 1 : Accès et Inscription", text: "Cliquez sur le lien pour accéder à la plateforme Blockbuster et téléchargez/ouvrez l'application." },
      { title: "Étape 2 : Configuration complète du Profil", text: "Rendez-vous dans la section 'Mon profil' pour personnaliser vos informations :\n• <strong>Photo de profil :</strong> Ajoutez une vraie photo claire et authentique.\n• <strong>Genre & Âge :</strong> Renseignez votre genre et votre âge.\n• <strong>Surnom & Signature :</strong> Choisissez un pseudo personnalisé et écrivez une signature personnelle.\n• <strong>ID :</strong> Conservez ou copiez votre identifiant unique (ID) en cas de besoin avec le support." },
      { title: "Étape 3 : Sécurisation et Liaison du Compte", text: "Allez dans l'onglet 'Compte' pour lier solidement vos accès :\n• <strong>Google :</strong> Associez votre compte Google (statut 'Lié').\n• <strong>Email :</strong> Enregistrez et vérifiez votre adresse e-mail.\n• <strong>Appareil de connexion :</strong> Vérifiez l'appareil utilisé pour vous connecter." },
      { title: "Étape 4 : Missions et Vidéos", text: "Visionnez les contenus vidéo et accomplissez les tâches quotidiennes pour accumuler vos récompenses sur la plateforme." }
    ]
  },
  { 
    id: "freecash",
    icon: "F", 
    bg: "linear-gradient(135deg, #10b981, #059669)", 
    tag: "Tâches", 
    title: "Freecash", 
    desc: "Testez des applis et réalisez des missions simples.", 
    url: "https://freecash.com/r/35DV7H",
    steps: [
      { title: "Étape 1 : Inscription rapide", text: "Inscrivez-vous sur Freecash via le lien sécurisé." },
      { title: "Étape 2 : Choix des offres", text: "Sélectionnez un jeu ou une application à tester dans la liste des partenaires." },
      { title: "Étape 3 : Validation", text: "Suivez les conditions requises pour valider vos gains instantanément." }
    ]
  },
  { 
    id: "glowlive",
    icon: "G", 
    bg: "linear-gradient(135deg, #9333ea, #7e22ce)", 
    tag: "Live / Divertissement", 
    title: "Glow Live", 
    desc: "Regardez des lives, devenez hôte et rejoignez l'agence officielle Asa Enligne.", 
    url: "https://app.biubiuclub.com/invite/v2?r=KG23DV&ticket=",
    steps: [
      { title: "Étape 1 : Rejoindre la plateforme", text: "Ouvrez le lien d'invitation Glow Live et installez l'application." },
      { title: "Étape 2 : Configuration du Profil & Authentification", text: "Rendez-vous sur votre profil pour valider les conditions requises pour devenir hôte :\n• <strong>Authentification faciale :</strong> Complétez la vérification du visage ('S'authentifier').\n• <strong>Niveau de richesse :</strong> Atteignez le niveau requis (Niveau 10).\n• <strong>Mot de passe :</strong> Configurez la sécurité de votre compte dans les paramètres." },
      { title: "Étape 3 : Rejoindre l'Agence", text: "Dans votre profil, cliquez sur l'option <strong>'Rejoindre la Agence'</strong>." },
      { title: "Étape 4 : Saisir l'ID de l'Agent (Méthode 1)", text: "Sélectionnez la <strong>Méthode 1</strong> (Rejoindre un Agent) et entrez l'identifiant officiel de l'équipe :\n• <strong>ID de l'agent Asa Enligne Team :</strong> <code style='background: #334155; padding: 2px 6px; border-radius: 4px; color: #38bdf8;'>28478660</code>\n• Validez pour faire partie de l'équipe." }
    ]
  },
  { 
    id: "robox",
    icon: "R", 
    bg: "linear-gradient(135deg, #0ea5e9, #0284c7)", 
    tag: "Jeux / Apps", 
    title: "Robox", 
    desc: "Jouez, testez des applis et explorez les offres.", 
    url: "https://robox.digital/i/3190958",
    steps: [
      { title: "Étape 1 : Inscription", text: "Accédez à Robox via votre lien personnel." },
      { title: "Étape 2 : Exploration", text: "Découvrez les mini-jeux et les applications à tester pour gagner des récompenses." }
    ]
  },
  { 
    id: "hifami",
    icon: "H", 
    bg: "linear-gradient(135deg, #ec4899, #db2777)", 
    tag: "Réseaux sociaux", 
    title: "HiFami", 
    desc: "Rejoignez la communauté et accomplissez des tâches.", 
    url: "https://s.hifamiapp.com/1/NLN3AUhEE",
    steps: [
      { title: "Étape 1 : Connexion", text: "Cliquez sur le lien HiFami pour ouvrir la plateforme." },
      { title: "Étape 2 : Participation", text: "Suivez les instructions de la communauté pour accomplir vos missions." }
    ]
  },
  { 
    id: "ctpool",
    icon: "C", 
    bg: "linear-gradient(135deg, #3b82f6, #1d4ed8)", 
    tag: "Crypto / Cloud", 
    title: "CT Pool", 
    desc: "Participez au pool et explorez l'écosystème.", 
    url: "https://g.cb.click/X9o82I",
    steps: [
      { title: "Étape 1 : Inscription", text: "Ouvrez le lien CT Pool." },
      { title: "Étape 2 : Participation au pool", text: "Suivez les étapes du site pour configurer votre participation." }
    ]
  },
  { 
    id: "timebucks",
    icon: "T", 
    bg: "linear-gradient(135deg, #059669, #047857)", 
    tag: "Sondages / Tâches", 
    title: "TimeBucks", 
    desc: "Répondez à des sondages et effectuez des tâches.", 
    url: "https://timebucks.com/?refID=229849590",
    steps: [
      { title: "Étape 1 : Création du compte", text: "Inscrivez-vous sur TimeBucks avec votre email." },
      { title: "Étape 2 : Sondages quotidiens", text: "Remplissez les enquêtes disponibles chaque jour pour accumuler des dollars." }
    ]
  },
  { 
    id: "sweatwallet",
    icon: "S", 
    bg: "linear-gradient(135deg, #6366f1, #4f46e5)", 
    tag: "Web3 / Santé", 
    title: "Sweat Wallet", 
    desc: "Bougez, restez actif et explorez l'écosystème.", 
    url: "https://swe.at/c/AEk2v36roz",
    steps: [
      { title: "Étape 1 : Téléchargement", text: "Installez l'application Sweat Wallet via le lien." },
      { title: "Étape 2 : Marche quotidienne", text: "Marchez au quotidien : vos pas sont convertis en cryptomonnaie Sweatcoin." }
    ]
  },
  { 
    id: "prsocial",
    icon: "PR", 
    bg: "linear-gradient(135deg, #0284c7, #0f172a)", 
    tag: "Réseaux sociaux", 
    title: "PR Social", 
    desc: "Sécurisez votre profil, liez vos réseaux sociaux et réalisez des missions.", 
    url: "https://pr.social/?ref=b649d730",
    steps: [
      { title: "Étape 1 : Inscription & Connexion", text: "Rejoignez PR Social via le lien d'affiliation et connectez-vous à votre espace." },
      { title: "Étape 2 : Paramètres et Vérification de l'Email", text: "Dans la section <strong>Settings</strong>, vérifiez l'état de votre e-mail (statut 'Verified' en vert). Vous pouvez également modifier votre e-mail ou votre mot de passe en cas de besoin." },
      { title: "Étape 3 : Liaison des Comptes de Réseaux Sociaux", text: "Allez dans l'onglet <strong>Social Media Accounts</strong> pour lier vos comptes (Instagram, YouTube, TikTok, Telegram, etc.) :\n• Chaque compte est vérifié par l'équipe.\n• Vous pouvez généralement lier un compte par plateforme (ex: un profil Instagram, une chaîne YouTube, etc.).\n• Suivez le nombre de tâches accomplies et veillez à respecter les conditions de liaison (les modifications ultérieures nécessitent parfois de contacter le support)." },
      { title: "Étape 4 : Paliers de Gains", text: "Progressez à travers les différents badges de performance de la plateforme (First Dollar, Rising Star, Hustler, Money Maker, Top Earner, Legend) en accomplissant régulièrement vos tâches sociales." }
    ]
  },
  { 
    id: "foxigrow",
    icon: "🦊", 
    bg: "linear-gradient(135deg, #ea580c, #c2410c)", 
    tag: "Tâches / Réseaux", 
    title: "FoxiGrow", 
    desc: "Effectuez des tâches et développez votre réseau.", 
    url: "https://t.me/FoxiGrowbot?start=ref_8960713170",
    steps: [
      { title: "Étape 1 : Lancer le bot Telegram", text: "Cliquez sur le lien pour ouvrir le bot Telegram FoxiGrow." },
      { title: "Étape 2 : Démarrage", text: "Appuyez sur /start et suivez les instructions à l'écran du bot." }
    ]
  },
  { 
    id: "atfairdrop",
    icon: "🚀", 
    bg: "linear-gradient(135deg, #4f46e5, #3730a3)", 
    tag: "Airdrop / Crypto", 
    title: "ATF Airdrop", 
    desc: "Découvrez les airdrops et les opportunités Web3.", 
    url: "https://t.me/ATF_AIRDROP_bot?start=8960713170",
    steps: [
      { title: "Étape 1 : Ouvrir le bot", text: "Cliquez pour lancer le bot Telegram officiel de l'airdrop." },
      { title: "Étape 2 : Accomplir les tâches requises", text: "Rejoignez les canaux Telegram et remplissez les conditions pour valider votre participation." }
    ]
  }
];

// Gestion des favoris, de l'authentification et du salon de discussion général
let favorites = JSON.parse(localStorage.getItem('gb_favorites')) || [];
let currentUser = JSON.parse(localStorage.getItem('gb_current_user')) || null;
let isLoginMode = false;

function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(fav => fav !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem('gb_favorites', JSON.stringify(favorites));
  renderPage(currentPage);
}

const switchModeBtn = document.getElementById('switch-mode-btn');
if (switchModeBtn) {
  switchModeBtn.addEventListener('click', () => {
    isLoginMode = !isLoginMode;
    const registerFields = document.getElementById('register-fields');
    const confirmGroup = document.getElementById('confirm-password-group');
    const authTitle = document.getElementById('auth-title');
    const authSubtitle = document.getElementById('auth-subtitle');
    const authSubmitBtn = document.getElementById('auth-submit-btn');
    const switchText = document.getElementById('switch-text');

    if (isLoginMode) {
      registerFields.style.display = 'none';
      confirmGroup.style.display = 'none';
      authTitle.innerText = 'Connexion';
      authSubtitle.innerText = 'Accédez à votre compte existant';
      authSubmitBtn.innerText = 'Se connecter';
      switchText.innerText = "Pas encore de compte ?";
      switchModeBtn.innerText = "S'inscrire";
    } else {
      registerFields.style.display = 'block';
      confirmGroup.style.display = 'block';
      authTitle.innerText = 'Créer un compte';
      authSubtitle.innerText = 'Rejoignez Guide Business Madagascar';
      authSubmitBtn.innerText = "S'inscrire";
      switchText.innerText = "Déjà un compte ?";
      switchModeBtn.innerText = "Se connecter";
    }
  });
}

const authForm = document.getElementById('auth-form');
if (authForm) {
  authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('auth-username').value.trim();
    const password = document.getElementById('auth-password').value;

    if (!username || !password) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    let usersDB = JSON.parse(localStorage.getItem('gb_users_db')) || [];

    if (isLoginMode) {
      const foundUser = usersDB.find(u => u.username === username && u.password === password);
      if (foundUser) {
        currentUser = foundUser;
        localStorage.setItem('gb_current_user', JSON.stringify(currentUser));
        checkAuthAndLaunch();
      } else {
        alert("Nom d'utilisateur ou mot de passe incorrect, ou le compte n'existe pas !");
      }
    } else {
      const fullname = document.getElementById('reg-fullname').value.trim();
      const dob = document.getElementById('reg-dob').value;
      const address = document.getElementById('reg-address').value.trim();
      const passwordConfirm = document.getElementById('auth-password-confirm').value;

      if (!fullname || !dob || !address) {
        alert("Veuillez remplir tous les champs d'inscription.");
        return;
      }

      if (password !== passwordConfirm) {
        alert("Les mots de passe ne correspondent pas !");
        return;
      }

      if (usersDB.some(u => u.username === username)) {
        alert("Ce nom d'utilisateur est déjà pris. Choisissez-en un autre.");
        return;
      }

      const newUser = {
        fullname,
        username,
        dob,
        address,
        password
      };

      usersDB.push(newUser);
      localStorage.setItem('gb_users_db', JSON.stringify(usersDB));

      currentUser = newUser;
      localStorage.setItem('gb_current_user', JSON.stringify(currentUser));
      alert("Compte créé avec succès ! Bienvenue.");
      checkAuthAndLaunch();
    }
  });
}

function logoutUser() {
  if (confirm("Voulez-vous vraiment vous déconnecter ?")) {
    currentUser = null;
    localStorage.removeItem('gb_current_user');
    document.getElementById('main-app-container').style.display = 'none';
    document.getElementById('auth-screen').style.display = 'flex';
    document.getElementById('auth-form').reset();
  }
}

function checkAuthAndLaunch() {
  const authScreen = document.getElementById('auth-screen');
  const mainApp = document.getElementById('main-app-container');

  if (currentUser) {
    authScreen.style.display = 'none';
    mainApp.style.display = 'block';
    renderPage('home');
  } else {
    authScreen.style.display = 'flex';
    mainApp.style.display = 'none';
  }
}

let currentPage = 'home';

function renderPage(page) {
  currentPage = page;
  const main = document.getElementById('main-content');
  if (!main) return;
  main.innerHTML = "";

  document.querySelectorAll('.nav-item').forEach(btn => {
    if (btn.getAttribute('data-page') === page) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  if (page === 'home') {
    main.innerHTML = `
      <div class="banner-guide">
        <div class="banner-content">
          <div class="banner-avatar">🇲🇬</div>
          <div>
            <div class="banner-title">Bienvenue, ${currentUser ? currentUser.fullname : 'Membre'} !</div>
            <p class="banner-desc">Découvrez les meilleures plateformes vérifiées pour gagner des revenus à Madagascar, pas à pas.</p>
          </div>
        </div>
      </div>

      <div class="section-title-row">
        <div class="section-title-left">
          <div class="grid-icon"><i class="fa-solid fa-grip"></i></div>
          <div>
            <h2>Nos plateformes & bots</h2>
            <p>Des services fiables, un pas à la fois.</p>
          </div>
        </div>
        <div class="verified-badge">
          <i class="fa-solid fa-shield-halved"></i> Vérifiés
        </div>
      </div>

      <div class="platforms-grid" id="platforms-grid"></div>
    `;
    renderPlatformsGrid('platforms-grid', platforms);

  } else if (page === 'guides') {
    main.innerHTML = `
      <div class="banner-guide">
        <div class="banner-content">
          <div class="banner-avatar">🧭</div>
          <div>
            <div class="banner-title">Guides & Tutoriels</div>
            <p class="banner-desc">Cliquez sur une plateforme pour consulter les étapes détaillées.</p>
          </div>
        </div>
      </div>
      <div class="section-title-row">
        <div class="section-title-left">
          <div class="grid-icon"><i class="fa-solid fa-book"></i></div>
          <div>
            <h2>Toutes les plateformes</h2>
            <p>Guide étape par étape</p>
          </div>
        </div>
      </div>
      <div class="list-view" id="guides-list"></div>
    `;
    renderGuidesList('guides-list', platforms);

  } else if (page === 'favorites') {
    const favPlatforms = platforms.filter(p => favorites.includes(p.id));
    main.innerHTML = `
      <div class="banner-guide">
        <div class="banner-content">
          <div class="banner-avatar">⭐</div>
          <div>
            <div class="banner-title">Mes favoris</div>
            <p class="banner-desc">Retrouvez rapidement vos plateformes enregistrées.</p>
          </div>
        </div>
      </div>
      <div class="platforms-grid" id="favorites-grid"></div>
    `;
    if (favPlatforms.length === 0) {
      document.getElementById('favorites-grid').innerHTML = `<p style="grid-column: span 2; text-align: center; color: #94a3b8; font-size: 12px; padding: 20px;">Aucun favori pour le moment. Cliquez sur l'étoile d'une carte pour l'ajouter ici !</p>`;
    } else {
      renderPlatformsGrid('favorites-grid', favPlatforms);
    }

  } else if (page === 'messages') {
    renderGroupChatPage();

  } else if (page === 'settings') {
    main.innerHTML = `
      <div class="banner-guide">
        <div class="banner-content">
          <div class="banner-avatar">⚙️</div>
          <div>
            <div class="banner-title">Paramètres de l'application</div>
            <p class="banner-desc">Gérez vos informations et préférences.</p>
          </div>
        </div>
      </div>
      
      <div class="settings-section-title">Mon Compte (Enregistré)</div>
      
      <div class="step-box" style="margin-bottom: 12px;">
        <h4 style="color: #38bdf8; margin-bottom: 8px;"><i class="fa-solid fa-id-card"></i> Informations personnelles</h4>
        <p><strong>Nom & Prénom :</strong> ${currentUser ? currentUser.fullname : '-'}</p>
        <p><strong>Nom d'utilisateur :</strong> @${currentUser ? currentUser.username : '-'}</p>
        <p><strong>Date de naissance :</strong> ${currentUser ? currentUser.dob : '-'}</p>
        <p><strong>Domicile :</strong> ${currentUser ? currentUser.address : '-'}</p>
      </div>

      <div class="settings-section-title">Application</div>
      <button class="list-item" onclick="alert('Notifications activées sur votre appareil.')">
        <div class="list-item-left">
          <div class="list-item-icon"><i class="fa-solid fa-bell"></i></div>
          <div>
            <div class="list-item-title">Notifications</div>
            <div class="list-item-desc">Gérer les alertes</div>
          </div>
        </div>
        <i class="fa-solid fa-chevron-right" style="color: #64748b; font-size: 12px;"></i>
      </button>

      <button class="list-item" onclick="alert('Guide Business Madagascar - Version 2.0 (Sécurisé)')">
        <div class="list-item-left">
          <div class="list-item-icon"><i class="fa-solid fa-info-circle"></i></div>
          <div>
            <div class="list-item-title">À propos</div>
            <div class="list-item-desc">Version 2.0.0</div>
          </div>
        </div>
        <i class="fa-solid fa-chevron-right" style="color: #64748b; font-size: 12px;"></i>
      </button>

      <button class="btn-logout" onclick="logoutUser()"><i class="fa-solid fa-right-from-bracket"></i> Se déconnecter</button>
      <button class="btn-danger" onclick="clearFavoritesData()">Effacer tous les favoris</button>
    `;
  }
}

// Gestion de la page Salon de discussion Général avec ajustement mobile du clavier
function renderGroupChatPage() {
  const main = document.getElementById('main-content');

  main.innerHTML = `
    <div class="banner-guide" style="margin-bottom: 8px;">
      <div class="banner-content">
        <div class="banner-avatar">💡</div>
        <div>
          <div class="banner-title">Salon d'échange d'idées</div>
          <p class="banner-desc">Discutez en direct avec la communauté.</p>
        </div>
      </div>
    </div>

    <div style="background: #1e293b; border-radius: 12px; border: 1px solid #334155; display: flex; flex-direction: column; height: calc(100vh - 220px); min-height: 300px; overflow: hidden; position: relative;">
      <!-- En-tête du groupe -->
      <div style="background: #0f172a; padding: 10px 12px; border-bottom: 1px solid #334155; display: flex; align-items: center; justify-content: space-between; flex-shrink: 0;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <div style="width: 8px; height: 8px; background: #10b981; border-radius: 50%;"></div>
          <span style="font-size: 12px; font-weight: bold; color: #f8fafc;">Canal Général - Madagascar</span>
        </div>
        <span style="font-size: 10px; color: #94a3b8;"><i class="fa-solid fa-users"></i> Ouvert</span>
      </div>

      <!-- Corps des messages du groupe -->
      <div id="group-chat-messages" style="flex: 1; padding: 12px; overflow-y: auto; display: flex; flex-direction: column; gap: 8px; font-size: 12px;">
        <div style="text-align: center; color: #64748b; margin: auto;">Chargement...</div>
      </div>

      <!-- Formulaire d'envoi collé en bas -->
      <form id="group-chat-form" style="display: flex; padding: 8px; background: #0f172a; border-top: 1px solid #334155; flex-shrink: 0;" onsubmit="sendGroupMessage(event)">
        <input type="text" id="group-chat-input" placeholder="Partagez une idée..." style="flex: 1; background: #1e293b; border: 1px solid #334155; border-radius: 8px; padding: 10px; color: #fff; font-size: 12px; outline: none;" required>
        <button type="submit" style="background: #0284c7; color: #fff; border: none; border-radius: 8px; padding: 0 14px; margin-left: 6px; cursor: pointer; font-weight: bold;"><i class="fa-solid fa-paper-plane"></i></button>
      </form>
    </div>
  `;

  loadGroupMessages();

  const groupInput = document.getElementById('group-chat-input');
  if (groupInput) {
    groupInput.addEventListener('focus', () => {
      setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight);
        const messagesContainer = document.getElementById('group-chat-messages');
        if (messagesContainer) {
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
      }, 300);
    });
  }
}

function loadGroupMessages() {
  const messagesContainer = document.getElementById('group-chat-messages');
  if (!messagesContainer) return;
  const groupMessages = JSON.parse(localStorage.getItem('gb_group_messages_db')) || [];

  messagesContainer.innerHTML = "";

  if (groupMessages.length === 0) {
    messagesContainer.innerHTML = `<div style="text-align: center; color: #64748b; margin: auto;">Soyez le premier à lancer une discussion ou à partager une idée dans ce groupe !</div>`;
    return;
  }

  groupMessages.forEach(msg => {
    const isMe = msg.senderUsername === currentUser.username;
    const bubbleWrapper = document.createElement('div');
    bubbleWrapper.style.cssText = `display: flex; flex-direction: column; align-items: ${isMe ? 'flex-end' : 'flex-start'}; margin-bottom: 4px;`;

    const authorLabel = isMe ? '' : `<span style="font-size: 10px; color: #38bdf8; margin-bottom: 2px; font-weight: bold;">${msg.senderFullname} (@${msg.senderUsername})</span>`;

    const bubble = document.createElement('div');
    bubble.style.cssText = `max-width: 80%; padding: 10px 14px; border-radius: 10px; font-size: 12px; word-break: break-word; line-height: 1.4; ${isMe ? 'background: #0284c7; color: #fff; border-bottom-right-radius: 2px;' : 'background: #334155; color: #f8fafc; border-bottom-left-radius: 2px;'}`;
    bubble.innerText = msg.text;

    bubbleWrapper.innerHTML = authorLabel;
    bubbleWrapper.appendChild(bubble);
    messagesContainer.appendChild(bubbleWrapper);
  });

  setTimeout(() => {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, 50);
}

function sendGroupMessage(e) {
  e.preventDefault();
  const input = document.getElementById('group-chat-input');
  const text = input.value.trim();
  if (!text) return;

  const newGroupMessage = {
    senderUsername: currentUser.username,
    senderFullname: currentUser.fullname,
    text: text,
    timestamp: Date.now()
  };

  let groupMessages = JSON.parse(localStorage.getItem('gb_group_messages_db')) || [];
  groupMessages.push(newGroupMessage);
  localStorage.setItem('gb_group_messages_db', JSON.stringify(groupMessages));

  input.value = "";
  loadGroupMessages();
}

function renderPlatformsGrid(containerId, list) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";

  list.forEach((item) => {
    const isFav = favorites.includes(item.id);
    const card = document.createElement('div');
    card.className = 'card';
    
    card.innerHTML = `
      <div>
        <div class="card-top">
          <div class="card-icon" style="background: ${item.bg}">${item.icon}</div>
          <div class="card-info">
            <div class="card-title-row">
              <span class="card-title">${item.title}</span>
              <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite('${item.id}')">
                <i class="fa-${isFav ? 'solid' : 'regular'} fa-star"></i>
              </button>
            </div>
            <span class="tag">${item.tag}</span>
          </div>
        </div>
        <div class="card-desc">${item.desc}</div>
      </div>
      <button class="btn-guide" onclick="openModal('${item.id}')">
        <i class="fa-solid fa-book-open"></i> Guide étape par étape
      </button>
    `;
    container.appendChild(card);
  });
}

function renderGuidesList(containerId, list) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";

  list.forEach((item) => {
    const el = document.createElement('button');
    el.className = 'list-item';
    el.onclick = () => openModal(item.id);
    el.innerHTML = `
      <div class="list-item-left">
        <div class="list-item-icon" style="background: ${item.bg}; color: #fff;">${item.icon}</div>
        <div>
          <div class="list-item-title">${item.title}</div>
          <div class="list-item-desc">${item.tag}</div>
        </div>
      </div>
      <i class="fa-solid fa-chevron-right" style="color: #64748b; font-size: 12px;"></i>
    `;
    container.appendChild(el);
  });
}

function openModal(platformId) {
  const platform = platforms.find(p => p.id === platformId);
  if (!platform) return;

  document.getElementById('modal-title').innerText = `Guide : ${platform.title}`;
  const stepsContainer = document.getElementById('modal-steps-content');
  stepsContainer.innerHTML = "";

  platform.steps.forEach(step => {
    const box = document.createElement('div');
    box.className = 'step-box';
    const formattedText = step.text.replace(/\n/g, '<br>');
    box.innerHTML = `
      <h4>${step.title}</h4>
      <p>${formattedText}</p>
    `;
    stepsContainer.appendChild(box);
  });

  const actionBtn = document.getElementById('modal-action-btn');
  actionBtn.href = platform.url;

  document.getElementById('modal-guide').style.display = 'flex';
}

const closeModalBtn = document.getElementById('close-modal');
if (closeModalBtn) {
  closeModalBtn.addEventListener('click', () => {
    document.getElementById('modal-guide').style.display = 'none';
  });
}

function clearFavoritesData() {
  if (confirm("Voulez-vous vraiment effacer tous vos favoris ?")) {
    favorites = [];
    localStorage.removeItem('gb_favorites');
    alert("Favoris effacés avec succès !");
    renderPage('settings');
  }
}

document.querySelectorAll('.bottom-nav .nav-item').forEach(btn => {
  btn.addEventListener('click', () => {
    const page = btn.getAttribute('data-page');
    renderPage(page);
  });
});

window.addEventListener('load', () => {
  checkAuthAndLaunch();
  
  setTimeout(() => {
    const splash = document.getElementById('splash-screen');
    if (splash) {
      splash.classList.add('fade-out');
    }
  }, 1200);
});

// --- Initialisation de la publicité Start.io ---
window.addEventListener('DOMContentLoaded', () => {
  try {
    if (typeof StartApp !== 'undefined') {
      StartApp.setAppId("208955931");
      StartApp.showBanner({
        containerId: 'start-banner-ad',
        adPreferences: {}
      });
    }
  } catch (e) {
    console.log("Mode hors-ligne ou chargement publicitaire en arrière-plan.");
  }
});
