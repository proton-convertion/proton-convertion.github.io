
document.getElementById('tgButton').onclick = function() {
    window.location.href = 'https://t.me/warp_1_1_1_1';
}

document.getElementById('promoButton').onclick = function() {
    window.location.href = 'https://storage.googleapis.com/amnezia/amnezia.org?m-path=premium&arf=VG755WBZDBAPGGYM';
}

document.getElementById('warpButton').onclick = function() {
    window.location.href = 'https://my-other-projects.vercel.app/';
}

document.getElementById('adButton').onclick = function() {
    window.location.href = 'https://t.me/AgnosiaVPN_bot'
}

window.addEventListener('DOMContentLoaded', function() {
  // Восстанавливаем состояние всех контейнеров
  toggleAWG15Containers();
  replaceMobileText();
});

function toggleAWG15Containers() {
  const awg15Disabled = document.getElementById('awg15').disabled;
  const selectedOption = document.querySelector('input[name="option"]:checked').id;
  const awg15Container = document.getElementById('15awg');
  const wiresockContainer = document.getElementById('15wiresock');
  
  // Сначала скрываем оба контейнера
  if (awg15Container) awg15Container.classList.add('hidden');
  if (wiresockContainer) wiresockContainer.classList.add('hidden');
  
  if (selectedOption === 'clash' || selectedOption === 'awg') {awg15Container.classList.remove('hidden')} 
  else if (selectedOption === 'karing') {wiresockContainer.classList.remove('hidden')}
  
  if (awg15Disabled) {} else {toggleNolanContainer()}
}

// Добавляем обработчики для радиокнопок и чекбокса awg15
document.querySelectorAll('input[name="option"]').forEach(radio => {
  radio.addEventListener('change', toggleAWG15Containers);
});

document.getElementById('awg15').addEventListener('change', toggleAWG15Containers);
document.getElementById('wgFiles').addEventListener('change', function(e) {
    const files = e.target.files;
    const label = document.getElementById('fileUploadLabel');
    
    if (files.length === 0) {
        label.textContent = 'Выбрать файлы';
    } else {
        label.textContent = `Файлов выбрано: ${files.length}`;
    }
});
document.querySelector('.randombtn').onclick = function() {
  const jc = getRandomInt(1, 100);
  const jmin = getRandomInt(1, 200);
  const jmax = getRandomInt(jmin + 1, 201);
  
  document.getElementById('jc1').value = jc;
  document.getElementById('jmin1').value = jmin;
  document.getElementById('jmax1').value = jmax;
  document.getElementById('junk3').checked = true;
  convert()
};

