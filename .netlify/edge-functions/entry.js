globalThis.process = {
	argv: [],
	env: {},
};
// .netlify/edge-functions/entry.js
globalThis.process = { argv: [], env: {} };
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function Mime$1() {
  this._types = /* @__PURE__ */ Object.create(null);
  this._extensions = /* @__PURE__ */ Object.create(null);
  for (let i = 0; i < arguments.length; i++) {
    this.define(arguments[i]);
  }
  this.define = this.define.bind(this);
  this.getType = this.getType.bind(this);
  this.getExtension = this.getExtension.bind(this);
}
Mime$1.prototype.define = function(typeMap, force) {
  for (let type in typeMap) {
    let extensions = typeMap[type].map(function(t) {
      return t.toLowerCase();
    });
    type = type.toLowerCase();
    for (let i = 0; i < extensions.length; i++) {
      const ext = extensions[i];
      if (ext[0] === "*") {
        continue;
      }
      if (!force && ext in this._types) {
        throw new Error(
          'Attempt to change mapping for "' + ext + '" extension from "' + this._types[ext] + '" to "' + type + '". Pass `force=true` to allow this, otherwise remove "' + ext + '" from the list of extensions for "' + type + '".'
        );
      }
      this._types[ext] = type;
    }
    if (force || !this._extensions[type]) {
      const ext = extensions[0];
      this._extensions[type] = ext[0] !== "*" ? ext : ext.substr(1);
    }
  }
};
Mime$1.prototype.getType = function(path) {
  path = String(path);
  let last = path.replace(/^.*[/\\]/, "").toLowerCase();
  let ext = last.replace(/^.*\./, "").toLowerCase();
  let hasPath = last.length < path.length;
  let hasDot = ext.length < last.length - 1;
  return (hasDot || !hasPath) && this._types[ext] || null;
};
Mime$1.prototype.getExtension = function(type) {
  type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
  return type && this._extensions[type.toLowerCase()] || null;
};
var Mime_1 = Mime$1;
var standard = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] };
var other = { "application/prs.cww": ["cww"], "application/vnd.1000minds.decision-model+xml": ["1km"], "application/vnd.3gpp.pic-bw-large": ["plb"], "application/vnd.3gpp.pic-bw-small": ["psb"], "application/vnd.3gpp.pic-bw-var": ["pvb"], "application/vnd.3gpp2.tcap": ["tcap"], "application/vnd.3m.post-it-notes": ["pwn"], "application/vnd.accpac.simply.aso": ["aso"], "application/vnd.accpac.simply.imp": ["imp"], "application/vnd.acucobol": ["acu"], "application/vnd.acucorp": ["atc", "acutc"], "application/vnd.adobe.air-application-installer-package+zip": ["air"], "application/vnd.adobe.formscentral.fcdt": ["fcdt"], "application/vnd.adobe.fxp": ["fxp", "fxpl"], "application/vnd.adobe.xdp+xml": ["xdp"], "application/vnd.adobe.xfdf": ["xfdf"], "application/vnd.ahead.space": ["ahead"], "application/vnd.airzip.filesecure.azf": ["azf"], "application/vnd.airzip.filesecure.azs": ["azs"], "application/vnd.amazon.ebook": ["azw"], "application/vnd.americandynamics.acc": ["acc"], "application/vnd.amiga.ami": ["ami"], "application/vnd.android.package-archive": ["apk"], "application/vnd.anser-web-certificate-issue-initiation": ["cii"], "application/vnd.anser-web-funds-transfer-initiation": ["fti"], "application/vnd.antix.game-component": ["atx"], "application/vnd.apple.installer+xml": ["mpkg"], "application/vnd.apple.keynote": ["key"], "application/vnd.apple.mpegurl": ["m3u8"], "application/vnd.apple.numbers": ["numbers"], "application/vnd.apple.pages": ["pages"], "application/vnd.apple.pkpass": ["pkpass"], "application/vnd.aristanetworks.swi": ["swi"], "application/vnd.astraea-software.iota": ["iota"], "application/vnd.audiograph": ["aep"], "application/vnd.balsamiq.bmml+xml": ["bmml"], "application/vnd.blueice.multipass": ["mpm"], "application/vnd.bmi": ["bmi"], "application/vnd.businessobjects": ["rep"], "application/vnd.chemdraw+xml": ["cdxml"], "application/vnd.chipnuts.karaoke-mmd": ["mmd"], "application/vnd.cinderella": ["cdy"], "application/vnd.citationstyles.style+xml": ["csl"], "application/vnd.claymore": ["cla"], "application/vnd.cloanto.rp9": ["rp9"], "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"], "application/vnd.cluetrust.cartomobile-config": ["c11amc"], "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"], "application/vnd.commonspace": ["csp"], "application/vnd.contact.cmsg": ["cdbcmsg"], "application/vnd.cosmocaller": ["cmc"], "application/vnd.crick.clicker": ["clkx"], "application/vnd.crick.clicker.keyboard": ["clkk"], "application/vnd.crick.clicker.palette": ["clkp"], "application/vnd.crick.clicker.template": ["clkt"], "application/vnd.crick.clicker.wordbank": ["clkw"], "application/vnd.criticaltools.wbs+xml": ["wbs"], "application/vnd.ctc-posml": ["pml"], "application/vnd.cups-ppd": ["ppd"], "application/vnd.curl.car": ["car"], "application/vnd.curl.pcurl": ["pcurl"], "application/vnd.dart": ["dart"], "application/vnd.data-vision.rdz": ["rdz"], "application/vnd.dbf": ["dbf"], "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"], "application/vnd.dece.ttml+xml": ["uvt", "uvvt"], "application/vnd.dece.unspecified": ["uvx", "uvvx"], "application/vnd.dece.zip": ["uvz", "uvvz"], "application/vnd.denovo.fcselayout-link": ["fe_launch"], "application/vnd.dna": ["dna"], "application/vnd.dolby.mlp": ["mlp"], "application/vnd.dpgraph": ["dpg"], "application/vnd.dreamfactory": ["dfac"], "application/vnd.ds-keypoint": ["kpxx"], "application/vnd.dvb.ait": ["ait"], "application/vnd.dvb.service": ["svc"], "application/vnd.dynageo": ["geo"], "application/vnd.ecowin.chart": ["mag"], "application/vnd.enliven": ["nml"], "application/vnd.epson.esf": ["esf"], "application/vnd.epson.msf": ["msf"], "application/vnd.epson.quickanime": ["qam"], "application/vnd.epson.salt": ["slt"], "application/vnd.epson.ssf": ["ssf"], "application/vnd.eszigno3+xml": ["es3", "et3"], "application/vnd.ezpix-album": ["ez2"], "application/vnd.ezpix-package": ["ez3"], "application/vnd.fdf": ["fdf"], "application/vnd.fdsn.mseed": ["mseed"], "application/vnd.fdsn.seed": ["seed", "dataless"], "application/vnd.flographit": ["gph"], "application/vnd.fluxtime.clip": ["ftc"], "application/vnd.framemaker": ["fm", "frame", "maker", "book"], "application/vnd.frogans.fnc": ["fnc"], "application/vnd.frogans.ltf": ["ltf"], "application/vnd.fsc.weblaunch": ["fsc"], "application/vnd.fujitsu.oasys": ["oas"], "application/vnd.fujitsu.oasys2": ["oa2"], "application/vnd.fujitsu.oasys3": ["oa3"], "application/vnd.fujitsu.oasysgp": ["fg5"], "application/vnd.fujitsu.oasysprs": ["bh2"], "application/vnd.fujixerox.ddd": ["ddd"], "application/vnd.fujixerox.docuworks": ["xdw"], "application/vnd.fujixerox.docuworks.binder": ["xbd"], "application/vnd.fuzzysheet": ["fzs"], "application/vnd.genomatix.tuxedo": ["txd"], "application/vnd.geogebra.file": ["ggb"], "application/vnd.geogebra.tool": ["ggt"], "application/vnd.geometry-explorer": ["gex", "gre"], "application/vnd.geonext": ["gxt"], "application/vnd.geoplan": ["g2w"], "application/vnd.geospace": ["g3w"], "application/vnd.gmx": ["gmx"], "application/vnd.google-apps.document": ["gdoc"], "application/vnd.google-apps.presentation": ["gslides"], "application/vnd.google-apps.spreadsheet": ["gsheet"], "application/vnd.google-earth.kml+xml": ["kml"], "application/vnd.google-earth.kmz": ["kmz"], "application/vnd.grafeq": ["gqf", "gqs"], "application/vnd.groove-account": ["gac"], "application/vnd.groove-help": ["ghf"], "application/vnd.groove-identity-message": ["gim"], "application/vnd.groove-injector": ["grv"], "application/vnd.groove-tool-message": ["gtm"], "application/vnd.groove-tool-template": ["tpl"], "application/vnd.groove-vcard": ["vcg"], "application/vnd.hal+xml": ["hal"], "application/vnd.handheld-entertainment+xml": ["zmm"], "application/vnd.hbci": ["hbci"], "application/vnd.hhe.lesson-player": ["les"], "application/vnd.hp-hpgl": ["hpgl"], "application/vnd.hp-hpid": ["hpid"], "application/vnd.hp-hps": ["hps"], "application/vnd.hp-jlyt": ["jlt"], "application/vnd.hp-pcl": ["pcl"], "application/vnd.hp-pclxl": ["pclxl"], "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"], "application/vnd.ibm.minipay": ["mpy"], "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"], "application/vnd.ibm.rights-management": ["irm"], "application/vnd.ibm.secure-container": ["sc"], "application/vnd.iccprofile": ["icc", "icm"], "application/vnd.igloader": ["igl"], "application/vnd.immervision-ivp": ["ivp"], "application/vnd.immervision-ivu": ["ivu"], "application/vnd.insors.igm": ["igm"], "application/vnd.intercon.formnet": ["xpw", "xpx"], "application/vnd.intergeo": ["i2g"], "application/vnd.intu.qbo": ["qbo"], "application/vnd.intu.qfx": ["qfx"], "application/vnd.ipunplugged.rcprofile": ["rcprofile"], "application/vnd.irepository.package+xml": ["irp"], "application/vnd.is-xpr": ["xpr"], "application/vnd.isac.fcs": ["fcs"], "application/vnd.jam": ["jam"], "application/vnd.jcp.javame.midlet-rms": ["rms"], "application/vnd.jisp": ["jisp"], "application/vnd.joost.joda-archive": ["joda"], "application/vnd.kahootz": ["ktz", "ktr"], "application/vnd.kde.karbon": ["karbon"], "application/vnd.kde.kchart": ["chrt"], "application/vnd.kde.kformula": ["kfo"], "application/vnd.kde.kivio": ["flw"], "application/vnd.kde.kontour": ["kon"], "application/vnd.kde.kpresenter": ["kpr", "kpt"], "application/vnd.kde.kspread": ["ksp"], "application/vnd.kde.kword": ["kwd", "kwt"], "application/vnd.kenameaapp": ["htke"], "application/vnd.kidspiration": ["kia"], "application/vnd.kinar": ["kne", "knp"], "application/vnd.koan": ["skp", "skd", "skt", "skm"], "application/vnd.kodak-descriptor": ["sse"], "application/vnd.las.las+xml": ["lasxml"], "application/vnd.llamagraphics.life-balance.desktop": ["lbd"], "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"], "application/vnd.lotus-1-2-3": ["123"], "application/vnd.lotus-approach": ["apr"], "application/vnd.lotus-freelance": ["pre"], "application/vnd.lotus-notes": ["nsf"], "application/vnd.lotus-organizer": ["org"], "application/vnd.lotus-screencam": ["scm"], "application/vnd.lotus-wordpro": ["lwp"], "application/vnd.macports.portpkg": ["portpkg"], "application/vnd.mapbox-vector-tile": ["mvt"], "application/vnd.mcd": ["mcd"], "application/vnd.medcalcdata": ["mc1"], "application/vnd.mediastation.cdkey": ["cdkey"], "application/vnd.mfer": ["mwf"], "application/vnd.mfmp": ["mfm"], "application/vnd.micrografx.flo": ["flo"], "application/vnd.micrografx.igx": ["igx"], "application/vnd.mif": ["mif"], "application/vnd.mobius.daf": ["daf"], "application/vnd.mobius.dis": ["dis"], "application/vnd.mobius.mbk": ["mbk"], "application/vnd.mobius.mqy": ["mqy"], "application/vnd.mobius.msl": ["msl"], "application/vnd.mobius.plc": ["plc"], "application/vnd.mobius.txf": ["txf"], "application/vnd.mophun.application": ["mpn"], "application/vnd.mophun.certificate": ["mpc"], "application/vnd.mozilla.xul+xml": ["xul"], "application/vnd.ms-artgalry": ["cil"], "application/vnd.ms-cab-compressed": ["cab"], "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"], "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"], "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"], "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"], "application/vnd.ms-excel.template.macroenabled.12": ["xltm"], "application/vnd.ms-fontobject": ["eot"], "application/vnd.ms-htmlhelp": ["chm"], "application/vnd.ms-ims": ["ims"], "application/vnd.ms-lrm": ["lrm"], "application/vnd.ms-officetheme": ["thmx"], "application/vnd.ms-outlook": ["msg"], "application/vnd.ms-pki.seccat": ["cat"], "application/vnd.ms-pki.stl": ["*stl"], "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"], "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"], "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"], "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"], "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"], "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"], "application/vnd.ms-project": ["mpp", "mpt"], "application/vnd.ms-word.document.macroenabled.12": ["docm"], "application/vnd.ms-word.template.macroenabled.12": ["dotm"], "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"], "application/vnd.ms-wpl": ["wpl"], "application/vnd.ms-xpsdocument": ["xps"], "application/vnd.mseq": ["mseq"], "application/vnd.musician": ["mus"], "application/vnd.muvee.style": ["msty"], "application/vnd.mynfc": ["taglet"], "application/vnd.neurolanguage.nlu": ["nlu"], "application/vnd.nitf": ["ntf", "nitf"], "application/vnd.noblenet-directory": ["nnd"], "application/vnd.noblenet-sealer": ["nns"], "application/vnd.noblenet-web": ["nnw"], "application/vnd.nokia.n-gage.ac+xml": ["*ac"], "application/vnd.nokia.n-gage.data": ["ngdat"], "application/vnd.nokia.n-gage.symbian.install": ["n-gage"], "application/vnd.nokia.radio-preset": ["rpst"], "application/vnd.nokia.radio-presets": ["rpss"], "application/vnd.novadigm.edm": ["edm"], "application/vnd.novadigm.edx": ["edx"], "application/vnd.novadigm.ext": ["ext"], "application/vnd.oasis.opendocument.chart": ["odc"], "application/vnd.oasis.opendocument.chart-template": ["otc"], "application/vnd.oasis.opendocument.database": ["odb"], "application/vnd.oasis.opendocument.formula": ["odf"], "application/vnd.oasis.opendocument.formula-template": ["odft"], "application/vnd.oasis.opendocument.graphics": ["odg"], "application/vnd.oasis.opendocument.graphics-template": ["otg"], "application/vnd.oasis.opendocument.image": ["odi"], "application/vnd.oasis.opendocument.image-template": ["oti"], "application/vnd.oasis.opendocument.presentation": ["odp"], "application/vnd.oasis.opendocument.presentation-template": ["otp"], "application/vnd.oasis.opendocument.spreadsheet": ["ods"], "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"], "application/vnd.oasis.opendocument.text": ["odt"], "application/vnd.oasis.opendocument.text-master": ["odm"], "application/vnd.oasis.opendocument.text-template": ["ott"], "application/vnd.oasis.opendocument.text-web": ["oth"], "application/vnd.olpc-sugar": ["xo"], "application/vnd.oma.dd2+xml": ["dd2"], "application/vnd.openblox.game+xml": ["obgx"], "application/vnd.openofficeorg.extension": ["oxt"], "application/vnd.openstreetmap.data+xml": ["osm"], "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"], "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"], "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"], "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"], "application/vnd.osgeo.mapguide.package": ["mgp"], "application/vnd.osgi.dp": ["dp"], "application/vnd.osgi.subsystem": ["esa"], "application/vnd.palm": ["pdb", "pqa", "oprc"], "application/vnd.pawaafile": ["paw"], "application/vnd.pg.format": ["str"], "application/vnd.pg.osasli": ["ei6"], "application/vnd.picsel": ["efif"], "application/vnd.pmi.widget": ["wg"], "application/vnd.pocketlearn": ["plf"], "application/vnd.powerbuilder6": ["pbd"], "application/vnd.previewsystems.box": ["box"], "application/vnd.proteus.magazine": ["mgz"], "application/vnd.publishare-delta-tree": ["qps"], "application/vnd.pvi.ptid1": ["ptid"], "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"], "application/vnd.rar": ["rar"], "application/vnd.realvnc.bed": ["bed"], "application/vnd.recordare.musicxml": ["mxl"], "application/vnd.recordare.musicxml+xml": ["musicxml"], "application/vnd.rig.cryptonote": ["cryptonote"], "application/vnd.rim.cod": ["cod"], "application/vnd.rn-realmedia": ["rm"], "application/vnd.rn-realmedia-vbr": ["rmvb"], "application/vnd.route66.link66+xml": ["link66"], "application/vnd.sailingtracker.track": ["st"], "application/vnd.seemail": ["see"], "application/vnd.sema": ["sema"], "application/vnd.semd": ["semd"], "application/vnd.semf": ["semf"], "application/vnd.shana.informed.formdata": ["ifm"], "application/vnd.shana.informed.formtemplate": ["itp"], "application/vnd.shana.informed.interchange": ["iif"], "application/vnd.shana.informed.package": ["ipk"], "application/vnd.simtech-mindmapper": ["twd", "twds"], "application/vnd.smaf": ["mmf"], "application/vnd.smart.teacher": ["teacher"], "application/vnd.software602.filler.form+xml": ["fo"], "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"], "application/vnd.spotfire.dxp": ["dxp"], "application/vnd.spotfire.sfs": ["sfs"], "application/vnd.stardivision.calc": ["sdc"], "application/vnd.stardivision.draw": ["sda"], "application/vnd.stardivision.impress": ["sdd"], "application/vnd.stardivision.math": ["smf"], "application/vnd.stardivision.writer": ["sdw", "vor"], "application/vnd.stardivision.writer-global": ["sgl"], "application/vnd.stepmania.package": ["smzip"], "application/vnd.stepmania.stepchart": ["sm"], "application/vnd.sun.wadl+xml": ["wadl"], "application/vnd.sun.xml.calc": ["sxc"], "application/vnd.sun.xml.calc.template": ["stc"], "application/vnd.sun.xml.draw": ["sxd"], "application/vnd.sun.xml.draw.template": ["std"], "application/vnd.sun.xml.impress": ["sxi"], "application/vnd.sun.xml.impress.template": ["sti"], "application/vnd.sun.xml.math": ["sxm"], "application/vnd.sun.xml.writer": ["sxw"], "application/vnd.sun.xml.writer.global": ["sxg"], "application/vnd.sun.xml.writer.template": ["stw"], "application/vnd.sus-calendar": ["sus", "susp"], "application/vnd.svd": ["svd"], "application/vnd.symbian.install": ["sis", "sisx"], "application/vnd.syncml+xml": ["xsm"], "application/vnd.syncml.dm+wbxml": ["bdm"], "application/vnd.syncml.dm+xml": ["xdm"], "application/vnd.syncml.dmddf+xml": ["ddf"], "application/vnd.tao.intent-module-archive": ["tao"], "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"], "application/vnd.tmobile-livetv": ["tmo"], "application/vnd.trid.tpt": ["tpt"], "application/vnd.triscape.mxs": ["mxs"], "application/vnd.trueapp": ["tra"], "application/vnd.ufdl": ["ufd", "ufdl"], "application/vnd.uiq.theme": ["utz"], "application/vnd.umajin": ["umj"], "application/vnd.unity": ["unityweb"], "application/vnd.uoml+xml": ["uoml"], "application/vnd.vcx": ["vcx"], "application/vnd.visio": ["vsd", "vst", "vss", "vsw"], "application/vnd.visionary": ["vis"], "application/vnd.vsf": ["vsf"], "application/vnd.wap.wbxml": ["wbxml"], "application/vnd.wap.wmlc": ["wmlc"], "application/vnd.wap.wmlscriptc": ["wmlsc"], "application/vnd.webturbo": ["wtb"], "application/vnd.wolfram.player": ["nbp"], "application/vnd.wordperfect": ["wpd"], "application/vnd.wqd": ["wqd"], "application/vnd.wt.stf": ["stf"], "application/vnd.xara": ["xar"], "application/vnd.xfdl": ["xfdl"], "application/vnd.yamaha.hv-dic": ["hvd"], "application/vnd.yamaha.hv-script": ["hvs"], "application/vnd.yamaha.hv-voice": ["hvp"], "application/vnd.yamaha.openscoreformat": ["osf"], "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"], "application/vnd.yamaha.smaf-audio": ["saf"], "application/vnd.yamaha.smaf-phrase": ["spf"], "application/vnd.yellowriver-custom-menu": ["cmp"], "application/vnd.zul": ["zir", "zirz"], "application/vnd.zzazz.deck+xml": ["zaz"], "application/x-7z-compressed": ["7z"], "application/x-abiword": ["abw"], "application/x-ace-compressed": ["ace"], "application/x-apple-diskimage": ["*dmg"], "application/x-arj": ["arj"], "application/x-authorware-bin": ["aab", "x32", "u32", "vox"], "application/x-authorware-map": ["aam"], "application/x-authorware-seg": ["aas"], "application/x-bcpio": ["bcpio"], "application/x-bdoc": ["*bdoc"], "application/x-bittorrent": ["torrent"], "application/x-blorb": ["blb", "blorb"], "application/x-bzip": ["bz"], "application/x-bzip2": ["bz2", "boz"], "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"], "application/x-cdlink": ["vcd"], "application/x-cfs-compressed": ["cfs"], "application/x-chat": ["chat"], "application/x-chess-pgn": ["pgn"], "application/x-chrome-extension": ["crx"], "application/x-cocoa": ["cco"], "application/x-conference": ["nsc"], "application/x-cpio": ["cpio"], "application/x-csh": ["csh"], "application/x-debian-package": ["*deb", "udeb"], "application/x-dgc-compressed": ["dgc"], "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"], "application/x-doom": ["wad"], "application/x-dtbncx+xml": ["ncx"], "application/x-dtbook+xml": ["dtb"], "application/x-dtbresource+xml": ["res"], "application/x-dvi": ["dvi"], "application/x-envoy": ["evy"], "application/x-eva": ["eva"], "application/x-font-bdf": ["bdf"], "application/x-font-ghostscript": ["gsf"], "application/x-font-linux-psf": ["psf"], "application/x-font-pcf": ["pcf"], "application/x-font-snf": ["snf"], "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"], "application/x-freearc": ["arc"], "application/x-futuresplash": ["spl"], "application/x-gca-compressed": ["gca"], "application/x-glulx": ["ulx"], "application/x-gnumeric": ["gnumeric"], "application/x-gramps-xml": ["gramps"], "application/x-gtar": ["gtar"], "application/x-hdf": ["hdf"], "application/x-httpd-php": ["php"], "application/x-install-instructions": ["install"], "application/x-iso9660-image": ["*iso"], "application/x-iwork-keynote-sffkey": ["*key"], "application/x-iwork-numbers-sffnumbers": ["*numbers"], "application/x-iwork-pages-sffpages": ["*pages"], "application/x-java-archive-diff": ["jardiff"], "application/x-java-jnlp-file": ["jnlp"], "application/x-keepass2": ["kdbx"], "application/x-latex": ["latex"], "application/x-lua-bytecode": ["luac"], "application/x-lzh-compressed": ["lzh", "lha"], "application/x-makeself": ["run"], "application/x-mie": ["mie"], "application/x-mobipocket-ebook": ["prc", "mobi"], "application/x-ms-application": ["application"], "application/x-ms-shortcut": ["lnk"], "application/x-ms-wmd": ["wmd"], "application/x-ms-wmz": ["wmz"], "application/x-ms-xbap": ["xbap"], "application/x-msaccess": ["mdb"], "application/x-msbinder": ["obd"], "application/x-mscardfile": ["crd"], "application/x-msclip": ["clp"], "application/x-msdos-program": ["*exe"], "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"], "application/x-msmediaview": ["mvb", "m13", "m14"], "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"], "application/x-msmoney": ["mny"], "application/x-mspublisher": ["pub"], "application/x-msschedule": ["scd"], "application/x-msterminal": ["trm"], "application/x-mswrite": ["wri"], "application/x-netcdf": ["nc", "cdf"], "application/x-ns-proxy-autoconfig": ["pac"], "application/x-nzb": ["nzb"], "application/x-perl": ["pl", "pm"], "application/x-pilot": ["*prc", "*pdb"], "application/x-pkcs12": ["p12", "pfx"], "application/x-pkcs7-certificates": ["p7b", "spc"], "application/x-pkcs7-certreqresp": ["p7r"], "application/x-rar-compressed": ["*rar"], "application/x-redhat-package-manager": ["rpm"], "application/x-research-info-systems": ["ris"], "application/x-sea": ["sea"], "application/x-sh": ["sh"], "application/x-shar": ["shar"], "application/x-shockwave-flash": ["swf"], "application/x-silverlight-app": ["xap"], "application/x-sql": ["sql"], "application/x-stuffit": ["sit"], "application/x-stuffitx": ["sitx"], "application/x-subrip": ["srt"], "application/x-sv4cpio": ["sv4cpio"], "application/x-sv4crc": ["sv4crc"], "application/x-t3vm-image": ["t3"], "application/x-tads": ["gam"], "application/x-tar": ["tar"], "application/x-tcl": ["tcl", "tk"], "application/x-tex": ["tex"], "application/x-tex-tfm": ["tfm"], "application/x-texinfo": ["texinfo", "texi"], "application/x-tgif": ["*obj"], "application/x-ustar": ["ustar"], "application/x-virtualbox-hdd": ["hdd"], "application/x-virtualbox-ova": ["ova"], "application/x-virtualbox-ovf": ["ovf"], "application/x-virtualbox-vbox": ["vbox"], "application/x-virtualbox-vbox-extpack": ["vbox-extpack"], "application/x-virtualbox-vdi": ["vdi"], "application/x-virtualbox-vhd": ["vhd"], "application/x-virtualbox-vmdk": ["vmdk"], "application/x-wais-source": ["src"], "application/x-web-app-manifest+json": ["webapp"], "application/x-x509-ca-cert": ["der", "crt", "pem"], "application/x-xfig": ["fig"], "application/x-xliff+xml": ["*xlf"], "application/x-xpinstall": ["xpi"], "application/x-xz": ["xz"], "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"], "audio/vnd.dece.audio": ["uva", "uvva"], "audio/vnd.digital-winds": ["eol"], "audio/vnd.dra": ["dra"], "audio/vnd.dts": ["dts"], "audio/vnd.dts.hd": ["dtshd"], "audio/vnd.lucent.voice": ["lvp"], "audio/vnd.ms-playready.media.pya": ["pya"], "audio/vnd.nuera.ecelp4800": ["ecelp4800"], "audio/vnd.nuera.ecelp7470": ["ecelp7470"], "audio/vnd.nuera.ecelp9600": ["ecelp9600"], "audio/vnd.rip": ["rip"], "audio/x-aac": ["aac"], "audio/x-aiff": ["aif", "aiff", "aifc"], "audio/x-caf": ["caf"], "audio/x-flac": ["flac"], "audio/x-m4a": ["*m4a"], "audio/x-matroska": ["mka"], "audio/x-mpegurl": ["m3u"], "audio/x-ms-wax": ["wax"], "audio/x-ms-wma": ["wma"], "audio/x-pn-realaudio": ["ram", "ra"], "audio/x-pn-realaudio-plugin": ["rmp"], "audio/x-realaudio": ["*ra"], "audio/x-wav": ["*wav"], "chemical/x-cdx": ["cdx"], "chemical/x-cif": ["cif"], "chemical/x-cmdf": ["cmdf"], "chemical/x-cml": ["cml"], "chemical/x-csml": ["csml"], "chemical/x-xyz": ["xyz"], "image/prs.btif": ["btif"], "image/prs.pti": ["pti"], "image/vnd.adobe.photoshop": ["psd"], "image/vnd.airzip.accelerator.azv": ["azv"], "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"], "image/vnd.djvu": ["djvu", "djv"], "image/vnd.dvb.subtitle": ["*sub"], "image/vnd.dwg": ["dwg"], "image/vnd.dxf": ["dxf"], "image/vnd.fastbidsheet": ["fbs"], "image/vnd.fpx": ["fpx"], "image/vnd.fst": ["fst"], "image/vnd.fujixerox.edmics-mmr": ["mmr"], "image/vnd.fujixerox.edmics-rlc": ["rlc"], "image/vnd.microsoft.icon": ["ico"], "image/vnd.ms-dds": ["dds"], "image/vnd.ms-modi": ["mdi"], "image/vnd.ms-photo": ["wdp"], "image/vnd.net-fpx": ["npx"], "image/vnd.pco.b16": ["b16"], "image/vnd.tencent.tap": ["tap"], "image/vnd.valve.source.texture": ["vtf"], "image/vnd.wap.wbmp": ["wbmp"], "image/vnd.xiff": ["xif"], "image/vnd.zbrush.pcx": ["pcx"], "image/x-3ds": ["3ds"], "image/x-cmu-raster": ["ras"], "image/x-cmx": ["cmx"], "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"], "image/x-icon": ["*ico"], "image/x-jng": ["jng"], "image/x-mrsid-image": ["sid"], "image/x-ms-bmp": ["*bmp"], "image/x-pcx": ["*pcx"], "image/x-pict": ["pic", "pct"], "image/x-portable-anymap": ["pnm"], "image/x-portable-bitmap": ["pbm"], "image/x-portable-graymap": ["pgm"], "image/x-portable-pixmap": ["ppm"], "image/x-rgb": ["rgb"], "image/x-tga": ["tga"], "image/x-xbitmap": ["xbm"], "image/x-xpixmap": ["xpm"], "image/x-xwindowdump": ["xwd"], "message/vnd.wfa.wsc": ["wsc"], "model/vnd.collada+xml": ["dae"], "model/vnd.dwf": ["dwf"], "model/vnd.gdl": ["gdl"], "model/vnd.gtw": ["gtw"], "model/vnd.mts": ["mts"], "model/vnd.opengex": ["ogex"], "model/vnd.parasolid.transmit.binary": ["x_b"], "model/vnd.parasolid.transmit.text": ["x_t"], "model/vnd.sap.vds": ["vds"], "model/vnd.usdz+zip": ["usdz"], "model/vnd.valve.source.compiled-map": ["bsp"], "model/vnd.vtu": ["vtu"], "text/prs.lines.tag": ["dsc"], "text/vnd.curl": ["curl"], "text/vnd.curl.dcurl": ["dcurl"], "text/vnd.curl.mcurl": ["mcurl"], "text/vnd.curl.scurl": ["scurl"], "text/vnd.dvb.subtitle": ["sub"], "text/vnd.fly": ["fly"], "text/vnd.fmi.flexstor": ["flx"], "text/vnd.graphviz": ["gv"], "text/vnd.in3d.3dml": ["3dml"], "text/vnd.in3d.spot": ["spot"], "text/vnd.sun.j2me.app-descriptor": ["jad"], "text/vnd.wap.wml": ["wml"], "text/vnd.wap.wmlscript": ["wmls"], "text/x-asm": ["s", "asm"], "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"], "text/x-component": ["htc"], "text/x-fortran": ["f", "for", "f77", "f90"], "text/x-handlebars-template": ["hbs"], "text/x-java-source": ["java"], "text/x-lua": ["lua"], "text/x-markdown": ["mkd"], "text/x-nfo": ["nfo"], "text/x-opml": ["opml"], "text/x-org": ["*org"], "text/x-pascal": ["p", "pas"], "text/x-processing": ["pde"], "text/x-sass": ["sass"], "text/x-scss": ["scss"], "text/x-setext": ["etx"], "text/x-sfv": ["sfv"], "text/x-suse-ymp": ["ymp"], "text/x-uuencode": ["uu"], "text/x-vcalendar": ["vcs"], "text/x-vcard": ["vcf"], "video/vnd.dece.hd": ["uvh", "uvvh"], "video/vnd.dece.mobile": ["uvm", "uvvm"], "video/vnd.dece.pd": ["uvp", "uvvp"], "video/vnd.dece.sd": ["uvs", "uvvs"], "video/vnd.dece.video": ["uvv", "uvvv"], "video/vnd.dvb.file": ["dvb"], "video/vnd.fvt": ["fvt"], "video/vnd.mpegurl": ["mxu", "m4u"], "video/vnd.ms-playready.media.pyv": ["pyv"], "video/vnd.uvvu.mp4": ["uvu", "uvvu"], "video/vnd.vivo": ["viv"], "video/x-f4v": ["f4v"], "video/x-fli": ["fli"], "video/x-flv": ["flv"], "video/x-m4v": ["m4v"], "video/x-matroska": ["mkv", "mk3d", "mks"], "video/x-mng": ["mng"], "video/x-ms-asf": ["asf", "asx"], "video/x-ms-vob": ["vob"], "video/x-ms-wm": ["wm"], "video/x-ms-wmv": ["wmv"], "video/x-ms-wmx": ["wmx"], "video/x-ms-wvx": ["wvx"], "video/x-msvideo": ["avi"], "video/x-sgi-movie": ["movie"], "video/x-smv": ["smv"], "x-conference/x-cooltalk": ["ice"] };
var Mime = Mime_1;
var mime = new Mime(standard, other);
var parse_1 = parse$1;
var serialize_1 = serialize;
var __toString = Object.prototype.toString;
var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function parse$1(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  var obj = {};
  var opt = options || {};
  var dec = opt.decode || decode;
  var index = 0;
  while (index < str.length) {
    var eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    var endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    var key = str.slice(index, eqIdx).trim();
    if (void 0 === obj[key]) {
      var val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.charCodeAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  var value = enc(val);
  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError("argument val is invalid");
  }
  var str = name + "=" + value;
  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    var expires = opt.expires;
    if (!isDate(expires) || isNaN(expires.valueOf())) {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.priority) {
    var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
    switch (priority) {
      case "low":
        str += "; Priority=Low";
        break;
      case "medium":
        str += "; Priority=Medium";
        break;
      case "high":
        str += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
}
function decode(str) {
  return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
}
function encode(val) {
  return encodeURIComponent(val);
}
function isDate(val) {
  return __toString.call(val) === "[object Date]" || val instanceof Date;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch (e) {
    return str;
  }
}
var __accessCheck$3 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$3 = (obj, member, getter) => {
  __accessCheck$3(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$3 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$3 = (obj, member, value, setter) => {
  __accessCheck$3(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod$1 = (obj, member, method) => {
  __accessCheck$3(obj, member, "access private method");
  return method;
};
var _request;
var _requestValues;
var _outgoing;
var _ensureParsed;
var ensureParsed_fn;
var _ensureOutgoingMap;
var ensureOutgoingMap_fn;
var _parse;
var parse_fn;
var DELETED_EXPIRATION = new Date(0);
var DELETED_VALUE = "deleted";
var AstroCookie = class {
  constructor(value) {
    this.value = value;
  }
  json() {
    if (this.value === void 0) {
      throw new Error(`Cannot convert undefined to an object.`);
    }
    return JSON.parse(this.value);
  }
  number() {
    return Number(this.value);
  }
  boolean() {
    if (this.value === "false")
      return false;
    if (this.value === "0")
      return false;
    return Boolean(this.value);
  }
};
var AstroCookies = class {
  constructor(request) {
    __privateAdd$3(this, _ensureParsed);
    __privateAdd$3(this, _ensureOutgoingMap);
    __privateAdd$3(this, _parse);
    __privateAdd$3(this, _request, void 0);
    __privateAdd$3(this, _requestValues, void 0);
    __privateAdd$3(this, _outgoing, void 0);
    __privateSet$3(this, _request, request);
    __privateSet$3(this, _requestValues, null);
    __privateSet$3(this, _outgoing, null);
  }
  delete(key, options) {
    const serializeOptions = {
      expires: DELETED_EXPIRATION
    };
    if (options == null ? void 0 : options.path) {
      serializeOptions.path = options.path;
    }
    __privateMethod$1(this, _ensureOutgoingMap, ensureOutgoingMap_fn).call(this).set(key, [
      DELETED_VALUE,
      serialize_1(key, DELETED_VALUE, serializeOptions),
      false
    ]);
  }
  get(key) {
    if (__privateGet$3(this, _outgoing) !== null && __privateGet$3(this, _outgoing).has(key)) {
      let [serializedValue, , isSetValue] = __privateGet$3(this, _outgoing).get(key);
      if (isSetValue) {
        return new AstroCookie(serializedValue);
      } else {
        return new AstroCookie(void 0);
      }
    }
    const values = __privateMethod$1(this, _ensureParsed, ensureParsed_fn).call(this);
    const value = values[key];
    return new AstroCookie(value);
  }
  has(key) {
    if (__privateGet$3(this, _outgoing) !== null && __privateGet$3(this, _outgoing).has(key)) {
      let [, , isSetValue] = __privateGet$3(this, _outgoing).get(key);
      return isSetValue;
    }
    const values = __privateMethod$1(this, _ensureParsed, ensureParsed_fn).call(this);
    return !!values[key];
  }
  set(key, value, options) {
    let serializedValue;
    if (typeof value === "string") {
      serializedValue = value;
    } else {
      let toStringValue = value.toString();
      if (toStringValue === Object.prototype.toString.call(value)) {
        serializedValue = JSON.stringify(value);
      } else {
        serializedValue = toStringValue;
      }
    }
    const serializeOptions = {};
    if (options) {
      Object.assign(serializeOptions, options);
    }
    __privateMethod$1(this, _ensureOutgoingMap, ensureOutgoingMap_fn).call(this).set(key, [
      serializedValue,
      serialize_1(key, serializedValue, serializeOptions),
      true
    ]);
  }
  *headers() {
    if (__privateGet$3(this, _outgoing) == null)
      return;
    for (const [, value] of __privateGet$3(this, _outgoing)) {
      yield value[1];
    }
  }
};
_request = /* @__PURE__ */ new WeakMap();
_requestValues = /* @__PURE__ */ new WeakMap();
_outgoing = /* @__PURE__ */ new WeakMap();
_ensureParsed = /* @__PURE__ */ new WeakSet();
ensureParsed_fn = function() {
  if (!__privateGet$3(this, _requestValues)) {
    __privateMethod$1(this, _parse, parse_fn).call(this);
  }
  if (!__privateGet$3(this, _requestValues)) {
    __privateSet$3(this, _requestValues, {});
  }
  return __privateGet$3(this, _requestValues);
};
_ensureOutgoingMap = /* @__PURE__ */ new WeakSet();
ensureOutgoingMap_fn = function() {
  if (!__privateGet$3(this, _outgoing)) {
    __privateSet$3(this, _outgoing, /* @__PURE__ */ new Map());
  }
  return __privateGet$3(this, _outgoing);
};
_parse = /* @__PURE__ */ new WeakSet();
parse_fn = function() {
  const raw = __privateGet$3(this, _request).headers.get("cookie");
  if (!raw) {
    return;
  }
  __privateSet$3(this, _requestValues, parse_1(raw));
};
var astroCookiesSymbol = Symbol.for("astro.cookies");
function attachToResponse(response, cookies) {
  Reflect.set(response, astroCookiesSymbol, cookies);
}
function getFromResponse(response) {
  let cookies = Reflect.get(response, astroCookiesSymbol);
  if (cookies != null) {
    return cookies;
  } else {
    return void 0;
  }
}
function* getSetCookiesFromResponse(response) {
  const cookies = getFromResponse(response);
  if (!cookies) {
    return;
  }
  for (const headerValue of cookies.headers()) {
    yield headerValue;
  }
}
var ASTRO_VERSION = "1.5.2";
function createDeprecatedFetchContentFn() {
  return () => {
    throw new Error("Deprecated: Astro.fetchContent() has been replaced with Astro.glob().");
  };
}
function createAstroGlobFn() {
  const globHandler = (importMetaGlobResult, globValue) => {
    let allEntries = [...Object.values(importMetaGlobResult)];
    if (allEntries.length === 0) {
      throw new Error(`Astro.glob(${JSON.stringify(globValue())}) - no matches found.`);
    }
    return Promise.all(allEntries.map((fn) => fn()));
  };
  return globHandler;
}
function createAstro(filePathname, _site, projectRootStr) {
  const site = _site ? new URL(_site) : void 0;
  const referenceURL = new URL(filePathname, `http://localhost`);
  const projectRoot = new URL(projectRootStr);
  return {
    site,
    generator: `Astro v${ASTRO_VERSION}`,
    fetchContent: createDeprecatedFetchContentFn(),
    glob: createAstroGlobFn(),
    resolve(...segments) {
      let resolved = segments.reduce((u, segment) => new URL(segment, u), referenceURL).pathname;
      if (resolved.startsWith(projectRoot.pathname)) {
        resolved = "/" + resolved.slice(projectRoot.pathname.length);
      }
      return resolved;
    }
  };
}
function getHandlerFromModule(mod, method) {
  if (mod[method]) {
    return mod[method];
  }
  if (method === "delete" && mod["del"]) {
    return mod["del"];
  }
  if (mod["all"]) {
    return mod["all"];
  }
  return void 0;
}
async function renderEndpoint(mod, context, ssr) {
  var _a2;
  const { request, params } = context;
  const chosenMethod = (_a2 = request.method) == null ? void 0 : _a2.toLowerCase();
  const handler = getHandlerFromModule(mod, chosenMethod);
  if (!ssr && ssr === false && chosenMethod && chosenMethod !== "get") {
    console.warn(`
${chosenMethod} requests are not available when building a static site. Update your config to output: 'server' to handle ${chosenMethod} requests.`);
  }
  if (!handler || typeof handler !== "function") {
    let response = new Response(null, {
      status: 404,
      headers: {
        "X-Astro-Response": "Not-Found"
      }
    });
    return response;
  }
  if (handler.length > 1) {
    console.warn(`
API routes with 2 arguments have been deprecated. Instead they take a single argument in the form of:

export function get({ params, request }) {
	//...
}

Update your code to remove this warning.`);
  }
  const proxy = new Proxy(context, {
    get(target, prop) {
      if (prop in target) {
        return Reflect.get(target, prop);
      } else if (prop in params) {
        console.warn(`
API routes no longer pass params as the first argument. Instead an object containing a params property is provided in the form of:

export function get({ params }) {
	// ...
}

Update your code to remove this warning.`);
        return Reflect.get(params, prop);
      } else {
        return void 0;
      }
    }
  });
  return handler.call(mod, proxy, request);
}
var { replace } = "";
var ca = /[&<>'"]/g;
var esca = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  '"': "&quot;"
};
var pe = (m) => esca[m];
var escape = (es) => replace.call(es, ca, pe);
var escapeHTML = escape;
var HTMLString = class extends String {
  get [Symbol.toStringTag]() {
    return "HTMLString";
  }
};
var markHTMLString = (value) => {
  if (value instanceof HTMLString) {
    return value;
  }
  if (typeof value === "string") {
    return new HTMLString(value);
  }
  return value;
};
function isHTMLString(value) {
  return Object.prototype.toString.call(value) === "[object HTMLString]";
}
var AstroJSX = "astro:jsx";
var Empty = Symbol("empty");
var toSlotName = (slotAttr) => slotAttr;
function isVNode(vnode) {
  return vnode && typeof vnode === "object" && vnode[AstroJSX];
}
function transformSlots(vnode) {
  if (typeof vnode.type === "string")
    return vnode;
  const slots = {};
  if (isVNode(vnode.props.children)) {
    const child = vnode.props.children;
    if (!isVNode(child))
      return;
    if (!("slot" in child.props))
      return;
    const name = toSlotName(child.props.slot);
    slots[name] = [child];
    slots[name]["$$slot"] = true;
    delete child.props.slot;
    delete vnode.props.children;
  }
  if (Array.isArray(vnode.props.children)) {
    vnode.props.children = vnode.props.children.map((child) => {
      if (!isVNode(child))
        return child;
      if (!("slot" in child.props))
        return child;
      const name = toSlotName(child.props.slot);
      if (Array.isArray(slots[name])) {
        slots[name].push(child);
      } else {
        slots[name] = [child];
        slots[name]["$$slot"] = true;
      }
      delete child.props.slot;
      return Empty;
    }).filter((v) => v !== Empty);
  }
  Object.assign(vnode.props, slots);
}
function markRawChildren(child) {
  if (typeof child === "string")
    return markHTMLString(child);
  if (Array.isArray(child))
    return child.map((c) => markRawChildren(c));
  return child;
}
function transformSetDirectives(vnode) {
  if (!("set:html" in vnode.props || "set:text" in vnode.props))
    return;
  if ("set:html" in vnode.props) {
    const children = markRawChildren(vnode.props["set:html"]);
    delete vnode.props["set:html"];
    Object.assign(vnode.props, { children });
    return;
  }
  if ("set:text" in vnode.props) {
    const children = vnode.props["set:text"];
    delete vnode.props["set:text"];
    Object.assign(vnode.props, { children });
    return;
  }
}
function createVNode(type, props) {
  const vnode = {
    [Renderer]: "astro:jsx",
    [AstroJSX]: true,
    type,
    props: props ?? {}
  };
  transformSetDirectives(vnode);
  transformSlots(vnode);
  return vnode;
}
var idle_prebuilt_default = `(self.Astro=self.Astro||{}).idle=t=>{const e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)},window.dispatchEvent(new Event("astro:idle"));`;
var load_prebuilt_default = `(self.Astro=self.Astro||{}).load=a=>{(async()=>await(await a())())()},window.dispatchEvent(new Event("astro:load"));`;
var media_prebuilt_default = `(self.Astro=self.Astro||{}).media=(s,a)=>{const t=async()=>{await(await s())()};if(a.value){const e=matchMedia(a.value);e.matches?t():e.addEventListener("change",t,{once:!0})}},window.dispatchEvent(new Event("astro:media"));`;
var only_prebuilt_default = `(self.Astro=self.Astro||{}).only=t=>{(async()=>await(await t())())()},window.dispatchEvent(new Event("astro:only"));`;
var visible_prebuilt_default = `(self.Astro=self.Astro||{}).visible=(s,c,n)=>{const r=async()=>{await(await s())()};let i=new IntersectionObserver(e=>{for(const t of e)if(!!t.isIntersecting){i.disconnect(),r();break}});for(let e=0;e<n.children.length;e++){const t=n.children[e];i.observe(t)}},window.dispatchEvent(new Event("astro:visible"));`;
var astro_island_prebuilt_default = `var l;{const c={0:t=>t,1:t=>JSON.parse(t,o),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(JSON.parse(t,o)),5:t=>new Set(JSON.parse(t,o)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(JSON.parse(t)),9:t=>new Uint16Array(JSON.parse(t)),10:t=>new Uint32Array(JSON.parse(t))},o=(t,s)=>{if(t===""||!Array.isArray(s))return s;const[e,n]=s;return e in c?c[e](n):void 0};customElements.get("astro-island")||customElements.define("astro-island",(l=class extends HTMLElement{constructor(){super(...arguments);this.hydrate=()=>{if(!this.hydrator||this.parentElement&&this.parentElement.closest("astro-island[ssr]"))return;const s=this.querySelectorAll("astro-slot"),e={},n=this.querySelectorAll("template[data-astro-template]");for(const r of n){const i=r.closest(this.tagName);!i||!i.isSameNode(this)||(e[r.getAttribute("data-astro-template")||"default"]=r.innerHTML,r.remove())}for(const r of s){const i=r.closest(this.tagName);!i||!i.isSameNode(this)||(e[r.getAttribute("name")||"default"]=r.innerHTML)}const a=this.hasAttribute("props")?JSON.parse(this.getAttribute("props"),o):{};this.hydrator(this)(this.Component,a,e,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),window.removeEventListener("astro:hydrate",this.hydrate),window.dispatchEvent(new CustomEvent("astro:hydrate"))}}connectedCallback(){!this.hasAttribute("await-children")||this.firstChild?this.childrenConnectedCallback():new MutationObserver((s,e)=>{e.disconnect(),this.childrenConnectedCallback()}).observe(this,{childList:!0})}async childrenConnectedCallback(){window.addEventListener("astro:hydrate",this.hydrate);let s=this.getAttribute("before-hydration-url");s&&await import(s),this.start()}start(){const s=JSON.parse(this.getAttribute("opts")),e=this.getAttribute("client");if(Astro[e]===void 0){window.addEventListener(\`astro:\${e}\`,()=>this.start(),{once:!0});return}Astro[e](async()=>{const n=this.getAttribute("renderer-url"),[a,{default:r}]=await Promise.all([import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),i=this.getAttribute("component-export")||"default";if(!i.includes("."))this.Component=a[i];else{this.Component=a;for(const d of i.split("."))this.Component=this.Component[d]}return this.hydrator=r,this.hydrate},s,this)}attributeChangedCallback(){this.hydrator&&this.hydrate()}},l.observedAttributes=["props"],l))}`;
function determineIfNeedsHydrationScript(result) {
  if (result._metadata.hasHydrationScript) {
    return false;
  }
  return result._metadata.hasHydrationScript = true;
}
var hydrationScripts = {
  idle: idle_prebuilt_default,
  load: load_prebuilt_default,
  only: only_prebuilt_default,
  media: media_prebuilt_default,
  visible: visible_prebuilt_default
};
function determinesIfNeedsDirectiveScript(result, directive) {
  if (result._metadata.hasDirectives.has(directive)) {
    return false;
  }
  result._metadata.hasDirectives.add(directive);
  return true;
}
function getDirectiveScriptText(directive) {
  if (!(directive in hydrationScripts)) {
    throw new Error(`Unknown directive: ${directive}`);
  }
  const directiveScriptText = hydrationScripts[directive];
  return directiveScriptText;
}
function getPrescripts(type, directive) {
  switch (type) {
    case "both":
      return `<style>astro-island,astro-slot{display:contents}</style><script>${getDirectiveScriptText(directive) + astro_island_prebuilt_default}<\/script>`;
    case "directive":
      return `<script>${getDirectiveScriptText(directive)}<\/script>`;
  }
  return "";
}
var Fragment = Symbol.for("astro:fragment");
var Renderer = Symbol.for("astro:renderer");
var encoder = new TextEncoder();
var decoder = new TextDecoder();
function stringifyChunk(result, chunk) {
  switch (chunk.type) {
    case "directive": {
      const { hydration } = chunk;
      let needsHydrationScript = hydration && determineIfNeedsHydrationScript(result);
      let needsDirectiveScript = hydration && determinesIfNeedsDirectiveScript(result, hydration.directive);
      let prescriptType = needsHydrationScript ? "both" : needsDirectiveScript ? "directive" : null;
      if (prescriptType) {
        let prescripts = getPrescripts(prescriptType, hydration.directive);
        return markHTMLString(prescripts);
      } else {
        return "";
      }
    }
    default: {
      return chunk.toString();
    }
  }
}
var HTMLParts = class {
  constructor() {
    this.parts = "";
  }
  append(part, result) {
    if (ArrayBuffer.isView(part)) {
      this.parts += decoder.decode(part);
    } else {
      this.parts += stringifyChunk(result, part);
    }
  }
  toString() {
    return this.parts;
  }
  toArrayBuffer() {
    return encoder.encode(this.parts);
  }
};
function chunkToByteArray(result, chunk) {
  if (chunk instanceof Uint8Array) {
    return chunk;
  }
  return encoder.encode(stringifyChunk(result, chunk));
}
var ClientOnlyPlaceholder = "astro-client-only";
var skipAstroJSXCheck = /* @__PURE__ */ new WeakSet();
var originalConsoleError;
var consoleFilterRefs = 0;
async function renderJSX(result, vnode) {
  switch (true) {
    case vnode instanceof HTMLString:
      if (vnode.toString().trim() === "") {
        return "";
      }
      return vnode;
    case typeof vnode === "string":
      return markHTMLString(escapeHTML(vnode));
    case typeof vnode === "function":
      return vnode;
    case (!vnode && vnode !== 0):
      return "";
    case Array.isArray(vnode):
      return markHTMLString(
        (await Promise.all(vnode.map((v) => renderJSX(result, v)))).join("")
      );
  }
  if (isVNode(vnode)) {
    switch (true) {
      case !vnode.type: {
        throw new Error(`Unable to render ${result._metadata.pathname} because it contains an undefined Component!
Did you forget to import the component or is it possible there is a typo?`);
      }
      case vnode.type === Symbol.for("astro:fragment"):
        return renderJSX(result, vnode.props.children);
      case vnode.type.isAstroComponentFactory: {
        let props = {};
        let slots = {};
        for (const [key, value] of Object.entries(vnode.props ?? {})) {
          if (key === "children" || value && typeof value === "object" && value["$$slot"]) {
            slots[key === "children" ? "default" : key] = () => renderJSX(result, value);
          } else {
            props[key] = value;
          }
        }
        return markHTMLString(await renderToString(result, vnode.type, props, slots));
      }
      case (!vnode.type && vnode.type !== 0):
        return "";
      case (typeof vnode.type === "string" && vnode.type !== ClientOnlyPlaceholder):
        return markHTMLString(await renderElement$1(result, vnode.type, vnode.props ?? {}));
    }
    if (vnode.type) {
      let extractSlots2 = function(child) {
        if (Array.isArray(child)) {
          return child.map((c) => extractSlots2(c));
        }
        if (!isVNode(child)) {
          _slots2.default.push(child);
          return;
        }
        if ("slot" in child.props) {
          _slots2[child.props.slot] = [..._slots2[child.props.slot] ?? [], child];
          delete child.props.slot;
          return;
        }
        _slots2.default.push(child);
      };
      if (typeof vnode.type === "function" && vnode.type["astro:renderer"]) {
        skipAstroJSXCheck.add(vnode.type);
      }
      if (typeof vnode.type === "function" && vnode.props["server:root"]) {
        const output2 = await vnode.type(vnode.props ?? {});
        return await renderJSX(result, output2);
      }
      if (typeof vnode.type === "function" && !skipAstroJSXCheck.has(vnode.type)) {
        useConsoleFilter();
        try {
          const output2 = await vnode.type(vnode.props ?? {});
          if (output2 && output2[AstroJSX]) {
            return await renderJSX(result, output2);
          } else if (!output2) {
            return await renderJSX(result, output2);
          }
        } catch (e) {
          skipAstroJSXCheck.add(vnode.type);
        } finally {
          finishUsingConsoleFilter();
        }
      }
      const { children = null, ...props } = vnode.props ?? {};
      const _slots2 = {
        default: []
      };
      extractSlots2(children);
      for (const [key, value] of Object.entries(props)) {
        if (value["$$slot"]) {
          _slots2[key] = value;
          delete props[key];
        }
      }
      const slotPromises = [];
      const slots = {};
      for (const [key, value] of Object.entries(_slots2)) {
        slotPromises.push(
          renderJSX(result, value).then((output2) => {
            if (output2.toString().trim().length === 0)
              return;
            slots[key] = () => output2;
          })
        );
      }
      await Promise.all(slotPromises);
      let output;
      if (vnode.type === ClientOnlyPlaceholder && vnode.props["client:only"]) {
        output = await renderComponent(
          result,
          vnode.props["client:display-name"] ?? "",
          null,
          props,
          slots
        );
      } else {
        output = await renderComponent(
          result,
          typeof vnode.type === "function" ? vnode.type.name : vnode.type,
          vnode.type,
          props,
          slots
        );
      }
      if (typeof output !== "string" && Symbol.asyncIterator in output) {
        let parts = new HTMLParts();
        for await (const chunk of output) {
          parts.append(chunk, result);
        }
        return markHTMLString(parts.toString());
      } else {
        return markHTMLString(output);
      }
    }
  }
  return markHTMLString(`${vnode}`);
}
async function renderElement$1(result, tag, { children, ...props }) {
  return markHTMLString(
    `<${tag}${spreadAttributes(props)}${markHTMLString(
      (children == null || children == "") && voidElementNames.test(tag) ? `/>` : `>${children == null ? "" : await renderJSX(result, children)}</${tag}>`
    )}`
  );
}
function useConsoleFilter() {
  consoleFilterRefs++;
  if (!originalConsoleError) {
    originalConsoleError = console.error;
    try {
      console.error = filteredConsoleError;
    } catch (error2) {
    }
  }
}
function finishUsingConsoleFilter() {
  consoleFilterRefs--;
}
function filteredConsoleError(msg, ...rest) {
  if (consoleFilterRefs > 0 && typeof msg === "string") {
    const isKnownReactHookError = msg.includes("Warning: Invalid hook call.") && msg.includes("https://reactjs.org/link/invalid-hook-call");
    if (isKnownReactHookError)
      return;
  }
  originalConsoleError(msg, ...rest);
}
function appendForwardSlash(path) {
  return path.endsWith("/") ? path : path + "/";
}
function prependForwardSlash(path) {
  return path[0] === "/" ? path : "/" + path;
}
function removeLeadingForwardSlashWindows(path) {
  return path.startsWith("/") && path[2] === ":" ? path.substring(1) : path;
}
function trimSlashes(path) {
  return path.replace(/^\/|\/$/g, "");
}
function isString(path) {
  return typeof path === "string" || path instanceof String;
}
function joinPaths(...paths) {
  return paths.filter(isString).map(trimSlashes).join("/");
}
var Metadata = class {
  constructor(filePathname, opts) {
    this.modules = opts.modules;
    this.hoisted = opts.hoisted;
    this.hydratedComponents = opts.hydratedComponents;
    this.clientOnlyComponents = opts.clientOnlyComponents;
    this.hydrationDirectives = opts.hydrationDirectives;
    this.filePath = removeLeadingForwardSlashWindows(filePathname);
    this.mockURL = new URL(filePathname, "http://example.com");
    this.metadataCache = /* @__PURE__ */ new Map();
  }
  resolvePath(specifier) {
    if (specifier.startsWith(".")) {
      const url2 = new URL(specifier, this.mockURL);
      return removeLeadingForwardSlashWindows(decodeURI(url2.pathname));
    } else {
      return specifier;
    }
  }
  getPath(Component) {
    const metadata = this.getComponentMetadata(Component);
    return (metadata == null ? void 0 : metadata.componentUrl) || null;
  }
  getExport(Component) {
    const metadata = this.getComponentMetadata(Component);
    return (metadata == null ? void 0 : metadata.componentExport) || null;
  }
  getComponentMetadata(Component) {
    if (this.metadataCache.has(Component)) {
      return this.metadataCache.get(Component);
    }
    const metadata = this.findComponentMetadata(Component);
    this.metadataCache.set(Component, metadata);
    return metadata;
  }
  findComponentMetadata(Component) {
    const isCustomElement = typeof Component === "string";
    for (const { module, specifier } of this.modules) {
      const id = this.resolvePath(specifier);
      for (const [key, value] of Object.entries(module)) {
        if (isCustomElement) {
          if (key === "tagName" && Component === value) {
            return {
              componentExport: key,
              componentUrl: id
            };
          }
        } else if (Component === value) {
          return {
            componentExport: key,
            componentUrl: id
          };
        }
      }
    }
    return null;
  }
};
function createMetadata(filePathname, options) {
  return new Metadata(filePathname, options);
}
var PROP_TYPE = {
  Value: 0,
  JSON: 1,
  RegExp: 2,
  Date: 3,
  Map: 4,
  Set: 5,
  BigInt: 6,
  URL: 7,
  Uint8Array: 8,
  Uint16Array: 9,
  Uint32Array: 10
};
function serializeArray(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = value.map((v) => {
    return convertToSerializedForm(v, metadata, parents);
  });
  parents.delete(value);
  return serialized;
}
function serializeObject(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = Object.fromEntries(
    Object.entries(value).map(([k, v]) => {
      return [k, convertToSerializedForm(v, metadata, parents)];
    })
  );
  parents.delete(value);
  return serialized;
}
function convertToSerializedForm(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  const tag = Object.prototype.toString.call(value);
  switch (tag) {
    case "[object Date]": {
      return [PROP_TYPE.Date, value.toISOString()];
    }
    case "[object RegExp]": {
      return [PROP_TYPE.RegExp, value.source];
    }
    case "[object Map]": {
      return [
        PROP_TYPE.Map,
        JSON.stringify(serializeArray(Array.from(value), metadata, parents))
      ];
    }
    case "[object Set]": {
      return [
        PROP_TYPE.Set,
        JSON.stringify(serializeArray(Array.from(value), metadata, parents))
      ];
    }
    case "[object BigInt]": {
      return [PROP_TYPE.BigInt, value.toString()];
    }
    case "[object URL]": {
      return [PROP_TYPE.URL, value.toString()];
    }
    case "[object Array]": {
      return [PROP_TYPE.JSON, JSON.stringify(serializeArray(value, metadata, parents))];
    }
    case "[object Uint8Array]": {
      return [PROP_TYPE.Uint8Array, JSON.stringify(Array.from(value))];
    }
    case "[object Uint16Array]": {
      return [PROP_TYPE.Uint16Array, JSON.stringify(Array.from(value))];
    }
    case "[object Uint32Array]": {
      return [PROP_TYPE.Uint32Array, JSON.stringify(Array.from(value))];
    }
    default: {
      if (value !== null && typeof value === "object") {
        return [PROP_TYPE.Value, serializeObject(value, metadata, parents)];
      } else {
        return [PROP_TYPE.Value, value];
      }
    }
  }
}
function serializeProps(props, metadata) {
  const serialized = JSON.stringify(serializeObject(props, metadata));
  return serialized;
}
function serializeListValue(value) {
  const hash = {};
  push(value);
  return Object.keys(hash).join(" ");
  function push(item) {
    if (item && typeof item.forEach === "function")
      item.forEach(push);
    else if (item === Object(item))
      Object.keys(item).forEach((name) => {
        if (item[name])
          push(name);
      });
    else {
      item = item === false || item == null ? "" : String(item).trim();
      if (item) {
        item.split(/\s+/).forEach((name) => {
          hash[name] = true;
        });
      }
    }
  }
}
var HydrationDirectivesRaw = ["load", "idle", "media", "visible", "only"];
var HydrationDirectives = new Set(HydrationDirectivesRaw);
var HydrationDirectiveProps = new Set(HydrationDirectivesRaw.map((n) => `client:${n}`));
function extractDirectives(inputProps) {
  let extracted = {
    isPage: false,
    hydration: null,
    props: {}
  };
  for (const [key, value] of Object.entries(inputProps)) {
    if (key.startsWith("server:")) {
      if (key === "server:root") {
        extracted.isPage = true;
      }
    }
    if (key.startsWith("client:")) {
      if (!extracted.hydration) {
        extracted.hydration = {
          directive: "",
          value: "",
          componentUrl: "",
          componentExport: { value: "" }
        };
      }
      switch (key) {
        case "client:component-path": {
          extracted.hydration.componentUrl = value;
          break;
        }
        case "client:component-export": {
          extracted.hydration.componentExport.value = value;
          break;
        }
        case "client:component-hydration": {
          break;
        }
        case "client:display-name": {
          break;
        }
        default: {
          extracted.hydration.directive = key.split(":")[1];
          extracted.hydration.value = value;
          if (!HydrationDirectives.has(extracted.hydration.directive)) {
            throw new Error(
              `Error: invalid hydration directive "${key}". Supported hydration methods: ${Array.from(
                HydrationDirectiveProps
              ).join(", ")}`
            );
          }
          if (extracted.hydration.directive === "media" && typeof extracted.hydration.value !== "string") {
            throw new Error(
              'Error: Media query must be provided for "client:media", similar to client:media="(max-width: 600px)"'
            );
          }
          break;
        }
      }
    } else if (key === "class:list") {
      if (value) {
        extracted.props[key.slice(0, -5)] = serializeListValue(value);
      }
    } else {
      extracted.props[key] = value;
    }
  }
  return extracted;
}
async function generateHydrateScript(scriptOptions, metadata) {
  const { renderer, result, astroId, props, attrs } = scriptOptions;
  const { hydrate, componentUrl, componentExport } = metadata;
  if (!componentExport.value) {
    throw new Error(
      `Unable to resolve a valid export for "${metadata.displayName}"! Please open an issue at https://astro.build/issues!`
    );
  }
  const island = {
    children: "",
    props: {
      uid: astroId
    }
  };
  if (attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      island.props[key] = escapeHTML(value);
    }
  }
  island.props["component-url"] = await result.resolve(decodeURI(componentUrl));
  if (renderer.clientEntrypoint) {
    island.props["component-export"] = componentExport.value;
    island.props["renderer-url"] = await result.resolve(decodeURI(renderer.clientEntrypoint));
    island.props["props"] = escapeHTML(serializeProps(props, metadata));
  }
  island.props["ssr"] = "";
  island.props["client"] = hydrate;
  let beforeHydrationUrl = await result.resolve("astro:scripts/before-hydration.js");
  if (beforeHydrationUrl.length) {
    island.props["before-hydration-url"] = beforeHydrationUrl;
  }
  island.props["opts"] = escapeHTML(
    JSON.stringify({
      name: metadata.displayName,
      value: metadata.hydrateArgs || ""
    })
  );
  return island;
}
var SlotString = class extends HTMLString {
  constructor(content, instructions) {
    super(content);
    this.instructions = instructions;
  }
};
async function renderSlot(_result2, slotted, fallback) {
  if (slotted) {
    let iterator = renderChild(slotted);
    let content = "";
    let instructions = null;
    for await (const chunk of iterator) {
      if (chunk.type === "directive") {
        if (instructions === null) {
          instructions = [];
        }
        instructions.push(chunk);
      } else {
        content += chunk;
      }
    }
    return markHTMLString(new SlotString(content, instructions));
  }
  return fallback;
}
async function renderSlots(result, slots = {}) {
  let slotInstructions = null;
  let children = {};
  if (slots) {
    await Promise.all(
      Object.entries(slots).map(
        ([key, value]) => renderSlot(result, value).then((output) => {
          if (output.instructions) {
            if (slotInstructions === null) {
              slotInstructions = [];
            }
            slotInstructions.push(...output.instructions);
          }
          children[key] = output;
        })
      )
    );
  }
  return { slotInstructions, children };
}
async function* renderChild(child) {
  child = await child;
  if (child instanceof SlotString) {
    if (child.instructions) {
      yield* child.instructions;
    }
    yield child;
  } else if (isHTMLString(child)) {
    yield child;
  } else if (Array.isArray(child)) {
    for (const value of child) {
      yield markHTMLString(await renderChild(value));
    }
  } else if (typeof child === "function") {
    yield* renderChild(child());
  } else if (typeof child === "string") {
    yield markHTMLString(escapeHTML(child));
  } else if (!child && child !== 0)
    ;
  else if (child instanceof AstroComponent || Object.prototype.toString.call(child) === "[object AstroComponent]") {
    yield* renderAstroComponent(child);
  } else if (ArrayBuffer.isView(child)) {
    yield child;
  } else if (typeof child === "object" && (Symbol.asyncIterator in child || Symbol.iterator in child)) {
    yield* child;
  } else {
    yield child;
  }
}
function validateComponentProps(props, displayName) {
  var _a2;
  if (((_a2 = Object.assign({ "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true }, { _: process.env._ })) == null ? void 0 : _a2.DEV) && props != null) {
    for (const prop of Object.keys(props)) {
      if (HydrationDirectiveProps.has(prop)) {
        console.warn(
          `You are attempting to render <${displayName} ${prop} />, but ${displayName} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`
        );
      }
    }
  }
}
var AstroComponent = class {
  constructor(htmlParts, expressions) {
    this.htmlParts = htmlParts;
    this.expressions = expressions;
  }
  get [Symbol.toStringTag]() {
    return "AstroComponent";
  }
  async *[Symbol.asyncIterator]() {
    const { htmlParts, expressions } = this;
    for (let i = 0; i < htmlParts.length; i++) {
      const html2 = htmlParts[i];
      const expression = expressions[i];
      yield markHTMLString(html2);
      yield* renderChild(expression);
    }
  }
};
function isAstroComponent(obj) {
  return typeof obj === "object" && Object.prototype.toString.call(obj) === "[object AstroComponent]";
}
function isAstroComponentFactory(obj) {
  return obj == null ? false : !!obj.isAstroComponentFactory;
}
async function* renderAstroComponent(component) {
  for await (const value of component) {
    if (value || value === 0) {
      for await (const chunk of renderChild(value)) {
        switch (chunk.type) {
          case "directive": {
            yield chunk;
            break;
          }
          default: {
            yield markHTMLString(chunk);
            break;
          }
        }
      }
    }
  }
}
async function renderToString(result, componentFactory, props, children) {
  const Component = await componentFactory(result, props, children);
  if (!isAstroComponent(Component)) {
    const response = Component;
    throw response;
  }
  let parts = new HTMLParts();
  for await (const chunk of renderAstroComponent(Component)) {
    parts.append(chunk, result);
  }
  return parts.toString();
}
async function renderToIterable(result, componentFactory, displayName, props, children) {
  validateComponentProps(props, displayName);
  const Component = await componentFactory(result, props, children);
  if (!isAstroComponent(Component)) {
    console.warn(
      `Returning a Response is only supported inside of page components. Consider refactoring this logic into something like a function that can be used in the page.`
    );
    const response = Component;
    throw response;
  }
  return renderAstroComponent(Component);
}
async function renderTemplate(htmlParts, ...expressions) {
  return new AstroComponent(htmlParts, expressions);
}
var dictionary = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";
var binary = dictionary.length;
function bitwise(str) {
  let hash = 0;
  if (str.length === 0)
    return hash;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    hash = (hash << 5) - hash + ch;
    hash = hash & hash;
  }
  return hash;
}
function shorthash(text) {
  let num;
  let result = "";
  let integer = bitwise(text);
  const sign = integer < 0 ? "Z" : "";
  integer = Math.abs(integer);
  while (integer >= binary) {
    num = integer % binary;
    integer = Math.floor(integer / binary);
    result = dictionary[num] + result;
  }
  if (integer > 0) {
    result = dictionary[integer] + result;
  }
  return sign + result;
}
var voidElementNames = /^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i;
var htmlBooleanAttributes = /^(allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i;
var htmlEnumAttributes = /^(contenteditable|draggable|spellcheck|value)$/i;
var svgEnumAttributes = /^(autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i;
var STATIC_DIRECTIVES = /* @__PURE__ */ new Set(["set:html", "set:text"]);
var toIdent = (k) => k.trim().replace(/(?:(?!^)\b\w|\s+|[^\w]+)/g, (match, index) => {
  if (/[^\w]|\s/.test(match))
    return "";
  return index === 0 ? match : match.toUpperCase();
});
var toAttributeString = (value, shouldEscape = true) => shouldEscape ? String(value).replace(/&/g, "&#38;").replace(/"/g, "&#34;") : value;
var kebab = (k) => k.toLowerCase() === k ? k : k.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
var toStyleString = (obj) => Object.entries(obj).map(([k, v]) => `${kebab(k)}:${v}`).join(";");
function defineScriptVars(vars) {
  let output = "";
  for (const [key, value] of Object.entries(vars)) {
    output += `const ${toIdent(key)} = ${JSON.stringify(value)};
`;
  }
  return markHTMLString(output);
}
function formatList(values) {
  if (values.length === 1) {
    return values[0];
  }
  return `${values.slice(0, -1).join(", ")} or ${values[values.length - 1]}`;
}
function addAttribute(value, key, shouldEscape = true) {
  if (value == null) {
    return "";
  }
  if (value === false) {
    if (htmlEnumAttributes.test(key) || svgEnumAttributes.test(key)) {
      return markHTMLString(` ${key}="false"`);
    }
    return "";
  }
  if (STATIC_DIRECTIVES.has(key)) {
    console.warn(`[astro] The "${key}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${key}={value}\`) instead of the dynamic spread syntax (\`{...{ "${key}": value }}\`).`);
    return "";
  }
  if (key === "class:list") {
    const listValue = toAttributeString(serializeListValue(value), shouldEscape);
    if (listValue === "") {
      return "";
    }
    return markHTMLString(` ${key.slice(0, -5)}="${listValue}"`);
  }
  if (key === "style" && !(value instanceof HTMLString) && typeof value === "object") {
    return markHTMLString(` ${key}="${toAttributeString(toStyleString(value), shouldEscape)}"`);
  }
  if (key === "className") {
    return markHTMLString(` class="${toAttributeString(value, shouldEscape)}"`);
  }
  if (value === true && (key.startsWith("data-") || htmlBooleanAttributes.test(key))) {
    return markHTMLString(` ${key}`);
  } else {
    return markHTMLString(` ${key}="${toAttributeString(value, shouldEscape)}"`);
  }
}
function internalSpreadAttributes(values, shouldEscape = true) {
  let output = "";
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, shouldEscape);
  }
  return markHTMLString(output);
}
function renderElement(name, { props: _props, children = "" }, shouldEscape = true) {
  const { lang: _, "data-astro-id": astroId, "define:vars": defineVars, ...props } = _props;
  if (defineVars) {
    if (name === "style") {
      delete props["is:global"];
      delete props["is:scoped"];
    }
    if (name === "script") {
      delete props.hoist;
      children = defineScriptVars(defineVars) + "\n" + children;
    }
  }
  if ((children == null || children == "") && voidElementNames.test(name)) {
    return `<${name}${internalSpreadAttributes(props, shouldEscape)} />`;
  }
  return `<${name}${internalSpreadAttributes(props, shouldEscape)}>${children}</${name}>`;
}
function componentIsHTMLElement(Component) {
  return typeof HTMLElement !== "undefined" && HTMLElement.isPrototypeOf(Component);
}
async function renderHTMLElement(result, constructor, props, slots) {
  const name = getHTMLElementName(constructor);
  let attrHTML = "";
  for (const attr in props) {
    attrHTML += ` ${attr}="${toAttributeString(await props[attr])}"`;
  }
  return markHTMLString(
    `<${name}${attrHTML}>${await renderSlot(result, slots == null ? void 0 : slots.default)}</${name}>`
  );
}
function getHTMLElementName(constructor) {
  const definedName = customElements.getName(constructor);
  if (definedName)
    return definedName;
  const assignedName = constructor.name.replace(/^HTML|Element$/g, "").replace(/[A-Z]/g, "-$&").toLowerCase().replace(/^-/, "html-");
  return assignedName;
}
var rendererAliases = /* @__PURE__ */ new Map([["solid", "solid-js"]]);
function guessRenderers(componentUrl) {
  const extname2 = componentUrl == null ? void 0 : componentUrl.split(".").pop();
  switch (extname2) {
    case "svelte":
      return ["@astrojs/svelte"];
    case "vue":
      return ["@astrojs/vue"];
    case "jsx":
    case "tsx":
      return ["@astrojs/react", "@astrojs/preact", "@astrojs/vue (jsx)"];
    default:
      return ["@astrojs/react", "@astrojs/preact", "@astrojs/vue", "@astrojs/svelte"];
  }
}
function getComponentType(Component) {
  if (Component === Fragment) {
    return "fragment";
  }
  if (Component && typeof Component === "object" && Component["astro:html"]) {
    return "html";
  }
  if (isAstroComponentFactory(Component)) {
    return "astro-factory";
  }
  return "unknown";
}
async function renderComponent(result, displayName, Component, _props, slots = {}) {
  var _a2;
  Component = await Component;
  switch (getComponentType(Component)) {
    case "fragment": {
      const children2 = await renderSlot(result, slots == null ? void 0 : slots.default);
      if (children2 == null) {
        return children2;
      }
      return markHTMLString(children2);
    }
    case "html": {
      const { slotInstructions: slotInstructions2, children: children2 } = await renderSlots(result, slots);
      const html22 = Component.render({ slots: children2 });
      const hydrationHtml = slotInstructions2 ? slotInstructions2.map((instr) => stringifyChunk(result, instr)).join("") : "";
      return markHTMLString(hydrationHtml + html22);
    }
    case "astro-factory": {
      async function* renderAstroComponentInline() {
        let iterable = await renderToIterable(result, Component, displayName, _props, slots);
        yield* iterable;
      }
      return renderAstroComponentInline();
    }
  }
  if (!Component && !_props["client:only"]) {
    throw new Error(
      `Unable to render ${displayName} because it is ${Component}!
Did you forget to import the component or is it possible there is a typo?`
    );
  }
  const { renderers: renderers2 } = result._metadata;
  const metadata = { displayName };
  const { hydration, isPage, props } = extractDirectives(_props);
  let html2 = "";
  let attrs = void 0;
  if (hydration) {
    metadata.hydrate = hydration.directive;
    metadata.hydrateArgs = hydration.value;
    metadata.componentExport = hydration.componentExport;
    metadata.componentUrl = hydration.componentUrl;
  }
  const probableRendererNames = guessRenderers(metadata.componentUrl);
  if (Array.isArray(renderers2) && renderers2.length === 0 && typeof Component !== "string" && !componentIsHTMLElement(Component)) {
    const message = `Unable to render ${metadata.displayName}!

There are no \`integrations\` set in your \`astro.config.mjs\` file.
Did you mean to add ${formatList(probableRendererNames.map((r) => "`" + r + "`"))}?`;
    throw new Error(message);
  }
  const { children, slotInstructions } = await renderSlots(result, slots);
  let renderer;
  if (metadata.hydrate !== "only") {
    if (Component && Component[Renderer]) {
      const rendererName = Component[Renderer];
      renderer = renderers2.find(({ name }) => name === rendererName);
    }
    if (!renderer) {
      let error2;
      for (const r of renderers2) {
        try {
          if (await r.ssr.check.call({ result }, Component, props, children)) {
            renderer = r;
            break;
          }
        } catch (e) {
          error2 ?? (error2 = e);
        }
      }
      if (!renderer && error2) {
        throw error2;
      }
    }
    if (!renderer && typeof HTMLElement === "function" && componentIsHTMLElement(Component)) {
      const output = renderHTMLElement(result, Component, _props, slots);
      return output;
    }
  } else {
    if (metadata.hydrateArgs) {
      const passedName = metadata.hydrateArgs;
      const rendererName = rendererAliases.has(passedName) ? rendererAliases.get(passedName) : passedName;
      renderer = renderers2.find(
        ({ name }) => name === `@astrojs/${rendererName}` || name === rendererName
      );
    }
    if (!renderer && renderers2.length === 1) {
      renderer = renderers2[0];
    }
    if (!renderer) {
      const extname2 = (_a2 = metadata.componentUrl) == null ? void 0 : _a2.split(".").pop();
      renderer = renderers2.filter(
        ({ name }) => name === `@astrojs/${extname2}` || name === extname2
      )[0];
    }
  }
  if (!renderer) {
    if (metadata.hydrate === "only") {
      throw new Error(`Unable to render ${metadata.displayName}!

Using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.
Did you mean to pass <${metadata.displayName} client:only="${probableRendererNames.map((r) => r.replace("@astrojs/", "")).join("|")}" />
`);
    } else if (typeof Component !== "string") {
      const matchingRenderers = renderers2.filter((r) => probableRendererNames.includes(r.name));
      const plural = renderers2.length > 1;
      if (matchingRenderers.length === 0) {
        throw new Error(`Unable to render ${metadata.displayName}!

There ${plural ? "are" : "is"} ${renderers2.length} renderer${plural ? "s" : ""} configured in your \`astro.config.mjs\` file,
but ${plural ? "none were" : "it was not"} able to server-side render ${metadata.displayName}.

Did you mean to enable ${formatList(probableRendererNames.map((r) => "`" + r + "`"))}?`);
      } else if (matchingRenderers.length === 1) {
        renderer = matchingRenderers[0];
        ({ html: html2, attrs } = await renderer.ssr.renderToStaticMarkup.call(
          { result },
          Component,
          props,
          children,
          metadata
        ));
      } else {
        throw new Error(`Unable to render ${metadata.displayName}!

This component likely uses ${formatList(probableRendererNames)},
but Astro encountered an error during server-side rendering.

Please ensure that ${metadata.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`);
      }
    }
  } else {
    if (metadata.hydrate === "only") {
      html2 = await renderSlot(result, slots == null ? void 0 : slots.fallback);
    } else {
      ({ html: html2, attrs } = await renderer.ssr.renderToStaticMarkup.call(
        { result },
        Component,
        props,
        children,
        metadata
      ));
    }
  }
  if (renderer && !renderer.clientEntrypoint && renderer.name !== "@astrojs/lit" && metadata.hydrate) {
    throw new Error(
      `${metadata.displayName} component has a \`client:${metadata.hydrate}\` directive, but no client entrypoint was provided by ${renderer.name}!`
    );
  }
  if (!html2 && typeof Component === "string") {
    const childSlots = Object.values(children).join("");
    const iterable = renderAstroComponent(
      await renderTemplate`<${Component}${internalSpreadAttributes(props)}${markHTMLString(
        childSlots === "" && voidElementNames.test(Component) ? `/>` : `>${childSlots}</${Component}>`
      )}`
    );
    html2 = "";
    for await (const chunk of iterable) {
      html2 += chunk;
    }
  }
  if (!hydration) {
    return async function* () {
      if (slotInstructions) {
        yield* slotInstructions;
      }
      if (isPage || (renderer == null ? void 0 : renderer.name) === "astro:jsx") {
        yield html2;
      } else {
        yield markHTMLString(html2.replace(/\<\/?astro-slot\>/g, ""));
      }
    }();
  }
  const astroId = shorthash(
    `<!--${metadata.componentExport.value}:${metadata.componentUrl}-->
${html2}
${serializeProps(
      props,
      metadata
    )}`
  );
  const island = await generateHydrateScript(
    { renderer, result, astroId, props, attrs },
    metadata
  );
  let unrenderedSlots = [];
  if (html2) {
    if (Object.keys(children).length > 0) {
      for (const key of Object.keys(children)) {
        if (!html2.includes(key === "default" ? `<astro-slot>` : `<astro-slot name="${key}">`)) {
          unrenderedSlots.push(key);
        }
      }
    }
  } else {
    unrenderedSlots = Object.keys(children);
  }
  const template = unrenderedSlots.length > 0 ? unrenderedSlots.map(
    (key) => `<template data-astro-template${key !== "default" ? `="${key}"` : ""}>${children[key]}</template>`
  ).join("") : "";
  island.children = `${html2 ?? ""}${template}`;
  if (island.children) {
    island.props["await-children"] = "";
  }
  async function* renderAll() {
    if (slotInstructions) {
      yield* slotInstructions;
    }
    yield { type: "directive", hydration, result };
    yield markHTMLString(renderElement("astro-island", island, false));
  }
  return renderAll();
}
var uniqueElements = (item, index, all) => {
  const props = JSON.stringify(item.props);
  const children = item.children;
  return index === all.findIndex((i) => JSON.stringify(i.props) === props && i.children == children);
};
function renderHead(result) {
  result._metadata.hasRenderedHead = true;
  const styles = Array.from(result.styles).filter(uniqueElements).map((style) => renderElement("style", style));
  result.styles.clear();
  const scripts = Array.from(result.scripts).filter(uniqueElements).map((script, i) => {
    return renderElement("script", script, false);
  });
  const links = Array.from(result.links).filter(uniqueElements).map((link) => renderElement("link", link, false));
  return markHTMLString(links.join("\n") + styles.join("\n") + scripts.join("\n"));
}
async function* maybeRenderHead(result) {
  if (result._metadata.hasRenderedHead) {
    return;
  }
  yield renderHead(result);
}
var __accessCheck$2 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$2 = (obj, member, getter) => {
  __accessCheck$2(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$2 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$2 = (obj, member, value, setter) => {
  __accessCheck$2(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var isNodeJS = typeof process === "object" && Object.prototype.toString.call(process) === "[object process]";
var StreamingCompatibleResponse;
function createResponseClass() {
  var _isStream, _body, _a2;
  StreamingCompatibleResponse = (_a2 = class extends Response {
    constructor(body, init2) {
      let isStream = body instanceof ReadableStream;
      super(isStream ? null : body, init2);
      __privateAdd$2(this, _isStream, void 0);
      __privateAdd$2(this, _body, void 0);
      __privateSet$2(this, _isStream, isStream);
      __privateSet$2(this, _body, body);
    }
    get body() {
      return __privateGet$2(this, _body);
    }
    async text() {
      if (__privateGet$2(this, _isStream) && isNodeJS) {
        let decoder2 = new TextDecoder();
        let body = __privateGet$2(this, _body);
        let out = "";
        for await (let chunk of body) {
          out += decoder2.decode(chunk);
        }
        return out;
      }
      return super.text();
    }
    async arrayBuffer() {
      if (__privateGet$2(this, _isStream) && isNodeJS) {
        let body = __privateGet$2(this, _body);
        let chunks = [];
        let len = 0;
        for await (let chunk of body) {
          chunks.push(chunk);
          len += chunk.length;
        }
        let ab = new Uint8Array(len);
        let offset = 0;
        for (const chunk of chunks) {
          ab.set(chunk, offset);
          offset += chunk.length;
        }
        return ab;
      }
      return super.arrayBuffer();
    }
  }, _isStream = /* @__PURE__ */ new WeakMap(), _body = /* @__PURE__ */ new WeakMap(), _a2);
  return StreamingCompatibleResponse;
}
var createResponse = isNodeJS ? (body, init2) => {
  if (typeof body === "string" || ArrayBuffer.isView(body)) {
    return new Response(body, init2);
  }
  if (typeof StreamingCompatibleResponse === "undefined") {
    return new (createResponseClass())(body, init2);
  }
  return new StreamingCompatibleResponse(body, init2);
} : (body, init2) => new Response(body, init2);
var needsHeadRenderingSymbol = Symbol.for("astro.needsHeadRendering");
function nonAstroPageNeedsHeadInjection(pageComponent) {
  return needsHeadRenderingSymbol in pageComponent && !!pageComponent[needsHeadRenderingSymbol];
}
async function iterableToHTMLBytes(result, iterable, onDocTypeInjection) {
  const parts = new HTMLParts();
  let i = 0;
  for await (const chunk of iterable) {
    if (isHTMLString(chunk)) {
      if (i === 0) {
        i++;
        if (!/<!doctype html/i.test(String(chunk))) {
          parts.append("<!DOCTYPE html>\n", result);
          if (onDocTypeInjection) {
            await onDocTypeInjection(parts);
          }
        }
      }
    }
    parts.append(chunk, result);
  }
  return parts.toArrayBuffer();
}
async function renderPage$1(result, componentFactory, props, children, streaming) {
  if (!isAstroComponentFactory(componentFactory)) {
    const pageProps = { ...props ?? {}, "server:root": true };
    const output = await renderComponent(
      result,
      componentFactory.name,
      componentFactory,
      pageProps,
      null
    );
    const bytes = await iterableToHTMLBytes(result, output, async (parts) => {
      if (nonAstroPageNeedsHeadInjection(componentFactory)) {
        for await (let chunk of maybeRenderHead(result)) {
          parts.append(chunk, result);
        }
      }
    });
    return new Response(bytes, {
      headers: new Headers([
        ["Content-Type", "text/html; charset=utf-8"],
        ["Content-Length", bytes.byteLength.toString()]
      ])
    });
  }
  const factoryReturnValue = await componentFactory(result, props, children);
  if (isAstroComponent(factoryReturnValue)) {
    let iterable = renderAstroComponent(factoryReturnValue);
    let init2 = result.response;
    let headers = new Headers(init2.headers);
    let body;
    if (streaming) {
      body = new ReadableStream({
        start(controller) {
          async function read() {
            let i = 0;
            try {
              for await (const chunk of iterable) {
                if (isHTMLString(chunk)) {
                  if (i === 0) {
                    if (!/<!doctype html/i.test(String(chunk))) {
                      controller.enqueue(encoder.encode("<!DOCTYPE html>\n"));
                    }
                  }
                }
                const bytes = chunkToByteArray(result, chunk);
                controller.enqueue(bytes);
                i++;
              }
              controller.close();
            } catch (e) {
              controller.error(e);
            }
          }
          read();
        }
      });
    } else {
      body = await iterableToHTMLBytes(result, iterable);
      headers.set("Content-Length", body.byteLength.toString());
    }
    let response = createResponse(body, { ...init2, headers });
    return response;
  }
  if (!(factoryReturnValue instanceof Response)) {
    throw new Error("Only instance of Response can be returned from an Astro file");
  }
  return factoryReturnValue;
}
function createComponent(cb) {
  cb.isAstroComponentFactory = true;
  return cb;
}
function __astro_tag_component__(Component, rendererName) {
  if (!Component)
    return;
  if (typeof Component !== "function")
    return;
  Object.defineProperty(Component, Renderer, {
    value: rendererName,
    enumerable: false,
    writable: false
  });
}
function spreadAttributes(values, _name, { class: scopedClassName } = {}) {
  let output = "";
  if (scopedClassName) {
    if (typeof values.class !== "undefined") {
      values.class += ` ${scopedClassName}`;
    } else if (typeof values["class:list"] !== "undefined") {
      values["class:list"] = [values["class:list"], scopedClassName];
    } else {
      values.class = scopedClassName;
    }
  }
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, true);
  }
  return markHTMLString(output);
}
var FORCE_COLOR;
var NODE_DISABLE_COLORS;
var NO_COLOR;
var TERM;
var isTTY = true;
if (typeof process !== "undefined") {
  ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});
  isTTY = process.stdout && process.stdout.isTTY;
}
var $ = {
  enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY)
};
function init(x, y) {
  let rgx = new RegExp(`\\x1b\\[${y}m`, "g");
  let open = `\x1B[${x}m`, close = `\x1B[${y}m`;
  return function(txt) {
    if (!$.enabled || txt == null)
      return txt;
    return open + (!!~("" + txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
  };
}
var reset = init(0, 0);
var bold = init(1, 22);
var dim = init(2, 22);
var red = init(31, 39);
var yellow = init(33, 39);
var cyan = init(36, 39);
var eastasianwidth = { exports: {} };
(function(module) {
  var eaw = {};
  {
    module.exports = eaw;
  }
  eaw.eastAsianWidth = function(character) {
    var x = character.charCodeAt(0);
    var y = character.length == 2 ? character.charCodeAt(1) : 0;
    var codePoint = x;
    if (55296 <= x && x <= 56319 && (56320 <= y && y <= 57343)) {
      x &= 1023;
      y &= 1023;
      codePoint = x << 10 | y;
      codePoint += 65536;
    }
    if (12288 == codePoint || 65281 <= codePoint && codePoint <= 65376 || 65504 <= codePoint && codePoint <= 65510) {
      return "F";
    }
    if (8361 == codePoint || 65377 <= codePoint && codePoint <= 65470 || 65474 <= codePoint && codePoint <= 65479 || 65482 <= codePoint && codePoint <= 65487 || 65490 <= codePoint && codePoint <= 65495 || 65498 <= codePoint && codePoint <= 65500 || 65512 <= codePoint && codePoint <= 65518) {
      return "H";
    }
    if (4352 <= codePoint && codePoint <= 4447 || 4515 <= codePoint && codePoint <= 4519 || 4602 <= codePoint && codePoint <= 4607 || 9001 <= codePoint && codePoint <= 9002 || 11904 <= codePoint && codePoint <= 11929 || 11931 <= codePoint && codePoint <= 12019 || 12032 <= codePoint && codePoint <= 12245 || 12272 <= codePoint && codePoint <= 12283 || 12289 <= codePoint && codePoint <= 12350 || 12353 <= codePoint && codePoint <= 12438 || 12441 <= codePoint && codePoint <= 12543 || 12549 <= codePoint && codePoint <= 12589 || 12593 <= codePoint && codePoint <= 12686 || 12688 <= codePoint && codePoint <= 12730 || 12736 <= codePoint && codePoint <= 12771 || 12784 <= codePoint && codePoint <= 12830 || 12832 <= codePoint && codePoint <= 12871 || 12880 <= codePoint && codePoint <= 13054 || 13056 <= codePoint && codePoint <= 19903 || 19968 <= codePoint && codePoint <= 42124 || 42128 <= codePoint && codePoint <= 42182 || 43360 <= codePoint && codePoint <= 43388 || 44032 <= codePoint && codePoint <= 55203 || 55216 <= codePoint && codePoint <= 55238 || 55243 <= codePoint && codePoint <= 55291 || 63744 <= codePoint && codePoint <= 64255 || 65040 <= codePoint && codePoint <= 65049 || 65072 <= codePoint && codePoint <= 65106 || 65108 <= codePoint && codePoint <= 65126 || 65128 <= codePoint && codePoint <= 65131 || 110592 <= codePoint && codePoint <= 110593 || 127488 <= codePoint && codePoint <= 127490 || 127504 <= codePoint && codePoint <= 127546 || 127552 <= codePoint && codePoint <= 127560 || 127568 <= codePoint && codePoint <= 127569 || 131072 <= codePoint && codePoint <= 194367 || 177984 <= codePoint && codePoint <= 196605 || 196608 <= codePoint && codePoint <= 262141) {
      return "W";
    }
    if (32 <= codePoint && codePoint <= 126 || 162 <= codePoint && codePoint <= 163 || 165 <= codePoint && codePoint <= 166 || 172 == codePoint || 175 == codePoint || 10214 <= codePoint && codePoint <= 10221 || 10629 <= codePoint && codePoint <= 10630) {
      return "Na";
    }
    if (161 == codePoint || 164 == codePoint || 167 <= codePoint && codePoint <= 168 || 170 == codePoint || 173 <= codePoint && codePoint <= 174 || 176 <= codePoint && codePoint <= 180 || 182 <= codePoint && codePoint <= 186 || 188 <= codePoint && codePoint <= 191 || 198 == codePoint || 208 == codePoint || 215 <= codePoint && codePoint <= 216 || 222 <= codePoint && codePoint <= 225 || 230 == codePoint || 232 <= codePoint && codePoint <= 234 || 236 <= codePoint && codePoint <= 237 || 240 == codePoint || 242 <= codePoint && codePoint <= 243 || 247 <= codePoint && codePoint <= 250 || 252 == codePoint || 254 == codePoint || 257 == codePoint || 273 == codePoint || 275 == codePoint || 283 == codePoint || 294 <= codePoint && codePoint <= 295 || 299 == codePoint || 305 <= codePoint && codePoint <= 307 || 312 == codePoint || 319 <= codePoint && codePoint <= 322 || 324 == codePoint || 328 <= codePoint && codePoint <= 331 || 333 == codePoint || 338 <= codePoint && codePoint <= 339 || 358 <= codePoint && codePoint <= 359 || 363 == codePoint || 462 == codePoint || 464 == codePoint || 466 == codePoint || 468 == codePoint || 470 == codePoint || 472 == codePoint || 474 == codePoint || 476 == codePoint || 593 == codePoint || 609 == codePoint || 708 == codePoint || 711 == codePoint || 713 <= codePoint && codePoint <= 715 || 717 == codePoint || 720 == codePoint || 728 <= codePoint && codePoint <= 731 || 733 == codePoint || 735 == codePoint || 768 <= codePoint && codePoint <= 879 || 913 <= codePoint && codePoint <= 929 || 931 <= codePoint && codePoint <= 937 || 945 <= codePoint && codePoint <= 961 || 963 <= codePoint && codePoint <= 969 || 1025 == codePoint || 1040 <= codePoint && codePoint <= 1103 || 1105 == codePoint || 8208 == codePoint || 8211 <= codePoint && codePoint <= 8214 || 8216 <= codePoint && codePoint <= 8217 || 8220 <= codePoint && codePoint <= 8221 || 8224 <= codePoint && codePoint <= 8226 || 8228 <= codePoint && codePoint <= 8231 || 8240 == codePoint || 8242 <= codePoint && codePoint <= 8243 || 8245 == codePoint || 8251 == codePoint || 8254 == codePoint || 8308 == codePoint || 8319 == codePoint || 8321 <= codePoint && codePoint <= 8324 || 8364 == codePoint || 8451 == codePoint || 8453 == codePoint || 8457 == codePoint || 8467 == codePoint || 8470 == codePoint || 8481 <= codePoint && codePoint <= 8482 || 8486 == codePoint || 8491 == codePoint || 8531 <= codePoint && codePoint <= 8532 || 8539 <= codePoint && codePoint <= 8542 || 8544 <= codePoint && codePoint <= 8555 || 8560 <= codePoint && codePoint <= 8569 || 8585 == codePoint || 8592 <= codePoint && codePoint <= 8601 || 8632 <= codePoint && codePoint <= 8633 || 8658 == codePoint || 8660 == codePoint || 8679 == codePoint || 8704 == codePoint || 8706 <= codePoint && codePoint <= 8707 || 8711 <= codePoint && codePoint <= 8712 || 8715 == codePoint || 8719 == codePoint || 8721 == codePoint || 8725 == codePoint || 8730 == codePoint || 8733 <= codePoint && codePoint <= 8736 || 8739 == codePoint || 8741 == codePoint || 8743 <= codePoint && codePoint <= 8748 || 8750 == codePoint || 8756 <= codePoint && codePoint <= 8759 || 8764 <= codePoint && codePoint <= 8765 || 8776 == codePoint || 8780 == codePoint || 8786 == codePoint || 8800 <= codePoint && codePoint <= 8801 || 8804 <= codePoint && codePoint <= 8807 || 8810 <= codePoint && codePoint <= 8811 || 8814 <= codePoint && codePoint <= 8815 || 8834 <= codePoint && codePoint <= 8835 || 8838 <= codePoint && codePoint <= 8839 || 8853 == codePoint || 8857 == codePoint || 8869 == codePoint || 8895 == codePoint || 8978 == codePoint || 9312 <= codePoint && codePoint <= 9449 || 9451 <= codePoint && codePoint <= 9547 || 9552 <= codePoint && codePoint <= 9587 || 9600 <= codePoint && codePoint <= 9615 || 9618 <= codePoint && codePoint <= 9621 || 9632 <= codePoint && codePoint <= 9633 || 9635 <= codePoint && codePoint <= 9641 || 9650 <= codePoint && codePoint <= 9651 || 9654 <= codePoint && codePoint <= 9655 || 9660 <= codePoint && codePoint <= 9661 || 9664 <= codePoint && codePoint <= 9665 || 9670 <= codePoint && codePoint <= 9672 || 9675 == codePoint || 9678 <= codePoint && codePoint <= 9681 || 9698 <= codePoint && codePoint <= 9701 || 9711 == codePoint || 9733 <= codePoint && codePoint <= 9734 || 9737 == codePoint || 9742 <= codePoint && codePoint <= 9743 || 9748 <= codePoint && codePoint <= 9749 || 9756 == codePoint || 9758 == codePoint || 9792 == codePoint || 9794 == codePoint || 9824 <= codePoint && codePoint <= 9825 || 9827 <= codePoint && codePoint <= 9829 || 9831 <= codePoint && codePoint <= 9834 || 9836 <= codePoint && codePoint <= 9837 || 9839 == codePoint || 9886 <= codePoint && codePoint <= 9887 || 9918 <= codePoint && codePoint <= 9919 || 9924 <= codePoint && codePoint <= 9933 || 9935 <= codePoint && codePoint <= 9953 || 9955 == codePoint || 9960 <= codePoint && codePoint <= 9983 || 10045 == codePoint || 10071 == codePoint || 10102 <= codePoint && codePoint <= 10111 || 11093 <= codePoint && codePoint <= 11097 || 12872 <= codePoint && codePoint <= 12879 || 57344 <= codePoint && codePoint <= 63743 || 65024 <= codePoint && codePoint <= 65039 || 65533 == codePoint || 127232 <= codePoint && codePoint <= 127242 || 127248 <= codePoint && codePoint <= 127277 || 127280 <= codePoint && codePoint <= 127337 || 127344 <= codePoint && codePoint <= 127386 || 917760 <= codePoint && codePoint <= 917999 || 983040 <= codePoint && codePoint <= 1048573 || 1048576 <= codePoint && codePoint <= 1114109) {
      return "A";
    }
    return "N";
  };
  eaw.characterLength = function(character) {
    var code = this.eastAsianWidth(character);
    if (code == "F" || code == "W" || code == "A") {
      return 2;
    } else {
      return 1;
    }
  };
  function stringToArray(string) {
    return string.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
  }
  eaw.length = function(string) {
    var characters = stringToArray(string);
    var len = 0;
    for (var i = 0; i < characters.length; i++) {
      len = len + this.characterLength(characters[i]);
    }
    return len;
  };
  eaw.slice = function(text, start, end) {
    textLen = eaw.length(text);
    start = start ? start : 0;
    end = end ? end : 1;
    if (start < 0) {
      start = textLen + start;
    }
    if (end < 0) {
      end = textLen + end;
    }
    var result = "";
    var eawLen = 0;
    var chars = stringToArray(text);
    for (var i = 0; i < chars.length; i++) {
      var char = chars[i];
      var charLen = eaw.length(char);
      if (eawLen >= start - (charLen == 2 ? 1 : 0)) {
        if (eawLen + charLen <= end) {
          result += char;
        } else {
          break;
        }
      }
      eawLen += charLen;
    }
    return result;
  };
})(eastasianwidth);
var dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
});
var levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, type, message) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    type,
    level,
    message
  };
  if (levels[logLevel] > levels[level]) {
    return;
  }
  dest.write(event);
}
function warn(opts, type, message) {
  return log(opts, "warn", type, message);
}
function error(opts, type, message) {
  return log(opts, "error", type, message);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
if (typeof process !== "undefined") {
  if (process.argv.includes("--verbose"))
    ;
  else if (process.argv.includes("--silent"))
    ;
  else
    ;
}
var VALID_PARAM_TYPES = ["string", "number", "undefined"];
function validateGetStaticPathsParameter([key, value]) {
  if (!VALID_PARAM_TYPES.includes(typeof value)) {
    throw new Error(
      `[getStaticPaths] invalid route parameter for "${key}". Expected a string or number, received \`${value}\` ("${typeof value}")`
    );
  }
}
function validateDynamicRouteModule(mod, {
  ssr,
  logging
}) {
  if (mod.createCollection) {
    throw new Error(`[createCollection] deprecated. Please use getStaticPaths() instead.`);
  }
  if (ssr && mod.getStaticPaths) {
    warn(logging, "getStaticPaths", 'getStaticPaths() is ignored when "output: server" is set.');
  }
  if (!ssr && !mod.getStaticPaths) {
    throw new Error(
      `[getStaticPaths] getStaticPaths() function is required.
Make sure that you \`export\` a \`getStaticPaths\` function from your dynamic route.
Alternatively, set \`output: "server"\` in your Astro config file to switch to a non-static server build. `
    );
  }
}
function validateGetStaticPathsResult(result, logging) {
  if (!Array.isArray(result)) {
    throw new Error(
      `[getStaticPaths] invalid return value. Expected an array of path objects, but got \`${JSON.stringify(
        result
      )}\`.`
    );
  }
  result.forEach((pathObject) => {
    if (!pathObject.params) {
      warn(
        logging,
        "getStaticPaths",
        `invalid path object. Expected an object with key \`params\`, but got \`${JSON.stringify(
          pathObject
        )}\`. Skipped.`
      );
      return;
    }
    for (const [key, val] of Object.entries(pathObject.params)) {
      if (!(typeof val === "undefined" || typeof val === "string")) {
        warn(
          logging,
          "getStaticPaths",
          `invalid path param: ${key}. A string value was expected, but got \`${JSON.stringify(
            val
          )}\`.`
        );
      }
      if (val === "") {
        warn(
          logging,
          "getStaticPaths",
          `invalid path param: ${key}. \`undefined\` expected for an optional param, but got empty string.`
        );
      }
    }
  });
}
function getParams(array) {
  const fn = (match) => {
    const params = {};
    array.forEach((key, i) => {
      if (key.startsWith("...")) {
        params[key.slice(3)] = match[i + 1] ? decodeURIComponent(match[i + 1]) : void 0;
      } else {
        params[key] = decodeURIComponent(match[i + 1]);
      }
    });
    return params;
  };
  return fn;
}
function stringifyParams(params) {
  const validatedParams = Object.entries(params).reduce((acc, next) => {
    validateGetStaticPathsParameter(next);
    const [key, value] = next;
    acc[key] = typeof value === "undefined" ? void 0 : `${value}`;
    return acc;
  }, {});
  return JSON.stringify(validatedParams, Object.keys(params).sort());
}
var SCRIPT_EXTENSIONS = /* @__PURE__ */ new Set([".js", ".ts"]);
var scriptRe = new RegExp(
  `\\.(${Array.from(SCRIPT_EXTENSIONS).map((s2) => s2.slice(1)).join("|")})($|\\?)`
);
var isScriptRequest = (request) => scriptRe.test(request);
var STYLE_EXTENSIONS = /* @__PURE__ */ new Set([
  ".css",
  ".pcss",
  ".postcss",
  ".scss",
  ".sass",
  ".styl",
  ".stylus",
  ".less"
]);
var cssRe = new RegExp(
  `\\.(${Array.from(STYLE_EXTENSIONS).map((s2) => s2.slice(1)).join("|")})($|\\?)`
);
var isCSSRequest = (request) => cssRe.test(request);
var __accessCheck$1 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$1 = (obj, member, getter) => {
  __accessCheck$1(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$1 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$1 = (obj, member, value, setter) => {
  __accessCheck$1(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _cache;
var _result;
var _slots;
var _loggingOpts;
var clientAddressSymbol$2 = Symbol.for("astro.clientAddress");
function onlyAvailableInSSR(name) {
  return function _onlyAvailableInSSR() {
    throw new Error(`Oops, you are trying to use ${name}, which is only available with SSR.`);
  };
}
function getFunctionExpression(slot) {
  var _a2;
  if (!slot)
    return;
  if (((_a2 = slot.expressions) == null ? void 0 : _a2.length) !== 1)
    return;
  return slot.expressions[0];
}
var Slots = class {
  constructor(result, slots, logging) {
    __privateAdd$1(this, _cache, /* @__PURE__ */ new Map());
    __privateAdd$1(this, _result, void 0);
    __privateAdd$1(this, _slots, void 0);
    __privateAdd$1(this, _loggingOpts, void 0);
    __privateSet$1(this, _result, result);
    __privateSet$1(this, _slots, slots);
    __privateSet$1(this, _loggingOpts, logging);
    if (slots) {
      for (const key of Object.keys(slots)) {
        if (this[key] !== void 0) {
          throw new Error(
            `Unable to create a slot named "${key}". "${key}" is a reserved slot name!
Please update the name of this slot.`
          );
        }
        Object.defineProperty(this, key, {
          get() {
            return true;
          },
          enumerable: true
        });
      }
    }
  }
  has(name) {
    if (!__privateGet$1(this, _slots))
      return false;
    return Boolean(__privateGet$1(this, _slots)[name]);
  }
  async render(name, args = []) {
    const cacheable = args.length === 0;
    if (!__privateGet$1(this, _slots))
      return void 0;
    if (cacheable && __privateGet$1(this, _cache).has(name)) {
      const result = __privateGet$1(this, _cache).get(name);
      return result;
    }
    if (!this.has(name))
      return void 0;
    if (!cacheable) {
      const component = await __privateGet$1(this, _slots)[name]();
      if (!Array.isArray(args)) {
        warn(
          __privateGet$1(this, _loggingOpts),
          "Astro.slots.render",
          `Expected second parameter to be an array, received a ${typeof args}. If you're trying to pass an array as a single argument and getting unexpected results, make sure you're passing your array as a item of an array. Ex: Astro.slots.render('default', [["Hello", "World"]])`
        );
      } else {
        const expression = getFunctionExpression(component);
        if (expression) {
          const slot = expression(...args);
          return await renderSlot(__privateGet$1(this, _result), slot).then(
            (res) => res != null ? String(res) : res
          );
        }
        if (typeof component === "function") {
          return await renderJSX(__privateGet$1(this, _result), component(...args)).then(
            (res) => res != null ? String(res) : res
          );
        }
      }
    }
    const content = await renderSlot(__privateGet$1(this, _result), __privateGet$1(this, _slots)[name]).then(
      (res) => res != null ? String(res) : res
    );
    if (cacheable)
      __privateGet$1(this, _cache).set(name, content);
    return content;
  }
};
_cache = /* @__PURE__ */ new WeakMap();
_result = /* @__PURE__ */ new WeakMap();
_slots = /* @__PURE__ */ new WeakMap();
_loggingOpts = /* @__PURE__ */ new WeakMap();
var renderMarkdown = null;
function createResult(args) {
  const { markdown, params, pathname, renderers: renderers2, request, resolve: resolve2 } = args;
  const url2 = new URL(request.url);
  const headers = new Headers();
  headers.set("Content-Type", "text/html");
  const response = {
    status: args.status,
    statusText: "OK",
    headers
  };
  Object.defineProperty(response, "headers", {
    value: response.headers,
    enumerable: true,
    writable: false
  });
  let cookies = void 0;
  const result = {
    styles: args.styles ?? /* @__PURE__ */ new Set(),
    scripts: args.scripts ?? /* @__PURE__ */ new Set(),
    links: args.links ?? /* @__PURE__ */ new Set(),
    cookies,
    createAstro(astroGlobal, props, slots) {
      const astroSlots = new Slots(result, slots, args.logging);
      const Astro = {
        __proto__: astroGlobal,
        get clientAddress() {
          if (!(clientAddressSymbol$2 in request)) {
            if (args.adapterName) {
              throw new Error(
                `Astro.clientAddress is not available in the ${args.adapterName} adapter. File an issue with the adapter to add support.`
              );
            } else {
              throw new Error(
                `Astro.clientAddress is not available in your environment. Ensure that you are using an SSR adapter that supports this feature.`
              );
            }
          }
          return Reflect.get(request, clientAddressSymbol$2);
        },
        get cookies() {
          if (cookies) {
            return cookies;
          }
          cookies = new AstroCookies(request);
          result.cookies = cookies;
          return cookies;
        },
        params,
        props,
        request,
        url: url2,
        redirect: args.ssr ? (path, status) => {
          return new Response(null, {
            status: status || 302,
            headers: {
              Location: path
            }
          });
        } : onlyAvailableInSSR("Astro.redirect"),
        resolve(path) {
          let extra = `This can be replaced with a dynamic import like so: await import("${path}")`;
          if (isCSSRequest(path)) {
            extra = `It looks like you are resolving styles. If you are adding a link tag, replace with this:
---
import "${path}";
---
`;
          } else if (isScriptRequest(path)) {
            extra = `It looks like you are resolving scripts. If you are adding a script tag, replace with this:

<script type="module" src={(await import("${path}?url")).default}><\/script>

or consider make it a module like so:

<script>
	import MyModule from "${path}";
<\/script>
`;
          }
          warn(
            args.logging,
            `deprecation`,
            `${bold(
              "Astro.resolve()"
            )} is deprecated. We see that you are trying to resolve ${path}.
${extra}`
          );
          return "";
        },
        response,
        slots: astroSlots
      };
      Object.defineProperty(Astro, "canonicalURL", {
        get: function() {
          warn(
            args.logging,
            "deprecation",
            `${bold("Astro.canonicalURL")} is deprecated! Use \`Astro.url\` instead.
Example:

---
const canonicalURL = new URL(Astro.url.pathname, Astro.site);
---
`
          );
          return new URL(this.request.url.pathname, this.site);
        }
      });
      Object.defineProperty(Astro, "__renderMarkdown", {
        enumerable: false,
        writable: false,
        value: async function(content, opts) {
          if (typeof Deno !== "undefined") {
            throw new Error("Markdown is not supported in Deno SSR");
          }
          if (!renderMarkdown) {
            let astroRemark = "@astrojs/";
            astroRemark += "markdown-remark";
            renderMarkdown = (await import(astroRemark)).renderMarkdown;
          }
          const { code } = await renderMarkdown(content, { ...markdown, ...opts ?? {} });
          return code;
        }
      });
      return Astro;
    },
    resolve: resolve2,
    _metadata: {
      renderers: renderers2,
      pathname,
      hasHydrationScript: false,
      hasRenderedHead: false,
      hasDirectives: /* @__PURE__ */ new Set()
    },
    response
  };
  return result;
}
function generatePaginateFunction(routeMatch) {
  return function paginateUtility(data, args = {}) {
    let { pageSize: _pageSize, params: _params, props: _props } = args;
    const pageSize = _pageSize || 10;
    const paramName = "page";
    const additionalParams = _params || {};
    const additionalProps = _props || {};
    let includesFirstPageNumber;
    if (routeMatch.params.includes(`...${paramName}`)) {
      includesFirstPageNumber = false;
    } else if (routeMatch.params.includes(`${paramName}`)) {
      includesFirstPageNumber = true;
    } else {
      throw new Error(
        `[paginate()] page number param \`${paramName}\` not found in your filepath.
Rename your file to \`[...page].astro\` or customize the param name via the \`paginate([], {param: '...'}\` option.`
      );
    }
    const lastPage = Math.max(1, Math.ceil(data.length / pageSize));
    const result = [...Array(lastPage).keys()].map((num) => {
      const pageNum = num + 1;
      const start = pageSize === Infinity ? 0 : (pageNum - 1) * pageSize;
      const end = Math.min(start + pageSize, data.length);
      const params = {
        ...additionalParams,
        [paramName]: includesFirstPageNumber || pageNum > 1 ? String(pageNum) : void 0
      };
      return {
        params,
        props: {
          ...additionalProps,
          page: {
            data: data.slice(start, end),
            start,
            end: end - 1,
            size: pageSize,
            total: data.length,
            currentPage: pageNum,
            lastPage,
            url: {
              current: routeMatch.generate({ ...params }),
              next: pageNum === lastPage ? void 0 : routeMatch.generate({ ...params, page: String(pageNum + 1) }),
              prev: pageNum === 1 ? void 0 : routeMatch.generate({
                ...params,
                page: !includesFirstPageNumber && pageNum - 1 === 1 ? void 0 : String(pageNum - 1)
              })
            }
          }
        }
      };
    });
    return result;
  };
}
async function callGetStaticPaths({
  isValidate,
  logging,
  mod,
  route,
  ssr
}) {
  validateDynamicRouteModule(mod, { ssr, logging });
  if (ssr) {
    return { staticPaths: Object.assign([], { keyed: /* @__PURE__ */ new Map() }) };
  }
  if (!mod.getStaticPaths) {
    throw new Error("Unexpected Error.");
  }
  let staticPaths = [];
  staticPaths = (await mod.getStaticPaths({
    paginate: generatePaginateFunction(route),
    rss() {
      throw new Error(
        "The RSS helper has been removed from getStaticPaths! Try the new @astrojs/rss package instead. See https://docs.astro.build/en/guides/rss/"
      );
    }
  })).flat();
  const keyedStaticPaths = staticPaths;
  keyedStaticPaths.keyed = /* @__PURE__ */ new Map();
  for (const sp of keyedStaticPaths) {
    const paramsKey = stringifyParams(sp.params);
    keyedStaticPaths.keyed.set(paramsKey, sp);
  }
  if (isValidate) {
    validateGetStaticPathsResult(keyedStaticPaths, logging);
  }
  return {
    staticPaths: keyedStaticPaths
  };
}
var RouteCache = class {
  constructor(logging, mode = "production") {
    this.cache = {};
    this.logging = logging;
    this.mode = mode;
  }
  clearAll() {
    this.cache = {};
  }
  set(route, entry) {
    if (this.mode === "production" && this.cache[route.component]) {
      warn(
        this.logging,
        "routeCache",
        `Internal Warning: route cache overwritten. (${route.component})`
      );
    }
    this.cache[route.component] = entry;
  }
  get(route) {
    return this.cache[route.component];
  }
};
function findPathItemByKey(staticPaths, params) {
  const paramsKey = stringifyParams(params);
  const matchedStaticPath = staticPaths.keyed.get(paramsKey);
  if (matchedStaticPath) {
    return matchedStaticPath;
  }
  debug("findPathItemByKey", `Unexpected cache miss looking for ${paramsKey}`);
}
var GetParamsAndPropsError = /* @__PURE__ */ ((GetParamsAndPropsError2) => {
  GetParamsAndPropsError2[GetParamsAndPropsError2["NoMatchingStaticPath"] = 0] = "NoMatchingStaticPath";
  return GetParamsAndPropsError2;
})(GetParamsAndPropsError || {});
async function getParamsAndProps(opts) {
  const { logging, mod, route, routeCache, pathname, ssr } = opts;
  let params = {};
  let pageProps;
  if (route && !route.pathname) {
    if (route.params.length) {
      const paramsMatch = route.pattern.exec(pathname);
      if (paramsMatch) {
        params = getParams(route.params)(paramsMatch);
      }
    }
    let routeCacheEntry = routeCache.get(route);
    if (!routeCacheEntry) {
      routeCacheEntry = await callGetStaticPaths({ mod, route, isValidate: true, logging, ssr });
      routeCache.set(route, routeCacheEntry);
    }
    const matchedStaticPath = findPathItemByKey(routeCacheEntry.staticPaths, params);
    if (!matchedStaticPath && !ssr) {
      return 0;
    }
    pageProps = (matchedStaticPath == null ? void 0 : matchedStaticPath.props) ? { ...matchedStaticPath.props } : {};
  } else {
    pageProps = {};
  }
  return [params, pageProps];
}
async function renderPage(mod, ctx, env) {
  const paramsAndPropsRes = await getParamsAndProps({
    logging: env.logging,
    mod,
    route: ctx.route,
    routeCache: env.routeCache,
    pathname: ctx.pathname,
    ssr: env.ssr
  });
  if (paramsAndPropsRes === 0) {
    throw new Error(
      `[getStaticPath] route pattern matched, but no matching static path found. (${ctx.pathname})`
    );
  }
  const [params, pageProps] = paramsAndPropsRes;
  const Component = mod.default;
  if (!Component)
    throw new Error(`Expected an exported Astro component but received typeof ${typeof Component}`);
  const result = createResult({
    adapterName: env.adapterName,
    links: ctx.links,
    styles: ctx.styles,
    logging: env.logging,
    markdown: env.markdown,
    mode: env.mode,
    origin: ctx.origin,
    params,
    props: pageProps,
    pathname: ctx.pathname,
    resolve: env.resolve,
    renderers: env.renderers,
    request: ctx.request,
    site: env.site,
    scripts: ctx.scripts,
    ssr: env.ssr,
    status: ctx.status ?? 200
  });
  if (typeof mod.components === "object") {
    Object.assign(pageProps, { components: mod.components });
  }
  if (typeof mod.default === "function" && mod.default.name.startsWith("MDX")) {
    Object.assign(pageProps, {
      components: Object.assign((pageProps == null ? void 0 : pageProps.components) ?? {}, { Fragment })
    });
  }
  const response = await renderPage$1(result, Component, pageProps, null, env.streaming);
  if (result.cookies) {
    attachToResponse(response, result.cookies);
  }
  return response;
}
var clientAddressSymbol$1 = Symbol.for("astro.clientAddress");
function createAPIContext({
  request,
  params,
  site,
  props,
  adapterName
}) {
  return {
    cookies: new AstroCookies(request),
    request,
    params,
    site: site ? new URL(site) : void 0,
    generator: `Astro v${ASTRO_VERSION}`,
    props,
    redirect(path, status) {
      return new Response(null, {
        status: status || 302,
        headers: {
          Location: path
        }
      });
    },
    url: new URL(request.url),
    get clientAddress() {
      if (!(clientAddressSymbol$1 in request)) {
        if (adapterName) {
          throw new Error(
            `clientAddress is not available in the ${adapterName} adapter. File an issue with the adapter to add support.`
          );
        } else {
          throw new Error(
            `clientAddress is not available in your environment. Ensure that you are using an SSR adapter that supports this feature.`
          );
        }
      }
      return Reflect.get(request, clientAddressSymbol$1);
    }
  };
}
async function call(mod, env, ctx) {
  const paramsAndPropsResp = await getParamsAndProps({
    mod,
    route: ctx.route,
    routeCache: env.routeCache,
    pathname: ctx.pathname,
    logging: env.logging,
    ssr: env.ssr
  });
  if (paramsAndPropsResp === GetParamsAndPropsError.NoMatchingStaticPath) {
    throw new Error(
      `[getStaticPath] route pattern matched, but no matching static path found. (${ctx.pathname})`
    );
  }
  const [params, props] = paramsAndPropsResp;
  const context = createAPIContext({
    request: ctx.request,
    params,
    props,
    site: env.site,
    adapterName: env.adapterName
  });
  const response = await renderEndpoint(mod, context, env.ssr);
  if (response instanceof Response) {
    attachToResponse(response, context.cookies);
    return {
      type: "response",
      response
    };
  }
  return {
    type: "simple",
    body: response.body,
    encoding: response.encoding,
    cookies: context.cookies
  };
}
var lastMessage;
var lastMessageCount = 1;
var consoleLogDestination = {
  write(event) {
    let dest = console.error;
    if (levels[event.level] < levels["error"]) {
      dest = console.log;
    }
    function getPrefix() {
      let prefix = "";
      let type = event.type;
      if (type) {
        prefix += dim(dateTimeFormat.format(new Date()) + " ");
        if (event.level === "info") {
          type = bold(cyan(`[${type}]`));
        } else if (event.level === "warn") {
          type = bold(yellow(`[${type}]`));
        } else if (event.level === "error") {
          type = bold(red(`[${type}]`));
        }
        prefix += `${type} `;
      }
      return reset(prefix);
    }
    let message = event.message;
    if (message === lastMessage) {
      lastMessageCount++;
      message = `${message} ${yellow(`(x${lastMessageCount})`)}`;
    } else {
      lastMessage = message;
      lastMessageCount = 1;
    }
    const outMessage = getPrefix() + message;
    dest(outMessage);
    return true;
  }
};
function createRenderContext(options) {
  const request = options.request;
  const url2 = new URL(request.url);
  const origin = options.origin ?? url2.origin;
  const pathname = options.pathname ?? url2.pathname;
  return {
    ...options,
    origin,
    pathname,
    url: url2
  };
}
function createEnvironment(options) {
  return options;
}
function assertPath(path) {
  if (typeof path !== "string") {
    throw new TypeError("Path must be a string. Received " + JSON.stringify(path));
  }
}
function normalizeStringPosix(path, allowAboveRoot) {
  var res = "";
  var lastSegmentLength = 0;
  var lastSlash = -1;
  var dots = 0;
  var code;
  for (var i = 0; i <= path.length; ++i) {
    if (i < path.length)
      code = path.charCodeAt(i);
    else if (code === 47)
      break;
    else
      code = 47;
    if (code === 47) {
      if (lastSlash === i - 1 || dots === 1)
        ;
      else if (lastSlash !== i - 1 && dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 || res.charCodeAt(res.length - 2) !== 46) {
          if (res.length > 2) {
            var lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex !== res.length - 1) {
              if (lastSlashIndex === -1) {
                res = "";
                lastSegmentLength = 0;
              } else {
                res = res.slice(0, lastSlashIndex);
                lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
              }
              lastSlash = i;
              dots = 0;
              continue;
            }
          } else if (res.length === 2 || res.length === 1) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0)
            res += "/..";
          else
            res = "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0)
          res += "/" + path.slice(lastSlash + 1, i);
        else
          res = path.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === 46 && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
function _format(sep, pathObject) {
  var dir = pathObject.dir || pathObject.root;
  var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
  if (!dir) {
    return base;
  }
  if (dir === pathObject.root) {
    return dir + base;
  }
  return dir + sep + base;
}
var posix = {
  resolve: function resolve() {
    var resolvedPath = "";
    var resolvedAbsolute = false;
    var cwd;
    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path;
      if (i >= 0)
        path = arguments[i];
      else {
        if (cwd === void 0)
          cwd = process.cwd();
        path = cwd;
      }
      assertPath(path);
      if (path.length === 0) {
        continue;
      }
      resolvedPath = path + "/" + resolvedPath;
      resolvedAbsolute = path.charCodeAt(0) === 47;
    }
    resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
    if (resolvedAbsolute) {
      if (resolvedPath.length > 0)
        return "/" + resolvedPath;
      else
        return "/";
    } else if (resolvedPath.length > 0) {
      return resolvedPath;
    } else {
      return ".";
    }
  },
  normalize: function normalize(path) {
    assertPath(path);
    if (path.length === 0)
      return ".";
    var isAbsolute2 = path.charCodeAt(0) === 47;
    var trailingSeparator = path.charCodeAt(path.length - 1) === 47;
    path = normalizeStringPosix(path, !isAbsolute2);
    if (path.length === 0 && !isAbsolute2)
      path = ".";
    if (path.length > 0 && trailingSeparator)
      path += "/";
    if (isAbsolute2)
      return "/" + path;
    return path;
  },
  isAbsolute: function isAbsolute(path) {
    assertPath(path);
    return path.length > 0 && path.charCodeAt(0) === 47;
  },
  join: function join() {
    if (arguments.length === 0)
      return ".";
    var joined;
    for (var i = 0; i < arguments.length; ++i) {
      var arg = arguments[i];
      assertPath(arg);
      if (arg.length > 0) {
        if (joined === void 0)
          joined = arg;
        else
          joined += "/" + arg;
      }
    }
    if (joined === void 0)
      return ".";
    return posix.normalize(joined);
  },
  relative: function relative(from, to) {
    assertPath(from);
    assertPath(to);
    if (from === to)
      return "";
    from = posix.resolve(from);
    to = posix.resolve(to);
    if (from === to)
      return "";
    var fromStart = 1;
    for (; fromStart < from.length; ++fromStart) {
      if (from.charCodeAt(fromStart) !== 47)
        break;
    }
    var fromEnd = from.length;
    var fromLen = fromEnd - fromStart;
    var toStart = 1;
    for (; toStart < to.length; ++toStart) {
      if (to.charCodeAt(toStart) !== 47)
        break;
    }
    var toEnd = to.length;
    var toLen = toEnd - toStart;
    var length = fromLen < toLen ? fromLen : toLen;
    var lastCommonSep = -1;
    var i = 0;
    for (; i <= length; ++i) {
      if (i === length) {
        if (toLen > length) {
          if (to.charCodeAt(toStart + i) === 47) {
            return to.slice(toStart + i + 1);
          } else if (i === 0) {
            return to.slice(toStart + i);
          }
        } else if (fromLen > length) {
          if (from.charCodeAt(fromStart + i) === 47) {
            lastCommonSep = i;
          } else if (i === 0) {
            lastCommonSep = 0;
          }
        }
        break;
      }
      var fromCode = from.charCodeAt(fromStart + i);
      var toCode = to.charCodeAt(toStart + i);
      if (fromCode !== toCode)
        break;
      else if (fromCode === 47)
        lastCommonSep = i;
    }
    var out = "";
    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === 47) {
        if (out.length === 0)
          out += "..";
        else
          out += "/..";
      }
    }
    if (out.length > 0)
      return out + to.slice(toStart + lastCommonSep);
    else {
      toStart += lastCommonSep;
      if (to.charCodeAt(toStart) === 47)
        ++toStart;
      return to.slice(toStart);
    }
  },
  _makeLong: function _makeLong(path) {
    return path;
  },
  dirname: function dirname(path) {
    assertPath(path);
    if (path.length === 0)
      return ".";
    var code = path.charCodeAt(0);
    var hasRoot = code === 47;
    var end = -1;
    var matchedSlash = true;
    for (var i = path.length - 1; i >= 1; --i) {
      code = path.charCodeAt(i);
      if (code === 47) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
        matchedSlash = false;
      }
    }
    if (end === -1)
      return hasRoot ? "/" : ".";
    if (hasRoot && end === 1)
      return "//";
    return path.slice(0, end);
  },
  basename: function basename(path, ext) {
    if (ext !== void 0 && typeof ext !== "string")
      throw new TypeError('"ext" argument must be a string');
    assertPath(path);
    var start = 0;
    var end = -1;
    var matchedSlash = true;
    var i;
    if (ext !== void 0 && ext.length > 0 && ext.length <= path.length) {
      if (ext.length === path.length && ext === path)
        return "";
      var extIdx = ext.length - 1;
      var firstNonSlashEnd = -1;
      for (i = path.length - 1; i >= 0; --i) {
        var code = path.charCodeAt(i);
        if (code === 47) {
          if (!matchedSlash) {
            start = i + 1;
            break;
          }
        } else {
          if (firstNonSlashEnd === -1) {
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }
          if (extIdx >= 0) {
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                end = i;
              }
            } else {
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }
      if (start === end)
        end = firstNonSlashEnd;
      else if (end === -1)
        end = path.length;
      return path.slice(start, end);
    } else {
      for (i = path.length - 1; i >= 0; --i) {
        if (path.charCodeAt(i) === 47) {
          if (!matchedSlash) {
            start = i + 1;
            break;
          }
        } else if (end === -1) {
          matchedSlash = false;
          end = i + 1;
        }
      }
      if (end === -1)
        return "";
      return path.slice(start, end);
    }
  },
  extname: function extname(path) {
    assertPath(path);
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var preDotState = 0;
    for (var i = path.length - 1; i >= 0; --i) {
      var code = path.charCodeAt(i);
      if (code === 47) {
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
      if (end === -1) {
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46) {
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
      } else if (startDot !== -1) {
        preDotState = -1;
      }
    }
    if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return "";
    }
    return path.slice(startDot, end);
  },
  format: function format(pathObject) {
    if (pathObject === null || typeof pathObject !== "object") {
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
    }
    return _format("/", pathObject);
  },
  parse: function parse(path) {
    assertPath(path);
    var ret = { root: "", dir: "", base: "", ext: "", name: "" };
    if (path.length === 0)
      return ret;
    var code = path.charCodeAt(0);
    var isAbsolute2 = code === 47;
    var start;
    if (isAbsolute2) {
      ret.root = "/";
      start = 1;
    } else {
      start = 0;
    }
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var i = path.length - 1;
    var preDotState = 0;
    for (; i >= start; --i) {
      code = path.charCodeAt(i);
      if (code === 47) {
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
      if (end === -1) {
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46) {
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
      } else if (startDot !== -1) {
        preDotState = -1;
      }
    }
    if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      if (end !== -1) {
        if (startPart === 0 && isAbsolute2)
          ret.base = ret.name = path.slice(1, end);
        else
          ret.base = ret.name = path.slice(startPart, end);
      }
    } else {
      if (startPart === 0 && isAbsolute2) {
        ret.name = path.slice(1, startDot);
        ret.base = path.slice(1, end);
      } else {
        ret.name = path.slice(startPart, startDot);
        ret.base = path.slice(startPart, end);
      }
      ret.ext = path.slice(startDot, end);
    }
    if (startPart > 0)
      ret.dir = path.slice(0, startPart - 1);
    else if (isAbsolute2)
      ret.dir = "/";
    return ret;
  },
  sep: "/",
  delimiter: ":",
  win32: null,
  posix: null
};
posix.posix = posix;
var pathBrowserify = posix;
function getRootPath(site) {
  return appendForwardSlash(new URL(site || "http://localhost/").pathname);
}
function joinToRoot(href, site) {
  return pathBrowserify.posix.join(getRootPath(site), href);
}
function createLinkStylesheetElement(href, site) {
  return {
    props: {
      rel: "stylesheet",
      href: joinToRoot(href, site)
    },
    children: ""
  };
}
function createLinkStylesheetElementSet(hrefs, site) {
  return new Set(hrefs.map((href) => createLinkStylesheetElement(href, site)));
}
function createModuleScriptElement(script, site) {
  if (script.type === "external") {
    return createModuleScriptElementWithSrc(script.value, site);
  } else {
    return {
      props: {
        type: "module"
      },
      children: script.value
    };
  }
}
function createModuleScriptElementWithSrc(src, site) {
  return {
    props: {
      type: "module",
      src: joinToRoot(src, site)
    },
    children: ""
  };
}
function matchRoute(pathname, manifest) {
  return manifest.routes.find((route) => route.pattern.test(pathname));
}
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122 || code === 95) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
function parse2(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a2 = options.prefixes, prefixes = _a2 === void 0 ? "./" : _a2;
  var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  };
  var mustConsume = function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a3 = tokens[i], nextType = _a3.type, index = _a3.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  };
  var consumeText = function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  };
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || defaultPattern,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
function compile(str, options) {
  return tokensToFunction(parse2(str, options), options);
}
function tokensToFunction(tokens, options) {
  if (options === void 0) {
    options = {};
  }
  var reFlags = flags(options);
  var _a2 = options.encode, encode2 = _a2 === void 0 ? function(x) {
    return x;
  } : _a2, _b = options.validate, validate2 = _b === void 0 ? true : _b;
  var matches = tokens.map(function(token) {
    if (typeof token === "object") {
      return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
    }
  });
  return function(data) {
    var path = "";
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      if (typeof token === "string") {
        path += token;
        continue;
      }
      var value = data ? data[token.name] : void 0;
      var optional = token.modifier === "?" || token.modifier === "*";
      var repeat = token.modifier === "*" || token.modifier === "+";
      if (Array.isArray(value)) {
        if (!repeat) {
          throw new TypeError('Expected "'.concat(token.name, '" to not repeat, but got an array'));
        }
        if (value.length === 0) {
          if (optional)
            continue;
          throw new TypeError('Expected "'.concat(token.name, '" to not be empty'));
        }
        for (var j = 0; j < value.length; j++) {
          var segment = encode2(value[j], token);
          if (validate2 && !matches[i].test(segment)) {
            throw new TypeError('Expected all "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
          }
          path += token.prefix + segment + token.suffix;
        }
        continue;
      }
      if (typeof value === "string" || typeof value === "number") {
        var segment = encode2(String(value), token);
        if (validate2 && !matches[i].test(segment)) {
          throw new TypeError('Expected "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
        }
        path += token.prefix + segment + token.suffix;
        continue;
      }
      if (optional)
        continue;
      var typeOfMessage = repeat ? "an array" : "a string";
      throw new TypeError('Expected "'.concat(token.name, '" to be ').concat(typeOfMessage));
    }
    return path;
  };
}
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}
function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments
  };
}
function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  return {
    ...serializedManifest,
    assets,
    routes
  };
}
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _env;
var _manifest$1;
var _manifestData;
var _routeDataToRouteInfo;
var _encoder;
var _logging;
var _renderPage;
var renderPage_fn;
var _callEndpoint;
var callEndpoint_fn;
var App = class {
  constructor(manifest, streaming = true) {
    __privateAdd(this, _renderPage);
    __privateAdd(this, _callEndpoint);
    __privateAdd(this, _env, void 0);
    __privateAdd(this, _manifest$1, void 0);
    __privateAdd(this, _manifestData, void 0);
    __privateAdd(this, _routeDataToRouteInfo, void 0);
    __privateAdd(this, _encoder, new TextEncoder());
    __privateAdd(this, _logging, {
      dest: consoleLogDestination,
      level: "info"
    });
    __privateSet(this, _manifest$1, manifest);
    __privateSet(this, _manifestData, {
      routes: manifest.routes.map((route) => route.routeData)
    });
    __privateSet(this, _routeDataToRouteInfo, new Map(manifest.routes.map((route) => [route.routeData, route])));
    __privateSet(this, _env, createEnvironment({
      adapterName: manifest.adapterName,
      logging: __privateGet(this, _logging),
      markdown: manifest.markdown,
      mode: "production",
      renderers: manifest.renderers,
      async resolve(specifier) {
        if (!(specifier in manifest.entryModules)) {
          throw new Error(`Unable to resolve [${specifier}]`);
        }
        const bundlePath = manifest.entryModules[specifier];
        switch (true) {
          case bundlePath.startsWith("data:"):
          case bundlePath.length === 0: {
            return bundlePath;
          }
          default: {
            return prependForwardSlash(joinPaths(manifest.base, bundlePath));
          }
        }
      },
      routeCache: new RouteCache(__privateGet(this, _logging)),
      site: __privateGet(this, _manifest$1).site,
      ssr: true,
      streaming
    }));
  }
  match(request, { matchNotFound = false } = {}) {
    const url2 = new URL(request.url);
    if (__privateGet(this, _manifest$1).assets.has(url2.pathname)) {
      return void 0;
    }
    let routeData = matchRoute(url2.pathname, __privateGet(this, _manifestData));
    if (routeData) {
      return routeData;
    } else if (matchNotFound) {
      return matchRoute("/404", __privateGet(this, _manifestData));
    } else {
      return void 0;
    }
  }
  async render(request, routeData) {
    let defaultStatus = 200;
    if (!routeData) {
      routeData = this.match(request);
      if (!routeData) {
        defaultStatus = 404;
        routeData = this.match(request, { matchNotFound: true });
      }
      if (!routeData) {
        return new Response(null, {
          status: 404,
          statusText: "Not found"
        });
      }
    }
    if (routeData.route === "/404") {
      defaultStatus = 404;
    }
    let mod = __privateGet(this, _manifest$1).pageMap.get(routeData.component);
    if (routeData.type === "page") {
      let response = await __privateMethod(this, _renderPage, renderPage_fn).call(this, request, routeData, mod, defaultStatus);
      if (response.status === 500) {
        const fiveHundredRouteData = matchRoute("/500", __privateGet(this, _manifestData));
        if (fiveHundredRouteData) {
          mod = __privateGet(this, _manifest$1).pageMap.get(fiveHundredRouteData.component);
          try {
            let fiveHundredResponse = await __privateMethod(this, _renderPage, renderPage_fn).call(this, request, fiveHundredRouteData, mod, 500);
            return fiveHundredResponse;
          } catch {
          }
        }
      }
      return response;
    } else if (routeData.type === "endpoint") {
      return __privateMethod(this, _callEndpoint, callEndpoint_fn).call(this, request, routeData, mod, defaultStatus);
    } else {
      throw new Error(`Unsupported route type [${routeData.type}].`);
    }
  }
  setCookieHeaders(response) {
    return getSetCookiesFromResponse(response);
  }
};
_env = /* @__PURE__ */ new WeakMap();
_manifest$1 = /* @__PURE__ */ new WeakMap();
_manifestData = /* @__PURE__ */ new WeakMap();
_routeDataToRouteInfo = /* @__PURE__ */ new WeakMap();
_encoder = /* @__PURE__ */ new WeakMap();
_logging = /* @__PURE__ */ new WeakMap();
_renderPage = /* @__PURE__ */ new WeakSet();
renderPage_fn = async function(request, routeData, mod, status = 200) {
  const url2 = new URL(request.url);
  const manifest = __privateGet(this, _manifest$1);
  manifest.renderers;
  const info = __privateGet(this, _routeDataToRouteInfo).get(routeData);
  const links = createLinkStylesheetElementSet(info.links, manifest.site);
  let scripts = /* @__PURE__ */ new Set();
  for (const script of info.scripts) {
    if ("stage" in script) {
      if (script.stage === "head-inline") {
        scripts.add({
          props: {},
          children: script.children
        });
      }
    } else {
      scripts.add(createModuleScriptElement(script, manifest.site));
    }
  }
  try {
    const ctx = createRenderContext({
      request,
      origin: url2.origin,
      pathname: url2.pathname,
      scripts,
      links,
      route: routeData,
      status
    });
    const response = await renderPage(mod, ctx, __privateGet(this, _env));
    return response;
  } catch (err) {
    error(__privateGet(this, _logging), "ssr", err.stack || err.message || String(err));
    return new Response(null, {
      status: 500,
      statusText: "Internal server error"
    });
  }
};
_callEndpoint = /* @__PURE__ */ new WeakSet();
callEndpoint_fn = async function(request, routeData, mod, status = 200) {
  const url2 = new URL(request.url);
  const handler = mod;
  const ctx = createRenderContext({
    request,
    origin: url2.origin,
    pathname: url2.pathname,
    route: routeData,
    status
  });
  const result = await call(handler, __privateGet(this, _env), ctx);
  if (result.type === "response") {
    if (result.response.headers.get("X-Astro-Response") === "Not-Found") {
      const fourOhFourRequest = new Request(new URL("/404", request.url));
      const fourOhFourRouteData = this.match(fourOhFourRequest);
      if (fourOhFourRouteData) {
        return this.render(fourOhFourRequest, fourOhFourRouteData);
      }
    }
    return result.response;
  } else {
    const body = result.body;
    const headers = new Headers();
    const mimeType = mime.getType(url2.pathname);
    if (mimeType) {
      headers.set("Content-Type", `${mimeType};charset=utf-8`);
    } else {
      headers.set("Content-Type", "text/plain;charset=utf-8");
    }
    const bytes = __privateGet(this, _encoder).encode(body);
    headers.set("Content-Length", bytes.byteLength.toString());
    const response = new Response(bytes, {
      status: 200,
      headers
    });
    attachToResponse(response, result.cookies);
    return response;
  }
};
var clientAddressSymbol = Symbol.for("astro.clientAddress");
function createExports(manifest) {
  const app = new App(manifest);
  const handler = async (request) => {
    const url2 = new URL(request.url);
    if (manifest.assets.has(url2.pathname)) {
      return;
    }
    if (app.match(request)) {
      const ip = request.headers.get("x-nf-client-connection-ip");
      Reflect.set(request, clientAddressSymbol, ip);
      const response = await app.render(request);
      if (app.setCookieHeaders) {
        for (const setCookieHeader of app.setCookieHeaders(response)) {
          response.headers.append("Set-Cookie", setCookieHeader);
        }
      }
      return response;
    }
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });
  };
  return { default: handler };
}
var adapter = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createExports
}, Symbol.toStringTag, { value: "Module" }));
var react = { exports: {} };
var react_development = { exports: {} };
var hasRequiredReact_development;
function requireReact_development() {
  if (hasRequiredReact_development)
    return react_development.exports;
  hasRequiredReact_development = 1;
  (function(module, exports) {
    if (true) {
      (function() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var ReactVersion = "18.2.0";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          current: null
        };
        var ReactCurrentBatchConfig = {
          transition: null
        };
        var ReactCurrentActQueue = {
          current: null,
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false
        };
        var ReactCurrentOwner = {
          current: null
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
            {
              currentExtraStackFrame = stack;
            }
          };
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function() {
            var stack = "";
            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
        }
        function warn2(format2) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format2, args);
            }
          }
        }
        function error2(format2) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format2, args);
            }
          }
        }
        function printWarning(level, format2, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format2 += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format2);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error2("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          isMounted: function(publicInstance) {
            return false;
          },
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },
          enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
          },
          enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }
        };
        var assign = Object.assign;
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(partialState, callback) {
          if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
            throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          }
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component.prototype, methodName, {
              get: function() {
                warn2("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        ComponentDummy.prototype = Component.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error2("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error2("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init2 = lazyComponent._init;
                try {
                  return getComponentNameFromType(init2(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error2("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error2("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error2('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            ref,
            props,
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement(type, config, children) {
          var propName2;
          var props = {};
          var key = null;
          var ref = null;
          var self = null;
          var source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config);
              }
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            self = config.__self === void 0 ? null : config.__self;
            source = config.__source === void 0 ? null : config.__source;
            for (propName2 in config) {
              if (hasOwnProperty.call(config, propName2) && !RESERVED_PROPS.hasOwnProperty(propName2)) {
                props[propName2] = config[propName2];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName2 in defaultProps) {
              if (props[propName2] === void 0) {
                props[propName2] = defaultProps[propName2];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement(element, config, children) {
          if (element === null || element === void 0) {
            throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
          }
          var propName2;
          var props = assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName2 in config) {
              if (hasOwnProperty.call(config, propName2) && !RESERVED_PROPS.hasOwnProperty(propName2)) {
                if (config[propName2] === void 0 && defaultProps !== void 0) {
                  props[propName2] = defaultProps[propName2];
                } else {
                  props[propName2] = config[propName2];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self, source, owner, props);
        }
        function isValidElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape2(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return text.replace(userProvidedKeyEscapeRegex, "$&/");
        }
        function getElementKey(element, index) {
          if (typeof element === "object" && element !== null && element.key != null) {
            {
              checkKeyStringCoercion(element.key);
            }
            return escape2("" + element.key);
          }
          return index.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child);
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (isArray(mappedChild)) {
              var escapedChildKey = "";
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
              }
              mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                return c;
              });
            } else if (mappedChild != null) {
              if (isValidElement(mappedChild)) {
                {
                  if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                    checkKeyStringCoercion(mappedChild.key);
                  }
                }
                mappedChild = cloneAndReplaceKey(
                  mappedChild,
                  escapedPrefix + (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? escapeUserProvidedKey("" + mappedChild.key) + "/" : "") + childKey
                );
              }
              array.push(mappedChild);
            }
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getElementKey(child, i);
              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              var iterableChildren = children;
              {
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn2("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(iterableChildren);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else if (type === "object") {
              var childrenString = String(children);
              throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
            }
          }
          return subtreeCount;
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function countChildren(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(children, function() {
            forEachFunc.apply(this, arguments);
          }, forEachContext);
        }
        function toArray(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        }
        function onlyChild(children) {
          if (!isValidElement(children)) {
            throw new Error("React.Children.only expected to receive a single React element child.");
          }
          return children;
        }
        function createContext(defaultValue) {
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          var hasWarnedAboutDisplayNameOnConsumer = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error2("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error2("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              },
              displayName: {
                get: function() {
                  return context.displayName;
                },
                set: function(displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn2("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                }
              }
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor();
            thenable.then(function(moduleObject2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var resolved = payload;
                resolved._status = Resolved;
                resolved._result = moduleObject2;
              }
            }, function(error3) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var rejected = payload;
                rejected._status = Rejected;
                rejected._result = error3;
              }
            });
            if (payload._status === Uninitialized) {
              var pending = payload;
              pending._status = Pending;
              pending._result = thenable;
            }
          }
          if (payload._status === Resolved) {
            var moduleObject = payload._result;
            {
              if (moduleObject === void 0) {
                error2("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
              }
            }
            {
              if (!("default" in moduleObject)) {
                error2("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
              }
            }
            return moduleObject.default;
          } else {
            throw payload._result;
          }
        }
        function lazy(ctor) {
          var payload = {
            _status: Uninitialized,
            _result: ctor
          };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function() {
                  return defaultProps;
                },
                set: function(newDefaultProps) {
                  error2("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes;
                },
                set: function(newPropTypes) {
                  error2("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }
        function forwardRef(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error2("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render !== "function") {
              error2("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error2("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error2("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
              }
            }
          }
          var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!render.name && !render.displayName) {
                  render.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              error2("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!type.name && !type.displayName) {
                  type.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          {
            if (dispatcher === null) {
              error2("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext(Context) {
          var dispatcher = resolveDispatcher();
          {
            if (Context._context !== void 0) {
              var realContext = Context._context;
              if (realContext.Consumer === Context) {
                error2("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
              } else if (realContext.Provider === Context) {
                error2("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
              }
            }
          }
          return dispatcher.useContext(Context);
        }
        function useState(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init2) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init2);
        }
        function useRef(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useInsertionEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useInsertionEffect(create, deps);
        }
        function useLayoutEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        function useTransition() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useTransition();
        }
        function useDeferredValue(value) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDeferredValue(value);
        }
        function useId() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useId();
        }
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error2("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s2 = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s2 >= 1 && c >= 0 && sampleLines[s2] !== controlLines[c]) {
                c--;
              }
              for (; s2 >= 1 && c >= 0; s2--, c--) {
                if (sampleLines[s2] !== controlLines[c]) {
                  if (s2 !== 1 || c !== 1) {
                    do {
                      s2--;
                      c--;
                      if (c < 0 || sampleLines[s2] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s2].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s2 >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init2 = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init2(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error2("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error2("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          {
            setCurrentlyValidatingElement$1(element);
            error2('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error2("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error2("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error2("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error2("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error2("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
          }
          var element = createElement.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn2("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function() {
                warn2("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        function startTransition(scope, options) {
          var prevTransition = ReactCurrentBatchConfig.transition;
          ReactCurrentBatchConfig.transition = {};
          var currentTransition = ReactCurrentBatchConfig.transition;
          {
            ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
          }
          try {
            scope();
          } finally {
            ReactCurrentBatchConfig.transition = prevTransition;
            {
              if (prevTransition === null && currentTransition._updatedFibers) {
                var updatedFibersCount = currentTransition._updatedFibers.size;
                if (updatedFibersCount > 10) {
                  warn2("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                }
                currentTransition._updatedFibers.clear();
              }
            }
          }
        }
        var didWarnAboutMessageChannel = false;
        var enqueueTaskImpl = null;
        function enqueueTask(task) {
          if (enqueueTaskImpl === null) {
            try {
              var requireString = ("require" + Math.random()).slice(0, 7);
              var nodeRequire = module && module[requireString];
              enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function(callback) {
                {
                  if (didWarnAboutMessageChannel === false) {
                    didWarnAboutMessageChannel = true;
                    if (typeof MessageChannel === "undefined") {
                      error2("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                    }
                  }
                }
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
              };
            }
          }
          return enqueueTaskImpl(task);
        }
        var actScopeDepth = 0;
        var didWarnNoAwaitAct = false;
        function act(callback) {
          {
            var prevActScopeDepth = actScopeDepth;
            actScopeDepth++;
            if (ReactCurrentActQueue.current === null) {
              ReactCurrentActQueue.current = [];
            }
            var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
            var result;
            try {
              ReactCurrentActQueue.isBatchingLegacy = true;
              result = callback();
              if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                  ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                  flushActQueue(queue);
                }
              }
            } catch (error3) {
              popActScope(prevActScopeDepth);
              throw error3;
            } finally {
              ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
            }
            if (result !== null && typeof result === "object" && typeof result.then === "function") {
              var thenableResult = result;
              var wasAwaited = false;
              var thenable = {
                then: function(resolve2, reject) {
                  wasAwaited = true;
                  thenableResult.then(function(returnValue2) {
                    popActScope(prevActScopeDepth);
                    if (actScopeDepth === 0) {
                      recursivelyFlushAsyncActWork(returnValue2, resolve2, reject);
                    } else {
                      resolve2(returnValue2);
                    }
                  }, function(error3) {
                    popActScope(prevActScopeDepth);
                    reject(error3);
                  });
                }
              };
              {
                if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                  Promise.resolve().then(function() {
                  }).then(function() {
                    if (!wasAwaited) {
                      didWarnNoAwaitAct = true;
                      error2("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                    }
                  });
                }
              }
              return thenable;
            } else {
              var returnValue = result;
              popActScope(prevActScopeDepth);
              if (actScopeDepth === 0) {
                var _queue = ReactCurrentActQueue.current;
                if (_queue !== null) {
                  flushActQueue(_queue);
                  ReactCurrentActQueue.current = null;
                }
                var _thenable = {
                  then: function(resolve2, reject) {
                    if (ReactCurrentActQueue.current === null) {
                      ReactCurrentActQueue.current = [];
                      recursivelyFlushAsyncActWork(returnValue, resolve2, reject);
                    } else {
                      resolve2(returnValue);
                    }
                  }
                };
                return _thenable;
              } else {
                var _thenable2 = {
                  then: function(resolve2, reject) {
                    resolve2(returnValue);
                  }
                };
                return _thenable2;
              }
            }
          }
        }
        function popActScope(prevActScopeDepth) {
          {
            if (prevActScopeDepth !== actScopeDepth - 1) {
              error2("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
            }
            actScopeDepth = prevActScopeDepth;
          }
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve2, reject) {
          {
            var queue = ReactCurrentActQueue.current;
            if (queue !== null) {
              try {
                flushActQueue(queue);
                enqueueTask(function() {
                  if (queue.length === 0) {
                    ReactCurrentActQueue.current = null;
                    resolve2(returnValue);
                  } else {
                    recursivelyFlushAsyncActWork(returnValue, resolve2, reject);
                  }
                });
              } catch (error3) {
                reject(error3);
              }
            } else {
              resolve2(returnValue);
            }
          }
        }
        var isFlushing = false;
        function flushActQueue(queue) {
          {
            if (!isFlushing) {
              isFlushing = true;
              var i = 0;
              try {
                for (; i < queue.length; i++) {
                  var callback = queue[i];
                  do {
                    callback = callback(true);
                  } while (callback !== null);
                }
                queue.length = 0;
              } catch (error3) {
                queue = queue.slice(i + 1);
                throw error3;
              } finally {
                isFlushing = false;
              }
            }
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild
        };
        exports.Children = Children;
        exports.Component = Component;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.forwardRef = forwardRef;
        exports.isValidElement = isValidElement;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.startTransition = startTransition;
        exports.unstable_act = act;
        exports.useCallback = useCallback;
        exports.useContext = useContext;
        exports.useDebugValue = useDebugValue;
        exports.useDeferredValue = useDeferredValue;
        exports.useEffect = useEffect;
        exports.useId = useId;
        exports.useImperativeHandle = useImperativeHandle;
        exports.useInsertionEffect = useInsertionEffect;
        exports.useLayoutEffect = useLayoutEffect;
        exports.useMemo = useMemo;
        exports.useReducer = useReducer;
        exports.useRef = useRef;
        exports.useState = useState;
        exports.useSyncExternalStore = useSyncExternalStore;
        exports.useTransition = useTransition;
        exports.version = ReactVersion;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  })(react_development, react_development.exports);
  return react_development.exports;
}
(function(module) {
  if (false) {
    module.exports = requireReact_production_min();
  } else {
    module.exports = requireReact_development();
  }
})(react);
var React = /* @__PURE__ */ getDefaultExportFromCjs(react.exports);
var server_browser = {};
var reactDomServerLegacy_browser_development = {};
var hasRequiredReactDomServerLegacy_browser_development;
function requireReactDomServerLegacy_browser_development() {
  if (hasRequiredReactDomServerLegacy_browser_development)
    return reactDomServerLegacy_browser_development;
  hasRequiredReactDomServerLegacy_browser_development = 1;
  if (true) {
    (function() {
      var React2 = react.exports;
      var ReactVersion = "18.2.0";
      var ReactSharedInternals = React2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function warn2(format2) {
        {
          {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            printWarning("warn", format2, args);
          }
        }
      }
      function error2(format2) {
        {
          {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning("error", format2, args);
          }
        }
      }
      function printWarning(level, format2, args) {
        {
          var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
          var stack = ReactDebugCurrentFrame2.getStackAddendum();
          if (stack !== "") {
            format2 += "%s";
            args = args.concat([stack]);
          }
          var argsWithFormat = args.map(function(item) {
            return String(item);
          });
          argsWithFormat.unshift("Warning: " + format2);
          Function.prototype.apply.call(console[level], console, argsWithFormat);
        }
      }
      function scheduleWork(callback) {
        callback();
      }
      function beginWriting(destination) {
      }
      function writeChunk(destination, chunk) {
        writeChunkAndReturn(destination, chunk);
      }
      function writeChunkAndReturn(destination, chunk) {
        return destination.push(chunk);
      }
      function completeWriting(destination) {
      }
      function close(destination) {
        destination.push(null);
      }
      function stringToChunk(content) {
        return content;
      }
      function stringToPrecomputedChunk(content) {
        return content;
      }
      function closeWithError(destination, error3) {
        destination.destroy(error3);
      }
      function typeName(value) {
        {
          var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
          var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          return type;
        }
      }
      function willCoercionThrow(value) {
        {
          try {
            testStringCoercion(value);
            return false;
          } catch (e) {
            return true;
          }
        }
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkAttributeStringCoercion(value, attributeName) {
        {
          if (willCoercionThrow(value)) {
            error2("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", attributeName, typeName(value));
            return testStringCoercion(value);
          }
        }
      }
      function checkCSSPropertyStringCoercion(value, propName2) {
        {
          if (willCoercionThrow(value)) {
            error2("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", propName2, typeName(value));
            return testStringCoercion(value);
          }
        }
      }
      function checkHtmlStringCoercion(value) {
        {
          if (willCoercionThrow(value)) {
            error2("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
            return testStringCoercion(value);
          }
        }
      }
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var RESERVED = 0;
      var STRING = 1;
      var BOOLEANISH_STRING = 2;
      var BOOLEAN = 3;
      var OVERLOADED_BOOLEAN = 4;
      var NUMERIC = 5;
      var POSITIVE_NUMERIC = 6;
      var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
      var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
      var VALID_ATTRIBUTE_NAME_REGEX = new RegExp("^[" + ATTRIBUTE_NAME_START_CHAR + "][" + ATTRIBUTE_NAME_CHAR + "]*$");
      var illegalAttributeNameCache = {};
      var validatedAttributeNameCache = {};
      function isAttributeNameSafe(attributeName) {
        if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) {
          return true;
        }
        if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) {
          return false;
        }
        if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
          validatedAttributeNameCache[attributeName] = true;
          return true;
        }
        illegalAttributeNameCache[attributeName] = true;
        {
          error2("Invalid attribute name: `%s`", attributeName);
        }
        return false;
      }
      function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
        if (propertyInfo !== null && propertyInfo.type === RESERVED) {
          return false;
        }
        switch (typeof value) {
          case "function":
          case "symbol":
            return true;
          case "boolean": {
            if (isCustomComponentTag) {
              return false;
            }
            if (propertyInfo !== null) {
              return !propertyInfo.acceptsBooleans;
            } else {
              var prefix2 = name.toLowerCase().slice(0, 5);
              return prefix2 !== "data-" && prefix2 !== "aria-";
            }
          }
          default:
            return false;
        }
      }
      function getPropertyInfo(name) {
        return properties.hasOwnProperty(name) ? properties[name] : null;
      }
      function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL2, removeEmptyString) {
        this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
        this.attributeName = attributeName;
        this.attributeNamespace = attributeNamespace;
        this.mustUseProperty = mustUseProperty;
        this.propertyName = name;
        this.type = type;
        this.sanitizeURL = sanitizeURL2;
        this.removeEmptyString = removeEmptyString;
      }
      var properties = {};
      var reservedProps = [
        "children",
        "dangerouslySetInnerHTML",
        "defaultValue",
        "defaultChecked",
        "innerHTML",
        "suppressContentEditableWarning",
        "suppressHydrationWarning",
        "style"
      ];
      reservedProps.forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          RESERVED,
          false,
          name,
          null,
          false,
          false
        );
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(_ref) {
        var name = _ref[0], attributeName = _ref[1];
        properties[name] = new PropertyInfoRecord(
          name,
          STRING,
          false,
          attributeName,
          null,
          false,
          false
        );
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          BOOLEANISH_STRING,
          false,
          name.toLowerCase(),
          null,
          false,
          false
        );
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          BOOLEANISH_STRING,
          false,
          name,
          null,
          false,
          false
        );
      });
      [
        "allowFullScreen",
        "async",
        "autoFocus",
        "autoPlay",
        "controls",
        "default",
        "defer",
        "disabled",
        "disablePictureInPicture",
        "disableRemotePlayback",
        "formNoValidate",
        "hidden",
        "loop",
        "noModule",
        "noValidate",
        "open",
        "playsInline",
        "readOnly",
        "required",
        "reversed",
        "scoped",
        "seamless",
        "itemScope"
      ].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          BOOLEAN,
          false,
          name.toLowerCase(),
          null,
          false,
          false
        );
      });
      [
        "checked",
        "multiple",
        "muted",
        "selected"
      ].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          BOOLEAN,
          true,
          name,
          null,
          false,
          false
        );
      });
      [
        "capture",
        "download"
      ].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          OVERLOADED_BOOLEAN,
          false,
          name,
          null,
          false,
          false
        );
      });
      [
        "cols",
        "rows",
        "size",
        "span"
      ].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          POSITIVE_NUMERIC,
          false,
          name,
          null,
          false,
          false
        );
      });
      ["rowSpan", "start"].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          NUMERIC,
          false,
          name.toLowerCase(),
          null,
          false,
          false
        );
      });
      var CAMELIZE = /[\-\:]([a-z])/g;
      var capitalize = function(token) {
        return token[1].toUpperCase();
      };
      [
        "accent-height",
        "alignment-baseline",
        "arabic-form",
        "baseline-shift",
        "cap-height",
        "clip-path",
        "clip-rule",
        "color-interpolation",
        "color-interpolation-filters",
        "color-profile",
        "color-rendering",
        "dominant-baseline",
        "enable-background",
        "fill-opacity",
        "fill-rule",
        "flood-color",
        "flood-opacity",
        "font-family",
        "font-size",
        "font-size-adjust",
        "font-stretch",
        "font-style",
        "font-variant",
        "font-weight",
        "glyph-name",
        "glyph-orientation-horizontal",
        "glyph-orientation-vertical",
        "horiz-adv-x",
        "horiz-origin-x",
        "image-rendering",
        "letter-spacing",
        "lighting-color",
        "marker-end",
        "marker-mid",
        "marker-start",
        "overline-position",
        "overline-thickness",
        "paint-order",
        "panose-1",
        "pointer-events",
        "rendering-intent",
        "shape-rendering",
        "stop-color",
        "stop-opacity",
        "strikethrough-position",
        "strikethrough-thickness",
        "stroke-dasharray",
        "stroke-dashoffset",
        "stroke-linecap",
        "stroke-linejoin",
        "stroke-miterlimit",
        "stroke-opacity",
        "stroke-width",
        "text-anchor",
        "text-decoration",
        "text-rendering",
        "underline-position",
        "underline-thickness",
        "unicode-bidi",
        "unicode-range",
        "units-per-em",
        "v-alphabetic",
        "v-hanging",
        "v-ideographic",
        "v-mathematical",
        "vector-effect",
        "vert-adv-y",
        "vert-origin-x",
        "vert-origin-y",
        "word-spacing",
        "writing-mode",
        "xmlns:xlink",
        "x-height"
      ].forEach(function(attributeName) {
        var name = attributeName.replace(CAMELIZE, capitalize);
        properties[name] = new PropertyInfoRecord(
          name,
          STRING,
          false,
          attributeName,
          null,
          false,
          false
        );
      });
      [
        "xlink:actuate",
        "xlink:arcrole",
        "xlink:role",
        "xlink:show",
        "xlink:title",
        "xlink:type"
      ].forEach(function(attributeName) {
        var name = attributeName.replace(CAMELIZE, capitalize);
        properties[name] = new PropertyInfoRecord(
          name,
          STRING,
          false,
          attributeName,
          "http://www.w3.org/1999/xlink",
          false,
          false
        );
      });
      [
        "xml:base",
        "xml:lang",
        "xml:space"
      ].forEach(function(attributeName) {
        var name = attributeName.replace(CAMELIZE, capitalize);
        properties[name] = new PropertyInfoRecord(
          name,
          STRING,
          false,
          attributeName,
          "http://www.w3.org/XML/1998/namespace",
          false,
          false
        );
      });
      ["tabIndex", "crossOrigin"].forEach(function(attributeName) {
        properties[attributeName] = new PropertyInfoRecord(
          attributeName,
          STRING,
          false,
          attributeName.toLowerCase(),
          null,
          false,
          false
        );
      });
      var xlinkHref = "xlinkHref";
      properties[xlinkHref] = new PropertyInfoRecord(
        "xlinkHref",
        STRING,
        false,
        "xlink:href",
        "http://www.w3.org/1999/xlink",
        true,
        false
      );
      ["src", "href", "action", "formAction"].forEach(function(attributeName) {
        properties[attributeName] = new PropertyInfoRecord(
          attributeName,
          STRING,
          false,
          attributeName.toLowerCase(),
          null,
          true,
          true
        );
      });
      var isUnitlessNumber = {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      function prefixKey(prefix2, key) {
        return prefix2 + key.charAt(0).toUpperCase() + key.substring(1);
      }
      var prefixes = ["Webkit", "ms", "Moz", "O"];
      Object.keys(isUnitlessNumber).forEach(function(prop) {
        prefixes.forEach(function(prefix2) {
          isUnitlessNumber[prefixKey(prefix2, prop)] = isUnitlessNumber[prop];
        });
      });
      var hasReadOnlyValue = {
        button: true,
        checkbox: true,
        image: true,
        hidden: true,
        radio: true,
        reset: true,
        submit: true
      };
      function checkControlledValueProps(tagName, props) {
        {
          if (!(hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || props.value == null)) {
            error2("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.");
          }
          if (!(props.onChange || props.readOnly || props.disabled || props.checked == null)) {
            error2("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
          }
        }
      }
      function isCustomComponent(tagName, props) {
        if (tagName.indexOf("-") === -1) {
          return typeof props.is === "string";
        }
        switch (tagName) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var ariaProperties = {
        "aria-current": 0,
        "aria-description": 0,
        "aria-details": 0,
        "aria-disabled": 0,
        "aria-hidden": 0,
        "aria-invalid": 0,
        "aria-keyshortcuts": 0,
        "aria-label": 0,
        "aria-roledescription": 0,
        "aria-autocomplete": 0,
        "aria-checked": 0,
        "aria-expanded": 0,
        "aria-haspopup": 0,
        "aria-level": 0,
        "aria-modal": 0,
        "aria-multiline": 0,
        "aria-multiselectable": 0,
        "aria-orientation": 0,
        "aria-placeholder": 0,
        "aria-pressed": 0,
        "aria-readonly": 0,
        "aria-required": 0,
        "aria-selected": 0,
        "aria-sort": 0,
        "aria-valuemax": 0,
        "aria-valuemin": 0,
        "aria-valuenow": 0,
        "aria-valuetext": 0,
        "aria-atomic": 0,
        "aria-busy": 0,
        "aria-live": 0,
        "aria-relevant": 0,
        "aria-dropeffect": 0,
        "aria-grabbed": 0,
        "aria-activedescendant": 0,
        "aria-colcount": 0,
        "aria-colindex": 0,
        "aria-colspan": 0,
        "aria-controls": 0,
        "aria-describedby": 0,
        "aria-errormessage": 0,
        "aria-flowto": 0,
        "aria-labelledby": 0,
        "aria-owns": 0,
        "aria-posinset": 0,
        "aria-rowcount": 0,
        "aria-rowindex": 0,
        "aria-rowspan": 0,
        "aria-setsize": 0
      };
      var warnedProperties = {};
      var rARIA = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$");
      var rARIACamel = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
      function validateProperty(tagName, name) {
        {
          if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) {
            return true;
          }
          if (rARIACamel.test(name)) {
            var ariaName = "aria-" + name.slice(4).toLowerCase();
            var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;
            if (correctName == null) {
              error2("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", name);
              warnedProperties[name] = true;
              return true;
            }
            if (name !== correctName) {
              error2("Invalid ARIA attribute `%s`. Did you mean `%s`?", name, correctName);
              warnedProperties[name] = true;
              return true;
            }
          }
          if (rARIA.test(name)) {
            var lowerCasedName = name.toLowerCase();
            var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;
            if (standardName == null) {
              warnedProperties[name] = true;
              return false;
            }
            if (name !== standardName) {
              error2("Unknown ARIA attribute `%s`. Did you mean `%s`?", name, standardName);
              warnedProperties[name] = true;
              return true;
            }
          }
        }
        return true;
      }
      function warnInvalidARIAProps(type, props) {
        {
          var invalidProps = [];
          for (var key in props) {
            var isValid = validateProperty(type, key);
            if (!isValid) {
              invalidProps.push(key);
            }
          }
          var unknownPropString = invalidProps.map(function(prop) {
            return "`" + prop + "`";
          }).join(", ");
          if (invalidProps.length === 1) {
            error2("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
          } else if (invalidProps.length > 1) {
            error2("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
          }
        }
      }
      function validateProperties(type, props) {
        if (isCustomComponent(type, props)) {
          return;
        }
        warnInvalidARIAProps(type, props);
      }
      var didWarnValueNull = false;
      function validateProperties$1(type, props) {
        {
          if (type !== "input" && type !== "textarea" && type !== "select") {
            return;
          }
          if (props != null && props.value === null && !didWarnValueNull) {
            didWarnValueNull = true;
            if (type === "select" && props.multiple) {
              error2("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", type);
            } else {
              error2("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", type);
            }
          }
        }
      }
      var possibleStandardNames = {
        accept: "accept",
        acceptcharset: "acceptCharset",
        "accept-charset": "acceptCharset",
        accesskey: "accessKey",
        action: "action",
        allowfullscreen: "allowFullScreen",
        alt: "alt",
        as: "as",
        async: "async",
        autocapitalize: "autoCapitalize",
        autocomplete: "autoComplete",
        autocorrect: "autoCorrect",
        autofocus: "autoFocus",
        autoplay: "autoPlay",
        autosave: "autoSave",
        capture: "capture",
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        challenge: "challenge",
        charset: "charSet",
        checked: "checked",
        children: "children",
        cite: "cite",
        class: "className",
        classid: "classID",
        classname: "className",
        cols: "cols",
        colspan: "colSpan",
        content: "content",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        controls: "controls",
        controlslist: "controlsList",
        coords: "coords",
        crossorigin: "crossOrigin",
        dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
        data: "data",
        datetime: "dateTime",
        default: "default",
        defaultchecked: "defaultChecked",
        defaultvalue: "defaultValue",
        defer: "defer",
        dir: "dir",
        disabled: "disabled",
        disablepictureinpicture: "disablePictureInPicture",
        disableremoteplayback: "disableRemotePlayback",
        download: "download",
        draggable: "draggable",
        enctype: "encType",
        enterkeyhint: "enterKeyHint",
        for: "htmlFor",
        form: "form",
        formmethod: "formMethod",
        formaction: "formAction",
        formenctype: "formEncType",
        formnovalidate: "formNoValidate",
        formtarget: "formTarget",
        frameborder: "frameBorder",
        headers: "headers",
        height: "height",
        hidden: "hidden",
        high: "high",
        href: "href",
        hreflang: "hrefLang",
        htmlfor: "htmlFor",
        httpequiv: "httpEquiv",
        "http-equiv": "httpEquiv",
        icon: "icon",
        id: "id",
        imagesizes: "imageSizes",
        imagesrcset: "imageSrcSet",
        innerhtml: "innerHTML",
        inputmode: "inputMode",
        integrity: "integrity",
        is: "is",
        itemid: "itemID",
        itemprop: "itemProp",
        itemref: "itemRef",
        itemscope: "itemScope",
        itemtype: "itemType",
        keyparams: "keyParams",
        keytype: "keyType",
        kind: "kind",
        label: "label",
        lang: "lang",
        list: "list",
        loop: "loop",
        low: "low",
        manifest: "manifest",
        marginwidth: "marginWidth",
        marginheight: "marginHeight",
        max: "max",
        maxlength: "maxLength",
        media: "media",
        mediagroup: "mediaGroup",
        method: "method",
        min: "min",
        minlength: "minLength",
        multiple: "multiple",
        muted: "muted",
        name: "name",
        nomodule: "noModule",
        nonce: "nonce",
        novalidate: "noValidate",
        open: "open",
        optimum: "optimum",
        pattern: "pattern",
        placeholder: "placeholder",
        playsinline: "playsInline",
        poster: "poster",
        preload: "preload",
        profile: "profile",
        radiogroup: "radioGroup",
        readonly: "readOnly",
        referrerpolicy: "referrerPolicy",
        rel: "rel",
        required: "required",
        reversed: "reversed",
        role: "role",
        rows: "rows",
        rowspan: "rowSpan",
        sandbox: "sandbox",
        scope: "scope",
        scoped: "scoped",
        scrolling: "scrolling",
        seamless: "seamless",
        selected: "selected",
        shape: "shape",
        size: "size",
        sizes: "sizes",
        span: "span",
        spellcheck: "spellCheck",
        src: "src",
        srcdoc: "srcDoc",
        srclang: "srcLang",
        srcset: "srcSet",
        start: "start",
        step: "step",
        style: "style",
        summary: "summary",
        tabindex: "tabIndex",
        target: "target",
        title: "title",
        type: "type",
        usemap: "useMap",
        value: "value",
        width: "width",
        wmode: "wmode",
        wrap: "wrap",
        about: "about",
        accentheight: "accentHeight",
        "accent-height": "accentHeight",
        accumulate: "accumulate",
        additive: "additive",
        alignmentbaseline: "alignmentBaseline",
        "alignment-baseline": "alignmentBaseline",
        allowreorder: "allowReorder",
        alphabetic: "alphabetic",
        amplitude: "amplitude",
        arabicform: "arabicForm",
        "arabic-form": "arabicForm",
        ascent: "ascent",
        attributename: "attributeName",
        attributetype: "attributeType",
        autoreverse: "autoReverse",
        azimuth: "azimuth",
        basefrequency: "baseFrequency",
        baselineshift: "baselineShift",
        "baseline-shift": "baselineShift",
        baseprofile: "baseProfile",
        bbox: "bbox",
        begin: "begin",
        bias: "bias",
        by: "by",
        calcmode: "calcMode",
        capheight: "capHeight",
        "cap-height": "capHeight",
        clip: "clip",
        clippath: "clipPath",
        "clip-path": "clipPath",
        clippathunits: "clipPathUnits",
        cliprule: "clipRule",
        "clip-rule": "clipRule",
        color: "color",
        colorinterpolation: "colorInterpolation",
        "color-interpolation": "colorInterpolation",
        colorinterpolationfilters: "colorInterpolationFilters",
        "color-interpolation-filters": "colorInterpolationFilters",
        colorprofile: "colorProfile",
        "color-profile": "colorProfile",
        colorrendering: "colorRendering",
        "color-rendering": "colorRendering",
        contentscripttype: "contentScriptType",
        contentstyletype: "contentStyleType",
        cursor: "cursor",
        cx: "cx",
        cy: "cy",
        d: "d",
        datatype: "datatype",
        decelerate: "decelerate",
        descent: "descent",
        diffuseconstant: "diffuseConstant",
        direction: "direction",
        display: "display",
        divisor: "divisor",
        dominantbaseline: "dominantBaseline",
        "dominant-baseline": "dominantBaseline",
        dur: "dur",
        dx: "dx",
        dy: "dy",
        edgemode: "edgeMode",
        elevation: "elevation",
        enablebackground: "enableBackground",
        "enable-background": "enableBackground",
        end: "end",
        exponent: "exponent",
        externalresourcesrequired: "externalResourcesRequired",
        fill: "fill",
        fillopacity: "fillOpacity",
        "fill-opacity": "fillOpacity",
        fillrule: "fillRule",
        "fill-rule": "fillRule",
        filter: "filter",
        filterres: "filterRes",
        filterunits: "filterUnits",
        floodopacity: "floodOpacity",
        "flood-opacity": "floodOpacity",
        floodcolor: "floodColor",
        "flood-color": "floodColor",
        focusable: "focusable",
        fontfamily: "fontFamily",
        "font-family": "fontFamily",
        fontsize: "fontSize",
        "font-size": "fontSize",
        fontsizeadjust: "fontSizeAdjust",
        "font-size-adjust": "fontSizeAdjust",
        fontstretch: "fontStretch",
        "font-stretch": "fontStretch",
        fontstyle: "fontStyle",
        "font-style": "fontStyle",
        fontvariant: "fontVariant",
        "font-variant": "fontVariant",
        fontweight: "fontWeight",
        "font-weight": "fontWeight",
        format: "format",
        from: "from",
        fx: "fx",
        fy: "fy",
        g1: "g1",
        g2: "g2",
        glyphname: "glyphName",
        "glyph-name": "glyphName",
        glyphorientationhorizontal: "glyphOrientationHorizontal",
        "glyph-orientation-horizontal": "glyphOrientationHorizontal",
        glyphorientationvertical: "glyphOrientationVertical",
        "glyph-orientation-vertical": "glyphOrientationVertical",
        glyphref: "glyphRef",
        gradienttransform: "gradientTransform",
        gradientunits: "gradientUnits",
        hanging: "hanging",
        horizadvx: "horizAdvX",
        "horiz-adv-x": "horizAdvX",
        horizoriginx: "horizOriginX",
        "horiz-origin-x": "horizOriginX",
        ideographic: "ideographic",
        imagerendering: "imageRendering",
        "image-rendering": "imageRendering",
        in2: "in2",
        in: "in",
        inlist: "inlist",
        intercept: "intercept",
        k1: "k1",
        k2: "k2",
        k3: "k3",
        k4: "k4",
        k: "k",
        kernelmatrix: "kernelMatrix",
        kernelunitlength: "kernelUnitLength",
        kerning: "kerning",
        keypoints: "keyPoints",
        keysplines: "keySplines",
        keytimes: "keyTimes",
        lengthadjust: "lengthAdjust",
        letterspacing: "letterSpacing",
        "letter-spacing": "letterSpacing",
        lightingcolor: "lightingColor",
        "lighting-color": "lightingColor",
        limitingconeangle: "limitingConeAngle",
        local: "local",
        markerend: "markerEnd",
        "marker-end": "markerEnd",
        markerheight: "markerHeight",
        markermid: "markerMid",
        "marker-mid": "markerMid",
        markerstart: "markerStart",
        "marker-start": "markerStart",
        markerunits: "markerUnits",
        markerwidth: "markerWidth",
        mask: "mask",
        maskcontentunits: "maskContentUnits",
        maskunits: "maskUnits",
        mathematical: "mathematical",
        mode: "mode",
        numoctaves: "numOctaves",
        offset: "offset",
        opacity: "opacity",
        operator: "operator",
        order: "order",
        orient: "orient",
        orientation: "orientation",
        origin: "origin",
        overflow: "overflow",
        overlineposition: "overlinePosition",
        "overline-position": "overlinePosition",
        overlinethickness: "overlineThickness",
        "overline-thickness": "overlineThickness",
        paintorder: "paintOrder",
        "paint-order": "paintOrder",
        panose1: "panose1",
        "panose-1": "panose1",
        pathlength: "pathLength",
        patterncontentunits: "patternContentUnits",
        patterntransform: "patternTransform",
        patternunits: "patternUnits",
        pointerevents: "pointerEvents",
        "pointer-events": "pointerEvents",
        points: "points",
        pointsatx: "pointsAtX",
        pointsaty: "pointsAtY",
        pointsatz: "pointsAtZ",
        prefix: "prefix",
        preservealpha: "preserveAlpha",
        preserveaspectratio: "preserveAspectRatio",
        primitiveunits: "primitiveUnits",
        property: "property",
        r: "r",
        radius: "radius",
        refx: "refX",
        refy: "refY",
        renderingintent: "renderingIntent",
        "rendering-intent": "renderingIntent",
        repeatcount: "repeatCount",
        repeatdur: "repeatDur",
        requiredextensions: "requiredExtensions",
        requiredfeatures: "requiredFeatures",
        resource: "resource",
        restart: "restart",
        result: "result",
        results: "results",
        rotate: "rotate",
        rx: "rx",
        ry: "ry",
        scale: "scale",
        security: "security",
        seed: "seed",
        shaperendering: "shapeRendering",
        "shape-rendering": "shapeRendering",
        slope: "slope",
        spacing: "spacing",
        specularconstant: "specularConstant",
        specularexponent: "specularExponent",
        speed: "speed",
        spreadmethod: "spreadMethod",
        startoffset: "startOffset",
        stddeviation: "stdDeviation",
        stemh: "stemh",
        stemv: "stemv",
        stitchtiles: "stitchTiles",
        stopcolor: "stopColor",
        "stop-color": "stopColor",
        stopopacity: "stopOpacity",
        "stop-opacity": "stopOpacity",
        strikethroughposition: "strikethroughPosition",
        "strikethrough-position": "strikethroughPosition",
        strikethroughthickness: "strikethroughThickness",
        "strikethrough-thickness": "strikethroughThickness",
        string: "string",
        stroke: "stroke",
        strokedasharray: "strokeDasharray",
        "stroke-dasharray": "strokeDasharray",
        strokedashoffset: "strokeDashoffset",
        "stroke-dashoffset": "strokeDashoffset",
        strokelinecap: "strokeLinecap",
        "stroke-linecap": "strokeLinecap",
        strokelinejoin: "strokeLinejoin",
        "stroke-linejoin": "strokeLinejoin",
        strokemiterlimit: "strokeMiterlimit",
        "stroke-miterlimit": "strokeMiterlimit",
        strokewidth: "strokeWidth",
        "stroke-width": "strokeWidth",
        strokeopacity: "strokeOpacity",
        "stroke-opacity": "strokeOpacity",
        suppresscontenteditablewarning: "suppressContentEditableWarning",
        suppresshydrationwarning: "suppressHydrationWarning",
        surfacescale: "surfaceScale",
        systemlanguage: "systemLanguage",
        tablevalues: "tableValues",
        targetx: "targetX",
        targety: "targetY",
        textanchor: "textAnchor",
        "text-anchor": "textAnchor",
        textdecoration: "textDecoration",
        "text-decoration": "textDecoration",
        textlength: "textLength",
        textrendering: "textRendering",
        "text-rendering": "textRendering",
        to: "to",
        transform: "transform",
        typeof: "typeof",
        u1: "u1",
        u2: "u2",
        underlineposition: "underlinePosition",
        "underline-position": "underlinePosition",
        underlinethickness: "underlineThickness",
        "underline-thickness": "underlineThickness",
        unicode: "unicode",
        unicodebidi: "unicodeBidi",
        "unicode-bidi": "unicodeBidi",
        unicoderange: "unicodeRange",
        "unicode-range": "unicodeRange",
        unitsperem: "unitsPerEm",
        "units-per-em": "unitsPerEm",
        unselectable: "unselectable",
        valphabetic: "vAlphabetic",
        "v-alphabetic": "vAlphabetic",
        values: "values",
        vectoreffect: "vectorEffect",
        "vector-effect": "vectorEffect",
        version: "version",
        vertadvy: "vertAdvY",
        "vert-adv-y": "vertAdvY",
        vertoriginx: "vertOriginX",
        "vert-origin-x": "vertOriginX",
        vertoriginy: "vertOriginY",
        "vert-origin-y": "vertOriginY",
        vhanging: "vHanging",
        "v-hanging": "vHanging",
        videographic: "vIdeographic",
        "v-ideographic": "vIdeographic",
        viewbox: "viewBox",
        viewtarget: "viewTarget",
        visibility: "visibility",
        vmathematical: "vMathematical",
        "v-mathematical": "vMathematical",
        vocab: "vocab",
        widths: "widths",
        wordspacing: "wordSpacing",
        "word-spacing": "wordSpacing",
        writingmode: "writingMode",
        "writing-mode": "writingMode",
        x1: "x1",
        x2: "x2",
        x: "x",
        xchannelselector: "xChannelSelector",
        xheight: "xHeight",
        "x-height": "xHeight",
        xlinkactuate: "xlinkActuate",
        "xlink:actuate": "xlinkActuate",
        xlinkarcrole: "xlinkArcrole",
        "xlink:arcrole": "xlinkArcrole",
        xlinkhref: "xlinkHref",
        "xlink:href": "xlinkHref",
        xlinkrole: "xlinkRole",
        "xlink:role": "xlinkRole",
        xlinkshow: "xlinkShow",
        "xlink:show": "xlinkShow",
        xlinktitle: "xlinkTitle",
        "xlink:title": "xlinkTitle",
        xlinktype: "xlinkType",
        "xlink:type": "xlinkType",
        xmlbase: "xmlBase",
        "xml:base": "xmlBase",
        xmllang: "xmlLang",
        "xml:lang": "xmlLang",
        xmlns: "xmlns",
        "xml:space": "xmlSpace",
        xmlnsxlink: "xmlnsXlink",
        "xmlns:xlink": "xmlnsXlink",
        xmlspace: "xmlSpace",
        y1: "y1",
        y2: "y2",
        y: "y",
        ychannelselector: "yChannelSelector",
        z: "z",
        zoomandpan: "zoomAndPan"
      };
      var validateProperty$1 = function() {
      };
      {
        var warnedProperties$1 = {};
        var EVENT_NAME_REGEX = /^on./;
        var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
        var rARIA$1 = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$");
        var rARIACamel$1 = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
        validateProperty$1 = function(tagName, name, value, eventRegistry) {
          if (hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
            return true;
          }
          var lowerCasedName = name.toLowerCase();
          if (lowerCasedName === "onfocusin" || lowerCasedName === "onfocusout") {
            error2("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.");
            warnedProperties$1[name] = true;
            return true;
          }
          if (eventRegistry != null) {
            var registrationNameDependencies = eventRegistry.registrationNameDependencies, possibleRegistrationNames = eventRegistry.possibleRegistrationNames;
            if (registrationNameDependencies.hasOwnProperty(name)) {
              return true;
            }
            var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;
            if (registrationName != null) {
              error2("Invalid event handler property `%s`. Did you mean `%s`?", name, registrationName);
              warnedProperties$1[name] = true;
              return true;
            }
            if (EVENT_NAME_REGEX.test(name)) {
              error2("Unknown event handler property `%s`. It will be ignored.", name);
              warnedProperties$1[name] = true;
              return true;
            }
          } else if (EVENT_NAME_REGEX.test(name)) {
            if (INVALID_EVENT_NAME_REGEX.test(name)) {
              error2("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", name);
            }
            warnedProperties$1[name] = true;
            return true;
          }
          if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
            return true;
          }
          if (lowerCasedName === "innerhtml") {
            error2("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`.");
            warnedProperties$1[name] = true;
            return true;
          }
          if (lowerCasedName === "aria") {
            error2("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead.");
            warnedProperties$1[name] = true;
            return true;
          }
          if (lowerCasedName === "is" && value !== null && value !== void 0 && typeof value !== "string") {
            error2("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof value);
            warnedProperties$1[name] = true;
            return true;
          }
          if (typeof value === "number" && isNaN(value)) {
            error2("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", name);
            warnedProperties$1[name] = true;
            return true;
          }
          var propertyInfo = getPropertyInfo(name);
          var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;
          if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
            var standardName = possibleStandardNames[lowerCasedName];
            if (standardName !== name) {
              error2("Invalid DOM property `%s`. Did you mean `%s`?", name, standardName);
              warnedProperties$1[name] = true;
              return true;
            }
          } else if (!isReserved && name !== lowerCasedName) {
            error2("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", name, lowerCasedName);
            warnedProperties$1[name] = true;
            return true;
          }
          if (typeof value === "boolean" && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
            if (value) {
              error2('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', value, name, name, value, name);
            } else {
              error2('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
            }
            warnedProperties$1[name] = true;
            return true;
          }
          if (isReserved) {
            return true;
          }
          if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
            warnedProperties$1[name] = true;
            return false;
          }
          if ((value === "false" || value === "true") && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
            error2("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", value, name, value === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', name, value);
            warnedProperties$1[name] = true;
            return true;
          }
          return true;
        };
      }
      var warnUnknownProperties = function(type, props, eventRegistry) {
        {
          var unknownProps = [];
          for (var key in props) {
            var isValid = validateProperty$1(type, key, props[key], eventRegistry);
            if (!isValid) {
              unknownProps.push(key);
            }
          }
          var unknownPropString = unknownProps.map(function(prop) {
            return "`" + prop + "`";
          }).join(", ");
          if (unknownProps.length === 1) {
            error2("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
          } else if (unknownProps.length > 1) {
            error2("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
          }
        }
      };
      function validateProperties$2(type, props, eventRegistry) {
        if (isCustomComponent(type, props)) {
          return;
        }
        warnUnknownProperties(type, props, eventRegistry);
      }
      var warnValidStyle = function() {
      };
      {
        var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
        var msPattern = /^-ms-/;
        var hyphenPattern = /-(.)/g;
        var badStyleValueWithSemicolonPattern = /;\s*$/;
        var warnedStyleNames = {};
        var warnedStyleValues = {};
        var warnedForNaNValue = false;
        var warnedForInfinityValue = false;
        var camelize = function(string) {
          return string.replace(hyphenPattern, function(_, character) {
            return character.toUpperCase();
          });
        };
        var warnHyphenatedStyleName = function(name) {
          if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
            return;
          }
          warnedStyleNames[name] = true;
          error2(
            "Unsupported style property %s. Did you mean %s?",
            name,
            camelize(name.replace(msPattern, "ms-"))
          );
        };
        var warnBadVendoredStyleName = function(name) {
          if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
            return;
          }
          warnedStyleNames[name] = true;
          error2("Unsupported vendor-prefixed style property %s. Did you mean %s?", name, name.charAt(0).toUpperCase() + name.slice(1));
        };
        var warnStyleValueWithSemicolon = function(name, value) {
          if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
            return;
          }
          warnedStyleValues[value] = true;
          error2(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, name, value.replace(badStyleValueWithSemicolonPattern, ""));
        };
        var warnStyleValueIsNaN = function(name, value) {
          if (warnedForNaNValue) {
            return;
          }
          warnedForNaNValue = true;
          error2("`NaN` is an invalid value for the `%s` css style property.", name);
        };
        var warnStyleValueIsInfinity = function(name, value) {
          if (warnedForInfinityValue) {
            return;
          }
          warnedForInfinityValue = true;
          error2("`Infinity` is an invalid value for the `%s` css style property.", name);
        };
        warnValidStyle = function(name, value) {
          if (name.indexOf("-") > -1) {
            warnHyphenatedStyleName(name);
          } else if (badVendoredStyleNamePattern.test(name)) {
            warnBadVendoredStyleName(name);
          } else if (badStyleValueWithSemicolonPattern.test(value)) {
            warnStyleValueWithSemicolon(name, value);
          }
          if (typeof value === "number") {
            if (isNaN(value)) {
              warnStyleValueIsNaN(name, value);
            } else if (!isFinite(value)) {
              warnStyleValueIsInfinity(name, value);
            }
          }
        };
      }
      var warnValidStyle$1 = warnValidStyle;
      var matchHtmlRegExp = /["'&<>]/;
      function escapeHtml(string) {
        {
          checkHtmlStringCoercion(string);
        }
        var str = "" + string;
        var match = matchHtmlRegExp.exec(str);
        if (!match) {
          return str;
        }
        var escape2;
        var html2 = "";
        var index;
        var lastIndex = 0;
        for (index = match.index; index < str.length; index++) {
          switch (str.charCodeAt(index)) {
            case 34:
              escape2 = "&quot;";
              break;
            case 38:
              escape2 = "&amp;";
              break;
            case 39:
              escape2 = "&#x27;";
              break;
            case 60:
              escape2 = "&lt;";
              break;
            case 62:
              escape2 = "&gt;";
              break;
            default:
              continue;
          }
          if (lastIndex !== index) {
            html2 += str.substring(lastIndex, index);
          }
          lastIndex = index + 1;
          html2 += escape2;
        }
        return lastIndex !== index ? html2 + str.substring(lastIndex, index) : html2;
      }
      function escapeTextForBrowser(text) {
        if (typeof text === "boolean" || typeof text === "number") {
          return "" + text;
        }
        return escapeHtml(text);
      }
      var uppercasePattern = /([A-Z])/g;
      var msPattern$1 = /^ms-/;
      function hyphenateStyleName(name) {
        return name.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern$1, "-ms-");
      }
      var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
      var didWarn = false;
      function sanitizeURL(url2) {
        {
          if (!didWarn && isJavaScriptProtocol.test(url2)) {
            didWarn = true;
            error2("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(url2));
          }
        }
      }
      var isArrayImpl = Array.isArray;
      function isArray(a) {
        return isArrayImpl(a);
      }
      var startInlineScript = stringToPrecomputedChunk("<script>");
      var endInlineScript = stringToPrecomputedChunk("<\/script>");
      var startScriptSrc = stringToPrecomputedChunk('<script src="');
      var startModuleSrc = stringToPrecomputedChunk('<script type="module" src="');
      var endAsyncScript = stringToPrecomputedChunk('" async=""><\/script>');
      function escapeBootstrapScriptContent(scriptText) {
        {
          checkHtmlStringCoercion(scriptText);
        }
        return ("" + scriptText).replace(scriptRegex, scriptReplacer);
      }
      var scriptRegex = /(<\/|<)(s)(cript)/gi;
      var scriptReplacer = function(match, prefix2, s2, suffix) {
        return "" + prefix2 + (s2 === "s" ? "\\u0073" : "\\u0053") + suffix;
      };
      function createResponseState(identifierPrefix, nonce, bootstrapScriptContent, bootstrapScripts, bootstrapModules) {
        var idPrefix = identifierPrefix === void 0 ? "" : identifierPrefix;
        var inlineScriptWithNonce = nonce === void 0 ? startInlineScript : stringToPrecomputedChunk('<script nonce="' + escapeTextForBrowser(nonce) + '">');
        var bootstrapChunks = [];
        if (bootstrapScriptContent !== void 0) {
          bootstrapChunks.push(inlineScriptWithNonce, stringToChunk(escapeBootstrapScriptContent(bootstrapScriptContent)), endInlineScript);
        }
        if (bootstrapScripts !== void 0) {
          for (var i = 0; i < bootstrapScripts.length; i++) {
            bootstrapChunks.push(startScriptSrc, stringToChunk(escapeTextForBrowser(bootstrapScripts[i])), endAsyncScript);
          }
        }
        if (bootstrapModules !== void 0) {
          for (var _i = 0; _i < bootstrapModules.length; _i++) {
            bootstrapChunks.push(startModuleSrc, stringToChunk(escapeTextForBrowser(bootstrapModules[_i])), endAsyncScript);
          }
        }
        return {
          bootstrapChunks,
          startInlineScript: inlineScriptWithNonce,
          placeholderPrefix: stringToPrecomputedChunk(idPrefix + "P:"),
          segmentPrefix: stringToPrecomputedChunk(idPrefix + "S:"),
          boundaryPrefix: idPrefix + "B:",
          idPrefix,
          nextSuspenseID: 0,
          sentCompleteSegmentFunction: false,
          sentCompleteBoundaryFunction: false,
          sentClientRenderFunction: false
        };
      }
      var ROOT_HTML_MODE = 0;
      var HTML_MODE = 1;
      var SVG_MODE = 2;
      var MATHML_MODE = 3;
      var HTML_TABLE_MODE = 4;
      var HTML_TABLE_BODY_MODE = 5;
      var HTML_TABLE_ROW_MODE = 6;
      var HTML_COLGROUP_MODE = 7;
      function createFormatContext(insertionMode, selectedValue) {
        return {
          insertionMode,
          selectedValue
        };
      }
      function getChildFormatContext(parentContext, type, props) {
        switch (type) {
          case "select":
            return createFormatContext(HTML_MODE, props.value != null ? props.value : props.defaultValue);
          case "svg":
            return createFormatContext(SVG_MODE, null);
          case "math":
            return createFormatContext(MATHML_MODE, null);
          case "foreignObject":
            return createFormatContext(HTML_MODE, null);
          case "table":
            return createFormatContext(HTML_TABLE_MODE, null);
          case "thead":
          case "tbody":
          case "tfoot":
            return createFormatContext(HTML_TABLE_BODY_MODE, null);
          case "colgroup":
            return createFormatContext(HTML_COLGROUP_MODE, null);
          case "tr":
            return createFormatContext(HTML_TABLE_ROW_MODE, null);
        }
        if (parentContext.insertionMode >= HTML_TABLE_MODE) {
          return createFormatContext(HTML_MODE, null);
        }
        if (parentContext.insertionMode === ROOT_HTML_MODE) {
          return createFormatContext(HTML_MODE, null);
        }
        return parentContext;
      }
      var UNINITIALIZED_SUSPENSE_BOUNDARY_ID = null;
      function assignSuspenseBoundaryID(responseState) {
        var generatedID = responseState.nextSuspenseID++;
        return stringToPrecomputedChunk(responseState.boundaryPrefix + generatedID.toString(16));
      }
      function makeId(responseState, treeId, localId) {
        var idPrefix = responseState.idPrefix;
        var id = ":" + idPrefix + "R" + treeId;
        if (localId > 0) {
          id += "H" + localId.toString(32);
        }
        return id + ":";
      }
      function encodeHTMLTextNode(text) {
        return escapeTextForBrowser(text);
      }
      var textSeparator = stringToPrecomputedChunk("<!-- -->");
      function pushTextInstance(target, text, responseState, textEmbedded) {
        if (text === "") {
          return textEmbedded;
        }
        if (textEmbedded) {
          target.push(textSeparator);
        }
        target.push(stringToChunk(encodeHTMLTextNode(text)));
        return true;
      }
      function pushSegmentFinale(target, responseState, lastPushedText, textEmbedded) {
        if (lastPushedText && textEmbedded) {
          target.push(textSeparator);
        }
      }
      var styleNameCache = /* @__PURE__ */ new Map();
      function processStyleName(styleName) {
        var chunk = styleNameCache.get(styleName);
        if (chunk !== void 0) {
          return chunk;
        }
        var result = stringToPrecomputedChunk(escapeTextForBrowser(hyphenateStyleName(styleName)));
        styleNameCache.set(styleName, result);
        return result;
      }
      var styleAttributeStart = stringToPrecomputedChunk(' style="');
      var styleAssign = stringToPrecomputedChunk(":");
      var styleSeparator = stringToPrecomputedChunk(";");
      function pushStyle(target, responseState, style) {
        if (typeof style !== "object") {
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
        }
        var isFirst = true;
        for (var styleName in style) {
          if (!hasOwnProperty.call(style, styleName)) {
            continue;
          }
          var styleValue = style[styleName];
          if (styleValue == null || typeof styleValue === "boolean" || styleValue === "") {
            continue;
          }
          var nameChunk = void 0;
          var valueChunk = void 0;
          var isCustomProperty = styleName.indexOf("--") === 0;
          if (isCustomProperty) {
            nameChunk = stringToChunk(escapeTextForBrowser(styleName));
            {
              checkCSSPropertyStringCoercion(styleValue, styleName);
            }
            valueChunk = stringToChunk(escapeTextForBrowser(("" + styleValue).trim()));
          } else {
            {
              warnValidStyle$1(styleName, styleValue);
            }
            nameChunk = processStyleName(styleName);
            if (typeof styleValue === "number") {
              if (styleValue !== 0 && !hasOwnProperty.call(isUnitlessNumber, styleName)) {
                valueChunk = stringToChunk(styleValue + "px");
              } else {
                valueChunk = stringToChunk("" + styleValue);
              }
            } else {
              {
                checkCSSPropertyStringCoercion(styleValue, styleName);
              }
              valueChunk = stringToChunk(escapeTextForBrowser(("" + styleValue).trim()));
            }
          }
          if (isFirst) {
            isFirst = false;
            target.push(styleAttributeStart, nameChunk, styleAssign, valueChunk);
          } else {
            target.push(styleSeparator, nameChunk, styleAssign, valueChunk);
          }
        }
        if (!isFirst) {
          target.push(attributeEnd);
        }
      }
      var attributeSeparator = stringToPrecomputedChunk(" ");
      var attributeAssign = stringToPrecomputedChunk('="');
      var attributeEnd = stringToPrecomputedChunk('"');
      var attributeEmptyString = stringToPrecomputedChunk('=""');
      function pushAttribute(target, responseState, name, value) {
        switch (name) {
          case "style": {
            pushStyle(target, responseState, value);
            return;
          }
          case "defaultValue":
          case "defaultChecked":
          case "innerHTML":
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            return;
        }
        if (name.length > 2 && (name[0] === "o" || name[0] === "O") && (name[1] === "n" || name[1] === "N")) {
          return;
        }
        var propertyInfo = getPropertyInfo(name);
        if (propertyInfo !== null) {
          switch (typeof value) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              if (!propertyInfo.acceptsBooleans) {
                return;
              }
            }
          }
          var attributeName = propertyInfo.attributeName;
          var attributeNameChunk = stringToChunk(attributeName);
          switch (propertyInfo.type) {
            case BOOLEAN:
              if (value) {
                target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
              }
              return;
            case OVERLOADED_BOOLEAN:
              if (value === true) {
                target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
              } else if (value === false)
                ;
              else {
                target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
              }
              return;
            case NUMERIC:
              if (!isNaN(value)) {
                target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
              }
              break;
            case POSITIVE_NUMERIC:
              if (!isNaN(value) && value >= 1) {
                target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
              }
              break;
            default:
              if (propertyInfo.sanitizeURL) {
                {
                  checkAttributeStringCoercion(value, attributeName);
                }
                value = "" + value;
                sanitizeURL(value);
              }
              target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
          }
        } else if (isAttributeNameSafe(name)) {
          switch (typeof value) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var prefix2 = name.toLowerCase().slice(0, 5);
              if (prefix2 !== "data-" && prefix2 !== "aria-") {
                return;
              }
            }
          }
          target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
        }
      }
      var endOfStartTag = stringToPrecomputedChunk(">");
      var endOfStartTagSelfClosing = stringToPrecomputedChunk("/>");
      function pushInnerHTML(target, innerHTML, children) {
        if (innerHTML != null) {
          if (children != null) {
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          }
          if (typeof innerHTML !== "object" || !("__html" in innerHTML)) {
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
          }
          var html2 = innerHTML.__html;
          if (html2 !== null && html2 !== void 0) {
            {
              checkHtmlStringCoercion(html2);
            }
            target.push(stringToChunk("" + html2));
          }
        }
      }
      var didWarnDefaultInputValue = false;
      var didWarnDefaultChecked = false;
      var didWarnDefaultSelectValue = false;
      var didWarnDefaultTextareaValue = false;
      var didWarnInvalidOptionChildren = false;
      var didWarnInvalidOptionInnerHTML = false;
      var didWarnSelectedSetOnOption = false;
      function checkSelectProp(props, propName2) {
        {
          var value = props[propName2];
          if (value != null) {
            var array = isArray(value);
            if (props.multiple && !array) {
              error2("The `%s` prop supplied to <select> must be an array if `multiple` is true.", propName2);
            } else if (!props.multiple && array) {
              error2("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", propName2);
            }
          }
        }
      }
      function pushStartSelect(target, props, responseState) {
        {
          checkControlledValueProps("select", props);
          checkSelectProp(props, "value");
          checkSelectProp(props, "defaultValue");
          if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultSelectValue) {
            error2("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components");
            didWarnDefaultSelectValue = true;
          }
        }
        target.push(startChunkForTag("select"));
        var children = null;
        var innerHTML = null;
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        target.push(endOfStartTag);
        pushInnerHTML(target, innerHTML, children);
        return children;
      }
      function flattenOptionChildren(children) {
        var content = "";
        React2.Children.forEach(children, function(child) {
          if (child == null) {
            return;
          }
          content += child;
          {
            if (!didWarnInvalidOptionChildren && typeof child !== "string" && typeof child !== "number") {
              didWarnInvalidOptionChildren = true;
              error2("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.");
            }
          }
        });
        return content;
      }
      var selectedMarkerAttribute = stringToPrecomputedChunk(' selected=""');
      function pushStartOption(target, props, responseState, formatContext) {
        var selectedValue = formatContext.selectedValue;
        target.push(startChunkForTag("option"));
        var children = null;
        var value = null;
        var selected = null;
        var innerHTML = null;
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "selected":
                selected = propValue;
                {
                  if (!didWarnSelectedSetOnOption) {
                    error2("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.");
                    didWarnSelectedSetOnOption = true;
                  }
                }
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              case "value":
                value = propValue;
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        if (selectedValue != null) {
          var stringValue;
          if (value !== null) {
            {
              checkAttributeStringCoercion(value, "value");
            }
            stringValue = "" + value;
          } else {
            {
              if (innerHTML !== null) {
                if (!didWarnInvalidOptionInnerHTML) {
                  didWarnInvalidOptionInnerHTML = true;
                  error2("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.");
                }
              }
            }
            stringValue = flattenOptionChildren(children);
          }
          if (isArray(selectedValue)) {
            for (var i = 0; i < selectedValue.length; i++) {
              {
                checkAttributeStringCoercion(selectedValue[i], "value");
              }
              var v = "" + selectedValue[i];
              if (v === stringValue) {
                target.push(selectedMarkerAttribute);
                break;
              }
            }
          } else {
            {
              checkAttributeStringCoercion(selectedValue, "select.value");
            }
            if ("" + selectedValue === stringValue) {
              target.push(selectedMarkerAttribute);
            }
          }
        } else if (selected) {
          target.push(selectedMarkerAttribute);
        }
        target.push(endOfStartTag);
        pushInnerHTML(target, innerHTML, children);
        return children;
      }
      function pushInput(target, props, responseState) {
        {
          checkControlledValueProps("input", props);
          if (props.checked !== void 0 && props.defaultChecked !== void 0 && !didWarnDefaultChecked) {
            error2("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", props.type);
            didWarnDefaultChecked = true;
          }
          if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultInputValue) {
            error2("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", props.type);
            didWarnDefaultInputValue = true;
          }
        }
        target.push(startChunkForTag("input"));
        var value = null;
        var defaultValue = null;
        var checked = null;
        var defaultChecked = null;
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
              case "defaultChecked":
                defaultChecked = propValue;
                break;
              case "defaultValue":
                defaultValue = propValue;
                break;
              case "checked":
                checked = propValue;
                break;
              case "value":
                value = propValue;
                break;
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        if (checked !== null) {
          pushAttribute(target, responseState, "checked", checked);
        } else if (defaultChecked !== null) {
          pushAttribute(target, responseState, "checked", defaultChecked);
        }
        if (value !== null) {
          pushAttribute(target, responseState, "value", value);
        } else if (defaultValue !== null) {
          pushAttribute(target, responseState, "value", defaultValue);
        }
        target.push(endOfStartTagSelfClosing);
        return null;
      }
      function pushStartTextArea(target, props, responseState) {
        {
          checkControlledValueProps("textarea", props);
          if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultTextareaValue) {
            error2("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components");
            didWarnDefaultTextareaValue = true;
          }
        }
        target.push(startChunkForTag("textarea"));
        var value = null;
        var defaultValue = null;
        var children = null;
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "value":
                value = propValue;
                break;
              case "defaultValue":
                defaultValue = propValue;
                break;
              case "dangerouslySetInnerHTML":
                throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        if (value === null && defaultValue !== null) {
          value = defaultValue;
        }
        target.push(endOfStartTag);
        if (children != null) {
          {
            error2("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          }
          if (value != null) {
            throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
          }
          if (isArray(children)) {
            if (children.length > 1) {
              throw new Error("<textarea> can only have at most one child.");
            }
            {
              checkHtmlStringCoercion(children[0]);
            }
            value = "" + children[0];
          }
          {
            checkHtmlStringCoercion(children);
          }
          value = "" + children;
        }
        if (typeof value === "string" && value[0] === "\n") {
          target.push(leadingNewline);
        }
        if (value !== null) {
          {
            checkAttributeStringCoercion(value, "value");
          }
          target.push(stringToChunk(encodeHTMLTextNode("" + value)));
        }
        return null;
      }
      function pushSelfClosing(target, props, tag, responseState) {
        target.push(startChunkForTag(tag));
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw new Error(tag + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        target.push(endOfStartTagSelfClosing);
        return null;
      }
      function pushStartMenuItem(target, props, responseState) {
        target.push(startChunkForTag("menuitem"));
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        target.push(endOfStartTag);
        return null;
      }
      function pushStartTitle(target, props, responseState) {
        target.push(startChunkForTag("title"));
        var children = null;
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        target.push(endOfStartTag);
        {
          var child = Array.isArray(children) && children.length < 2 ? children[0] || null : children;
          if (Array.isArray(children) && children.length > 1) {
            error2("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
          } else if (child != null && child.$$typeof != null) {
            error2("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
          } else if (child != null && typeof child !== "string" && typeof child !== "number") {
            error2("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
          }
        }
        return children;
      }
      function pushStartGenericElement(target, props, tag, responseState) {
        target.push(startChunkForTag(tag));
        var children = null;
        var innerHTML = null;
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        target.push(endOfStartTag);
        pushInnerHTML(target, innerHTML, children);
        if (typeof children === "string") {
          target.push(stringToChunk(encodeHTMLTextNode(children)));
          return null;
        }
        return children;
      }
      function pushStartCustomElement(target, props, tag, responseState) {
        target.push(startChunkForTag(tag));
        var children = null;
        var innerHTML = null;
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              case "style":
                pushStyle(target, responseState, propValue);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                if (isAttributeNameSafe(propKey) && typeof propValue !== "function" && typeof propValue !== "symbol") {
                  target.push(attributeSeparator, stringToChunk(propKey), attributeAssign, stringToChunk(escapeTextForBrowser(propValue)), attributeEnd);
                }
                break;
            }
          }
        }
        target.push(endOfStartTag);
        pushInnerHTML(target, innerHTML, children);
        return children;
      }
      var leadingNewline = stringToPrecomputedChunk("\n");
      function pushStartPreformattedElement(target, props, tag, responseState) {
        target.push(startChunkForTag(tag));
        var children = null;
        var innerHTML = null;
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        target.push(endOfStartTag);
        if (innerHTML != null) {
          if (children != null) {
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          }
          if (typeof innerHTML !== "object" || !("__html" in innerHTML)) {
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
          }
          var html2 = innerHTML.__html;
          if (html2 !== null && html2 !== void 0) {
            if (typeof html2 === "string" && html2.length > 0 && html2[0] === "\n") {
              target.push(leadingNewline, stringToChunk(html2));
            } else {
              {
                checkHtmlStringCoercion(html2);
              }
              target.push(stringToChunk("" + html2));
            }
          }
        }
        if (typeof children === "string" && children[0] === "\n") {
          target.push(leadingNewline);
        }
        return children;
      }
      var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
      var validatedTagCache = /* @__PURE__ */ new Map();
      function startChunkForTag(tag) {
        var tagStartChunk = validatedTagCache.get(tag);
        if (tagStartChunk === void 0) {
          if (!VALID_TAG_REGEX.test(tag)) {
            throw new Error("Invalid tag: " + tag);
          }
          tagStartChunk = stringToPrecomputedChunk("<" + tag);
          validatedTagCache.set(tag, tagStartChunk);
        }
        return tagStartChunk;
      }
      var DOCTYPE = stringToPrecomputedChunk("<!DOCTYPE html>");
      function pushStartInstance(target, type, props, responseState, formatContext) {
        {
          validateProperties(type, props);
          validateProperties$1(type, props);
          validateProperties$2(type, props, null);
          if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) {
            error2("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.");
          }
          if (formatContext.insertionMode !== SVG_MODE && formatContext.insertionMode !== MATHML_MODE) {
            if (type.indexOf("-") === -1 && typeof props.is !== "string" && type.toLowerCase() !== type) {
              error2("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", type);
            }
          }
        }
        switch (type) {
          case "select":
            return pushStartSelect(target, props, responseState);
          case "option":
            return pushStartOption(target, props, responseState, formatContext);
          case "textarea":
            return pushStartTextArea(target, props, responseState);
          case "input":
            return pushInput(target, props, responseState);
          case "menuitem":
            return pushStartMenuItem(target, props, responseState);
          case "title":
            return pushStartTitle(target, props, responseState);
          case "listing":
          case "pre": {
            return pushStartPreformattedElement(target, props, type, responseState);
          }
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr": {
            return pushSelfClosing(target, props, type, responseState);
          }
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph": {
            return pushStartGenericElement(target, props, type, responseState);
          }
          case "html": {
            if (formatContext.insertionMode === ROOT_HTML_MODE) {
              target.push(DOCTYPE);
            }
            return pushStartGenericElement(target, props, type, responseState);
          }
          default: {
            if (type.indexOf("-") === -1 && typeof props.is !== "string") {
              return pushStartGenericElement(target, props, type, responseState);
            } else {
              return pushStartCustomElement(target, props, type, responseState);
            }
          }
        }
      }
      var endTag1 = stringToPrecomputedChunk("</");
      var endTag2 = stringToPrecomputedChunk(">");
      function pushEndInstance(target, type, props) {
        switch (type) {
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr": {
            break;
          }
          default: {
            target.push(endTag1, stringToChunk(type), endTag2);
          }
        }
      }
      function writeCompletedRoot(destination, responseState) {
        var bootstrapChunks = responseState.bootstrapChunks;
        var i = 0;
        for (; i < bootstrapChunks.length - 1; i++) {
          writeChunk(destination, bootstrapChunks[i]);
        }
        if (i < bootstrapChunks.length) {
          return writeChunkAndReturn(destination, bootstrapChunks[i]);
        }
        return true;
      }
      var placeholder1 = stringToPrecomputedChunk('<template id="');
      var placeholder2 = stringToPrecomputedChunk('"></template>');
      function writePlaceholder(destination, responseState, id) {
        writeChunk(destination, placeholder1);
        writeChunk(destination, responseState.placeholderPrefix);
        var formattedID = stringToChunk(id.toString(16));
        writeChunk(destination, formattedID);
        return writeChunkAndReturn(destination, placeholder2);
      }
      var startCompletedSuspenseBoundary = stringToPrecomputedChunk("<!--$-->");
      var startPendingSuspenseBoundary1 = stringToPrecomputedChunk('<!--$?--><template id="');
      var startPendingSuspenseBoundary2 = stringToPrecomputedChunk('"></template>');
      var startClientRenderedSuspenseBoundary = stringToPrecomputedChunk("<!--$!-->");
      var endSuspenseBoundary = stringToPrecomputedChunk("<!--/$-->");
      var clientRenderedSuspenseBoundaryError1 = stringToPrecomputedChunk("<template");
      var clientRenderedSuspenseBoundaryErrorAttrInterstitial = stringToPrecomputedChunk('"');
      var clientRenderedSuspenseBoundaryError1A = stringToPrecomputedChunk(' data-dgst="');
      var clientRenderedSuspenseBoundaryError1B = stringToPrecomputedChunk(' data-msg="');
      var clientRenderedSuspenseBoundaryError1C = stringToPrecomputedChunk(' data-stck="');
      var clientRenderedSuspenseBoundaryError2 = stringToPrecomputedChunk("></template>");
      function writeStartCompletedSuspenseBoundary(destination, responseState) {
        return writeChunkAndReturn(destination, startCompletedSuspenseBoundary);
      }
      function writeStartPendingSuspenseBoundary(destination, responseState, id) {
        writeChunk(destination, startPendingSuspenseBoundary1);
        if (id === null) {
          throw new Error("An ID must have been assigned before we can complete the boundary.");
        }
        writeChunk(destination, id);
        return writeChunkAndReturn(destination, startPendingSuspenseBoundary2);
      }
      function writeStartClientRenderedSuspenseBoundary(destination, responseState, errorDigest, errorMesssage, errorComponentStack) {
        var result;
        result = writeChunkAndReturn(destination, startClientRenderedSuspenseBoundary);
        writeChunk(destination, clientRenderedSuspenseBoundaryError1);
        if (errorDigest) {
          writeChunk(destination, clientRenderedSuspenseBoundaryError1A);
          writeChunk(destination, stringToChunk(escapeTextForBrowser(errorDigest)));
          writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
        }
        {
          if (errorMesssage) {
            writeChunk(destination, clientRenderedSuspenseBoundaryError1B);
            writeChunk(destination, stringToChunk(escapeTextForBrowser(errorMesssage)));
            writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
          }
          if (errorComponentStack) {
            writeChunk(destination, clientRenderedSuspenseBoundaryError1C);
            writeChunk(destination, stringToChunk(escapeTextForBrowser(errorComponentStack)));
            writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
          }
        }
        result = writeChunkAndReturn(destination, clientRenderedSuspenseBoundaryError2);
        return result;
      }
      function writeEndCompletedSuspenseBoundary(destination, responseState) {
        return writeChunkAndReturn(destination, endSuspenseBoundary);
      }
      function writeEndPendingSuspenseBoundary(destination, responseState) {
        return writeChunkAndReturn(destination, endSuspenseBoundary);
      }
      function writeEndClientRenderedSuspenseBoundary(destination, responseState) {
        return writeChunkAndReturn(destination, endSuspenseBoundary);
      }
      var startSegmentHTML = stringToPrecomputedChunk('<div hidden id="');
      var startSegmentHTML2 = stringToPrecomputedChunk('">');
      var endSegmentHTML = stringToPrecomputedChunk("</div>");
      var startSegmentSVG = stringToPrecomputedChunk('<svg aria-hidden="true" style="display:none" id="');
      var startSegmentSVG2 = stringToPrecomputedChunk('">');
      var endSegmentSVG = stringToPrecomputedChunk("</svg>");
      var startSegmentMathML = stringToPrecomputedChunk('<math aria-hidden="true" style="display:none" id="');
      var startSegmentMathML2 = stringToPrecomputedChunk('">');
      var endSegmentMathML = stringToPrecomputedChunk("</math>");
      var startSegmentTable = stringToPrecomputedChunk('<table hidden id="');
      var startSegmentTable2 = stringToPrecomputedChunk('">');
      var endSegmentTable = stringToPrecomputedChunk("</table>");
      var startSegmentTableBody = stringToPrecomputedChunk('<table hidden><tbody id="');
      var startSegmentTableBody2 = stringToPrecomputedChunk('">');
      var endSegmentTableBody = stringToPrecomputedChunk("</tbody></table>");
      var startSegmentTableRow = stringToPrecomputedChunk('<table hidden><tr id="');
      var startSegmentTableRow2 = stringToPrecomputedChunk('">');
      var endSegmentTableRow = stringToPrecomputedChunk("</tr></table>");
      var startSegmentColGroup = stringToPrecomputedChunk('<table hidden><colgroup id="');
      var startSegmentColGroup2 = stringToPrecomputedChunk('">');
      var endSegmentColGroup = stringToPrecomputedChunk("</colgroup></table>");
      function writeStartSegment(destination, responseState, formatContext, id) {
        switch (formatContext.insertionMode) {
          case ROOT_HTML_MODE:
          case HTML_MODE: {
            writeChunk(destination, startSegmentHTML);
            writeChunk(destination, responseState.segmentPrefix);
            writeChunk(destination, stringToChunk(id.toString(16)));
            return writeChunkAndReturn(destination, startSegmentHTML2);
          }
          case SVG_MODE: {
            writeChunk(destination, startSegmentSVG);
            writeChunk(destination, responseState.segmentPrefix);
            writeChunk(destination, stringToChunk(id.toString(16)));
            return writeChunkAndReturn(destination, startSegmentSVG2);
          }
          case MATHML_MODE: {
            writeChunk(destination, startSegmentMathML);
            writeChunk(destination, responseState.segmentPrefix);
            writeChunk(destination, stringToChunk(id.toString(16)));
            return writeChunkAndReturn(destination, startSegmentMathML2);
          }
          case HTML_TABLE_MODE: {
            writeChunk(destination, startSegmentTable);
            writeChunk(destination, responseState.segmentPrefix);
            writeChunk(destination, stringToChunk(id.toString(16)));
            return writeChunkAndReturn(destination, startSegmentTable2);
          }
          case HTML_TABLE_BODY_MODE: {
            writeChunk(destination, startSegmentTableBody);
            writeChunk(destination, responseState.segmentPrefix);
            writeChunk(destination, stringToChunk(id.toString(16)));
            return writeChunkAndReturn(destination, startSegmentTableBody2);
          }
          case HTML_TABLE_ROW_MODE: {
            writeChunk(destination, startSegmentTableRow);
            writeChunk(destination, responseState.segmentPrefix);
            writeChunk(destination, stringToChunk(id.toString(16)));
            return writeChunkAndReturn(destination, startSegmentTableRow2);
          }
          case HTML_COLGROUP_MODE: {
            writeChunk(destination, startSegmentColGroup);
            writeChunk(destination, responseState.segmentPrefix);
            writeChunk(destination, stringToChunk(id.toString(16)));
            return writeChunkAndReturn(destination, startSegmentColGroup2);
          }
          default: {
            throw new Error("Unknown insertion mode. This is a bug in React.");
          }
        }
      }
      function writeEndSegment(destination, formatContext) {
        switch (formatContext.insertionMode) {
          case ROOT_HTML_MODE:
          case HTML_MODE: {
            return writeChunkAndReturn(destination, endSegmentHTML);
          }
          case SVG_MODE: {
            return writeChunkAndReturn(destination, endSegmentSVG);
          }
          case MATHML_MODE: {
            return writeChunkAndReturn(destination, endSegmentMathML);
          }
          case HTML_TABLE_MODE: {
            return writeChunkAndReturn(destination, endSegmentTable);
          }
          case HTML_TABLE_BODY_MODE: {
            return writeChunkAndReturn(destination, endSegmentTableBody);
          }
          case HTML_TABLE_ROW_MODE: {
            return writeChunkAndReturn(destination, endSegmentTableRow);
          }
          case HTML_COLGROUP_MODE: {
            return writeChunkAndReturn(destination, endSegmentColGroup);
          }
          default: {
            throw new Error("Unknown insertion mode. This is a bug in React.");
          }
        }
      }
      var completeSegmentFunction = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}";
      var completeBoundaryFunction = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}';
      var clientRenderFunction = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}';
      var completeSegmentScript1Full = stringToPrecomputedChunk(completeSegmentFunction + ';$RS("');
      var completeSegmentScript1Partial = stringToPrecomputedChunk('$RS("');
      var completeSegmentScript2 = stringToPrecomputedChunk('","');
      var completeSegmentScript3 = stringToPrecomputedChunk('")<\/script>');
      function writeCompletedSegmentInstruction(destination, responseState, contentSegmentID) {
        writeChunk(destination, responseState.startInlineScript);
        if (!responseState.sentCompleteSegmentFunction) {
          responseState.sentCompleteSegmentFunction = true;
          writeChunk(destination, completeSegmentScript1Full);
        } else {
          writeChunk(destination, completeSegmentScript1Partial);
        }
        writeChunk(destination, responseState.segmentPrefix);
        var formattedID = stringToChunk(contentSegmentID.toString(16));
        writeChunk(destination, formattedID);
        writeChunk(destination, completeSegmentScript2);
        writeChunk(destination, responseState.placeholderPrefix);
        writeChunk(destination, formattedID);
        return writeChunkAndReturn(destination, completeSegmentScript3);
      }
      var completeBoundaryScript1Full = stringToPrecomputedChunk(completeBoundaryFunction + ';$RC("');
      var completeBoundaryScript1Partial = stringToPrecomputedChunk('$RC("');
      var completeBoundaryScript2 = stringToPrecomputedChunk('","');
      var completeBoundaryScript3 = stringToPrecomputedChunk('")<\/script>');
      function writeCompletedBoundaryInstruction(destination, responseState, boundaryID, contentSegmentID) {
        writeChunk(destination, responseState.startInlineScript);
        if (!responseState.sentCompleteBoundaryFunction) {
          responseState.sentCompleteBoundaryFunction = true;
          writeChunk(destination, completeBoundaryScript1Full);
        } else {
          writeChunk(destination, completeBoundaryScript1Partial);
        }
        if (boundaryID === null) {
          throw new Error("An ID must have been assigned before we can complete the boundary.");
        }
        var formattedContentID = stringToChunk(contentSegmentID.toString(16));
        writeChunk(destination, boundaryID);
        writeChunk(destination, completeBoundaryScript2);
        writeChunk(destination, responseState.segmentPrefix);
        writeChunk(destination, formattedContentID);
        return writeChunkAndReturn(destination, completeBoundaryScript3);
      }
      var clientRenderScript1Full = stringToPrecomputedChunk(clientRenderFunction + ';$RX("');
      var clientRenderScript1Partial = stringToPrecomputedChunk('$RX("');
      var clientRenderScript1A = stringToPrecomputedChunk('"');
      var clientRenderScript2 = stringToPrecomputedChunk(")<\/script>");
      var clientRenderErrorScriptArgInterstitial = stringToPrecomputedChunk(",");
      function writeClientRenderBoundaryInstruction(destination, responseState, boundaryID, errorDigest, errorMessage, errorComponentStack) {
        writeChunk(destination, responseState.startInlineScript);
        if (!responseState.sentClientRenderFunction) {
          responseState.sentClientRenderFunction = true;
          writeChunk(destination, clientRenderScript1Full);
        } else {
          writeChunk(destination, clientRenderScript1Partial);
        }
        if (boundaryID === null) {
          throw new Error("An ID must have been assigned before we can complete the boundary.");
        }
        writeChunk(destination, boundaryID);
        writeChunk(destination, clientRenderScript1A);
        if (errorDigest || errorMessage || errorComponentStack) {
          writeChunk(destination, clientRenderErrorScriptArgInterstitial);
          writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorDigest || "")));
        }
        if (errorMessage || errorComponentStack) {
          writeChunk(destination, clientRenderErrorScriptArgInterstitial);
          writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorMessage || "")));
        }
        if (errorComponentStack) {
          writeChunk(destination, clientRenderErrorScriptArgInterstitial);
          writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorComponentStack)));
        }
        return writeChunkAndReturn(destination, clientRenderScript2);
      }
      var regexForJSStringsInScripts = /[<\u2028\u2029]/g;
      function escapeJSStringsForInstructionScripts(input) {
        var escaped = JSON.stringify(input);
        return escaped.replace(regexForJSStringsInScripts, function(match) {
          switch (match) {
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default: {
              throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
            }
          }
        });
      }
      function createResponseState$1(generateStaticMarkup, identifierPrefix) {
        var responseState = createResponseState(identifierPrefix, void 0);
        return {
          bootstrapChunks: responseState.bootstrapChunks,
          startInlineScript: responseState.startInlineScript,
          placeholderPrefix: responseState.placeholderPrefix,
          segmentPrefix: responseState.segmentPrefix,
          boundaryPrefix: responseState.boundaryPrefix,
          idPrefix: responseState.idPrefix,
          nextSuspenseID: responseState.nextSuspenseID,
          sentCompleteSegmentFunction: responseState.sentCompleteSegmentFunction,
          sentCompleteBoundaryFunction: responseState.sentCompleteBoundaryFunction,
          sentClientRenderFunction: responseState.sentClientRenderFunction,
          generateStaticMarkup
        };
      }
      function createRootFormatContext() {
        return {
          insertionMode: HTML_MODE,
          selectedValue: null
        };
      }
      function pushTextInstance$1(target, text, responseState, textEmbedded) {
        if (responseState.generateStaticMarkup) {
          target.push(stringToChunk(escapeTextForBrowser(text)));
          return false;
        } else {
          return pushTextInstance(target, text, responseState, textEmbedded);
        }
      }
      function pushSegmentFinale$1(target, responseState, lastPushedText, textEmbedded) {
        if (responseState.generateStaticMarkup) {
          return;
        } else {
          return pushSegmentFinale(target, responseState, lastPushedText, textEmbedded);
        }
      }
      function writeStartCompletedSuspenseBoundary$1(destination, responseState) {
        if (responseState.generateStaticMarkup) {
          return true;
        }
        return writeStartCompletedSuspenseBoundary(destination);
      }
      function writeStartClientRenderedSuspenseBoundary$1(destination, responseState, errorDigest, errorMessage, errorComponentStack) {
        if (responseState.generateStaticMarkup) {
          return true;
        }
        return writeStartClientRenderedSuspenseBoundary(destination, responseState, errorDigest, errorMessage, errorComponentStack);
      }
      function writeEndCompletedSuspenseBoundary$1(destination, responseState) {
        if (responseState.generateStaticMarkup) {
          return true;
        }
        return writeEndCompletedSuspenseBoundary(destination);
      }
      function writeEndClientRenderedSuspenseBoundary$1(destination, responseState) {
        if (responseState.generateStaticMarkup) {
          return true;
        }
        return writeEndClientRenderedSuspenseBoundary(destination);
      }
      var assign = Object.assign;
      var REACT_ELEMENT_TYPE = Symbol.for("react.element");
      var REACT_PORTAL_TYPE = Symbol.for("react.portal");
      var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
      var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
      var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
      var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
      var REACT_CONTEXT_TYPE = Symbol.for("react.context");
      var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
      var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
      var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
      var REACT_MEMO_TYPE = Symbol.for("react.memo");
      var REACT_LAZY_TYPE = Symbol.for("react.lazy");
      var REACT_SCOPE_TYPE = Symbol.for("react.scope");
      var REACT_DEBUG_TRACING_MODE_TYPE = Symbol.for("react.debug_trace_mode");
      var REACT_LEGACY_HIDDEN_TYPE = Symbol.for("react.legacy_hidden");
      var REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED = Symbol.for("react.default_value");
      var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== "object") {
          return null;
        }
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === "function") {
          return maybeIterator;
        }
        return null;
      }
      function getWrappedName(outerType, innerType, wrapperName) {
        var displayName = outerType.displayName;
        if (displayName) {
          return displayName;
        }
        var functionName = innerType.displayName || innerType.name || "";
        return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
      }
      function getContextName(type) {
        return type.displayName || "Context";
      }
      function getComponentNameFromType(type) {
        if (type == null) {
          return null;
        }
        {
          if (typeof type.tag === "number") {
            error2("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
          }
        }
        if (typeof type === "function") {
          return type.displayName || type.name || null;
        }
        if (typeof type === "string") {
          return type;
        }
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
        }
        if (typeof type === "object") {
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              var context = type;
              return getContextName(context) + ".Consumer";
            case REACT_PROVIDER_TYPE:
              var provider = type;
              return getContextName(provider._context) + ".Provider";
            case REACT_FORWARD_REF_TYPE:
              return getWrappedName(type, type.render, "ForwardRef");
            case REACT_MEMO_TYPE:
              var outerName = type.displayName || null;
              if (outerName !== null) {
                return outerName;
              }
              return getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE: {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init2 = lazyComponent._init;
              try {
                return getComponentNameFromType(init2(payload));
              } catch (x) {
                return null;
              }
            }
          }
        }
        return null;
      }
      var disabledDepth = 0;
      var prevLog;
      var prevInfo;
      var prevWarn;
      var prevError;
      var prevGroup;
      var prevGroupCollapsed;
      var prevGroupEnd;
      function disabledLog() {
      }
      disabledLog.__reactDisabledLog = true;
      function disableLogs() {
        {
          if (disabledDepth === 0) {
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd;
            var props = {
              configurable: true,
              enumerable: true,
              value: disabledLog,
              writable: true
            };
            Object.defineProperties(console, {
              info: props,
              log: props,
              warn: props,
              error: props,
              group: props,
              groupCollapsed: props,
              groupEnd: props
            });
          }
          disabledDepth++;
        }
      }
      function reenableLogs() {
        {
          disabledDepth--;
          if (disabledDepth === 0) {
            var props = {
              configurable: true,
              enumerable: true,
              writable: true
            };
            Object.defineProperties(console, {
              log: assign({}, props, {
                value: prevLog
              }),
              info: assign({}, props, {
                value: prevInfo
              }),
              warn: assign({}, props, {
                value: prevWarn
              }),
              error: assign({}, props, {
                value: prevError
              }),
              group: assign({}, props, {
                value: prevGroup
              }),
              groupCollapsed: assign({}, props, {
                value: prevGroupCollapsed
              }),
              groupEnd: assign({}, props, {
                value: prevGroupEnd
              })
            });
          }
          if (disabledDepth < 0) {
            error2("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
          }
        }
      }
      var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
      var prefix;
      function describeBuiltInComponentFrame(name, source, ownerFn) {
        {
          if (prefix === void 0) {
            try {
              throw Error();
            } catch (x) {
              var match = x.stack.trim().match(/\n( *(at )?)/);
              prefix = match && match[1] || "";
            }
          }
          return "\n" + prefix + name;
        }
      }
      var reentry = false;
      var componentFrameCache;
      {
        var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
        componentFrameCache = new PossiblyWeakMap();
      }
      function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) {
          return "";
        }
        {
          var frame = componentFrameCache.get(fn);
          if (frame !== void 0) {
            return frame;
          }
        }
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher;
        {
          previousDispatcher = ReactCurrentDispatcher.current;
          ReactCurrentDispatcher.current = null;
          disableLogs();
        }
        try {
          if (construct) {
            var Fake = function() {
              throw Error();
            };
            Object.defineProperty(Fake.prototype, "props", {
              set: function() {
                throw Error();
              }
            });
            if (typeof Reflect === "object" && Reflect.construct) {
              try {
                Reflect.construct(Fake, []);
              } catch (x) {
                control = x;
              }
              Reflect.construct(fn, [], Fake);
            } else {
              try {
                Fake.call();
              } catch (x) {
                control = x;
              }
              fn.call(Fake.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x) {
              control = x;
            }
            fn();
          }
        } catch (sample) {
          if (sample && control && typeof sample.stack === "string") {
            var sampleLines = sample.stack.split("\n");
            var controlLines = control.stack.split("\n");
            var s2 = sampleLines.length - 1;
            var c = controlLines.length - 1;
            while (s2 >= 1 && c >= 0 && sampleLines[s2] !== controlLines[c]) {
              c--;
            }
            for (; s2 >= 1 && c >= 0; s2--, c--) {
              if (sampleLines[s2] !== controlLines[c]) {
                if (s2 !== 1 || c !== 1) {
                  do {
                    s2--;
                    c--;
                    if (c < 0 || sampleLines[s2] !== controlLines[c]) {
                      var _frame = "\n" + sampleLines[s2].replace(" at new ", " at ");
                      if (fn.displayName && _frame.includes("<anonymous>")) {
                        _frame = _frame.replace("<anonymous>", fn.displayName);
                      }
                      {
                        if (typeof fn === "function") {
                          componentFrameCache.set(fn, _frame);
                        }
                      }
                      return _frame;
                    }
                  } while (s2 >= 1 && c >= 0);
                }
                break;
              }
            }
          }
        } finally {
          reentry = false;
          {
            ReactCurrentDispatcher.current = previousDispatcher;
            reenableLogs();
          }
          Error.prepareStackTrace = previousPrepareStackTrace;
        }
        var name = fn ? fn.displayName || fn.name : "";
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
        {
          if (typeof fn === "function") {
            componentFrameCache.set(fn, syntheticFrame);
          }
        }
        return syntheticFrame;
      }
      function describeClassComponentFrame(ctor, source, ownerFn) {
        {
          return describeNativeComponentFrame(ctor, true);
        }
      }
      function describeFunctionComponentFrame(fn, source, ownerFn) {
        {
          return describeNativeComponentFrame(fn, false);
        }
      }
      function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
      }
      function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) {
          return "";
        }
        if (typeof type === "function") {
          {
            return describeNativeComponentFrame(type, shouldConstruct(type));
          }
        }
        if (typeof type === "string") {
          return describeBuiltInComponentFrame(type);
        }
        switch (type) {
          case REACT_SUSPENSE_TYPE:
            return describeBuiltInComponentFrame("Suspense");
          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame("SuspenseList");
        }
        if (typeof type === "object") {
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
              return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_LAZY_TYPE: {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init2 = lazyComponent._init;
              try {
                return describeUnknownElementTypeFrameInDEV(init2(payload), source, ownerFn);
              } catch (x) {
              }
            }
          }
        }
        return "";
      }
      var loggedTypeFailures = {};
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame.setExtraStackFrame(stack);
          } else {
            ReactDebugCurrentFrame.setExtraStackFrame(null);
          }
        }
      }
      function checkPropTypes(typeSpecs, values, location, componentName, element) {
        {
          var has = Function.call.bind(hasOwnProperty);
          for (var typeSpecName in typeSpecs) {
            if (has(typeSpecs, typeSpecName)) {
              var error$1 = void 0;
              try {
                if (typeof typeSpecs[typeSpecName] !== "function") {
                  var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  err.name = "Invariant Violation";
                  throw err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ex) {
                error$1 = ex;
              }
              if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error2("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                setCurrentlyValidatingElement(null);
              }
              if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);
                error2("Failed %s type: %s", location, error$1.message);
                setCurrentlyValidatingElement(null);
              }
            }
          }
        }
      }
      var warnedAboutMissingGetChildContext;
      {
        warnedAboutMissingGetChildContext = {};
      }
      var emptyContextObject = {};
      {
        Object.freeze(emptyContextObject);
      }
      function getMaskedContext(type, unmaskedContext) {
        {
          var contextTypes = type.contextTypes;
          if (!contextTypes) {
            return emptyContextObject;
          }
          var context = {};
          for (var key in contextTypes) {
            context[key] = unmaskedContext[key];
          }
          {
            var name = getComponentNameFromType(type) || "Unknown";
            checkPropTypes(contextTypes, context, "context", name);
          }
          return context;
        }
      }
      function processChildContext(instance, type, parentContext, childContextTypes) {
        {
          if (typeof instance.getChildContext !== "function") {
            {
              var componentName = getComponentNameFromType(type) || "Unknown";
              if (!warnedAboutMissingGetChildContext[componentName]) {
                warnedAboutMissingGetChildContext[componentName] = true;
                error2("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", componentName, componentName);
              }
            }
            return parentContext;
          }
          var childContext = instance.getChildContext();
          for (var contextKey in childContext) {
            if (!(contextKey in childContextTypes)) {
              throw new Error((getComponentNameFromType(type) || "Unknown") + '.getChildContext(): key "' + contextKey + '" is not defined in childContextTypes.');
            }
          }
          {
            var name = getComponentNameFromType(type) || "Unknown";
            checkPropTypes(childContextTypes, childContext, "child context", name);
          }
          return assign({}, parentContext, childContext);
        }
      }
      var rendererSigil;
      {
        rendererSigil = {};
      }
      var rootContextSnapshot = null;
      var currentActiveSnapshot = null;
      function popNode(prev) {
        {
          prev.context._currentValue2 = prev.parentValue;
        }
      }
      function pushNode(next) {
        {
          next.context._currentValue2 = next.value;
        }
      }
      function popToNearestCommonAncestor(prev, next) {
        if (prev === next)
          ;
        else {
          popNode(prev);
          var parentPrev = prev.parent;
          var parentNext = next.parent;
          if (parentPrev === null) {
            if (parentNext !== null) {
              throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
            }
          } else {
            if (parentNext === null) {
              throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
            }
            popToNearestCommonAncestor(parentPrev, parentNext);
          }
          pushNode(next);
        }
      }
      function popAllPrevious(prev) {
        popNode(prev);
        var parentPrev = prev.parent;
        if (parentPrev !== null) {
          popAllPrevious(parentPrev);
        }
      }
      function pushAllNext(next) {
        var parentNext = next.parent;
        if (parentNext !== null) {
          pushAllNext(parentNext);
        }
        pushNode(next);
      }
      function popPreviousToCommonLevel(prev, next) {
        popNode(prev);
        var parentPrev = prev.parent;
        if (parentPrev === null) {
          throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
        }
        if (parentPrev.depth === next.depth) {
          popToNearestCommonAncestor(parentPrev, next);
        } else {
          popPreviousToCommonLevel(parentPrev, next);
        }
      }
      function popNextToCommonLevel(prev, next) {
        var parentNext = next.parent;
        if (parentNext === null) {
          throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
        }
        if (prev.depth === parentNext.depth) {
          popToNearestCommonAncestor(prev, parentNext);
        } else {
          popNextToCommonLevel(prev, parentNext);
        }
        pushNode(next);
      }
      function switchContext(newSnapshot) {
        var prev = currentActiveSnapshot;
        var next = newSnapshot;
        if (prev !== next) {
          if (prev === null) {
            pushAllNext(next);
          } else if (next === null) {
            popAllPrevious(prev);
          } else if (prev.depth === next.depth) {
            popToNearestCommonAncestor(prev, next);
          } else if (prev.depth > next.depth) {
            popPreviousToCommonLevel(prev, next);
          } else {
            popNextToCommonLevel(prev, next);
          }
          currentActiveSnapshot = next;
        }
      }
      function pushProvider(context, nextValue) {
        var prevValue;
        {
          prevValue = context._currentValue2;
          context._currentValue2 = nextValue;
          {
            if (context._currentRenderer2 !== void 0 && context._currentRenderer2 !== null && context._currentRenderer2 !== rendererSigil) {
              error2("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
            }
            context._currentRenderer2 = rendererSigil;
          }
        }
        var prevNode = currentActiveSnapshot;
        var newNode = {
          parent: prevNode,
          depth: prevNode === null ? 0 : prevNode.depth + 1,
          context,
          parentValue: prevValue,
          value: nextValue
        };
        currentActiveSnapshot = newNode;
        return newNode;
      }
      function popProvider(context) {
        var prevSnapshot = currentActiveSnapshot;
        if (prevSnapshot === null) {
          throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
        }
        {
          if (prevSnapshot.context !== context) {
            error2("The parent context is not the expected context. This is probably a bug in React.");
          }
        }
        {
          var _value = prevSnapshot.parentValue;
          if (_value === REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED) {
            prevSnapshot.context._currentValue2 = prevSnapshot.context._defaultValue;
          } else {
            prevSnapshot.context._currentValue2 = _value;
          }
          {
            if (context._currentRenderer2 !== void 0 && context._currentRenderer2 !== null && context._currentRenderer2 !== rendererSigil) {
              error2("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
            }
            context._currentRenderer2 = rendererSigil;
          }
        }
        return currentActiveSnapshot = prevSnapshot.parent;
      }
      function getActiveContext() {
        return currentActiveSnapshot;
      }
      function readContext(context) {
        var value = context._currentValue2;
        return value;
      }
      function get2(key) {
        return key._reactInternals;
      }
      function set(key, value) {
        key._reactInternals = value;
      }
      var didWarnAboutNoopUpdateForComponent = {};
      var didWarnAboutDeprecatedWillMount = {};
      var didWarnAboutUninitializedState;
      var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;
      var didWarnAboutLegacyLifecyclesAndDerivedState;
      var didWarnAboutUndefinedDerivedState;
      var warnOnUndefinedDerivedState;
      var warnOnInvalidCallback;
      var didWarnAboutDirectlyAssigningPropsToState;
      var didWarnAboutContextTypeAndContextTypes;
      var didWarnAboutInvalidateContextType;
      {
        didWarnAboutUninitializedState = /* @__PURE__ */ new Set();
        didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = /* @__PURE__ */ new Set();
        didWarnAboutLegacyLifecyclesAndDerivedState = /* @__PURE__ */ new Set();
        didWarnAboutDirectlyAssigningPropsToState = /* @__PURE__ */ new Set();
        didWarnAboutUndefinedDerivedState = /* @__PURE__ */ new Set();
        didWarnAboutContextTypeAndContextTypes = /* @__PURE__ */ new Set();
        didWarnAboutInvalidateContextType = /* @__PURE__ */ new Set();
        var didWarnOnInvalidCallback = /* @__PURE__ */ new Set();
        warnOnInvalidCallback = function(callback, callerName) {
          if (callback === null || typeof callback === "function") {
            return;
          }
          var key = callerName + "_" + callback;
          if (!didWarnOnInvalidCallback.has(key)) {
            didWarnOnInvalidCallback.add(key);
            error2("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", callerName, callback);
          }
        };
        warnOnUndefinedDerivedState = function(type, partialState) {
          if (partialState === void 0) {
            var componentName = getComponentNameFromType(type) || "Component";
            if (!didWarnAboutUndefinedDerivedState.has(componentName)) {
              didWarnAboutUndefinedDerivedState.add(componentName);
              error2("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", componentName);
            }
          }
        };
      }
      function warnNoop(publicInstance, callerName) {
        {
          var _constructor = publicInstance.constructor;
          var componentName = _constructor && getComponentNameFromType(_constructor) || "ReactClass";
          var warningKey = componentName + "." + callerName;
          if (didWarnAboutNoopUpdateForComponent[warningKey]) {
            return;
          }
          error2("%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.\n\nPlease check the code for the %s component.", callerName, callerName, componentName);
          didWarnAboutNoopUpdateForComponent[warningKey] = true;
        }
      }
      var classComponentUpdater = {
        isMounted: function(inst) {
          return false;
        },
        enqueueSetState: function(inst, payload, callback) {
          var internals = get2(inst);
          if (internals.queue === null) {
            warnNoop(inst, "setState");
          } else {
            internals.queue.push(payload);
            {
              if (callback !== void 0 && callback !== null) {
                warnOnInvalidCallback(callback, "setState");
              }
            }
          }
        },
        enqueueReplaceState: function(inst, payload, callback) {
          var internals = get2(inst);
          internals.replace = true;
          internals.queue = [payload];
          {
            if (callback !== void 0 && callback !== null) {
              warnOnInvalidCallback(callback, "setState");
            }
          }
        },
        enqueueForceUpdate: function(inst, callback) {
          var internals = get2(inst);
          if (internals.queue === null) {
            warnNoop(inst, "forceUpdate");
          } else {
            {
              if (callback !== void 0 && callback !== null) {
                warnOnInvalidCallback(callback, "setState");
              }
            }
          }
        }
      };
      function applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, prevState, nextProps) {
        var partialState = getDerivedStateFromProps(nextProps, prevState);
        {
          warnOnUndefinedDerivedState(ctor, partialState);
        }
        var newState = partialState === null || partialState === void 0 ? prevState : assign({}, prevState, partialState);
        return newState;
      }
      function constructClassInstance(ctor, props, maskedLegacyContext) {
        var context = emptyContextObject;
        var contextType = ctor.contextType;
        {
          if ("contextType" in ctor) {
            var isValid = contextType === null || contextType !== void 0 && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === void 0;
            if (!isValid && !didWarnAboutInvalidateContextType.has(ctor)) {
              didWarnAboutInvalidateContextType.add(ctor);
              var addendum = "";
              if (contextType === void 0) {
                addendum = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.";
              } else if (typeof contextType !== "object") {
                addendum = " However, it is set to a " + typeof contextType + ".";
              } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
                addendum = " Did you accidentally pass the Context.Provider instead?";
              } else if (contextType._context !== void 0) {
                addendum = " Did you accidentally pass the Context.Consumer instead?";
              } else {
                addendum = " However, it is set to an object with keys {" + Object.keys(contextType).join(", ") + "}.";
              }
              error2("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", getComponentNameFromType(ctor) || "Component", addendum);
            }
          }
        }
        if (typeof contextType === "object" && contextType !== null) {
          context = readContext(contextType);
        } else {
          context = maskedLegacyContext;
        }
        var instance = new ctor(props, context);
        {
          if (typeof ctor.getDerivedStateFromProps === "function" && (instance.state === null || instance.state === void 0)) {
            var componentName = getComponentNameFromType(ctor) || "Component";
            if (!didWarnAboutUninitializedState.has(componentName)) {
              didWarnAboutUninitializedState.add(componentName);
              error2("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", componentName, instance.state === null ? "null" : "undefined", componentName);
            }
          }
          if (typeof ctor.getDerivedStateFromProps === "function" || typeof instance.getSnapshotBeforeUpdate === "function") {
            var foundWillMountName = null;
            var foundWillReceivePropsName = null;
            var foundWillUpdateName = null;
            if (typeof instance.componentWillMount === "function" && instance.componentWillMount.__suppressDeprecationWarning !== true) {
              foundWillMountName = "componentWillMount";
            } else if (typeof instance.UNSAFE_componentWillMount === "function") {
              foundWillMountName = "UNSAFE_componentWillMount";
            }
            if (typeof instance.componentWillReceiveProps === "function" && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
              foundWillReceivePropsName = "componentWillReceiveProps";
            } else if (typeof instance.UNSAFE_componentWillReceiveProps === "function") {
              foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
            }
            if (typeof instance.componentWillUpdate === "function" && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
              foundWillUpdateName = "componentWillUpdate";
            } else if (typeof instance.UNSAFE_componentWillUpdate === "function") {
              foundWillUpdateName = "UNSAFE_componentWillUpdate";
            }
            if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
              var _componentName = getComponentNameFromType(ctor) || "Component";
              var newApiName = typeof ctor.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
              if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
                didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);
                error2("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://reactjs.org/link/unsafe-component-lifecycles", _componentName, newApiName, foundWillMountName !== null ? "\n  " + foundWillMountName : "", foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "", foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "");
              }
            }
          }
        }
        return instance;
      }
      function checkClassInstance(instance, ctor, newProps) {
        {
          var name = getComponentNameFromType(ctor) || "Component";
          var renderPresent = instance.render;
          if (!renderPresent) {
            if (ctor.prototype && typeof ctor.prototype.render === "function") {
              error2("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", name);
            } else {
              error2("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", name);
            }
          }
          if (instance.getInitialState && !instance.getInitialState.isReactClassApproved && !instance.state) {
            error2("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", name);
          }
          if (instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved) {
            error2("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", name);
          }
          if (instance.propTypes) {
            error2("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", name);
          }
          if (instance.contextType) {
            error2("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", name);
          }
          {
            if (instance.contextTypes) {
              error2("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", name);
            }
            if (ctor.contextType && ctor.contextTypes && !didWarnAboutContextTypeAndContextTypes.has(ctor)) {
              didWarnAboutContextTypeAndContextTypes.add(ctor);
              error2("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", name);
            }
          }
          if (typeof instance.componentShouldUpdate === "function") {
            error2("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", name);
          }
          if (ctor.prototype && ctor.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate !== "undefined") {
            error2("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", getComponentNameFromType(ctor) || "A pure component");
          }
          if (typeof instance.componentDidUnmount === "function") {
            error2("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", name);
          }
          if (typeof instance.componentDidReceiveProps === "function") {
            error2("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", name);
          }
          if (typeof instance.componentWillRecieveProps === "function") {
            error2("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", name);
          }
          if (typeof instance.UNSAFE_componentWillRecieveProps === "function") {
            error2("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", name);
          }
          var hasMutatedProps = instance.props !== newProps;
          if (instance.props !== void 0 && hasMutatedProps) {
            error2("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", name, name);
          }
          if (instance.defaultProps) {
            error2("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", name, name);
          }
          if (typeof instance.getSnapshotBeforeUpdate === "function" && typeof instance.componentDidUpdate !== "function" && !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor)) {
            didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor);
            error2("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", getComponentNameFromType(ctor));
          }
          if (typeof instance.getDerivedStateFromProps === "function") {
            error2("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
          }
          if (typeof instance.getDerivedStateFromError === "function") {
            error2("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
          }
          if (typeof ctor.getSnapshotBeforeUpdate === "function") {
            error2("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", name);
          }
          var _state = instance.state;
          if (_state && (typeof _state !== "object" || isArray(_state))) {
            error2("%s.state: must be set to an object or null", name);
          }
          if (typeof instance.getChildContext === "function" && typeof ctor.childContextTypes !== "object") {
            error2("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", name);
          }
        }
      }
      function callComponentWillMount(type, instance) {
        var oldState = instance.state;
        if (typeof instance.componentWillMount === "function") {
          {
            if (instance.componentWillMount.__suppressDeprecationWarning !== true) {
              var componentName = getComponentNameFromType(type) || "Unknown";
              if (!didWarnAboutDeprecatedWillMount[componentName]) {
                warn2(
                  "componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.\n\nPlease update the following components: %s",
                  componentName
                );
                didWarnAboutDeprecatedWillMount[componentName] = true;
              }
            }
          }
          instance.componentWillMount();
        }
        if (typeof instance.UNSAFE_componentWillMount === "function") {
          instance.UNSAFE_componentWillMount();
        }
        if (oldState !== instance.state) {
          {
            error2("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", getComponentNameFromType(type) || "Component");
          }
          classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
        }
      }
      function processUpdateQueue(internalInstance, inst, props, maskedLegacyContext) {
        if (internalInstance.queue !== null && internalInstance.queue.length > 0) {
          var oldQueue = internalInstance.queue;
          var oldReplace = internalInstance.replace;
          internalInstance.queue = null;
          internalInstance.replace = false;
          if (oldReplace && oldQueue.length === 1) {
            inst.state = oldQueue[0];
          } else {
            var nextState = oldReplace ? oldQueue[0] : inst.state;
            var dontMutate = true;
            for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
              var partial = oldQueue[i];
              var partialState = typeof partial === "function" ? partial.call(inst, nextState, props, maskedLegacyContext) : partial;
              if (partialState != null) {
                if (dontMutate) {
                  dontMutate = false;
                  nextState = assign({}, nextState, partialState);
                } else {
                  assign(nextState, partialState);
                }
              }
            }
            inst.state = nextState;
          }
        } else {
          internalInstance.queue = null;
        }
      }
      function mountClassInstance(instance, ctor, newProps, maskedLegacyContext) {
        {
          checkClassInstance(instance, ctor, newProps);
        }
        var initialState = instance.state !== void 0 ? instance.state : null;
        instance.updater = classComponentUpdater;
        instance.props = newProps;
        instance.state = initialState;
        var internalInstance = {
          queue: [],
          replace: false
        };
        set(instance, internalInstance);
        var contextType = ctor.contextType;
        if (typeof contextType === "object" && contextType !== null) {
          instance.context = readContext(contextType);
        } else {
          instance.context = maskedLegacyContext;
        }
        {
          if (instance.state === newProps) {
            var componentName = getComponentNameFromType(ctor) || "Component";
            if (!didWarnAboutDirectlyAssigningPropsToState.has(componentName)) {
              didWarnAboutDirectlyAssigningPropsToState.add(componentName);
              error2("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", componentName);
            }
          }
        }
        var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
        if (typeof getDerivedStateFromProps === "function") {
          instance.state = applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, initialState, newProps);
        }
        if (typeof ctor.getDerivedStateFromProps !== "function" && typeof instance.getSnapshotBeforeUpdate !== "function" && (typeof instance.UNSAFE_componentWillMount === "function" || typeof instance.componentWillMount === "function")) {
          callComponentWillMount(ctor, instance);
          processUpdateQueue(internalInstance, instance, newProps, maskedLegacyContext);
        }
      }
      var emptyTreeContext = {
        id: 1,
        overflow: ""
      };
      function getTreeId(context) {
        var overflow = context.overflow;
        var idWithLeadingBit = context.id;
        var id = idWithLeadingBit & ~getLeadingBit(idWithLeadingBit);
        return id.toString(32) + overflow;
      }
      function pushTreeContext(baseContext, totalChildren, index) {
        var baseIdWithLeadingBit = baseContext.id;
        var baseOverflow = baseContext.overflow;
        var baseLength = getBitLength(baseIdWithLeadingBit) - 1;
        var baseId = baseIdWithLeadingBit & ~(1 << baseLength);
        var slot = index + 1;
        var length = getBitLength(totalChildren) + baseLength;
        if (length > 30) {
          var numberOfOverflowBits = baseLength - baseLength % 5;
          var newOverflowBits = (1 << numberOfOverflowBits) - 1;
          var newOverflow = (baseId & newOverflowBits).toString(32);
          var restOfBaseId = baseId >> numberOfOverflowBits;
          var restOfBaseLength = baseLength - numberOfOverflowBits;
          var restOfLength = getBitLength(totalChildren) + restOfBaseLength;
          var restOfNewBits = slot << restOfBaseLength;
          var id = restOfNewBits | restOfBaseId;
          var overflow = newOverflow + baseOverflow;
          return {
            id: 1 << restOfLength | id,
            overflow
          };
        } else {
          var newBits = slot << baseLength;
          var _id = newBits | baseId;
          var _overflow = baseOverflow;
          return {
            id: 1 << length | _id,
            overflow: _overflow
          };
        }
      }
      function getBitLength(number) {
        return 32 - clz32(number);
      }
      function getLeadingBit(id) {
        return 1 << getBitLength(id) - 1;
      }
      var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback;
      var log2 = Math.log;
      var LN2 = Math.LN2;
      function clz32Fallback(x) {
        var asUint = x >>> 0;
        if (asUint === 0) {
          return 32;
        }
        return 31 - (log2(asUint) / LN2 | 0) | 0;
      }
      function is(x, y) {
        return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
      }
      var objectIs = typeof Object.is === "function" ? Object.is : is;
      var currentlyRenderingComponent = null;
      var currentlyRenderingTask = null;
      var firstWorkInProgressHook = null;
      var workInProgressHook = null;
      var isReRender = false;
      var didScheduleRenderPhaseUpdate = false;
      var localIdCounter = 0;
      var renderPhaseUpdates = null;
      var numberOfReRenders = 0;
      var RE_RENDER_LIMIT = 25;
      var isInHookUserCodeInDev = false;
      var currentHookNameInDev;
      function resolveCurrentlyRenderingComponent() {
        if (currentlyRenderingComponent === null) {
          throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
        }
        {
          if (isInHookUserCodeInDev) {
            error2("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
          }
        }
        return currentlyRenderingComponent;
      }
      function areHookInputsEqual(nextDeps, prevDeps) {
        if (prevDeps === null) {
          {
            error2("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", currentHookNameInDev);
          }
          return false;
        }
        {
          if (nextDeps.length !== prevDeps.length) {
            error2("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", currentHookNameInDev, "[" + nextDeps.join(", ") + "]", "[" + prevDeps.join(", ") + "]");
          }
        }
        for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
          if (objectIs(nextDeps[i], prevDeps[i])) {
            continue;
          }
          return false;
        }
        return true;
      }
      function createHook() {
        if (numberOfReRenders > 0) {
          throw new Error("Rendered more hooks than during the previous render");
        }
        return {
          memoizedState: null,
          queue: null,
          next: null
        };
      }
      function createWorkInProgressHook() {
        if (workInProgressHook === null) {
          if (firstWorkInProgressHook === null) {
            isReRender = false;
            firstWorkInProgressHook = workInProgressHook = createHook();
          } else {
            isReRender = true;
            workInProgressHook = firstWorkInProgressHook;
          }
        } else {
          if (workInProgressHook.next === null) {
            isReRender = false;
            workInProgressHook = workInProgressHook.next = createHook();
          } else {
            isReRender = true;
            workInProgressHook = workInProgressHook.next;
          }
        }
        return workInProgressHook;
      }
      function prepareToUseHooks(task, componentIdentity) {
        currentlyRenderingComponent = componentIdentity;
        currentlyRenderingTask = task;
        {
          isInHookUserCodeInDev = false;
        }
        localIdCounter = 0;
      }
      function finishHooks(Component, props, children, refOrContext) {
        while (didScheduleRenderPhaseUpdate) {
          didScheduleRenderPhaseUpdate = false;
          localIdCounter = 0;
          numberOfReRenders += 1;
          workInProgressHook = null;
          children = Component(props, refOrContext);
        }
        resetHooksState();
        return children;
      }
      function checkDidRenderIdHook() {
        var didRenderIdHook = localIdCounter !== 0;
        return didRenderIdHook;
      }
      function resetHooksState() {
        {
          isInHookUserCodeInDev = false;
        }
        currentlyRenderingComponent = null;
        currentlyRenderingTask = null;
        didScheduleRenderPhaseUpdate = false;
        firstWorkInProgressHook = null;
        numberOfReRenders = 0;
        renderPhaseUpdates = null;
        workInProgressHook = null;
      }
      function readContext$1(context) {
        {
          if (isInHookUserCodeInDev) {
            error2("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          }
        }
        return readContext(context);
      }
      function useContext(context) {
        {
          currentHookNameInDev = "useContext";
        }
        resolveCurrentlyRenderingComponent();
        return readContext(context);
      }
      function basicStateReducer(state, action) {
        return typeof action === "function" ? action(state) : action;
      }
      function useState(initialState) {
        {
          currentHookNameInDev = "useState";
        }
        return useReducer(
          basicStateReducer,
          initialState
        );
      }
      function useReducer(reducer, initialArg, init2) {
        {
          if (reducer !== basicStateReducer) {
            currentHookNameInDev = "useReducer";
          }
        }
        currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
        workInProgressHook = createWorkInProgressHook();
        if (isReRender) {
          var queue = workInProgressHook.queue;
          var dispatch = queue.dispatch;
          if (renderPhaseUpdates !== null) {
            var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
            if (firstRenderPhaseUpdate !== void 0) {
              renderPhaseUpdates.delete(queue);
              var newState = workInProgressHook.memoizedState;
              var update = firstRenderPhaseUpdate;
              do {
                var action = update.action;
                {
                  isInHookUserCodeInDev = true;
                }
                newState = reducer(newState, action);
                {
                  isInHookUserCodeInDev = false;
                }
                update = update.next;
              } while (update !== null);
              workInProgressHook.memoizedState = newState;
              return [newState, dispatch];
            }
          }
          return [workInProgressHook.memoizedState, dispatch];
        } else {
          {
            isInHookUserCodeInDev = true;
          }
          var initialState;
          if (reducer === basicStateReducer) {
            initialState = typeof initialArg === "function" ? initialArg() : initialArg;
          } else {
            initialState = init2 !== void 0 ? init2(initialArg) : initialArg;
          }
          {
            isInHookUserCodeInDev = false;
          }
          workInProgressHook.memoizedState = initialState;
          var _queue = workInProgressHook.queue = {
            last: null,
            dispatch: null
          };
          var _dispatch = _queue.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue);
          return [workInProgressHook.memoizedState, _dispatch];
        }
      }
      function useMemo(nextCreate, deps) {
        currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
        workInProgressHook = createWorkInProgressHook();
        var nextDeps = deps === void 0 ? null : deps;
        if (workInProgressHook !== null) {
          var prevState = workInProgressHook.memoizedState;
          if (prevState !== null) {
            if (nextDeps !== null) {
              var prevDeps = prevState[1];
              if (areHookInputsEqual(nextDeps, prevDeps)) {
                return prevState[0];
              }
            }
          }
        }
        {
          isInHookUserCodeInDev = true;
        }
        var nextValue = nextCreate();
        {
          isInHookUserCodeInDev = false;
        }
        workInProgressHook.memoizedState = [nextValue, nextDeps];
        return nextValue;
      }
      function useRef(initialValue) {
        currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
        workInProgressHook = createWorkInProgressHook();
        var previousRef = workInProgressHook.memoizedState;
        if (previousRef === null) {
          var ref = {
            current: initialValue
          };
          {
            Object.seal(ref);
          }
          workInProgressHook.memoizedState = ref;
          return ref;
        } else {
          return previousRef;
        }
      }
      function useLayoutEffect(create, inputs) {
        {
          currentHookNameInDev = "useLayoutEffect";
          error2("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
        }
      }
      function dispatchAction(componentIdentity, queue, action) {
        if (numberOfReRenders >= RE_RENDER_LIMIT) {
          throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
        }
        if (componentIdentity === currentlyRenderingComponent) {
          didScheduleRenderPhaseUpdate = true;
          var update = {
            action,
            next: null
          };
          if (renderPhaseUpdates === null) {
            renderPhaseUpdates = /* @__PURE__ */ new Map();
          }
          var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
          if (firstRenderPhaseUpdate === void 0) {
            renderPhaseUpdates.set(queue, update);
          } else {
            var lastRenderPhaseUpdate = firstRenderPhaseUpdate;
            while (lastRenderPhaseUpdate.next !== null) {
              lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
            }
            lastRenderPhaseUpdate.next = update;
          }
        }
      }
      function useCallback(callback, deps) {
        return useMemo(function() {
          return callback;
        }, deps);
      }
      function useMutableSource(source, getSnapshot, subscribe) {
        resolveCurrentlyRenderingComponent();
        return getSnapshot(source._source);
      }
      function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
        if (getServerSnapshot === void 0) {
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        }
        return getServerSnapshot();
      }
      function useDeferredValue(value) {
        resolveCurrentlyRenderingComponent();
        return value;
      }
      function unsupportedStartTransition() {
        throw new Error("startTransition cannot be called during server rendering.");
      }
      function useTransition() {
        resolveCurrentlyRenderingComponent();
        return [false, unsupportedStartTransition];
      }
      function useId() {
        var task = currentlyRenderingTask;
        var treeId = getTreeId(task.treeContext);
        var responseState = currentResponseState;
        if (responseState === null) {
          throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
        }
        var localId = localIdCounter++;
        return makeId(responseState, treeId, localId);
      }
      function noop() {
      }
      var Dispatcher = {
        readContext: readContext$1,
        useContext,
        useMemo,
        useReducer,
        useRef,
        useState,
        useInsertionEffect: noop,
        useLayoutEffect,
        useCallback,
        useImperativeHandle: noop,
        useEffect: noop,
        useDebugValue: noop,
        useDeferredValue,
        useTransition,
        useId,
        useMutableSource,
        useSyncExternalStore
      };
      var currentResponseState = null;
      function setCurrentResponseState(responseState) {
        currentResponseState = responseState;
      }
      function getStackByComponentStackNode(componentStack) {
        try {
          var info = "";
          var node = componentStack;
          do {
            switch (node.tag) {
              case 0:
                info += describeBuiltInComponentFrame(node.type, null, null);
                break;
              case 1:
                info += describeFunctionComponentFrame(node.type, null, null);
                break;
              case 2:
                info += describeClassComponentFrame(node.type, null, null);
                break;
            }
            node = node.parent;
          } while (node);
          return info;
        } catch (x) {
          return "\nError generating stack: " + x.message + "\n" + x.stack;
        }
      }
      var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
      var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
      var PENDING = 0;
      var COMPLETED = 1;
      var FLUSHED = 2;
      var ABORTED = 3;
      var ERRORED = 4;
      var OPEN = 0;
      var CLOSING = 1;
      var CLOSED = 2;
      var DEFAULT_PROGRESSIVE_CHUNK_SIZE = 12800;
      function defaultErrorHandler(error3) {
        console["error"](error3);
        return null;
      }
      function noop$1() {
      }
      function createRequest(children, responseState, rootFormatContext, progressiveChunkSize, onError2, onAllReady, onShellReady, onShellError, onFatalError) {
        var pingedTasks = [];
        var abortSet = /* @__PURE__ */ new Set();
        var request = {
          destination: null,
          responseState,
          progressiveChunkSize: progressiveChunkSize === void 0 ? DEFAULT_PROGRESSIVE_CHUNK_SIZE : progressiveChunkSize,
          status: OPEN,
          fatalError: null,
          nextSegmentId: 0,
          allPendingTasks: 0,
          pendingRootTasks: 0,
          completedRootSegment: null,
          abortableTasks: abortSet,
          pingedTasks,
          clientRenderedBoundaries: [],
          completedBoundaries: [],
          partialBoundaries: [],
          onError: onError2 === void 0 ? defaultErrorHandler : onError2,
          onAllReady: onAllReady === void 0 ? noop$1 : onAllReady,
          onShellReady: onShellReady === void 0 ? noop$1 : onShellReady,
          onShellError: onShellError === void 0 ? noop$1 : onShellError,
          onFatalError: onFatalError === void 0 ? noop$1 : onFatalError
        };
        var rootSegment = createPendingSegment(
          request,
          0,
          null,
          rootFormatContext,
          false,
          false
        );
        rootSegment.parentFlushed = true;
        var rootTask = createTask(request, children, null, rootSegment, abortSet, emptyContextObject, rootContextSnapshot, emptyTreeContext);
        pingedTasks.push(rootTask);
        return request;
      }
      function pingTask(request, task) {
        var pingedTasks = request.pingedTasks;
        pingedTasks.push(task);
        if (pingedTasks.length === 1) {
          scheduleWork(function() {
            return performWork(request);
          });
        }
      }
      function createSuspenseBoundary(request, fallbackAbortableTasks) {
        return {
          id: UNINITIALIZED_SUSPENSE_BOUNDARY_ID,
          rootSegmentID: -1,
          parentFlushed: false,
          pendingTasks: 0,
          forceClientRender: false,
          completedSegments: [],
          byteSize: 0,
          fallbackAbortableTasks,
          errorDigest: null
        };
      }
      function createTask(request, node, blockedBoundary, blockedSegment, abortSet, legacyContext, context, treeContext) {
        request.allPendingTasks++;
        if (blockedBoundary === null) {
          request.pendingRootTasks++;
        } else {
          blockedBoundary.pendingTasks++;
        }
        var task = {
          node,
          ping: function() {
            return pingTask(request, task);
          },
          blockedBoundary,
          blockedSegment,
          abortSet,
          legacyContext,
          context,
          treeContext
        };
        {
          task.componentStack = null;
        }
        abortSet.add(task);
        return task;
      }
      function createPendingSegment(request, index, boundary, formatContext, lastPushedText, textEmbedded) {
        return {
          status: PENDING,
          id: -1,
          index,
          parentFlushed: false,
          chunks: [],
          children: [],
          formatContext,
          boundary,
          lastPushedText,
          textEmbedded
        };
      }
      var currentTaskInDEV = null;
      function getCurrentStackInDEV() {
        {
          if (currentTaskInDEV === null || currentTaskInDEV.componentStack === null) {
            return "";
          }
          return getStackByComponentStackNode(currentTaskInDEV.componentStack);
        }
      }
      function pushBuiltInComponentStackInDEV(task, type) {
        {
          task.componentStack = {
            tag: 0,
            parent: task.componentStack,
            type
          };
        }
      }
      function pushFunctionComponentStackInDEV(task, type) {
        {
          task.componentStack = {
            tag: 1,
            parent: task.componentStack,
            type
          };
        }
      }
      function pushClassComponentStackInDEV(task, type) {
        {
          task.componentStack = {
            tag: 2,
            parent: task.componentStack,
            type
          };
        }
      }
      function popComponentStackInDEV(task) {
        {
          if (task.componentStack === null) {
            error2("Unexpectedly popped too many stack frames. This is a bug in React.");
          } else {
            task.componentStack = task.componentStack.parent;
          }
        }
      }
      var lastBoundaryErrorComponentStackDev = null;
      function captureBoundaryErrorDetailsDev(boundary, error3) {
        {
          var errorMessage;
          if (typeof error3 === "string") {
            errorMessage = error3;
          } else if (error3 && typeof error3.message === "string") {
            errorMessage = error3.message;
          } else {
            errorMessage = String(error3);
          }
          var errorComponentStack = lastBoundaryErrorComponentStackDev || getCurrentStackInDEV();
          lastBoundaryErrorComponentStackDev = null;
          boundary.errorMessage = errorMessage;
          boundary.errorComponentStack = errorComponentStack;
        }
      }
      function logRecoverableError(request, error3) {
        var errorDigest = request.onError(error3);
        if (errorDigest != null && typeof errorDigest !== "string") {
          throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof errorDigest + '" instead');
        }
        return errorDigest;
      }
      function fatalError(request, error3) {
        var onShellError = request.onShellError;
        onShellError(error3);
        var onFatalError = request.onFatalError;
        onFatalError(error3);
        if (request.destination !== null) {
          request.status = CLOSED;
          closeWithError(request.destination, error3);
        } else {
          request.status = CLOSING;
          request.fatalError = error3;
        }
      }
      function renderSuspenseBoundary(request, task, props) {
        pushBuiltInComponentStackInDEV(task, "Suspense");
        var parentBoundary = task.blockedBoundary;
        var parentSegment = task.blockedSegment;
        var fallback = props.fallback;
        var content = props.children;
        var fallbackAbortSet = /* @__PURE__ */ new Set();
        var newBoundary = createSuspenseBoundary(request, fallbackAbortSet);
        var insertionIndex = parentSegment.chunks.length;
        var boundarySegment = createPendingSegment(
          request,
          insertionIndex,
          newBoundary,
          parentSegment.formatContext,
          false,
          false
        );
        parentSegment.children.push(boundarySegment);
        parentSegment.lastPushedText = false;
        var contentRootSegment = createPendingSegment(
          request,
          0,
          null,
          parentSegment.formatContext,
          false,
          false
        );
        contentRootSegment.parentFlushed = true;
        task.blockedBoundary = newBoundary;
        task.blockedSegment = contentRootSegment;
        try {
          renderNode(request, task, content);
          pushSegmentFinale$1(contentRootSegment.chunks, request.responseState, contentRootSegment.lastPushedText, contentRootSegment.textEmbedded);
          contentRootSegment.status = COMPLETED;
          queueCompletedSegment(newBoundary, contentRootSegment);
          if (newBoundary.pendingTasks === 0) {
            popComponentStackInDEV(task);
            return;
          }
        } catch (error3) {
          contentRootSegment.status = ERRORED;
          newBoundary.forceClientRender = true;
          newBoundary.errorDigest = logRecoverableError(request, error3);
          {
            captureBoundaryErrorDetailsDev(newBoundary, error3);
          }
        } finally {
          task.blockedBoundary = parentBoundary;
          task.blockedSegment = parentSegment;
        }
        var suspendedFallbackTask = createTask(request, fallback, parentBoundary, boundarySegment, fallbackAbortSet, task.legacyContext, task.context, task.treeContext);
        {
          suspendedFallbackTask.componentStack = task.componentStack;
        }
        request.pingedTasks.push(suspendedFallbackTask);
        popComponentStackInDEV(task);
      }
      function renderHostElement(request, task, type, props) {
        pushBuiltInComponentStackInDEV(task, type);
        var segment = task.blockedSegment;
        var children = pushStartInstance(segment.chunks, type, props, request.responseState, segment.formatContext);
        segment.lastPushedText = false;
        var prevContext = segment.formatContext;
        segment.formatContext = getChildFormatContext(prevContext, type, props);
        renderNode(request, task, children);
        segment.formatContext = prevContext;
        pushEndInstance(segment.chunks, type);
        segment.lastPushedText = false;
        popComponentStackInDEV(task);
      }
      function shouldConstruct$1(Component) {
        return Component.prototype && Component.prototype.isReactComponent;
      }
      function renderWithHooks(request, task, Component, props, secondArg) {
        var componentIdentity = {};
        prepareToUseHooks(task, componentIdentity);
        var result = Component(props, secondArg);
        return finishHooks(Component, props, result, secondArg);
      }
      function finishClassComponent(request, task, instance, Component, props) {
        var nextChildren = instance.render();
        {
          if (instance.props !== props) {
            if (!didWarnAboutReassigningProps) {
              error2("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", getComponentNameFromType(Component) || "a component");
            }
            didWarnAboutReassigningProps = true;
          }
        }
        {
          var childContextTypes = Component.childContextTypes;
          if (childContextTypes !== null && childContextTypes !== void 0) {
            var previousContext = task.legacyContext;
            var mergedContext = processChildContext(instance, Component, previousContext, childContextTypes);
            task.legacyContext = mergedContext;
            renderNodeDestructive(request, task, nextChildren);
            task.legacyContext = previousContext;
            return;
          }
        }
        renderNodeDestructive(request, task, nextChildren);
      }
      function renderClassComponent(request, task, Component, props) {
        pushClassComponentStackInDEV(task, Component);
        var maskedContext = getMaskedContext(Component, task.legacyContext);
        var instance = constructClassInstance(Component, props, maskedContext);
        mountClassInstance(instance, Component, props, maskedContext);
        finishClassComponent(request, task, instance, Component, props);
        popComponentStackInDEV(task);
      }
      var didWarnAboutBadClass = {};
      var didWarnAboutModulePatternComponent = {};
      var didWarnAboutContextTypeOnFunctionComponent = {};
      var didWarnAboutGetDerivedStateOnFunctionComponent = {};
      var didWarnAboutReassigningProps = false;
      var didWarnAboutGenerators = false;
      var didWarnAboutMaps = false;
      var hasWarnedAboutUsingContextAsConsumer = false;
      function renderIndeterminateComponent(request, task, Component, props) {
        var legacyContext;
        {
          legacyContext = getMaskedContext(Component, task.legacyContext);
        }
        pushFunctionComponentStackInDEV(task, Component);
        {
          if (Component.prototype && typeof Component.prototype.render === "function") {
            var componentName = getComponentNameFromType(Component) || "Unknown";
            if (!didWarnAboutBadClass[componentName]) {
              error2("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", componentName, componentName);
              didWarnAboutBadClass[componentName] = true;
            }
          }
        }
        var value = renderWithHooks(request, task, Component, props, legacyContext);
        var hasId = checkDidRenderIdHook();
        {
          if (typeof value === "object" && value !== null && typeof value.render === "function" && value.$$typeof === void 0) {
            var _componentName = getComponentNameFromType(Component) || "Unknown";
            if (!didWarnAboutModulePatternComponent[_componentName]) {
              error2("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName, _componentName, _componentName);
              didWarnAboutModulePatternComponent[_componentName] = true;
            }
          }
        }
        if (typeof value === "object" && value !== null && typeof value.render === "function" && value.$$typeof === void 0) {
          {
            var _componentName2 = getComponentNameFromType(Component) || "Unknown";
            if (!didWarnAboutModulePatternComponent[_componentName2]) {
              error2("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName2, _componentName2, _componentName2);
              didWarnAboutModulePatternComponent[_componentName2] = true;
            }
          }
          mountClassInstance(value, Component, props, legacyContext);
          finishClassComponent(request, task, value, Component, props);
        } else {
          {
            validateFunctionComponentInDev(Component);
          }
          if (hasId) {
            var prevTreeContext = task.treeContext;
            var totalChildren = 1;
            var index = 0;
            task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);
            try {
              renderNodeDestructive(request, task, value);
            } finally {
              task.treeContext = prevTreeContext;
            }
          } else {
            renderNodeDestructive(request, task, value);
          }
        }
        popComponentStackInDEV(task);
      }
      function validateFunctionComponentInDev(Component) {
        {
          if (Component) {
            if (Component.childContextTypes) {
              error2("%s(...): childContextTypes cannot be defined on a function component.", Component.displayName || Component.name || "Component");
            }
          }
          if (typeof Component.getDerivedStateFromProps === "function") {
            var _componentName3 = getComponentNameFromType(Component) || "Unknown";
            if (!didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3]) {
              error2("%s: Function components do not support getDerivedStateFromProps.", _componentName3);
              didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3] = true;
            }
          }
          if (typeof Component.contextType === "object" && Component.contextType !== null) {
            var _componentName4 = getComponentNameFromType(Component) || "Unknown";
            if (!didWarnAboutContextTypeOnFunctionComponent[_componentName4]) {
              error2("%s: Function components do not support contextType.", _componentName4);
              didWarnAboutContextTypeOnFunctionComponent[_componentName4] = true;
            }
          }
        }
      }
      function resolveDefaultProps(Component, baseProps) {
        if (Component && Component.defaultProps) {
          var props = assign({}, baseProps);
          var defaultProps = Component.defaultProps;
          for (var propName2 in defaultProps) {
            if (props[propName2] === void 0) {
              props[propName2] = defaultProps[propName2];
            }
          }
          return props;
        }
        return baseProps;
      }
      function renderForwardRef(request, task, type, props, ref) {
        pushFunctionComponentStackInDEV(task, type.render);
        var children = renderWithHooks(request, task, type.render, props, ref);
        var hasId = checkDidRenderIdHook();
        if (hasId) {
          var prevTreeContext = task.treeContext;
          var totalChildren = 1;
          var index = 0;
          task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);
          try {
            renderNodeDestructive(request, task, children);
          } finally {
            task.treeContext = prevTreeContext;
          }
        } else {
          renderNodeDestructive(request, task, children);
        }
        popComponentStackInDEV(task);
      }
      function renderMemo(request, task, type, props, ref) {
        var innerType = type.type;
        var resolvedProps = resolveDefaultProps(innerType, props);
        renderElement2(request, task, innerType, resolvedProps, ref);
      }
      function renderContextConsumer(request, task, context, props) {
        {
          if (context._context === void 0) {
            if (context !== context.Consumer) {
              if (!hasWarnedAboutUsingContextAsConsumer) {
                hasWarnedAboutUsingContextAsConsumer = true;
                error2("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
              }
            }
          } else {
            context = context._context;
          }
        }
        var render = props.children;
        {
          if (typeof render !== "function") {
            error2("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
          }
        }
        var newValue = readContext(context);
        var newChildren = render(newValue);
        renderNodeDestructive(request, task, newChildren);
      }
      function renderContextProvider(request, task, type, props) {
        var context = type._context;
        var value = props.value;
        var children = props.children;
        var prevSnapshot;
        {
          prevSnapshot = task.context;
        }
        task.context = pushProvider(context, value);
        renderNodeDestructive(request, task, children);
        task.context = popProvider(context);
        {
          if (prevSnapshot !== task.context) {
            error2("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
          }
        }
      }
      function renderLazyComponent(request, task, lazyComponent, props, ref) {
        pushBuiltInComponentStackInDEV(task, "Lazy");
        var payload = lazyComponent._payload;
        var init2 = lazyComponent._init;
        var Component = init2(payload);
        var resolvedProps = resolveDefaultProps(Component, props);
        renderElement2(request, task, Component, resolvedProps, ref);
        popComponentStackInDEV(task);
      }
      function renderElement2(request, task, type, props, ref) {
        if (typeof type === "function") {
          if (shouldConstruct$1(type)) {
            renderClassComponent(request, task, type, props);
            return;
          } else {
            renderIndeterminateComponent(request, task, type, props);
            return;
          }
        }
        if (typeof type === "string") {
          renderHostElement(request, task, type, props);
          return;
        }
        switch (type) {
          case REACT_LEGACY_HIDDEN_TYPE:
          case REACT_DEBUG_TRACING_MODE_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_FRAGMENT_TYPE: {
            renderNodeDestructive(request, task, props.children);
            return;
          }
          case REACT_SUSPENSE_LIST_TYPE: {
            pushBuiltInComponentStackInDEV(task, "SuspenseList");
            renderNodeDestructive(request, task, props.children);
            popComponentStackInDEV(task);
            return;
          }
          case REACT_SCOPE_TYPE: {
            throw new Error("ReactDOMServer does not yet support scope components.");
          }
          case REACT_SUSPENSE_TYPE: {
            {
              renderSuspenseBoundary(request, task, props);
            }
            return;
          }
        }
        if (typeof type === "object" && type !== null) {
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE: {
              renderForwardRef(request, task, type, props, ref);
              return;
            }
            case REACT_MEMO_TYPE: {
              renderMemo(request, task, type, props, ref);
              return;
            }
            case REACT_PROVIDER_TYPE: {
              renderContextProvider(request, task, type, props);
              return;
            }
            case REACT_CONTEXT_TYPE: {
              renderContextConsumer(request, task, type, props);
              return;
            }
            case REACT_LAZY_TYPE: {
              renderLazyComponent(request, task, type, props);
              return;
            }
          }
        }
        var info = "";
        {
          if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
            info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
          }
        }
        throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (type == null ? type : typeof type) + "." + info));
      }
      function validateIterable(iterable, iteratorFn) {
        {
          if (typeof Symbol === "function" && iterable[Symbol.toStringTag] === "Generator") {
            if (!didWarnAboutGenerators) {
              error2("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers.");
            }
            didWarnAboutGenerators = true;
          }
          if (iterable.entries === iteratorFn) {
            if (!didWarnAboutMaps) {
              error2("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
            }
            didWarnAboutMaps = true;
          }
        }
      }
      function renderNodeDestructive(request, task, node) {
        {
          try {
            return renderNodeDestructiveImpl(request, task, node);
          } catch (x) {
            if (typeof x === "object" && x !== null && typeof x.then === "function")
              ;
            else {
              lastBoundaryErrorComponentStackDev = lastBoundaryErrorComponentStackDev !== null ? lastBoundaryErrorComponentStackDev : getCurrentStackInDEV();
            }
            throw x;
          }
        }
      }
      function renderNodeDestructiveImpl(request, task, node) {
        task.node = node;
        if (typeof node === "object" && node !== null) {
          switch (node.$$typeof) {
            case REACT_ELEMENT_TYPE: {
              var element = node;
              var type = element.type;
              var props = element.props;
              var ref = element.ref;
              renderElement2(request, task, type, props, ref);
              return;
            }
            case REACT_PORTAL_TYPE:
              throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
            case REACT_LAZY_TYPE: {
              var lazyNode = node;
              var payload = lazyNode._payload;
              var init2 = lazyNode._init;
              var resolvedNode;
              {
                try {
                  resolvedNode = init2(payload);
                } catch (x) {
                  if (typeof x === "object" && x !== null && typeof x.then === "function") {
                    pushBuiltInComponentStackInDEV(task, "Lazy");
                  }
                  throw x;
                }
              }
              renderNodeDestructive(request, task, resolvedNode);
              return;
            }
          }
          if (isArray(node)) {
            renderChildrenArray(request, task, node);
            return;
          }
          var iteratorFn = getIteratorFn(node);
          if (iteratorFn) {
            {
              validateIterable(node, iteratorFn);
            }
            var iterator = iteratorFn.call(node);
            if (iterator) {
              var step = iterator.next();
              if (!step.done) {
                var children = [];
                do {
                  children.push(step.value);
                  step = iterator.next();
                } while (!step.done);
                renderChildrenArray(request, task, children);
                return;
              }
              return;
            }
          }
          var childString = Object.prototype.toString.call(node);
          throw new Error("Objects are not valid as a React child (found: " + (childString === "[object Object]" ? "object with keys {" + Object.keys(node).join(", ") + "}" : childString) + "). If you meant to render a collection of children, use an array instead.");
        }
        if (typeof node === "string") {
          var segment = task.blockedSegment;
          segment.lastPushedText = pushTextInstance$1(task.blockedSegment.chunks, node, request.responseState, segment.lastPushedText);
          return;
        }
        if (typeof node === "number") {
          var _segment = task.blockedSegment;
          _segment.lastPushedText = pushTextInstance$1(task.blockedSegment.chunks, "" + node, request.responseState, _segment.lastPushedText);
          return;
        }
        {
          if (typeof node === "function") {
            error2("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
          }
        }
      }
      function renderChildrenArray(request, task, children) {
        var totalChildren = children.length;
        for (var i = 0; i < totalChildren; i++) {
          var prevTreeContext = task.treeContext;
          task.treeContext = pushTreeContext(prevTreeContext, totalChildren, i);
          try {
            renderNode(request, task, children[i]);
          } finally {
            task.treeContext = prevTreeContext;
          }
        }
      }
      function spawnNewSuspendedTask(request, task, x) {
        var segment = task.blockedSegment;
        var insertionIndex = segment.chunks.length;
        var newSegment = createPendingSegment(
          request,
          insertionIndex,
          null,
          segment.formatContext,
          segment.lastPushedText,
          true
        );
        segment.children.push(newSegment);
        segment.lastPushedText = false;
        var newTask = createTask(request, task.node, task.blockedBoundary, newSegment, task.abortSet, task.legacyContext, task.context, task.treeContext);
        {
          if (task.componentStack !== null) {
            newTask.componentStack = task.componentStack.parent;
          }
        }
        var ping = newTask.ping;
        x.then(ping, ping);
      }
      function renderNode(request, task, node) {
        var previousFormatContext = task.blockedSegment.formatContext;
        var previousLegacyContext = task.legacyContext;
        var previousContext = task.context;
        var previousComponentStack = null;
        {
          previousComponentStack = task.componentStack;
        }
        try {
          return renderNodeDestructive(request, task, node);
        } catch (x) {
          resetHooksState();
          if (typeof x === "object" && x !== null && typeof x.then === "function") {
            spawnNewSuspendedTask(request, task, x);
            task.blockedSegment.formatContext = previousFormatContext;
            task.legacyContext = previousLegacyContext;
            task.context = previousContext;
            switchContext(previousContext);
            {
              task.componentStack = previousComponentStack;
            }
            return;
          } else {
            task.blockedSegment.formatContext = previousFormatContext;
            task.legacyContext = previousLegacyContext;
            task.context = previousContext;
            switchContext(previousContext);
            {
              task.componentStack = previousComponentStack;
            }
            throw x;
          }
        }
      }
      function erroredTask(request, boundary, segment, error3) {
        var errorDigest = logRecoverableError(request, error3);
        if (boundary === null) {
          fatalError(request, error3);
        } else {
          boundary.pendingTasks--;
          if (!boundary.forceClientRender) {
            boundary.forceClientRender = true;
            boundary.errorDigest = errorDigest;
            {
              captureBoundaryErrorDetailsDev(boundary, error3);
            }
            if (boundary.parentFlushed) {
              request.clientRenderedBoundaries.push(boundary);
            }
          }
        }
        request.allPendingTasks--;
        if (request.allPendingTasks === 0) {
          var onAllReady = request.onAllReady;
          onAllReady();
        }
      }
      function abortTaskSoft(task) {
        var request = this;
        var boundary = task.blockedBoundary;
        var segment = task.blockedSegment;
        segment.status = ABORTED;
        finishedTask(request, boundary, segment);
      }
      function abortTask(task, request, reason) {
        var boundary = task.blockedBoundary;
        var segment = task.blockedSegment;
        segment.status = ABORTED;
        if (boundary === null) {
          request.allPendingTasks--;
          if (request.status !== CLOSED) {
            request.status = CLOSED;
            if (request.destination !== null) {
              close(request.destination);
            }
          }
        } else {
          boundary.pendingTasks--;
          if (!boundary.forceClientRender) {
            boundary.forceClientRender = true;
            var _error = reason === void 0 ? new Error("The render was aborted by the server without a reason.") : reason;
            boundary.errorDigest = request.onError(_error);
            {
              var errorPrefix = "The server did not finish this Suspense boundary: ";
              if (_error && typeof _error.message === "string") {
                _error = errorPrefix + _error.message;
              } else {
                _error = errorPrefix + String(_error);
              }
              var previousTaskInDev = currentTaskInDEV;
              currentTaskInDEV = task;
              try {
                captureBoundaryErrorDetailsDev(boundary, _error);
              } finally {
                currentTaskInDEV = previousTaskInDev;
              }
            }
            if (boundary.parentFlushed) {
              request.clientRenderedBoundaries.push(boundary);
            }
          }
          boundary.fallbackAbortableTasks.forEach(function(fallbackTask) {
            return abortTask(fallbackTask, request, reason);
          });
          boundary.fallbackAbortableTasks.clear();
          request.allPendingTasks--;
          if (request.allPendingTasks === 0) {
            var onAllReady = request.onAllReady;
            onAllReady();
          }
        }
      }
      function queueCompletedSegment(boundary, segment) {
        if (segment.chunks.length === 0 && segment.children.length === 1 && segment.children[0].boundary === null) {
          var childSegment = segment.children[0];
          childSegment.id = segment.id;
          childSegment.parentFlushed = true;
          if (childSegment.status === COMPLETED) {
            queueCompletedSegment(boundary, childSegment);
          }
        } else {
          var completedSegments = boundary.completedSegments;
          completedSegments.push(segment);
        }
      }
      function finishedTask(request, boundary, segment) {
        if (boundary === null) {
          if (segment.parentFlushed) {
            if (request.completedRootSegment !== null) {
              throw new Error("There can only be one root segment. This is a bug in React.");
            }
            request.completedRootSegment = segment;
          }
          request.pendingRootTasks--;
          if (request.pendingRootTasks === 0) {
            request.onShellError = noop$1;
            var onShellReady = request.onShellReady;
            onShellReady();
          }
        } else {
          boundary.pendingTasks--;
          if (boundary.forceClientRender)
            ;
          else if (boundary.pendingTasks === 0) {
            if (segment.parentFlushed) {
              if (segment.status === COMPLETED) {
                queueCompletedSegment(boundary, segment);
              }
            }
            if (boundary.parentFlushed) {
              request.completedBoundaries.push(boundary);
            }
            boundary.fallbackAbortableTasks.forEach(abortTaskSoft, request);
            boundary.fallbackAbortableTasks.clear();
          } else {
            if (segment.parentFlushed) {
              if (segment.status === COMPLETED) {
                queueCompletedSegment(boundary, segment);
                var completedSegments = boundary.completedSegments;
                if (completedSegments.length === 1) {
                  if (boundary.parentFlushed) {
                    request.partialBoundaries.push(boundary);
                  }
                }
              }
            }
          }
        }
        request.allPendingTasks--;
        if (request.allPendingTasks === 0) {
          var onAllReady = request.onAllReady;
          onAllReady();
        }
      }
      function retryTask(request, task) {
        var segment = task.blockedSegment;
        if (segment.status !== PENDING) {
          return;
        }
        switchContext(task.context);
        var prevTaskInDEV = null;
        {
          prevTaskInDEV = currentTaskInDEV;
          currentTaskInDEV = task;
        }
        try {
          renderNodeDestructive(request, task, task.node);
          pushSegmentFinale$1(segment.chunks, request.responseState, segment.lastPushedText, segment.textEmbedded);
          task.abortSet.delete(task);
          segment.status = COMPLETED;
          finishedTask(request, task.blockedBoundary, segment);
        } catch (x) {
          resetHooksState();
          if (typeof x === "object" && x !== null && typeof x.then === "function") {
            var ping = task.ping;
            x.then(ping, ping);
          } else {
            task.abortSet.delete(task);
            segment.status = ERRORED;
            erroredTask(request, task.blockedBoundary, segment, x);
          }
        } finally {
          {
            currentTaskInDEV = prevTaskInDEV;
          }
        }
      }
      function performWork(request) {
        if (request.status === CLOSED) {
          return;
        }
        var prevContext = getActiveContext();
        var prevDispatcher = ReactCurrentDispatcher$1.current;
        ReactCurrentDispatcher$1.current = Dispatcher;
        var prevGetCurrentStackImpl;
        {
          prevGetCurrentStackImpl = ReactDebugCurrentFrame$1.getCurrentStack;
          ReactDebugCurrentFrame$1.getCurrentStack = getCurrentStackInDEV;
        }
        var prevResponseState = currentResponseState;
        setCurrentResponseState(request.responseState);
        try {
          var pingedTasks = request.pingedTasks;
          var i;
          for (i = 0; i < pingedTasks.length; i++) {
            var task = pingedTasks[i];
            retryTask(request, task);
          }
          pingedTasks.splice(0, i);
          if (request.destination !== null) {
            flushCompletedQueues(request, request.destination);
          }
        } catch (error3) {
          logRecoverableError(request, error3);
          fatalError(request, error3);
        } finally {
          setCurrentResponseState(prevResponseState);
          ReactCurrentDispatcher$1.current = prevDispatcher;
          {
            ReactDebugCurrentFrame$1.getCurrentStack = prevGetCurrentStackImpl;
          }
          if (prevDispatcher === Dispatcher) {
            switchContext(prevContext);
          }
        }
      }
      function flushSubtree(request, destination, segment) {
        segment.parentFlushed = true;
        switch (segment.status) {
          case PENDING: {
            var segmentID = segment.id = request.nextSegmentId++;
            segment.lastPushedText = false;
            segment.textEmbedded = false;
            return writePlaceholder(destination, request.responseState, segmentID);
          }
          case COMPLETED: {
            segment.status = FLUSHED;
            var r = true;
            var chunks = segment.chunks;
            var chunkIdx = 0;
            var children = segment.children;
            for (var childIdx = 0; childIdx < children.length; childIdx++) {
              var nextChild = children[childIdx];
              for (; chunkIdx < nextChild.index; chunkIdx++) {
                writeChunk(destination, chunks[chunkIdx]);
              }
              r = flushSegment(request, destination, nextChild);
            }
            for (; chunkIdx < chunks.length - 1; chunkIdx++) {
              writeChunk(destination, chunks[chunkIdx]);
            }
            if (chunkIdx < chunks.length) {
              r = writeChunkAndReturn(destination, chunks[chunkIdx]);
            }
            return r;
          }
          default: {
            throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
          }
        }
      }
      function flushSegment(request, destination, segment) {
        var boundary = segment.boundary;
        if (boundary === null) {
          return flushSubtree(request, destination, segment);
        }
        boundary.parentFlushed = true;
        if (boundary.forceClientRender) {
          writeStartClientRenderedSuspenseBoundary$1(destination, request.responseState, boundary.errorDigest, boundary.errorMessage, boundary.errorComponentStack);
          flushSubtree(request, destination, segment);
          return writeEndClientRenderedSuspenseBoundary$1(destination, request.responseState);
        } else if (boundary.pendingTasks > 0) {
          boundary.rootSegmentID = request.nextSegmentId++;
          if (boundary.completedSegments.length > 0) {
            request.partialBoundaries.push(boundary);
          }
          var id = boundary.id = assignSuspenseBoundaryID(request.responseState);
          writeStartPendingSuspenseBoundary(destination, request.responseState, id);
          flushSubtree(request, destination, segment);
          return writeEndPendingSuspenseBoundary(destination, request.responseState);
        } else if (boundary.byteSize > request.progressiveChunkSize) {
          boundary.rootSegmentID = request.nextSegmentId++;
          request.completedBoundaries.push(boundary);
          writeStartPendingSuspenseBoundary(destination, request.responseState, boundary.id);
          flushSubtree(request, destination, segment);
          return writeEndPendingSuspenseBoundary(destination, request.responseState);
        } else {
          writeStartCompletedSuspenseBoundary$1(destination, request.responseState);
          var completedSegments = boundary.completedSegments;
          if (completedSegments.length !== 1) {
            throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
          }
          var contentSegment = completedSegments[0];
          flushSegment(request, destination, contentSegment);
          return writeEndCompletedSuspenseBoundary$1(destination, request.responseState);
        }
      }
      function flushClientRenderedBoundary(request, destination, boundary) {
        return writeClientRenderBoundaryInstruction(destination, request.responseState, boundary.id, boundary.errorDigest, boundary.errorMessage, boundary.errorComponentStack);
      }
      function flushSegmentContainer(request, destination, segment) {
        writeStartSegment(destination, request.responseState, segment.formatContext, segment.id);
        flushSegment(request, destination, segment);
        return writeEndSegment(destination, segment.formatContext);
      }
      function flushCompletedBoundary(request, destination, boundary) {
        var completedSegments = boundary.completedSegments;
        var i = 0;
        for (; i < completedSegments.length; i++) {
          var segment = completedSegments[i];
          flushPartiallyCompletedSegment(request, destination, boundary, segment);
        }
        completedSegments.length = 0;
        return writeCompletedBoundaryInstruction(destination, request.responseState, boundary.id, boundary.rootSegmentID);
      }
      function flushPartialBoundary(request, destination, boundary) {
        var completedSegments = boundary.completedSegments;
        var i = 0;
        for (; i < completedSegments.length; i++) {
          var segment = completedSegments[i];
          if (!flushPartiallyCompletedSegment(request, destination, boundary, segment)) {
            i++;
            completedSegments.splice(0, i);
            return false;
          }
        }
        completedSegments.splice(0, i);
        return true;
      }
      function flushPartiallyCompletedSegment(request, destination, boundary, segment) {
        if (segment.status === FLUSHED) {
          return true;
        }
        var segmentID = segment.id;
        if (segmentID === -1) {
          var rootSegmentID = segment.id = boundary.rootSegmentID;
          if (rootSegmentID === -1) {
            throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
          }
          return flushSegmentContainer(request, destination, segment);
        } else {
          flushSegmentContainer(request, destination, segment);
          return writeCompletedSegmentInstruction(destination, request.responseState, segmentID);
        }
      }
      function flushCompletedQueues(request, destination) {
        try {
          var completedRootSegment = request.completedRootSegment;
          if (completedRootSegment !== null && request.pendingRootTasks === 0) {
            flushSegment(request, destination, completedRootSegment);
            request.completedRootSegment = null;
            writeCompletedRoot(destination, request.responseState);
          }
          var clientRenderedBoundaries = request.clientRenderedBoundaries;
          var i;
          for (i = 0; i < clientRenderedBoundaries.length; i++) {
            var boundary = clientRenderedBoundaries[i];
            if (!flushClientRenderedBoundary(request, destination, boundary)) {
              request.destination = null;
              i++;
              clientRenderedBoundaries.splice(0, i);
              return;
            }
          }
          clientRenderedBoundaries.splice(0, i);
          var completedBoundaries = request.completedBoundaries;
          for (i = 0; i < completedBoundaries.length; i++) {
            var _boundary = completedBoundaries[i];
            if (!flushCompletedBoundary(request, destination, _boundary)) {
              request.destination = null;
              i++;
              completedBoundaries.splice(0, i);
              return;
            }
          }
          completedBoundaries.splice(0, i);
          completeWriting(destination);
          beginWriting(destination);
          var partialBoundaries = request.partialBoundaries;
          for (i = 0; i < partialBoundaries.length; i++) {
            var _boundary2 = partialBoundaries[i];
            if (!flushPartialBoundary(request, destination, _boundary2)) {
              request.destination = null;
              i++;
              partialBoundaries.splice(0, i);
              return;
            }
          }
          partialBoundaries.splice(0, i);
          var largeBoundaries = request.completedBoundaries;
          for (i = 0; i < largeBoundaries.length; i++) {
            var _boundary3 = largeBoundaries[i];
            if (!flushCompletedBoundary(request, destination, _boundary3)) {
              request.destination = null;
              i++;
              largeBoundaries.splice(0, i);
              return;
            }
          }
          largeBoundaries.splice(0, i);
        } finally {
          if (request.allPendingTasks === 0 && request.pingedTasks.length === 0 && request.clientRenderedBoundaries.length === 0 && request.completedBoundaries.length === 0) {
            {
              if (request.abortableTasks.size !== 0) {
                error2("There was still abortable task at the root when we closed. This is a bug in React.");
              }
            }
            close(destination);
          }
        }
      }
      function startWork(request) {
        scheduleWork(function() {
          return performWork(request);
        });
      }
      function startFlowing(request, destination) {
        if (request.status === CLOSING) {
          request.status = CLOSED;
          closeWithError(destination, request.fatalError);
          return;
        }
        if (request.status === CLOSED) {
          return;
        }
        if (request.destination !== null) {
          return;
        }
        request.destination = destination;
        try {
          flushCompletedQueues(request, destination);
        } catch (error3) {
          logRecoverableError(request, error3);
          fatalError(request, error3);
        }
      }
      function abort(request, reason) {
        try {
          var abortableTasks = request.abortableTasks;
          abortableTasks.forEach(function(task) {
            return abortTask(task, request, reason);
          });
          abortableTasks.clear();
          if (request.destination !== null) {
            flushCompletedQueues(request, request.destination);
          }
        } catch (error3) {
          logRecoverableError(request, error3);
          fatalError(request, error3);
        }
      }
      function onError() {
      }
      function renderToStringImpl(children, options, generateStaticMarkup, abortReason) {
        var didFatal = false;
        var fatalError2 = null;
        var result = "";
        var destination = {
          push: function(chunk) {
            if (chunk !== null) {
              result += chunk;
            }
            return true;
          },
          destroy: function(error3) {
            didFatal = true;
            fatalError2 = error3;
          }
        };
        var readyToStream = false;
        function onShellReady() {
          readyToStream = true;
        }
        var request = createRequest(children, createResponseState$1(generateStaticMarkup, options ? options.identifierPrefix : void 0), createRootFormatContext(), Infinity, onError, void 0, onShellReady, void 0, void 0);
        startWork(request);
        abort(request, abortReason);
        startFlowing(request, destination);
        if (didFatal) {
          throw fatalError2;
        }
        if (!readyToStream) {
          throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
        }
        return result;
      }
      function renderToString2(children, options) {
        return renderToStringImpl(children, options, false, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
      }
      function renderToStaticMarkup2(children, options) {
        return renderToStringImpl(children, options, true, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
      }
      function renderToNodeStream() {
        throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
      }
      function renderToStaticNodeStream() {
        throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
      }
      reactDomServerLegacy_browser_development.renderToNodeStream = renderToNodeStream;
      reactDomServerLegacy_browser_development.renderToStaticMarkup = renderToStaticMarkup2;
      reactDomServerLegacy_browser_development.renderToStaticNodeStream = renderToStaticNodeStream;
      reactDomServerLegacy_browser_development.renderToString = renderToString2;
      reactDomServerLegacy_browser_development.version = ReactVersion;
    })();
  }
  return reactDomServerLegacy_browser_development;
}
var reactDomServer_browser_development = {};
var hasRequiredReactDomServer_browser_development;
function requireReactDomServer_browser_development() {
  if (hasRequiredReactDomServer_browser_development)
    return reactDomServer_browser_development;
  hasRequiredReactDomServer_browser_development = 1;
  if (true) {
    (function() {
      var React2 = react.exports;
      var ReactVersion = "18.2.0";
      var ReactSharedInternals = React2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function warn2(format2) {
        {
          {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            printWarning("warn", format2, args);
          }
        }
      }
      function error2(format2) {
        {
          {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning("error", format2, args);
          }
        }
      }
      function printWarning(level, format2, args) {
        {
          var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
          var stack = ReactDebugCurrentFrame2.getStackAddendum();
          if (stack !== "") {
            format2 += "%s";
            args = args.concat([stack]);
          }
          var argsWithFormat = args.map(function(item) {
            return String(item);
          });
          argsWithFormat.unshift("Warning: " + format2);
          Function.prototype.apply.call(console[level], console, argsWithFormat);
        }
      }
      function scheduleWork(callback) {
        callback();
      }
      var VIEW_SIZE = 512;
      var currentView = null;
      var writtenBytes = 0;
      function beginWriting(destination) {
        currentView = new Uint8Array(VIEW_SIZE);
        writtenBytes = 0;
      }
      function writeChunk(destination, chunk) {
        if (chunk.length === 0) {
          return;
        }
        if (chunk.length > VIEW_SIZE) {
          if (writtenBytes > 0) {
            destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes));
            currentView = new Uint8Array(VIEW_SIZE);
            writtenBytes = 0;
          }
          destination.enqueue(chunk);
          return;
        }
        var bytesToWrite = chunk;
        var allowableBytes = currentView.length - writtenBytes;
        if (allowableBytes < bytesToWrite.length) {
          if (allowableBytes === 0) {
            destination.enqueue(currentView);
          } else {
            currentView.set(bytesToWrite.subarray(0, allowableBytes), writtenBytes);
            destination.enqueue(currentView);
            bytesToWrite = bytesToWrite.subarray(allowableBytes);
          }
          currentView = new Uint8Array(VIEW_SIZE);
          writtenBytes = 0;
        }
        currentView.set(bytesToWrite, writtenBytes);
        writtenBytes += bytesToWrite.length;
      }
      function writeChunkAndReturn(destination, chunk) {
        writeChunk(destination, chunk);
        return true;
      }
      function completeWriting(destination) {
        if (currentView && writtenBytes > 0) {
          destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes));
          currentView = null;
          writtenBytes = 0;
        }
      }
      function close(destination) {
        destination.close();
      }
      var textEncoder = new TextEncoder();
      function stringToChunk(content) {
        return textEncoder.encode(content);
      }
      function stringToPrecomputedChunk(content) {
        return textEncoder.encode(content);
      }
      function closeWithError(destination, error3) {
        if (typeof destination.error === "function") {
          destination.error(error3);
        } else {
          destination.close();
        }
      }
      function typeName(value) {
        {
          var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
          var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          return type;
        }
      }
      function willCoercionThrow(value) {
        {
          try {
            testStringCoercion(value);
            return false;
          } catch (e) {
            return true;
          }
        }
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkAttributeStringCoercion(value, attributeName) {
        {
          if (willCoercionThrow(value)) {
            error2("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", attributeName, typeName(value));
            return testStringCoercion(value);
          }
        }
      }
      function checkCSSPropertyStringCoercion(value, propName2) {
        {
          if (willCoercionThrow(value)) {
            error2("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", propName2, typeName(value));
            return testStringCoercion(value);
          }
        }
      }
      function checkHtmlStringCoercion(value) {
        {
          if (willCoercionThrow(value)) {
            error2("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
            return testStringCoercion(value);
          }
        }
      }
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var RESERVED = 0;
      var STRING = 1;
      var BOOLEANISH_STRING = 2;
      var BOOLEAN = 3;
      var OVERLOADED_BOOLEAN = 4;
      var NUMERIC = 5;
      var POSITIVE_NUMERIC = 6;
      var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
      var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
      var VALID_ATTRIBUTE_NAME_REGEX = new RegExp("^[" + ATTRIBUTE_NAME_START_CHAR + "][" + ATTRIBUTE_NAME_CHAR + "]*$");
      var illegalAttributeNameCache = {};
      var validatedAttributeNameCache = {};
      function isAttributeNameSafe(attributeName) {
        if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) {
          return true;
        }
        if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) {
          return false;
        }
        if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
          validatedAttributeNameCache[attributeName] = true;
          return true;
        }
        illegalAttributeNameCache[attributeName] = true;
        {
          error2("Invalid attribute name: `%s`", attributeName);
        }
        return false;
      }
      function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
        if (propertyInfo !== null && propertyInfo.type === RESERVED) {
          return false;
        }
        switch (typeof value) {
          case "function":
          case "symbol":
            return true;
          case "boolean": {
            if (isCustomComponentTag) {
              return false;
            }
            if (propertyInfo !== null) {
              return !propertyInfo.acceptsBooleans;
            } else {
              var prefix2 = name.toLowerCase().slice(0, 5);
              return prefix2 !== "data-" && prefix2 !== "aria-";
            }
          }
          default:
            return false;
        }
      }
      function getPropertyInfo(name) {
        return properties.hasOwnProperty(name) ? properties[name] : null;
      }
      function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL2, removeEmptyString) {
        this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
        this.attributeName = attributeName;
        this.attributeNamespace = attributeNamespace;
        this.mustUseProperty = mustUseProperty;
        this.propertyName = name;
        this.type = type;
        this.sanitizeURL = sanitizeURL2;
        this.removeEmptyString = removeEmptyString;
      }
      var properties = {};
      var reservedProps = [
        "children",
        "dangerouslySetInnerHTML",
        "defaultValue",
        "defaultChecked",
        "innerHTML",
        "suppressContentEditableWarning",
        "suppressHydrationWarning",
        "style"
      ];
      reservedProps.forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          RESERVED,
          false,
          name,
          null,
          false,
          false
        );
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(_ref) {
        var name = _ref[0], attributeName = _ref[1];
        properties[name] = new PropertyInfoRecord(
          name,
          STRING,
          false,
          attributeName,
          null,
          false,
          false
        );
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          BOOLEANISH_STRING,
          false,
          name.toLowerCase(),
          null,
          false,
          false
        );
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          BOOLEANISH_STRING,
          false,
          name,
          null,
          false,
          false
        );
      });
      [
        "allowFullScreen",
        "async",
        "autoFocus",
        "autoPlay",
        "controls",
        "default",
        "defer",
        "disabled",
        "disablePictureInPicture",
        "disableRemotePlayback",
        "formNoValidate",
        "hidden",
        "loop",
        "noModule",
        "noValidate",
        "open",
        "playsInline",
        "readOnly",
        "required",
        "reversed",
        "scoped",
        "seamless",
        "itemScope"
      ].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          BOOLEAN,
          false,
          name.toLowerCase(),
          null,
          false,
          false
        );
      });
      [
        "checked",
        "multiple",
        "muted",
        "selected"
      ].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          BOOLEAN,
          true,
          name,
          null,
          false,
          false
        );
      });
      [
        "capture",
        "download"
      ].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          OVERLOADED_BOOLEAN,
          false,
          name,
          null,
          false,
          false
        );
      });
      [
        "cols",
        "rows",
        "size",
        "span"
      ].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          POSITIVE_NUMERIC,
          false,
          name,
          null,
          false,
          false
        );
      });
      ["rowSpan", "start"].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          NUMERIC,
          false,
          name.toLowerCase(),
          null,
          false,
          false
        );
      });
      var CAMELIZE = /[\-\:]([a-z])/g;
      var capitalize = function(token) {
        return token[1].toUpperCase();
      };
      [
        "accent-height",
        "alignment-baseline",
        "arabic-form",
        "baseline-shift",
        "cap-height",
        "clip-path",
        "clip-rule",
        "color-interpolation",
        "color-interpolation-filters",
        "color-profile",
        "color-rendering",
        "dominant-baseline",
        "enable-background",
        "fill-opacity",
        "fill-rule",
        "flood-color",
        "flood-opacity",
        "font-family",
        "font-size",
        "font-size-adjust",
        "font-stretch",
        "font-style",
        "font-variant",
        "font-weight",
        "glyph-name",
        "glyph-orientation-horizontal",
        "glyph-orientation-vertical",
        "horiz-adv-x",
        "horiz-origin-x",
        "image-rendering",
        "letter-spacing",
        "lighting-color",
        "marker-end",
        "marker-mid",
        "marker-start",
        "overline-position",
        "overline-thickness",
        "paint-order",
        "panose-1",
        "pointer-events",
        "rendering-intent",
        "shape-rendering",
        "stop-color",
        "stop-opacity",
        "strikethrough-position",
        "strikethrough-thickness",
        "stroke-dasharray",
        "stroke-dashoffset",
        "stroke-linecap",
        "stroke-linejoin",
        "stroke-miterlimit",
        "stroke-opacity",
        "stroke-width",
        "text-anchor",
        "text-decoration",
        "text-rendering",
        "underline-position",
        "underline-thickness",
        "unicode-bidi",
        "unicode-range",
        "units-per-em",
        "v-alphabetic",
        "v-hanging",
        "v-ideographic",
        "v-mathematical",
        "vector-effect",
        "vert-adv-y",
        "vert-origin-x",
        "vert-origin-y",
        "word-spacing",
        "writing-mode",
        "xmlns:xlink",
        "x-height"
      ].forEach(function(attributeName) {
        var name = attributeName.replace(CAMELIZE, capitalize);
        properties[name] = new PropertyInfoRecord(
          name,
          STRING,
          false,
          attributeName,
          null,
          false,
          false
        );
      });
      [
        "xlink:actuate",
        "xlink:arcrole",
        "xlink:role",
        "xlink:show",
        "xlink:title",
        "xlink:type"
      ].forEach(function(attributeName) {
        var name = attributeName.replace(CAMELIZE, capitalize);
        properties[name] = new PropertyInfoRecord(
          name,
          STRING,
          false,
          attributeName,
          "http://www.w3.org/1999/xlink",
          false,
          false
        );
      });
      [
        "xml:base",
        "xml:lang",
        "xml:space"
      ].forEach(function(attributeName) {
        var name = attributeName.replace(CAMELIZE, capitalize);
        properties[name] = new PropertyInfoRecord(
          name,
          STRING,
          false,
          attributeName,
          "http://www.w3.org/XML/1998/namespace",
          false,
          false
        );
      });
      ["tabIndex", "crossOrigin"].forEach(function(attributeName) {
        properties[attributeName] = new PropertyInfoRecord(
          attributeName,
          STRING,
          false,
          attributeName.toLowerCase(),
          null,
          false,
          false
        );
      });
      var xlinkHref = "xlinkHref";
      properties[xlinkHref] = new PropertyInfoRecord(
        "xlinkHref",
        STRING,
        false,
        "xlink:href",
        "http://www.w3.org/1999/xlink",
        true,
        false
      );
      ["src", "href", "action", "formAction"].forEach(function(attributeName) {
        properties[attributeName] = new PropertyInfoRecord(
          attributeName,
          STRING,
          false,
          attributeName.toLowerCase(),
          null,
          true,
          true
        );
      });
      var isUnitlessNumber = {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      function prefixKey(prefix2, key) {
        return prefix2 + key.charAt(0).toUpperCase() + key.substring(1);
      }
      var prefixes = ["Webkit", "ms", "Moz", "O"];
      Object.keys(isUnitlessNumber).forEach(function(prop) {
        prefixes.forEach(function(prefix2) {
          isUnitlessNumber[prefixKey(prefix2, prop)] = isUnitlessNumber[prop];
        });
      });
      var hasReadOnlyValue = {
        button: true,
        checkbox: true,
        image: true,
        hidden: true,
        radio: true,
        reset: true,
        submit: true
      };
      function checkControlledValueProps(tagName, props) {
        {
          if (!(hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || props.value == null)) {
            error2("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.");
          }
          if (!(props.onChange || props.readOnly || props.disabled || props.checked == null)) {
            error2("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
          }
        }
      }
      function isCustomComponent(tagName, props) {
        if (tagName.indexOf("-") === -1) {
          return typeof props.is === "string";
        }
        switch (tagName) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var ariaProperties = {
        "aria-current": 0,
        "aria-description": 0,
        "aria-details": 0,
        "aria-disabled": 0,
        "aria-hidden": 0,
        "aria-invalid": 0,
        "aria-keyshortcuts": 0,
        "aria-label": 0,
        "aria-roledescription": 0,
        "aria-autocomplete": 0,
        "aria-checked": 0,
        "aria-expanded": 0,
        "aria-haspopup": 0,
        "aria-level": 0,
        "aria-modal": 0,
        "aria-multiline": 0,
        "aria-multiselectable": 0,
        "aria-orientation": 0,
        "aria-placeholder": 0,
        "aria-pressed": 0,
        "aria-readonly": 0,
        "aria-required": 0,
        "aria-selected": 0,
        "aria-sort": 0,
        "aria-valuemax": 0,
        "aria-valuemin": 0,
        "aria-valuenow": 0,
        "aria-valuetext": 0,
        "aria-atomic": 0,
        "aria-busy": 0,
        "aria-live": 0,
        "aria-relevant": 0,
        "aria-dropeffect": 0,
        "aria-grabbed": 0,
        "aria-activedescendant": 0,
        "aria-colcount": 0,
        "aria-colindex": 0,
        "aria-colspan": 0,
        "aria-controls": 0,
        "aria-describedby": 0,
        "aria-errormessage": 0,
        "aria-flowto": 0,
        "aria-labelledby": 0,
        "aria-owns": 0,
        "aria-posinset": 0,
        "aria-rowcount": 0,
        "aria-rowindex": 0,
        "aria-rowspan": 0,
        "aria-setsize": 0
      };
      var warnedProperties = {};
      var rARIA = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$");
      var rARIACamel = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
      function validateProperty(tagName, name) {
        {
          if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) {
            return true;
          }
          if (rARIACamel.test(name)) {
            var ariaName = "aria-" + name.slice(4).toLowerCase();
            var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;
            if (correctName == null) {
              error2("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", name);
              warnedProperties[name] = true;
              return true;
            }
            if (name !== correctName) {
              error2("Invalid ARIA attribute `%s`. Did you mean `%s`?", name, correctName);
              warnedProperties[name] = true;
              return true;
            }
          }
          if (rARIA.test(name)) {
            var lowerCasedName = name.toLowerCase();
            var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;
            if (standardName == null) {
              warnedProperties[name] = true;
              return false;
            }
            if (name !== standardName) {
              error2("Unknown ARIA attribute `%s`. Did you mean `%s`?", name, standardName);
              warnedProperties[name] = true;
              return true;
            }
          }
        }
        return true;
      }
      function warnInvalidARIAProps(type, props) {
        {
          var invalidProps = [];
          for (var key in props) {
            var isValid = validateProperty(type, key);
            if (!isValid) {
              invalidProps.push(key);
            }
          }
          var unknownPropString = invalidProps.map(function(prop) {
            return "`" + prop + "`";
          }).join(", ");
          if (invalidProps.length === 1) {
            error2("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
          } else if (invalidProps.length > 1) {
            error2("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
          }
        }
      }
      function validateProperties(type, props) {
        if (isCustomComponent(type, props)) {
          return;
        }
        warnInvalidARIAProps(type, props);
      }
      var didWarnValueNull = false;
      function validateProperties$1(type, props) {
        {
          if (type !== "input" && type !== "textarea" && type !== "select") {
            return;
          }
          if (props != null && props.value === null && !didWarnValueNull) {
            didWarnValueNull = true;
            if (type === "select" && props.multiple) {
              error2("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", type);
            } else {
              error2("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", type);
            }
          }
        }
      }
      var possibleStandardNames = {
        accept: "accept",
        acceptcharset: "acceptCharset",
        "accept-charset": "acceptCharset",
        accesskey: "accessKey",
        action: "action",
        allowfullscreen: "allowFullScreen",
        alt: "alt",
        as: "as",
        async: "async",
        autocapitalize: "autoCapitalize",
        autocomplete: "autoComplete",
        autocorrect: "autoCorrect",
        autofocus: "autoFocus",
        autoplay: "autoPlay",
        autosave: "autoSave",
        capture: "capture",
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        challenge: "challenge",
        charset: "charSet",
        checked: "checked",
        children: "children",
        cite: "cite",
        class: "className",
        classid: "classID",
        classname: "className",
        cols: "cols",
        colspan: "colSpan",
        content: "content",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        controls: "controls",
        controlslist: "controlsList",
        coords: "coords",
        crossorigin: "crossOrigin",
        dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
        data: "data",
        datetime: "dateTime",
        default: "default",
        defaultchecked: "defaultChecked",
        defaultvalue: "defaultValue",
        defer: "defer",
        dir: "dir",
        disabled: "disabled",
        disablepictureinpicture: "disablePictureInPicture",
        disableremoteplayback: "disableRemotePlayback",
        download: "download",
        draggable: "draggable",
        enctype: "encType",
        enterkeyhint: "enterKeyHint",
        for: "htmlFor",
        form: "form",
        formmethod: "formMethod",
        formaction: "formAction",
        formenctype: "formEncType",
        formnovalidate: "formNoValidate",
        formtarget: "formTarget",
        frameborder: "frameBorder",
        headers: "headers",
        height: "height",
        hidden: "hidden",
        high: "high",
        href: "href",
        hreflang: "hrefLang",
        htmlfor: "htmlFor",
        httpequiv: "httpEquiv",
        "http-equiv": "httpEquiv",
        icon: "icon",
        id: "id",
        imagesizes: "imageSizes",
        imagesrcset: "imageSrcSet",
        innerhtml: "innerHTML",
        inputmode: "inputMode",
        integrity: "integrity",
        is: "is",
        itemid: "itemID",
        itemprop: "itemProp",
        itemref: "itemRef",
        itemscope: "itemScope",
        itemtype: "itemType",
        keyparams: "keyParams",
        keytype: "keyType",
        kind: "kind",
        label: "label",
        lang: "lang",
        list: "list",
        loop: "loop",
        low: "low",
        manifest: "manifest",
        marginwidth: "marginWidth",
        marginheight: "marginHeight",
        max: "max",
        maxlength: "maxLength",
        media: "media",
        mediagroup: "mediaGroup",
        method: "method",
        min: "min",
        minlength: "minLength",
        multiple: "multiple",
        muted: "muted",
        name: "name",
        nomodule: "noModule",
        nonce: "nonce",
        novalidate: "noValidate",
        open: "open",
        optimum: "optimum",
        pattern: "pattern",
        placeholder: "placeholder",
        playsinline: "playsInline",
        poster: "poster",
        preload: "preload",
        profile: "profile",
        radiogroup: "radioGroup",
        readonly: "readOnly",
        referrerpolicy: "referrerPolicy",
        rel: "rel",
        required: "required",
        reversed: "reversed",
        role: "role",
        rows: "rows",
        rowspan: "rowSpan",
        sandbox: "sandbox",
        scope: "scope",
        scoped: "scoped",
        scrolling: "scrolling",
        seamless: "seamless",
        selected: "selected",
        shape: "shape",
        size: "size",
        sizes: "sizes",
        span: "span",
        spellcheck: "spellCheck",
        src: "src",
        srcdoc: "srcDoc",
        srclang: "srcLang",
        srcset: "srcSet",
        start: "start",
        step: "step",
        style: "style",
        summary: "summary",
        tabindex: "tabIndex",
        target: "target",
        title: "title",
        type: "type",
        usemap: "useMap",
        value: "value",
        width: "width",
        wmode: "wmode",
        wrap: "wrap",
        about: "about",
        accentheight: "accentHeight",
        "accent-height": "accentHeight",
        accumulate: "accumulate",
        additive: "additive",
        alignmentbaseline: "alignmentBaseline",
        "alignment-baseline": "alignmentBaseline",
        allowreorder: "allowReorder",
        alphabetic: "alphabetic",
        amplitude: "amplitude",
        arabicform: "arabicForm",
        "arabic-form": "arabicForm",
        ascent: "ascent",
        attributename: "attributeName",
        attributetype: "attributeType",
        autoreverse: "autoReverse",
        azimuth: "azimuth",
        basefrequency: "baseFrequency",
        baselineshift: "baselineShift",
        "baseline-shift": "baselineShift",
        baseprofile: "baseProfile",
        bbox: "bbox",
        begin: "begin",
        bias: "bias",
        by: "by",
        calcmode: "calcMode",
        capheight: "capHeight",
        "cap-height": "capHeight",
        clip: "clip",
        clippath: "clipPath",
        "clip-path": "clipPath",
        clippathunits: "clipPathUnits",
        cliprule: "clipRule",
        "clip-rule": "clipRule",
        color: "color",
        colorinterpolation: "colorInterpolation",
        "color-interpolation": "colorInterpolation",
        colorinterpolationfilters: "colorInterpolationFilters",
        "color-interpolation-filters": "colorInterpolationFilters",
        colorprofile: "colorProfile",
        "color-profile": "colorProfile",
        colorrendering: "colorRendering",
        "color-rendering": "colorRendering",
        contentscripttype: "contentScriptType",
        contentstyletype: "contentStyleType",
        cursor: "cursor",
        cx: "cx",
        cy: "cy",
        d: "d",
        datatype: "datatype",
        decelerate: "decelerate",
        descent: "descent",
        diffuseconstant: "diffuseConstant",
        direction: "direction",
        display: "display",
        divisor: "divisor",
        dominantbaseline: "dominantBaseline",
        "dominant-baseline": "dominantBaseline",
        dur: "dur",
        dx: "dx",
        dy: "dy",
        edgemode: "edgeMode",
        elevation: "elevation",
        enablebackground: "enableBackground",
        "enable-background": "enableBackground",
        end: "end",
        exponent: "exponent",
        externalresourcesrequired: "externalResourcesRequired",
        fill: "fill",
        fillopacity: "fillOpacity",
        "fill-opacity": "fillOpacity",
        fillrule: "fillRule",
        "fill-rule": "fillRule",
        filter: "filter",
        filterres: "filterRes",
        filterunits: "filterUnits",
        floodopacity: "floodOpacity",
        "flood-opacity": "floodOpacity",
        floodcolor: "floodColor",
        "flood-color": "floodColor",
        focusable: "focusable",
        fontfamily: "fontFamily",
        "font-family": "fontFamily",
        fontsize: "fontSize",
        "font-size": "fontSize",
        fontsizeadjust: "fontSizeAdjust",
        "font-size-adjust": "fontSizeAdjust",
        fontstretch: "fontStretch",
        "font-stretch": "fontStretch",
        fontstyle: "fontStyle",
        "font-style": "fontStyle",
        fontvariant: "fontVariant",
        "font-variant": "fontVariant",
        fontweight: "fontWeight",
        "font-weight": "fontWeight",
        format: "format",
        from: "from",
        fx: "fx",
        fy: "fy",
        g1: "g1",
        g2: "g2",
        glyphname: "glyphName",
        "glyph-name": "glyphName",
        glyphorientationhorizontal: "glyphOrientationHorizontal",
        "glyph-orientation-horizontal": "glyphOrientationHorizontal",
        glyphorientationvertical: "glyphOrientationVertical",
        "glyph-orientation-vertical": "glyphOrientationVertical",
        glyphref: "glyphRef",
        gradienttransform: "gradientTransform",
        gradientunits: "gradientUnits",
        hanging: "hanging",
        horizadvx: "horizAdvX",
        "horiz-adv-x": "horizAdvX",
        horizoriginx: "horizOriginX",
        "horiz-origin-x": "horizOriginX",
        ideographic: "ideographic",
        imagerendering: "imageRendering",
        "image-rendering": "imageRendering",
        in2: "in2",
        in: "in",
        inlist: "inlist",
        intercept: "intercept",
        k1: "k1",
        k2: "k2",
        k3: "k3",
        k4: "k4",
        k: "k",
        kernelmatrix: "kernelMatrix",
        kernelunitlength: "kernelUnitLength",
        kerning: "kerning",
        keypoints: "keyPoints",
        keysplines: "keySplines",
        keytimes: "keyTimes",
        lengthadjust: "lengthAdjust",
        letterspacing: "letterSpacing",
        "letter-spacing": "letterSpacing",
        lightingcolor: "lightingColor",
        "lighting-color": "lightingColor",
        limitingconeangle: "limitingConeAngle",
        local: "local",
        markerend: "markerEnd",
        "marker-end": "markerEnd",
        markerheight: "markerHeight",
        markermid: "markerMid",
        "marker-mid": "markerMid",
        markerstart: "markerStart",
        "marker-start": "markerStart",
        markerunits: "markerUnits",
        markerwidth: "markerWidth",
        mask: "mask",
        maskcontentunits: "maskContentUnits",
        maskunits: "maskUnits",
        mathematical: "mathematical",
        mode: "mode",
        numoctaves: "numOctaves",
        offset: "offset",
        opacity: "opacity",
        operator: "operator",
        order: "order",
        orient: "orient",
        orientation: "orientation",
        origin: "origin",
        overflow: "overflow",
        overlineposition: "overlinePosition",
        "overline-position": "overlinePosition",
        overlinethickness: "overlineThickness",
        "overline-thickness": "overlineThickness",
        paintorder: "paintOrder",
        "paint-order": "paintOrder",
        panose1: "panose1",
        "panose-1": "panose1",
        pathlength: "pathLength",
        patterncontentunits: "patternContentUnits",
        patterntransform: "patternTransform",
        patternunits: "patternUnits",
        pointerevents: "pointerEvents",
        "pointer-events": "pointerEvents",
        points: "points",
        pointsatx: "pointsAtX",
        pointsaty: "pointsAtY",
        pointsatz: "pointsAtZ",
        prefix: "prefix",
        preservealpha: "preserveAlpha",
        preserveaspectratio: "preserveAspectRatio",
        primitiveunits: "primitiveUnits",
        property: "property",
        r: "r",
        radius: "radius",
        refx: "refX",
        refy: "refY",
        renderingintent: "renderingIntent",
        "rendering-intent": "renderingIntent",
        repeatcount: "repeatCount",
        repeatdur: "repeatDur",
        requiredextensions: "requiredExtensions",
        requiredfeatures: "requiredFeatures",
        resource: "resource",
        restart: "restart",
        result: "result",
        results: "results",
        rotate: "rotate",
        rx: "rx",
        ry: "ry",
        scale: "scale",
        security: "security",
        seed: "seed",
        shaperendering: "shapeRendering",
        "shape-rendering": "shapeRendering",
        slope: "slope",
        spacing: "spacing",
        specularconstant: "specularConstant",
        specularexponent: "specularExponent",
        speed: "speed",
        spreadmethod: "spreadMethod",
        startoffset: "startOffset",
        stddeviation: "stdDeviation",
        stemh: "stemh",
        stemv: "stemv",
        stitchtiles: "stitchTiles",
        stopcolor: "stopColor",
        "stop-color": "stopColor",
        stopopacity: "stopOpacity",
        "stop-opacity": "stopOpacity",
        strikethroughposition: "strikethroughPosition",
        "strikethrough-position": "strikethroughPosition",
        strikethroughthickness: "strikethroughThickness",
        "strikethrough-thickness": "strikethroughThickness",
        string: "string",
        stroke: "stroke",
        strokedasharray: "strokeDasharray",
        "stroke-dasharray": "strokeDasharray",
        strokedashoffset: "strokeDashoffset",
        "stroke-dashoffset": "strokeDashoffset",
        strokelinecap: "strokeLinecap",
        "stroke-linecap": "strokeLinecap",
        strokelinejoin: "strokeLinejoin",
        "stroke-linejoin": "strokeLinejoin",
        strokemiterlimit: "strokeMiterlimit",
        "stroke-miterlimit": "strokeMiterlimit",
        strokewidth: "strokeWidth",
        "stroke-width": "strokeWidth",
        strokeopacity: "strokeOpacity",
        "stroke-opacity": "strokeOpacity",
        suppresscontenteditablewarning: "suppressContentEditableWarning",
        suppresshydrationwarning: "suppressHydrationWarning",
        surfacescale: "surfaceScale",
        systemlanguage: "systemLanguage",
        tablevalues: "tableValues",
        targetx: "targetX",
        targety: "targetY",
        textanchor: "textAnchor",
        "text-anchor": "textAnchor",
        textdecoration: "textDecoration",
        "text-decoration": "textDecoration",
        textlength: "textLength",
        textrendering: "textRendering",
        "text-rendering": "textRendering",
        to: "to",
        transform: "transform",
        typeof: "typeof",
        u1: "u1",
        u2: "u2",
        underlineposition: "underlinePosition",
        "underline-position": "underlinePosition",
        underlinethickness: "underlineThickness",
        "underline-thickness": "underlineThickness",
        unicode: "unicode",
        unicodebidi: "unicodeBidi",
        "unicode-bidi": "unicodeBidi",
        unicoderange: "unicodeRange",
        "unicode-range": "unicodeRange",
        unitsperem: "unitsPerEm",
        "units-per-em": "unitsPerEm",
        unselectable: "unselectable",
        valphabetic: "vAlphabetic",
        "v-alphabetic": "vAlphabetic",
        values: "values",
        vectoreffect: "vectorEffect",
        "vector-effect": "vectorEffect",
        version: "version",
        vertadvy: "vertAdvY",
        "vert-adv-y": "vertAdvY",
        vertoriginx: "vertOriginX",
        "vert-origin-x": "vertOriginX",
        vertoriginy: "vertOriginY",
        "vert-origin-y": "vertOriginY",
        vhanging: "vHanging",
        "v-hanging": "vHanging",
        videographic: "vIdeographic",
        "v-ideographic": "vIdeographic",
        viewbox: "viewBox",
        viewtarget: "viewTarget",
        visibility: "visibility",
        vmathematical: "vMathematical",
        "v-mathematical": "vMathematical",
        vocab: "vocab",
        widths: "widths",
        wordspacing: "wordSpacing",
        "word-spacing": "wordSpacing",
        writingmode: "writingMode",
        "writing-mode": "writingMode",
        x1: "x1",
        x2: "x2",
        x: "x",
        xchannelselector: "xChannelSelector",
        xheight: "xHeight",
        "x-height": "xHeight",
        xlinkactuate: "xlinkActuate",
        "xlink:actuate": "xlinkActuate",
        xlinkarcrole: "xlinkArcrole",
        "xlink:arcrole": "xlinkArcrole",
        xlinkhref: "xlinkHref",
        "xlink:href": "xlinkHref",
        xlinkrole: "xlinkRole",
        "xlink:role": "xlinkRole",
        xlinkshow: "xlinkShow",
        "xlink:show": "xlinkShow",
        xlinktitle: "xlinkTitle",
        "xlink:title": "xlinkTitle",
        xlinktype: "xlinkType",
        "xlink:type": "xlinkType",
        xmlbase: "xmlBase",
        "xml:base": "xmlBase",
        xmllang: "xmlLang",
        "xml:lang": "xmlLang",
        xmlns: "xmlns",
        "xml:space": "xmlSpace",
        xmlnsxlink: "xmlnsXlink",
        "xmlns:xlink": "xmlnsXlink",
        xmlspace: "xmlSpace",
        y1: "y1",
        y2: "y2",
        y: "y",
        ychannelselector: "yChannelSelector",
        z: "z",
        zoomandpan: "zoomAndPan"
      };
      var validateProperty$1 = function() {
      };
      {
        var warnedProperties$1 = {};
        var EVENT_NAME_REGEX = /^on./;
        var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
        var rARIA$1 = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$");
        var rARIACamel$1 = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
        validateProperty$1 = function(tagName, name, value, eventRegistry) {
          if (hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
            return true;
          }
          var lowerCasedName = name.toLowerCase();
          if (lowerCasedName === "onfocusin" || lowerCasedName === "onfocusout") {
            error2("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.");
            warnedProperties$1[name] = true;
            return true;
          }
          if (eventRegistry != null) {
            var registrationNameDependencies = eventRegistry.registrationNameDependencies, possibleRegistrationNames = eventRegistry.possibleRegistrationNames;
            if (registrationNameDependencies.hasOwnProperty(name)) {
              return true;
            }
            var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;
            if (registrationName != null) {
              error2("Invalid event handler property `%s`. Did you mean `%s`?", name, registrationName);
              warnedProperties$1[name] = true;
              return true;
            }
            if (EVENT_NAME_REGEX.test(name)) {
              error2("Unknown event handler property `%s`. It will be ignored.", name);
              warnedProperties$1[name] = true;
              return true;
            }
          } else if (EVENT_NAME_REGEX.test(name)) {
            if (INVALID_EVENT_NAME_REGEX.test(name)) {
              error2("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", name);
            }
            warnedProperties$1[name] = true;
            return true;
          }
          if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
            return true;
          }
          if (lowerCasedName === "innerhtml") {
            error2("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`.");
            warnedProperties$1[name] = true;
            return true;
          }
          if (lowerCasedName === "aria") {
            error2("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead.");
            warnedProperties$1[name] = true;
            return true;
          }
          if (lowerCasedName === "is" && value !== null && value !== void 0 && typeof value !== "string") {
            error2("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof value);
            warnedProperties$1[name] = true;
            return true;
          }
          if (typeof value === "number" && isNaN(value)) {
            error2("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", name);
            warnedProperties$1[name] = true;
            return true;
          }
          var propertyInfo = getPropertyInfo(name);
          var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;
          if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
            var standardName = possibleStandardNames[lowerCasedName];
            if (standardName !== name) {
              error2("Invalid DOM property `%s`. Did you mean `%s`?", name, standardName);
              warnedProperties$1[name] = true;
              return true;
            }
          } else if (!isReserved && name !== lowerCasedName) {
            error2("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", name, lowerCasedName);
            warnedProperties$1[name] = true;
            return true;
          }
          if (typeof value === "boolean" && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
            if (value) {
              error2('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', value, name, name, value, name);
            } else {
              error2('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
            }
            warnedProperties$1[name] = true;
            return true;
          }
          if (isReserved) {
            return true;
          }
          if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
            warnedProperties$1[name] = true;
            return false;
          }
          if ((value === "false" || value === "true") && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
            error2("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", value, name, value === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', name, value);
            warnedProperties$1[name] = true;
            return true;
          }
          return true;
        };
      }
      var warnUnknownProperties = function(type, props, eventRegistry) {
        {
          var unknownProps = [];
          for (var key in props) {
            var isValid = validateProperty$1(type, key, props[key], eventRegistry);
            if (!isValid) {
              unknownProps.push(key);
            }
          }
          var unknownPropString = unknownProps.map(function(prop) {
            return "`" + prop + "`";
          }).join(", ");
          if (unknownProps.length === 1) {
            error2("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
          } else if (unknownProps.length > 1) {
            error2("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
          }
        }
      };
      function validateProperties$2(type, props, eventRegistry) {
        if (isCustomComponent(type, props)) {
          return;
        }
        warnUnknownProperties(type, props, eventRegistry);
      }
      var warnValidStyle = function() {
      };
      {
        var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
        var msPattern = /^-ms-/;
        var hyphenPattern = /-(.)/g;
        var badStyleValueWithSemicolonPattern = /;\s*$/;
        var warnedStyleNames = {};
        var warnedStyleValues = {};
        var warnedForNaNValue = false;
        var warnedForInfinityValue = false;
        var camelize = function(string) {
          return string.replace(hyphenPattern, function(_, character) {
            return character.toUpperCase();
          });
        };
        var warnHyphenatedStyleName = function(name) {
          if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
            return;
          }
          warnedStyleNames[name] = true;
          error2(
            "Unsupported style property %s. Did you mean %s?",
            name,
            camelize(name.replace(msPattern, "ms-"))
          );
        };
        var warnBadVendoredStyleName = function(name) {
          if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
            return;
          }
          warnedStyleNames[name] = true;
          error2("Unsupported vendor-prefixed style property %s. Did you mean %s?", name, name.charAt(0).toUpperCase() + name.slice(1));
        };
        var warnStyleValueWithSemicolon = function(name, value) {
          if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
            return;
          }
          warnedStyleValues[value] = true;
          error2(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, name, value.replace(badStyleValueWithSemicolonPattern, ""));
        };
        var warnStyleValueIsNaN = function(name, value) {
          if (warnedForNaNValue) {
            return;
          }
          warnedForNaNValue = true;
          error2("`NaN` is an invalid value for the `%s` css style property.", name);
        };
        var warnStyleValueIsInfinity = function(name, value) {
          if (warnedForInfinityValue) {
            return;
          }
          warnedForInfinityValue = true;
          error2("`Infinity` is an invalid value for the `%s` css style property.", name);
        };
        warnValidStyle = function(name, value) {
          if (name.indexOf("-") > -1) {
            warnHyphenatedStyleName(name);
          } else if (badVendoredStyleNamePattern.test(name)) {
            warnBadVendoredStyleName(name);
          } else if (badStyleValueWithSemicolonPattern.test(value)) {
            warnStyleValueWithSemicolon(name, value);
          }
          if (typeof value === "number") {
            if (isNaN(value)) {
              warnStyleValueIsNaN(name, value);
            } else if (!isFinite(value)) {
              warnStyleValueIsInfinity(name, value);
            }
          }
        };
      }
      var warnValidStyle$1 = warnValidStyle;
      var matchHtmlRegExp = /["'&<>]/;
      function escapeHtml(string) {
        {
          checkHtmlStringCoercion(string);
        }
        var str = "" + string;
        var match = matchHtmlRegExp.exec(str);
        if (!match) {
          return str;
        }
        var escape2;
        var html2 = "";
        var index;
        var lastIndex = 0;
        for (index = match.index; index < str.length; index++) {
          switch (str.charCodeAt(index)) {
            case 34:
              escape2 = "&quot;";
              break;
            case 38:
              escape2 = "&amp;";
              break;
            case 39:
              escape2 = "&#x27;";
              break;
            case 60:
              escape2 = "&lt;";
              break;
            case 62:
              escape2 = "&gt;";
              break;
            default:
              continue;
          }
          if (lastIndex !== index) {
            html2 += str.substring(lastIndex, index);
          }
          lastIndex = index + 1;
          html2 += escape2;
        }
        return lastIndex !== index ? html2 + str.substring(lastIndex, index) : html2;
      }
      function escapeTextForBrowser(text) {
        if (typeof text === "boolean" || typeof text === "number") {
          return "" + text;
        }
        return escapeHtml(text);
      }
      var uppercasePattern = /([A-Z])/g;
      var msPattern$1 = /^ms-/;
      function hyphenateStyleName(name) {
        return name.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern$1, "-ms-");
      }
      var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
      var didWarn = false;
      function sanitizeURL(url2) {
        {
          if (!didWarn && isJavaScriptProtocol.test(url2)) {
            didWarn = true;
            error2("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(url2));
          }
        }
      }
      var isArrayImpl = Array.isArray;
      function isArray(a) {
        return isArrayImpl(a);
      }
      var startInlineScript = stringToPrecomputedChunk("<script>");
      var endInlineScript = stringToPrecomputedChunk("<\/script>");
      var startScriptSrc = stringToPrecomputedChunk('<script src="');
      var startModuleSrc = stringToPrecomputedChunk('<script type="module" src="');
      var endAsyncScript = stringToPrecomputedChunk('" async=""><\/script>');
      function escapeBootstrapScriptContent(scriptText) {
        {
          checkHtmlStringCoercion(scriptText);
        }
        return ("" + scriptText).replace(scriptRegex, scriptReplacer);
      }
      var scriptRegex = /(<\/|<)(s)(cript)/gi;
      var scriptReplacer = function(match, prefix2, s2, suffix) {
        return "" + prefix2 + (s2 === "s" ? "\\u0073" : "\\u0053") + suffix;
      };
      function createResponseState(identifierPrefix, nonce, bootstrapScriptContent, bootstrapScripts, bootstrapModules) {
        var idPrefix = identifierPrefix === void 0 ? "" : identifierPrefix;
        var inlineScriptWithNonce = nonce === void 0 ? startInlineScript : stringToPrecomputedChunk('<script nonce="' + escapeTextForBrowser(nonce) + '">');
        var bootstrapChunks = [];
        if (bootstrapScriptContent !== void 0) {
          bootstrapChunks.push(inlineScriptWithNonce, stringToChunk(escapeBootstrapScriptContent(bootstrapScriptContent)), endInlineScript);
        }
        if (bootstrapScripts !== void 0) {
          for (var i = 0; i < bootstrapScripts.length; i++) {
            bootstrapChunks.push(startScriptSrc, stringToChunk(escapeTextForBrowser(bootstrapScripts[i])), endAsyncScript);
          }
        }
        if (bootstrapModules !== void 0) {
          for (var _i = 0; _i < bootstrapModules.length; _i++) {
            bootstrapChunks.push(startModuleSrc, stringToChunk(escapeTextForBrowser(bootstrapModules[_i])), endAsyncScript);
          }
        }
        return {
          bootstrapChunks,
          startInlineScript: inlineScriptWithNonce,
          placeholderPrefix: stringToPrecomputedChunk(idPrefix + "P:"),
          segmentPrefix: stringToPrecomputedChunk(idPrefix + "S:"),
          boundaryPrefix: idPrefix + "B:",
          idPrefix,
          nextSuspenseID: 0,
          sentCompleteSegmentFunction: false,
          sentCompleteBoundaryFunction: false,
          sentClientRenderFunction: false
        };
      }
      var ROOT_HTML_MODE = 0;
      var HTML_MODE = 1;
      var SVG_MODE = 2;
      var MATHML_MODE = 3;
      var HTML_TABLE_MODE = 4;
      var HTML_TABLE_BODY_MODE = 5;
      var HTML_TABLE_ROW_MODE = 6;
      var HTML_COLGROUP_MODE = 7;
      function createFormatContext(insertionMode, selectedValue) {
        return {
          insertionMode,
          selectedValue
        };
      }
      function createRootFormatContext(namespaceURI) {
        var insertionMode = namespaceURI === "http://www.w3.org/2000/svg" ? SVG_MODE : namespaceURI === "http://www.w3.org/1998/Math/MathML" ? MATHML_MODE : ROOT_HTML_MODE;
        return createFormatContext(insertionMode, null);
      }
      function getChildFormatContext(parentContext, type, props) {
        switch (type) {
          case "select":
            return createFormatContext(HTML_MODE, props.value != null ? props.value : props.defaultValue);
          case "svg":
            return createFormatContext(SVG_MODE, null);
          case "math":
            return createFormatContext(MATHML_MODE, null);
          case "foreignObject":
            return createFormatContext(HTML_MODE, null);
          case "table":
            return createFormatContext(HTML_TABLE_MODE, null);
          case "thead":
          case "tbody":
          case "tfoot":
            return createFormatContext(HTML_TABLE_BODY_MODE, null);
          case "colgroup":
            return createFormatContext(HTML_COLGROUP_MODE, null);
          case "tr":
            return createFormatContext(HTML_TABLE_ROW_MODE, null);
        }
        if (parentContext.insertionMode >= HTML_TABLE_MODE) {
          return createFormatContext(HTML_MODE, null);
        }
        if (parentContext.insertionMode === ROOT_HTML_MODE) {
          return createFormatContext(HTML_MODE, null);
        }
        return parentContext;
      }
      var UNINITIALIZED_SUSPENSE_BOUNDARY_ID = null;
      function assignSuspenseBoundaryID(responseState) {
        var generatedID = responseState.nextSuspenseID++;
        return stringToPrecomputedChunk(responseState.boundaryPrefix + generatedID.toString(16));
      }
      function makeId(responseState, treeId, localId) {
        var idPrefix = responseState.idPrefix;
        var id = ":" + idPrefix + "R" + treeId;
        if (localId > 0) {
          id += "H" + localId.toString(32);
        }
        return id + ":";
      }
      function encodeHTMLTextNode(text) {
        return escapeTextForBrowser(text);
      }
      var textSeparator = stringToPrecomputedChunk("<!-- -->");
      function pushTextInstance(target, text, responseState, textEmbedded) {
        if (text === "") {
          return textEmbedded;
        }
        if (textEmbedded) {
          target.push(textSeparator);
        }
        target.push(stringToChunk(encodeHTMLTextNode(text)));
        return true;
      }
      function pushSegmentFinale(target, responseState, lastPushedText, textEmbedded) {
        if (lastPushedText && textEmbedded) {
          target.push(textSeparator);
        }
      }
      var styleNameCache = /* @__PURE__ */ new Map();
      function processStyleName(styleName) {
        var chunk = styleNameCache.get(styleName);
        if (chunk !== void 0) {
          return chunk;
        }
        var result = stringToPrecomputedChunk(escapeTextForBrowser(hyphenateStyleName(styleName)));
        styleNameCache.set(styleName, result);
        return result;
      }
      var styleAttributeStart = stringToPrecomputedChunk(' style="');
      var styleAssign = stringToPrecomputedChunk(":");
      var styleSeparator = stringToPrecomputedChunk(";");
      function pushStyle(target, responseState, style) {
        if (typeof style !== "object") {
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
        }
        var isFirst = true;
        for (var styleName in style) {
          if (!hasOwnProperty.call(style, styleName)) {
            continue;
          }
          var styleValue = style[styleName];
          if (styleValue == null || typeof styleValue === "boolean" || styleValue === "") {
            continue;
          }
          var nameChunk = void 0;
          var valueChunk = void 0;
          var isCustomProperty = styleName.indexOf("--") === 0;
          if (isCustomProperty) {
            nameChunk = stringToChunk(escapeTextForBrowser(styleName));
            {
              checkCSSPropertyStringCoercion(styleValue, styleName);
            }
            valueChunk = stringToChunk(escapeTextForBrowser(("" + styleValue).trim()));
          } else {
            {
              warnValidStyle$1(styleName, styleValue);
            }
            nameChunk = processStyleName(styleName);
            if (typeof styleValue === "number") {
              if (styleValue !== 0 && !hasOwnProperty.call(isUnitlessNumber, styleName)) {
                valueChunk = stringToChunk(styleValue + "px");
              } else {
                valueChunk = stringToChunk("" + styleValue);
              }
            } else {
              {
                checkCSSPropertyStringCoercion(styleValue, styleName);
              }
              valueChunk = stringToChunk(escapeTextForBrowser(("" + styleValue).trim()));
            }
          }
          if (isFirst) {
            isFirst = false;
            target.push(styleAttributeStart, nameChunk, styleAssign, valueChunk);
          } else {
            target.push(styleSeparator, nameChunk, styleAssign, valueChunk);
          }
        }
        if (!isFirst) {
          target.push(attributeEnd);
        }
      }
      var attributeSeparator = stringToPrecomputedChunk(" ");
      var attributeAssign = stringToPrecomputedChunk('="');
      var attributeEnd = stringToPrecomputedChunk('"');
      var attributeEmptyString = stringToPrecomputedChunk('=""');
      function pushAttribute(target, responseState, name, value) {
        switch (name) {
          case "style": {
            pushStyle(target, responseState, value);
            return;
          }
          case "defaultValue":
          case "defaultChecked":
          case "innerHTML":
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            return;
        }
        if (name.length > 2 && (name[0] === "o" || name[0] === "O") && (name[1] === "n" || name[1] === "N")) {
          return;
        }
        var propertyInfo = getPropertyInfo(name);
        if (propertyInfo !== null) {
          switch (typeof value) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              if (!propertyInfo.acceptsBooleans) {
                return;
              }
            }
          }
          var attributeName = propertyInfo.attributeName;
          var attributeNameChunk = stringToChunk(attributeName);
          switch (propertyInfo.type) {
            case BOOLEAN:
              if (value) {
                target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
              }
              return;
            case OVERLOADED_BOOLEAN:
              if (value === true) {
                target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
              } else if (value === false)
                ;
              else {
                target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
              }
              return;
            case NUMERIC:
              if (!isNaN(value)) {
                target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
              }
              break;
            case POSITIVE_NUMERIC:
              if (!isNaN(value) && value >= 1) {
                target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
              }
              break;
            default:
              if (propertyInfo.sanitizeURL) {
                {
                  checkAttributeStringCoercion(value, attributeName);
                }
                value = "" + value;
                sanitizeURL(value);
              }
              target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
          }
        } else if (isAttributeNameSafe(name)) {
          switch (typeof value) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var prefix2 = name.toLowerCase().slice(0, 5);
              if (prefix2 !== "data-" && prefix2 !== "aria-") {
                return;
              }
            }
          }
          target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
        }
      }
      var endOfStartTag = stringToPrecomputedChunk(">");
      var endOfStartTagSelfClosing = stringToPrecomputedChunk("/>");
      function pushInnerHTML(target, innerHTML, children) {
        if (innerHTML != null) {
          if (children != null) {
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          }
          if (typeof innerHTML !== "object" || !("__html" in innerHTML)) {
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
          }
          var html2 = innerHTML.__html;
          if (html2 !== null && html2 !== void 0) {
            {
              checkHtmlStringCoercion(html2);
            }
            target.push(stringToChunk("" + html2));
          }
        }
      }
      var didWarnDefaultInputValue = false;
      var didWarnDefaultChecked = false;
      var didWarnDefaultSelectValue = false;
      var didWarnDefaultTextareaValue = false;
      var didWarnInvalidOptionChildren = false;
      var didWarnInvalidOptionInnerHTML = false;
      var didWarnSelectedSetOnOption = false;
      function checkSelectProp(props, propName2) {
        {
          var value = props[propName2];
          if (value != null) {
            var array = isArray(value);
            if (props.multiple && !array) {
              error2("The `%s` prop supplied to <select> must be an array if `multiple` is true.", propName2);
            } else if (!props.multiple && array) {
              error2("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", propName2);
            }
          }
        }
      }
      function pushStartSelect(target, props, responseState) {
        {
          checkControlledValueProps("select", props);
          checkSelectProp(props, "value");
          checkSelectProp(props, "defaultValue");
          if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultSelectValue) {
            error2("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components");
            didWarnDefaultSelectValue = true;
          }
        }
        target.push(startChunkForTag("select"));
        var children = null;
        var innerHTML = null;
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        target.push(endOfStartTag);
        pushInnerHTML(target, innerHTML, children);
        return children;
      }
      function flattenOptionChildren(children) {
        var content = "";
        React2.Children.forEach(children, function(child) {
          if (child == null) {
            return;
          }
          content += child;
          {
            if (!didWarnInvalidOptionChildren && typeof child !== "string" && typeof child !== "number") {
              didWarnInvalidOptionChildren = true;
              error2("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.");
            }
          }
        });
        return content;
      }
      var selectedMarkerAttribute = stringToPrecomputedChunk(' selected=""');
      function pushStartOption(target, props, responseState, formatContext) {
        var selectedValue = formatContext.selectedValue;
        target.push(startChunkForTag("option"));
        var children = null;
        var value = null;
        var selected = null;
        var innerHTML = null;
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "selected":
                selected = propValue;
                {
                  if (!didWarnSelectedSetOnOption) {
                    error2("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.");
                    didWarnSelectedSetOnOption = true;
                  }
                }
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              case "value":
                value = propValue;
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        if (selectedValue != null) {
          var stringValue;
          if (value !== null) {
            {
              checkAttributeStringCoercion(value, "value");
            }
            stringValue = "" + value;
          } else {
            {
              if (innerHTML !== null) {
                if (!didWarnInvalidOptionInnerHTML) {
                  didWarnInvalidOptionInnerHTML = true;
                  error2("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.");
                }
              }
            }
            stringValue = flattenOptionChildren(children);
          }
          if (isArray(selectedValue)) {
            for (var i = 0; i < selectedValue.length; i++) {
              {
                checkAttributeStringCoercion(selectedValue[i], "value");
              }
              var v = "" + selectedValue[i];
              if (v === stringValue) {
                target.push(selectedMarkerAttribute);
                break;
              }
            }
          } else {
            {
              checkAttributeStringCoercion(selectedValue, "select.value");
            }
            if ("" + selectedValue === stringValue) {
              target.push(selectedMarkerAttribute);
            }
          }
        } else if (selected) {
          target.push(selectedMarkerAttribute);
        }
        target.push(endOfStartTag);
        pushInnerHTML(target, innerHTML, children);
        return children;
      }
      function pushInput(target, props, responseState) {
        {
          checkControlledValueProps("input", props);
          if (props.checked !== void 0 && props.defaultChecked !== void 0 && !didWarnDefaultChecked) {
            error2("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", props.type);
            didWarnDefaultChecked = true;
          }
          if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultInputValue) {
            error2("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", props.type);
            didWarnDefaultInputValue = true;
          }
        }
        target.push(startChunkForTag("input"));
        var value = null;
        var defaultValue = null;
        var checked = null;
        var defaultChecked = null;
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
              case "defaultChecked":
                defaultChecked = propValue;
                break;
              case "defaultValue":
                defaultValue = propValue;
                break;
              case "checked":
                checked = propValue;
                break;
              case "value":
                value = propValue;
                break;
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        if (checked !== null) {
          pushAttribute(target, responseState, "checked", checked);
        } else if (defaultChecked !== null) {
          pushAttribute(target, responseState, "checked", defaultChecked);
        }
        if (value !== null) {
          pushAttribute(target, responseState, "value", value);
        } else if (defaultValue !== null) {
          pushAttribute(target, responseState, "value", defaultValue);
        }
        target.push(endOfStartTagSelfClosing);
        return null;
      }
      function pushStartTextArea(target, props, responseState) {
        {
          checkControlledValueProps("textarea", props);
          if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultTextareaValue) {
            error2("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components");
            didWarnDefaultTextareaValue = true;
          }
        }
        target.push(startChunkForTag("textarea"));
        var value = null;
        var defaultValue = null;
        var children = null;
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "value":
                value = propValue;
                break;
              case "defaultValue":
                defaultValue = propValue;
                break;
              case "dangerouslySetInnerHTML":
                throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        if (value === null && defaultValue !== null) {
          value = defaultValue;
        }
        target.push(endOfStartTag);
        if (children != null) {
          {
            error2("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          }
          if (value != null) {
            throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
          }
          if (isArray(children)) {
            if (children.length > 1) {
              throw new Error("<textarea> can only have at most one child.");
            }
            {
              checkHtmlStringCoercion(children[0]);
            }
            value = "" + children[0];
          }
          {
            checkHtmlStringCoercion(children);
          }
          value = "" + children;
        }
        if (typeof value === "string" && value[0] === "\n") {
          target.push(leadingNewline);
        }
        if (value !== null) {
          {
            checkAttributeStringCoercion(value, "value");
          }
          target.push(stringToChunk(encodeHTMLTextNode("" + value)));
        }
        return null;
      }
      function pushSelfClosing(target, props, tag, responseState) {
        target.push(startChunkForTag(tag));
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw new Error(tag + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        target.push(endOfStartTagSelfClosing);
        return null;
      }
      function pushStartMenuItem(target, props, responseState) {
        target.push(startChunkForTag("menuitem"));
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        target.push(endOfStartTag);
        return null;
      }
      function pushStartTitle(target, props, responseState) {
        target.push(startChunkForTag("title"));
        var children = null;
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        target.push(endOfStartTag);
        {
          var child = Array.isArray(children) && children.length < 2 ? children[0] || null : children;
          if (Array.isArray(children) && children.length > 1) {
            error2("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
          } else if (child != null && child.$$typeof != null) {
            error2("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
          } else if (child != null && typeof child !== "string" && typeof child !== "number") {
            error2("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
          }
        }
        return children;
      }
      function pushStartGenericElement(target, props, tag, responseState) {
        target.push(startChunkForTag(tag));
        var children = null;
        var innerHTML = null;
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        target.push(endOfStartTag);
        pushInnerHTML(target, innerHTML, children);
        if (typeof children === "string") {
          target.push(stringToChunk(encodeHTMLTextNode(children)));
          return null;
        }
        return children;
      }
      function pushStartCustomElement(target, props, tag, responseState) {
        target.push(startChunkForTag(tag));
        var children = null;
        var innerHTML = null;
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              case "style":
                pushStyle(target, responseState, propValue);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                if (isAttributeNameSafe(propKey) && typeof propValue !== "function" && typeof propValue !== "symbol") {
                  target.push(attributeSeparator, stringToChunk(propKey), attributeAssign, stringToChunk(escapeTextForBrowser(propValue)), attributeEnd);
                }
                break;
            }
          }
        }
        target.push(endOfStartTag);
        pushInnerHTML(target, innerHTML, children);
        return children;
      }
      var leadingNewline = stringToPrecomputedChunk("\n");
      function pushStartPreformattedElement(target, props, tag, responseState) {
        target.push(startChunkForTag(tag));
        var children = null;
        var innerHTML = null;
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        target.push(endOfStartTag);
        if (innerHTML != null) {
          if (children != null) {
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          }
          if (typeof innerHTML !== "object" || !("__html" in innerHTML)) {
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
          }
          var html2 = innerHTML.__html;
          if (html2 !== null && html2 !== void 0) {
            if (typeof html2 === "string" && html2.length > 0 && html2[0] === "\n") {
              target.push(leadingNewline, stringToChunk(html2));
            } else {
              {
                checkHtmlStringCoercion(html2);
              }
              target.push(stringToChunk("" + html2));
            }
          }
        }
        if (typeof children === "string" && children[0] === "\n") {
          target.push(leadingNewline);
        }
        return children;
      }
      var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
      var validatedTagCache = /* @__PURE__ */ new Map();
      function startChunkForTag(tag) {
        var tagStartChunk = validatedTagCache.get(tag);
        if (tagStartChunk === void 0) {
          if (!VALID_TAG_REGEX.test(tag)) {
            throw new Error("Invalid tag: " + tag);
          }
          tagStartChunk = stringToPrecomputedChunk("<" + tag);
          validatedTagCache.set(tag, tagStartChunk);
        }
        return tagStartChunk;
      }
      var DOCTYPE = stringToPrecomputedChunk("<!DOCTYPE html>");
      function pushStartInstance(target, type, props, responseState, formatContext) {
        {
          validateProperties(type, props);
          validateProperties$1(type, props);
          validateProperties$2(type, props, null);
          if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) {
            error2("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.");
          }
          if (formatContext.insertionMode !== SVG_MODE && formatContext.insertionMode !== MATHML_MODE) {
            if (type.indexOf("-") === -1 && typeof props.is !== "string" && type.toLowerCase() !== type) {
              error2("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", type);
            }
          }
        }
        switch (type) {
          case "select":
            return pushStartSelect(target, props, responseState);
          case "option":
            return pushStartOption(target, props, responseState, formatContext);
          case "textarea":
            return pushStartTextArea(target, props, responseState);
          case "input":
            return pushInput(target, props, responseState);
          case "menuitem":
            return pushStartMenuItem(target, props, responseState);
          case "title":
            return pushStartTitle(target, props, responseState);
          case "listing":
          case "pre": {
            return pushStartPreformattedElement(target, props, type, responseState);
          }
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr": {
            return pushSelfClosing(target, props, type, responseState);
          }
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph": {
            return pushStartGenericElement(target, props, type, responseState);
          }
          case "html": {
            if (formatContext.insertionMode === ROOT_HTML_MODE) {
              target.push(DOCTYPE);
            }
            return pushStartGenericElement(target, props, type, responseState);
          }
          default: {
            if (type.indexOf("-") === -1 && typeof props.is !== "string") {
              return pushStartGenericElement(target, props, type, responseState);
            } else {
              return pushStartCustomElement(target, props, type, responseState);
            }
          }
        }
      }
      var endTag1 = stringToPrecomputedChunk("</");
      var endTag2 = stringToPrecomputedChunk(">");
      function pushEndInstance(target, type, props) {
        switch (type) {
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr": {
            break;
          }
          default: {
            target.push(endTag1, stringToChunk(type), endTag2);
          }
        }
      }
      function writeCompletedRoot(destination, responseState) {
        var bootstrapChunks = responseState.bootstrapChunks;
        var i = 0;
        for (; i < bootstrapChunks.length - 1; i++) {
          writeChunk(destination, bootstrapChunks[i]);
        }
        if (i < bootstrapChunks.length) {
          return writeChunkAndReturn(destination, bootstrapChunks[i]);
        }
        return true;
      }
      var placeholder1 = stringToPrecomputedChunk('<template id="');
      var placeholder2 = stringToPrecomputedChunk('"></template>');
      function writePlaceholder(destination, responseState, id) {
        writeChunk(destination, placeholder1);
        writeChunk(destination, responseState.placeholderPrefix);
        var formattedID = stringToChunk(id.toString(16));
        writeChunk(destination, formattedID);
        return writeChunkAndReturn(destination, placeholder2);
      }
      var startCompletedSuspenseBoundary = stringToPrecomputedChunk("<!--$-->");
      var startPendingSuspenseBoundary1 = stringToPrecomputedChunk('<!--$?--><template id="');
      var startPendingSuspenseBoundary2 = stringToPrecomputedChunk('"></template>');
      var startClientRenderedSuspenseBoundary = stringToPrecomputedChunk("<!--$!-->");
      var endSuspenseBoundary = stringToPrecomputedChunk("<!--/$-->");
      var clientRenderedSuspenseBoundaryError1 = stringToPrecomputedChunk("<template");
      var clientRenderedSuspenseBoundaryErrorAttrInterstitial = stringToPrecomputedChunk('"');
      var clientRenderedSuspenseBoundaryError1A = stringToPrecomputedChunk(' data-dgst="');
      var clientRenderedSuspenseBoundaryError1B = stringToPrecomputedChunk(' data-msg="');
      var clientRenderedSuspenseBoundaryError1C = stringToPrecomputedChunk(' data-stck="');
      var clientRenderedSuspenseBoundaryError2 = stringToPrecomputedChunk("></template>");
      function writeStartCompletedSuspenseBoundary(destination, responseState) {
        return writeChunkAndReturn(destination, startCompletedSuspenseBoundary);
      }
      function writeStartPendingSuspenseBoundary(destination, responseState, id) {
        writeChunk(destination, startPendingSuspenseBoundary1);
        if (id === null) {
          throw new Error("An ID must have been assigned before we can complete the boundary.");
        }
        writeChunk(destination, id);
        return writeChunkAndReturn(destination, startPendingSuspenseBoundary2);
      }
      function writeStartClientRenderedSuspenseBoundary(destination, responseState, errorDigest, errorMesssage, errorComponentStack) {
        var result;
        result = writeChunkAndReturn(destination, startClientRenderedSuspenseBoundary);
        writeChunk(destination, clientRenderedSuspenseBoundaryError1);
        if (errorDigest) {
          writeChunk(destination, clientRenderedSuspenseBoundaryError1A);
          writeChunk(destination, stringToChunk(escapeTextForBrowser(errorDigest)));
          writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
        }
        {
          if (errorMesssage) {
            writeChunk(destination, clientRenderedSuspenseBoundaryError1B);
            writeChunk(destination, stringToChunk(escapeTextForBrowser(errorMesssage)));
            writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
          }
          if (errorComponentStack) {
            writeChunk(destination, clientRenderedSuspenseBoundaryError1C);
            writeChunk(destination, stringToChunk(escapeTextForBrowser(errorComponentStack)));
            writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
          }
        }
        result = writeChunkAndReturn(destination, clientRenderedSuspenseBoundaryError2);
        return result;
      }
      function writeEndCompletedSuspenseBoundary(destination, responseState) {
        return writeChunkAndReturn(destination, endSuspenseBoundary);
      }
      function writeEndPendingSuspenseBoundary(destination, responseState) {
        return writeChunkAndReturn(destination, endSuspenseBoundary);
      }
      function writeEndClientRenderedSuspenseBoundary(destination, responseState) {
        return writeChunkAndReturn(destination, endSuspenseBoundary);
      }
      var startSegmentHTML = stringToPrecomputedChunk('<div hidden id="');
      var startSegmentHTML2 = stringToPrecomputedChunk('">');
      var endSegmentHTML = stringToPrecomputedChunk("</div>");
      var startSegmentSVG = stringToPrecomputedChunk('<svg aria-hidden="true" style="display:none" id="');
      var startSegmentSVG2 = stringToPrecomputedChunk('">');
      var endSegmentSVG = stringToPrecomputedChunk("</svg>");
      var startSegmentMathML = stringToPrecomputedChunk('<math aria-hidden="true" style="display:none" id="');
      var startSegmentMathML2 = stringToPrecomputedChunk('">');
      var endSegmentMathML = stringToPrecomputedChunk("</math>");
      var startSegmentTable = stringToPrecomputedChunk('<table hidden id="');
      var startSegmentTable2 = stringToPrecomputedChunk('">');
      var endSegmentTable = stringToPrecomputedChunk("</table>");
      var startSegmentTableBody = stringToPrecomputedChunk('<table hidden><tbody id="');
      var startSegmentTableBody2 = stringToPrecomputedChunk('">');
      var endSegmentTableBody = stringToPrecomputedChunk("</tbody></table>");
      var startSegmentTableRow = stringToPrecomputedChunk('<table hidden><tr id="');
      var startSegmentTableRow2 = stringToPrecomputedChunk('">');
      var endSegmentTableRow = stringToPrecomputedChunk("</tr></table>");
      var startSegmentColGroup = stringToPrecomputedChunk('<table hidden><colgroup id="');
      var startSegmentColGroup2 = stringToPrecomputedChunk('">');
      var endSegmentColGroup = stringToPrecomputedChunk("</colgroup></table>");
      function writeStartSegment(destination, responseState, formatContext, id) {
        switch (formatContext.insertionMode) {
          case ROOT_HTML_MODE:
          case HTML_MODE: {
            writeChunk(destination, startSegmentHTML);
            writeChunk(destination, responseState.segmentPrefix);
            writeChunk(destination, stringToChunk(id.toString(16)));
            return writeChunkAndReturn(destination, startSegmentHTML2);
          }
          case SVG_MODE: {
            writeChunk(destination, startSegmentSVG);
            writeChunk(destination, responseState.segmentPrefix);
            writeChunk(destination, stringToChunk(id.toString(16)));
            return writeChunkAndReturn(destination, startSegmentSVG2);
          }
          case MATHML_MODE: {
            writeChunk(destination, startSegmentMathML);
            writeChunk(destination, responseState.segmentPrefix);
            writeChunk(destination, stringToChunk(id.toString(16)));
            return writeChunkAndReturn(destination, startSegmentMathML2);
          }
          case HTML_TABLE_MODE: {
            writeChunk(destination, startSegmentTable);
            writeChunk(destination, responseState.segmentPrefix);
            writeChunk(destination, stringToChunk(id.toString(16)));
            return writeChunkAndReturn(destination, startSegmentTable2);
          }
          case HTML_TABLE_BODY_MODE: {
            writeChunk(destination, startSegmentTableBody);
            writeChunk(destination, responseState.segmentPrefix);
            writeChunk(destination, stringToChunk(id.toString(16)));
            return writeChunkAndReturn(destination, startSegmentTableBody2);
          }
          case HTML_TABLE_ROW_MODE: {
            writeChunk(destination, startSegmentTableRow);
            writeChunk(destination, responseState.segmentPrefix);
            writeChunk(destination, stringToChunk(id.toString(16)));
            return writeChunkAndReturn(destination, startSegmentTableRow2);
          }
          case HTML_COLGROUP_MODE: {
            writeChunk(destination, startSegmentColGroup);
            writeChunk(destination, responseState.segmentPrefix);
            writeChunk(destination, stringToChunk(id.toString(16)));
            return writeChunkAndReturn(destination, startSegmentColGroup2);
          }
          default: {
            throw new Error("Unknown insertion mode. This is a bug in React.");
          }
        }
      }
      function writeEndSegment(destination, formatContext) {
        switch (formatContext.insertionMode) {
          case ROOT_HTML_MODE:
          case HTML_MODE: {
            return writeChunkAndReturn(destination, endSegmentHTML);
          }
          case SVG_MODE: {
            return writeChunkAndReturn(destination, endSegmentSVG);
          }
          case MATHML_MODE: {
            return writeChunkAndReturn(destination, endSegmentMathML);
          }
          case HTML_TABLE_MODE: {
            return writeChunkAndReturn(destination, endSegmentTable);
          }
          case HTML_TABLE_BODY_MODE: {
            return writeChunkAndReturn(destination, endSegmentTableBody);
          }
          case HTML_TABLE_ROW_MODE: {
            return writeChunkAndReturn(destination, endSegmentTableRow);
          }
          case HTML_COLGROUP_MODE: {
            return writeChunkAndReturn(destination, endSegmentColGroup);
          }
          default: {
            throw new Error("Unknown insertion mode. This is a bug in React.");
          }
        }
      }
      var completeSegmentFunction = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}";
      var completeBoundaryFunction = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}';
      var clientRenderFunction = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}';
      var completeSegmentScript1Full = stringToPrecomputedChunk(completeSegmentFunction + ';$RS("');
      var completeSegmentScript1Partial = stringToPrecomputedChunk('$RS("');
      var completeSegmentScript2 = stringToPrecomputedChunk('","');
      var completeSegmentScript3 = stringToPrecomputedChunk('")<\/script>');
      function writeCompletedSegmentInstruction(destination, responseState, contentSegmentID) {
        writeChunk(destination, responseState.startInlineScript);
        if (!responseState.sentCompleteSegmentFunction) {
          responseState.sentCompleteSegmentFunction = true;
          writeChunk(destination, completeSegmentScript1Full);
        } else {
          writeChunk(destination, completeSegmentScript1Partial);
        }
        writeChunk(destination, responseState.segmentPrefix);
        var formattedID = stringToChunk(contentSegmentID.toString(16));
        writeChunk(destination, formattedID);
        writeChunk(destination, completeSegmentScript2);
        writeChunk(destination, responseState.placeholderPrefix);
        writeChunk(destination, formattedID);
        return writeChunkAndReturn(destination, completeSegmentScript3);
      }
      var completeBoundaryScript1Full = stringToPrecomputedChunk(completeBoundaryFunction + ';$RC("');
      var completeBoundaryScript1Partial = stringToPrecomputedChunk('$RC("');
      var completeBoundaryScript2 = stringToPrecomputedChunk('","');
      var completeBoundaryScript3 = stringToPrecomputedChunk('")<\/script>');
      function writeCompletedBoundaryInstruction(destination, responseState, boundaryID, contentSegmentID) {
        writeChunk(destination, responseState.startInlineScript);
        if (!responseState.sentCompleteBoundaryFunction) {
          responseState.sentCompleteBoundaryFunction = true;
          writeChunk(destination, completeBoundaryScript1Full);
        } else {
          writeChunk(destination, completeBoundaryScript1Partial);
        }
        if (boundaryID === null) {
          throw new Error("An ID must have been assigned before we can complete the boundary.");
        }
        var formattedContentID = stringToChunk(contentSegmentID.toString(16));
        writeChunk(destination, boundaryID);
        writeChunk(destination, completeBoundaryScript2);
        writeChunk(destination, responseState.segmentPrefix);
        writeChunk(destination, formattedContentID);
        return writeChunkAndReturn(destination, completeBoundaryScript3);
      }
      var clientRenderScript1Full = stringToPrecomputedChunk(clientRenderFunction + ';$RX("');
      var clientRenderScript1Partial = stringToPrecomputedChunk('$RX("');
      var clientRenderScript1A = stringToPrecomputedChunk('"');
      var clientRenderScript2 = stringToPrecomputedChunk(")<\/script>");
      var clientRenderErrorScriptArgInterstitial = stringToPrecomputedChunk(",");
      function writeClientRenderBoundaryInstruction(destination, responseState, boundaryID, errorDigest, errorMessage, errorComponentStack) {
        writeChunk(destination, responseState.startInlineScript);
        if (!responseState.sentClientRenderFunction) {
          responseState.sentClientRenderFunction = true;
          writeChunk(destination, clientRenderScript1Full);
        } else {
          writeChunk(destination, clientRenderScript1Partial);
        }
        if (boundaryID === null) {
          throw new Error("An ID must have been assigned before we can complete the boundary.");
        }
        writeChunk(destination, boundaryID);
        writeChunk(destination, clientRenderScript1A);
        if (errorDigest || errorMessage || errorComponentStack) {
          writeChunk(destination, clientRenderErrorScriptArgInterstitial);
          writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorDigest || "")));
        }
        if (errorMessage || errorComponentStack) {
          writeChunk(destination, clientRenderErrorScriptArgInterstitial);
          writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorMessage || "")));
        }
        if (errorComponentStack) {
          writeChunk(destination, clientRenderErrorScriptArgInterstitial);
          writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorComponentStack)));
        }
        return writeChunkAndReturn(destination, clientRenderScript2);
      }
      var regexForJSStringsInScripts = /[<\u2028\u2029]/g;
      function escapeJSStringsForInstructionScripts(input) {
        var escaped = JSON.stringify(input);
        return escaped.replace(regexForJSStringsInScripts, function(match) {
          switch (match) {
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default: {
              throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
            }
          }
        });
      }
      var assign = Object.assign;
      var REACT_ELEMENT_TYPE = Symbol.for("react.element");
      var REACT_PORTAL_TYPE = Symbol.for("react.portal");
      var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
      var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
      var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
      var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
      var REACT_CONTEXT_TYPE = Symbol.for("react.context");
      var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
      var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
      var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
      var REACT_MEMO_TYPE = Symbol.for("react.memo");
      var REACT_LAZY_TYPE = Symbol.for("react.lazy");
      var REACT_SCOPE_TYPE = Symbol.for("react.scope");
      var REACT_DEBUG_TRACING_MODE_TYPE = Symbol.for("react.debug_trace_mode");
      var REACT_LEGACY_HIDDEN_TYPE = Symbol.for("react.legacy_hidden");
      var REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED = Symbol.for("react.default_value");
      var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== "object") {
          return null;
        }
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === "function") {
          return maybeIterator;
        }
        return null;
      }
      function getWrappedName(outerType, innerType, wrapperName) {
        var displayName = outerType.displayName;
        if (displayName) {
          return displayName;
        }
        var functionName = innerType.displayName || innerType.name || "";
        return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
      }
      function getContextName(type) {
        return type.displayName || "Context";
      }
      function getComponentNameFromType(type) {
        if (type == null) {
          return null;
        }
        {
          if (typeof type.tag === "number") {
            error2("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
          }
        }
        if (typeof type === "function") {
          return type.displayName || type.name || null;
        }
        if (typeof type === "string") {
          return type;
        }
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
        }
        if (typeof type === "object") {
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              var context = type;
              return getContextName(context) + ".Consumer";
            case REACT_PROVIDER_TYPE:
              var provider = type;
              return getContextName(provider._context) + ".Provider";
            case REACT_FORWARD_REF_TYPE:
              return getWrappedName(type, type.render, "ForwardRef");
            case REACT_MEMO_TYPE:
              var outerName = type.displayName || null;
              if (outerName !== null) {
                return outerName;
              }
              return getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE: {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init2 = lazyComponent._init;
              try {
                return getComponentNameFromType(init2(payload));
              } catch (x) {
                return null;
              }
            }
          }
        }
        return null;
      }
      var disabledDepth = 0;
      var prevLog;
      var prevInfo;
      var prevWarn;
      var prevError;
      var prevGroup;
      var prevGroupCollapsed;
      var prevGroupEnd;
      function disabledLog() {
      }
      disabledLog.__reactDisabledLog = true;
      function disableLogs() {
        {
          if (disabledDepth === 0) {
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd;
            var props = {
              configurable: true,
              enumerable: true,
              value: disabledLog,
              writable: true
            };
            Object.defineProperties(console, {
              info: props,
              log: props,
              warn: props,
              error: props,
              group: props,
              groupCollapsed: props,
              groupEnd: props
            });
          }
          disabledDepth++;
        }
      }
      function reenableLogs() {
        {
          disabledDepth--;
          if (disabledDepth === 0) {
            var props = {
              configurable: true,
              enumerable: true,
              writable: true
            };
            Object.defineProperties(console, {
              log: assign({}, props, {
                value: prevLog
              }),
              info: assign({}, props, {
                value: prevInfo
              }),
              warn: assign({}, props, {
                value: prevWarn
              }),
              error: assign({}, props, {
                value: prevError
              }),
              group: assign({}, props, {
                value: prevGroup
              }),
              groupCollapsed: assign({}, props, {
                value: prevGroupCollapsed
              }),
              groupEnd: assign({}, props, {
                value: prevGroupEnd
              })
            });
          }
          if (disabledDepth < 0) {
            error2("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
          }
        }
      }
      var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
      var prefix;
      function describeBuiltInComponentFrame(name, source, ownerFn) {
        {
          if (prefix === void 0) {
            try {
              throw Error();
            } catch (x) {
              var match = x.stack.trim().match(/\n( *(at )?)/);
              prefix = match && match[1] || "";
            }
          }
          return "\n" + prefix + name;
        }
      }
      var reentry = false;
      var componentFrameCache;
      {
        var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
        componentFrameCache = new PossiblyWeakMap();
      }
      function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) {
          return "";
        }
        {
          var frame = componentFrameCache.get(fn);
          if (frame !== void 0) {
            return frame;
          }
        }
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher;
        {
          previousDispatcher = ReactCurrentDispatcher.current;
          ReactCurrentDispatcher.current = null;
          disableLogs();
        }
        try {
          if (construct) {
            var Fake = function() {
              throw Error();
            };
            Object.defineProperty(Fake.prototype, "props", {
              set: function() {
                throw Error();
              }
            });
            if (typeof Reflect === "object" && Reflect.construct) {
              try {
                Reflect.construct(Fake, []);
              } catch (x) {
                control = x;
              }
              Reflect.construct(fn, [], Fake);
            } else {
              try {
                Fake.call();
              } catch (x) {
                control = x;
              }
              fn.call(Fake.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x) {
              control = x;
            }
            fn();
          }
        } catch (sample) {
          if (sample && control && typeof sample.stack === "string") {
            var sampleLines = sample.stack.split("\n");
            var controlLines = control.stack.split("\n");
            var s2 = sampleLines.length - 1;
            var c = controlLines.length - 1;
            while (s2 >= 1 && c >= 0 && sampleLines[s2] !== controlLines[c]) {
              c--;
            }
            for (; s2 >= 1 && c >= 0; s2--, c--) {
              if (sampleLines[s2] !== controlLines[c]) {
                if (s2 !== 1 || c !== 1) {
                  do {
                    s2--;
                    c--;
                    if (c < 0 || sampleLines[s2] !== controlLines[c]) {
                      var _frame = "\n" + sampleLines[s2].replace(" at new ", " at ");
                      if (fn.displayName && _frame.includes("<anonymous>")) {
                        _frame = _frame.replace("<anonymous>", fn.displayName);
                      }
                      {
                        if (typeof fn === "function") {
                          componentFrameCache.set(fn, _frame);
                        }
                      }
                      return _frame;
                    }
                  } while (s2 >= 1 && c >= 0);
                }
                break;
              }
            }
          }
        } finally {
          reentry = false;
          {
            ReactCurrentDispatcher.current = previousDispatcher;
            reenableLogs();
          }
          Error.prepareStackTrace = previousPrepareStackTrace;
        }
        var name = fn ? fn.displayName || fn.name : "";
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
        {
          if (typeof fn === "function") {
            componentFrameCache.set(fn, syntheticFrame);
          }
        }
        return syntheticFrame;
      }
      function describeClassComponentFrame(ctor, source, ownerFn) {
        {
          return describeNativeComponentFrame(ctor, true);
        }
      }
      function describeFunctionComponentFrame(fn, source, ownerFn) {
        {
          return describeNativeComponentFrame(fn, false);
        }
      }
      function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
      }
      function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) {
          return "";
        }
        if (typeof type === "function") {
          {
            return describeNativeComponentFrame(type, shouldConstruct(type));
          }
        }
        if (typeof type === "string") {
          return describeBuiltInComponentFrame(type);
        }
        switch (type) {
          case REACT_SUSPENSE_TYPE:
            return describeBuiltInComponentFrame("Suspense");
          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame("SuspenseList");
        }
        if (typeof type === "object") {
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
              return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_LAZY_TYPE: {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init2 = lazyComponent._init;
              try {
                return describeUnknownElementTypeFrameInDEV(init2(payload), source, ownerFn);
              } catch (x) {
              }
            }
          }
        }
        return "";
      }
      var loggedTypeFailures = {};
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame.setExtraStackFrame(stack);
          } else {
            ReactDebugCurrentFrame.setExtraStackFrame(null);
          }
        }
      }
      function checkPropTypes(typeSpecs, values, location, componentName, element) {
        {
          var has = Function.call.bind(hasOwnProperty);
          for (var typeSpecName in typeSpecs) {
            if (has(typeSpecs, typeSpecName)) {
              var error$1 = void 0;
              try {
                if (typeof typeSpecs[typeSpecName] !== "function") {
                  var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  err.name = "Invariant Violation";
                  throw err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ex) {
                error$1 = ex;
              }
              if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error2("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                setCurrentlyValidatingElement(null);
              }
              if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);
                error2("Failed %s type: %s", location, error$1.message);
                setCurrentlyValidatingElement(null);
              }
            }
          }
        }
      }
      var warnedAboutMissingGetChildContext;
      {
        warnedAboutMissingGetChildContext = {};
      }
      var emptyContextObject = {};
      {
        Object.freeze(emptyContextObject);
      }
      function getMaskedContext(type, unmaskedContext) {
        {
          var contextTypes = type.contextTypes;
          if (!contextTypes) {
            return emptyContextObject;
          }
          var context = {};
          for (var key in contextTypes) {
            context[key] = unmaskedContext[key];
          }
          {
            var name = getComponentNameFromType(type) || "Unknown";
            checkPropTypes(contextTypes, context, "context", name);
          }
          return context;
        }
      }
      function processChildContext(instance, type, parentContext, childContextTypes) {
        {
          if (typeof instance.getChildContext !== "function") {
            {
              var componentName = getComponentNameFromType(type) || "Unknown";
              if (!warnedAboutMissingGetChildContext[componentName]) {
                warnedAboutMissingGetChildContext[componentName] = true;
                error2("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", componentName, componentName);
              }
            }
            return parentContext;
          }
          var childContext = instance.getChildContext();
          for (var contextKey in childContext) {
            if (!(contextKey in childContextTypes)) {
              throw new Error((getComponentNameFromType(type) || "Unknown") + '.getChildContext(): key "' + contextKey + '" is not defined in childContextTypes.');
            }
          }
          {
            var name = getComponentNameFromType(type) || "Unknown";
            checkPropTypes(childContextTypes, childContext, "child context", name);
          }
          return assign({}, parentContext, childContext);
        }
      }
      var rendererSigil;
      {
        rendererSigil = {};
      }
      var rootContextSnapshot = null;
      var currentActiveSnapshot = null;
      function popNode(prev) {
        {
          prev.context._currentValue = prev.parentValue;
        }
      }
      function pushNode(next) {
        {
          next.context._currentValue = next.value;
        }
      }
      function popToNearestCommonAncestor(prev, next) {
        if (prev === next)
          ;
        else {
          popNode(prev);
          var parentPrev = prev.parent;
          var parentNext = next.parent;
          if (parentPrev === null) {
            if (parentNext !== null) {
              throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
            }
          } else {
            if (parentNext === null) {
              throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
            }
            popToNearestCommonAncestor(parentPrev, parentNext);
          }
          pushNode(next);
        }
      }
      function popAllPrevious(prev) {
        popNode(prev);
        var parentPrev = prev.parent;
        if (parentPrev !== null) {
          popAllPrevious(parentPrev);
        }
      }
      function pushAllNext(next) {
        var parentNext = next.parent;
        if (parentNext !== null) {
          pushAllNext(parentNext);
        }
        pushNode(next);
      }
      function popPreviousToCommonLevel(prev, next) {
        popNode(prev);
        var parentPrev = prev.parent;
        if (parentPrev === null) {
          throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
        }
        if (parentPrev.depth === next.depth) {
          popToNearestCommonAncestor(parentPrev, next);
        } else {
          popPreviousToCommonLevel(parentPrev, next);
        }
      }
      function popNextToCommonLevel(prev, next) {
        var parentNext = next.parent;
        if (parentNext === null) {
          throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
        }
        if (prev.depth === parentNext.depth) {
          popToNearestCommonAncestor(prev, parentNext);
        } else {
          popNextToCommonLevel(prev, parentNext);
        }
        pushNode(next);
      }
      function switchContext(newSnapshot) {
        var prev = currentActiveSnapshot;
        var next = newSnapshot;
        if (prev !== next) {
          if (prev === null) {
            pushAllNext(next);
          } else if (next === null) {
            popAllPrevious(prev);
          } else if (prev.depth === next.depth) {
            popToNearestCommonAncestor(prev, next);
          } else if (prev.depth > next.depth) {
            popPreviousToCommonLevel(prev, next);
          } else {
            popNextToCommonLevel(prev, next);
          }
          currentActiveSnapshot = next;
        }
      }
      function pushProvider(context, nextValue) {
        var prevValue;
        {
          prevValue = context._currentValue;
          context._currentValue = nextValue;
          {
            if (context._currentRenderer !== void 0 && context._currentRenderer !== null && context._currentRenderer !== rendererSigil) {
              error2("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
            }
            context._currentRenderer = rendererSigil;
          }
        }
        var prevNode = currentActiveSnapshot;
        var newNode = {
          parent: prevNode,
          depth: prevNode === null ? 0 : prevNode.depth + 1,
          context,
          parentValue: prevValue,
          value: nextValue
        };
        currentActiveSnapshot = newNode;
        return newNode;
      }
      function popProvider(context) {
        var prevSnapshot = currentActiveSnapshot;
        if (prevSnapshot === null) {
          throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
        }
        {
          if (prevSnapshot.context !== context) {
            error2("The parent context is not the expected context. This is probably a bug in React.");
          }
        }
        {
          var value = prevSnapshot.parentValue;
          if (value === REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED) {
            prevSnapshot.context._currentValue = prevSnapshot.context._defaultValue;
          } else {
            prevSnapshot.context._currentValue = value;
          }
          {
            if (context._currentRenderer !== void 0 && context._currentRenderer !== null && context._currentRenderer !== rendererSigil) {
              error2("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
            }
            context._currentRenderer = rendererSigil;
          }
        }
        return currentActiveSnapshot = prevSnapshot.parent;
      }
      function getActiveContext() {
        return currentActiveSnapshot;
      }
      function readContext(context) {
        var value = context._currentValue;
        return value;
      }
      function get2(key) {
        return key._reactInternals;
      }
      function set(key, value) {
        key._reactInternals = value;
      }
      var didWarnAboutNoopUpdateForComponent = {};
      var didWarnAboutDeprecatedWillMount = {};
      var didWarnAboutUninitializedState;
      var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;
      var didWarnAboutLegacyLifecyclesAndDerivedState;
      var didWarnAboutUndefinedDerivedState;
      var warnOnUndefinedDerivedState;
      var warnOnInvalidCallback;
      var didWarnAboutDirectlyAssigningPropsToState;
      var didWarnAboutContextTypeAndContextTypes;
      var didWarnAboutInvalidateContextType;
      {
        didWarnAboutUninitializedState = /* @__PURE__ */ new Set();
        didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = /* @__PURE__ */ new Set();
        didWarnAboutLegacyLifecyclesAndDerivedState = /* @__PURE__ */ new Set();
        didWarnAboutDirectlyAssigningPropsToState = /* @__PURE__ */ new Set();
        didWarnAboutUndefinedDerivedState = /* @__PURE__ */ new Set();
        didWarnAboutContextTypeAndContextTypes = /* @__PURE__ */ new Set();
        didWarnAboutInvalidateContextType = /* @__PURE__ */ new Set();
        var didWarnOnInvalidCallback = /* @__PURE__ */ new Set();
        warnOnInvalidCallback = function(callback, callerName) {
          if (callback === null || typeof callback === "function") {
            return;
          }
          var key = callerName + "_" + callback;
          if (!didWarnOnInvalidCallback.has(key)) {
            didWarnOnInvalidCallback.add(key);
            error2("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", callerName, callback);
          }
        };
        warnOnUndefinedDerivedState = function(type, partialState) {
          if (partialState === void 0) {
            var componentName = getComponentNameFromType(type) || "Component";
            if (!didWarnAboutUndefinedDerivedState.has(componentName)) {
              didWarnAboutUndefinedDerivedState.add(componentName);
              error2("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", componentName);
            }
          }
        };
      }
      function warnNoop(publicInstance, callerName) {
        {
          var _constructor = publicInstance.constructor;
          var componentName = _constructor && getComponentNameFromType(_constructor) || "ReactClass";
          var warningKey = componentName + "." + callerName;
          if (didWarnAboutNoopUpdateForComponent[warningKey]) {
            return;
          }
          error2("%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.\n\nPlease check the code for the %s component.", callerName, callerName, componentName);
          didWarnAboutNoopUpdateForComponent[warningKey] = true;
        }
      }
      var classComponentUpdater = {
        isMounted: function(inst) {
          return false;
        },
        enqueueSetState: function(inst, payload, callback) {
          var internals = get2(inst);
          if (internals.queue === null) {
            warnNoop(inst, "setState");
          } else {
            internals.queue.push(payload);
            {
              if (callback !== void 0 && callback !== null) {
                warnOnInvalidCallback(callback, "setState");
              }
            }
          }
        },
        enqueueReplaceState: function(inst, payload, callback) {
          var internals = get2(inst);
          internals.replace = true;
          internals.queue = [payload];
          {
            if (callback !== void 0 && callback !== null) {
              warnOnInvalidCallback(callback, "setState");
            }
          }
        },
        enqueueForceUpdate: function(inst, callback) {
          var internals = get2(inst);
          if (internals.queue === null) {
            warnNoop(inst, "forceUpdate");
          } else {
            {
              if (callback !== void 0 && callback !== null) {
                warnOnInvalidCallback(callback, "setState");
              }
            }
          }
        }
      };
      function applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, prevState, nextProps) {
        var partialState = getDerivedStateFromProps(nextProps, prevState);
        {
          warnOnUndefinedDerivedState(ctor, partialState);
        }
        var newState = partialState === null || partialState === void 0 ? prevState : assign({}, prevState, partialState);
        return newState;
      }
      function constructClassInstance(ctor, props, maskedLegacyContext) {
        var context = emptyContextObject;
        var contextType = ctor.contextType;
        {
          if ("contextType" in ctor) {
            var isValid = contextType === null || contextType !== void 0 && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === void 0;
            if (!isValid && !didWarnAboutInvalidateContextType.has(ctor)) {
              didWarnAboutInvalidateContextType.add(ctor);
              var addendum = "";
              if (contextType === void 0) {
                addendum = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.";
              } else if (typeof contextType !== "object") {
                addendum = " However, it is set to a " + typeof contextType + ".";
              } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
                addendum = " Did you accidentally pass the Context.Provider instead?";
              } else if (contextType._context !== void 0) {
                addendum = " Did you accidentally pass the Context.Consumer instead?";
              } else {
                addendum = " However, it is set to an object with keys {" + Object.keys(contextType).join(", ") + "}.";
              }
              error2("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", getComponentNameFromType(ctor) || "Component", addendum);
            }
          }
        }
        if (typeof contextType === "object" && contextType !== null) {
          context = readContext(contextType);
        } else {
          context = maskedLegacyContext;
        }
        var instance = new ctor(props, context);
        {
          if (typeof ctor.getDerivedStateFromProps === "function" && (instance.state === null || instance.state === void 0)) {
            var componentName = getComponentNameFromType(ctor) || "Component";
            if (!didWarnAboutUninitializedState.has(componentName)) {
              didWarnAboutUninitializedState.add(componentName);
              error2("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", componentName, instance.state === null ? "null" : "undefined", componentName);
            }
          }
          if (typeof ctor.getDerivedStateFromProps === "function" || typeof instance.getSnapshotBeforeUpdate === "function") {
            var foundWillMountName = null;
            var foundWillReceivePropsName = null;
            var foundWillUpdateName = null;
            if (typeof instance.componentWillMount === "function" && instance.componentWillMount.__suppressDeprecationWarning !== true) {
              foundWillMountName = "componentWillMount";
            } else if (typeof instance.UNSAFE_componentWillMount === "function") {
              foundWillMountName = "UNSAFE_componentWillMount";
            }
            if (typeof instance.componentWillReceiveProps === "function" && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
              foundWillReceivePropsName = "componentWillReceiveProps";
            } else if (typeof instance.UNSAFE_componentWillReceiveProps === "function") {
              foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
            }
            if (typeof instance.componentWillUpdate === "function" && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
              foundWillUpdateName = "componentWillUpdate";
            } else if (typeof instance.UNSAFE_componentWillUpdate === "function") {
              foundWillUpdateName = "UNSAFE_componentWillUpdate";
            }
            if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
              var _componentName = getComponentNameFromType(ctor) || "Component";
              var newApiName = typeof ctor.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
              if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
                didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);
                error2("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://reactjs.org/link/unsafe-component-lifecycles", _componentName, newApiName, foundWillMountName !== null ? "\n  " + foundWillMountName : "", foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "", foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "");
              }
            }
          }
        }
        return instance;
      }
      function checkClassInstance(instance, ctor, newProps) {
        {
          var name = getComponentNameFromType(ctor) || "Component";
          var renderPresent = instance.render;
          if (!renderPresent) {
            if (ctor.prototype && typeof ctor.prototype.render === "function") {
              error2("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", name);
            } else {
              error2("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", name);
            }
          }
          if (instance.getInitialState && !instance.getInitialState.isReactClassApproved && !instance.state) {
            error2("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", name);
          }
          if (instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved) {
            error2("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", name);
          }
          if (instance.propTypes) {
            error2("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", name);
          }
          if (instance.contextType) {
            error2("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", name);
          }
          {
            if (instance.contextTypes) {
              error2("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", name);
            }
            if (ctor.contextType && ctor.contextTypes && !didWarnAboutContextTypeAndContextTypes.has(ctor)) {
              didWarnAboutContextTypeAndContextTypes.add(ctor);
              error2("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", name);
            }
          }
          if (typeof instance.componentShouldUpdate === "function") {
            error2("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", name);
          }
          if (ctor.prototype && ctor.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate !== "undefined") {
            error2("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", getComponentNameFromType(ctor) || "A pure component");
          }
          if (typeof instance.componentDidUnmount === "function") {
            error2("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", name);
          }
          if (typeof instance.componentDidReceiveProps === "function") {
            error2("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", name);
          }
          if (typeof instance.componentWillRecieveProps === "function") {
            error2("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", name);
          }
          if (typeof instance.UNSAFE_componentWillRecieveProps === "function") {
            error2("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", name);
          }
          var hasMutatedProps = instance.props !== newProps;
          if (instance.props !== void 0 && hasMutatedProps) {
            error2("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", name, name);
          }
          if (instance.defaultProps) {
            error2("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", name, name);
          }
          if (typeof instance.getSnapshotBeforeUpdate === "function" && typeof instance.componentDidUpdate !== "function" && !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor)) {
            didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor);
            error2("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", getComponentNameFromType(ctor));
          }
          if (typeof instance.getDerivedStateFromProps === "function") {
            error2("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
          }
          if (typeof instance.getDerivedStateFromError === "function") {
            error2("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
          }
          if (typeof ctor.getSnapshotBeforeUpdate === "function") {
            error2("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", name);
          }
          var _state = instance.state;
          if (_state && (typeof _state !== "object" || isArray(_state))) {
            error2("%s.state: must be set to an object or null", name);
          }
          if (typeof instance.getChildContext === "function" && typeof ctor.childContextTypes !== "object") {
            error2("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", name);
          }
        }
      }
      function callComponentWillMount(type, instance) {
        var oldState = instance.state;
        if (typeof instance.componentWillMount === "function") {
          {
            if (instance.componentWillMount.__suppressDeprecationWarning !== true) {
              var componentName = getComponentNameFromType(type) || "Unknown";
              if (!didWarnAboutDeprecatedWillMount[componentName]) {
                warn2(
                  "componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.\n\nPlease update the following components: %s",
                  componentName
                );
                didWarnAboutDeprecatedWillMount[componentName] = true;
              }
            }
          }
          instance.componentWillMount();
        }
        if (typeof instance.UNSAFE_componentWillMount === "function") {
          instance.UNSAFE_componentWillMount();
        }
        if (oldState !== instance.state) {
          {
            error2("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", getComponentNameFromType(type) || "Component");
          }
          classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
        }
      }
      function processUpdateQueue(internalInstance, inst, props, maskedLegacyContext) {
        if (internalInstance.queue !== null && internalInstance.queue.length > 0) {
          var oldQueue = internalInstance.queue;
          var oldReplace = internalInstance.replace;
          internalInstance.queue = null;
          internalInstance.replace = false;
          if (oldReplace && oldQueue.length === 1) {
            inst.state = oldQueue[0];
          } else {
            var nextState = oldReplace ? oldQueue[0] : inst.state;
            var dontMutate = true;
            for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
              var partial = oldQueue[i];
              var partialState = typeof partial === "function" ? partial.call(inst, nextState, props, maskedLegacyContext) : partial;
              if (partialState != null) {
                if (dontMutate) {
                  dontMutate = false;
                  nextState = assign({}, nextState, partialState);
                } else {
                  assign(nextState, partialState);
                }
              }
            }
            inst.state = nextState;
          }
        } else {
          internalInstance.queue = null;
        }
      }
      function mountClassInstance(instance, ctor, newProps, maskedLegacyContext) {
        {
          checkClassInstance(instance, ctor, newProps);
        }
        var initialState = instance.state !== void 0 ? instance.state : null;
        instance.updater = classComponentUpdater;
        instance.props = newProps;
        instance.state = initialState;
        var internalInstance = {
          queue: [],
          replace: false
        };
        set(instance, internalInstance);
        var contextType = ctor.contextType;
        if (typeof contextType === "object" && contextType !== null) {
          instance.context = readContext(contextType);
        } else {
          instance.context = maskedLegacyContext;
        }
        {
          if (instance.state === newProps) {
            var componentName = getComponentNameFromType(ctor) || "Component";
            if (!didWarnAboutDirectlyAssigningPropsToState.has(componentName)) {
              didWarnAboutDirectlyAssigningPropsToState.add(componentName);
              error2("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", componentName);
            }
          }
        }
        var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
        if (typeof getDerivedStateFromProps === "function") {
          instance.state = applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, initialState, newProps);
        }
        if (typeof ctor.getDerivedStateFromProps !== "function" && typeof instance.getSnapshotBeforeUpdate !== "function" && (typeof instance.UNSAFE_componentWillMount === "function" || typeof instance.componentWillMount === "function")) {
          callComponentWillMount(ctor, instance);
          processUpdateQueue(internalInstance, instance, newProps, maskedLegacyContext);
        }
      }
      var emptyTreeContext = {
        id: 1,
        overflow: ""
      };
      function getTreeId(context) {
        var overflow = context.overflow;
        var idWithLeadingBit = context.id;
        var id = idWithLeadingBit & ~getLeadingBit(idWithLeadingBit);
        return id.toString(32) + overflow;
      }
      function pushTreeContext(baseContext, totalChildren, index) {
        var baseIdWithLeadingBit = baseContext.id;
        var baseOverflow = baseContext.overflow;
        var baseLength = getBitLength(baseIdWithLeadingBit) - 1;
        var baseId = baseIdWithLeadingBit & ~(1 << baseLength);
        var slot = index + 1;
        var length = getBitLength(totalChildren) + baseLength;
        if (length > 30) {
          var numberOfOverflowBits = baseLength - baseLength % 5;
          var newOverflowBits = (1 << numberOfOverflowBits) - 1;
          var newOverflow = (baseId & newOverflowBits).toString(32);
          var restOfBaseId = baseId >> numberOfOverflowBits;
          var restOfBaseLength = baseLength - numberOfOverflowBits;
          var restOfLength = getBitLength(totalChildren) + restOfBaseLength;
          var restOfNewBits = slot << restOfBaseLength;
          var id = restOfNewBits | restOfBaseId;
          var overflow = newOverflow + baseOverflow;
          return {
            id: 1 << restOfLength | id,
            overflow
          };
        } else {
          var newBits = slot << baseLength;
          var _id = newBits | baseId;
          var _overflow = baseOverflow;
          return {
            id: 1 << length | _id,
            overflow: _overflow
          };
        }
      }
      function getBitLength(number) {
        return 32 - clz32(number);
      }
      function getLeadingBit(id) {
        return 1 << getBitLength(id) - 1;
      }
      var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback;
      var log2 = Math.log;
      var LN2 = Math.LN2;
      function clz32Fallback(x) {
        var asUint = x >>> 0;
        if (asUint === 0) {
          return 32;
        }
        return 31 - (log2(asUint) / LN2 | 0) | 0;
      }
      function is(x, y) {
        return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
      }
      var objectIs = typeof Object.is === "function" ? Object.is : is;
      var currentlyRenderingComponent = null;
      var currentlyRenderingTask = null;
      var firstWorkInProgressHook = null;
      var workInProgressHook = null;
      var isReRender = false;
      var didScheduleRenderPhaseUpdate = false;
      var localIdCounter = 0;
      var renderPhaseUpdates = null;
      var numberOfReRenders = 0;
      var RE_RENDER_LIMIT = 25;
      var isInHookUserCodeInDev = false;
      var currentHookNameInDev;
      function resolveCurrentlyRenderingComponent() {
        if (currentlyRenderingComponent === null) {
          throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
        }
        {
          if (isInHookUserCodeInDev) {
            error2("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
          }
        }
        return currentlyRenderingComponent;
      }
      function areHookInputsEqual(nextDeps, prevDeps) {
        if (prevDeps === null) {
          {
            error2("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", currentHookNameInDev);
          }
          return false;
        }
        {
          if (nextDeps.length !== prevDeps.length) {
            error2("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", currentHookNameInDev, "[" + nextDeps.join(", ") + "]", "[" + prevDeps.join(", ") + "]");
          }
        }
        for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
          if (objectIs(nextDeps[i], prevDeps[i])) {
            continue;
          }
          return false;
        }
        return true;
      }
      function createHook() {
        if (numberOfReRenders > 0) {
          throw new Error("Rendered more hooks than during the previous render");
        }
        return {
          memoizedState: null,
          queue: null,
          next: null
        };
      }
      function createWorkInProgressHook() {
        if (workInProgressHook === null) {
          if (firstWorkInProgressHook === null) {
            isReRender = false;
            firstWorkInProgressHook = workInProgressHook = createHook();
          } else {
            isReRender = true;
            workInProgressHook = firstWorkInProgressHook;
          }
        } else {
          if (workInProgressHook.next === null) {
            isReRender = false;
            workInProgressHook = workInProgressHook.next = createHook();
          } else {
            isReRender = true;
            workInProgressHook = workInProgressHook.next;
          }
        }
        return workInProgressHook;
      }
      function prepareToUseHooks(task, componentIdentity) {
        currentlyRenderingComponent = componentIdentity;
        currentlyRenderingTask = task;
        {
          isInHookUserCodeInDev = false;
        }
        localIdCounter = 0;
      }
      function finishHooks(Component, props, children, refOrContext) {
        while (didScheduleRenderPhaseUpdate) {
          didScheduleRenderPhaseUpdate = false;
          localIdCounter = 0;
          numberOfReRenders += 1;
          workInProgressHook = null;
          children = Component(props, refOrContext);
        }
        resetHooksState();
        return children;
      }
      function checkDidRenderIdHook() {
        var didRenderIdHook = localIdCounter !== 0;
        return didRenderIdHook;
      }
      function resetHooksState() {
        {
          isInHookUserCodeInDev = false;
        }
        currentlyRenderingComponent = null;
        currentlyRenderingTask = null;
        didScheduleRenderPhaseUpdate = false;
        firstWorkInProgressHook = null;
        numberOfReRenders = 0;
        renderPhaseUpdates = null;
        workInProgressHook = null;
      }
      function readContext$1(context) {
        {
          if (isInHookUserCodeInDev) {
            error2("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          }
        }
        return readContext(context);
      }
      function useContext(context) {
        {
          currentHookNameInDev = "useContext";
        }
        resolveCurrentlyRenderingComponent();
        return readContext(context);
      }
      function basicStateReducer(state, action) {
        return typeof action === "function" ? action(state) : action;
      }
      function useState(initialState) {
        {
          currentHookNameInDev = "useState";
        }
        return useReducer(
          basicStateReducer,
          initialState
        );
      }
      function useReducer(reducer, initialArg, init2) {
        {
          if (reducer !== basicStateReducer) {
            currentHookNameInDev = "useReducer";
          }
        }
        currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
        workInProgressHook = createWorkInProgressHook();
        if (isReRender) {
          var queue = workInProgressHook.queue;
          var dispatch = queue.dispatch;
          if (renderPhaseUpdates !== null) {
            var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
            if (firstRenderPhaseUpdate !== void 0) {
              renderPhaseUpdates.delete(queue);
              var newState = workInProgressHook.memoizedState;
              var update = firstRenderPhaseUpdate;
              do {
                var action = update.action;
                {
                  isInHookUserCodeInDev = true;
                }
                newState = reducer(newState, action);
                {
                  isInHookUserCodeInDev = false;
                }
                update = update.next;
              } while (update !== null);
              workInProgressHook.memoizedState = newState;
              return [newState, dispatch];
            }
          }
          return [workInProgressHook.memoizedState, dispatch];
        } else {
          {
            isInHookUserCodeInDev = true;
          }
          var initialState;
          if (reducer === basicStateReducer) {
            initialState = typeof initialArg === "function" ? initialArg() : initialArg;
          } else {
            initialState = init2 !== void 0 ? init2(initialArg) : initialArg;
          }
          {
            isInHookUserCodeInDev = false;
          }
          workInProgressHook.memoizedState = initialState;
          var _queue = workInProgressHook.queue = {
            last: null,
            dispatch: null
          };
          var _dispatch = _queue.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue);
          return [workInProgressHook.memoizedState, _dispatch];
        }
      }
      function useMemo(nextCreate, deps) {
        currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
        workInProgressHook = createWorkInProgressHook();
        var nextDeps = deps === void 0 ? null : deps;
        if (workInProgressHook !== null) {
          var prevState = workInProgressHook.memoizedState;
          if (prevState !== null) {
            if (nextDeps !== null) {
              var prevDeps = prevState[1];
              if (areHookInputsEqual(nextDeps, prevDeps)) {
                return prevState[0];
              }
            }
          }
        }
        {
          isInHookUserCodeInDev = true;
        }
        var nextValue = nextCreate();
        {
          isInHookUserCodeInDev = false;
        }
        workInProgressHook.memoizedState = [nextValue, nextDeps];
        return nextValue;
      }
      function useRef(initialValue) {
        currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
        workInProgressHook = createWorkInProgressHook();
        var previousRef = workInProgressHook.memoizedState;
        if (previousRef === null) {
          var ref = {
            current: initialValue
          };
          {
            Object.seal(ref);
          }
          workInProgressHook.memoizedState = ref;
          return ref;
        } else {
          return previousRef;
        }
      }
      function useLayoutEffect(create, inputs) {
        {
          currentHookNameInDev = "useLayoutEffect";
          error2("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
        }
      }
      function dispatchAction(componentIdentity, queue, action) {
        if (numberOfReRenders >= RE_RENDER_LIMIT) {
          throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
        }
        if (componentIdentity === currentlyRenderingComponent) {
          didScheduleRenderPhaseUpdate = true;
          var update = {
            action,
            next: null
          };
          if (renderPhaseUpdates === null) {
            renderPhaseUpdates = /* @__PURE__ */ new Map();
          }
          var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
          if (firstRenderPhaseUpdate === void 0) {
            renderPhaseUpdates.set(queue, update);
          } else {
            var lastRenderPhaseUpdate = firstRenderPhaseUpdate;
            while (lastRenderPhaseUpdate.next !== null) {
              lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
            }
            lastRenderPhaseUpdate.next = update;
          }
        }
      }
      function useCallback(callback, deps) {
        return useMemo(function() {
          return callback;
        }, deps);
      }
      function useMutableSource(source, getSnapshot, subscribe) {
        resolveCurrentlyRenderingComponent();
        return getSnapshot(source._source);
      }
      function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
        if (getServerSnapshot === void 0) {
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        }
        return getServerSnapshot();
      }
      function useDeferredValue(value) {
        resolveCurrentlyRenderingComponent();
        return value;
      }
      function unsupportedStartTransition() {
        throw new Error("startTransition cannot be called during server rendering.");
      }
      function useTransition() {
        resolveCurrentlyRenderingComponent();
        return [false, unsupportedStartTransition];
      }
      function useId() {
        var task = currentlyRenderingTask;
        var treeId = getTreeId(task.treeContext);
        var responseState = currentResponseState;
        if (responseState === null) {
          throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
        }
        var localId = localIdCounter++;
        return makeId(responseState, treeId, localId);
      }
      function noop() {
      }
      var Dispatcher = {
        readContext: readContext$1,
        useContext,
        useMemo,
        useReducer,
        useRef,
        useState,
        useInsertionEffect: noop,
        useLayoutEffect,
        useCallback,
        useImperativeHandle: noop,
        useEffect: noop,
        useDebugValue: noop,
        useDeferredValue,
        useTransition,
        useId,
        useMutableSource,
        useSyncExternalStore
      };
      var currentResponseState = null;
      function setCurrentResponseState(responseState) {
        currentResponseState = responseState;
      }
      function getStackByComponentStackNode(componentStack) {
        try {
          var info = "";
          var node = componentStack;
          do {
            switch (node.tag) {
              case 0:
                info += describeBuiltInComponentFrame(node.type, null, null);
                break;
              case 1:
                info += describeFunctionComponentFrame(node.type, null, null);
                break;
              case 2:
                info += describeClassComponentFrame(node.type, null, null);
                break;
            }
            node = node.parent;
          } while (node);
          return info;
        } catch (x) {
          return "\nError generating stack: " + x.message + "\n" + x.stack;
        }
      }
      var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
      var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
      var PENDING = 0;
      var COMPLETED = 1;
      var FLUSHED = 2;
      var ABORTED = 3;
      var ERRORED = 4;
      var OPEN = 0;
      var CLOSING = 1;
      var CLOSED = 2;
      var DEFAULT_PROGRESSIVE_CHUNK_SIZE = 12800;
      function defaultErrorHandler(error3) {
        console["error"](error3);
        return null;
      }
      function noop$1() {
      }
      function createRequest(children, responseState, rootFormatContext, progressiveChunkSize, onError, onAllReady, onShellReady, onShellError, onFatalError) {
        var pingedTasks = [];
        var abortSet = /* @__PURE__ */ new Set();
        var request = {
          destination: null,
          responseState,
          progressiveChunkSize: progressiveChunkSize === void 0 ? DEFAULT_PROGRESSIVE_CHUNK_SIZE : progressiveChunkSize,
          status: OPEN,
          fatalError: null,
          nextSegmentId: 0,
          allPendingTasks: 0,
          pendingRootTasks: 0,
          completedRootSegment: null,
          abortableTasks: abortSet,
          pingedTasks,
          clientRenderedBoundaries: [],
          completedBoundaries: [],
          partialBoundaries: [],
          onError: onError === void 0 ? defaultErrorHandler : onError,
          onAllReady: onAllReady === void 0 ? noop$1 : onAllReady,
          onShellReady: onShellReady === void 0 ? noop$1 : onShellReady,
          onShellError: onShellError === void 0 ? noop$1 : onShellError,
          onFatalError: onFatalError === void 0 ? noop$1 : onFatalError
        };
        var rootSegment = createPendingSegment(
          request,
          0,
          null,
          rootFormatContext,
          false,
          false
        );
        rootSegment.parentFlushed = true;
        var rootTask = createTask(request, children, null, rootSegment, abortSet, emptyContextObject, rootContextSnapshot, emptyTreeContext);
        pingedTasks.push(rootTask);
        return request;
      }
      function pingTask(request, task) {
        var pingedTasks = request.pingedTasks;
        pingedTasks.push(task);
        if (pingedTasks.length === 1) {
          scheduleWork(function() {
            return performWork(request);
          });
        }
      }
      function createSuspenseBoundary(request, fallbackAbortableTasks) {
        return {
          id: UNINITIALIZED_SUSPENSE_BOUNDARY_ID,
          rootSegmentID: -1,
          parentFlushed: false,
          pendingTasks: 0,
          forceClientRender: false,
          completedSegments: [],
          byteSize: 0,
          fallbackAbortableTasks,
          errorDigest: null
        };
      }
      function createTask(request, node, blockedBoundary, blockedSegment, abortSet, legacyContext, context, treeContext) {
        request.allPendingTasks++;
        if (blockedBoundary === null) {
          request.pendingRootTasks++;
        } else {
          blockedBoundary.pendingTasks++;
        }
        var task = {
          node,
          ping: function() {
            return pingTask(request, task);
          },
          blockedBoundary,
          blockedSegment,
          abortSet,
          legacyContext,
          context,
          treeContext
        };
        {
          task.componentStack = null;
        }
        abortSet.add(task);
        return task;
      }
      function createPendingSegment(request, index, boundary, formatContext, lastPushedText, textEmbedded) {
        return {
          status: PENDING,
          id: -1,
          index,
          parentFlushed: false,
          chunks: [],
          children: [],
          formatContext,
          boundary,
          lastPushedText,
          textEmbedded
        };
      }
      var currentTaskInDEV = null;
      function getCurrentStackInDEV() {
        {
          if (currentTaskInDEV === null || currentTaskInDEV.componentStack === null) {
            return "";
          }
          return getStackByComponentStackNode(currentTaskInDEV.componentStack);
        }
      }
      function pushBuiltInComponentStackInDEV(task, type) {
        {
          task.componentStack = {
            tag: 0,
            parent: task.componentStack,
            type
          };
        }
      }
      function pushFunctionComponentStackInDEV(task, type) {
        {
          task.componentStack = {
            tag: 1,
            parent: task.componentStack,
            type
          };
        }
      }
      function pushClassComponentStackInDEV(task, type) {
        {
          task.componentStack = {
            tag: 2,
            parent: task.componentStack,
            type
          };
        }
      }
      function popComponentStackInDEV(task) {
        {
          if (task.componentStack === null) {
            error2("Unexpectedly popped too many stack frames. This is a bug in React.");
          } else {
            task.componentStack = task.componentStack.parent;
          }
        }
      }
      var lastBoundaryErrorComponentStackDev = null;
      function captureBoundaryErrorDetailsDev(boundary, error3) {
        {
          var errorMessage;
          if (typeof error3 === "string") {
            errorMessage = error3;
          } else if (error3 && typeof error3.message === "string") {
            errorMessage = error3.message;
          } else {
            errorMessage = String(error3);
          }
          var errorComponentStack = lastBoundaryErrorComponentStackDev || getCurrentStackInDEV();
          lastBoundaryErrorComponentStackDev = null;
          boundary.errorMessage = errorMessage;
          boundary.errorComponentStack = errorComponentStack;
        }
      }
      function logRecoverableError(request, error3) {
        var errorDigest = request.onError(error3);
        if (errorDigest != null && typeof errorDigest !== "string") {
          throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof errorDigest + '" instead');
        }
        return errorDigest;
      }
      function fatalError(request, error3) {
        var onShellError = request.onShellError;
        onShellError(error3);
        var onFatalError = request.onFatalError;
        onFatalError(error3);
        if (request.destination !== null) {
          request.status = CLOSED;
          closeWithError(request.destination, error3);
        } else {
          request.status = CLOSING;
          request.fatalError = error3;
        }
      }
      function renderSuspenseBoundary(request, task, props) {
        pushBuiltInComponentStackInDEV(task, "Suspense");
        var parentBoundary = task.blockedBoundary;
        var parentSegment = task.blockedSegment;
        var fallback = props.fallback;
        var content = props.children;
        var fallbackAbortSet = /* @__PURE__ */ new Set();
        var newBoundary = createSuspenseBoundary(request, fallbackAbortSet);
        var insertionIndex = parentSegment.chunks.length;
        var boundarySegment = createPendingSegment(
          request,
          insertionIndex,
          newBoundary,
          parentSegment.formatContext,
          false,
          false
        );
        parentSegment.children.push(boundarySegment);
        parentSegment.lastPushedText = false;
        var contentRootSegment = createPendingSegment(
          request,
          0,
          null,
          parentSegment.formatContext,
          false,
          false
        );
        contentRootSegment.parentFlushed = true;
        task.blockedBoundary = newBoundary;
        task.blockedSegment = contentRootSegment;
        try {
          renderNode(request, task, content);
          pushSegmentFinale(contentRootSegment.chunks, request.responseState, contentRootSegment.lastPushedText, contentRootSegment.textEmbedded);
          contentRootSegment.status = COMPLETED;
          queueCompletedSegment(newBoundary, contentRootSegment);
          if (newBoundary.pendingTasks === 0) {
            popComponentStackInDEV(task);
            return;
          }
        } catch (error3) {
          contentRootSegment.status = ERRORED;
          newBoundary.forceClientRender = true;
          newBoundary.errorDigest = logRecoverableError(request, error3);
          {
            captureBoundaryErrorDetailsDev(newBoundary, error3);
          }
        } finally {
          task.blockedBoundary = parentBoundary;
          task.blockedSegment = parentSegment;
        }
        var suspendedFallbackTask = createTask(request, fallback, parentBoundary, boundarySegment, fallbackAbortSet, task.legacyContext, task.context, task.treeContext);
        {
          suspendedFallbackTask.componentStack = task.componentStack;
        }
        request.pingedTasks.push(suspendedFallbackTask);
        popComponentStackInDEV(task);
      }
      function renderHostElement(request, task, type, props) {
        pushBuiltInComponentStackInDEV(task, type);
        var segment = task.blockedSegment;
        var children = pushStartInstance(segment.chunks, type, props, request.responseState, segment.formatContext);
        segment.lastPushedText = false;
        var prevContext = segment.formatContext;
        segment.formatContext = getChildFormatContext(prevContext, type, props);
        renderNode(request, task, children);
        segment.formatContext = prevContext;
        pushEndInstance(segment.chunks, type);
        segment.lastPushedText = false;
        popComponentStackInDEV(task);
      }
      function shouldConstruct$1(Component) {
        return Component.prototype && Component.prototype.isReactComponent;
      }
      function renderWithHooks(request, task, Component, props, secondArg) {
        var componentIdentity = {};
        prepareToUseHooks(task, componentIdentity);
        var result = Component(props, secondArg);
        return finishHooks(Component, props, result, secondArg);
      }
      function finishClassComponent(request, task, instance, Component, props) {
        var nextChildren = instance.render();
        {
          if (instance.props !== props) {
            if (!didWarnAboutReassigningProps) {
              error2("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", getComponentNameFromType(Component) || "a component");
            }
            didWarnAboutReassigningProps = true;
          }
        }
        {
          var childContextTypes = Component.childContextTypes;
          if (childContextTypes !== null && childContextTypes !== void 0) {
            var previousContext = task.legacyContext;
            var mergedContext = processChildContext(instance, Component, previousContext, childContextTypes);
            task.legacyContext = mergedContext;
            renderNodeDestructive(request, task, nextChildren);
            task.legacyContext = previousContext;
            return;
          }
        }
        renderNodeDestructive(request, task, nextChildren);
      }
      function renderClassComponent(request, task, Component, props) {
        pushClassComponentStackInDEV(task, Component);
        var maskedContext = getMaskedContext(Component, task.legacyContext);
        var instance = constructClassInstance(Component, props, maskedContext);
        mountClassInstance(instance, Component, props, maskedContext);
        finishClassComponent(request, task, instance, Component, props);
        popComponentStackInDEV(task);
      }
      var didWarnAboutBadClass = {};
      var didWarnAboutModulePatternComponent = {};
      var didWarnAboutContextTypeOnFunctionComponent = {};
      var didWarnAboutGetDerivedStateOnFunctionComponent = {};
      var didWarnAboutReassigningProps = false;
      var didWarnAboutGenerators = false;
      var didWarnAboutMaps = false;
      var hasWarnedAboutUsingContextAsConsumer = false;
      function renderIndeterminateComponent(request, task, Component, props) {
        var legacyContext;
        {
          legacyContext = getMaskedContext(Component, task.legacyContext);
        }
        pushFunctionComponentStackInDEV(task, Component);
        {
          if (Component.prototype && typeof Component.prototype.render === "function") {
            var componentName = getComponentNameFromType(Component) || "Unknown";
            if (!didWarnAboutBadClass[componentName]) {
              error2("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", componentName, componentName);
              didWarnAboutBadClass[componentName] = true;
            }
          }
        }
        var value = renderWithHooks(request, task, Component, props, legacyContext);
        var hasId = checkDidRenderIdHook();
        {
          if (typeof value === "object" && value !== null && typeof value.render === "function" && value.$$typeof === void 0) {
            var _componentName = getComponentNameFromType(Component) || "Unknown";
            if (!didWarnAboutModulePatternComponent[_componentName]) {
              error2("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName, _componentName, _componentName);
              didWarnAboutModulePatternComponent[_componentName] = true;
            }
          }
        }
        if (typeof value === "object" && value !== null && typeof value.render === "function" && value.$$typeof === void 0) {
          {
            var _componentName2 = getComponentNameFromType(Component) || "Unknown";
            if (!didWarnAboutModulePatternComponent[_componentName2]) {
              error2("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName2, _componentName2, _componentName2);
              didWarnAboutModulePatternComponent[_componentName2] = true;
            }
          }
          mountClassInstance(value, Component, props, legacyContext);
          finishClassComponent(request, task, value, Component, props);
        } else {
          {
            validateFunctionComponentInDev(Component);
          }
          if (hasId) {
            var prevTreeContext = task.treeContext;
            var totalChildren = 1;
            var index = 0;
            task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);
            try {
              renderNodeDestructive(request, task, value);
            } finally {
              task.treeContext = prevTreeContext;
            }
          } else {
            renderNodeDestructive(request, task, value);
          }
        }
        popComponentStackInDEV(task);
      }
      function validateFunctionComponentInDev(Component) {
        {
          if (Component) {
            if (Component.childContextTypes) {
              error2("%s(...): childContextTypes cannot be defined on a function component.", Component.displayName || Component.name || "Component");
            }
          }
          if (typeof Component.getDerivedStateFromProps === "function") {
            var _componentName3 = getComponentNameFromType(Component) || "Unknown";
            if (!didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3]) {
              error2("%s: Function components do not support getDerivedStateFromProps.", _componentName3);
              didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3] = true;
            }
          }
          if (typeof Component.contextType === "object" && Component.contextType !== null) {
            var _componentName4 = getComponentNameFromType(Component) || "Unknown";
            if (!didWarnAboutContextTypeOnFunctionComponent[_componentName4]) {
              error2("%s: Function components do not support contextType.", _componentName4);
              didWarnAboutContextTypeOnFunctionComponent[_componentName4] = true;
            }
          }
        }
      }
      function resolveDefaultProps(Component, baseProps) {
        if (Component && Component.defaultProps) {
          var props = assign({}, baseProps);
          var defaultProps = Component.defaultProps;
          for (var propName2 in defaultProps) {
            if (props[propName2] === void 0) {
              props[propName2] = defaultProps[propName2];
            }
          }
          return props;
        }
        return baseProps;
      }
      function renderForwardRef(request, task, type, props, ref) {
        pushFunctionComponentStackInDEV(task, type.render);
        var children = renderWithHooks(request, task, type.render, props, ref);
        var hasId = checkDidRenderIdHook();
        if (hasId) {
          var prevTreeContext = task.treeContext;
          var totalChildren = 1;
          var index = 0;
          task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);
          try {
            renderNodeDestructive(request, task, children);
          } finally {
            task.treeContext = prevTreeContext;
          }
        } else {
          renderNodeDestructive(request, task, children);
        }
        popComponentStackInDEV(task);
      }
      function renderMemo(request, task, type, props, ref) {
        var innerType = type.type;
        var resolvedProps = resolveDefaultProps(innerType, props);
        renderElement2(request, task, innerType, resolvedProps, ref);
      }
      function renderContextConsumer(request, task, context, props) {
        {
          if (context._context === void 0) {
            if (context !== context.Consumer) {
              if (!hasWarnedAboutUsingContextAsConsumer) {
                hasWarnedAboutUsingContextAsConsumer = true;
                error2("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
              }
            }
          } else {
            context = context._context;
          }
        }
        var render = props.children;
        {
          if (typeof render !== "function") {
            error2("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
          }
        }
        var newValue = readContext(context);
        var newChildren = render(newValue);
        renderNodeDestructive(request, task, newChildren);
      }
      function renderContextProvider(request, task, type, props) {
        var context = type._context;
        var value = props.value;
        var children = props.children;
        var prevSnapshot;
        {
          prevSnapshot = task.context;
        }
        task.context = pushProvider(context, value);
        renderNodeDestructive(request, task, children);
        task.context = popProvider(context);
        {
          if (prevSnapshot !== task.context) {
            error2("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
          }
        }
      }
      function renderLazyComponent(request, task, lazyComponent, props, ref) {
        pushBuiltInComponentStackInDEV(task, "Lazy");
        var payload = lazyComponent._payload;
        var init2 = lazyComponent._init;
        var Component = init2(payload);
        var resolvedProps = resolveDefaultProps(Component, props);
        renderElement2(request, task, Component, resolvedProps, ref);
        popComponentStackInDEV(task);
      }
      function renderElement2(request, task, type, props, ref) {
        if (typeof type === "function") {
          if (shouldConstruct$1(type)) {
            renderClassComponent(request, task, type, props);
            return;
          } else {
            renderIndeterminateComponent(request, task, type, props);
            return;
          }
        }
        if (typeof type === "string") {
          renderHostElement(request, task, type, props);
          return;
        }
        switch (type) {
          case REACT_LEGACY_HIDDEN_TYPE:
          case REACT_DEBUG_TRACING_MODE_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_FRAGMENT_TYPE: {
            renderNodeDestructive(request, task, props.children);
            return;
          }
          case REACT_SUSPENSE_LIST_TYPE: {
            pushBuiltInComponentStackInDEV(task, "SuspenseList");
            renderNodeDestructive(request, task, props.children);
            popComponentStackInDEV(task);
            return;
          }
          case REACT_SCOPE_TYPE: {
            throw new Error("ReactDOMServer does not yet support scope components.");
          }
          case REACT_SUSPENSE_TYPE: {
            {
              renderSuspenseBoundary(request, task, props);
            }
            return;
          }
        }
        if (typeof type === "object" && type !== null) {
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE: {
              renderForwardRef(request, task, type, props, ref);
              return;
            }
            case REACT_MEMO_TYPE: {
              renderMemo(request, task, type, props, ref);
              return;
            }
            case REACT_PROVIDER_TYPE: {
              renderContextProvider(request, task, type, props);
              return;
            }
            case REACT_CONTEXT_TYPE: {
              renderContextConsumer(request, task, type, props);
              return;
            }
            case REACT_LAZY_TYPE: {
              renderLazyComponent(request, task, type, props);
              return;
            }
          }
        }
        var info = "";
        {
          if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
            info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
          }
        }
        throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (type == null ? type : typeof type) + "." + info));
      }
      function validateIterable(iterable, iteratorFn) {
        {
          if (typeof Symbol === "function" && iterable[Symbol.toStringTag] === "Generator") {
            if (!didWarnAboutGenerators) {
              error2("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers.");
            }
            didWarnAboutGenerators = true;
          }
          if (iterable.entries === iteratorFn) {
            if (!didWarnAboutMaps) {
              error2("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
            }
            didWarnAboutMaps = true;
          }
        }
      }
      function renderNodeDestructive(request, task, node) {
        {
          try {
            return renderNodeDestructiveImpl(request, task, node);
          } catch (x) {
            if (typeof x === "object" && x !== null && typeof x.then === "function")
              ;
            else {
              lastBoundaryErrorComponentStackDev = lastBoundaryErrorComponentStackDev !== null ? lastBoundaryErrorComponentStackDev : getCurrentStackInDEV();
            }
            throw x;
          }
        }
      }
      function renderNodeDestructiveImpl(request, task, node) {
        task.node = node;
        if (typeof node === "object" && node !== null) {
          switch (node.$$typeof) {
            case REACT_ELEMENT_TYPE: {
              var element = node;
              var type = element.type;
              var props = element.props;
              var ref = element.ref;
              renderElement2(request, task, type, props, ref);
              return;
            }
            case REACT_PORTAL_TYPE:
              throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
            case REACT_LAZY_TYPE: {
              var lazyNode = node;
              var payload = lazyNode._payload;
              var init2 = lazyNode._init;
              var resolvedNode;
              {
                try {
                  resolvedNode = init2(payload);
                } catch (x) {
                  if (typeof x === "object" && x !== null && typeof x.then === "function") {
                    pushBuiltInComponentStackInDEV(task, "Lazy");
                  }
                  throw x;
                }
              }
              renderNodeDestructive(request, task, resolvedNode);
              return;
            }
          }
          if (isArray(node)) {
            renderChildrenArray(request, task, node);
            return;
          }
          var iteratorFn = getIteratorFn(node);
          if (iteratorFn) {
            {
              validateIterable(node, iteratorFn);
            }
            var iterator = iteratorFn.call(node);
            if (iterator) {
              var step = iterator.next();
              if (!step.done) {
                var children = [];
                do {
                  children.push(step.value);
                  step = iterator.next();
                } while (!step.done);
                renderChildrenArray(request, task, children);
                return;
              }
              return;
            }
          }
          var childString = Object.prototype.toString.call(node);
          throw new Error("Objects are not valid as a React child (found: " + (childString === "[object Object]" ? "object with keys {" + Object.keys(node).join(", ") + "}" : childString) + "). If you meant to render a collection of children, use an array instead.");
        }
        if (typeof node === "string") {
          var segment = task.blockedSegment;
          segment.lastPushedText = pushTextInstance(task.blockedSegment.chunks, node, request.responseState, segment.lastPushedText);
          return;
        }
        if (typeof node === "number") {
          var _segment = task.blockedSegment;
          _segment.lastPushedText = pushTextInstance(task.blockedSegment.chunks, "" + node, request.responseState, _segment.lastPushedText);
          return;
        }
        {
          if (typeof node === "function") {
            error2("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
          }
        }
      }
      function renderChildrenArray(request, task, children) {
        var totalChildren = children.length;
        for (var i = 0; i < totalChildren; i++) {
          var prevTreeContext = task.treeContext;
          task.treeContext = pushTreeContext(prevTreeContext, totalChildren, i);
          try {
            renderNode(request, task, children[i]);
          } finally {
            task.treeContext = prevTreeContext;
          }
        }
      }
      function spawnNewSuspendedTask(request, task, x) {
        var segment = task.blockedSegment;
        var insertionIndex = segment.chunks.length;
        var newSegment = createPendingSegment(
          request,
          insertionIndex,
          null,
          segment.formatContext,
          segment.lastPushedText,
          true
        );
        segment.children.push(newSegment);
        segment.lastPushedText = false;
        var newTask = createTask(request, task.node, task.blockedBoundary, newSegment, task.abortSet, task.legacyContext, task.context, task.treeContext);
        {
          if (task.componentStack !== null) {
            newTask.componentStack = task.componentStack.parent;
          }
        }
        var ping = newTask.ping;
        x.then(ping, ping);
      }
      function renderNode(request, task, node) {
        var previousFormatContext = task.blockedSegment.formatContext;
        var previousLegacyContext = task.legacyContext;
        var previousContext = task.context;
        var previousComponentStack = null;
        {
          previousComponentStack = task.componentStack;
        }
        try {
          return renderNodeDestructive(request, task, node);
        } catch (x) {
          resetHooksState();
          if (typeof x === "object" && x !== null && typeof x.then === "function") {
            spawnNewSuspendedTask(request, task, x);
            task.blockedSegment.formatContext = previousFormatContext;
            task.legacyContext = previousLegacyContext;
            task.context = previousContext;
            switchContext(previousContext);
            {
              task.componentStack = previousComponentStack;
            }
            return;
          } else {
            task.blockedSegment.formatContext = previousFormatContext;
            task.legacyContext = previousLegacyContext;
            task.context = previousContext;
            switchContext(previousContext);
            {
              task.componentStack = previousComponentStack;
            }
            throw x;
          }
        }
      }
      function erroredTask(request, boundary, segment, error3) {
        var errorDigest = logRecoverableError(request, error3);
        if (boundary === null) {
          fatalError(request, error3);
        } else {
          boundary.pendingTasks--;
          if (!boundary.forceClientRender) {
            boundary.forceClientRender = true;
            boundary.errorDigest = errorDigest;
            {
              captureBoundaryErrorDetailsDev(boundary, error3);
            }
            if (boundary.parentFlushed) {
              request.clientRenderedBoundaries.push(boundary);
            }
          }
        }
        request.allPendingTasks--;
        if (request.allPendingTasks === 0) {
          var onAllReady = request.onAllReady;
          onAllReady();
        }
      }
      function abortTaskSoft(task) {
        var request = this;
        var boundary = task.blockedBoundary;
        var segment = task.blockedSegment;
        segment.status = ABORTED;
        finishedTask(request, boundary, segment);
      }
      function abortTask(task, request, reason) {
        var boundary = task.blockedBoundary;
        var segment = task.blockedSegment;
        segment.status = ABORTED;
        if (boundary === null) {
          request.allPendingTasks--;
          if (request.status !== CLOSED) {
            request.status = CLOSED;
            if (request.destination !== null) {
              close(request.destination);
            }
          }
        } else {
          boundary.pendingTasks--;
          if (!boundary.forceClientRender) {
            boundary.forceClientRender = true;
            var _error = reason === void 0 ? new Error("The render was aborted by the server without a reason.") : reason;
            boundary.errorDigest = request.onError(_error);
            {
              var errorPrefix = "The server did not finish this Suspense boundary: ";
              if (_error && typeof _error.message === "string") {
                _error = errorPrefix + _error.message;
              } else {
                _error = errorPrefix + String(_error);
              }
              var previousTaskInDev = currentTaskInDEV;
              currentTaskInDEV = task;
              try {
                captureBoundaryErrorDetailsDev(boundary, _error);
              } finally {
                currentTaskInDEV = previousTaskInDev;
              }
            }
            if (boundary.parentFlushed) {
              request.clientRenderedBoundaries.push(boundary);
            }
          }
          boundary.fallbackAbortableTasks.forEach(function(fallbackTask) {
            return abortTask(fallbackTask, request, reason);
          });
          boundary.fallbackAbortableTasks.clear();
          request.allPendingTasks--;
          if (request.allPendingTasks === 0) {
            var onAllReady = request.onAllReady;
            onAllReady();
          }
        }
      }
      function queueCompletedSegment(boundary, segment) {
        if (segment.chunks.length === 0 && segment.children.length === 1 && segment.children[0].boundary === null) {
          var childSegment = segment.children[0];
          childSegment.id = segment.id;
          childSegment.parentFlushed = true;
          if (childSegment.status === COMPLETED) {
            queueCompletedSegment(boundary, childSegment);
          }
        } else {
          var completedSegments = boundary.completedSegments;
          completedSegments.push(segment);
        }
      }
      function finishedTask(request, boundary, segment) {
        if (boundary === null) {
          if (segment.parentFlushed) {
            if (request.completedRootSegment !== null) {
              throw new Error("There can only be one root segment. This is a bug in React.");
            }
            request.completedRootSegment = segment;
          }
          request.pendingRootTasks--;
          if (request.pendingRootTasks === 0) {
            request.onShellError = noop$1;
            var onShellReady = request.onShellReady;
            onShellReady();
          }
        } else {
          boundary.pendingTasks--;
          if (boundary.forceClientRender)
            ;
          else if (boundary.pendingTasks === 0) {
            if (segment.parentFlushed) {
              if (segment.status === COMPLETED) {
                queueCompletedSegment(boundary, segment);
              }
            }
            if (boundary.parentFlushed) {
              request.completedBoundaries.push(boundary);
            }
            boundary.fallbackAbortableTasks.forEach(abortTaskSoft, request);
            boundary.fallbackAbortableTasks.clear();
          } else {
            if (segment.parentFlushed) {
              if (segment.status === COMPLETED) {
                queueCompletedSegment(boundary, segment);
                var completedSegments = boundary.completedSegments;
                if (completedSegments.length === 1) {
                  if (boundary.parentFlushed) {
                    request.partialBoundaries.push(boundary);
                  }
                }
              }
            }
          }
        }
        request.allPendingTasks--;
        if (request.allPendingTasks === 0) {
          var onAllReady = request.onAllReady;
          onAllReady();
        }
      }
      function retryTask(request, task) {
        var segment = task.blockedSegment;
        if (segment.status !== PENDING) {
          return;
        }
        switchContext(task.context);
        var prevTaskInDEV = null;
        {
          prevTaskInDEV = currentTaskInDEV;
          currentTaskInDEV = task;
        }
        try {
          renderNodeDestructive(request, task, task.node);
          pushSegmentFinale(segment.chunks, request.responseState, segment.lastPushedText, segment.textEmbedded);
          task.abortSet.delete(task);
          segment.status = COMPLETED;
          finishedTask(request, task.blockedBoundary, segment);
        } catch (x) {
          resetHooksState();
          if (typeof x === "object" && x !== null && typeof x.then === "function") {
            var ping = task.ping;
            x.then(ping, ping);
          } else {
            task.abortSet.delete(task);
            segment.status = ERRORED;
            erroredTask(request, task.blockedBoundary, segment, x);
          }
        } finally {
          {
            currentTaskInDEV = prevTaskInDEV;
          }
        }
      }
      function performWork(request) {
        if (request.status === CLOSED) {
          return;
        }
        var prevContext = getActiveContext();
        var prevDispatcher = ReactCurrentDispatcher$1.current;
        ReactCurrentDispatcher$1.current = Dispatcher;
        var prevGetCurrentStackImpl;
        {
          prevGetCurrentStackImpl = ReactDebugCurrentFrame$1.getCurrentStack;
          ReactDebugCurrentFrame$1.getCurrentStack = getCurrentStackInDEV;
        }
        var prevResponseState = currentResponseState;
        setCurrentResponseState(request.responseState);
        try {
          var pingedTasks = request.pingedTasks;
          var i;
          for (i = 0; i < pingedTasks.length; i++) {
            var task = pingedTasks[i];
            retryTask(request, task);
          }
          pingedTasks.splice(0, i);
          if (request.destination !== null) {
            flushCompletedQueues(request, request.destination);
          }
        } catch (error3) {
          logRecoverableError(request, error3);
          fatalError(request, error3);
        } finally {
          setCurrentResponseState(prevResponseState);
          ReactCurrentDispatcher$1.current = prevDispatcher;
          {
            ReactDebugCurrentFrame$1.getCurrentStack = prevGetCurrentStackImpl;
          }
          if (prevDispatcher === Dispatcher) {
            switchContext(prevContext);
          }
        }
      }
      function flushSubtree(request, destination, segment) {
        segment.parentFlushed = true;
        switch (segment.status) {
          case PENDING: {
            var segmentID = segment.id = request.nextSegmentId++;
            segment.lastPushedText = false;
            segment.textEmbedded = false;
            return writePlaceholder(destination, request.responseState, segmentID);
          }
          case COMPLETED: {
            segment.status = FLUSHED;
            var r = true;
            var chunks = segment.chunks;
            var chunkIdx = 0;
            var children = segment.children;
            for (var childIdx = 0; childIdx < children.length; childIdx++) {
              var nextChild = children[childIdx];
              for (; chunkIdx < nextChild.index; chunkIdx++) {
                writeChunk(destination, chunks[chunkIdx]);
              }
              r = flushSegment(request, destination, nextChild);
            }
            for (; chunkIdx < chunks.length - 1; chunkIdx++) {
              writeChunk(destination, chunks[chunkIdx]);
            }
            if (chunkIdx < chunks.length) {
              r = writeChunkAndReturn(destination, chunks[chunkIdx]);
            }
            return r;
          }
          default: {
            throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
          }
        }
      }
      function flushSegment(request, destination, segment) {
        var boundary = segment.boundary;
        if (boundary === null) {
          return flushSubtree(request, destination, segment);
        }
        boundary.parentFlushed = true;
        if (boundary.forceClientRender) {
          writeStartClientRenderedSuspenseBoundary(destination, request.responseState, boundary.errorDigest, boundary.errorMessage, boundary.errorComponentStack);
          flushSubtree(request, destination, segment);
          return writeEndClientRenderedSuspenseBoundary(destination, request.responseState);
        } else if (boundary.pendingTasks > 0) {
          boundary.rootSegmentID = request.nextSegmentId++;
          if (boundary.completedSegments.length > 0) {
            request.partialBoundaries.push(boundary);
          }
          var id = boundary.id = assignSuspenseBoundaryID(request.responseState);
          writeStartPendingSuspenseBoundary(destination, request.responseState, id);
          flushSubtree(request, destination, segment);
          return writeEndPendingSuspenseBoundary(destination, request.responseState);
        } else if (boundary.byteSize > request.progressiveChunkSize) {
          boundary.rootSegmentID = request.nextSegmentId++;
          request.completedBoundaries.push(boundary);
          writeStartPendingSuspenseBoundary(destination, request.responseState, boundary.id);
          flushSubtree(request, destination, segment);
          return writeEndPendingSuspenseBoundary(destination, request.responseState);
        } else {
          writeStartCompletedSuspenseBoundary(destination, request.responseState);
          var completedSegments = boundary.completedSegments;
          if (completedSegments.length !== 1) {
            throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
          }
          var contentSegment = completedSegments[0];
          flushSegment(request, destination, contentSegment);
          return writeEndCompletedSuspenseBoundary(destination, request.responseState);
        }
      }
      function flushClientRenderedBoundary(request, destination, boundary) {
        return writeClientRenderBoundaryInstruction(destination, request.responseState, boundary.id, boundary.errorDigest, boundary.errorMessage, boundary.errorComponentStack);
      }
      function flushSegmentContainer(request, destination, segment) {
        writeStartSegment(destination, request.responseState, segment.formatContext, segment.id);
        flushSegment(request, destination, segment);
        return writeEndSegment(destination, segment.formatContext);
      }
      function flushCompletedBoundary(request, destination, boundary) {
        var completedSegments = boundary.completedSegments;
        var i = 0;
        for (; i < completedSegments.length; i++) {
          var segment = completedSegments[i];
          flushPartiallyCompletedSegment(request, destination, boundary, segment);
        }
        completedSegments.length = 0;
        return writeCompletedBoundaryInstruction(destination, request.responseState, boundary.id, boundary.rootSegmentID);
      }
      function flushPartialBoundary(request, destination, boundary) {
        var completedSegments = boundary.completedSegments;
        var i = 0;
        for (; i < completedSegments.length; i++) {
          var segment = completedSegments[i];
          if (!flushPartiallyCompletedSegment(request, destination, boundary, segment)) {
            i++;
            completedSegments.splice(0, i);
            return false;
          }
        }
        completedSegments.splice(0, i);
        return true;
      }
      function flushPartiallyCompletedSegment(request, destination, boundary, segment) {
        if (segment.status === FLUSHED) {
          return true;
        }
        var segmentID = segment.id;
        if (segmentID === -1) {
          var rootSegmentID = segment.id = boundary.rootSegmentID;
          if (rootSegmentID === -1) {
            throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
          }
          return flushSegmentContainer(request, destination, segment);
        } else {
          flushSegmentContainer(request, destination, segment);
          return writeCompletedSegmentInstruction(destination, request.responseState, segmentID);
        }
      }
      function flushCompletedQueues(request, destination) {
        beginWriting();
        try {
          var completedRootSegment = request.completedRootSegment;
          if (completedRootSegment !== null && request.pendingRootTasks === 0) {
            flushSegment(request, destination, completedRootSegment);
            request.completedRootSegment = null;
            writeCompletedRoot(destination, request.responseState);
          }
          var clientRenderedBoundaries = request.clientRenderedBoundaries;
          var i;
          for (i = 0; i < clientRenderedBoundaries.length; i++) {
            var boundary = clientRenderedBoundaries[i];
            if (!flushClientRenderedBoundary(request, destination, boundary))
              ;
          }
          clientRenderedBoundaries.splice(0, i);
          var completedBoundaries = request.completedBoundaries;
          for (i = 0; i < completedBoundaries.length; i++) {
            var _boundary = completedBoundaries[i];
            if (!flushCompletedBoundary(request, destination, _boundary))
              ;
          }
          completedBoundaries.splice(0, i);
          completeWriting(destination);
          beginWriting(destination);
          var partialBoundaries = request.partialBoundaries;
          for (i = 0; i < partialBoundaries.length; i++) {
            var _boundary2 = partialBoundaries[i];
            if (!flushPartialBoundary(request, destination, _boundary2)) {
              request.destination = null;
              i++;
              partialBoundaries.splice(0, i);
              return;
            }
          }
          partialBoundaries.splice(0, i);
          var largeBoundaries = request.completedBoundaries;
          for (i = 0; i < largeBoundaries.length; i++) {
            var _boundary3 = largeBoundaries[i];
            if (!flushCompletedBoundary(request, destination, _boundary3))
              ;
          }
          largeBoundaries.splice(0, i);
        } finally {
          completeWriting(destination);
          if (request.allPendingTasks === 0 && request.pingedTasks.length === 0 && request.clientRenderedBoundaries.length === 0 && request.completedBoundaries.length === 0) {
            {
              if (request.abortableTasks.size !== 0) {
                error2("There was still abortable task at the root when we closed. This is a bug in React.");
              }
            }
            close(destination);
          }
        }
      }
      function startWork(request) {
        scheduleWork(function() {
          return performWork(request);
        });
      }
      function startFlowing(request, destination) {
        if (request.status === CLOSING) {
          request.status = CLOSED;
          closeWithError(destination, request.fatalError);
          return;
        }
        if (request.status === CLOSED) {
          return;
        }
        if (request.destination !== null) {
          return;
        }
        request.destination = destination;
        try {
          flushCompletedQueues(request, destination);
        } catch (error3) {
          logRecoverableError(request, error3);
          fatalError(request, error3);
        }
      }
      function abort(request, reason) {
        try {
          var abortableTasks = request.abortableTasks;
          abortableTasks.forEach(function(task) {
            return abortTask(task, request, reason);
          });
          abortableTasks.clear();
          if (request.destination !== null) {
            flushCompletedQueues(request, request.destination);
          }
        } catch (error3) {
          logRecoverableError(request, error3);
          fatalError(request, error3);
        }
      }
      function renderToReadableStream(children, options) {
        return new Promise(function(resolve2, reject) {
          var onFatalError;
          var onAllReady;
          var allReady = new Promise(function(res, rej) {
            onAllReady = res;
            onFatalError = rej;
          });
          function onShellReady() {
            var stream = new ReadableStream(
              {
                type: "bytes",
                pull: function(controller) {
                  startFlowing(request, controller);
                },
                cancel: function(reason) {
                  abort(request);
                }
              },
              {
                highWaterMark: 0
              }
            );
            stream.allReady = allReady;
            resolve2(stream);
          }
          function onShellError(error3) {
            allReady.catch(function() {
            });
            reject(error3);
          }
          var request = createRequest(children, createResponseState(options ? options.identifierPrefix : void 0, options ? options.nonce : void 0, options ? options.bootstrapScriptContent : void 0, options ? options.bootstrapScripts : void 0, options ? options.bootstrapModules : void 0), createRootFormatContext(options ? options.namespaceURI : void 0), options ? options.progressiveChunkSize : void 0, options ? options.onError : void 0, onAllReady, onShellReady, onShellError, onFatalError);
          if (options && options.signal) {
            var signal = options.signal;
            var listener = function() {
              abort(request, signal.reason);
              signal.removeEventListener("abort", listener);
            };
            signal.addEventListener("abort", listener);
          }
          startWork(request);
        });
      }
      reactDomServer_browser_development.renderToReadableStream = renderToReadableStream;
      reactDomServer_browser_development.version = ReactVersion;
    })();
  }
  return reactDomServer_browser_development;
}
var l;
var s;
if (false) {
  l = requireReactDomServerLegacy_browser_production_min();
  s = requireReactDomServer_browser_production_min();
} else {
  l = requireReactDomServerLegacy_browser_development();
  s = requireReactDomServer_browser_development();
}
server_browser.version = l.version;
server_browser.renderToString = l.renderToString;
server_browser.renderToStaticMarkup = l.renderToStaticMarkup;
server_browser.renderToNodeStream = l.renderToNodeStream;
server_browser.renderToStaticNodeStream = l.renderToStaticNodeStream;
server_browser.renderToReadableStream = s.renderToReadableStream;
var StaticHtml = ({ value, name }) => {
  if (!value)
    return null;
  return react.exports.createElement("astro-slot", {
    name,
    suppressHydrationWarning: true,
    dangerouslySetInnerHTML: { __html: value }
  });
};
StaticHtml.shouldComponentUpdate = () => false;
var slotName$1 = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
var reactTypeof = Symbol.for("react.element");
function errorIsComingFromPreactComponent(err) {
  return err.message && (err.message.startsWith("Cannot read property '__H'") || err.message.includes("(reading '__H')"));
}
async function check$1(Component, props, children) {
  if (typeof Component === "object") {
    const $$typeof = Component["$$typeof"];
    return $$typeof && $$typeof.toString().slice("Symbol(".length).startsWith("react");
  }
  if (typeof Component !== "function")
    return false;
  if (Component.prototype != null && typeof Component.prototype.render === "function") {
    return React.Component.isPrototypeOf(Component) || React.PureComponent.isPrototypeOf(Component);
  }
  let error2 = null;
  let isReactComponent = false;
  function Tester(...args) {
    try {
      const vnode = Component(...args);
      if (vnode && vnode["$$typeof"] === reactTypeof) {
        isReactComponent = true;
      }
    } catch (err) {
      if (!errorIsComingFromPreactComponent(err)) {
        error2 = err;
      }
    }
    return React.createElement("div");
  }
  await renderToStaticMarkup$1(Tester, props, children, {});
  if (error2) {
    throw error2;
  }
  return isReactComponent;
}
async function getNodeWritable() {
  let nodeStreamBuiltinModuleName = "stream";
  let { Writable } = await import(
    /* @vite-ignore */
    nodeStreamBuiltinModuleName
  );
  return Writable;
}
async function renderToStaticMarkup$1(Component, props, { default: children, ...slotted }, metadata) {
  delete props["class"];
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName$1(key);
    slots[name] = React.createElement(StaticHtml, { value, name });
  }
  const newProps = {
    ...props,
    ...slots
  };
  if (children != null) {
    newProps.children = React.createElement(StaticHtml, { value: children });
  }
  const vnode = React.createElement(Component, newProps);
  let html2;
  if (metadata && metadata.hydrate) {
    html2 = server_browser.renderToString(vnode);
    if ("renderToReadableStream" in server_browser) {
      html2 = await renderToReadableStreamAsync(vnode);
    } else {
      html2 = await renderToPipeableStreamAsync(vnode);
    }
  } else {
    if ("renderToReadableStream" in server_browser) {
      html2 = await renderToReadableStreamAsync(vnode);
    } else {
      html2 = await renderToStaticNodeStreamAsync(vnode);
    }
  }
  return { html: html2 };
}
async function renderToPipeableStreamAsync(vnode) {
  const Writable = await getNodeWritable();
  let html2 = "";
  return new Promise((resolve2, reject) => {
    let error2 = void 0;
    let stream = server_browser.renderToPipeableStream(vnode, {
      onError(err) {
        error2 = err;
        reject(error2);
      },
      onAllReady() {
        stream.pipe(
          new Writable({
            write(chunk, _encoding, callback) {
              html2 += chunk.toString("utf-8");
              callback();
            },
            destroy() {
              resolve2(html2);
            }
          })
        );
      }
    });
  });
}
async function renderToStaticNodeStreamAsync(vnode) {
  const Writable = await getNodeWritable();
  let html2 = "";
  return new Promise((resolve2, reject) => {
    let stream = server_browser.renderToStaticNodeStream(vnode);
    stream.on("error", (err) => {
      reject(err);
    });
    stream.pipe(
      new Writable({
        write(chunk, _encoding, callback) {
          html2 += chunk.toString("utf-8");
          callback();
        },
        destroy() {
          resolve2(html2);
        }
      })
    );
  });
}
async function readResult(stream) {
  const reader = stream.getReader();
  let result = "";
  const decoder2 = new TextDecoder("utf-8");
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      if (value) {
        result += decoder2.decode(value);
      } else {
        decoder2.decode(new Uint8Array());
      }
      return result;
    }
    result += decoder2.decode(value, { stream: true });
  }
}
async function renderToReadableStreamAsync(vnode) {
  return await readResult(await server_browser.renderToReadableStream(vnode));
}
var _renderer1 = {
  check: check$1,
  renderToStaticMarkup: renderToStaticMarkup$1
};
var slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
async function check(Component, props, { default: children = null, ...slotted } = {}) {
  if (typeof Component !== "function")
    return false;
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  try {
    const result = await Component({ ...props, ...slots, children });
    return result[AstroJSX];
  } catch (e) {
  }
  return false;
}
async function renderToStaticMarkup(Component, props = {}, { default: children = null, ...slotted } = {}) {
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  const { result } = this;
  const html2 = await renderJSX(result, createVNode(Component, { ...props, ...slots, children }));
  return { html: html2 };
}
var server_default = {
  check,
  renderToStaticMarkup
};
var $$metadata$5 = createMetadata("/Users/arif/Projects/notioncommerce/narrow-sea/src/components/BaseHead.astro", { modules: [], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$6 = createAstro("/Users/arif/Projects/notioncommerce/narrow-sea/src/components/BaseHead.astro", "https://notioncommerce.com/", "file:///Users/arif/Projects/notioncommerce/narrow-sea/");
var $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, description, image = "/placeholder-social.jpg" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="icon" type="image/svg+xml" href="../../public/favicon.ico">
<meta name="generator"${addAttribute(Astro2.generator, "content")}>

<!-- Primary Meta Tags -->
<title>${title}</title>
<meta name="title"${addAttribute(title, "content")}>
<meta name="description"${addAttribute(description, "content")}>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url"${addAttribute(Astro2.url, "content")}>
<meta property="og:title"${addAttribute(title, "content")}>
<meta property="og:description"${addAttribute(description, "content")}>
<meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}>

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url"${addAttribute(Astro2.url, "content")}>
<meta property="twitter:title"${addAttribute(title, "content")}>
<meta property="twitter:description"${addAttribute(description, "content")}>
<meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>
`;
});
var $$file$5 = "/Users/arif/Projects/notioncommerce/narrow-sea/src/components/BaseHead.astro";
var $$url$5 = void 0;
var $$module1$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata$5,
  default: $$BaseHead,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: "Module" }));
var $$metadata$4 = createMetadata("/Users/arif/Projects/notioncommerce/narrow-sea/src/components/HeaderLink.astro", { modules: [], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$5 = createAstro("/Users/arif/Projects/notioncommerce/narrow-sea/src/components/HeaderLink.astro", "https://notioncommerce.com/", "file:///Users/arif/Projects/notioncommerce/narrow-sea/");
var $$HeaderLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const isActive = href === Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)}>
	${renderSlot($$result, $$slots["default"])}
</a>`;
});
var $$file$4 = "/Users/arif/Projects/notioncommerce/narrow-sea/src/components/HeaderLink.astro";
var $$url$4 = void 0;
var $$module1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata$4,
  default: $$HeaderLink,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: "Module" }));
var jsxRuntime = { exports: {} };
var reactJsxRuntime_development = {};
var hasRequiredReactJsxRuntime_development;
function requireReactJsxRuntime_development() {
  if (hasRequiredReactJsxRuntime_development)
    return reactJsxRuntime_development;
  hasRequiredReactJsxRuntime_development = 1;
  if (true) {
    (function() {
      var React2 = react.exports;
      var REACT_ELEMENT_TYPE = Symbol.for("react.element");
      var REACT_PORTAL_TYPE = Symbol.for("react.portal");
      var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
      var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
      var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
      var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
      var REACT_CONTEXT_TYPE = Symbol.for("react.context");
      var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
      var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
      var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
      var REACT_MEMO_TYPE = Symbol.for("react.memo");
      var REACT_LAZY_TYPE = Symbol.for("react.lazy");
      var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
      var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== "object") {
          return null;
        }
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === "function") {
          return maybeIterator;
        }
        return null;
      }
      var ReactSharedInternals = React2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function error2(format2) {
        {
          {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning("error", format2, args);
          }
        }
      }
      function printWarning(level, format2, args) {
        {
          var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
          var stack = ReactDebugCurrentFrame2.getStackAddendum();
          if (stack !== "") {
            format2 += "%s";
            args = args.concat([stack]);
          }
          var argsWithFormat = args.map(function(item) {
            return String(item);
          });
          argsWithFormat.unshift("Warning: " + format2);
          Function.prototype.apply.call(console[level], console, argsWithFormat);
        }
      }
      var enableScopeAPI = false;
      var enableCacheElement = false;
      var enableTransitionTracing = false;
      var enableLegacyHidden = false;
      var enableDebugTracing = false;
      var REACT_MODULE_REFERENCE;
      {
        REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
      }
      function isValidElementType(type) {
        if (typeof type === "string" || typeof type === "function") {
          return true;
        }
        if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
          return true;
        }
        if (typeof type === "object" && type !== null) {
          if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
            return true;
          }
        }
        return false;
      }
      function getWrappedName(outerType, innerType, wrapperName) {
        var displayName = outerType.displayName;
        if (displayName) {
          return displayName;
        }
        var functionName = innerType.displayName || innerType.name || "";
        return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
      }
      function getContextName(type) {
        return type.displayName || "Context";
      }
      function getComponentNameFromType(type) {
        if (type == null) {
          return null;
        }
        {
          if (typeof type.tag === "number") {
            error2("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
          }
        }
        if (typeof type === "function") {
          return type.displayName || type.name || null;
        }
        if (typeof type === "string") {
          return type;
        }
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
        }
        if (typeof type === "object") {
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              var context = type;
              return getContextName(context) + ".Consumer";
            case REACT_PROVIDER_TYPE:
              var provider = type;
              return getContextName(provider._context) + ".Provider";
            case REACT_FORWARD_REF_TYPE:
              return getWrappedName(type, type.render, "ForwardRef");
            case REACT_MEMO_TYPE:
              var outerName = type.displayName || null;
              if (outerName !== null) {
                return outerName;
              }
              return getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE: {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init2 = lazyComponent._init;
              try {
                return getComponentNameFromType(init2(payload));
              } catch (x) {
                return null;
              }
            }
          }
        }
        return null;
      }
      var assign = Object.assign;
      var disabledDepth = 0;
      var prevLog;
      var prevInfo;
      var prevWarn;
      var prevError;
      var prevGroup;
      var prevGroupCollapsed;
      var prevGroupEnd;
      function disabledLog() {
      }
      disabledLog.__reactDisabledLog = true;
      function disableLogs() {
        {
          if (disabledDepth === 0) {
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd;
            var props = {
              configurable: true,
              enumerable: true,
              value: disabledLog,
              writable: true
            };
            Object.defineProperties(console, {
              info: props,
              log: props,
              warn: props,
              error: props,
              group: props,
              groupCollapsed: props,
              groupEnd: props
            });
          }
          disabledDepth++;
        }
      }
      function reenableLogs() {
        {
          disabledDepth--;
          if (disabledDepth === 0) {
            var props = {
              configurable: true,
              enumerable: true,
              writable: true
            };
            Object.defineProperties(console, {
              log: assign({}, props, {
                value: prevLog
              }),
              info: assign({}, props, {
                value: prevInfo
              }),
              warn: assign({}, props, {
                value: prevWarn
              }),
              error: assign({}, props, {
                value: prevError
              }),
              group: assign({}, props, {
                value: prevGroup
              }),
              groupCollapsed: assign({}, props, {
                value: prevGroupCollapsed
              }),
              groupEnd: assign({}, props, {
                value: prevGroupEnd
              })
            });
          }
          if (disabledDepth < 0) {
            error2("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
          }
        }
      }
      var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
      var prefix;
      function describeBuiltInComponentFrame(name, source, ownerFn) {
        {
          if (prefix === void 0) {
            try {
              throw Error();
            } catch (x) {
              var match = x.stack.trim().match(/\n( *(at )?)/);
              prefix = match && match[1] || "";
            }
          }
          return "\n" + prefix + name;
        }
      }
      var reentry = false;
      var componentFrameCache;
      {
        var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
        componentFrameCache = new PossiblyWeakMap();
      }
      function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) {
          return "";
        }
        {
          var frame = componentFrameCache.get(fn);
          if (frame !== void 0) {
            return frame;
          }
        }
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher;
        {
          previousDispatcher = ReactCurrentDispatcher.current;
          ReactCurrentDispatcher.current = null;
          disableLogs();
        }
        try {
          if (construct) {
            var Fake = function() {
              throw Error();
            };
            Object.defineProperty(Fake.prototype, "props", {
              set: function() {
                throw Error();
              }
            });
            if (typeof Reflect === "object" && Reflect.construct) {
              try {
                Reflect.construct(Fake, []);
              } catch (x) {
                control = x;
              }
              Reflect.construct(fn, [], Fake);
            } else {
              try {
                Fake.call();
              } catch (x) {
                control = x;
              }
              fn.call(Fake.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x) {
              control = x;
            }
            fn();
          }
        } catch (sample) {
          if (sample && control && typeof sample.stack === "string") {
            var sampleLines = sample.stack.split("\n");
            var controlLines = control.stack.split("\n");
            var s2 = sampleLines.length - 1;
            var c = controlLines.length - 1;
            while (s2 >= 1 && c >= 0 && sampleLines[s2] !== controlLines[c]) {
              c--;
            }
            for (; s2 >= 1 && c >= 0; s2--, c--) {
              if (sampleLines[s2] !== controlLines[c]) {
                if (s2 !== 1 || c !== 1) {
                  do {
                    s2--;
                    c--;
                    if (c < 0 || sampleLines[s2] !== controlLines[c]) {
                      var _frame = "\n" + sampleLines[s2].replace(" at new ", " at ");
                      if (fn.displayName && _frame.includes("<anonymous>")) {
                        _frame = _frame.replace("<anonymous>", fn.displayName);
                      }
                      {
                        if (typeof fn === "function") {
                          componentFrameCache.set(fn, _frame);
                        }
                      }
                      return _frame;
                    }
                  } while (s2 >= 1 && c >= 0);
                }
                break;
              }
            }
          }
        } finally {
          reentry = false;
          {
            ReactCurrentDispatcher.current = previousDispatcher;
            reenableLogs();
          }
          Error.prepareStackTrace = previousPrepareStackTrace;
        }
        var name = fn ? fn.displayName || fn.name : "";
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
        {
          if (typeof fn === "function") {
            componentFrameCache.set(fn, syntheticFrame);
          }
        }
        return syntheticFrame;
      }
      function describeFunctionComponentFrame(fn, source, ownerFn) {
        {
          return describeNativeComponentFrame(fn, false);
        }
      }
      function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
      }
      function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) {
          return "";
        }
        if (typeof type === "function") {
          {
            return describeNativeComponentFrame(type, shouldConstruct(type));
          }
        }
        if (typeof type === "string") {
          return describeBuiltInComponentFrame(type);
        }
        switch (type) {
          case REACT_SUSPENSE_TYPE:
            return describeBuiltInComponentFrame("Suspense");
          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame("SuspenseList");
        }
        if (typeof type === "object") {
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
              return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_LAZY_TYPE: {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init2 = lazyComponent._init;
              try {
                return describeUnknownElementTypeFrameInDEV(init2(payload), source, ownerFn);
              } catch (x) {
              }
            }
          }
        }
        return "";
      }
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var loggedTypeFailures = {};
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame.setExtraStackFrame(stack);
          } else {
            ReactDebugCurrentFrame.setExtraStackFrame(null);
          }
        }
      }
      function checkPropTypes(typeSpecs, values, location, componentName, element) {
        {
          var has = Function.call.bind(hasOwnProperty);
          for (var typeSpecName in typeSpecs) {
            if (has(typeSpecs, typeSpecName)) {
              var error$1 = void 0;
              try {
                if (typeof typeSpecs[typeSpecName] !== "function") {
                  var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  err.name = "Invariant Violation";
                  throw err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ex) {
                error$1 = ex;
              }
              if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error2("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                setCurrentlyValidatingElement(null);
              }
              if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);
                error2("Failed %s type: %s", location, error$1.message);
                setCurrentlyValidatingElement(null);
              }
            }
          }
        }
      }
      var isArrayImpl = Array.isArray;
      function isArray(a) {
        return isArrayImpl(a);
      }
      function typeName(value) {
        {
          var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
          var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          return type;
        }
      }
      function willCoercionThrow(value) {
        {
          try {
            testStringCoercion(value);
            return false;
          } catch (e) {
            return true;
          }
        }
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        {
          if (willCoercionThrow(value)) {
            error2("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
            return testStringCoercion(value);
          }
        }
      }
      var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
      var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };
      var specialPropKeyWarningShown;
      var specialPropRefWarningShown;
      var didWarnAboutStringRefs;
      {
        didWarnAboutStringRefs = {};
      }
      function hasValidRef(config) {
        {
          if (hasOwnProperty.call(config, "ref")) {
            var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.ref !== void 0;
      }
      function hasValidKey(config) {
        {
          if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.key !== void 0;
      }
      function warnIfStringRefCannotBeAutoConverted(config, self) {
        {
          if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
            var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (!didWarnAboutStringRefs[componentName]) {
              error2('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
              didWarnAboutStringRefs[componentName] = true;
            }
          }
        }
      }
      function defineKeyPropWarningGetter(props, displayName) {
        {
          var warnAboutAccessingKey = function() {
            if (!specialPropKeyWarningShown) {
              specialPropKeyWarningShown = true;
              error2("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
      }
      function defineRefPropWarningGetter(props, displayName) {
        {
          var warnAboutAccessingRef = function() {
            if (!specialPropRefWarningShown) {
              specialPropRefWarningShown = true;
              error2("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
      }
      var ReactElement = function(type, key, ref, self, source, owner, props) {
        var element = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          ref,
          props,
          _owner: owner
        };
        {
          element._store = {};
          Object.defineProperty(element._store, "validated", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
          });
          Object.defineProperty(element, "_self", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
          });
          Object.defineProperty(element, "_source", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
          });
          if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
          }
        }
        return element;
      };
      function jsxDEV(type, config, maybeKey, source, self) {
        {
          var propName2;
          var props = {};
          var key = null;
          var ref = null;
          if (maybeKey !== void 0) {
            {
              checkKeyStringCoercion(maybeKey);
            }
            key = "" + maybeKey;
          }
          if (hasValidKey(config)) {
            {
              checkKeyStringCoercion(config.key);
            }
            key = "" + config.key;
          }
          if (hasValidRef(config)) {
            ref = config.ref;
            warnIfStringRefCannotBeAutoConverted(config, self);
          }
          for (propName2 in config) {
            if (hasOwnProperty.call(config, propName2) && !RESERVED_PROPS.hasOwnProperty(propName2)) {
              props[propName2] = config[propName2];
            }
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName2 in defaultProps) {
              if (props[propName2] === void 0) {
                props[propName2] = defaultProps[propName2];
              }
            }
          }
          if (key || ref) {
            var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
            if (key) {
              defineKeyPropWarningGetter(props, displayName);
            }
            if (ref) {
              defineRefPropWarningGetter(props, displayName);
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
      }
      var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
      var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement$1(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
          } else {
            ReactDebugCurrentFrame$1.setExtraStackFrame(null);
          }
        }
      }
      var propTypesMisspellWarningShown;
      {
        propTypesMisspellWarningShown = false;
      }
      function isValidElement(object) {
        {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
      }
      function getDeclarationErrorAddendum() {
        {
          if (ReactCurrentOwner$1.current) {
            var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
      }
      function getSourceInfoErrorAddendum(source) {
        {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
      }
      var ownerHasKeyUseWarning = {};
      function getCurrentComponentErrorInfo(parentType) {
        {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
      }
      function validateExplicitKey(element, parentType) {
        {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          setCurrentlyValidatingElement$1(element);
          error2('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
          setCurrentlyValidatingElement$1(null);
        }
      }
      function validateChildKeys(node, parentType) {
        {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
      }
      function validatePropTypes(element) {
        {
          var type = element.type;
          if (type === null || type === void 0 || typeof type === "string") {
            return;
          }
          var propTypes;
          if (typeof type === "function") {
            propTypes = type.propTypes;
          } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
            propTypes = type.propTypes;
          } else {
            return;
          }
          if (propTypes) {
            var name = getComponentNameFromType(type);
            checkPropTypes(propTypes, element.props, "prop", name, element);
          } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true;
            var _name = getComponentNameFromType(type);
            error2("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
          }
          if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
            error2("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
          }
        }
      }
      function validateFragmentProps(fragment) {
        {
          var keys = Object.keys(fragment.props);
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (key !== "children" && key !== "key") {
              setCurrentlyValidatingElement$1(fragment);
              error2("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
              setCurrentlyValidatingElement$1(null);
              break;
            }
          }
          if (fragment.ref !== null) {
            setCurrentlyValidatingElement$1(fragment);
            error2("Invalid attribute `ref` supplied to `React.Fragment`.");
            setCurrentlyValidatingElement$1(null);
          }
        }
      }
      function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
        {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendum(source);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            error2("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
          }
          var element = jsxDEV(type, props, key, source, self);
          if (element == null) {
            return element;
          }
          if (validType) {
            var children = props.children;
            if (children !== void 0) {
              if (isStaticChildren) {
                if (isArray(children)) {
                  for (var i = 0; i < children.length; i++) {
                    validateChildKeys(children[i], type);
                  }
                  if (Object.freeze) {
                    Object.freeze(children);
                  }
                } else {
                  error2("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                }
              } else {
                validateChildKeys(children, type);
              }
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
      }
      function jsxWithValidationStatic(type, props, key) {
        {
          return jsxWithValidation(type, props, key, true);
        }
      }
      function jsxWithValidationDynamic(type, props, key) {
        {
          return jsxWithValidation(type, props, key, false);
        }
      }
      var jsx = jsxWithValidationDynamic;
      var jsxs = jsxWithValidationStatic;
      reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
      reactJsxRuntime_development.jsx = jsx;
      reactJsxRuntime_development.jsxs = jsxs;
    })();
  }
  return reactJsxRuntime_development;
}
(function(module) {
  if (false) {
    module.exports = requireReactJsxRuntime_production_min();
  } else {
    module.exports = requireReactJsxRuntime_development();
  }
})(jsxRuntime);
function MobileNav() {
  const [viewNav, setViewNav] = react.exports.useState(false);
  return /* @__PURE__ */ jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.exports.jsx("span", {
      className: "flex justify-end",
      children: viewNav ? /* @__PURE__ */ jsxRuntime.exports.jsxs("svg", {
        onClick: (prev) => setViewNav(false),
        xmlns: "http://www.w3.org/2000/svg",
        className: "ionicon h-10 w-10",
        viewBox: "0 0 512 512",
        children: [/* @__PURE__ */ jsxRuntime.exports.jsx("title", {
          children: "Close"
        }), /* @__PURE__ */ jsxRuntime.exports.jsx("path", {
          fill: "none",
          stroke: "currentColor",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "32",
          d: "M368 368L144 144M368 144L144 368"
        })]
      }) : /* @__PURE__ */ jsxRuntime.exports.jsxs("svg", {
        onClick: (prev) => setViewNav(true),
        xmlns: "http://www.w3.org/2000/svg",
        className: "ionicon h-10 w-10 ",
        viewBox: "0 0 512 512",
        children: [/* @__PURE__ */ jsxRuntime.exports.jsx("title", {
          children: "Menu"
        }), /* @__PURE__ */ jsxRuntime.exports.jsx("path", {
          fill: "none",
          stroke: "currentColor",
          "stroke-linecap": "round",
          "stroke-miterlimit": "10",
          "stroke-width": "32",
          d: "M80 160h352M80 256h352M80 352h352"
        })]
      })
    }), viewNav && /* @__PURE__ */ jsxRuntime.exports.jsxs("div", {
      className: "absolute border-b-1 bg-gray-100 py-4 px-6 left-0 right-0 top-16 flex flex-col space-y-2",
      children: [/* @__PURE__ */ jsxRuntime.exports.jsx("a", {
        href: "#features",
        className: "font-medium",
        children: "Features"
      }), /* @__PURE__ */ jsxRuntime.exports.jsx("a", {
        href: "#pricing",
        className: "font-medium",
        children: "Pricing"
      }), /* @__PURE__ */ jsxRuntime.exports.jsx("div", {
        className: "py-4 flex justify-center",
        children: /* @__PURE__ */ jsxRuntime.exports.jsx("a", {
          href: "https://app.notioncommerce.com",
          className: "bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-md shadow",
          children: "Dashboard"
        })
      })]
    })]
  });
}
__astro_tag_component__(MobileNav, "@astrojs/react");
var $$module3$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MobileNav
}, Symbol.toStringTag, { value: "Module" }));
var SITE_TITLE = "NotionCommerce";
var SITE_DESCRIPTION = "Welcome to my website!";
var $$module4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SITE_TITLE,
  SITE_DESCRIPTION
}, Symbol.toStringTag, { value: "Module" }));
var $$metadata$3 = createMetadata("/Users/arif/Projects/notioncommerce/narrow-sea/src/components/Header.astro", { modules: [{ module: $$module1, specifier: "./HeaderLink.astro", assert: {} }, { module: $$module4, specifier: "../config", assert: {} }, { module: $$module3$1, specifier: "./MobileNav", assert: {} }], hydratedComponents: [MobileNav], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set(["visible"]), hoisted: [] });
var $$Astro$4 = createAstro("/Users/arif/Projects/notioncommerce/narrow-sea/src/components/Header.astro", "https://notioncommerce.com/", "file:///Users/arif/Projects/notioncommerce/narrow-sea/");
var $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  const STYLES = [];
  for (const STYLE of STYLES)
    $$result.styles.add(STYLE);
  return renderTemplate`${maybeRenderHead($$result)}<header class="shadow-md m-0 astro-D7TERGOR">
  <div class="bg-red-400 text-xs md:text-sm h-12 flex items-center justify-center px-2 font-semibold text-white mx-auto text-center fixed top-0 left-0 right-0 z-10 astro-D7TERGOR">
    Use EARLY50 coupon within Dec 2022 to get 50% dicount.
  </div>
  <div class="h-12 astro-D7TERGOR"></div>
  <div class="flex justify-between items-center max-w-6xl mx-auto py-4 px-4 lg:px-0 relative astro-D7TERGOR">
    <a href="/" class="flex items-center space-x-2 astro-D7TERGOR">
      <img src="/logo.png" class="h-10 md:h-8 astro-D7TERGOR" alt="image description">
      <h6 class="font-medium hidden md:block astro-D7TERGOR">NotionCommerce</h6>
    </a>

    <nav class="block md:hidden mobile-nav flex-1 astro-D7TERGOR">
      ${renderComponent($$result, "MobileNav", MobileNav, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/arif/Projects/notioncommerce/narrow-sea/src/components/MobileNav", "client:component-export": "default", "class": "astro-D7TERGOR" })}
    </nav>

    <nav class="hidden md:block space-x-4 astro-D7TERGOR">
      ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "#features", "class": "astro-D7TERGOR" }, { "default": () => renderTemplate`Features` })}
      ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "#pricing", "class": "astro-D7TERGOR" }, { "default": () => renderTemplate`Pricing` })}
    </nav>

    <!-- <nav class="hidden md:block space-x-2">
			<button class="border border-gray-800 hover:border-gray-900 shadow hover:shadow-md rounded-md px-4 py-1.5">Login</button>
			<button class="bg-gray-800 hover:bg-gray-900 text-white px-4 py-1.5 rounded-md shadow">Signup</button>
		</nav> -->
    <nav class="hidden md:block space-x-2 astro-D7TERGOR">
      <a href="https://app.notioncommerce.com" class="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-md shadow astro-D7TERGOR">Dashboard</a>
    </nav>
  </div>
</header>

`;
});
var $$file$3 = "/Users/arif/Projects/notioncommerce/narrow-sea/src/components/Header.astro";
var $$url$3 = void 0;
var $$module2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata$3,
  default: $$Header,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: "Module" }));
var $$metadata$2 = createMetadata("/Users/arif/Projects/notioncommerce/narrow-sea/src/layouts/BaseLayout.astro", { modules: [], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$3 = createAstro("/Users/arif/Projects/notioncommerce/narrow-sea/src/layouts/BaseLayout.astro", "https://notioncommerce.com/", "file:///Users/arif/Projects/notioncommerce/narrow-sea/");
var $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  return renderTemplate``;
});
var $$file$2 = "/Users/arif/Projects/notioncommerce/narrow-sea/src/layouts/BaseLayout.astro";
var $$url$2 = void 0;
var $$module5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata$2,
  default: $$BaseLayout,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: "Module" }));
var $$metadata$1 = createMetadata("/Users/arif/Projects/notioncommerce/narrow-sea/src/components/Footer.astro", { modules: [], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$2 = createAstro("/Users/arif/Projects/notioncommerce/narrow-sea/src/components/Footer.astro", "https://notioncommerce.com/", "file:///Users/arif/Projects/notioncommerce/narrow-sea/");
var $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const STYLES = [];
  for (const STYLE of STYLES)
    $$result.styles.add(STYLE);
  return renderTemplate`${maybeRenderHead($$result)}<footer class="border-t border-purple-700 astro-YWEBUEJQ">
	<div class="flex justify-center align-middle astro-YWEBUEJQ">
		<a href="https://twitter.com/ariflogs" target="_blank" class="astro-YWEBUEJQ">Twitter</a>
		<span class="px-2 astro-YWEBUEJQ"> ·</span>
		<a href="https://github.com/ariflogs" target="_blank" class="astro-YWEBUEJQ">Github</a>
	</div>
</footer>
`;
});
var $$file$1 = "/Users/arif/Projects/notioncommerce/narrow-sea/src/components/Footer.astro";
var $$url$1 = void 0;
var $$module3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata$1,
  default: $$Footer,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: "Module" }));
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
var $$metadata = createMetadata("/Users/arif/Projects/notioncommerce/narrow-sea/src/pages/index.astro", { modules: [{ module: $$module1$1, specifier: "../components/BaseHead.astro", assert: {} }, { module: $$module2, specifier: "../components/Header.astro", assert: {} }, { module: $$module3, specifier: "../components/Footer.astro", assert: {} }, { module: $$module4, specifier: "../config", assert: {} }, { module: $$module5, specifier: "../layouts/BaseLayout.astro", assert: {} }], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [{ type: "external", src: "https://cdn.paritydeals.com/banner.js" }] });
var $$Astro$1 = createAstro("/Users/arif/Projects/notioncommerce/narrow-sea/src/pages/index.astro", "https://notioncommerce.com/", "file:///Users/arif/Projects/notioncommerce/narrow-sea/");
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate(_a || (_a = __template(['<html lang="en-us">\n  <head>\n    ', "\n    ", "\n  ", "</head>\n  <body>\n    ", '\n    <div class="h-28 md:h-32"></div>\n    <main class="container max-w-6xl px-4 mx-auto">\n      <div class="header text-center">\n        <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold">\n          Build & Manage eCommerce Right\n        </h1>\n        <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold text-red-400">\n          From Notion\n        </h1>\n        <div class="mt-6 flex flex-col md:block space-y-4 lg:space-y-0 lg:space-x-3">\n          <a href="https://app.notioncommerce.com" class="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:bg-gray-900">Get Started For Free</a>\n          <a href="https://arif.sellify.xyz" target="_blank" class="px-6 py-3 border border-gray-800 text-black font-medium rounded-lg shadow-md hover:shadow-lg hover:border-gray-900">View Demo Site</a>\n        </div>\n\n        <img src="/ss/product-page.png" alt="product ss" class="shadow-xl w-full max-w-4xl rounded-md mx-auto mt-16">\n      </div>\n\n      <div class="h-28 md:h-32"></div>\n\n      <section id="features" class="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-4">\n        <div class="w-full lg:w-1/2 text-center md:text-left">\n          <h2 class="text-3xl lg:text-5xl font-bold">\n            Use the tool you already love!\n          </h2>\n          <p class="text-gray-500 font-medium my-6">\n            All you need to do is connect your Notion database and we will\n            generate an eCommerce website for you. So you can keep using Notion,\n            without learning a learning a new tool to manage your online store.\n          </p>\n          <a href="http://app.notioncommerce.com" class="px-6 py-3 w-full md:w-auto bg-gray-800 text-white font-medium rounded-lg mt-6 shadow-md hover:shadow-lg hover:bg-gray-900">Get Started</a>\n        </div>\n        <div class="w-full lg:w-1/2">\n          <img src="/n-e.png" alt="notion to eCommerce" class="w-fit xl:pl-12">\n        </div>\n      </section>\n      <div class="h-28 md:h-32"></div>\n      <section id="features">\n        <h3 class="text-3xl lg:text-4xl font-bold text-center mb-12">\n          Core Features\n        </h3>\n        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">\n          <div>\n            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon w-10 mx-auto mb-2" viewBox="0 0 512 512"><title>Sync</title><path d="M434.67 285.59v-29.8c0-98.73-80.24-178.79-179.2-178.79a179 179 0 00-140.14 67.36m-38.53 82v29.8C76.8 355 157 435 256 435a180.45 180.45 0 00140-66.92" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 256l44-44 46 44M480 256l-44 44-46-44"></path>\n            </svg>\n            <h6 class="text-lg font-semibold mb-3">Database Sync</h6>\n            <p class="text-gray-500 text-sm font-medium">\n              All the store data is be auto synced with your Notion databases.\n            </p>\n          </div>\n          <div>\n            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon w-10 mx-auto mb-2" viewBox="0 0 512 512"><title>Bag Handle</title><path d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M160 224v16a96 96 0 0096 96h0a96 96 0 0096-96v-16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>\n            </svg>\n            <h6 class="text-lg font-semibold mb-3">Customization Freedom</h6>\n            <p class="text-gray-500 text-sm font-medium">\n              By using Notion as your backend, You have the freedom to customize\n              the dashboard of your store as you like.\n            </p>\n          </div>\n          <div>\n            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon w-10 mx-auto mb-2" viewBox="0 0 512 512"><title>Globe</title><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path><path d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path><path d="M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34M394.67 394.67c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 48v416M464 256H48"></path>\n            </svg>\n            <h6 class="text-lg font-semibold mb-3">Custom Domain</h6>\n            <p class="text-gray-500 text-sm font-medium mb-3">\n              Add custom domains to your site, along with custom logo to brand\n              your eCommerce.\n            </p>\n          </div>\n          <div>\n            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon w-10 mx-auto mb-2" viewBox="0 0 512 512"><title>Card</title><rect x="48" y="96" width="416" height="320" rx="56" ry="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></rect><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="60" d="M48 192h416M128 300h48v20h-48z"></path>\n            </svg>\n            <h6 class="text-lg font-semibold mb-3">Collect Payment</h6>\n            <p class="text-gray-500 text-sm font-medium mb-1">\n              <!-- Connect your stripe account and recive payments from your customers directly frmm the store. -->\n              Recive payments from your customers directly from the store.\n            </p>\n            <span class="bg-red-400 text-xs px-2 py-1 rounded-md font-semibold text-white">Coming Soon</span>\n          </div>\n        </div>\n      </section>\n      <div class="h-28 md:h-32"></div>\n      <section id="pricing">\n        <h3 class="text-3xl lg:text-4xl font-bold text-center mb-12">\n          Simple Pricing\n        </h3>\n\n        <div class="border max-w-md bg-white border-gray-200 shadow rounded-lg mx-auto px-4 py-6">\n          <div class="flex justify-between items-center">\n            <div>\n              <p>Billed Anually</p>\n\n              <span class="bg-red-400 text-xs px-2 py-1 rounded-md font-semibold text-white mx-auto">save 20%</span>\n            </div>\n            <h4 class="text-3xl md:text-4xl font-black">\n              $12.0\n              <sub class="text-sm font-medium">/ month</sub>\n            </h4>\n          </div>\n        </div>\n        <div class="border max-w-md bg-white border-gray-200 shadow rounded-lg mx-auto px-4 py-6 mt-6">\n          <div class="flex justify-between items-center">\n            <p>Billed Monthly</p>\n            <h4 class="text-3xl md:text-4xl font-black">\n              $15.0\n              <sub class="text-sm font-medium">/ month</sub>\n            </h4>\n          </div>\n        </div>\n      </section>\n\n      <div class="h-28 md:h-32"></div>\n\n      <section id="cta" class="relative">\n        <div class="bg-gradient-to-r from-gray-100 to-gray-200 lg:rounded-2xl px-4 lg:px-8 py-8 -mx-4 lg:py-16 flex">\n          <div class="w-full lg:w-1/2 text-center lg:text-left">\n            <p class="text-xl font-semibold text-red-400">Try Now And</p>\n            <h2 class="text-3xl lg:text-4xl font-bold lg:font-black mb-8 mt-2">\n              Turn Your Notion Database Into a Full Featured eCommerce\n            </h2>\n            <a href="http://app.notioncommerce.com" class="w-full md:w-auto px-6 py-3 bg-gray-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:bg-gray-900">Get Started</a>\n          </div>\n          <div class="hidden lg:block w-1/2">\n            <img src="/rocket.png" alt="rocket" class="w-96 absolute bottom-1 right-12">\n          </div>\n        </div>\n      </section>\n    </main>\n    <section id="footer">\n      <div class="my-20 px-4">\n        <div class="flex space-x-2 justify-center items-center">\n          <img src="/logo.png" alt="logo" class="h-10 w-10">\n          <h6 class="text-2xl font-medium">NotionCommerce</h6>\n        </div>\n\n        <div class="flex justify-center mt-6 space-x-2 lg:space-x-3">\n          <a href="https://twitter.com/NotionCommerce" target="_blank" class="flex items-center text-sm px-2 py-1 lg:text-md lg:px-4 lg:py-2 border border-gray-800 text-black font-medium rounded-md shadow-md hover:shadow-lg hover:border-gray-900">\n            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon w-5 mr-2" viewBox="0 0 512 512"><title>Logo Twitter</title><path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"></path>\n            </svg>\n            Follow Us</a>\n          <a href="https://join.slack.com/t/notioncommerce/shared_invite/zt-1ik6mhk1w-vXxHPSlObKVvFAfhg1eZBg" target="_blank" class="flex items-center text-sm px-2 py-1 lg:text-md lg:px-4 lg:py-2 border border-gray-800 text-black font-medium rounded-md shadow-md hover:shadow-lg hover:border-gray-900">\n            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon w-5 mr-2" viewBox="0 0 512 512"><title>Logo Slack</title><path d="M126.12 315.1A47.06 47.06 0 1179.06 268h47.06zM149.84 315.1a47.06 47.06 0 0194.12 0v117.84a47.06 47.06 0 11-94.12 0zM196.9 126.12A47.06 47.06 0 11244 79.06v47.06zM196.9 149.84a47.06 47.06 0 010 94.12H79.06a47.06 47.06 0 010-94.12zM385.88 196.9a47.06 47.06 0 1147.06 47.1h-47.06zM362.16 196.9a47.06 47.06 0 01-94.12 0V79.06a47.06 47.06 0 1194.12 0zM315.1 385.88a47.06 47.06 0 11-47.1 47.06v-47.06zM315.1 362.16a47.06 47.06 0 010-94.12h117.84a47.06 47.06 0 110 94.12z"></path>\n            </svg>\n            Join Community</a>\n        </div>\n      </div>\n\n      <div class="bg-gray-900 flex justify-center text-sm px-4 py-4 text-center space-x-4 text-gray-200">\n        <a href="/privacy" target="_blank">Privacy Policy</a>\n        <p>.</p>\n        <a target="_blank" href="/refund">Refund Policy</a>\n      </div>\n    </section>\n    <script async src="https://cdn.splitbee.io/sb.js"><\/script>\n    ', '\n    <script type="text/javascript">\n      window.$crisp = [];\n      window.CRISP_WEBSITE_ID = "e2e1afe9-6eab-4f9d-8df2-3df2a7d712e8";\n      (function () {\n        d = document;\n        s = d.createElement("script");\n        s.src = "https://client.crisp.chat/l.js";\n        s.async = 1;\n        d.getElementsByTagName("head")[0].appendChild(s);\n      })();\n    <\/script>\n  </body>\n</html>'])), renderComponent($$result, "BaseLayout", $$BaseLayout, {}), renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION }), renderHead($$result), renderComponent($$result, "Header", $$Header, { "title": SITE_TITLE }), maybeRenderHead($$result));
});
var $$file = "/Users/arif/Projects/notioncommerce/narrow-sea/src/pages/index.astro";
var $$url = "";
var _page0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
createMetadata("/Users/arif/Projects/notioncommerce/narrow-sea/src/layouts/BlogPost.astro", { modules: [{ module: $$module1$1, specifier: "../components/BaseHead.astro", assert: {} }, { module: $$module2, specifier: "../components/Header.astro", assert: {} }, { module: $$module3, specifier: "../components/Footer.astro", assert: {} }], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro = createAstro("/Users/arif/Projects/notioncommerce/narrow-sea/src/layouts/BlogPost.astro", "https://notioncommerce.com/", "file:///Users/arif/Projects/notioncommerce/narrow-sea/");
var $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const {
    content: { title, description, tags, pubDate, updatedDate, heroImage }
  } = Astro2.props;
  return renderTemplate`<html>
	<head>
		${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "image": heroImage })}
	${renderHead($$result)}</head>

	<body class="container max-w-4xl mx-auto">
		${renderComponent($$result, "Header", $$Header, {})}
		<main>
			<article class="blog bg-white p-4 lg:p-6 rounded-md">
				<!-- {
					heroImage && (
						<img width={720} height={360} src={heroImage} alt="" />
					)
				} -->
				<h1>${title}</h1>

				${tags && tags.split(", ").map((tag) => renderTemplate`<span class="text-purple-800 text-sm bg-purple-200 px-2 py-0.5 mr-2 rounded-md">
								#${tag}
							</span>`)}
				<br>
				${pubDate && renderTemplate`<p class="mt-2">${pubDate}</p>`}
				${updatedDate && renderTemplate`<div>
							Last updated on <time>${updatedDate}</time>
						</div>`}
				<hr>
				${renderSlot($$result, $$slots["default"])}
			</article>
			<iframe src="https://parttimemaker.substack.com/embed" width="100%" height="200" style="border:1px solid #EEE; background: transparent;" frameborder="0" scrolling="no"></iframe>
		</main>
		${renderComponent($$result, "Footer", $$Footer, {})}
	</body></html>`;
});
var html$8 = "";
var frontmatter$8 = { "layout": "../../layouts/BlogPost.astro", "title": "NotionCommerce", "description": "Build E-commerce Right From Notion", "url": "https://notioncommerce.com", "pubDate": "Jun 15 2022" };
var file$8 = "/Users/arif/Projects/notioncommerce/narrow-sea/src/pages/side-projects/notioncommerce.md";
var url$8 = "/side-projects/notioncommerce";
function rawContent$8() {
  return "";
}
function compiledContent$8() {
  return html$8;
}
function getHeadings$8() {
  return [];
}
function getHeaders$8() {
  console.warn("getHeaders() have been deprecated. Use getHeadings() function instead.");
  return getHeadings$8();
}
async function Content$8() {
  const { layout, ...content } = frontmatter$8;
  content.file = file$8;
  content.url = url$8;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }
  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }
  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }
  });
  const contentFragment = createVNode(Fragment, { "set:html": html$8 });
  return createVNode($$BlogPost, {
    file: file$8,
    url: url$8,
    content,
    frontmatter: content,
    headings: getHeadings$8(),
    rawContent: rawContent$8,
    compiledContent: compiledContent$8,
    "server:root": true,
    children: contentFragment
  });
}
Content$8[Symbol.for("astro.needsHeadRendering")] = false;
var _page1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  frontmatter: frontmatter$8,
  file: file$8,
  url: url$8,
  rawContent: rawContent$8,
  compiledContent: compiledContent$8,
  getHeadings: getHeadings$8,
  getHeaders: getHeaders$8,
  Content: Content$8,
  default: Content$8
}, Symbol.toStringTag, { value: "Module" }));
var html$7 = "";
var frontmatter$7 = { "layout": "../../layouts/BlogPost.astro", "title": "StudyMerge", "description": "Study, Work and Collaborate with Classmates Effortlessly", "url": "https://studymerge.com", "pubDate": "Jan 1 2022" };
var file$7 = "/Users/arif/Projects/notioncommerce/narrow-sea/src/pages/side-projects/studymerge.md";
var url$7 = "/side-projects/studymerge";
function rawContent$7() {
  return "";
}
function compiledContent$7() {
  return html$7;
}
function getHeadings$7() {
  return [];
}
function getHeaders$7() {
  console.warn("getHeaders() have been deprecated. Use getHeadings() function instead.");
  return getHeadings$7();
}
async function Content$7() {
  const { layout, ...content } = frontmatter$7;
  content.file = file$7;
  content.url = url$7;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }
  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }
  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }
  });
  const contentFragment = createVNode(Fragment, { "set:html": html$7 });
  return createVNode($$BlogPost, {
    file: file$7,
    url: url$7,
    content,
    frontmatter: content,
    headings: getHeadings$7(),
    rawContent: rawContent$7,
    compiledContent: compiledContent$7,
    "server:root": true,
    children: contentFragment
  });
}
Content$7[Symbol.for("astro.needsHeadRendering")] = false;
var _page2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  frontmatter: frontmatter$7,
  file: file$7,
  url: url$7,
  rawContent: rawContent$7,
  compiledContent: compiledContent$7,
  getHeadings: getHeadings$7,
  getHeaders: getHeaders$7,
  Content: Content$7,
  default: Content$7
}, Symbol.toStringTag, { value: "Module" }));
var html$6 = `<div class="max-w-4xl mx-auto my-6">
<h3 class="text-2xl font-medium mb-4">Privacy Policy for NotionCommerce</h3>
<p>
At NotionCommerce, accessible from NotionCommerce.xyz, one of our main
priorities is the privacy of our visitors. This Privacy Policy document
contains types of information that is collected and recorded by
NotionCommerce and how we use it.
</p>
<p>
If you have additional questions or require more information about our
Privacy Policy, do not hesitate to contact us.
</p>
<p>
This Privacy Policy applies only to our online activities and is valid
for visitors to our website with regards to the information that they
shared and/or collect in NotionCommerce. This policy is not applicable
to any information collected offline or via channels other than this
website.
</p>
<h2 class="text-xl mt-4 mb-2">Consent</h2>
<p>
By using our website, you hereby consent to our Privacy Policy and agree
to its terms.
</p>
<h2 class="text-xl mt-4 mb-2">Information we collect</h2>
<p>
The personal information that you are asked to provide, and the reasons
why you are asked to provide it, will be made clear to you at the point
we ask you to provide your personal information.
</p>
<p>
If you contact us directly, we may receive additional information about
you such as your name, email address, phone number, the contents of the
message and/or attachments you may send us, and any other information
you may choose to provide.
</p>
<p>
When you register for an Account with Notion, we may ask for your
contact information, including items such as your name and email
address.
</p>
<h2 class="text-xl mt-4 mb-2">How we use your information</h2>
<p>We use the information we collect in various ways, including to:</p>
<ul>
<li>Provide, operate, and maintain our website</li>
<li>Improve, personalize, and expand our website</li>
<li>Understand and analyze how you use our website</li>
<li>Develop new products, services, features, and functionality</li>
<li>
    Communicate with you, either directly or through one of our partners,
    including for customer service, to provide you with updates and other
    information relating to the website, and for marketing and promotional
    purposes
</li>
<li>Send you emails</li>
<li>Find and prevent fraud</li>
</ul>
<h2 class="text-xl mt-4 mb-2">Log Files</h2>
<p>
NotionCommerce follows a standard procedure of using log files. These
files log visitors when they visit websites. All hosting companies do
this and a part of hosting services' analytics. The information
collected by log files include internet protocol (IP) addresses, browser
type, Internet Service Provider (ISP), date and time stamp,
referring/exit pages, and possibly the number of clicks. These are not
linked to any information that is personally identifiable. The purpose
of the information is for analyzing trends, administering the site,
tracking users' movement on the website, and gathering demographic
information.
</p>
<h2 class="text-xl mt-4 mb-2">Cookies and Web Beacons</h2>
<p>
Like any other website, NotionCommerce uses cookies. These cookies are
used to store information including visitors preferences, and the pages
on the website that the visitor accessed or visited. The information is
used to optimize the users' experience by customizing our web page
content based on visitors' browser type and/or other information.
</p>
<h2 class="text-xl mt-4 mb-2">Advertising Partners Privacy Policies</h2>
<p>
Third-party ad servers or ad networks uses technologies like cookies,
JavaScript, or Web Beacons that are used in their respective
advertisements and links that appear on NotionCommerce, which are sent
directly to users' browser. They automatically receive your IP
address when this occurs. These technologies are used to measure the
effectiveness of their advertising campaigns and/or to personalize the
advertising content that you see on websites that you visit.
</p>
<p>
Note that NotionCommerce has no access to or control over these cookies
that are used by third-party advertisers.
</p>
<h2 class="text-xl mt-4 mb-2">Third Party Privacy Policies</h2>
<p>
NotionCommerce's Privacy Policy does not apply to other advertisers
or websites. Thus, we are advising you to consult the respective Privacy
Policies of these third-party ad servers for more detailed information.
It may include their practices and instructions about how to opt-out of
certain options.{" "}
</p>
<p>
You can choose to disable cookies through your individual browser
options. To know more detailed information about cookie management with
specific web browsers, it can be found at the browsers' respective
websites.
</p>
<h2 class="text-xl mt-4 mb-2">CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
<p>
Under the CCPA, among other rights, California consumers have the right
to:
</p>
<p>
Request that a business that collects a consumer's personal data
disclose the categories and specific pieces of personal data that a
business has collected about consumers.
</p>
<p>
Request that a business delete any personal data about the consumer that
a business has collected.
</p>
<p>
Request that a business that sells a consumer's personal data, not
sell the consumer's personal data.
</p>
<p>
If you make a request, we have one month to respond to you. If you would
like to exercise any of these rights, please contact us.
</p>
<h2 class="text-xl mt-4 mb-2">GDPR Data Protection Rights</h2>
<p>
We would like to make sure you are fully aware of all of your data
protection rights. Every user is entitled to the following:
</p>
<p>
The right to access \u2013 You have the right to request copies of your
personal data. We may charge you a small fee for this service.
</p>
<p>
The right to rectification \u2013 You have the right to request that we
correct any information you believe is inaccurate. You also have the
right to request that we complete the information you believe is
incomplete.
</p>
<p>
The right to erasure \u2013 You have the right to request that we erase your
personal data, under certain conditions.
</p>
<p>
The right to restrict processing \u2013 You have the right to request that we
restrict the processing of your personal data, under certain conditions.
</p>
<p>
The right to object to processing \u2013 You have the right to object to our
processing of your personal data, under certain conditions.
</p>
<p>
The right to data portability \u2013 You have the right to request that we
transfer the data that we have collected to another organization, or
directly to you, under certain conditions.
</p>
<p>
If you make a request, we have one month to respond to you. If you would
like to exercise any of these rights, please contact us.
</p>
<h2 class="text-xl mt-4 mb-2">Children's Information</h2>
<p>
Another part of our priority is adding protection for children while
using the internet. We encourage parents and guardians to observe,
participate in, and/or monitor and guide their online activity.
</p>
<p>
NotionCommerce does not knowingly collect any Personal Identifiable
Information from children under the age of 13. If you think that your
child provided this kind of information on our website, we strongly
encourage you to contact us immediately and we will do our best efforts
to promptly remove such information from our records.
</p>
</div>`;
var frontmatter$6 = {};
var file$6 = "/Users/arif/Projects/notioncommerce/narrow-sea/src/pages/privacy.md";
var url$6 = "/privacy";
function rawContent$6() {
  return '<div class="max-w-4xl mx-auto my-6">\n<h3 class="text-2xl font-medium mb-4">Privacy Policy for NotionCommerce</h3>\n\n<p>\nAt NotionCommerce, accessible from NotionCommerce.xyz, one of our main\npriorities is the privacy of our visitors. This Privacy Policy document\ncontains types of information that is collected and recorded by\nNotionCommerce and how we use it.\n</p>\n\n<p>\nIf you have additional questions or require more information about our\nPrivacy Policy, do not hesitate to contact us.\n</p>\n\n<p>\nThis Privacy Policy applies only to our online activities and is valid\nfor visitors to our website with regards to the information that they\nshared and/or collect in NotionCommerce. This policy is not applicable\nto any information collected offline or via channels other than this\nwebsite.\n</p>\n\n<h2 class="text-xl mt-4 mb-2">Consent</h2>\n\n<p>\nBy using our website, you hereby consent to our Privacy Policy and agree\nto its terms.\n</p>\n\n<h2 class="text-xl mt-4 mb-2">Information we collect</h2>\n\n<p>\nThe personal information that you are asked to provide, and the reasons\nwhy you are asked to provide it, will be made clear to you at the point\nwe ask you to provide your personal information.\n</p>\n<p>\nIf you contact us directly, we may receive additional information about\nyou such as your name, email address, phone number, the contents of the\nmessage and/or attachments you may send us, and any other information\nyou may choose to provide.\n</p>\n<p>\nWhen you register for an Account with Notion, we may ask for your\ncontact information, including items such as your name and email\naddress.\n</p>\n\n<h2 class="text-xl mt-4 mb-2">How we use your information</h2>\n\n<p>We use the information we collect in various ways, including to:</p>\n\n<ul>\n<li>Provide, operate, and maintain our website</li>\n<li>Improve, personalize, and expand our website</li>\n<li>Understand and analyze how you use our website</li>\n<li>Develop new products, services, features, and functionality</li>\n<li>\n    Communicate with you, either directly or through one of our partners,\n    including for customer service, to provide you with updates and other\n    information relating to the website, and for marketing and promotional\n    purposes\n</li>\n<li>Send you emails</li>\n<li>Find and prevent fraud</li>\n</ul>\n\n<h2 class="text-xl mt-4 mb-2">Log Files</h2>\n\n<p>\nNotionCommerce follows a standard procedure of using log files. These\nfiles log visitors when they visit websites. All hosting companies do\nthis and a part of hosting services&apos; analytics. The information\ncollected by log files include internet protocol (IP) addresses, browser\ntype, Internet Service Provider (ISP), date and time stamp,\nreferring/exit pages, and possibly the number of clicks. These are not\nlinked to any information that is personally identifiable. The purpose\nof the information is for analyzing trends, administering the site,\ntracking users&apos; movement on the website, and gathering demographic\ninformation.\n</p>\n\n<h2 class="text-xl mt-4 mb-2">Cookies and Web Beacons</h2>\n\n<p>\nLike any other website, NotionCommerce uses cookies. These cookies are\nused to store information including visitors preferences, and the pages\non the website that the visitor accessed or visited. The information is\nused to optimize the users&apos; experience by customizing our web page\ncontent based on visitors&apos; browser type and/or other information.\n</p>\n\n<h2 class="text-xl mt-4 mb-2">Advertising Partners Privacy Policies</h2>\n\n<p>\nThird-party ad servers or ad networks uses technologies like cookies,\nJavaScript, or Web Beacons that are used in their respective\nadvertisements and links that appear on NotionCommerce, which are sent\ndirectly to users&apos; browser. They automatically receive your IP\naddress when this occurs. These technologies are used to measure the\neffectiveness of their advertising campaigns and/or to personalize the\nadvertising content that you see on websites that you visit.\n</p>\n\n<p>\nNote that NotionCommerce has no access to or control over these cookies\nthat are used by third-party advertisers.\n</p>\n\n<h2 class="text-xl mt-4 mb-2">Third Party Privacy Policies</h2>\n\n<p>\nNotionCommerce&apos;s Privacy Policy does not apply to other advertisers\nor websites. Thus, we are advising you to consult the respective Privacy\nPolicies of these third-party ad servers for more detailed information.\nIt may include their practices and instructions about how to opt-out of\ncertain options.{" "}\n</p>\n\n<p>\nYou can choose to disable cookies through your individual browser\noptions. To know more detailed information about cookie management with\nspecific web browsers, it can be found at the browsers&apos; respective\nwebsites.\n</p>\n\n<h2 class="text-xl mt-4 mb-2">CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>\n\n<p>\nUnder the CCPA, among other rights, California consumers have the right\nto:\n</p>\n<p>\nRequest that a business that collects a consumer&apos;s personal data\ndisclose the categories and specific pieces of personal data that a\nbusiness has collected about consumers.\n</p>\n<p>\nRequest that a business delete any personal data about the consumer that\na business has collected.\n</p>\n<p>\nRequest that a business that sells a consumer&apos;s personal data, not\nsell the consumer&apos;s personal data.\n</p>\n<p>\nIf you make a request, we have one month to respond to you. If you would\nlike to exercise any of these rights, please contact us.\n</p>\n\n<h2 class="text-xl mt-4 mb-2">GDPR Data Protection Rights</h2>\n\n<p>\nWe would like to make sure you are fully aware of all of your data\nprotection rights. Every user is entitled to the following:\n</p>\n<p>\nThe right to access \u2013 You have the right to request copies of your\npersonal data. We may charge you a small fee for this service.\n</p>\n<p>\nThe right to rectification \u2013 You have the right to request that we\ncorrect any information you believe is inaccurate. You also have the\nright to request that we complete the information you believe is\nincomplete.\n</p>\n<p>\nThe right to erasure \u2013 You have the right to request that we erase your\npersonal data, under certain conditions.\n</p>\n<p>\nThe right to restrict processing \u2013 You have the right to request that we\nrestrict the processing of your personal data, under certain conditions.\n</p>\n<p>\nThe right to object to processing \u2013 You have the right to object to our\nprocessing of your personal data, under certain conditions.\n</p>\n<p>\nThe right to data portability \u2013 You have the right to request that we\ntransfer the data that we have collected to another organization, or\ndirectly to you, under certain conditions.\n</p>\n<p>\nIf you make a request, we have one month to respond to you. If you would\nlike to exercise any of these rights, please contact us.\n</p>\n\n<h2 class="text-xl mt-4 mb-2">Children&apos;s Information</h2>\n\n<p>\nAnother part of our priority is adding protection for children while\nusing the internet. We encourage parents and guardians to observe,\nparticipate in, and/or monitor and guide their online activity.\n</p>\n\n<p>\nNotionCommerce does not knowingly collect any Personal Identifiable\nInformation from children under the age of 13. If you think that your\nchild provided this kind of information on our website, we strongly\nencourage you to contact us immediately and we will do our best efforts\nto promptly remove such information from our records.\n</p>\n</div>\n\n';
}
function compiledContent$6() {
  return html$6;
}
function getHeadings$6() {
  return [];
}
function getHeaders$6() {
  console.warn("getHeaders() have been deprecated. Use getHeadings() function instead.");
  return getHeadings$6();
}
async function Content$6() {
  const { layout, ...content } = frontmatter$6;
  content.file = file$6;
  content.url = url$6;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }
  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }
  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }
  });
  const contentFragment = createVNode(Fragment, { "set:html": html$6 });
  return contentFragment;
}
Content$6[Symbol.for("astro.needsHeadRendering")] = true;
var _page3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  frontmatter: frontmatter$6,
  file: file$6,
  url: url$6,
  rawContent: rawContent$6,
  compiledContent: compiledContent$6,
  getHeadings: getHeadings$6,
  getHeaders: getHeaders$6,
  Content: Content$6,
  default: Content$6
}, Symbol.toStringTag, { value: "Module" }));
var validator$2 = {};
var util$2 = {};
(function(exports) {
  const nameStartChar = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
  const nameChar = nameStartChar + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
  const nameRegexp = "[" + nameStartChar + "][" + nameChar + "]*";
  const regexName = new RegExp("^" + nameRegexp + "$");
  const getAllMatches = function(string, regex) {
    const matches = [];
    let match = regex.exec(string);
    while (match) {
      const allmatches = [];
      allmatches.startIndex = regex.lastIndex - match[0].length;
      const len = match.length;
      for (let index = 0; index < len; index++) {
        allmatches.push(match[index]);
      }
      matches.push(allmatches);
      match = regex.exec(string);
    }
    return matches;
  };
  const isName = function(string) {
    const match = regexName.exec(string);
    return !(match === null || typeof match === "undefined");
  };
  exports.isExist = function(v) {
    return typeof v !== "undefined";
  };
  exports.isEmptyObject = function(obj) {
    return Object.keys(obj).length === 0;
  };
  exports.merge = function(target, a, arrayMode) {
    if (a) {
      const keys = Object.keys(a);
      const len = keys.length;
      for (let i = 0; i < len; i++) {
        if (arrayMode === "strict") {
          target[keys[i]] = [a[keys[i]]];
        } else {
          target[keys[i]] = a[keys[i]];
        }
      }
    }
  };
  exports.getValue = function(v) {
    if (exports.isExist(v)) {
      return v;
    } else {
      return "";
    }
  };
  exports.isName = isName;
  exports.getAllMatches = getAllMatches;
  exports.nameRegexp = nameRegexp;
})(util$2);
var util$1 = util$2;
var defaultOptions$2 = {
  allowBooleanAttributes: false,
  unpairedTags: []
};
validator$2.validate = function(xmlData, options) {
  options = Object.assign({}, defaultOptions$2, options);
  const tags = [];
  let tagFound = false;
  let reachedRoot = false;
  if (xmlData[0] === "\uFEFF") {
    xmlData = xmlData.substr(1);
  }
  for (let i = 0; i < xmlData.length; i++) {
    if (xmlData[i] === "<" && xmlData[i + 1] === "?") {
      i += 2;
      i = readPI(xmlData, i);
      if (i.err)
        return i;
    } else if (xmlData[i] === "<") {
      let tagStartPos = i;
      i++;
      if (xmlData[i] === "!") {
        i = readCommentAndCDATA(xmlData, i);
        continue;
      } else {
        let closingTag = false;
        if (xmlData[i] === "/") {
          closingTag = true;
          i++;
        }
        let tagName = "";
        for (; i < xmlData.length && xmlData[i] !== ">" && xmlData[i] !== " " && xmlData[i] !== "	" && xmlData[i] !== "\n" && xmlData[i] !== "\r"; i++) {
          tagName += xmlData[i];
        }
        tagName = tagName.trim();
        if (tagName[tagName.length - 1] === "/") {
          tagName = tagName.substring(0, tagName.length - 1);
          i--;
        }
        if (!validateTagName(tagName)) {
          let msg;
          if (tagName.trim().length === 0) {
            msg = "Invalid space after '<'.";
          } else {
            msg = "Tag '" + tagName + "' is an invalid name.";
          }
          return getErrorObject("InvalidTag", msg, getLineNumberForPosition(xmlData, i));
        }
        const result = readAttributeStr(xmlData, i);
        if (result === false) {
          return getErrorObject("InvalidAttr", "Attributes for '" + tagName + "' have open quote.", getLineNumberForPosition(xmlData, i));
        }
        let attrStr = result.value;
        i = result.index;
        if (attrStr[attrStr.length - 1] === "/") {
          const attrStrStart = i - attrStr.length;
          attrStr = attrStr.substring(0, attrStr.length - 1);
          const isValid = validateAttributeString(attrStr, options);
          if (isValid === true) {
            tagFound = true;
          } else {
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
          }
        } else if (closingTag) {
          if (!result.tagClosed) {
            return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' doesn't have proper closing.", getLineNumberForPosition(xmlData, i));
          } else if (attrStr.trim().length > 0) {
            return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
          } else {
            const otg = tags.pop();
            if (tagName !== otg.tagName) {
              let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
              return getErrorObject(
                "InvalidTag",
                "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName + "'.",
                getLineNumberForPosition(xmlData, tagStartPos)
              );
            }
            if (tags.length == 0) {
              reachedRoot = true;
            }
          }
        } else {
          const isValid = validateAttributeString(attrStr, options);
          if (isValid !== true) {
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + isValid.err.line));
          }
          if (reachedRoot === true) {
            return getErrorObject("InvalidXml", "Multiple possible root nodes found.", getLineNumberForPosition(xmlData, i));
          } else if (options.unpairedTags.indexOf(tagName) !== -1)
            ;
          else {
            tags.push({ tagName, tagStartPos });
          }
          tagFound = true;
        }
        for (i++; i < xmlData.length; i++) {
          if (xmlData[i] === "<") {
            if (xmlData[i + 1] === "!") {
              i++;
              i = readCommentAndCDATA(xmlData, i);
              continue;
            } else if (xmlData[i + 1] === "?") {
              i = readPI(xmlData, ++i);
              if (i.err)
                return i;
            } else {
              break;
            }
          } else if (xmlData[i] === "&") {
            const afterAmp = validateAmpersand(xmlData, i);
            if (afterAmp == -1)
              return getErrorObject("InvalidChar", "char '&' is not expected.", getLineNumberForPosition(xmlData, i));
            i = afterAmp;
          } else {
            if (reachedRoot === true && !isWhiteSpace(xmlData[i])) {
              return getErrorObject("InvalidXml", "Extra text at the end", getLineNumberForPosition(xmlData, i));
            }
          }
        }
        if (xmlData[i] === "<") {
          i--;
        }
      }
    } else {
      if (isWhiteSpace(xmlData[i])) {
        continue;
      }
      return getErrorObject("InvalidChar", "char '" + xmlData[i] + "' is not expected.", getLineNumberForPosition(xmlData, i));
    }
  }
  if (!tagFound) {
    return getErrorObject("InvalidXml", "Start tag expected.", 1);
  } else if (tags.length == 1) {
    return getErrorObject("InvalidTag", "Unclosed tag '" + tags[0].tagName + "'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
  } else if (tags.length > 0) {
    return getErrorObject("InvalidXml", "Invalid '" + JSON.stringify(tags.map((t) => t.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  }
  return true;
};
function isWhiteSpace(char) {
  return char === " " || char === "	" || char === "\n" || char === "\r";
}
function readPI(xmlData, i) {
  const start = i;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] == "?" || xmlData[i] == " ") {
      const tagname = xmlData.substr(start, i - start);
      if (i > 5 && tagname === "xml") {
        return getErrorObject("InvalidXml", "XML declaration allowed only at the start of the document.", getLineNumberForPosition(xmlData, i));
      } else if (xmlData[i] == "?" && xmlData[i + 1] == ">") {
        i++;
        break;
      } else {
        continue;
      }
    }
  }
  return i;
}
function readCommentAndCDATA(xmlData, i) {
  if (xmlData.length > i + 5 && xmlData[i + 1] === "-" && xmlData[i + 2] === "-") {
    for (i += 3; i < xmlData.length; i++) {
      if (xmlData[i] === "-" && xmlData[i + 1] === "-" && xmlData[i + 2] === ">") {
        i += 2;
        break;
      }
    }
  } else if (xmlData.length > i + 8 && xmlData[i + 1] === "D" && xmlData[i + 2] === "O" && xmlData[i + 3] === "C" && xmlData[i + 4] === "T" && xmlData[i + 5] === "Y" && xmlData[i + 6] === "P" && xmlData[i + 7] === "E") {
    let angleBracketsCount = 1;
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === "<") {
        angleBracketsCount++;
      } else if (xmlData[i] === ">") {
        angleBracketsCount--;
        if (angleBracketsCount === 0) {
          break;
        }
      }
    }
  } else if (xmlData.length > i + 9 && xmlData[i + 1] === "[" && xmlData[i + 2] === "C" && xmlData[i + 3] === "D" && xmlData[i + 4] === "A" && xmlData[i + 5] === "T" && xmlData[i + 6] === "A" && xmlData[i + 7] === "[") {
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === "]" && xmlData[i + 1] === "]" && xmlData[i + 2] === ">") {
        i += 2;
        break;
      }
    }
  }
  return i;
}
var doubleQuote = '"';
var singleQuote = "'";
function readAttributeStr(xmlData, i) {
  let attrStr = "";
  let startChar = "";
  let tagClosed = false;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === doubleQuote || xmlData[i] === singleQuote) {
      if (startChar === "") {
        startChar = xmlData[i];
      } else if (startChar !== xmlData[i])
        ;
      else {
        startChar = "";
      }
    } else if (xmlData[i] === ">") {
      if (startChar === "") {
        tagClosed = true;
        break;
      }
    }
    attrStr += xmlData[i];
  }
  if (startChar !== "") {
    return false;
  }
  return {
    value: attrStr,
    index: i,
    tagClosed
  };
}
var validAttrStrRegxp = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function validateAttributeString(attrStr, options) {
  const matches = util$1.getAllMatches(attrStr, validAttrStrRegxp);
  const attrNames = {};
  for (let i = 0; i < matches.length; i++) {
    if (matches[i][1].length === 0) {
      return getErrorObject("InvalidAttr", "Attribute '" + matches[i][2] + "' has no space in starting.", getPositionFromMatch(matches[i]));
    } else if (matches[i][3] !== void 0 && matches[i][4] === void 0) {
      return getErrorObject("InvalidAttr", "Attribute '" + matches[i][2] + "' is without value.", getPositionFromMatch(matches[i]));
    } else if (matches[i][3] === void 0 && !options.allowBooleanAttributes) {
      return getErrorObject("InvalidAttr", "boolean attribute '" + matches[i][2] + "' is not allowed.", getPositionFromMatch(matches[i]));
    }
    const attrName = matches[i][2];
    if (!validateAttrName(attrName)) {
      return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is an invalid name.", getPositionFromMatch(matches[i]));
    }
    if (!attrNames.hasOwnProperty(attrName)) {
      attrNames[attrName] = 1;
    } else {
      return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is repeated.", getPositionFromMatch(matches[i]));
    }
  }
  return true;
}
function validateNumberAmpersand(xmlData, i) {
  let re = /\d/;
  if (xmlData[i] === "x") {
    i++;
    re = /[\da-fA-F]/;
  }
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === ";")
      return i;
    if (!xmlData[i].match(re))
      break;
  }
  return -1;
}
function validateAmpersand(xmlData, i) {
  i++;
  if (xmlData[i] === ";")
    return -1;
  if (xmlData[i] === "#") {
    i++;
    return validateNumberAmpersand(xmlData, i);
  }
  let count = 0;
  for (; i < xmlData.length; i++, count++) {
    if (xmlData[i].match(/\w/) && count < 20)
      continue;
    if (xmlData[i] === ";")
      break;
    return -1;
  }
  return i;
}
function getErrorObject(code, message, lineNumber) {
  return {
    err: {
      code,
      msg: message,
      line: lineNumber.line || lineNumber,
      col: lineNumber.col
    }
  };
}
function validateAttrName(attrName) {
  return util$1.isName(attrName);
}
function validateTagName(tagname) {
  return util$1.isName(tagname);
}
function getLineNumberForPosition(xmlData, index) {
  const lines = xmlData.substring(0, index).split(/\r?\n/);
  return {
    line: lines.length,
    col: lines[lines.length - 1].length + 1
  };
}
function getPositionFromMatch(match) {
  return match.startIndex + match[1].length;
}
var OptionsBuilder = {};
var defaultOptions$1 = {
  preserveOrder: false,
  attributeNamePrefix: "@_",
  attributesGroupName: false,
  textNodeName: "#text",
  ignoreAttributes: true,
  removeNSPrefix: false,
  allowBooleanAttributes: false,
  parseTagValue: true,
  parseAttributeValue: false,
  trimValues: true,
  cdataPropName: false,
  numberParseOptions: {
    hex: true,
    leadingZeros: true
  },
  tagValueProcessor: function(tagName, val) {
    return val;
  },
  attributeValueProcessor: function(attrName, val) {
    return val;
  },
  stopNodes: [],
  alwaysCreateTextNode: false,
  isArray: () => false,
  commentPropName: false,
  unpairedTags: [],
  processEntities: true,
  htmlEntities: false,
  ignoreDeclaration: false,
  ignorePiTags: false,
  transformTagName: false
};
var buildOptions$1 = function(options) {
  return Object.assign({}, defaultOptions$1, options);
};
OptionsBuilder.buildOptions = buildOptions$1;
OptionsBuilder.defaultOptions = defaultOptions$1;
var XmlNode = class {
  constructor(tagname) {
    this.tagname = tagname;
    this.child = [];
    this[":@"] = {};
  }
  add(key, val) {
    this.child.push({ [key]: val });
  }
  addChild(node) {
    if (node[":@"] && Object.keys(node[":@"]).length > 0) {
      this.child.push({ [node.tagname]: node.child, [":@"]: node[":@"] });
    } else {
      this.child.push({ [node.tagname]: node.child });
    }
  }
};
var xmlNode$1 = XmlNode;
function readDocType$1(xmlData, i) {
  const entities = {};
  if (xmlData[i + 3] === "O" && xmlData[i + 4] === "C" && xmlData[i + 5] === "T" && xmlData[i + 6] === "Y" && xmlData[i + 7] === "P" && xmlData[i + 8] === "E") {
    i = i + 9;
    let angleBracketsCount = 1;
    let hasBody = false, entity = false, comment = false;
    let exp = "";
    for (; i < xmlData.length; i++) {
      if (xmlData[i] === "<") {
        if (hasBody && xmlData[i + 1] === "!" && xmlData[i + 2] === "E" && xmlData[i + 3] === "N" && xmlData[i + 4] === "T" && xmlData[i + 5] === "I" && xmlData[i + 6] === "T" && xmlData[i + 7] === "Y") {
          i += 7;
          entity = true;
        } else if (hasBody && xmlData[i + 1] === "!" && xmlData[i + 2] === "E" && xmlData[i + 3] === "L" && xmlData[i + 4] === "E" && xmlData[i + 5] === "M" && xmlData[i + 6] === "E" && xmlData[i + 7] === "N" && xmlData[i + 8] === "T") {
          i += 8;
        } else if (hasBody && xmlData[i + 1] === "!" && xmlData[i + 2] === "A" && xmlData[i + 3] === "T" && xmlData[i + 4] === "T" && xmlData[i + 5] === "L" && xmlData[i + 6] === "I" && xmlData[i + 7] === "S" && xmlData[i + 8] === "T") {
          i += 8;
        } else if (hasBody && xmlData[i + 1] === "!" && xmlData[i + 2] === "N" && xmlData[i + 3] === "O" && xmlData[i + 4] === "T" && xmlData[i + 5] === "A" && xmlData[i + 6] === "T" && xmlData[i + 7] === "I" && xmlData[i + 8] === "O" && xmlData[i + 9] === "N") {
          i += 9;
        } else if (xmlData[i + 1] === "!" && xmlData[i + 2] === "-" && xmlData[i + 3] === "-") {
          comment = true;
        } else {
          throw new Error("Invalid DOCTYPE");
        }
        angleBracketsCount++;
        exp = "";
      } else if (xmlData[i] === ">") {
        if (comment) {
          if (xmlData[i - 1] === "-" && xmlData[i - 2] === "-") {
            comment = false;
          } else {
            throw new Error(`Invalid XML comment in DOCTYPE`);
          }
        } else if (entity) {
          parseEntityExp(exp, entities);
          entity = false;
        }
        angleBracketsCount--;
        if (angleBracketsCount === 0) {
          break;
        }
      } else if (xmlData[i] === "[") {
        hasBody = true;
      } else {
        exp += xmlData[i];
      }
    }
    if (angleBracketsCount !== 0) {
      throw new Error(`Unclosed DOCTYPE`);
    }
  } else {
    throw new Error(`Invalid Tag instead of DOCTYPE`);
  }
  return { entities, i };
}
var entityRegex = RegExp(`^\\s([a-zA-z0-0]+)[ 	](['"])([^&]+)\\2`);
function parseEntityExp(exp, entities) {
  const match = entityRegex.exec(exp);
  if (match) {
    entities[match[1]] = {
      regx: RegExp(`&${match[1]};`, "g"),
      val: match[3]
    };
  }
}
var DocTypeReader = readDocType$1;
var hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
var numRegex = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
if (!Number.parseInt && window.parseInt) {
  Number.parseInt = window.parseInt;
}
if (!Number.parseFloat && window.parseFloat) {
  Number.parseFloat = window.parseFloat;
}
var consider = {
  hex: true,
  leadingZeros: true,
  decimalPoint: ".",
  eNotation: true
};
function toNumber$1(str, options = {}) {
  options = Object.assign({}, consider, options);
  if (!str || typeof str !== "string")
    return str;
  let trimmedStr = str.trim();
  if (options.skipLike !== void 0 && options.skipLike.test(trimmedStr))
    return str;
  else if (options.hex && hexRegex.test(trimmedStr)) {
    return Number.parseInt(trimmedStr, 16);
  } else {
    const match = numRegex.exec(trimmedStr);
    if (match) {
      const sign = match[1];
      const leadingZeros = match[2];
      let numTrimmedByZeros = trimZeros(match[3]);
      const eNotation = match[4] || match[6];
      if (!options.leadingZeros && leadingZeros.length > 0 && sign && trimmedStr[2] !== ".")
        return str;
      else if (!options.leadingZeros && leadingZeros.length > 0 && !sign && trimmedStr[1] !== ".")
        return str;
      else {
        const num = Number(trimmedStr);
        const numStr = "" + num;
        if (numStr.search(/[eE]/) !== -1) {
          if (options.eNotation)
            return num;
          else
            return str;
        } else if (eNotation) {
          if (options.eNotation)
            return num;
          else
            return str;
        } else if (trimmedStr.indexOf(".") !== -1) {
          if (numStr === "0" && numTrimmedByZeros === "")
            return num;
          else if (numStr === numTrimmedByZeros)
            return num;
          else if (sign && numStr === "-" + numTrimmedByZeros)
            return num;
          else
            return str;
        }
        if (leadingZeros) {
          if (numTrimmedByZeros === numStr)
            return num;
          else if (sign + numTrimmedByZeros === numStr)
            return num;
          else
            return str;
        }
        if (trimmedStr === numStr)
          return num;
        else if (trimmedStr === sign + numStr)
          return num;
        return str;
      }
    } else {
      return str;
    }
  }
}
function trimZeros(numStr) {
  if (numStr && numStr.indexOf(".") !== -1) {
    numStr = numStr.replace(/0+$/, "");
    if (numStr === ".")
      numStr = "0";
    else if (numStr[0] === ".")
      numStr = "0" + numStr;
    else if (numStr[numStr.length - 1] === ".")
      numStr = numStr.substr(0, numStr.length - 1);
    return numStr;
  }
  return numStr;
}
var strnum = toNumber$1;
var util = util$2;
var xmlNode = xmlNode$1;
var readDocType = DocTypeReader;
var toNumber = strnum;
"<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g, util.nameRegexp);
var OrderedObjParser$1 = class {
  constructor(options) {
    this.options = options;
    this.currentNode = null;
    this.tagsNodeStack = [];
    this.docTypeEntities = {};
    this.lastEntities = {
      "apos": { regex: /&(apos|#39|#x27);/g, val: "'" },
      "gt": { regex: /&(gt|#62|#x3E);/g, val: ">" },
      "lt": { regex: /&(lt|#60|#x3C);/g, val: "<" },
      "quot": { regex: /&(quot|#34|#x22);/g, val: '"' }
    };
    this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" };
    this.htmlEntities = {
      "space": { regex: /&(nbsp|#160);/g, val: " " },
      "cent": { regex: /&(cent|#162);/g, val: "\xA2" },
      "pound": { regex: /&(pound|#163);/g, val: "\xA3" },
      "yen": { regex: /&(yen|#165);/g, val: "\xA5" },
      "euro": { regex: /&(euro|#8364);/g, val: "\u20AC" },
      "copyright": { regex: /&(copy|#169);/g, val: "\xA9" },
      "reg": { regex: /&(reg|#174);/g, val: "\xAE" },
      "inr": { regex: /&(inr|#8377);/g, val: "\u20B9" }
    };
    this.addExternalEntities = addExternalEntities;
    this.parseXml = parseXml;
    this.parseTextData = parseTextData;
    this.resolveNameSpace = resolveNameSpace;
    this.buildAttributesMap = buildAttributesMap;
    this.isItStopNode = isItStopNode;
    this.replaceEntitiesValue = replaceEntitiesValue$2;
    this.readStopNodeData = readStopNodeData;
    this.saveTextToParentTag = saveTextToParentTag;
  }
};
function addExternalEntities(externalEntities) {
  const entKeys = Object.keys(externalEntities);
  for (let i = 0; i < entKeys.length; i++) {
    const ent = entKeys[i];
    this.lastEntities[ent] = {
      regex: new RegExp("&" + ent + ";", "g"),
      val: externalEntities[ent]
    };
  }
}
function parseTextData(val, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
  if (val !== void 0) {
    if (this.options.trimValues && !dontTrim) {
      val = val.trim();
    }
    if (val.length > 0) {
      if (!escapeEntities)
        val = this.replaceEntitiesValue(val);
      const newval = this.options.tagValueProcessor(tagName, val, jPath, hasAttributes, isLeafNode);
      if (newval === null || newval === void 0) {
        return val;
      } else if (typeof newval !== typeof val || newval !== val) {
        return newval;
      } else if (this.options.trimValues) {
        return parseValue(val, this.options.parseTagValue, this.options.numberParseOptions);
      } else {
        const trimmedVal = val.trim();
        if (trimmedVal === val) {
          return parseValue(val, this.options.parseTagValue, this.options.numberParseOptions);
        } else {
          return val;
        }
      }
    }
  }
}
function resolveNameSpace(tagname) {
  if (this.options.removeNSPrefix) {
    const tags = tagname.split(":");
    const prefix = tagname.charAt(0) === "/" ? "/" : "";
    if (tags[0] === "xmlns") {
      return "";
    }
    if (tags.length === 2) {
      tagname = prefix + tags[1];
    }
  }
  return tagname;
}
var attrsRegx = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function buildAttributesMap(attrStr, jPath) {
  if (!this.options.ignoreAttributes && typeof attrStr === "string") {
    const matches = util.getAllMatches(attrStr, attrsRegx);
    const len = matches.length;
    const attrs = {};
    for (let i = 0; i < len; i++) {
      const attrName = this.resolveNameSpace(matches[i][1]);
      let oldVal = matches[i][4];
      const aName = this.options.attributeNamePrefix + attrName;
      if (attrName.length) {
        if (oldVal !== void 0) {
          if (this.options.trimValues) {
            oldVal = oldVal.trim();
          }
          oldVal = this.replaceEntitiesValue(oldVal);
          const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
          if (newVal === null || newVal === void 0) {
            attrs[aName] = oldVal;
          } else if (typeof newVal !== typeof oldVal || newVal !== oldVal) {
            attrs[aName] = newVal;
          } else {
            attrs[aName] = parseValue(
              oldVal,
              this.options.parseAttributeValue,
              this.options.numberParseOptions
            );
          }
        } else if (this.options.allowBooleanAttributes) {
          attrs[aName] = true;
        }
      }
    }
    if (!Object.keys(attrs).length) {
      return;
    }
    if (this.options.attributesGroupName) {
      const attrCollection = {};
      attrCollection[this.options.attributesGroupName] = attrs;
      return attrCollection;
    }
    return attrs;
  }
}
var parseXml = function(xmlData) {
  xmlData = xmlData.replace(/\r\n?/g, "\n");
  const xmlObj = new xmlNode("!xml");
  let currentNode = xmlObj;
  let textData = "";
  let jPath = "";
  for (let i = 0; i < xmlData.length; i++) {
    const ch = xmlData[i];
    if (ch === "<") {
      if (xmlData[i + 1] === "/") {
        const closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.");
        let tagName = xmlData.substring(i + 2, closeIndex).trim();
        if (this.options.removeNSPrefix) {
          const colonIndex = tagName.indexOf(":");
          if (colonIndex !== -1) {
            tagName = tagName.substr(colonIndex + 1);
          }
        }
        if (this.options.transformTagName) {
          tagName = this.options.transformTagName(tagName);
        }
        if (currentNode) {
          textData = this.saveTextToParentTag(textData, currentNode, jPath);
        }
        jPath = jPath.substr(0, jPath.lastIndexOf("."));
        currentNode = this.tagsNodeStack.pop();
        textData = "";
        i = closeIndex;
      } else if (xmlData[i + 1] === "?") {
        let tagData = readTagExp(xmlData, i, false, "?>");
        if (!tagData)
          throw new Error("Pi Tag is not closed.");
        textData = this.saveTextToParentTag(textData, currentNode, jPath);
        if (this.options.ignoreDeclaration && tagData.tagName === "?xml" || this.options.ignorePiTags)
          ;
        else {
          const childNode = new xmlNode(tagData.tagName);
          childNode.add(this.options.textNodeName, "");
          if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent) {
            childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath);
          }
          currentNode.addChild(childNode);
        }
        i = tagData.closeIndex + 1;
      } else if (xmlData.substr(i + 1, 3) === "!--") {
        const endIndex = findClosingIndex(xmlData, "-->", i + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const comment = xmlData.substring(i + 4, endIndex - 2);
          textData = this.saveTextToParentTag(textData, currentNode, jPath);
          currentNode.add(this.options.commentPropName, [{ [this.options.textNodeName]: comment }]);
        }
        i = endIndex;
      } else if (xmlData.substr(i + 1, 2) === "!D") {
        const result = readDocType(xmlData, i);
        this.docTypeEntities = result.entities;
        i = result.i;
      } else if (xmlData.substr(i + 1, 2) === "![") {
        const closeIndex = findClosingIndex(xmlData, "]]>", i, "CDATA is not closed.") - 2;
        const tagExp = xmlData.substring(i + 9, closeIndex);
        textData = this.saveTextToParentTag(textData, currentNode, jPath);
        if (this.options.cdataPropName) {
          currentNode.add(this.options.cdataPropName, [{ [this.options.textNodeName]: tagExp }]);
        } else {
          let val = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true);
          if (val == void 0)
            val = "";
          currentNode.add(this.options.textNodeName, val);
        }
        i = closeIndex + 2;
      } else {
        let result = readTagExp(xmlData, i, this.options.removeNSPrefix);
        let tagName = result.tagName;
        let tagExp = result.tagExp;
        let attrExpPresent = result.attrExpPresent;
        let closeIndex = result.closeIndex;
        if (this.options.transformTagName) {
          tagName = this.options.transformTagName(tagName);
        }
        if (currentNode && textData) {
          if (currentNode.tagname !== "!xml") {
            textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
          }
        }
        if (tagName !== xmlObj.tagname) {
          jPath += jPath ? "." + tagName : tagName;
        }
        const lastTag = currentNode;
        if (lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1) {
          currentNode = this.tagsNodeStack.pop();
        }
        if (this.isItStopNode(this.options.stopNodes, jPath, tagName)) {
          let tagContent = "";
          if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
            i = result.closeIndex;
          } else if (this.options.unpairedTags.indexOf(tagName) !== -1) {
            i = result.closeIndex;
          } else {
            const result2 = this.readStopNodeData(xmlData, tagName, closeIndex + 1);
            if (!result2)
              throw new Error(`Unexpected end of ${tagName}`);
            i = result2.i;
            tagContent = result2.tagContent;
          }
          const childNode = new xmlNode(tagName);
          if (tagName !== tagExp && attrExpPresent) {
            childNode[":@"] = this.buildAttributesMap(tagExp, jPath);
          }
          if (tagContent) {
            tagContent = this.parseTextData(tagContent, tagName, jPath, true, attrExpPresent, true, true);
          }
          jPath = jPath.substr(0, jPath.lastIndexOf("."));
          childNode.add(this.options.textNodeName, tagContent);
          currentNode.addChild(childNode);
        } else {
          if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
            if (tagName[tagName.length - 1] === "/") {
              tagName = tagName.substr(0, tagName.length - 1);
              tagExp = tagName;
            } else {
              tagExp = tagExp.substr(0, tagExp.length - 1);
            }
            if (this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }
            const childNode = new xmlNode(tagName);
            if (tagName !== tagExp && attrExpPresent) {
              childNode[":@"] = this.buildAttributesMap(tagExp, jPath);
            }
            jPath = jPath.substr(0, jPath.lastIndexOf("."));
            currentNode.addChild(childNode);
          } else {
            const childNode = new xmlNode(tagName);
            this.tagsNodeStack.push(currentNode);
            if (tagName !== tagExp && attrExpPresent) {
              childNode[":@"] = this.buildAttributesMap(tagExp, jPath);
            }
            currentNode.addChild(childNode);
            currentNode = childNode;
          }
          textData = "";
          i = closeIndex;
        }
      }
    } else {
      textData += xmlData[i];
    }
  }
  return xmlObj.child;
};
var replaceEntitiesValue$2 = function(val) {
  if (this.options.processEntities) {
    for (let entityName in this.docTypeEntities) {
      const entity = this.docTypeEntities[entityName];
      val = val.replace(entity.regx, entity.val);
    }
    for (let entityName in this.lastEntities) {
      const entity = this.lastEntities[entityName];
      val = val.replace(entity.regex, entity.val);
    }
    if (this.options.htmlEntities) {
      for (let entityName in this.htmlEntities) {
        const entity = this.htmlEntities[entityName];
        val = val.replace(entity.regex, entity.val);
      }
    }
    val = val.replace(this.ampEntity.regex, this.ampEntity.val);
  }
  return val;
};
function saveTextToParentTag(textData, currentNode, jPath, isLeafNode) {
  if (textData) {
    if (isLeafNode === void 0)
      isLeafNode = Object.keys(currentNode.child).length === 0;
    textData = this.parseTextData(
      textData,
      currentNode.tagname,
      jPath,
      false,
      currentNode[":@"] ? Object.keys(currentNode[":@"]).length !== 0 : false,
      isLeafNode
    );
    if (textData !== void 0 && textData !== "")
      currentNode.add(this.options.textNodeName, textData);
    textData = "";
  }
  return textData;
}
function isItStopNode(stopNodes, jPath, currentTagName) {
  const allNodesExp = "*." + currentTagName;
  for (const stopNodePath in stopNodes) {
    const stopNodeExp = stopNodes[stopNodePath];
    if (allNodesExp === stopNodeExp || jPath === stopNodeExp)
      return true;
  }
  return false;
}
function tagExpWithClosingIndex(xmlData, i, closingChar = ">") {
  let attrBoundary;
  let tagExp = "";
  for (let index = i; index < xmlData.length; index++) {
    let ch = xmlData[index];
    if (attrBoundary) {
      if (ch === attrBoundary)
        attrBoundary = "";
    } else if (ch === '"' || ch === "'") {
      attrBoundary = ch;
    } else if (ch === closingChar[0]) {
      if (closingChar[1]) {
        if (xmlData[index + 1] === closingChar[1]) {
          return {
            data: tagExp,
            index
          };
        }
      } else {
        return {
          data: tagExp,
          index
        };
      }
    } else if (ch === "	") {
      ch = " ";
    }
    tagExp += ch;
  }
}
function findClosingIndex(xmlData, str, i, errMsg) {
  const closingIndex = xmlData.indexOf(str, i);
  if (closingIndex === -1) {
    throw new Error(errMsg);
  } else {
    return closingIndex + str.length - 1;
  }
}
function readTagExp(xmlData, i, removeNSPrefix, closingChar = ">") {
  const result = tagExpWithClosingIndex(xmlData, i + 1, closingChar);
  if (!result)
    return;
  let tagExp = result.data;
  const closeIndex = result.index;
  const separatorIndex = tagExp.search(/\s/);
  let tagName = tagExp;
  let attrExpPresent = true;
  if (separatorIndex !== -1) {
    tagName = tagExp.substr(0, separatorIndex).replace(/\s\s*$/, "");
    tagExp = tagExp.substr(separatorIndex + 1);
  }
  if (removeNSPrefix) {
    const colonIndex = tagName.indexOf(":");
    if (colonIndex !== -1) {
      tagName = tagName.substr(colonIndex + 1);
      attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
    }
  }
  return {
    tagName,
    tagExp,
    closeIndex,
    attrExpPresent
  };
}
function readStopNodeData(xmlData, tagName, i) {
  const startIndex = i;
  let openTagCount = 1;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === "<") {
      if (xmlData[i + 1] === "/") {
        const closeIndex = findClosingIndex(xmlData, ">", i, `${tagName} is not closed`);
        let closeTagName = xmlData.substring(i + 2, closeIndex).trim();
        if (closeTagName === tagName) {
          openTagCount--;
          if (openTagCount === 0) {
            return {
              tagContent: xmlData.substring(startIndex, i),
              i: closeIndex
            };
          }
        }
        i = closeIndex;
      } else if (xmlData[i + 1] === "?") {
        const closeIndex = findClosingIndex(xmlData, "?>", i + 1, "StopNode is not closed.");
        i = closeIndex;
      } else if (xmlData.substr(i + 1, 3) === "!--") {
        const closeIndex = findClosingIndex(xmlData, "-->", i + 3, "StopNode is not closed.");
        i = closeIndex;
      } else if (xmlData.substr(i + 1, 2) === "![") {
        const closeIndex = findClosingIndex(xmlData, "]]>", i, "StopNode is not closed.") - 2;
        i = closeIndex;
      } else {
        const tagData = readTagExp(xmlData, i, ">");
        if (tagData) {
          const openTagName = tagData && tagData.tagName;
          if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length - 1] !== "/") {
            openTagCount++;
          }
          i = tagData.closeIndex;
        }
      }
    }
  }
}
function parseValue(val, shouldParse, options) {
  if (shouldParse && typeof val === "string") {
    const newval = val.trim();
    if (newval === "true")
      return true;
    else if (newval === "false")
      return false;
    else
      return toNumber(val, options);
  } else {
    if (util.isExist(val)) {
      return val;
    } else {
      return "";
    }
  }
}
var OrderedObjParser_1 = OrderedObjParser$1;
var node2json = {};
function prettify$1(node, options) {
  return compress(node, options);
}
function compress(arr, options, jPath) {
  let text;
  const compressedObj = {};
  for (let i = 0; i < arr.length; i++) {
    const tagObj = arr[i];
    const property = propName$1(tagObj);
    let newJpath = "";
    if (jPath === void 0)
      newJpath = property;
    else
      newJpath = jPath + "." + property;
    if (property === options.textNodeName) {
      if (text === void 0)
        text = tagObj[property];
      else
        text += "" + tagObj[property];
    } else if (property === void 0) {
      continue;
    } else if (tagObj[property]) {
      let val = compress(tagObj[property], options, newJpath);
      const isLeaf = isLeafTag(val, options);
      if (tagObj[":@"]) {
        assignAttributes(val, tagObj[":@"], newJpath, options);
      } else if (Object.keys(val).length === 1 && val[options.textNodeName] !== void 0 && !options.alwaysCreateTextNode) {
        val = val[options.textNodeName];
      } else if (Object.keys(val).length === 0) {
        if (options.alwaysCreateTextNode)
          val[options.textNodeName] = "";
        else
          val = "";
      }
      if (compressedObj[property] !== void 0 && compressedObj.hasOwnProperty(property)) {
        if (!Array.isArray(compressedObj[property])) {
          compressedObj[property] = [compressedObj[property]];
        }
        compressedObj[property].push(val);
      } else {
        if (options.isArray(property, newJpath, isLeaf)) {
          compressedObj[property] = [val];
        } else {
          compressedObj[property] = val;
        }
      }
    }
  }
  if (typeof text === "string") {
    if (text.length > 0)
      compressedObj[options.textNodeName] = text;
  } else if (text !== void 0)
    compressedObj[options.textNodeName] = text;
  return compressedObj;
}
function propName$1(obj) {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (key !== ":@")
      return key;
  }
}
function assignAttributes(obj, attrMap, jpath, options) {
  if (attrMap) {
    const keys = Object.keys(attrMap);
    const len = keys.length;
    for (let i = 0; i < len; i++) {
      const atrrName = keys[i];
      if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) {
        obj[atrrName] = [attrMap[atrrName]];
      } else {
        obj[atrrName] = attrMap[atrrName];
      }
    }
  }
}
function isLeafTag(obj, options) {
  const propCount = Object.keys(obj).length;
  if (propCount === 0 || propCount === 1 && obj[options.textNodeName])
    return true;
  return false;
}
node2json.prettify = prettify$1;
var { buildOptions } = OptionsBuilder;
var OrderedObjParser = OrderedObjParser_1;
var { prettify } = node2json;
var validator$1 = validator$2;
var XMLParser$1 = class {
  constructor(options) {
    this.externalEntities = {};
    this.options = buildOptions(options);
  }
  parse(xmlData, validationOption) {
    if (typeof xmlData === "string")
      ;
    else if (xmlData.toString) {
      xmlData = xmlData.toString();
    } else {
      throw new Error("XML data is accepted in String or Bytes[] form.");
    }
    if (validationOption) {
      if (validationOption === true)
        validationOption = {};
      const result = validator$1.validate(xmlData, validationOption);
      if (result !== true) {
        throw Error(`${result.err.msg}:${result.err.line}:${result.err.col}`);
      }
    }
    const orderedObjParser = new OrderedObjParser(this.options);
    orderedObjParser.addExternalEntities(this.externalEntities);
    const orderedResult = orderedObjParser.parseXml(xmlData);
    if (this.options.preserveOrder || orderedResult === void 0)
      return orderedResult;
    else
      return prettify(orderedResult, this.options);
  }
  addEntity(key, value) {
    if (value.indexOf("&") !== -1) {
      throw new Error("Entity value can't have '&'");
    } else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) {
      throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
    } else if (value === "&") {
      throw new Error("An entity with value '&' is not permitted");
    } else {
      this.externalEntities[key] = value;
    }
  }
};
var XMLParser_1 = XMLParser$1;
var EOL = "\n";
function toXml(jArray, options) {
  return arrToStr(jArray, options, "", 0);
}
function arrToStr(arr, options, jPath, level) {
  let xmlStr = "";
  let indentation = "";
  if (options.format && options.indentBy.length > 0) {
    indentation = EOL + "" + options.indentBy.repeat(level);
  }
  for (let i = 0; i < arr.length; i++) {
    const tagObj = arr[i];
    const tagName = propName(tagObj);
    let newJPath = "";
    if (jPath.length === 0)
      newJPath = tagName;
    else
      newJPath = `${jPath}.${tagName}`;
    if (tagName === options.textNodeName) {
      let tagText = tagObj[tagName];
      if (!isStopNode(newJPath, options)) {
        tagText = options.tagValueProcessor(tagName, tagText);
        tagText = replaceEntitiesValue$1(tagText, options);
      }
      xmlStr += indentation + tagText;
      continue;
    } else if (tagName === options.cdataPropName) {
      xmlStr += indentation + `<![CDATA[${tagObj[tagName][0][options.textNodeName]}]]>`;
      continue;
    } else if (tagName === options.commentPropName) {
      xmlStr += indentation + `<!--${tagObj[tagName][0][options.textNodeName]}-->`;
      continue;
    } else if (tagName[0] === "?") {
      const attStr2 = attr_to_str(tagObj[":@"], options);
      const tempInd = tagName === "?xml" ? "" : indentation;
      let piTextNodeName = tagObj[tagName][0][options.textNodeName];
      piTextNodeName = piTextNodeName.length !== 0 ? " " + piTextNodeName : "";
      xmlStr += tempInd + `<${tagName}${piTextNodeName}${attStr2}?>`;
      continue;
    }
    const attStr = attr_to_str(tagObj[":@"], options);
    let tagStart = indentation + `<${tagName}${attStr}`;
    let tagValue = arrToStr(tagObj[tagName], options, newJPath, level + 1);
    if (options.unpairedTags.indexOf(tagName) !== -1) {
      if (options.suppressUnpairedNode)
        xmlStr += tagStart + ">";
      else
        xmlStr += tagStart + "/>";
    } else if ((!tagValue || tagValue.length === 0) && options.suppressEmptyNode) {
      xmlStr += tagStart + "/>";
    } else {
      xmlStr += tagStart + `>${tagValue}${indentation}</${tagName}>`;
    }
  }
  return xmlStr;
}
function propName(obj) {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (key !== ":@")
      return key;
  }
}
function attr_to_str(attrMap, options) {
  let attrStr = "";
  if (attrMap && !options.ignoreAttributes) {
    for (let attr in attrMap) {
      let attrVal = options.attributeValueProcessor(attr, attrMap[attr]);
      attrVal = replaceEntitiesValue$1(attrVal, options);
      if (attrVal === true && options.suppressBooleanAttributes) {
        attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}`;
      } else {
        attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}="${attrVal}"`;
      }
    }
  }
  return attrStr;
}
function isStopNode(jPath, options) {
  jPath = jPath.substr(0, jPath.length - options.textNodeName.length - 1);
  let tagName = jPath.substr(jPath.lastIndexOf(".") + 1);
  for (let index in options.stopNodes) {
    if (options.stopNodes[index] === jPath || options.stopNodes[index] === "*." + tagName)
      return true;
  }
  return false;
}
function replaceEntitiesValue$1(textValue, options) {
  if (textValue && textValue.length > 0 && options.processEntities) {
    for (let i = 0; i < options.entities.length; i++) {
      const entity = options.entities[i];
      textValue = textValue.replace(entity.regex, entity.val);
    }
  }
  return textValue;
}
var orderedJs2Xml = toXml;
var buildFromOrderedJs = orderedJs2Xml;
var defaultOptions = {
  attributeNamePrefix: "@_",
  attributesGroupName: false,
  textNodeName: "#text",
  ignoreAttributes: true,
  cdataPropName: false,
  format: false,
  indentBy: "  ",
  suppressEmptyNode: false,
  suppressUnpairedNode: true,
  suppressBooleanAttributes: true,
  tagValueProcessor: function(key, a) {
    return a;
  },
  attributeValueProcessor: function(attrName, a) {
    return a;
  },
  preserveOrder: false,
  commentPropName: false,
  unpairedTags: [],
  entities: [
    { regex: new RegExp("&", "g"), val: "&amp;" },
    { regex: new RegExp(">", "g"), val: "&gt;" },
    { regex: new RegExp("<", "g"), val: "&lt;" },
    { regex: new RegExp("'", "g"), val: "&apos;" },
    { regex: new RegExp('"', "g"), val: "&quot;" }
  ],
  processEntities: true,
  stopNodes: [],
  transformTagName: false
};
function Builder(options) {
  this.options = Object.assign({}, defaultOptions, options);
  if (this.options.ignoreAttributes || this.options.attributesGroupName) {
    this.isAttribute = function() {
      return false;
    };
  } else {
    this.attrPrefixLen = this.options.attributeNamePrefix.length;
    this.isAttribute = isAttribute;
  }
  this.processTextOrObjNode = processTextOrObjNode;
  if (this.options.format) {
    this.indentate = indentate;
    this.tagEndChar = ">\n";
    this.newLine = "\n";
  } else {
    this.indentate = function() {
      return "";
    };
    this.tagEndChar = ">";
    this.newLine = "";
  }
  if (this.options.suppressEmptyNode) {
    this.buildTextNode = buildEmptyTextNode;
    this.buildObjNode = buildEmptyObjNode;
  } else {
    this.buildTextNode = buildTextValNode;
    this.buildObjNode = buildObjectNode;
  }
  this.buildTextValNode = buildTextValNode;
  this.buildObjectNode = buildObjectNode;
  this.replaceEntitiesValue = replaceEntitiesValue;
  this.buildAttrPairStr = buildAttrPairStr;
}
Builder.prototype.build = function(jObj) {
  if (this.options.preserveOrder) {
    return buildFromOrderedJs(jObj, this.options);
  } else {
    if (Array.isArray(jObj) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1) {
      jObj = {
        [this.options.arrayNodeName]: jObj
      };
    }
    return this.j2x(jObj, 0).val;
  }
};
Builder.prototype.j2x = function(jObj, level) {
  let attrStr = "";
  let val = "";
  for (let key in jObj) {
    if (typeof jObj[key] === "undefined")
      ;
    else if (jObj[key] === null) {
      if (key[0] === "?")
        val += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
      else
        val += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
    } else if (jObj[key] instanceof Date) {
      val += this.buildTextNode(jObj[key], key, "", level);
    } else if (typeof jObj[key] !== "object") {
      const attr = this.isAttribute(key);
      if (attr) {
        attrStr += this.buildAttrPairStr(attr, "" + jObj[key]);
      } else {
        if (key === this.options.textNodeName) {
          let newval = this.options.tagValueProcessor(key, "" + jObj[key]);
          val += this.replaceEntitiesValue(newval);
        } else {
          val += this.buildTextNode(jObj[key], key, "", level);
        }
      }
    } else if (Array.isArray(jObj[key])) {
      const arrLen = jObj[key].length;
      for (let j = 0; j < arrLen; j++) {
        const item = jObj[key][j];
        if (typeof item === "undefined")
          ;
        else if (item === null) {
          if (key[0] === "?")
            val += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
          else
            val += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
        } else if (typeof item === "object") {
          val += this.processTextOrObjNode(item, key, level);
        } else {
          val += this.buildTextNode(item, key, "", level);
        }
      }
    } else {
      if (this.options.attributesGroupName && key === this.options.attributesGroupName) {
        const Ks = Object.keys(jObj[key]);
        const L = Ks.length;
        for (let j = 0; j < L; j++) {
          attrStr += this.buildAttrPairStr(Ks[j], "" + jObj[key][Ks[j]]);
        }
      } else {
        val += this.processTextOrObjNode(jObj[key], key, level);
      }
    }
  }
  return { attrStr, val };
};
function buildAttrPairStr(attrName, val) {
  val = this.options.attributeValueProcessor(attrName, "" + val);
  val = this.replaceEntitiesValue(val);
  if (this.options.suppressBooleanAttributes && val === "true") {
    return " " + attrName;
  } else
    return " " + attrName + '="' + val + '"';
}
function processTextOrObjNode(object, key, level) {
  const result = this.j2x(object, level + 1);
  if (object[this.options.textNodeName] !== void 0 && Object.keys(object).length === 1) {
    return this.buildTextNode(object[this.options.textNodeName], key, result.attrStr, level);
  } else {
    return this.buildObjNode(result.val, key, result.attrStr, level);
  }
}
function buildObjectNode(val, key, attrStr, level) {
  let tagEndExp = "</" + key + this.tagEndChar;
  let piClosingChar = "";
  if (key[0] === "?") {
    piClosingChar = "?";
    tagEndExp = "";
  }
  if (attrStr && val.indexOf("<") === -1) {
    return this.indentate(level) + "<" + key + attrStr + piClosingChar + ">" + val + tagEndExp;
  } else if (this.options.commentPropName !== false && key === this.options.commentPropName && piClosingChar.length === 0) {
    return this.indentate(level) + `<!--${val}-->` + this.newLine;
  } else {
    return this.indentate(level) + "<" + key + attrStr + piClosingChar + this.tagEndChar + val + this.indentate(level) + tagEndExp;
  }
}
function buildEmptyObjNode(val, key, attrStr, level) {
  if (val !== "") {
    return this.buildObjectNode(val, key, attrStr, level);
  } else {
    if (key[0] === "?")
      return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
    else
      return this.indentate(level) + "<" + key + attrStr + "/" + this.tagEndChar;
  }
}
function buildTextValNode(val, key, attrStr, level) {
  if (this.options.cdataPropName !== false && key === this.options.cdataPropName) {
    return this.indentate(level) + `<![CDATA[${val}]]>` + this.newLine;
  } else if (this.options.commentPropName !== false && key === this.options.commentPropName) {
    return this.indentate(level) + `<!--${val}-->` + this.newLine;
  } else {
    let textValue = this.options.tagValueProcessor(key, val);
    textValue = this.replaceEntitiesValue(textValue);
    if (textValue === "" && this.options.unpairedTags.indexOf(key) !== -1) {
      if (this.options.suppressUnpairedNode) {
        return this.indentate(level) + "<" + key + this.tagEndChar;
      } else {
        return this.indentate(level) + "<" + key + "/" + this.tagEndChar;
      }
    } else {
      return this.indentate(level) + "<" + key + attrStr + ">" + textValue + "</" + key + this.tagEndChar;
    }
  }
}
function replaceEntitiesValue(textValue) {
  if (textValue && textValue.length > 0 && this.options.processEntities) {
    for (let i = 0; i < this.options.entities.length; i++) {
      const entity = this.options.entities[i];
      textValue = textValue.replace(entity.regex, entity.val);
    }
  }
  return textValue;
}
function buildEmptyTextNode(val, key, attrStr, level) {
  if (val === "" && this.options.unpairedTags.indexOf(key) !== -1) {
    if (this.options.suppressUnpairedNode) {
      return this.indentate(level) + "<" + key + this.tagEndChar;
    } else {
      return this.indentate(level) + "<" + key + "/" + this.tagEndChar;
    }
  } else if (val !== "") {
    return this.buildTextValNode(val, key, attrStr, level);
  } else {
    if (key[0] === "?")
      return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
    else
      return this.indentate(level) + "<" + key + attrStr + "/" + this.tagEndChar;
  }
}
function indentate(level) {
  return this.options.indentBy.repeat(level);
}
function isAttribute(name) {
  if (name.startsWith(this.options.attributeNamePrefix)) {
    return name.substr(this.attrPrefixLen);
  } else {
    return false;
  }
}
var json2xml = Builder;
var validator = validator$2;
var XMLParser = XMLParser_1;
var XMLBuilder = json2xml;
var fxp = {
  XMLParser,
  XMLValidator: validator,
  XMLBuilder
};
function createCanonicalURL(url2, base) {
  let pathname = url2.replace(/\/index.html$/, "");
  pathname = pathname.replace(/\/1\/?$/, "");
  if (!getUrlExtension(url2))
    pathname = pathname.replace(/(\/+)?$/, "/");
  pathname = pathname.replace(/\/+/g, "/");
  return new URL(pathname, base);
}
function isValidURL(url2) {
  try {
    new URL(url2);
    return true;
  } catch (e) {
  }
  return false;
}
function getUrlExtension(url2) {
  const lastDot = url2.lastIndexOf(".");
  const lastSlash = url2.lastIndexOf("/");
  return lastDot > lastSlash ? url2.slice(lastDot + 1) : "";
}
function isGlobResult(items) {
  return typeof items === "object" && !items.length;
}
function mapGlobResult(items) {
  return Promise.all(
    Object.values(items).map(async (getInfo) => {
      const { url: url2, frontmatter: frontmatter2 } = await getInfo();
      if (url2 === void 0 || url2 === null) {
        throw new Error(
          `[RSS] When passing an import.meta.glob result directly, you can only glob ".md" files within /pages! Consider mapping the result to an array of RSSFeedItems. See the RSS docs for usage examples: https://docs.astro.build/en/guides/rss/#2-list-of-rss-feed-objects`
        );
      }
      if (!Boolean(frontmatter2.title) || !Boolean(frontmatter2.pubDate)) {
        throw new Error(`[RSS] "${url2}" is missing a "title" and/or "pubDate" in its frontmatter.`);
      }
      return {
        link: url2,
        title: frontmatter2.title,
        pubDate: frontmatter2.pubDate,
        description: frontmatter2.description,
        customData: frontmatter2.customData
      };
    })
  );
}
async function getRSS(rssOptions) {
  const { site } = rssOptions;
  let { items } = rssOptions;
  if (!site) {
    throw new Error('[RSS] the "site" option is required, but no value was given.');
  }
  if (isGlobResult(items)) {
    items = await mapGlobResult(items);
  }
  return {
    body: await generateRSS({
      rssOptions,
      items
    })
  };
}
async function generateRSS({ rssOptions, items }) {
  const { site } = rssOptions;
  let xml = `<?xml version="1.0" encoding="UTF-8"?>`;
  if (typeof rssOptions.stylesheet === "string") {
    xml += `<?xml-stylesheet href="${rssOptions.stylesheet}" type="text/xsl"?>`;
  }
  xml += `<rss version="2.0"`;
  if (rssOptions.xmlns) {
    for (const [k, v] of Object.entries(rssOptions.xmlns)) {
      xml += ` xmlns:${k}="${v}"`;
    }
  }
  xml += `>`;
  xml += `<channel>`;
  xml += `<title><![CDATA[${rssOptions.title}]]></title>`;
  xml += `<description><![CDATA[${rssOptions.description}]]></description>`;
  xml += `<link>${createCanonicalURL(site).href}</link>`;
  if (typeof rssOptions.customData === "string")
    xml += rssOptions.customData;
  for (const result of items) {
    validate(result);
    xml += `<item>`;
    xml += `<title><![CDATA[${result.title}]]></title>`;
    const itemLink = isValidURL(result.link) ? result.link : createCanonicalURL(result.link, site).href;
    xml += `<link>${itemLink}</link>`;
    xml += `<guid>${itemLink}</guid>`;
    if (result.description)
      xml += `<description><![CDATA[${result.description}]]></description>`;
    if (result.pubDate) {
      if (typeof result.pubDate === "number" || typeof result.pubDate === "string") {
        result.pubDate = new Date(result.pubDate);
      } else if (result.pubDate instanceof Date === false) {
        throw new Error("[${filename}] rss.item().pubDate must be a Date");
      }
      xml += `<pubDate>${result.pubDate.toUTCString()}</pubDate>`;
    }
    if (typeof result.customData === "string")
      xml += result.customData;
    xml += `</item>`;
  }
  xml += `</channel></rss>`;
  const isValid = fxp.XMLValidator.validate(xml);
  if (isValid !== true) {
    throw new Error(isValid);
  }
  return xml;
}
var requiredFields = Object.freeze(["link", "title"]);
function validate(item) {
  for (const field of requiredFields) {
    if (!(field in item)) {
      throw new Error(
        `@astrojs/rss: Required field [${field}] is missing. RSS cannot be generated without it.`
      );
    }
  }
}
var get = () => getRSS({
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  site: "https://notioncommerce.com/",
  items: /* @__PURE__ */ Object.assign({})
});
var _page4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get
}, Symbol.toStringTag, { value: "Module" }));
var html$5 = '<div class="max-w-4xl mx-auto my-6">\n<h3 class="text-2xl font-medium mb-4">Refund policy</h3>\n<p>You are entitled to cancel your subscription without giving any reason\nfor doing so. Altough it will be great if you can give us a feedback,\nso we know where to improve. The deadline for canceling an\nsubscription is 7 days from the date you activated your subscription.</p>\n<br>\n<p>You can inform us of your decision by e-mail <a href="mailto:arif@notioncommerce.com">arif@notioncommerce.com</a> We\nwill reimburse you no later than 30 days from the day you paid for the\nsubscription. We will use the same means of payment as you used for\nthe subscription, and you will not incur any fees for such\nreimbursement.\nIf you have any questions about our Returns and Refunds Policy, please\ncontact us by e-mail <a href="mailto:arif@notioncommerce.com">arif@notioncommerce.com</a></p>\n</div>';
var frontmatter$5 = {};
var file$5 = "/Users/arif/Projects/notioncommerce/narrow-sea/src/pages/refund.md";
var url$5 = "/refund";
function rawContent$5() {
  return '<div class="max-w-4xl mx-auto my-6">\n<h3 class="text-2xl font-medium mb-4">Refund policy</h3>\n\nYou are entitled to cancel your subscription without giving any reason\nfor doing so. Altough it will be great if you can give us a feedback,\nso we know where to improve. The deadline for canceling an\nsubscription is 7 days from the date you activated your subscription.\n\n</br>\n\nYou can inform us of your decision by e-mail arif@notioncommerce.com We\nwill reimburse you no later than 30 days from the day you paid for the\nsubscription. We will use the same means of payment as you used for\nthe subscription, and you will not incur any fees for such\nreimbursement.\nIf you have any questions about our Returns and Refunds Policy, please\ncontact us by e-mail arif@notioncommerce.com\n</div>\n\n';
}
function compiledContent$5() {
  return html$5;
}
function getHeadings$5() {
  return [];
}
function getHeaders$5() {
  console.warn("getHeaders() have been deprecated. Use getHeadings() function instead.");
  return getHeadings$5();
}
async function Content$5() {
  const { layout, ...content } = frontmatter$5;
  content.file = file$5;
  content.url = url$5;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }
  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }
  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }
  });
  const contentFragment = createVNode(Fragment, { "set:html": html$5 });
  return contentFragment;
}
Content$5[Symbol.for("astro.needsHeadRendering")] = true;
var _page5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  frontmatter: frontmatter$5,
  file: file$5,
  url: url$5,
  rawContent: rawContent$5,
  compiledContent: compiledContent$5,
  getHeadings: getHeadings$5,
  getHeaders: getHeaders$5,
  Content: Content$5,
  default: Content$5
}, Symbol.toStringTag, { value: "Module" }));
var html$4 = '<p>If you use a tool like <a href="https://notioncommerce.com" target="_blank">NotonCommerce</a> to get product orders from your customers around the \u{1F30F} or part of an international team, You may get the times in <strong>UTC</strong> format.</p>\n<p>But to get a better understanding of time, we sometiems need to convert the time to our local timezone. Lucily we can easliy achive this with Notion formulas! \u{1F60C}</p>\n<p>(If you don\u2019t have the basics of Notion formulas, watching this \u{1F447}\u{1F3FC} video first will be very helpful.)</p>\n<br>\n<iframe class="w-full md:w-3/4 h-52 md:h-80" src="https://www.youtube.com/embed/e_jAOh7JO_Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n<br>\n<br>\n<h2 id="convert-from-utc">Convert from UTC</h2>\n<p>\xB7 First visit <a href="https://www.timeanddate.com/time/zone/japan/tokyo" target="_blank">timeanddate</a> get the timezone offset of your location. For example, If you live in Tokyo, Japan your timezone is GMT <strong>+9.00</strong>.</p>\n<p>\xB7 Create a sperate formula column to store you local time.</p>\n<p>\xB7 Use \u{1F449} <strong><em>dateAdd(prop(\u201COG Time\u201D), X, \u201Chours\u201D)</em></strong> formula to convert the UTC time to your timezone. (Replace <strong><em>X</em></strong> with your timezone.)</p>\n<br>\n<p><img src="/blogs/notion/notion-utc-tokyo.png" alt="Notion UTC To Tokyo"></p>\n<br>\n<h2 id="convert-one-timezone-to-another">Convert One Timezone to Another</h2>\n<p>(Be prepared to do some basic math \u{1F61C})</p>\n<p>If you source time is not in UTC, then only extra thing you need to do is find the hour difference between the source and your own timezone.</p>\n<p>Let\u2019s see and exmaple,\nHere my source is from New York, USA and I need to convert it to Tokyo, Japan</p>\n<p>\xB7 The Timezone of New York is GMT <strong>-4.00</strong> and Tokyo is GMT <strong>+9.00</strong>. So my hour difference is <strong>+13.00</strong>.</p>\n<p>\xB7 Now your formula will me <strong><em>dateAdd(prop(\u201COG Time\u201D), 13, \u201Chours\u201D)</em></strong>.</p>\n<br>\n<p><img src="/blogs/notion/notion-new-york-tokyo.png" alt="Notion New York To Tokyo"></p>\n<br>';
var frontmatter$4 = { "layout": "../../layouts/BlogPost.astro", "title": "How To Convert Time Zones With Notion", "description": "Use notin formula to convert timezones. In this article I gave an example of converting from UTC to Tokyo, Japan and also from New York, USA to Tokyo, Japan.", "pubDate": "Aug 18, 2022", "url": "noiton-convert-timezone", "tags": "notion, notioncommerce", "heroImage": "/blogs/notion/notion-new-york-tokyo.png" };
var file$4 = "/Users/arif/Projects/notioncommerce/narrow-sea/src/pages/blogs/noiton-convert-timezone.md";
var url$4 = "/blogs/noiton-convert-timezone";
function rawContent$4() {
  return `
If you use a tool like <a href="https://notioncommerce.com" target="_blank">NotonCommerce</a> to get product orders from your customers around the \u{1F30F} or part of an international team, You may get the times in **UTC** format.

But to get a better understanding of time, we sometiems need to convert the time to our local timezone. Lucily we can easliy achive this with Notion formulas! \u{1F60C}

(If you don't have the basics of Notion formulas, watching this \u{1F447}\u{1F3FC} video first will be very helpful.)

<br />

<iframe class="w-full md:w-3/4 h-52 md:h-80" src="https://www.youtube.com/embed/e_jAOh7JO_Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br />
<br />

## Convert from UTC

\xB7 First visit <a href="https://www.timeanddate.com/time/zone/japan/tokyo" target="_blank">timeanddate</a> get the timezone offset of your location. For example, If you live in Tokyo, Japan your timezone is GMT **+9.00**.

\xB7 Create a sperate formula column to store you local time.

\xB7 Use \u{1F449} **_dateAdd(prop("OG Time"), X, "hours")_** formula to convert the UTC time to your timezone. (Replace **_X_** with your timezone.)

<br />

![Notion UTC To Tokyo](/blogs/notion/notion-utc-tokyo.png)

<br />

## Convert One Timezone to Another

(Be prepared to do some basic math \u{1F61C})

If you source time is not in UTC, then only extra thing you need to do is find the hour difference between the source and your own timezone.

Let's see and exmaple,
Here my source is from New York, USA and I need to convert it to Tokyo, Japan

\xB7 The Timezone of New York is GMT **-4.00** and Tokyo is GMT **+9.00**. So my hour difference is **+13.00**.

\xB7 Now your formula will me **_dateAdd(prop("OG Time"), 13, "hours")_**.

<br />

![Notion New York To Tokyo](/blogs/notion/notion-new-york-tokyo.png)

<br />
`;
}
function compiledContent$4() {
  return html$4;
}
function getHeadings$4() {
  return [{ "depth": 2, "slug": "convert-from-utc", "text": "Convert from UTC" }, { "depth": 2, "slug": "convert-one-timezone-to-another", "text": "Convert One Timezone to Another" }];
}
function getHeaders$4() {
  console.warn("getHeaders() have been deprecated. Use getHeadings() function instead.");
  return getHeadings$4();
}
async function Content$4() {
  const { layout, ...content } = frontmatter$4;
  content.file = file$4;
  content.url = url$4;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }
  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }
  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }
  });
  const contentFragment = createVNode(Fragment, { "set:html": html$4 });
  return createVNode($$BlogPost, {
    file: file$4,
    url: url$4,
    content,
    frontmatter: content,
    headings: getHeadings$4(),
    rawContent: rawContent$4,
    compiledContent: compiledContent$4,
    "server:root": true,
    children: contentFragment
  });
}
Content$4[Symbol.for("astro.needsHeadRendering")] = false;
var _page6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  frontmatter: frontmatter$4,
  file: file$4,
  url: url$4,
  rawContent: rawContent$4,
  compiledContent: compiledContent$4,
  getHeadings: getHeadings$4,
  getHeaders: getHeaders$4,
  Content: Content$4,
  default: Content$4
}, Symbol.toStringTag, { value: "Module" }));
var html$3 = '<p>I started learning we Dev back in 2018 and till now all projects I have worked on were API based.</p>\n<p>So I never had the experience/felt the need of building projects in the \u201Cgood old\u201D days. Like when that was used to render everything on the server, the era of MVC, LAMP stack, jQuery, Ajax, etc. So whenever I heard senior developers explaining the pros &#x26; cons of serving clients from the server, I kinda got the theories, but never truly resonated with them.</p>\n<p>Until recently, thanks to my DBMS course project, I built <a href="http://indiehacks.link">indiehacks.link</a> with Laravel and Blade template engine following MVC pattern.</p>\n<br>\n<p>BTW I\u2019m happy to announce that now I finally understand why people says NextJS routing is inspired by PHP. \u{1F62C}</p>\n<p>Ok, Let\u2019s discuss some of my positive and negative experiences.</p>\n<br>\n<br>\n<h2 id="positives">Positives:</h2>\n<br>\n<p>\u{1F449} It just felt \u201Cchill\u201D.\nI just wrote codes for each page and it just worked. I didn\u2019t have to stress about building multiple APIs and how the front end will pass the required parameters or consume the response.</p>\n<p>Also, there was no headache of frontend state management either! So overall it\u2019s much easier, at least on the frontend side.\n<br></p>\n<p>\u{1F449} I loved Laravel!\nIt has a built-in solution for all basic needs. Tired of building auth solutions over and over? Building CRUD routes? Integrating payments solution? Just run a few Laravel commands and it\u2019s Done!!</p>\n<p>Normally I don\u2019t like heavy frameworks but IDK why but Laravel felt \u201Corganized\u201D and easy to adopt.\n<br>\n<br></p>\n<h2 id="negatives">Negatives:</h2>\n<br>\n<p>\u{1F449} Everything felt \u201Cslow\u201D.\nI\u2019m sure this is primarily because of my lack of knowledge on how to improve server-rendered sites!</p>\n<p>Like here in this case I need to search for projects by my name. I had no idea how I can pass this data to the server! So guess what I did? I pushed the search query to the URL params, which resulted in a full page load!!</p>\n<img src="/blogs/good-old-days-of-web.png" alt="search ss" class="h-100 my-6 mx-auto">\nIDK if this could be improved my AJAX or something or if I\u2019m just doing it wrong. But this does feel I need to use different solutions to improve the performance, which we get out of the box in modern tech stacks.\n<br>\n<p>\u{1F449} Felt less reusable.\nAs someone who prefers JSX over plain HTML, I\u2019m used to thinking of UI as different components. Though this can be done with Laravel Blade to some extent, But I found it very hard to make this reusable compared to the modern frontend frameworks.</p>';
var frontmatter$3 = { "layout": "../../layouts/BlogPost.astro", "title": "I built a website like the \u201Cgood old\u201D days.", "description": "Ever since I started building websites, all of them were API based. This is the first time I build an server rendered website with PHP, Laravel & Blade", "pubDate": "Sep 22, 2022", "url": "good-old-days-of-web", "tags": "programming, experience", "heroImage": "/blogs/good-old-days-of-web.png" };
var file$3 = "/Users/arif/Projects/notioncommerce/narrow-sea/src/pages/blogs/good-old-days-of-web.md";
var url$3 = "/blogs/good-old-days-of-web";
function rawContent$3() {
  return `
I started learning we Dev back in 2018 and till now all projects I have worked on were API based.

So I never had the experience/felt the need of building projects in the \u201Cgood old\u201D days. Like when that was used to render everything on the server, the era of MVC, LAMP stack, jQuery, Ajax, etc. So whenever I heard senior developers explaining the pros & cons of serving clients from the server, I kinda got the theories, but never truly resonated with them.

Until recently, thanks to my DBMS course project, I built [indiehacks.link](http://indiehacks.link) with Laravel and Blade template engine following MVC pattern.

<br />

BTW I\u2019m happy to announce that now I finally understand why people says NextJS routing is inspired by PHP. \u{1F62C}

Ok, Let's discuss some of my positive and negative experiences.

<br />
<br />

## Positives:

<br />

\u{1F449} It just felt \u201Cchill\u201D.
I just wrote codes for each page and it just worked. I didn\u2019t have to stress about building multiple APIs and how the front end will pass the required parameters or consume the response.

Also, there was no headache of frontend state management either! So overall it\u2019s much easier, at least on the frontend side.
<br />

\u{1F449} I loved Laravel!
It has a built-in solution for all basic needs. Tired of building auth solutions over and over? Building CRUD routes? Integrating payments solution? Just run a few Laravel commands and it\u2019s Done!!

Normally I don\u2019t like heavy frameworks but IDK why but Laravel felt \u201Corganized\u201D and easy to adopt.
<br />
<br />

## Negatives:

<br />

\u{1F449} Everything felt \u201Cslow\u201D.
I\u2019m sure this is primarily because of my lack of knowledge on how to improve server-rendered sites!

Like here in this case I need to search for projects by my name. I had no idea how I can pass this data to the server! So guess what I did? I pushed the search query to the URL params, which resulted in a full page load!!

<img src="/blogs/good-old-days-of-web.png" alt="search ss" class="h-100 my-6 mx-auto">
IDK if this could be improved my AJAX or something or if I\u2019m just doing it wrong. But this does feel I need to use different solutions to improve the performance, which we get out of the box in modern tech stacks.
<br />

\u{1F449} Felt less reusable.
As someone who prefers JSX over plain HTML, I\u2019m used to thinking of UI as different components. Though this can be done with Laravel Blade to some extent, But I found it very hard to make this reusable compared to the modern frontend frameworks.`;
}
function compiledContent$3() {
  return html$3;
}
function getHeadings$3() {
  return [{ "depth": 2, "slug": "positives", "text": "Positives:" }, { "depth": 2, "slug": "negatives", "text": "Negatives:" }];
}
function getHeaders$3() {
  console.warn("getHeaders() have been deprecated. Use getHeadings() function instead.");
  return getHeadings$3();
}
async function Content$3() {
  const { layout, ...content } = frontmatter$3;
  content.file = file$3;
  content.url = url$3;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }
  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }
  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }
  });
  const contentFragment = createVNode(Fragment, { "set:html": html$3 });
  return createVNode($$BlogPost, {
    file: file$3,
    url: url$3,
    content,
    frontmatter: content,
    headings: getHeadings$3(),
    rawContent: rawContent$3,
    compiledContent: compiledContent$3,
    "server:root": true,
    children: contentFragment
  });
}
Content$3[Symbol.for("astro.needsHeadRendering")] = false;
var _page7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  frontmatter: frontmatter$3,
  file: file$3,
  url: url$3,
  rawContent: rawContent$3,
  compiledContent: compiledContent$3,
  getHeadings: getHeadings$3,
  getHeaders: getHeaders$3,
  Content: Content$3,
  default: Content$3
}, Symbol.toStringTag, { value: "Module" }));
var html$2 = '<p>I\u2019m really grateful for being born in this age where there\u2019s so many tools available that starting a business have never been easier. \u270C\uFE0F Thought one can argue low barrier to entry creates more competition, to growing is becoming more difficult! But that\u2019s a separate discussion.</p>\n<p>Coming back to my topic, I launched <a href="http://notioncommerce.com">NotionCommerce</a> with help of some amazing tools. Shoutout to them for offering generous free tiers.</p>\n<br>\n<h2 id="tech-stack">Tech Stack</h2>\n<ul>\n<li>Backend &#x26; DB \u2192 <a href="https://firebase.google.com/">Firebase</a></li>\n<li>Auth \u2192 <a href="https://firebase.google.com/">Firebase</a></li>\n<li>Framework \u2192 <a href="https://nextjs.org/">NextJS</a></li>\n<li>Language \u2192 <a href="https://www.typescriptlang.org/">TypeScirpt</a></li>\n<li>Hosted \u2192 <a href="http://vercel.com">Vercel</a></li>\n<li>UI \u2192 <a href="https://mantine.dev/">Mantine</a></li>\n</ul>\n<br>\n<h2 id="marketing">Marketing</h2>\n<ul>\n<li>Email \u2192 <a href="https://www.mailerlite.com/">MailerLite</a></li>\n<li>Social \u2192 <a href="https://twitter.com/NotionCommerce">Twitter</a></li>\n<li>Community \u2192 <a href="https://join.slack.com/t/notioncommerce/shared_invite/zt-1f7fh8bw6-mD0bsSzhTztI9CpXRGLPSg">Slack</a></li>\n</ul>\n<br>\n<h2 id="operation">Operation</h2>\n<ul>\n<li>Forms \u2192 <a href="https://tally.so">TallyForms</a></li>\n<li>WIKI \u2192 <a href="https://www.notion.so/">Notion</a></li>\n<li>Automation \u2192 <a href="https://zapier.com/">Zapier</a></li>\n</ul>\n<br>\n<h2 id="analytics">Analytics</h2>\n<ul>\n<li>Website \u2192 <a href="https://splitbee.io/">Splitbee</a></li>\n<li>Product \u2192 <a href="https://amplitude.com/">Amplitube</a></li>\n</ul>\n<br>\n<p>If you are interested in Notion, eCommerce or no-code in general, Please feel free to join our community on Slack.</p>\n<p>Invitation Link: <a href="https://join.slack.com/t/notioncommerce/shared_invite/zt-1f7fh8bw6-mD0bsSzhTztI9CpXRGLPSg">https://join.slack.com/t/notioncommerce/shared_invite/zt-1f7fh8bw6-mD0bsSzhTztI9CpXRGLPSg</a></p>';
var frontmatter$2 = { "layout": "../../layouts/BlogPost.astro", "title": "Tools I am using to run NotionCommerce.", "description": "For the past few years I have used many different tools or software to fit different use cases. Fortunatly I have found a few that I love. Listing few of them in this article to run my SAAS business.", "pubDate": "September 05, 2022", "url": "tools-notioncommerce", "tags": "tools, notioncommerce", "heroImage": "/blogs/notion/tools-notioncommerce.png" };
var file$2 = "/Users/arif/Projects/notioncommerce/narrow-sea/src/pages/blogs/tools-notioncommerce.md";
var url$2 = "/blogs/tools-notioncommerce";
function rawContent$2() {
  return "\nI\u2019m really grateful for being born in this age where there\u2019s so many tools available that starting a business have never been easier. \u270C\uFE0F Thought one can argue low barrier to entry creates more competition, to growing is becoming more difficult! But that\u2019s a separate discussion.\n\nComing back to my topic, I launched [NotionCommerce](http://notioncommerce.com) with help of some amazing tools. Shoutout to them for offering generous free tiers.\n\n<br/>\n\n## Tech Stack\n\n- Backend & DB \u2192 [Firebase](https://firebase.google.com/)\n- Auth \u2192 [Firebase](https://firebase.google.com/)\n- Framework \u2192 [NextJS](https://nextjs.org/)\n- Language \u2192 [TypeScirpt](https://www.typescriptlang.org/)\n- Hosted \u2192 [Vercel](http://vercel.com)\n- UI \u2192 [Mantine](https://mantine.dev/)\n\n<br/>\n\n## Marketing\n\n- Email \u2192 [MailerLite](https://www.mailerlite.com/)\n- Social \u2192 [Twitter](https://twitter.com/NotionCommerce)\n- Community \u2192 [Slack](https://join.slack.com/t/notioncommerce/shared_invite/zt-1f7fh8bw6-mD0bsSzhTztI9CpXRGLPSg)\n\n<br/>\n\n## Operation\n\n- Forms \u2192 [TallyForms](https://tally.so)\n- WIKI \u2192 [Notion](https://www.notion.so/)\n- Automation \u2192 [Zapier](https://zapier.com/)\n\n<br/>\n\n## Analytics\n\n- Website \u2192 [Splitbee](https://splitbee.io/)\n- Product \u2192 [Amplitube](https://amplitude.com/)\n\n<br/>\n\nIf you are interested in Notion, eCommerce or no-code in general, Please feel free to join our community on Slack.\n\nInvitation Link: [https://join.slack.com/t/notioncommerce/shared_invite/zt-1f7fh8bw6-mD0bsSzhTztI9CpXRGLPSg](https://join.slack.com/t/notioncommerce/shared_invite/zt-1f7fh8bw6-mD0bsSzhTztI9CpXRGLPSg)";
}
function compiledContent$2() {
  return html$2;
}
function getHeadings$2() {
  return [{ "depth": 2, "slug": "tech-stack", "text": "Tech Stack" }, { "depth": 2, "slug": "marketing", "text": "Marketing" }, { "depth": 2, "slug": "operation", "text": "Operation" }, { "depth": 2, "slug": "analytics", "text": "Analytics" }];
}
function getHeaders$2() {
  console.warn("getHeaders() have been deprecated. Use getHeadings() function instead.");
  return getHeadings$2();
}
async function Content$2() {
  const { layout, ...content } = frontmatter$2;
  content.file = file$2;
  content.url = url$2;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }
  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }
  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }
  });
  const contentFragment = createVNode(Fragment, { "set:html": html$2 });
  return createVNode($$BlogPost, {
    file: file$2,
    url: url$2,
    content,
    frontmatter: content,
    headings: getHeadings$2(),
    rawContent: rawContent$2,
    compiledContent: compiledContent$2,
    "server:root": true,
    children: contentFragment
  });
}
Content$2[Symbol.for("astro.needsHeadRendering")] = false;
var _page8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  frontmatter: frontmatter$2,
  file: file$2,
  url: url$2,
  rawContent: rawContent$2,
  compiledContent: compiledContent$2,
  getHeadings: getHeadings$2,
  getHeaders: getHeaders$2,
  Content: Content$2,
  default: Content$2
}, Symbol.toStringTag, { value: "Module" }));
var html$1 = "<p>Ok, I admit I\u2019m a student and some of my reasoning might be biased! So read with caution \u{1F636}</p>\n<p>I guess you know that bashing on college/uni has become a norm, Which definitely they deserve &#x26; I\u2019m also guilty of doing so. But besides doing full-time jobs &#x26; indie hacking on the side, I\u2019m still studying computer science at Uni. And I decided not to drop out either.</p>\n<br>\nWhy? Well, I actually made e list \u{1F447}\n<br>\n<br>\n<p>\u{1F449} The biggest reasoning I hear against college is the content you learn there is totally free online. Which is 100% true, If just learning about your field is your only priority then college will definitely not be for you.\nBut as I realised in the past couple of years that college isn\u2019t actually for learning! It\u2019s more about the experience!</p>\n<br>\n<p>\u{1F449} You get to know different learners, make friends, do networking, and have weird &#x26; fun memories.</p>\n<br>\n<p>\u{1F449} Being around a large amount of hard-working young people is a privilege. I truly get motivated seeing some of my classmates working hard. Whether it is for getting good grades/running a small business/preparing for a competition.</p>\n<br>\n<p>\u{1F449} When You have to schedule yourself for different classes, and exams besides your own personal things (Hobbies/Job/Business..) You learn a lot about time management.</p>\n<br>\n<p>\u{1F449} Paying tuition fees every semester hurt a lot, but In a way, it kind of pushed me to manage money better.</p>\n<br>\n<p>\u{1F449} It\u2019s a great phase for exploring different stuff.\nI\u2019m quite certain I will run businesses as a career, but I\u2019m don\u2019t wanna just quit everything and go all in right now. I\u2019m using this student phase as an opportunity to explore things that I care about, whether it is programming/ marketing/ writing/ making videos/ audience building/ gardening or cooking. And tbh I also wanna try out standup comedy sometime next year. Coz why not? In general, you have so less responsibilities as a student and plenty of opportunities to explore.</p>\n<br>\n<p>\u{1F449} Graduating can be a great way to give your parents a sense of pride. I don\u2019t know if it\u2019s just an Asian parent\u2019s thing, but my parents really wanna see me graduate.</p>\n<br>\n<p>Now of course this ar just my own \u201Cpositive\u201D experience and I\u2019m not saying anyone should do college or drop out. I just wanted to share some of my good experiences with college after bashing it all my life. \u{1F636}</p>";
var frontmatter$1 = { "layout": "../../layouts/BlogPost.astro", "title": "You probably can't replace College with YouTube/Online resources.", "description": "University Sucks!! There are some positive sides as well. Let me explain few of them in this article", "pubDate": "July 09, 2022", "url": "college-pros", "tags": "college" };
var file$1 = "/Users/arif/Projects/notioncommerce/narrow-sea/src/pages/blogs/college-pros.md";
var url$1 = "/blogs/college-pros";
function rawContent$1() {
  return `
Ok, I admit I'm a student and some of my reasoning might be biased! So read with caution \u{1F636}

I guess you know that bashing on college/uni has become a norm, Which definitely they deserve & I'm also guilty of doing so. But besides doing full-time jobs & indie hacking on the side, I'm still studying computer science at Uni. And I decided not to drop out either.

<br/>
Why? Well, I actually made e list \u{1F447}

<br/>
<br/>

\u{1F449} The biggest reasoning I hear against college is the content you learn there is totally free online. Which is 100% true, If just learning about your field is your only priority then college will definitely not be for you.
But as I realised in the past couple of years that college isn't actually for learning! It's more about the experience!

<br/>

\u{1F449} You get to know different learners, make friends, do networking, and have weird & fun memories.

<br/>

\u{1F449} Being around a large amount of hard-working young people is a privilege. I truly get motivated seeing some of my classmates working hard. Whether it is for getting good grades/running a small business/preparing for a competition.

<br/>

\u{1F449} When You have to schedule yourself for different classes, and exams besides your own personal things (Hobbies/Job/Business..) You learn a lot about time management.

<br/>

\u{1F449} Paying tuition fees every semester hurt a lot, but In a way, it kind of pushed me to manage money better.

<br/>

\u{1F449} It's a great phase for exploring different stuff.
I'm quite certain I will run businesses as a career, but I'm don't wanna just quit everything and go all in right now. I'm using this student phase as an opportunity to explore things that I care about, whether it is programming/ marketing/ writing/ making videos/ audience building/ gardening or cooking. And tbh I also wanna try out standup comedy sometime next year. Coz why not? In general, you have so less responsibilities as a student and plenty of opportunities to explore.

<br/>

\u{1F449} Graduating can be a great way to give your parents a sense of pride. I don't know if it's just an Asian parent's thing, but my parents really wanna see me graduate.

<br/>

Now of course this ar just my own "positive" experience and I'm not saying anyone should do college or drop out. I just wanted to share some of my good experiences with college after bashing it all my life. \u{1F636}`;
}
function compiledContent$1() {
  return html$1;
}
function getHeadings$1() {
  return [];
}
function getHeaders$1() {
  console.warn("getHeaders() have been deprecated. Use getHeadings() function instead.");
  return getHeadings$1();
}
async function Content$1() {
  const { layout, ...content } = frontmatter$1;
  content.file = file$1;
  content.url = url$1;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }
  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }
  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }
  });
  const contentFragment = createVNode(Fragment, { "set:html": html$1 });
  return createVNode($$BlogPost, {
    file: file$1,
    url: url$1,
    content,
    frontmatter: content,
    headings: getHeadings$1(),
    rawContent: rawContent$1,
    compiledContent: compiledContent$1,
    "server:root": true,
    children: contentFragment
  });
}
Content$1[Symbol.for("astro.needsHeadRendering")] = false;
var _page9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  frontmatter: frontmatter$1,
  file: file$1,
  url: url$1,
  rawContent: rawContent$1,
  compiledContent: compiledContent$1,
  getHeadings: getHeadings$1,
  getHeaders: getHeaders$1,
  Content: Content$1,
  default: Content$1
}, Symbol.toStringTag, { value: "Module" }));
var html = `<p>Getting inspired by <a href="https://twitter.com/levelsio">Pieter Level\u2019s</a> <a href="https://levels.io/12-startups-12-months">12 startups in 12 months</a> and platforms like <a href="https://mobile.twitter.com/BuildSell30">#BuildSell30</a>, I wanted to kind of do the same. But being a student with a full-time job, I can\u2019t devote that much time to launch a product in such a short period of time!!</p>
<br>
<p>But like most other students I also get 2-3 weeks of semester break, 3 times a year! and technically I have 2 more years to complete my degree, So I may just be able to launch 6 products in 6 semester breaks and hopefully can generate some revenue from them.
Therefore, I won\u2019t have to depend on salaries after I graduate!</p>
<br>
<iframe class="w-full md:w-3/4 h-52 md:h-80" src="https://giphy.com/embed/l2Je8484XzudqBTKE" frameborder="0" allowfullscreen></iframe>
<br>
Ok, Here's the plan. I will code like "running a 100m race" during the semester breaks to launch a product. And during the semester "run on a marathon" to do things like research, marketing, bug fixing &#x26; feature updates.
<p>(Note: even though I\u2019m announcing this now, I actually started this last semester and already launched a product! So let\u2019s just assume I\u2019m from the past)</p>
<br>
<h1 id="launched-products">Launched Products</h1>
<br>
<h2 id="studymerge"><a href="https://studymerge.com">StudyMerge</a></h2>
<p><strong>launch date:</strong> 28th February 2022. <br>
<strong>description:</strong> Helping students to Study, Work, and Collaborate with Classmates Effortlessly.</p>
<br>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1654167386257/AZJVjO_2d.png" alt="Studymerge Cover"></p>
<br>
<br>
<h2 id="notioncommerce"><a href="https://notoncommerce.com">NotionCommerce</a></h2>
<p><strong>launch date:</strong> 2nd June 2022. <br>
<strong>description:</strong> Build your eCommerce right from Notion.</p>
<br>
<p><img src="https://www.notioncommerce.com/ss/product-page.png" alt="NotionCommerce Cover">
<br>
<br></p>
<h2 id="possible-upcoming-products">Possible Upcoming Products</h2>
<br>
<h2 id="onlybip"><a href="https://onlybip.com">OnlyBIP</a></h2>
<p><strong>description:</strong> Onlyfans for entreprenours/businesses building in public. <br>
<br></p>
<h2 id="realgraph">RealGraph</h2>
<p><strong>description:</strong> Supabase Realtime for Graph Database. <br>
<br>
<br></p>
<h2 id="self-promotion">Self Promotion</h2>
<p>These are the ideas I have right now. I will be updating this blog when I find or launch a new one.
Do subscribe to my newsletter or follow me on <a href="https://twitter.com/devarifhossain">Twitter</a> to follow my journey.</p>
<p>Ok Bye \u{1F44B}</p>`;
var frontmatter = { "layout": "../../layouts/BlogPost.astro", "title": "I am launching 6 startups in 6 semesters", "description": "Getting inspired by Pieter Level's 12 startups in 12 months, I wanted to kind of do the same. But being a student with a full-time job, I can't devote that much time to launch a product every month!! So I'm doing 6 startups in 6 semsters", "pubDate": "May 18, 2022", "url": "6s-6s", "tags": "work-life, startups", "heroImage": "/blogs/notion/notion-new-york-tokyo.png" };
var file = "/Users/arif/Projects/notioncommerce/narrow-sea/src/pages/blogs/6s-6s.md";
var url = "/blogs/6s-6s";
function rawContent() {
  return `
Getting inspired by [Pieter Level's](https://twitter.com/levelsio) [12 startups in 12 months](https://levels.io/12-startups-12-months) and platforms like [#BuildSell30](https://mobile.twitter.com/BuildSell30), I wanted to kind of do the same. But being a student with a full-time job, I can't devote that much time to launch a product in such a short period of time!!

<br/>

But like most other students I also get 2-3 weeks of semester break, 3 times a year! and technically I have 2 more years to complete my degree, So I may just be able to launch 6 products in 6 semester breaks and hopefully can generate some revenue from them.
Therefore, I won't have to depend on salaries after I graduate!

<br />
<iframe class="w-full md:w-3/4 h-52 md:h-80" src="https://giphy.com/embed/l2Je8484XzudqBTKE" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

<br />
Ok, Here's the plan. I will code like "running a 100m race" during the semester breaks to launch a product. And during the semester "run on a marathon" to do things like research, marketing, bug fixing & feature updates.

(Note: even though I'm announcing this now, I actually started this last semester and already launched a product! So let's just assume I'm from the past)

<br />

# Launched Products

<br />

## [StudyMerge](https://studymerge.com)

**launch date:** 28th February 2022. <br/>
**description:** Helping students to Study, Work, and Collaborate with Classmates Effortlessly.

<br />

![Studymerge Cover](https://cdn.hashnode.com/res/hashnode/image/upload/v1654167386257/AZJVjO_2d.png)

<br />
<br />

## [NotionCommerce](https://notoncommerce.com)

**launch date:** 2nd June 2022. <br />
**description:** Build your eCommerce right from Notion.

<br />

![NotionCommerce Cover](https://www.notioncommerce.com/ss/product-page.png)
<br />
<br />

## Possible Upcoming Products

<br />

## [OnlyBIP](https://onlybip.com)

**description:** Onlyfans for entreprenours/businesses building in public. <br/>
<br />

## RealGraph

**description:** Supabase Realtime for Graph Database. <br/>
<br />
<br />

## Self Promotion

These are the ideas I have right now. I will be updating this blog when I find or launch a new one.
Do subscribe to my newsletter or follow me on [Twitter](https://twitter.com/devarifhossain) to follow my journey.

Ok Bye \u{1F44B}
`;
}
function compiledContent() {
  return html;
}
function getHeadings() {
  return [{ "depth": 1, "slug": "launched-products", "text": "Launched Products" }, { "depth": 2, "slug": "studymerge", "text": "StudyMerge" }, { "depth": 2, "slug": "notioncommerce", "text": "NotionCommerce" }, { "depth": 2, "slug": "possible-upcoming-products", "text": "Possible Upcoming Products" }, { "depth": 2, "slug": "onlybip", "text": "OnlyBIP" }, { "depth": 2, "slug": "realgraph", "text": "RealGraph" }, { "depth": 2, "slug": "self-promotion", "text": "Self Promotion" }];
}
function getHeaders() {
  console.warn("getHeaders() have been deprecated. Use getHeadings() function instead.");
  return getHeadings();
}
async function Content() {
  const { layout, ...content } = frontmatter;
  content.file = file;
  content.url = url;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }
  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }
  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }
  });
  const contentFragment = createVNode(Fragment, { "set:html": html });
  return createVNode($$BlogPost, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    rawContent,
    compiledContent,
    "server:root": true,
    children: contentFragment
  });
}
Content[Symbol.for("astro.needsHeadRendering")] = false;
var _page10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  frontmatter,
  file,
  url,
  rawContent,
  compiledContent,
  getHeadings,
  getHeaders,
  Content,
  default: Content
}, Symbol.toStringTag, { value: "Module" }));
var pageMap = /* @__PURE__ */ new Map([["src/pages/index.astro", _page0], ["src/pages/side-projects/notioncommerce.md", _page1], ["src/pages/side-projects/studymerge.md", _page2], ["src/pages/privacy.md", _page3], ["src/pages/rss.xml.js", _page4], ["src/pages/refund.md", _page5], ["src/pages/blogs/noiton-convert-timezone.md", _page6], ["src/pages/blogs/good-old-days-of-web.md", _page7], ["src/pages/blogs/tools-notioncommerce.md", _page8], ["src/pages/blogs/college-pros.md", _page9], ["src/pages/blogs/6s-6s.md", _page10]]);
var renderers = [Object.assign({ "name": "astro:jsx", "serverEntrypoint": "astro/jsx/server.js", "jsxImportSource": "astro" }, { ssr: server_default }), Object.assign({ "name": "@astrojs/react", "clientEntrypoint": "@astrojs/react/client.js", "serverEntrypoint": "@astrojs/react/server.js", "jsxImportSource": "react" }, { ssr: _renderer1 })];
var _manifest = Object.assign(deserializeManifest({ "adapterName": "@astrojs/netlify/edge-functions", "routes": [{ "file": "", "links": ["assets/6s-6s.9762bdce.css", "assets/6s-6s.ba39336e.css"], "scripts": [{ "type": "external", "value": "hoisted.7b42760a.js" }], "routeData": { "route": "/", "type": "page", "pattern": "^\\/$", "segments": [], "params": [], "component": "src/pages/index.astro", "pathname": "/", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": ["assets/6s-6s.9762bdce.css", "assets/6s-6s.ba39336e.css"], "scripts": [], "routeData": { "route": "/side-projects/notioncommerce", "type": "page", "pattern": "^\\/side-projects\\/notioncommerce\\/?$", "segments": [[{ "content": "side-projects", "dynamic": false, "spread": false }], [{ "content": "notioncommerce", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/side-projects/notioncommerce.md", "pathname": "/side-projects/notioncommerce", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": ["assets/6s-6s.9762bdce.css", "assets/6s-6s.ba39336e.css"], "scripts": [], "routeData": { "route": "/side-projects/studymerge", "type": "page", "pattern": "^\\/side-projects\\/studymerge\\/?$", "segments": [[{ "content": "side-projects", "dynamic": false, "spread": false }], [{ "content": "studymerge", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/side-projects/studymerge.md", "pathname": "/side-projects/studymerge", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": ["assets/6s-6s.9762bdce.css"], "scripts": [], "routeData": { "route": "/privacy", "type": "page", "pattern": "^\\/privacy\\/?$", "segments": [[{ "content": "privacy", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/privacy.md", "pathname": "/privacy", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "routeData": { "route": "/rss.xml", "type": "endpoint", "pattern": "^\\/rss\\.xml$", "segments": [[{ "content": "rss.xml", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/rss.xml.js", "pathname": "/rss.xml", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": ["assets/6s-6s.9762bdce.css"], "scripts": [], "routeData": { "route": "/refund", "type": "page", "pattern": "^\\/refund\\/?$", "segments": [[{ "content": "refund", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/refund.md", "pathname": "/refund", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": ["assets/6s-6s.9762bdce.css", "assets/6s-6s.ba39336e.css"], "scripts": [], "routeData": { "route": "/blogs/noiton-convert-timezone", "type": "page", "pattern": "^\\/blogs\\/noiton-convert-timezone\\/?$", "segments": [[{ "content": "blogs", "dynamic": false, "spread": false }], [{ "content": "noiton-convert-timezone", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/blogs/noiton-convert-timezone.md", "pathname": "/blogs/noiton-convert-timezone", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": ["assets/6s-6s.9762bdce.css", "assets/6s-6s.ba39336e.css"], "scripts": [], "routeData": { "route": "/blogs/good-old-days-of-web", "type": "page", "pattern": "^\\/blogs\\/good-old-days-of-web\\/?$", "segments": [[{ "content": "blogs", "dynamic": false, "spread": false }], [{ "content": "good-old-days-of-web", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/blogs/good-old-days-of-web.md", "pathname": "/blogs/good-old-days-of-web", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": ["assets/6s-6s.9762bdce.css", "assets/6s-6s.ba39336e.css"], "scripts": [], "routeData": { "route": "/blogs/tools-notioncommerce", "type": "page", "pattern": "^\\/blogs\\/tools-notioncommerce\\/?$", "segments": [[{ "content": "blogs", "dynamic": false, "spread": false }], [{ "content": "tools-notioncommerce", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/blogs/tools-notioncommerce.md", "pathname": "/blogs/tools-notioncommerce", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": ["assets/6s-6s.9762bdce.css", "assets/6s-6s.ba39336e.css"], "scripts": [], "routeData": { "route": "/blogs/college-pros", "type": "page", "pattern": "^\\/blogs\\/college-pros\\/?$", "segments": [[{ "content": "blogs", "dynamic": false, "spread": false }], [{ "content": "college-pros", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/blogs/college-pros.md", "pathname": "/blogs/college-pros", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": ["assets/6s-6s.9762bdce.css", "assets/6s-6s.ba39336e.css"], "scripts": [], "routeData": { "route": "/blogs/6s-6s", "type": "page", "pattern": "^\\/blogs\\/6s-6s\\/?$", "segments": [[{ "content": "blogs", "dynamic": false, "spread": false }], [{ "content": "6s-6s", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/blogs/6s-6s.md", "pathname": "/blogs/6s-6s", "_meta": { "trailingSlash": "ignore" } } }], "site": "https://notioncommerce.com/", "base": "/", "markdown": { "drafts": false, "syntaxHighlight": "shiki", "shikiConfig": { "langs": [], "theme": "github-dark", "wrap": false }, "remarkPlugins": [], "rehypePlugins": [], "remarkRehype": {}, "extendDefaultPlugins": false, "isAstroFlavoredMd": false }, "pageMap": null, "renderers": [], "entryModules": { "\0@astrojs-ssr-virtual-entry": "entry.js", "/Users/arif/Projects/notioncommerce/narrow-sea/src/components/MobileNav": "MobileNav.56c36978.js", "@astrojs/react/client.js": "client.7e0446bf.js", "/astro/hoisted.js?q=0": "hoisted.7b42760a.js", "astro:scripts/before-hydration.js": "" }, "assets": ["/assets/6s-6s.9762bdce.css", "/assets/6s-6s.ba39336e.css", "/MobileNav.56c36978.js", "/client.7e0446bf.js", "/favicon.ico", "/hoisted.7b42760a.js", "/logo.png", "/logo.svg", "/n-e.png", "/placeholder-about.jpg", "/placeholder-hero.jpg", "/placeholder-social.jpg", "/rocket.png", "/blogs/good-old-days-of-web.png", "/chunks/index.10c92296.js", "/ss/product-page.png", "/blogs/notion/notion-new-york-tokyo.png", "/blogs/notion/notion-utc-tokyo.png", "/blogs/notion/tools-notioncommerce.jpg", "/ss/hiw/1.jpg", "/ss/hiw/1.png", "/ss/hiw/2.jpg", "/ss/hiw/2.png", "/ss/hiw/3.jpg", "/ss/hiw/3.png"] }), {
  pageMap,
  renderers
});
var _args = void 0;
var _exports = createExports(_manifest);
var _default = _exports["default"];
var _start = "start";
if (_start in adapter) {
  adapter[_start](_manifest, _args);
}
export {
  _default as default
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/**
 * @license React
 * react-dom-server-legacy.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * shortdash - https://github.com/bibig/node-shorthash
 *
 * @license
 *
 * (The MIT License)
 *
 * Copyright (c) 2013 Bibig <bibig@me.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
