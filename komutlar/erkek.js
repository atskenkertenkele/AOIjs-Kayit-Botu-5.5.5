module.exports = {
    name:"e",
    aliased:["man", "erkek", "boy"],
    code:`
    $addCmdReactions[emoji ismi]
    $giveRole[sunucu id;$mentioned[1];erkekrolid]
    $takeRole[sunucu id;$mentioned[1];kayıtsızrolid]
    
    $changeNickname[$mentioned[1]; $noMentionMessage[1] | $noMentionMessage[2]]
   
    $channelSendMessage[chatid;<@$mentioned[1]> Aramıza Katıldı Ona Hoş Geldin Diyelim <#kurallarkanalıid> Kanalını Okumuş Sayılacaksın. İyi Eğlenceler.]
    $channelSendMessage[erkekkayıtlogid;
   
    **Kayıt Edilen Kullanıcı:** \`$userTag[$mentioned[1]]\` \`($mentioned[1])\`
    
    **Kayıt Eden Yetkili:** \`$userTag[$authorID]\` \`($authorID)\`
    
    **Kullanıcının Yeni İsmi:** \` $noMentionMessage[1] | $noMentionMessage[2]\`
    
    **Kayıt Türü:** \`Erkek ♂️\`
    **Verilen Rol:** \`$roleName[erkekrolid]\`
    
       
    $onlyIf[$noMentionMessage[2]!=;
    **Kişinin Yaşını Girin!**{delete:7s}]
    
    $onlyIf[$noMentionMessage[1]!=;
    **Kişinin Adını Girin!**{delete:7s}]
    
    $onlyIf[$mentioned[1]!=;
    **Bir Kişi Etiketleyin!**{delete:7s}]

    $onlyForRoles[kayıtyetkilisiid;Bu komuda **ERİŞİM** yektin yok.]
    $onlyForServers[sunucuid;]
    `
    }