document.querySelectorAll('.randombtn')[1].onclick = function() {
  // Генерация случайных значений для I1-I5
  const Hex = ['<b 0xce000000010897a297ecc34cd6dd000044d0ec2e2e1ea2991f467ace4222129b5a098823784694b4897b9986ae0b7280135fa85e196d9ad980b150122129ce2a9379531b0fd3e871ca5fdb883c369832f730e272d7b8b74f393f9f0fa43f11e510ecb2219a52984410c204cf875585340c62238e14ad04dff382f2c200e0ee22fe743b9c6b8b043121c5710ec289f471c91ee414fca8b8be8419ae8ce7ffc53837f6ade262891895f3f4cecd31bc93ac5599e18e4f01b472362b8056c3172b513051f8322d1062997ef4a383b01706598d08d48c221d30e74c7ce000cdad36b706b1bf9b0607c32ec4b3203a4ee21ab64df336212b9758280803fcab14933b0e7ee1e04a7becce3e2633f4852585c567894a5f9efe9706a151b615856647e8b7dba69ab357b3982f554549bef9256111b2d67afde0b496f16962d4957ff654232aa9e845b61463908309cfd9de0a6abf5f425f577d7e5f6440652aa8da5f73588e82e9470f3b21b27b28c649506ae1a7f5f15b876f56abc4615f49911549b9bb39dd804fde182bd2dcec0c33bad9b138ca07d4a4a1650a2c2686acea05727e2a78962a840ae428f55627516e73c83dd8893b02358e81b524b4d99fda6df52b3a8d7a5291326e7ac9d773c5b43b8444554ef5aea104a738ed650aa979674bbed38da58ac29d87c29d387d80b526065baeb073ce65f075ccb56e47533aef357dceaa8293a523c5f6f790be90e4731123d3c6152a70576e90b4ab5bc5ead01576c68ab633ff7d36dcde2a0b2c68897e1acfc4d6483aaaeb635dd63c96b2b6a7a2bfe042f6aed82e5363aa850aace12ee3b1a93f30d8ab9537df483152a5527faca21efc9981b304f11fc95336f5b9637b174c5a0659e2b22e159a9fed4b8e93047371175b1d6d9cc8ab745f3b2281537d1c75fb9451871864efa5d184c38c185fd203de206751b92620f7c369e031d2041e152040920ac2c5ab5340bfc9d0561176abf10a147287ea90758575ac6a9f5ac9f390d0d5b23ee12af583383d994e22c0cf42383834bcd3ada1b3825a0664d8f3fb678261d57601ddf94a8a68a7c273a18c08aa99c7ad8c6c42eab67718843597ec9930457359dfdfbce024afc2dcf9348579a57d8d3490b2fa99f278f1c37d87dad9b221acd575192ffae1784f8e60ec7cee4068b6b988f0433d96d6a1b1865f4e155e9fe020279f434f3bf1bd117b717b92f6cd1cc9bea7d45978bcc3f24bda631a36910110a6ec06da35f8966c9279d130347594f13e9e07514fa370754d1424c0a1545c5070ef9fb2acd14233e8a50bfc5978b5bdf8bc1714731f798d21e2004117c61f2989dd44f0cf027b27d4019e81ed4b5c31db347c4a3a4d85048d7093cf16753d7b0d15e078f5c7a5205dc2f87e330a1f716738dce1c6180e9d02869b5546f1c4d2748f8c90d9693cba4e0079297d22fd61402dea32ff0eb69ebd65a5d0b687d87e3a8b2c42b648aa723c7c7daf37abcc4bb85caea2ee8f55bec20e913b3324ab8f5c3304f820d42ad1b9f2ffc1a3af9927136b4419e1e579ab4c2ae3c776d293d397d575df181e6cae0a4ada5d67ecea171cca3288d57c7bbdaee3befe745fb7d634f70386d873b90c4d6c6596bb65af68f9e5121e67ebf0d89d3c909ceedfb32ce9575a7758ff080724e1ab5d5f43074ecb53a479af21ed03d7b6899c36631c0166f9d47e5e1d4528a5d3d3f744029c4b1c190cbfbad06f5f83f7ad0429fa9a2719c56ffe3783460e166de2d8>', '<b 0xc3000000010828cc76e6712c410c000044d0a2465e075ad0f01564ee338a44a2023493b8e15237b38843001050a4f4bf2a2cfb40695fe5ff42a70c0990053428d982902a32ca57e8b98909370223db26cd729039d5717f730c935603e2a1f7e452ebbeb6236f02198a9e5293322ab2895f935827f58ffe0a2ca638599a6218bc847fd5e1c801cd487cfb10d308156e7ce4c91cf522097cab6d079acc9e7ef18f231ee6ac13f7bd3d03db41dc27953d32d1aaa35932add5b567769a35fc7e3ec9175211afba7b945492b7f2e8b141c450585f09eb9c38a760b4f6fd36257830c47bd028f35ac1b00cbf6c59030d67363e28a8a2e70190a23fbcc10941537db75c01b82f8be3d0ba7fd0f9ab534a36dcefff49ecb9a63d3be1f14ab0376d4f9686fa6478816c183f07179778593821b89a035cfa92ec13c5cd2991180278ed125264fb3a512d0480a73d69218aad3477f2c741981da881a0146002435fd1f15a0c38715396ea6989b4275137f52ea5fd771e9dc0f552755062e21c996b36e97850bf70fce2f98d26837585d28219a7a30d0cc910ff04a920bb69c714c0142193f267d917aab11058f197a6a66cd752aff348d334186bf91a69843f3452b953fc732449c58dc8aa4bcac89aa661f90891da751978f17a62f7b8f847f440f7210dd05574dbd78e4feb4ac478f275f4044c7170f74221abdda3b8fc0c129ae35d3fabac349d81ba9042b4782819ea81665d06691195bd9e7abf6f0e065a092811e9ea5b113207ef06de5768ebe62e8ee94ae4beb5bc4f9996c2c70c7d620da7fedbb2b9709a45584b5ae0fdc1f746b4afc7f100bc2888611b46e2ac243e136bb100e9db3022f472aac8801e77d15960a031e3f8fea5cf8f8703bdb1357800adc802b702c547f4e5f75eb4b6e5eb9327876c77dcfb3baf696a276d6779ab337fc1aa0b03222a6acda0b04a4220f77fd04ce14f083445e55ff88260834582531d759683e1b2d8abc885664cfba1f49f9bdcf26fca845fde45a0ca08a90794cf70338f1031c5098664f10e830d5b3437c7c367c8a0faa16d81471111b616b2f710edfcab27f5f1a7a33daa20ea6e8e5dcd624c6d8f2c048543d025eb970a8eb8aa09c8b4d0be42d6426961a624e37366c21b7e6ca24d09aa3e46a03e3dfc09eafd9d213752b2ca903d11626eb672d5dc116507c6cd2e43f59a6c964937cd9d8f1e54b05f4486c780c46a5718a3baedf93a5cd9b374097bc6db16aa272b6e0a935b35c3f721e206804c45ec5b4a4dadfbb28a9bd08d4a1590f05ef21185c00f8ca250fb31fe549845d39b6ced2e64c00ad5dac27d550313ac778a981a8b5ce2290bb2d90a50717f004d66ff122a395bba9fc67d38bfbfd549389622431afd241ce7a0d755e7016ee37ada01b09e51f4f39aa3785cc162726d23ad98e1f6d1f4346bd221b7401334d89c07e1ede4aec076933ae6d39bddef5d76e7d1fe8053fb1aca8c35d61b60648c5a1487365b0ca365c1689d8fbfc2267f24cbf90474c92be350f5e664b01ef1c8538b25296d643ceed009cb5da29c0a451be67ef626237066946379385f9c79276117598cd462ac0221fe93a46034df330144f9ccfc5d8560e8df7b19849cf7d65b79f21d3f05f61496ac7da3ffaf87b14171cb7e959c3e98fdef862f7cbf9eaebae74b1c9b09d102bff1fc82e0cf32c96b4dcc5cba0d7d3555bc8a5c722965af0c0c2f0dbb24ca1cbde23cfcd39ce86ecffe102f48cf657833fe578e5439>', '<b 0xcd00000001019500004050389e9d50b54adf3d7b201298e06ddc84decc476cbaae7f5caa99df689a3d8bc8cdf4f1d328ca82147d4afbcd607f76c4ec72dcfa3831afb10b2469557a604f9bfc70d78c149fc6fbc2217d7b1ff6166e>', '<b 0xc60000000101bb000040558c2ae6e3c71616f422e6ad8eab2d0eb44a382d875408669cd7ac2f83ceb694ae427ecd53f305bb1549d724f677b91470ba751baaa08c6fbc84a15788ef55dfa8b1fe28a22219dc653dfe48687d599df52b054a074b>', '<b 0xc70000000101eb00004055988000e4d3995e7951b41d23dbb150e211e82942d2acbfc4b0596a070887a0e75c6e9e125b838da7e42a511b381741c47bb784a497a0a47327046ce4e2007d611c6c119779f0f2e340d5d6c4525a87754d7c997c09>', '<b 0xc70000000101650000404f6b94de035f849525165e329deb8bee1c814b614afc258f10b2bcb94b47d63ed696b908e2f751b48fedbe6fe1f476ee242a0603c9025d69074985363ea70f637a2662e66e35c89094595b79bd152d85>'];
  const RandomHex = Hex[Math.floor(Math.random() * Hex.length)];
  
  document.getElementById('i1').value = RandomHex;
  document.getElementById('i2').value = '';
  document.getElementById('i3').value = '';
  document.getElementById('i4').value = '';
  document.getElementById('i5').value = '';
  
  convert();
};

