git config --global user.email "rpt@altervista.org"
git config --global user.name "Travis CI"

git branch deploy
git checkout deploy

sed -i '/dist/d' .gitignore

rm -rf .tscache
rm -rf .vscode
rm -rf data/database
rm -rf src
rm .env
rm .travis.yml
rm CONTRIBUTING.md
rm Gruntfile.cjs
rm LICENSE
rm node_modules
rm post_build.sh
rm Procfile_inspect
rm *.md
rm *.bat
rm tsconfig.json
rm tslint.json
rm webpack.config.cjs

git add .
git commit -m "Travis build"
git push -f https://${GH_TOKEN}@github.com/giovannipessiva/l4w deploy > git.log 2>&1
cat git.log | sed -e 's/\/\/.*@github/\/\/[double secured]/'
rm git.log
