Le backoffice est host sur AWS, EC2.  
Pour update le backoffice il faut d'abord push les mises à jour sur ce repo github.  
Puis se connecter a EC2 par SSH.  
(Pour créer une paire de clés SSH https://eu-north-1.console.aws.amazon.com/ec2/home?region=eu-north-1#KeyPairs: ou regarder cette vidéo https://www.youtube.com/watch?v=T-Pum2TraX4&t=350s).

Une fois connecté au EC2, on va dans le dossier tempted-backoffice "cd tempted-backoffice".  
On "git pull" les modifications puis on fait "pm2 restart pm2.config.js".