document.querySelectorAll('.randombtn')[2].onclick = function() {
  const domains = [
    '175bru.ru',
    '1tv.ru',
    '2an.ru',
    '2gis.ru',
    '360tv.ru',
    '4ege.ru',
    '5-tv.ru',
    '9111.ru',
    'akbars.ru',
    'allhockey.ru',
    'amalgama-lab.com',
    'apteka.ru',
    'aptekamos.ru',
    'arbitr.ru',
    'arhangelskoe.su',
    'artchive.ru',
    'arzamas.academy',
    'asna.ru',
    'ati.su',
    'autonews.ru',
    'av.ru',
    'avtovzglyad.ru',
    'baby.ru',
    'babyblog.ru',
    'bashinform.ru',
    'bbr.ru',
    'beeline.ru',
    'belkacar.ru',
    'blizko.ru',
    'bolshoi.ru',
    'borodino.ru',
    'bspb.ru',
    'c2dns.net',
    'c2dns.ru',
    'cdek.ru',
    'championat.com',
    'chitalnya.ru',
    'consmed.ru',
    'consultant.ru',
    'cosmo.ru',
    'ctc.ru',
    'culture.ru',
    'dalenabank.ru',
    'datalesson.ru',
    'deepseek.com',
    'delimobil.ru',
    'delivery-club.ru',
    'dellin.ru',
    'dixy.ru',
    'dnevnik.ru',
    'dns-shop.ru',
    'docdoc.ru',
    'doctis.ru',
    'domashniy.ru',
    'doverie-tv.ru',
    'dzen.ru',
    'e-katalog.ru',
    'eapteka.ru',
    'edadeal.ru',
    'edimdoma.ru',
    'edu.ru',
    'elibrary.ru',
    'f1news.ru',
    'fantlab.ru',
    'fedsfm.ru',
    'fighttime.ru',
    'filmpro.ru',
    'fipi.ru',
    'fips.ru',
    'fitseven.ru',
    'forumhouse.ru',
    'foxford.ru',
    'friday.ru',
    'fsb.ru',
    'fss.ru',
    'fssprus.ru',
    'garant.ru',
    'gaso.ru',
    'gismeteo.ru',
    'gks.ru',
    'gosfilmofond.ru',
    'goskatalog.ru',
    'habr.ru',
    'health-diet.ru',
    'hermitagemuseum.org',
    'hi-news.ru',
    'histrf.ru',
    'ilibrary.ru',
    'in-space.ru',
    'indicator.ru',
    'infourok.ru',
    'interneturok.ru',
    'invb.ru',
    'irecommend.ru',
    'is74.ru',
    'ivi.ru',
    'joomag.com',
    'jv.ru',
    'karcher.ru',
    'kartaslov.ru',
    'karusel-tv.ru',
    'kg-portal.ru',
    'khl.ru',
    'kinopoisk.ru',
    'knigogid.ru',
    'kodeks.ru',
    'kolesa.ru',
    'kommersant.ru',
    'kopilkaurokov.ru',
    'kp.ru',
    'kreml.ru',
    'kuban24.tv',
    'lektorium.tv',
    'letidor.ru',
    'lib.ru',
    'linkgroup.ru',
    'litres.ru',
    'livejournal.com',
    'livelib.ru',
    'livesport.ru',
    'lizaalert.org',
    'm24.ru',
    'maam.ru',
    'magnit.ru',
    'mail.ru',
    'mariinsky.ru',
    'matchtv.ru',
    'med-otzyv.ru',
    'medi.ru',
    'mediametrics.ru',
    'medicalinsider.ru',
    'medihost.ru',
    'medikforum.ru',
    'medlinks.ru',
    'medportal.ru',
    'medside.ru',
    'megafon.ru',
    'mel.fm',
    'mirtesen.ru',
    'mirtv.ru',
    'mkala.ru',
    'mob-edu.ru',
    'moluch.ru',
    'moskb.ru',
    'mts.ru',
    'multiurok.ru',
    'mybook.ru',
    'myskills.ru',
    'naked-science.ru',
    'nat-geo.ru',
    'nauchniestati.ru',
    'netology.ru',
    'nevasport.ru',
    'nic.ru',
    'nkj.ru',
    'nplus1.ru',
    'nskbl.ru',
    'nsportal.ru',
    'ntv.ru',
    'nukadeti.ru',
    'obrazovaka.ru',
    'ohotniki.ru',
    'olimpiada.ru',
    'onlinedoctor.ru',
    'onlinetrade.ru',
    'oprf.ru',
    'otr-online.ru',
    'otzovik.com',
    'oum.ru',
    'ped-kopilka.ru',
    'pedsovet.org',
    'pervbank.ru',
    'pikabu.ru',
    'pochtabank.ru',
    'popmech.ru',
    'postupi.online',
    'povar.ru',
    'professionali.ru',
    'profi.ru',
    'proza.ru',
    'psbank.ru',
    'pypi.org',
    'radiomayak.ru',
    'radiorus.ru',
    'radiovesti.ru',
    'rbc.ru',
    'ren.tv',
    'rgo.ru',
    'ria.ru',
    'rlsnet.ru',
    'rosbank.ru',
    'rosreestr.ru',
    'rosuchebnik.ru',
    'rsl.ru',
    'rt.ru',
    'rulit.me',
    'rusarchives.ru',
    'rusmuseum.ru',
    'rusneb.ru',
    'russkiiyazyk.ru',
    'rustih.ru',
    'rutube.ru',
    'samlib.ru',
    'sdamgia.ru',
    'selfpub.ru',
    'shm.ru',
    'sirius.online',
    'skyeng.ru',
    'sledcom.ru',
    'sm-news.ru',
    'smi2.ru',
    'smotrim.ru',
    'soccer.ru',
    'sovcombank.ru',
    'sovsport.ru',
    'spastv.ru',
    'sport24.ru',
    'sportmail.ru',
    'sportrbc.ru',
    'sportsdaily.ru',
    'stihi.ru',
    'sudact.ru',
    'sudrf.ru',
    'tamtam.chat',
    'tatar-inform.ru',
    'tele2.ru',
    'teleprogramma.pro',
    'tiu.ru',
    'tnt-online.ru',
    'tretyakovgallery.ru',
    'trudvsem.ru',
    'tv3.ru',
    'tvc.ru',
    'tvkultura.ru',
    'tvzvezda.ru',
    'ucheba.ru',
    'uchi.ru',
    'uchportal.ru',
    'unicreditbank.ru',
    'ura.news',
    'uteka.ru',
    'utkonos.ru',
    'vbr.ru',
    'verumreactor.ru',
    'vesti.ru',
    'vgtrk.ru',
    'videouroki.net',
    'vitrina.tv',
    'vk.ru',
    'vkvideo.ru',
    'vm.ru',
    'vokrugsveta.ru',
    'vrachirf.ru',
    'vsrf.ru',
    'webinar.ru',
    'wi-fi.ru',
    'wikireading.ru',
    'woman.ru',
    'worldskills.ru',
    'xn--80aesfpebagmfblc0a.xn--p1ai',
    'xn--80afcdbalict6afooklqi5o.xn--p1ai',
    'xn--j1ahfl.xn--p1ai',
    'xn----7sbb5adknde1cb0dyd.xn--p1ai',
    'xn--2020-f4dsa7cb5cl7h.xn--p1ai',
    'yaklass.ru',
    'youdo.com',
    'youla.ru',
    'zakon.ru',
    'zdorovie.ru',
    'zdorovieinfo.ru',
    'znaika.ru',
    'zoon.ru'];
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];
  document.getElementById('id').value = randomDomain;
  
  convert();
};

const COUNTRY_FLAGS = {
      'JP': '🇯🇵 JP',
      'US': '🇺🇸 US',
      'NL': '🇳🇱 NL',
      'DE': '🇩🇪 DE',
      'FR': '🇫🇷 FR',
      'GB': '🇬🇧 GB',
      'CA': '🇨🇦 CA',
      'AU': '🇦🇺 AU',
      'RO': '🇷🇴 RO',
	  'MX': '🇲🇽 MX',      
	  'NO': '🇳🇴 NO',      
	  'SG': '🇸🇬 SG',      
      'CH': '🇨🇭 CH',
      'PL': '🇵🇱 PL'
    };
let proxyList = [];
function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

function generateAmneziaDefaults() {
  const selectedOption = document.querySelector('input[name="junk"]:checked').id;
  let jc, jmin, jmax;
  switch(selectedOption) {
    case 'junk1':
      jc = 3;
      jmin = 1;
      jmax = 3;
      break;
    case 'junk2':
      jc = 30;
      jmin = 10;
      jmax = 30;
      break;
    case 'junk3':
      jc = parseInt(document.getElementById('jc1').value) || 128;
      jmin = parseInt(document.getElementById('jmin1').value) || 1279;
      jmax = parseInt(document.getElementById('jmax1').value) || 1280;
      break;
    default:
      jc = 128;
      jmin = 1279;
      jmax = 1280;
  }

  if (jmax <= jmin) {
    jmax = jmin + 1;
  }

  return {
    jc: jc,
    jmin: jmin,
    jmax: jmax,
    s1: 0,
    s2: 0,
    h1: 1,
    h2: 2,
    h3: 3,
    h4: 4
  };
}

