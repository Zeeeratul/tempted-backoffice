Le backoffice est host sur un EC2 AWS.  
Pour update le backoffice il faut d'abord push les mises à jour sur ce repo github.

Puis se connecter a EC2 par SSH.  
(Pour créer une paire de clés SSH https://eu-north-1.console.aws.amazon.com/ec2/home?region=eu-north-1#KeyPairs: ou regarder cette vidéo https://www.youtube.com/watch?v=T-Pum2TraX4&t=350s).

Une fois connecté au EC2, on va dans le dossier tempted-backoffice "cd tempted-backoffice".  
Actuellement le dossier "tempted-backoffice" est lié à mon repo github personnel (https://github.com/Zeeeratul/tempted-backoffice) qui est mis a jour en parallele de https://github.com/galadrimteam/tempted-backoffice car je n'ai pas les credentials de Galadrimteam  
Donc il faudra git clone le repo https://github.com/galadrimteam/tempted-backoffice en ayant les droits, ou bien mettre ce repo github en public

On "git pull" les modifications puis on fait "pm2 restart pm2.config.js".
