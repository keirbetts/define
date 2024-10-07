

export const mockWord = "violent";

export const mockGetWordResponse = {
  data: [
    {
      "meta": {
        "id": "violent",
        "uuid": "f95314d8-40e1-47a2-afe9-d488629481c5",
        "sort": "220098100",
        "src": "collegiate",
        "section": "alpha",
        "stems": [
          "violent",
          "violently"
        ],
        "offensive": false
      },
      "hwi": {
        "hw": "violent",
        "prs": [
          {
            "mw": "ˈvī-ə-lənt",
            "sound": {
              "audio": "violen02",
              "ref": "c",
              "stat": "1"
            }
          }
        ]
      },
      "fl": "adjective",
      "def": [
        {
          "sseq": [
            [
              [
                "pseq",
                [
                  [
                    "sense",
                    {
                      "sn": "1 a (1)",
                      "dt": [
                        [
                          "text",
                          "{bc}marked by the use of usually harmful or destructive physical force "
                        ],
                        [
                          "vis",
                          [
                            {
                              "t": "a {wi}violent{/wi} attack"
                            },
                            {
                              "t": "{wi}violent{/wi} crime"
                            },
                            {
                              "t": "The peaceful demonstration turned {wi}violent{/wi}."
                            }
                          ]
                        ]
                      ]
                    }
                  ],
                  [
                    "sense",
                    {
                      "sn": "(2)",
                      "dt": [
                        [
                          "text",
                          "{bc}showing or including {a_link|violence} "
                        ],
                        [
                          "vis",
                          [
                            {
                              "t": "{wi}violent{/wi} movies"
                            }
                          ]
                        ]
                      ]
                    }
                  ]
                ]
              ],
              [
                "sense",
                {
                  "sn": "b",
                  "dt": [
                    [
                      "text",
                      "{bc}extremely powerful or forceful and capable of causing damage "
                    ],
                    [
                      "vis",
                      [
                        {
                          "t": "{wi}violent{/wi} storms"
                        },
                        {
                          "t": "{wi}violent{/wi} coughing"
                        }
                      ]
                    ]
                  ]
                }
              ]
            ],
            [
              [
                "sense",
                {
                  "sn": "2",
                  "dt": [
                    [
                      "text",
                      "{bc}caused by physical force or violence {bc}not natural "
                    ],
                    [
                      "vis",
                      [
                        {
                          "t": "a {wi}violent{/wi} death"
                        }
                      ]
                    ]
                  ]
                }
              ]
            ],
            [
              [
                "sense",
                {
                  "sn": "3 a",
                  "dt": [
                    [
                      "text",
                      "{bc}emotionally agitated to the point of using harmful physical force "
                    ],
                    [
                      "vis",
                      [
                        {
                          "t": "became {wi}violent{/wi} after an insult"
                        }
                      ]
                    ]
                  ]
                }
              ],
              [
                "sense",
                {
                  "sn": "b",
                  "dt": [
                    [
                      "text",
                      "{bc}prone to commit acts of violence "
                    ],
                    [
                      "vis",
                      [
                        {
                          "t": "{wi}violent{/wi} prison inmates"
                        }
                      ]
                    ]
                  ]
                }
              ]
            ],
            [
              [
                "sense",
                {
                  "sn": "4 a",
                  "dt": [
                    [
                      "text",
                      "{bc}notably forceful, furious, or vehement "
                    ],
                    [
                      "vis",
                      [
                        {
                          "t": "a {wi}violent{/wi} argument"
                        },
                        {
                          "t": "a {wi}violent{/wi} denunciation"
                        }
                      ]
                    ]
                  ]
                }
              ],
              [
                "sense",
                {
                  "sn": "b",
                  "dt": [
                    [
                      "text",
                      "{bc}{sx|extreme||}, {sx|intense||} "
                    ],
                    [
                      "vis",
                      [
                        {
                          "t": "{wi}violent{/wi} pain"
                        },
                        {
                          "t": "{wi}violent{/wi} colors"
                        }
                      ]
                    ]
                  ]
                }
              ]
            ]
          ]
        }
      ],
      "uros": [
        {
          "ure": "vi*o*lent*ly",
          "fl": "adverb"
        }
      ],
      "et": [
        [
          "text",
          "Middle English, from Anglo-French, from Latin {it}violentus{/it}; akin to Latin {it}vis{/it} strength {ma}{mat|vim|}{/ma}"
        ]
      ],
      "date": "14th century{ds||1|a|1}",
      "shortdef": [
        "marked by the use of usually harmful or destructive physical force",
        "showing or including violence",
        "extremely powerful or forceful and capable of causing damage"
      ]
    },
    {
      "meta": {
        "id": "violent storm",
        "uuid": "87780292-f95b-4958-abcf-15a3c13297db",
        "sort": "220098200",
        "src": "collegiate",
        "section": "alpha",
        "stems": [
          "violent storm"
        ],
        "offensive": false
      },
      "hwi": {
        "hw": "violent storm"
      },
      "fl": "noun",
      "def": [
        {
          "sseq": [
            [
              [
                "sense",
                {
                  "dt": [
                    [
                      "text",
                      "{bc}{sx|storm||1c(1)} {dx}see {dxt|Beaufort Scale Table|beaufort scale|table}{/dx}"
                    ]
                  ]
                }
              ]
            ]
          ]
        }
      ],
      "date": "circa 1881",
      "shortdef": [
        "storm"
      ]
    }
  ],
  status: 200
};

export const mockGetWordsErrorResposne = {
  status: 500,
  data: "Failed to get word."
};