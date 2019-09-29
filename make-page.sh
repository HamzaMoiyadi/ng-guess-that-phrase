usage(){
    echo "-p | --page-name \t Page Name"
}

while [ "$1" != "" ]; do
    case $1 in
        -p | --page-name )           shift
                                pageName=$1
                                ;;
        -i | --interactive )    interactive=1
                                ;;
        -h | --help )           usage
                                exit
                                ;;
        * )                     usage
                                exit 1
    esac
    shift
done
# TODO: Make Class Name from pageName given in kebab-case or whatever
# Make module.ts
ng g module pages/$pageName
# Make Routing ts
touch src/app/pages/$pageName/"$pageName"-routing.module.ts
# Make page folder and content
ng g c pages/"$pageName"/page/"$pageName" --flat --prefix=game --module=pages/"$pageName"/"$pageName".module
sed -i 's/component/page/g' src/app/pages/"$pageName"/page/"$pageName".component.ts 
sed -i 's/Component\s/Page /g'  src/app/pages/"$pageName"/page/"$pageName".component.ts 
# TODO: Add script to convert module.ts imports to page as well
# Make Components Folder
mkdir src/app/pages/$pageName/components