package com.example.IPLFantasy.web.controllers;

import com.example.IPLFantasy.web.dto.PlayersDto;
import com.example.IPLFantasy.web.dto.TeamDto;
import com.example.IPLFantasy.web.dto.UserDto;
import com.example.IPLFantasy.web.repository.PlayerRepository;
import com.example.IPLFantasy.web.repository.PlayingxiRepository;
import com.example.IPLFantasy.web.repository.TeamRepository;
import com.example.IPLFantasy.web.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
public class TeamDataController {
    @Autowired
    private PlayerRepository playerrepo;
    @Autowired
    public TeamRepository teamrepo;
    @Autowired
    UserRepository userrepo;
    @Autowired
    PlayingxiRepository playingxirepo;
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


    @RequestMapping(value = "api/getSquadData", method = RequestMethod.POST, produces = {"application/json"})
    public @ResponseBody List<TeamDto> getSquad(@RequestParam("email") String email){

        return teamrepo.findByEmail(email);
    }
    @RequestMapping(value = "api/PlayerToAdd", method = RequestMethod.POST, produces = {"application/json"})
    public @ResponseBody
    ResponseEntity<String> addPlayers(@RequestParam("email") String email, @RequestParam("Id") Integer Id) {
        PlayersDto playerid = playerrepo.findId(Id);
        String team = playerid.getTeam();
        String Name = playerid.getName();
        String Notes = playerid.getNotes();
        String type = playerid.getType();


        String teamName = userrepo.findTeamName(email);


            List<TeamDto> players = teamrepo.findByEmail(email);
            if (players.size() < 15) {
                teamrepo.insertTeam(Id, teamName, email, Name, Notes, type, team);

                playerrepo.deletePlayer(Id);
                return new ResponseEntity<>("New player added!", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Please remove a player before adding another", HttpStatus.OK);
            }

    }

    @RequestMapping(value = "api/PlayerToRemove", method = RequestMethod.POST, produces = {"application/json"})
    public @ResponseBody
    ResponseEntity<String> removePlayers(@RequestParam("Id") Integer Id) {
        TeamDto playerid = teamrepo.findId(Id);
        String team = playerid.getTeam();
        String Name = playerid.getName();
        String Notes = playerid.getNotes();
        String type = playerid.getType();
        teamrepo.deleteTeam(Id);
        playerrepo.insertPlayer(Id, Name, Notes, type, team);


        return new ResponseEntity<>("Player removed!", HttpStatus.OK);
    }
    @RequestMapping(value = "api/RemovePlaying11", method = RequestMethod.POST, produces = {"application/json"})
    public @ResponseBody
    ResponseEntity<String> removePlayeringXI(@RequestParam("Id") Integer Id) {
        playingxirepo.deleteTeam(Id);
        return new ResponseEntity<>("Player removed!", HttpStatus.OK);
    }

    @RequestMapping(value = "api/addPlaying11", method = RequestMethod.POST, produces = {"application/json"})
    public @ResponseBody
    ResponseEntity<String> addPlayingXI(@RequestParam("Id") Integer Id) {
        TeamDto playerid = teamrepo.findId(Id);
        String team = playerid.getTeam();
        String Name = playerid.getName();
        String Notes = playerid.getNotes();
        String type = playerid.getType();
        String email = playerid.getEmail();
        String teamName = playerid.getTeamName();


        List<TeamDto> players = teamrepo.findByEmail(email);
        if (players.size() < 11) {
            playingxirepo.insertTeam(Id, teamName, email, Name, Notes, type, team);

            return new ResponseEntity<>("New player added!", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Please remove a player before adding another", HttpStatus.OK);
        }
    }
    @RequestMapping(value = "api/getPlaying11", method = RequestMethod.POST, produces = {"application/json"})
    public @ResponseBody List<TeamDto> getPlaying11(@RequestParam("email") String email){

        return playingxirepo.findByEmail(email);
    }

}
