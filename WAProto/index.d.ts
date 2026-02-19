export namespace proto {
    interface IADVEncryptionKey {
        keyId?: (Uint8Array|null);
        keyType?: (Uint8Array|null);
        keyData?: (Uint8Array|null);
    }

    interface IADVKeyIndexList {
        rawId?: (number|null);
        timestamp?: (number|Long|null);
        currentIndex?: (number|null);
        validIndexes?: (number[]|null);
    }

    interface IMessage {
        conversation?: (string|null);
        senderKeyDistributionMessage?: (ISenderKeyDistributionMessage|null);
        imageMessage?: (IImageMessage|null);
        contactMessage?: (IContactMessage|null);
        locationMessage?: (ILocationMessage|null);
        extendedTextMessage?: (IExtendedTextMessage|null);
        documentMessage?: (IDocumentMessage|null);
        audioMessage?: (IAudioMessage|null);
        videoMessage?: (IVideoMessage|null);
        protocolMessage?: (IProtocolMessage|null);
        templateMessage?: (ITemplateMessage|null);
        buttonsMessage?: (IButtonsMessage|null);
        listMessage?: (IListMessage|null);
        reactionMessage?: (IReactionMessage|null);
        pollCreationMessage?: (IPollCreationMessage|null);
        pollUpdateMessage?: (IPollUpdateMessage|null);
    }

    interface IWebMessageInfo {
        key: IMessageKey;
        message?: (IMessage|null);
        messageTimestamp?: (number|Long|null);
        status?: (WebMessageInfo.Status|null);
        participant?: (string|null);
        pushName?: (string|null);
        ignore?: (boolean|null);
        starred?: (boolean|null);
        broadcast?: (boolean|null);
        ephemeralDuration?: (number|null);
    }

    namespace WebMessageInfo {
        enum Status {
            ERROR = 0,
            PENDING = 1,
            SERVER_ACK = 2,
            DELIVERED = 3,
            READ = 4,
            PLAYED = 5
        }
    }

    interface IMessageKey {
        remoteJid?: (string|null);
        fromMe?: (boolean|null);
        id?: (string|null);
        participant?: (string|null);
    }

    interface IExtendedTextMessage {
        text?: (string|null);
        matchedText?: (string|null);
        canonicalUrl?: (string|null);
        description?: (string|null);
        title?: (string|null);
        textArgb?: (number|null);
        backgroundArgb?: (number|null);
        font?: (IExtendedTextMessage.FontType|null);
        previewType?: (IExtendedTextMessage.PreviewType|null);
        contextInfo?: (IContextInfo|null);
    }

    interface IContextInfo {
        stanzaId?: (string|null);
        participant?: (string|null);
        quotedMessage?: (IMessage|null);
        remoteJid?: (string|null);
        mentionedJid?: (string[]|null);
        conversionSource?: (string|null);
        conversionData?: (Uint8Array|null);
        conversionDelaySeconds?: (number|null);
        forwardingScore?: (number|null);
        isForwarded?: (boolean|null);
        ephemeralExpiration?: (number|null);
        externalAdReply?: (IAdReplyInfo|null);
    }
}