function parseWGConfig(text) {
  const config = { 
    interface: { amneziaOptions: {} },
    peers: []
  };
  let currentSection = null;
  let peerIndex = -1;

  const lines = text.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    if (!line) continue;

    // Обработка секций
    if (line.startsWith('[') && line.endsWith(']')) {
      currentSection = line.slice(1, -1).toLowerCase();
      if (currentSection === 'peer') {
        peerIndex++;
        config.peers.push({ amneziaOptions: {} });
        
        // Проверяем следующую строку на наличие имени (комментария)
        if (i + 1 < lines.length) {
          const nextLine = lines[i + 1].trim();
          const nameMatch = nextLine.match(/^#\s*(.+)/);
          if (nameMatch) {
            config.peers[peerIndex].name = nameMatch[1].trim();
            i++; // Пропускаем обработанную строку с именем
          }
        }
      }
      continue;
    }

    // Парсинг ключ=значение
    const equalsIndex = line.indexOf('=');
    if (equalsIndex === -1) continue;

    const key = line.substring(0, equalsIndex).trim();
    const value = line.substring(equalsIndex + 1).trim();
    const cleanKey = key.toLowerCase();

    if (currentSection === 'interface') {
      if (['jc', 'jmin', 'jmax', 's1', 's2', 'h1', 'h2', 'h3', 'h4'].includes(cleanKey)) {
        config.interface.amneziaOptions[cleanKey] = value;
      } else {
        config.interface[cleanKey] = value;
      }
    } else if (currentSection === 'peer' && peerIndex >= 0) {
      const peer = config.peers[peerIndex];
      if (['jc', 'jmin', 'jmax', 's1', 's2', 'h1', 'h2', 'h3', 'h4'].includes(cleanKey)) {
        peer.amneziaOptions[cleanKey] = value;
      } else if (cleanKey === 'presharedkey') {
        peer.presharedKey = value;
      } else {
        peer[cleanKey] = value;
      }
    }
  }

  // Если имя не было найдено через комментарий после [Peer], пробуем извлечь из комментариев
  if (config.peers.length > 0 && !config.peers[0].name) {
    // Ищем любое вхождение # NL-FREE#43 в тексте
    const nameMatch = text.match(/#\s*(NL-FREE#?\d+)/);
    if (nameMatch) {
      config.peers[0].name = nameMatch[1];
    }
  }

  return config;
}

function convertToClashProxy(wgConfig, fileName) {
  const interfaceData = wgConfig.interface;
  const peerData = wgConfig.peers[0];
  const dnsList = interfaceData.dns ? interfaceData.dns.split(',').map(d => d.trim()) : [];
  const defaultAmnezia = generateAmneziaDefaults();
  let proxyName = peerData.name || fileName.replace('.conf', '');
  let originalName = proxyName;
  const selectedPort = document.querySelector('input[name="wgPort"]:checked')?.value || '51820';
  const mtuInput = document.getElementById('mtu');
  const mtuVal = mtuInput?.value.trim() || mtuInput?.placeholder || '1420';
  
  if (!proxyName) {
    proxyName = `Random_${Math.random().toString(36).substr(2, 5)}`;
  } else {
    proxyName = proxyName.replace(/FREE#?/g, '');
    proxyName = proxyName.replace(/-$/, '');
    
    const flagMatch = proxyName.match(/^([A-Z]{2})[-_]/);
    if (flagMatch && COUNTRY_FLAGS[flagMatch[1]]) {
      proxyName = proxyName.replace(flagMatch[1], COUNTRY_FLAGS[flagMatch[1]]);
    }
  }

  const addresses = interfaceData.address.split(',').map(addr => addr.trim());
  let ipv4 = '';
  let ipv6 = '';
  
  addresses.forEach(addr => {
    // Проверяем, содержит ли адрес двоеточие (признак IPv6)
    if (addr.includes(':')) {
      ipv6 = addr;
    } else {
      ipv4 = addr;
    }
  });

  const amneziaOptions = {};
  for (const key of ['jc', 'jmin', 'jmax', 's1', 's2', 'h1', 'h2', 'h3', 'h4']) {
    const interfaceValue = interfaceData.amneziaOptions[key];
    const peerValue = peerData.amneziaOptions[key];
    amneziaOptions[key] = interfaceValue || peerValue || defaultAmnezia[key];
  }

  return {
    name: proxyName,
    originalName: originalName,
    type: "wireguard",
    server: peerData.endpoint.split(':')[0],
    port: selectedPort,
    ip: interfaceData.address,
	ipv4: ipv4,
	ipv6: ipv6,
    private_key: interfaceData.privatekey,
    public_key: peerData.publickey,
    preshared_key: peerData.presharedKey, 
    allowed_ips: peerData.allowedips.split(',').map(ip => `'${ip.trim()}'`),
    udp: true,
    mtu: mtuVal,
    remote_dns_resolve: true,
    dns: dnsList,
    'amnezia-wg-option': amneziaOptions,
    isDefaultAmnezia: !(interfaceData.amneziaOptions.jc || peerData.amneziaOptions.jc)
  };
}

function generateAmneziaOptionsYAML(options) {
      const nojunkEnabled = document.getElementById('nojunk').checked;
	  const awg15Enabled = document.getElementById('awg15').checked;  
	  let yaml = `  amnezia-wg-option:
    version: 3\n`;
	  if (nojunkEnabled) {
      for (const [key, value] of Object.entries(options)) {
        yaml += `    ${key}: ${value}\n`;
      }}
	  if (awg15Enabled) {
		const i1 = document.getElementById('i1').value.trim() || '<b 0xce000000010897a297ecc34cd6dd000044d0ec2e2e1ea2991f467ace4222129b5a098823784694b4897b9986ae0b7280135fa85e196d9ad980b150122129ce2a9379531b0fd3e871ca5fdb883c369832f730e272d7b8b74f393f9f0fa43f11e510ecb2219a52984410c204cf875585340c62238e14ad04dff382f2c200e0ee22fe743b9c6b8b043121c5710ec289f471c91ee414fca8b8be8419ae8ce7ffc53837f6ade262891895f3f4cecd31bc93ac5599e18e4f01b472362b8056c3172b513051f8322d1062997ef4a383b01706598d08d48c221d30e74c7ce000cdad36b706b1bf9b0607c32ec4b3203a4ee21ab64df336212b9758280803fcab14933b0e7ee1e04a7becce3e2633f4852585c567894a5f9efe9706a151b615856647e8b7dba69ab357b3982f554549bef9256111b2d67afde0b496f16962d4957ff654232aa9e845b61463908309cfd9de0a6abf5f425f577d7e5f6440652aa8da5f73588e82e9470f3b21b27b28c649506ae1a7f5f15b876f56abc4615f49911549b9bb39dd804fde182bd2dcec0c33bad9b138ca07d4a4a1650a2c2686acea05727e2a78962a840ae428f55627516e73c83dd8893b02358e81b524b4d99fda6df52b3a8d7a5291326e7ac9d773c5b43b8444554ef5aea104a738ed650aa979674bbed38da58ac29d87c29d387d80b526065baeb073ce65f075ccb56e47533aef357dceaa8293a523c5f6f790be90e4731123d3c6152a70576e90b4ab5bc5ead01576c68ab633ff7d36dcde2a0b2c68897e1acfc4d6483aaaeb635dd63c96b2b6a7a2bfe042f6aed82e5363aa850aace12ee3b1a93f30d8ab9537df483152a5527faca21efc9981b304f11fc95336f5b9637b174c5a0659e2b22e159a9fed4b8e93047371175b1d6d9cc8ab745f3b2281537d1c75fb9451871864efa5d184c38c185fd203de206751b92620f7c369e031d2041e152040920ac2c5ab5340bfc9d0561176abf10a147287ea90758575ac6a9f5ac9f390d0d5b23ee12af583383d994e22c0cf42383834bcd3ada1b3825a0664d8f3fb678261d57601ddf94a8a68a7c273a18c08aa99c7ad8c6c42eab67718843597ec9930457359dfdfbce024afc2dcf9348579a57d8d3490b2fa99f278f1c37d87dad9b221acd575192ffae1784f8e60ec7cee4068b6b988f0433d96d6a1b1865f4e155e9fe020279f434f3bf1bd117b717b92f6cd1cc9bea7d45978bcc3f24bda631a36910110a6ec06da35f8966c9279d130347594f13e9e07514fa370754d1424c0a1545c5070ef9fb2acd14233e8a50bfc5978b5bdf8bc1714731f798d21e2004117c61f2989dd44f0cf027b27d4019e81ed4b5c31db347c4a3a4d85048d7093cf16753d7b0d15e078f5c7a5205dc2f87e330a1f716738dce1c6180e9d02869b5546f1c4d2748f8c90d9693cba4e0079297d22fd61402dea32ff0eb69ebd65a5d0b687d87e3a8b2c42b648aa723c7c7daf37abcc4bb85caea2ee8f55bec20e913b3324ab8f5c3304f820d42ad1b9f2ffc1a3af9927136b4419e1e579ab4c2ae3c776d293d397d575df181e6cae0a4ada5d67ecea171cca3288d57c7bbdaee3befe745fb7d634f70386d873b90c4d6c6596bb65af68f9e5121e67ebf0d89d3c909ceedfb32ce9575a7758ff080724e1ab5d5f43074ecb53a479af21ed03d7b6899c36631c0166f9d47e5e1d4528a5d3d3f744029c4b1c190cbfbad06f5f83f7ad0429fa9a2719c56ffe3783460e166de2d8>';
      const i2 = document.getElementById('i2').value.trim() || i1;
      const i3 = document.getElementById('i3').value.trim();
      const i4 = document.getElementById('i4').value.trim();
      const i5 = document.getElementById('i5').value.trim();  
		  
		 yaml += `    i1: ${i1}\n`;
      if (i2) yaml += `    i2: ${i2}\n`;
      if (i3) yaml += `    i3: ${i3}\n`;
      if (i4) yaml += `    i4: ${i4}\n`;
      if (i5) yaml += `    i5: ${i5}\n`;
	  }
	  
	      // --- AWG 3.0 ---
    const isAwg3 = document.getElementById('awg3s')?.checked;
    const getValue = (id) => {
        const el = document.getElementById(id);
        return el?.value.trim() || el?.placeholder || '';
    };

    const cpa = isAwg3 ? getValue('cpaInput') : '';
    const rkat = isAwg3 ? getValue('rkatInput') : '';
    const rt = isAwg3 ? getValue('rtInput') : '';
    const rat = isAwg3 ? getValue('ratInput') : '';
    const kt = isAwg3 ? getValue('ktInput') : '';
    const mha = isAwg3 ? getValue('mhaInput') : '';

    if (isAwg3) {
        if (cpa) yaml += `    content-padding-addition: ${cpa}\n`;
        if (rkat) yaml += `    rekey-after-time: ${rkat}\n`;
        if (rt) yaml += `    rekey-timeout: ${rt}\n`;
        if (rat) yaml += `    reject-after-time: ${rat}\n`;
        if (kt) yaml += `    keepalive-timeout: ${kt}\n`;
        if (mha) yaml += `    max-handshake-attempts: ${mha}\n`;
    }

	        // --- AWG 3.1 ---
const isAwg31 = document.getElementById('awg31')?.checked;
if (isAwg31) {
	yaml += `    disable-cookies: true\n`; 
}

      return yaml;
    }

function generateProxyGroups(proxies) {
  const groups = [];
  const protonProxies = [];
  const otherProxies = [];

  proxies.forEach(proxy => {
    const isProton = /(^|[_-])([A-Z]{2})([-_]FREE)?([#_-]|$)/i.test(proxy.originalName || proxy.name);
    
    if (isProton) {
      protonProxies.push(proxy.name);
    } else {
      otherProxies.push(proxy.name);
    }
  });

  if (protonProxies.length > 0) {
    groups.push(`
- name: Proton
  type: select
  icon: https://res.cloudinary.com/dbulfrlrz/image/upload/v1703162849/static/logos/icons/vpn_f9embt.svg
  proxies:
    - ${protonProxies.join('\n    - ')}
  url: 'http://speed.cloudflare.com/'
  unified-delay: true
  interval: 300`);
  }

  if (otherProxies.length > 0) {
    groups.push(`
- name: Other
  type: select
  icon: https://raw.githubusercontent.com/zaeboba/page/refs/heads/main/archive/amnezia.svg
  proxies:
    - ${otherProxies.join('\n    - ')}
  url: 'http://speed.cloudflare.com/'
  unified-delay: true
  interval: 300`);
  }

  return groups.join('\n');
}

function convert() {
  const files = document.getElementById('wgFiles').files;
  if (!files.length) return alert('Выберите файлы .conf');

  const selectedOption = document.querySelector('input[name="option"]:checked').id;
  enableToggles();
  
  proxyList = [];
  document.getElementById('fileList').innerHTML = `Обрабатываются файлы: ${Array.from(files).map(f => f.name).join(', ')}`;
  let filesProcessed = 0;
  
  Array.from(files).forEach((file) => {
    const reader = new FileReader();
    reader.onload = function() {
      try {
        const wgConfig = parseWGConfig(reader.result);
        const proxy = convertToClashProxy(wgConfig, file.name);
        proxyList.push(proxy);
        filesProcessed++;
        if (filesProcessed === files.length) {
          switch(selectedOption) {
            case 'clash':
              generateClashYaml();
              break;
            case 'awg':
              generateAWGYaml();
              break;
            case 'karing':
              generateAWGYaml();
              break;
            default:
              generateClashYaml();
          }
        }
      } catch (e) {
        alert(`Ошибка в файле ${file.name}: ${e.message}`);
        filesProcessed++; 
        if (filesProcessed === files.length) {
          generateClashYaml();
        }
      }
    };
    reader.onerror = function() {
      alert(`Ошибка чтения файла ${file.name}`);
      filesProcessed++;
      if (filesProcessed === files.length) {
        generateClashYaml();
      }
    };
    reader.readAsText(file);
  });
}

function generateClashYaml() {
  if (proxyList.length === 0) {
    alert('Не удалось обработать ни один файл');
    return;
  }


const iskeepalive = document.getElementById('kepalive')?.checked;
const keepaliveInput = document.getElementById('keepaliveInput');
const keepaliveVal = keepaliveInput?.value.trim() || keepaliveInput?.placeholder || '25';

  const yamlProxies = proxyList.map(proxy => {
    let yaml = `- name: ${proxy.name}\n`;
    yaml += `  type: ${proxy.type}\n`;
    yaml += `  server: ${proxy.server}\n`;
    yaml += `  port: ${proxy.port}\n`;
    yaml += `  ip: ${proxy.ipv4}\n`;
	if (proxy.ipv6) {
    yaml += `  ipv6: ${proxy.ipv6}\n`;
    }
    yaml += `  private-key: ${proxy.private_key}\n`;
    yaml += `  public-key: ${proxy.public_key}\n`;
    yaml += `  allowed-ips: [${proxy.allowed_ips.join(', ')}]\n`;
	if (proxy.preshared_key) {
    yaml += `  pre-shared-key: ${proxy.preshared_key}\n`}
	if (iskeepalive) {
	yaml += `  persistent-keepalive: ${keepaliveVal}\n`}
    yaml += `  udp: ${proxy.udp}\n`;
    yaml += `  mtu: ${proxy.mtu}\n`;
    yaml += `  remote-dns-resolve: ${proxy.remote_dns_resolve}\n`;
    yaml += `  dns: [${proxy.dns.join(', ')}]\n`;
    yaml += generateAmneziaOptionsYAML(proxy['amnezia-wg-option'], proxy.isDefaultAmnezia);
    return yaml;
  }).join('\n');

  const proxyGroups = generateProxyGroups(proxyList);
  const fullYaml = `proxies:\n${yamlProxies}\nproxy-groups:${proxyGroups}`;
  
  document.getElementById('yamlOutput').value = fullYaml;
  document.getElementById('downloadBtn').classList.remove('hidden');
  document.getElementById('copyBtn').classList.remove('hidden');
  document.getElementById('btn-cont').classList.remove('hidden');
  document.getElementById('downloadBtn').onclick = () => downloadYAML(fullYaml, 'clash-config.yaml');
  document.getElementById('copyBtn').onclick = () => {
    navigator.clipboard.writeText(fullYaml)
      .then(() => alert('Конфиг скопирован в буфер обмена!'))
      .catch(err => alert('Не удалось скопировать: ', err));
  };
}

function generateAWGYaml() {
  if (proxyList.length === 0) {
    alert('Не удалось обработать ни один файл');
    return;
  }

  const awgConfigs = proxyList.map(proxy => generateSingleAWGConfig(proxy));
  const finalOutput = awgConfigs.join('\n\n');

  document.getElementById('yamlOutput').value = finalOutput;
  document.getElementById('downloadBtn').classList.remove('hidden');
  document.getElementById('downloadBtn').onclick = downloadAWGConfigs;
  document.getElementById('copyBtn').classList.remove('hidden');
  document.getElementById('btn-cont').classList.remove('hidden');
  document.getElementById('copyBtn').onclick = () => {
    navigator.clipboard.writeText(fullYaml)
      .then(() => alert('Конфиг скопирован в буфер обмена!'))
      .catch(err => alert('Не удалось скопировать: ', err));
  };
}

function downloadYAML(yamlContent, fileName) {
  const blob = new Blob([yamlContent], { type: 'text/yaml; charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName || 'config.yaml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function downloadAWGConfigs() {
  if (proxyList.length === 0) return;
  const downloadFrame = document.createElement('iframe');
  downloadFrame.style.display = 'none';
  document.body.appendChild(downloadFrame);
  proxyList.forEach((proxy, index) => {
    setTimeout(() => {
      const awgConfig = generateSingleAWGConfig(proxy);
      const fileName = getAWGFileName(proxy, index);
      
      const blob = new Blob([awgConfig], { type: 'application/x-config; charset=utf-8' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      downloadFrame.contentDocument.body.appendChild(link);
      link.click();
      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 10000);
    }, 1000 * index);
  });
  setTimeout(() => {
    document.body.removeChild(downloadFrame);
  }, 1000 * proxyList.length + 1000);
}

function generateSingleAWGConfig(proxy) {
  const amneziaOptions = proxy['amnezia-wg-option'];
  const awg15Enabled = document.getElementById('awg15').checked;
  const awg2wEnabled = document.getElementById('awg2w').checked;
  const nojunkEnabled = document.getElementById('nojunk').checked;
  const nolanEnabled = document.getElementById('nolan').checked;
  const selectedPort = document.querySelector('input[name="wgPort"]:checked')?.value || '51820';
  const mtuInput = document.getElementById('mtu');
  const mtuVal = mtuInput?.value.trim() || mtuInput?.placeholder || '1420';
  const selectedOption = document.querySelector('input[name="option"]:checked').id;
  
  let awgConfig = '';
  
  if (proxy.originalName) {
    awgConfig += `# ${proxy.originalName}\n`;
  } else {
    awgConfig += `# Безымянный конфиг\n`;
  }
  
  awgConfig += `[Interface]\n`;
  awgConfig += `PrivateKey = ${proxy.private_key}\n`;
  awgConfig += `Address = ${proxy.ip}\n`;
  
  if (proxy.dns && proxy.dns.length > 0) {
    awgConfig += `DNS = ${proxy.dns.join(', ')}\n`;
  }
  
  awgConfig += `MTU = ${mtuVal}\n`;
  if (nojunkEnabled) {
  awgConfig += `S1 = 0\n`;
  awgConfig += `S2 = 0\n`;
  awgConfig += `Jc = ${amneziaOptions.jc}\n`;
  awgConfig += `Jmin = ${amneziaOptions.jmin}\n`;
  awgConfig += `Jmax = ${amneziaOptions.jmax}\n`;
  awgConfig += `H1 = ${amneziaOptions.h1}\n`;
  awgConfig += `H2 = ${amneziaOptions.h2}\n`;
  awgConfig += `H3 = ${amneziaOptions.h3}\n`;
  awgConfig += `H4 = ${amneziaOptions.h4}\n`;
  }
if (awg15Enabled && selectedOption === 'awg') {
	const i1 = document.getElementById('i1').value.trim() || '<b 0xce000000010897a297ecc34cd6dd000044d0ec2e2e1ea2991f467ace4222129b5a098823784694b4897b9986ae0b7280135fa85e196d9ad980b150122129ce2a9379531b0fd3e871ca5fdb883c369832f730e272d7b8b74f393f9f0fa43f11e510ecb2219a52984410c204cf875585340c62238e14ad04dff382f2c200e0ee22fe743b9c6b8b043121c5710ec289f471c91ee414fca8b8be8419ae8ce7ffc53837f6ade262891895f3f4cecd31bc93ac5599e18e4f01b472362b8056c3172b513051f8322d1062997ef4a383b01706598d08d48c221d30e74c7ce000cdad36b706b1bf9b0607c32ec4b3203a4ee21ab64df336212b9758280803fcab14933b0e7ee1e04a7becce3e2633f4852585c567894a5f9efe9706a151b615856647e8b7dba69ab357b3982f554549bef9256111b2d67afde0b496f16962d4957ff654232aa9e845b61463908309cfd9de0a6abf5f425f577d7e5f6440652aa8da5f73588e82e9470f3b21b27b28c649506ae1a7f5f15b876f56abc4615f49911549b9bb39dd804fde182bd2dcec0c33bad9b138ca07d4a4a1650a2c2686acea05727e2a78962a840ae428f55627516e73c83dd8893b02358e81b524b4d99fda6df52b3a8d7a5291326e7ac9d773c5b43b8444554ef5aea104a738ed650aa979674bbed38da58ac29d87c29d387d80b526065baeb073ce65f075ccb56e47533aef357dceaa8293a523c5f6f790be90e4731123d3c6152a70576e90b4ab5bc5ead01576c68ab633ff7d36dcde2a0b2c68897e1acfc4d6483aaaeb635dd63c96b2b6a7a2bfe042f6aed82e5363aa850aace12ee3b1a93f30d8ab9537df483152a5527faca21efc9981b304f11fc95336f5b9637b174c5a0659e2b22e159a9fed4b8e93047371175b1d6d9cc8ab745f3b2281537d1c75fb9451871864efa5d184c38c185fd203de206751b92620f7c369e031d2041e152040920ac2c5ab5340bfc9d0561176abf10a147287ea90758575ac6a9f5ac9f390d0d5b23ee12af583383d994e22c0cf42383834bcd3ada1b3825a0664d8f3fb678261d57601ddf94a8a68a7c273a18c08aa99c7ad8c6c42eab67718843597ec9930457359dfdfbce024afc2dcf9348579a57d8d3490b2fa99f278f1c37d87dad9b221acd575192ffae1784f8e60ec7cee4068b6b988f0433d96d6a1b1865f4e155e9fe020279f434f3bf1bd117b717b92f6cd1cc9bea7d45978bcc3f24bda631a36910110a6ec06da35f8966c9279d130347594f13e9e07514fa370754d1424c0a1545c5070ef9fb2acd14233e8a50bfc5978b5bdf8bc1714731f798d21e2004117c61f2989dd44f0cf027b27d4019e81ed4b5c31db347c4a3a4d85048d7093cf16753d7b0d15e078f5c7a5205dc2f87e330a1f716738dce1c6180e9d02869b5546f1c4d2748f8c90d9693cba4e0079297d22fd61402dea32ff0eb69ebd65a5d0b687d87e3a8b2c42b648aa723c7c7daf37abcc4bb85caea2ee8f55bec20e913b3324ab8f5c3304f820d42ad1b9f2ffc1a3af9927136b4419e1e579ab4c2ae3c776d293d397d575df181e6cae0a4ada5d67ecea171cca3288d57c7bbdaee3befe745fb7d634f70386d873b90c4d6c6596bb65af68f9e5121e67ebf0d89d3c909ceedfb32ce9575a7758ff080724e1ab5d5f43074ecb53a479af21ed03d7b6899c36631c0166f9d47e5e1d4528a5d3d3f744029c4b1c190cbfbad06f5f83f7ad0429fa9a2719c56ffe3783460e166de2d8>';
	const i2 = document.getElementById('i2').value.trim() || i1;
	const i3 = document.getElementById('i3').value.trim();
	const i4 = document.getElementById('i4').value.trim();
	const i5 = document.getElementById('i5').value.trim();
      
	awgConfig += `I1 = ${i1}\n`;
	if (i2) awgConfig += `I2 = ${i2}\n`;
	if (i3) awgConfig += `I3 = ${i3}\n`;
	if (i4) awgConfig += `I4 = ${i4}\n`;
	if (i5) awgConfig += `I5 = ${i5}\n`;
}

if (awg2wEnabled && selectedOption === 'karing') {
    const idValue = document.getElementById('id').value.trim() || 'apteka.ru';
    const ipValue = document.getElementById('ip').value || 'quic';
    const ibValue = document.getElementById('ib').value || 'firefox';

    awgConfig += `Id = ${idValue}\n`;
    awgConfig += `Ip = ${ipValue}\n`;
    awgConfig += `Ib = ${ibValue}\n`;
}
    
    // --- AWG 3.0 ---
    const isAwg3 = document.getElementById('awg3s')?.checked;
    const getValue = (id) => {
        const el = document.getElementById(id);
        return el?.value.trim() || el?.placeholder || '';
    };

    const cpa = isAwg3 ? getValue('cpaInput') : '';
    const rkat = isAwg3 ? getValue('rkatInput') : '';
    const rt = isAwg3 ? getValue('rtInput') : '';
    const rat = isAwg3 ? getValue('ratInput') : '';
    const kt = isAwg3 ? getValue('ktInput') : '';
    const mha = isAwg3 ? getValue('mhaInput') : '';

    if (isAwg3) {
        if (cpa) awgConfig += `ContentPaddingAddition = ${cpa}\n`;
        if (rkat) awgConfig += `RekeyAfterTime = ${rkat}\n`;
        if (rt) awgConfig += `RekeyTimeout = ${rt}\n`;
        if (rat) awgConfig += `RejectAfterTime = ${rat}\n`;
        if (kt) awgConfig += `KeepaliveTimeout = ${kt}\n`;
        if (mha) awgConfig += `MaxHandshakeAttempts = ${mha}\n`;
    }
  
      // --- AWG 3.1 ---
const isAwg31 = document.getElementById('awg31')?.checked;
if (isAwg31) {awgConfig += `DisableCookies = on\n`}

  
  awgConfig += `\n[Peer]\n`;
  awgConfig += `PublicKey = ${proxy.public_key}\n`;
  if (proxy.preshared_key) {
  awgConfig += `PresharedKey = ${proxy.preshared_key}\n`;}
   if (nolanEnabled) {
    awgConfig += `AllowedIPs = 1.0.0.0/8, 2.0.0.0/7, 4.0.0.0/6, 8.0.0.0/7, 11.0.0.0/8, 12.0.0.0/6, 16.0.0.0/4, 32.0.0.0/3, 64.0.0.0/3, 96.0.0.0/4, 112.0.0.0/5, 120.0.0.0/6, 124.0.0.0/7, 126.0.0.0/8, 128.0.0.0/3, 160.0.0.0/5, 168.0.0.0/8, 169.0.0.0/9, 169.128.0.0/10, 169.192.0.0/11, 169.224.0.0/12, 169.240.0.0/13, 169.248.0.0/14, 169.252.0.0/15, 169.255.0.0/16, 170.0.0.0/7, 172.0.0.0/12, 172.32.0.0/11, 172.64.0.0/10, 172.128.0.0/9, 173.0.0.0/8, 174.0.0.0/7, 176.0.0.0/4, 192.0.0.0/9, 192.128.0.0/11, 192.160.0.0/13, 192.169.0.0/16, 192.170.0.0/15, 192.172.0.0/14, 192.176.0.0/12, 192.192.0.0/10, 193.0.0.0/8, 194.0.0.0/7, 196.0.0.0/6, 200.0.0.0/5, 208.0.0.0/4, 224.0.0.0/4, ::/1, 8000::/2, c000::/3, e000::/4, f000::/5, f800::/6, fe00::/9, fec0::/10, ff00::/8\n`;
  } else {
    awgConfig += `AllowedIPs = ${proxy.allowed_ips.join(', ').replace(/'/g, '')}\n`;
  }
  awgConfig += `Endpoint = ${proxy.server}:${selectedPort}\n`;
  
  const isKeepalive = document.getElementById('kepalive')?.checked;
    if (isKeepalive) {
        const pkInput = document.getElementById('keepaliveInput');
        const pkVal = pkInput?.value.trim() || pkInput?.placeholder || '25';
        awgConfig += `PersistentKeepalive = ${pkVal}\n`;
	}
  
  return awgConfig;
}

function getAWGFileName(proxy, index) {
  if (proxy.originalName) {
    const cleanedName = proxy.originalName.replace(/-FREE/g, '');
    return `${cleanedName.replace(/[^a-z0-9]/gi, '_')}.conf`;
  }
  return `config_${index + 1}.conf`;
}

function fallbackDownload(proxies) {
  proxies.forEach((proxy, index) => {
    const awgConfig = generateSingleAWGConfig(proxy);
    const fileName = getAWGFileName(proxy, index);
    
    const blob = new Blob([awgConfig], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100 * index);
  });
}

function replaceMobileText() {
    if (!/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) return;

    // Заменяем подписи к полям ввода
    const labels = document.querySelectorAll('.musor2 .jc');
    labels[0].previousSibling.textContent = "fake_packets = ";
    labels[1].previousSibling.textContent = "fake_packets_size = ";
    labels[2].previousSibling.textContent = "fake_packets_delay = ";
}

// Вызываем при загрузке и при изменении размера окна
window.addEventListener('DOMContentLoaded', replaceMobileText);
window.addEventListener('resize', replaceMobileText);

function enableToggles() {
  const selectedOption = document.querySelector('input[name="option"]:checked').id;
  const awg15Toggle = document.getElementById('awg15');
  const awg2wToggle = document.getElementById('awg2w');
  const awg3Toggle = document.getElementById('awg3s');
  const nojunkToggle = document.getElementById('nojunk');
  const nolanToggle = document.getElementById('nolan');
  awg15Toggle.disabled = false;
  awg2wToggle.disabled = false;
  awg3Toggle.disabled = false;
  nojunkToggle.disabled = false;
  nolanToggle.disabled = false;
  toggleAWG15Containers();
}

['nolan', 'awg15', 'nojunk', 'clash', 'awg', 'karing', 'fake1', 'fake2', 'fake3', 'junk1', 'junk2', 'junk3', 'i1', 'i2', 'i3', 'i4', 'i5', 'id', 'ip', 'ib', 'awg2w', 'awg3s','awg31','kepalive','keepaliveInput','mtu' ].forEach(id => {
    document.getElementById(id)?.addEventListener('change', function() {
		
        if (!this.disabled) {
            // Если изменился option, обновляем видимость контейнеров
            if ( id === 'clash' || id === 'awg' || id === 'karing') {
                toggleAWG15Containers();
            }
            convert();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
const awg15Input = document.getElementById('awg15');
const awg2wInput = document.getElementById('awg2w');

if (awg15Input && awg2wInput) {
  awg15Input.addEventListener('change', () => {
    awg2wInput.checked = awg15Input.checked;
  });

  awg2wInput.addEventListener('change', () => {
    awg15Input.checked = awg2wInput.checked;
  });
}

const textareas = document.querySelectorAll('.jc');
    
    textareas.forEach(textarea => {
        textarea.addEventListener('keydown', function(e) {
            // Если нажата клавиша Enter без Shift
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault(); // Отменяем стандартное поведение (перенос строки)
                this.blur();
            }
        });
    });
});

// Открытие modal
document.querySelector('.genbtn')?.addEventListener('click', function() {
    const modal = document.getElementById('Modal');
    if (modal) {
        modal.style.display = 'block';
    }
});

// Закрытие модального окна при клике на крестик
function closeModal() {
    const modal = document.getElementById('Modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Закрытие модального окна при клике вне его области
window.addEventListener('click', function(event) {
    const modal = document.getElementById('Modal');
    if (modal && event.target === modal) {
        modal.style.display = 'none';
    }
});

// Обработчик для кнопки подтверждения в модальном окне
const selectDomainBtn = document.getElementById('selectDomain');
if (selectDomainBtn) {
    selectDomainBtn.addEventListener('click', async function() {
    const domainInput = document.getElementById('domain');
    const domain = domainInput.value.trim();
    
    if (domain) {
        const i1 = await generateI1FromDomain(domain);
		document.getElementById('i1').value = i1;
        closeModal();
        convert();
		
    } else {
        alert('Пожалуйста, введите домен');
    }
});
}

// NolanClash
function toggleNolanContainer() {
  const nolanEnabled = document.getElementById('nolan').checked;
  const selectedOption = document.querySelector('input[name="option"]:checked').id;
  
  // Отключаем свитч nolan при выборе clash
  if (selectedOption === 'clash') {
    const nolanToggle = document.getElementById('nolan');
    if (nolanToggle) {
      nolanToggle.disabled = true;
      nolanToggle.checked = false;
    }
  } else {
    const nolanToggle = document.getElementById('nolan');
    if (nolanToggle) {
      nolanToggle.disabled = false;
    }
  }
}

// Случайно AWG 3.0
function randomizeAwg3() {
    const getRandomRange = (minLow, minHigh, maxLow, maxHigh) => {
        const min = Math.floor(Math.random() * (minHigh - minLow + 1)) + minLow;
        const max = Math.floor(Math.random() * (maxHigh - maxLow + 1)) + maxLow;
        return `${min}-${max}`;
    };

    const cpa = document.getElementById('cpaInput');
    const mha = document.getElementById('mhaInput');
    const kt = document.getElementById('ktInput');
    const rat = document.getElementById('ratInput');
    const rkat = document.getElementById('rkatInput');
    const rt = document.getElementById('rtInput');

    if (cpa) cpa.value = getRandomRange(5, 49, 50, 110);
    if (mha) mha.value = getRandomRange(5, 24, 25, 40);
    if (kt) kt.value = getRandomRange(5, 10, 11, 25);
    if (rat) rat.value = getRandomRange(50, 99, 100, 200);
    if (rkat) rkat.value = getRandomRange(50, 99, 100, 150);
    if (rt) rt.value = getRandomRange(3, 9, 10, 15);
	convert()
}
