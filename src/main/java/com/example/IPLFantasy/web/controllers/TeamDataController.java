package com.example.IPLFantasy.web.controllers;

import com.example.IPLFantasy.web.dto.PlayersDto;
import com.example.IPLFantasy.web.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TeamDataController {
    @Autowired
    PlayerRepository playerrepo;
    @RequestMapping(value = "/api/getCSKData", method = RequestMethod.GET, produces = { "application/json"})
    public @ResponseBody
    List<PlayersDto> CSKData(){
        List<PlayersDto> players = playerrepo.findByTeam("CSK");
        return players;
    }
    @RequestMapping(value = "/api/getDCData", method = RequestMethod.GET, produces = { "application/json"})
    public @ResponseBody
    List<PlayersDto> DCData(){
        List<PlayersDto> players = playerrepo.findByTeam("DC");
        return players;
    }
    @RequestMapping(value = "/api/getMIData", method = RequestMethod.GET, produces = { "application/json"})
    public @ResponseBody
    List<PlayersDto> MIData(){
        List<PlayersDto> players = playerrepo.findByTeam("MI");
        return players;
    }
    @RequestMapping(value = "/api/getKKRData", method = RequestMethod.GET, produces = { "application/json"})
    public @ResponseBody
    List<PlayersDto> KKRData(){
        List<PlayersDto> players = playerrepo.findByTeam("KKR");
        return players;
    }
    @RequestMapping(value = "/api/getKXIPData", method = RequestMethod.GET, produces = { "application/json"})
    public @ResponseBody
    List<PlayersDto> KXIPData(){
        List<PlayersDto> players = playerrepo.findByTeam("KXIP");
        return players;
    }
    @RequestMapping(value = "/api/getRCBData", method = RequestMethod.GET, produces = { "application/json"})
    public @ResponseBody
    List<PlayersDto> RCBData(){
        List<PlayersDto> players = playerrepo.findByTeam("RCB");
        return players;
    }
    @RequestMapping(value = "/api/getRRData", method = RequestMethod.GET, produces = { "application/json"})
    public @ResponseBody
    List<PlayersDto> RRData(){
        List<PlayersDto> players = playerrepo.findByTeam("RR");
        return players;
    }
    @RequestMapping(value = "/api/getSRHData", method = RequestMethod.GET, produces = { "application/json"})
    public @ResponseBody
    List<PlayersDto> SRHData(){
        List<PlayersDto> players = playerrepo.findByTeam("SRH");
        return players;
    }

}
