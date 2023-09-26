import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Connection, Keypair, LAMPORTS_PER_SOL } from '@solana/web3.js';

export type SolanaFormsDemo = {
  "version": "0.1.0",
  "name": "solana_forms_demo",
  "instructions": [
    {
      "name": "create",
      "accounts": [
        {
          "name": "mainForm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "arg1",
          "type": "u128"
        },
        {
          "name": "arg2",
          "type": {
            "vec": "string"
          }
        },
        {
          "name": "arg3",
          "type": {
            "vec": "string"
          }
        },
        {
          "name": "arg4",
          "type": "string"
        },
        {
          "name": "arg5",
          "type": "string"
        },
        {
          "name": "arg6",
          "type": "u128"
        },
        {
          "name": "arg7",
          "type": "string"
        },
        {
          "name": "arg8",
          "type": "u128"
        },
        {
          "name": "arg9",
          "type": {
            "vec": "string"
          }
        },
        {
          "name": "arg10",
          "type": {
            "vec": "string"
          }
        },
        {
          "name": "arg11",
          "type": "u128"
        },
        {
          "name": "arg12",
          "type": {
            "vec": "string"
          }
        },
        {
          "name": "arg13",
          "type": {
            "vec": "string"
          }
        },
        {
          "name": "arg14",
          "type": {
            "vec": "string"
          }
        },
        {
          "name": "arg15",
          "type": "string"
        },
        {
          "name": "arg16",
          "type": "string"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "mainForm",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "signerAddress",
            "type": "publicKey"
          },
          {
            "name": "version",
            "type": "u64"
          },
          {
            "name": "fr5pqi",
            "type": "u128"
          },
          {
            "name": "frDuif",
            "type": {
              "vec": "string"
            }
          },
          {
            "name": "fr6i34",
            "type": {
              "vec": "string"
            }
          },
          {
            "name": "fr8xjs",
            "type": "string"
          },
          {
            "name": "fr9c3f",
            "type": "string"
          },
          {
            "name": "fr4ok6",
            "type": "u128"
          },
          {
            "name": "frB3ub",
            "type": "string"
          },
          {
            "name": "fr1z7o",
            "type": "u128"
          },
          {
            "name": "frD8rw",
            "type": {
              "vec": "string"
            }
          },
          {
            "name": "frDy3l",
            "type": {
              "vec": "string"
            }
          },
          {
            "name": "fr6f68",
            "type": "u128"
          },
          {
            "name": "fr47yy",
            "type": {
              "vec": "string"
            }
          },
          {
            "name": "frGh3o",
            "type": {
              "vec": "string"
            }
          },
          {
            "name": "frFbba",
            "type": {
              "vec": "string"
            }
          },
          {
            "name": "frHhzp",
            "type": "string"
          },
          {
            "name": "singleText1",
            "type": "string"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "MainFormCreated",
      "fields": [
        {
          "name": "signerAddress",
          "type": "publicKey",
          "index": false
        }
      ]
    }
  ]
};


describe("hello", () => {
  let provider = anchor.AnchorProvider.env();

  // Configure the client to use the local cluster.
  anchor.setProvider(provider);

  const authority = provider.wallet.publicKey;

  const program = anchor.workspace.SolanaFormsDemo as Program<SolanaFormsDemo>;


  it("Is created!", async () => {

    // ----------------------------------------------------------
    // Human's wallet
    const human = Keypair.generate();
    const connection = anchor.AnchorProvider.env().connection;
    // Request sol airdrop (for human to be able to do transactions)
    await requestAirdrop(connection, human.publicKey, LAMPORTS_PER_SOL)
    // ----------------------------------------------------------

    let [mainForm] = anchor.web3.PublicKey.findProgramAddressSync(
      [
        Buffer.from("MainForm"),
        human.publicKey.toBuffer()
      ],
      program.programId
    );

    // Add your test here.
    const tx = await program.methods.create(
      new anchor.BN(1_234),
      ["A", "B"],
      ["B", "B"],
      "hello",
      "1",
      new anchor.BN(2),
      "",
      new anchor.BN(3),
      ["2023-10-10", "2023-10-11"],
      ["2023-10-10", "2023-10-11"],
      new anchor.BN(8),
      ["10:10:00", "10:11:00"],
      ["A"],
      ["1", "3"],
      "2023-10-10",
      "y@test.org"
    ).accounts(
      {
        mainForm,
        //authority,
        authority: human.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      }
    )
      .signers(
        [human]
      )
      .rpc();
    console.log("Your transaction signature", tx);

    // Fetch the state struct from the network.
    const accountState = await program.account.mainForm.fetch(mainForm);
    console.log("account state: ", accountState);

  });
});

async function requestAirdrop(connection: Connection, address: anchor.web3.PublicKey, lamports: number) {
  const tx = await connection.requestAirdrop(address, lamports);
  await connection.confirmTransaction(tx);
}
