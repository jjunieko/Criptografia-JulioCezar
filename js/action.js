class Action {
    alphabet = "abcdefghijklmnopqrstuvwxyz";
    text;
    encryptionRate = 3;
    totalChar = this.alphabet.length;

    constructor(str, encryptionRate = null) {
        this.text = Array.from(str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase());
        if (encryptionRate) {
            this.encryptionRate = encryptionRate;
        }
    }

    encrypt(find) {
        find = +find + +this.encryptionRate;

        var char = this.alphabet.charAt(find);

        if (find >= 26) {
            var reset = find - this.totalChar;
            char = this.alphabet.charAt(reset);
        }

        return char;
    }

    decrypt(find) {
        find += this.encryptionRate;

        var char = this.alphabet.charAt(find);

        if (find < 0) {
            var reset = find + this.totalChar;
            char = this.alphabet.charAt(reset);
        }

        return char;
    }

    magic(action) {
        var result = [];
        var i = 0;

        for (i=0; i < this.text.length; i++) {
            if (this.text[i] == " "){
                result[i] = " ";
                continue;
            }

            var find = this.alphabet.search(this.text[i]);

            switch (action) {
                case "encrypt":
                    result[i] = this.encrypt(find);
                    break;
                case "decrypt":
                    result[i] = this.decrypt(find);
                    break;
            }

        }

        return result.join('');
    }
}
