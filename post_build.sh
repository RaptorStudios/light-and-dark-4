git config --global user.email "giovannipessiva@users.noreply.github.com"
git config --global user.name "Travis CI"

git add . "client/*.js"
git status
git commit -m "Travis build"
git status

#git clone -b publish https://${GH_TOKEN}@github.com/thingsinjars/hardy.io $HOME/temp

git push https://${GH_TOKEN}@github.com/giovannipessiva/l4w